<?php
/**
 *	Page Posts Class, main workhorse for the ic_add_posts shortcode.
 */

class ICPagePosts {
	
	protected $args = false;
	protected $defaults = array(
		'post_type' => 'post',
		'post_status' => 'publish',
		'orderby' => 'date',
		'order' => 'DESC',
		'posts_per_page' => 10
	); // set defaults for wp_parse_args
	
	public function __construct( $atts ) {
		$this->args = wp_parse_args( $atts, $this->defaults );
        self::set_args( $atts );
	}
	
	public function output_posts() {
		if( !$this->args ) return '';
        $page_posts = new WP_Query( $this->args );
        $output = '';
        if( $page_posts->have_posts() ): while( $page_posts->have_posts()):
        $output .= self::add_template_part( $page_posts );
        endwhile; endif;
        wp_reset_postdata();
        return $output;
    }
    
    public function post_in_page( ) {
		if( !$this->args )
			return '';  // Arguments are required;
        if( !isset( $this->args['id'] ) )
			return ''; // ID is required, do not allow if not set
		
		$ids = explode( ',', $this->args['id'] );
		if( count( $ids ) > 1 ):
			$this->args['post__in'] = $ids;
			$this->args['posts_per_page'] = count( $ids );
		else:
			$this->args['p'] = $atts['id'];
			$this->args['posts_per_page'] = 1;
	   endif;
       
        
        $page_posts = new WP_Query( $this->args );
        $output = '';
        if( $page_posts->have_posts() ): while( $page_posts->have_posts()):
        $output .= self::add_template_part( $page_posts );
        endwhile; endif;
        wp_reset_postdata();
        return $output;
    }
    
    protected function set_args( $atts ) {
        global $wp_query;
        
        if( isset( $atts['ids'] ) ){
            $post_ids = explode( ',', $atts['ids'] );
            $this->args['post__in'] = $post_ids;
            $this->args['posts_per_page'] = count( $post_ids );
        }
		
        if( isset( $atts['template'] ) )
			$this->args['template'] = $atts['template'];
        
		if( isset( $atts['category'] ) ){
            $cats = explode( ',', $atts['category'] );
            $this->args['category_name'] = ( count( $cats ) > 1 ) ? $cats : $atts['category'];
        }elseif(  isset( $atts['cats'] ) ){
            $cats = explode( ',', $atts['cats'] );
            $this->args['category_name'] = ( count( $cats ) > 1 ) ? $cats : $atts['cats'];
        }
		
        if( isset( $atts['tax'] ) ) {
            if( isset( $atts['term'] ) ){
                $terms = explode( ',', $atts['term'] );
                $this->args['tax_query'] = array(
                    array( 'taxonomy' => $atts['tax'], 'field' => 'slug', 'terms' => ( count( $terms ) > 1 ) ? $terms : $atts['term'] )
                );
            }
        }
		
        if( $atts['tag'] ) {
            $tags = explode( ',', $atts['category'] );
            $this->args['tag'] = ( count( $tags ) > 1 ) ? $tags : $atts['tag'];
        }
		
        if( isset( $atts['showposts'] ) ) $this->args[ 'posts_per_page' ] = $atts['showposts'];
		
        if( $wp_query->query_vars['page'] > 1 ){
            $this->args['paged'] = $wp_query->query_vars['page'];
        }
    }
    
    protected function has_theme_template() {
        $template_file = ( $this->args['template'] ) ? self::current_theme_path()  . '/' . $this->args['template'] : self::current_theme_path() . '/posts_loop_template.php';
        
        return ( file_exists( $template_file ) ) ? $template_file : false;
    }
    
   protected function add_template_part( $ic_posts, $singles=false ) {
        if( $singles ){
            setup_postdata( $ic_posts );
        }else{
            $ic_posts->the_post();
        }
        ob_start();
        require ( $file_path = self::has_theme_template() ) ? str_replace( site_url(), '', $file_path ) : POSTPAGE_URL . '/posts_loop_template.php';
        $output .= ob_get_contents();
        return ob_get_clean();
   }
    
    protected function current_theme_path() {
        $theme_data = explode( '/', get_bloginfo( 'stylesheet_directory' ) );
        $theme_path = get_theme_root();
        return $theme_path . '/' . $theme_data[ count( $theme_data ) -1 ];
    }
}