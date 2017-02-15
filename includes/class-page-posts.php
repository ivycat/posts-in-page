<?php
/**
 *	Page Posts Class, main workhorse for the ic_add_posts shortcode.
 */

if ( ! function_exists( 'add_action' ) ) {
	wp_die( 'You are trying to access this file in a manner not allowed.', 'Direct Access Forbidden', array( 'response' => '403' ) );
}

class ICPagePosts {

	protected $args = array();

	public function __construct( $atts ) {
		$this->set_default_args(); //set default args
		$this->set_args( $atts );
	}

	protected function set_default_args() {
		$this->args = array(
			'post_type'      => 'post',
			'post_status'    => 'publish',
			'orderby'        => 'date',
			'order'          => 'DESC',
			'paginate'       => false,
			'template'       => false,
			'label_next'     => __( 'Next', 'posts-in-page' ),
			'label_previous' => __( 'Previous', 'posts-in-page' ),
			'none_found'     => '',
		);
	}

	/**
	 *	Output's the posts
	 *
	 *	@return string output of template file
	 */
	public function output_posts() {
		if ( ! $this->args ) {
					return '';
		}
		$page_posts = apply_filters( 'posts_in_page_results', new WP_Query( $this->args ) ); // New WP_Query object
		$output = '';
		if ( $page_posts->have_posts() ) {
			while ( $page_posts->have_posts() ):
			$output .= self::add_template_part( $page_posts );
			endwhile;
			$output .= ( $this->args['paginate'] ) ? '<div class="pip-nav">' . apply_filters( 'posts_in_page_paginate', $this->paginate_links( $page_posts ) ) . '</div>' : '';
		} else {
			$output = '<div class="post hentry ivycat-post"><span class="pip-not-found">' . esc_html( $this->args['none_found'] ) . '</span></div>';
		}
		wp_reset_postdata();

		remove_filter( 'excerpt_more', array( &$this, 'custom_excerpt_more' ) );

		return $output;
	}

	protected function paginate_links( $posts ) {
		global $wp_query;
		$page_url = home_url( '/' . $wp_query->post->post_name . '/' );
		$page = isset( $_GET['page'] ) ? $_GET['page'] : 1;
		$total_pages = $posts->max_num_pages;
		$per_page = $posts->query_vars['posts_per_page'];
		$curr_page = ( isset( $posts->query_vars['paged'] ) && $posts->query_vars['paged'] > 0 ) ? $posts->query_vars['paged'] : 1;
		$prev = ( $curr_page && $curr_page > 1 ) ? '<li><a href="' . $page_url . '?page=' . ( $curr_page - 1 ) . '">' . $this->args['label_previous'] . '</a></li>' : '';
		$next = ( $curr_page && $curr_page < $total_pages ) ? '<li><a href="' . $page_url . '?page=' . ( $curr_page + 1 ) . '">' . $this->args['label_next'] . '</a></li>' : '';
		return '<ul>' . $prev . $next . '</ul>';
	}


