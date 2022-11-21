<?php
/**
 * Plugin Name:     Posts In Page Block
 * Description:     Plugin to add block that display post list on page.
 * Version:         0.1.0
 * Author:          Priyank Patel
 * License:         GPL-2.0-or-later
 * License URI:     https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:     post-list-block
 *
 * @package         create-block
 */

/**
 * Registers block assets
 * in the corresponding context.
 *
 * @see https://developer.wordpress.org/block-editor/tutorials/block-tutorial/applying-styles-with-stylesheets/
 */
function posts_block_init() {
	$dir = __DIR__;

	$script_asset_path = "$dir/build/index.asset.php";
	if ( ! file_exists( $script_asset_path ) ) {
		throw new Error(
			'You need to run `npm start` or `npm run build` for the "posts-in-page-block/post-list-block" block first.'
		);
	}
	$index_js     = 'build/index.js';
	$script_asset = require( $script_asset_path );
	wp_register_script('post-list-block-editor-js', plugins_url( $index_js, __FILE__ ), $script_asset['dependencies'], $script_asset['version'] );
	wp_set_script_translations( 'post-list-block-editor-js', 'post-list-block' );

	$editor_css = 'src/post-list-block/editor.css';
	wp_register_style( 'post-list-block-editor', plugins_url( $editor_css, __FILE__ ), array() );

	$style_css = 'build/style-index.css';
	wp_register_style( 'post-list-block', plugins_url( $style_css, __FILE__ ), array() );

	register_block_type( 'posts-in-page-block/post-list-block', array(
		'editor_script' => 'post-list-block-editor-js',
		'style'			=> 'post-list-block',
		'editor_style'	=> 'post-list-block-editor',
		'attributes'    => array(
		        'selectedPostType'=> array(
		            'type'=> 'string',
		            'default'=> 'post'
		        ),
		        'selectedTaxonomies'=> array(
		            'type'=> 'string',
		            'default'=> 'all'
	        	),
	        	'selectedTerms'=> array(
		            'type'=> 'array',
		            'default'=> ''
	        	),
	        	'postsPerPage' => array(
					'type' => 'string',
				),
				'showContent' => array(
		            'type' => 'boolean',
		            'default'=> true
		        ),
		        'showExcerpt' => array(
		            'type' => 'boolean',
		            'default'=> false
		        ),
		        'showFeaturedImage' => array(
		            'type' => 'boolean',
		            'default'=> true 
		        ),
		        'showPagination' => array(
		            'type' => 'boolean',
		            'default'=> true 
		        ),
		        'nextText' => array(
		            'type' => 'string',
		            'default' => 'Next'
		        ),
		        'previousText' => array(
		            'type' =>  'string',
		            'default' =>  'Previous'
		        ),
		        'order' => array(
					'type' => 'string',
				),
				'orderBy' => array(
					'type' => 'string',
					'default' => 'date'
				),
				'excludePost' => array(
					'type' => 'string',
				),
				'includePost' => array(
					'type' => 'string',
				),
				'offset' => array(
					'type' => 'number',
					'default'=> 0
				),
				'ignoreStickyPosts' => array(
		            'type' => 'boolean',
		            'default'=> true 
		        ),
				'noPostFoundText'=> array(
		            'type'=> 'string',
		            'default'=> 'No Posts Found...!'
		        ),
		        'startDate' => array(
		            'type' => 'string',
		        ),
		        'endDate' => array(
		            'type' => 'string',
		        ),
		        'showPostDates' => array(
		            'type' => 'boolean',
		            'default' => false
		        ),
		        'showBeforeToday' => array(
		            'type' => 'boolean',
		            'default' => false
		        ),
		        'beforeTodayCount' => array(
		            'type' => 'number',
		            'default' => 1
		        ),
		        'beforeTodayPeriod' => array(
		            'type' => 'string',
	        	),
	    ),
	    'render_callback' => 'render_posts_block',
	) );

}
add_action( 'init', 'posts_block_init' );

