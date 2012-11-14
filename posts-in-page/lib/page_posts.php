<?php
/**
 *	Page Posts Class, main workhorse for the ic_add_posts shortcode.
 */

if ( !function_exists( 'add_action' ) )
	wp_die( 'You are trying to access this file in a manner not allowed.', 'Direct Access Forbidden', array( 'response' => '403' ) );

class ICPagePosts {
	
	protected $args = array(
		'post_type'         => 'post',
		'post_status'      => 'publish',
		'orderby'            => 'date',
		'order'                => 'DESC',
		'template'          => false
	); // set defaults for wp_parse_args
	
	public function __construct( $atts ) {
        self::set_args( $atts );
	}
	
	/**
	 *	Output's the posts
	 *
	 *	@return string output of template file
	 */
	public function output_posts() {
		if ( !$this->args ) return '';
        $page_posts = apply_filters( 'posts_in_page_results', new WP_Query( $this->args ) ); // New WP_Query object 
        $output = '';
        if ( $page_posts->have_posts( ) ):
			while ( $page_posts->have_posts( ) ):
			$output .= self::add_template_part( $page_posts );
			endwhile;
			$page = isset( $_GET['page'] ) ? $_GET['page'] : 1;
			$output .= apply_filters( 'posts_in_page_paginate', paginate_links( array( 'current' => $page, 'total' => $page_posts->max_num_pages ), $page_posts ) );
		endif;
        wp_reset_postdata( );
        return $output;
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
		if( preg_match( '`,`', $this->args['post_type'] ) ){
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
        if ( isset( $atts['template'] ) )
			$this->args['template'] = $atts['template'];
        
		// get posts in a certain category by name (slug)
		if ( isset( $atts['category'] ) ) {
            $this->args['category_name'] = $atts['category'];
        } elseif (  isset( $atts['cats'] ) ) { // get posts in a certain category by id
            $this->args['cat'] =  $atts['cats'];
        }
		
		// Do a tex query, tax and term a required.
        if( isset( $atts['tax'] ) ) {
            if( isset( $atts['term'] ) ){
                $terms = explode( ',', $atts['term'] );
                $this->args['tax_query'] = array(
                    array( 'taxonomy' => $atts['tax'], 'field' => 'slug', 'terms' => ( count( $terms ) > 1 ) ? $terms : $atts['term'] )
                );
            }
        }
		
		// get posts with a certain tag
        if ( isset( $atts['tag'] ) ) {
            $tags = explode( ',', $atts['tag'] );
            $this->args['tag'] = ( count( $tags ) > 1 ) ? $tags : $atts['tag'];
        }
		
		// show number of posts (default is 10, showposts or posts_per_page are both valid, only one is needed)
        if ( isset( $atts['showposts'] ) )
			$this->args[ 'posts_per_page' ] = $atts['showposts'];
		
		// handle pagination (for code, template pagination is in the template)
        if ( isset( $wp_query->query_vars['page'] ) &&  $wp_query->query_vars['page'] > 1 ) {
            $this->args['paged'] = $wp_query->query_vars['page'];
        }
		$this->args = apply_filters( 'posts_in_page_args', $this->args );
    }
    
	/**
	 *	Tests if a theme has a theme template file that exists
	 *
	 *	@return true if template exists, false otherwise.
	 */
    protected function has_theme_template( ) {
        $template_file = ( $this->args['template'] )
			? get_stylesheet_directory( )  . '/' . $this->args['template'] // use specified template file
			: get_stylesheet_directory( ) . '/posts_loop_template.php'; // use default template file
        
        return ( file_exists( $template_file ) ) ? $template_file : false;
    }
    
	/**
	 *	Retrieves the post loop template and returns the output
	 *
	 *	@return string results of the output
	 */
   protected function add_template_part( $ic_posts, $singles=false ) {
        if ( $singles ) {
            setup_postdata( $ic_posts );
        } else {
            $ic_posts->the_post( );
        }
		$output = '';
        ob_start( );
		$output .= apply_filters( 'posts_in_page_pre_loop', '' );
        require ( $file_path = self::has_theme_template( ) )
			? $file_path // use template file in theme
			: POSTSPAGE_DIR . '/posts_loop_template.php'; // use default plugin template file
        $output .= ob_get_contents( );
		$output .= apply_filters( 'posts_in_page_post_loop', '' );
        return ob_get_clean( );
   }

}