	/**
	 *	Build additional Arguments for the WP_Query object
	 *
	 *	@param array $atts Attritubes for building the $args array.
	 */
	protected function set_args( $atts ) {
		global $wp_query;
		$this->args['posts_per_page'] = get_option( 'posts_per_page' );
		// parse the arguments using the defaults
		$this->args = wp_parse_args( $atts, $this->args );
		// multiple post types are indicated, pass as an array
		if ( strpos( ',', $this->args['post_type'] ) ) {
			$post_types = explode( ',', $this->args['post_type'] );
			$this->args['post_type'] = $post_types;
		}

		// Show specific posts by ID
		if ( isset( $atts['ids'] ) ) {
			$post_ids = explode( ',', $atts['ids'] );
			$this->args['post__in'] = $post_ids;
			$this->args['posts_per_page'] = count( $post_ids );
		}

		// Use a specified template
		if ( isset( $atts['template'] ) ) {
					$this->args['template'] = $atts['template'];
		}

		// get posts in a certain category by name (slug)
		if ( isset( $atts['category'] ) ) {
			$this->args['category_name'] = $atts['category'];
		} elseif ( isset( $atts['cats'] ) ) {
// get posts in a certain category by id
			$this->args['cat'] = $atts['cats'];
		}

		// Do a tax query, tax and term a required.
		if ( isset( $atts['tax'] ) ) {
			if ( isset( $atts['term'] ) ) {
				$terms = explode( ',', $atts['term'] );
				$this->args['tax_query'] = array(
					array( 'taxonomy' => $atts['tax'], 'field' => 'slug', 'terms' => ( count( $terms ) > 1 ) ? $terms : $atts['term'] )
				);
			}
		}

		// get posts with a certain tag
		if ( isset( $atts['tag'] ) ) {
			$this->args['tag'] = $atts['tag'];
		}

		// override default post_type argument ('publish')
		if ( isset( $atts['post_status'] ) ) {
			$this->args['post_status'] = $atts['post_status'];
		}
		
		// exclude posts with certain category by name (slug)
		if ( isset( $atts['exclude_category'] ) ) {
			$category = $atts['exclude_category'];
			if ( strpos( ',', $category ) ) {
// multiple
				$category = explode( ',', $category );

				foreach ( $category AS $cat ) {
					$term = get_category_by_slug( $cat );
					$exclude[] = '-' . $term->term_id;
				}
				$category = implode( ',', $exclude );

			} else {
// single
				$term = get_category_by_slug( $category );
				$category = '-' . $term->term_id;
			}

			if ( ! is_null( $this->args['cat'] ) ) {
// merge lists
				$this->args['cat'] .= ',' . $category;
			}
			$this->args['cat'] = $category;
			// unset our unneeded variables
			unset( $category, $term, $exclude );
		}

		// show number of posts (default is 10, showposts or posts_per_page are both valid, only one is needed)
		if ( isset( $atts['showposts'] ) ) {
					$this->args['posts_per_page'] = $atts['showposts'];
		}

		// handle pagination (for code, template pagination is in the template)
		if ( isset( $wp_query->query_vars['page'] ) && $wp_query->query_vars['page'] > 1 ) {
			$this->args['paged'] = $wp_query->query_vars['page'];
		}

		if ( ! ( isset( $this->args['ignore_sticky_posts'] ) &&
						( strtolower( $this->args['ignore_sticky_posts'] ) === 'no' ||
							strtolower( $this->args['ignore_sticky_posts'] ) === 'false' ) ) ) {
                    
					$this->args['post__not_in'] = get_option( 'sticky_posts' );
		}

		$this->args['ignore_sticky_posts'] = isset( $this->args['ignore_sticky_posts'] ) ? $this->shortcode_bool( $this->args['ignore_sticky_posts'] ) : true;

		if ( isset( $this->args['more_tag'] ) ) {
			add_filter( 'excerpt_more', array( &$this, 'custom_excerpt_more' ), 1 );
		}

		if ( isset( $atts['exclude_ids'] ) ) {
			$exclude_posts = explode( ',', $atts['exclude_ids'] );
			if ( isset( $this->args['post__not_in'] ) ) {
				$this->args['post__not_in'] = array_merge( $this->args['post__not_in'], $exclude_posts );
			} else {
				$this->args['post__not_in'] = $exclude_posts;
			}
		}

		$current_time_value = current_time( 'timestamp' );
		if ( isset( $atts['date'] ) ) {
			$date_data = explode( '-', $atts['date'] );
			if ( ! isset( $date_data[1] ) ) {
				$date_data[1] = 0;
			}
			switch ( $date_data[0] ) {
				case 'today':
					$today = getdate( $current_time_value - ( $date_data[1] * DAY_IN_SECONDS ) );
					$this->args['date_query'] = array(
						'year'  => $today['year'],
						'month' => $today['mon'],
						'day'   => $today['mday'],
						);
					break;
				case 'week':
					$week = date( 'W', $current_time_value - $date_data[1] * WEEK_IN_SECONDS );
					$year = date( 'Y', $current_time_value - $date_data[1] * WEEK_IN_SECONDS );
					$this->args['date_query'] = array(
						'year' => $year,
						'week' => $week,
						);
					break;
				case 'month':
					$month = date( 'm', strtotime( ( strval( - $date_data[1] ) . ' Months' ), $current_time_value ) );
					$year = date( 'Y', strtotime( ( strval( - $date_data[1] ) . ' Months' ), $current_time_value ) );
					$this->args['date_query'] = array(
						'monthnum'	=> $month,
						'year'		=> $year,
						);
					break;
				case 'year':
					$year = date( 'Y', strtotime( ( strval( - $date_data[1] ) . ' Years' ), $current_time_value ) );
					$this->args['date_query'] = array(
						'year'  => $year,
						);
					break;
			}
		}
		$this->args = apply_filters( 'posts_in_page_args', $this->args );
	}

	/**
	 *	Sets a shortcode boolean value to a real boolean
	 *
	 *	@return bool
	 */
	public function shortcode_bool( $var ) {
		$falsey = array( 'false', '0', 'no', 'n' );
		return ( ! $var || in_array( strtolower( $var ), $falsey ) ) ? false : true;
	}

	/**
	 *	Tests if a theme has a theme template file that exists
	 *
	 *	@return string|true if template exists, false otherwise.
	 */
	protected function has_theme_template() {
 
		if ( ! empty( $this->args['template'] ) ) {

			$template_file = get_stylesheet_directory() . '/' . $this->args['template'];

			// check for traversal attack by getting the basename without the path and reassembling. If it looks wrong, go with the default

			$path_parts = pathinfo( $template_file );

			if ( $template_file != get_stylesheet_directory() . '/' . $path_parts['filename'] . '.' . $path_parts['extension'] ) {

				$template_file = get_stylesheet_directory() . '/posts_loop_template.php';

			}
		} else {
			$template_file = get_stylesheet_directory() . '/posts_loop_template.php'; // use default template file
		}
	 
		return ( file_exists( $template_file ) ) ? $template_file : false;
	}

	/**
	 *	Retrieves the post loop template and returns the output
	 *
	 *	@return string results of the output
	 */
	protected function add_template_part( $ic_posts, $singles = false ) {
		if ( $singles ) {
			setup_postdata( $ic_posts );
		} else {
			$ic_posts->the_post();
		}
		$output = '';
		ob_start();
		$output .= apply_filters( 'posts_in_page_pre_loop', '' );
		require ( $file_path = self::has_theme_template() )
			? $file_path // use template file in theme
			: POSTSPAGE_DIR . '/posts_loop_template.php'; // use default plugin template file
		$output .= ob_get_contents();
		$output .= apply_filters( 'posts_in_page_post_loop', '' );
		return ob_get_clean();
	}

	public function custom_excerpt_more( $more ) {
		$more_tag = $this->args['more_tag'];
		return ' <a class="read-more" href="' . get_permalink( get_the_ID() ) . '">' . $more_tag . '</a>';
	}

}