function render_posts_block ( $attributes ){
	$taxonomy_query = array();

	if( !empty($attributes['selectedTerms']) ){
		$taxonomy_query[] =	array(
		  'taxonomy' => $attributes['selectedTaxonomies'],
		  'field' => 'slug', 
		  'terms' => $attributes['selectedTerms'],
		);
	}

	if( $attributes['showPostDates'] ){

		$startDate = $attributes['startDate'] ? strtotime($attributes['startDate']) : '';
		$endDate = $attributes['endDate'] ? strtotime($attributes['endDate']) : '';

		if( $startDate && $endDate ){
			$date_query[] =	array(
			  	'after'     => date( 'c' , $startDate ),
		        'before'    => date( 'c' , $endDate ),
		        'inclusive' => true,
			);
		} elseif( $startDate ) {
			$date_query[] =	array(
			  	'after'     => date( 'c' , $startDate ),
		        'inclusive' => true,
			);
		}
	}

	if( $attributes['showBeforeToday'] ){
			$current_time_value = current_time( 'timestamp' );
			switch ( $attributes['beforeTodayPeriod'] ) {
				case 'today':
					$today        = getdate( $current_time_value - ( $attributes['beforeTodayCount'] * DAY_IN_SECONDS ) );
					$date_query[] = array(
						'year'  => $today['year'],
						'month' => $today['mon'],
						'day'   => $today['mday'],
					);
					break;
				case 'week':
					$week  = date( 'W', $current_time_value - $attributes['beforeTodayCount'] * WEEK_IN_SECONDS );
					$year  = date( 'Y', $current_time_value - $attributes['beforeTodayCount'] * WEEK_IN_SECONDS );
					$Month = date( 'M', $current_time_value - $attributes['beforeTodayCount'] * WEEK_IN_SECONDS );

					if( ( $Month == 'Jan' ) && ( $week == 52 || $week == 53 ) ){
						$year = $year - 1;
					}

					$dateTime 	= new DateTime();
				    $dateTime->setISODate($year, $week);
				    $start_date = $dateTime->format('d-m-Y');
				    $dateTime->modify('+6 days');
				    $end_date 	= $dateTime->format('d-m-Y');
				    $r_from 	= explode( '-', $start_date );
					$r_to       = explode( '-', $end_date );
					$date_query[] = array(
						array(
							'after'     => array(
								'year'  => $r_from[2],
								'month' => $r_from[1],
								'day'   => $r_from[0],
							),
							'before'    => array(
								'year'  => $r_to[2],
								'month' => $r_to[1],
								'day'   => $r_to[0],
							),
							'inclusive' => false,
						),
					);
					break;
				case 'month':
					$month        = date( 'm', strtotime( ( strval( - $attributes['beforeTodayCount'] ) . ' Months' ), $current_time_value ) );
					$year         = date( 'Y', strtotime( ( strval( - $attributes['beforeTodayCount'] ) . ' Months' ), $current_time_value ) );
					$date_query[] = array(
						'monthnum' => $month,
						'year'     => $year,
					);
					break;
				case 'year':
					$year         = date( 'Y', strtotime( ( strval( - $attributes['beforeTodayCount'] ) . ' Years' ), $current_time_value ) );
					$date_query[] = array(
						'year' => $year,
					);
					break;
			}
	}

	if ( $attributes['showPagination'] ) {
        if (get_query_var('paged')) {
		    $paged = get_query_var('paged');
		} elseif (get_query_var('page')) {
		    $paged = get_query_var('page');
		} else {
		    $paged = 1;
		}
	} else {
		$paged = false;
	}

	$perPage = $attributes['postsPerPage'] ? $attributes['postsPerPage'] : -1;
	$offset =  $attributes['showPagination'] ? (( $paged - 1 ) * $perPage + $attributes['offset']) : $attributes['offset'];
	$excludePost = explode(",",$attributes['excludePost']);
	if ( ( true ===  $attributes['ignoreStickyPosts'] ) ) {
		$excludePost = array_merge( $excludePost ,get_option( 'sticky_posts' )) ;
	}

	$args_testimonial = array(
		'post_type' => $attributes['selectedPostType'],
		'ignore_sticky_posts' => $attributes['ignoreStickyPosts'],
		'posts_per_page' => $perPage,
		'orderby' => $attributes['orderBy'],
		'order'  => $attributes['order'],
		'include' => $attributes['includePost'],
		'post__not_in' => $excludePost,
		'offset' => $offset,
		'tax_query' => $taxonomy_query,
		'date_query' => $date_query,
		'paged'      => $paged,
	);
	$postslist = new WP_Query( $args_testimonial );

	ob_start();
	if ( $postslist->have_posts() ) {
        while ( $postslist->have_posts() ) {
        	$postslist->the_post(); 
			$file = get_stylesheet_directory() . '/posts-in-page-template.php';
		?>
			<div class="posts-in-page">
		<?php
				if( file_exists($file) ){
					include ($file);
				} else {
					include ( 'templates/posts-in-page-template.php' );
				}
		?>
			</div>
		<?php
		}

		if ( $attributes['showPagination'] ) {
			$total_rows = max( 0, $postslist->found_posts - $attributes['offset'] );
			$total_pages = ceil( $total_rows / $perPage );

			$args_pagi = array(
		        'base' => add_query_arg( 'paged', '%#%' ),
		        'total' => $total_pages,
		        'current' => $paged,
		        'prev_next' => true,
		        // 'end_size' => $this->args['end_size'],
		        // 'mid_size' => $this->args['mid_size'],
		        'prev_text' => $attributes['previousText'],
		        'next_text' => $attributes['nextText']
		    );
		    echo '<div class="post-nav">';
				echo paginate_links( $args_pagi);
		    echo '</div>';
		}
	} else {
		?>
		<div class="posts-in-page">
			<?php echo $attributes['noPostFoundText'] ?>
		</div>
		<?php
	}
	return ob_get_clean();

	// ob_start();
	// echo '<div class="posts-in-page">';
	// 	foreach ($posts as $post) {
	// 		echo '<article>';
	// 		echo '<h3>'.$post->post_title.'</h3>';
	// 		if( $attributes['showFeaturedImage'] == true ){
	// 			$featured_image = wp_get_attachment_url( get_post_thumbnail_id($post->ID) );
	// 			if($featured_image){
	// 				echo '<img src="'.$featured_image.'" />';
	// 			}
	// 		}
	// 		if( $attributes['showContent'] == true ){
	// 			echo '<p>'.$post->post_content.'</p>';
	// 		}elseif( $attributes['showExcerpt'] == true ){
	// 			echo '<p>'.$post->post_excerpt.'</p>';
	// 		}
	// 		echo '</article>';
	// 	}

	// 	if(!$posts){
	// 		echo '<p>No Posts Found!!!</p>';
	// 	}
	// echo '</div>';

	// return ob_get_clean();
}

function test_paginate_links() {
		global $wp_query;
		$output = '';
		$args_pagi = array(
            'base' => add_query_arg( 'paged', '%#%' ),
            'total' => $wp_query->max_num_pages,
            'current' => $paged,
            'prev_next' => true,
            // 'end_size' => $this->args['end_size'],
            // 'mid_size' => $this->args['mid_size'],
            // 'prev_text' => $this->args['label_previous'],
            // 'next_text' => $this->args['label_next']
        );
        echo '<div class="post-nav">';
			echo paginate_links( $args_pagi);
        echo '</div>';
        //return $output;
	}

class all_terms
{
    public function __construct()
    {
        $version   = '2';
		$namespace = 'wp/v' . $version;
		$base      = 'all-terms';
		register_rest_route(
			$namespace,
			'/' . $base,
			array(
				'methods'  => 'GET',
				'callback' => array( $this, 'get_all_terms' ),
			)
		);
    }

    public function get_all_terms($object)
    {
        $return     = array();
		// $args       = array(
		// 	'public'   => true,
		// 	'_builtin' => false,
		// );
		// $output     = 'names'; // or objects
		// $operator   = 'and'; // 'and' or 'or'
		$taxonomies = get_taxonomies();
		foreach ( $taxonomies as $key => $taxonomy_name ) {
			if ( $taxonomy_name = $_GET['term'] ) {
				$return = get_terms( $taxonomy_name );
			}
		}
		return new WP_REST_Response( $return, 200 );
    }
}

add_action('rest_api_init', function () {
    $all_terms = new all_terms;
});