<?php

/**
 *  Plugin Name: Posts in Page
 *  Plugin URI: http://wordpress.org/extend/plugins/posts-in-page/
 *  Description: Easily add one or more posts to any page using simple shortcodes. Supports categories, tags, custom post types, custom taxonomies, and more.
 *  Author: IvyCat Web Services
 *  Author URI: http://www.ivycat.com
 *  version: 1.0.10
 *  License: GNU General Public License v2.0
 *  License URI: http://www.gnu.org/licenses/gpl-2.0.html
 
 ------------------------------------------------------------------------
	IvyCat AJAX Slider, Copyright 2012 IvyCat, Inc. (admins@ivycat.com)
	
	This program is free software; you can redistribute it and/or modify
	it under the terms of the GNU General Public License as published by
	the Free Software Foundation; either version 2 of the License, or
	(at your option) any later version.
	
	This program is distributed in the hope that it will be useful,
	but WITHOUT ANY WARRANTY; without even the implied warranty of
	MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
	GNU General Public License for more details.
	
	You should have received a copy of the GNU General Public License
	along with this program; if not, write to the Free Software
	Foundation, Inc., 59 Temple Place, Suite 330, Boston, MA 02111-1307 USA

 */

define( 'POSTSPAGE_DIR', dirname( __FILE__ ) );
define( 'POSTPAGE_URL', str_replace( ABSPATH, site_url( '/' ), POSTSPAGE_DIR ) );

class AddPostsToPage{
    
    protected $args;
    
    public function __construct(){
        add_shortcode( 'ic_add_posts', array( &$this, 'posts_in_page' ) );
        add_shortcode( 'ic_add_post', array( &$this, 'post_in_page' ) );
        add_action( 'admin_menu', array( &$this, 'plugin_page_init' ) );
        add_filter( 'plugin_action_links_'. plugin_basename( __FILE__ ), array( &$this, 'plugin_action_links' ), 10, 4 );
    }
    
    public function plugin_action_links( $actions, $plugin_file, $plugin_data, $context ) {
        if ( is_plugin_active( $plugin_file ) )
            $actions[] = '<a href="' . admin_url('options-general.php?page=posts_in_page') . '">' . __( ' Help', 'posts_in_page' ) . '</a>';
        return $actions;
    }
  
    public function posts_in_page( $atts ){
        extract( shortcode_atts( array(
            'category' => false,
            'cats' => false,
            'post_type' => false,
            'tax' => false,
            'term' => false,
            'showposts' => 10,
            'tag' => false,
            'template' => false,
            'ids' => false,
            'orderby' => false,
            'order' => false
        ), $atts ) );
        self::set_args( $atts );
        return self::output_posts();
    }

    public function plugin_page_init(){
        if( !current_user_can( 'administrator' ) ) return;   
        $hooks = array();
        $hooks[] = add_options_page( __( 'Posts In Page' ), __( 'Posts In Page' ), 'read', 'posts_in_page', 
            array( $this, 'plugin_page') );
        foreach($hooks as $hook) {
            add_action("admin_print_styles-{$hook}", array($this, 'load_assets'));
        }
    }

    public function load_assets(){
        wp_enqueue_style( 'postpagestyle', POSTPAGE_URL. '/assets/post-page_styles.css' );
        wp_enqueue_script( 'postpagescript', POSTPAGE_URL. '/assets/post-page_scripts.js' );
    }

    public function plugin_page(){
        require_once 'assets/posts_in_page_help_view.php';
    }
    
    protected function output_posts(){
        $page_posts = new WP_Query( $this->args );
        $output = '';
        if( $page_posts->have_posts() ): while( $page_posts->have_posts()):
        $output .= self::add_template_part( $page_posts );
        endwhile; endif;
        wp_reset_postdata();
        return $output;
    }
    
    public function post_in_page( $atts ){
        $args = array( 'post_type' => (  $atts['post_type'] ) ? $atts['post_type'] : 'post' );
        if( $atts['id'] ) {
            $ids = explode( ',', $atts['id'] );
            if( count( $ids ) > 1 ):
                $args['post__in'] = $ids;
                $args['posts_per_page'] = count( $ids );
            else:
                $args['p'] = $atts['id'];
                $args['posts_per_page'] = 1;
            endif;
        }
        
        $page_posts = new WP_Query( $args );
        //fprint_r( $page_posts );
        $output = '';
        if( $page_posts->have_posts() ): while( $page_posts->have_posts()):
        $output .= self::add_template_part( $page_posts );
        endwhile; endif;
        wp_reset_postdata();
        return $output;
    }
    
    protected function set_args( $atts ){
        global $wp_query;
        $this->args = array( 'post_type' => (  $atts['post_type'] ) ? $atts['post_type'] : 'post' );
		$this->args['post_status'] = 'publish';
        if($atts['ids'] ){
            $post_ids = explode( ',', $atts['ids'] );
            $this->args['post__in'] = $post_ids;
            $this->args['posts_per_page'] = count( $post_ids );
        }
        if( $atts['orderby'] ){
            $this->args['orderby'] = $atts['orderby'];
        }
		if( $atts['order'] )
			$this->args['order'] = $atts['order'];
			
        if( $atts['template'] ) $this->args['template'] = $atts['template'];
        if( $atts['category'] ){
            $cats = explode( ',', $atts['category'] );
            $this->args['category_name'] = ( count( $cats ) > 1 ) ? $cats : $atts['category'];
        }elseif( $atts['cats'] ){
            $cats = explode( ',', $atts['cats'] );
            $this->args['category_name'] = ( count( $cats ) > 1 ) ? $cats : $atts['cats'];
        }
        if( $atts['tax'] ){
            if( $atts['term'] ){
                $terms = explode( ',', $atts['term'] );
                $this->args['tax_query'] = array(
                    array( 'taxonomy' => $atts['tax'], 'field' => 'slug', 'terms' => ( count( $terms ) > 1 ) ? $terms : $atts['term'] )
                );
            }
        }
        if( $atts['tag'] ){
            $tags = explode( ',', $atts['category'] );
            $this->args['tag'] = ( count( $tags ) > 1 ) ? $tags : $atts['tag'];
        }
        if( !$this->args['posts_per_page'] ) $this->args[ 'posts_per_page' ] = $atts['showposts'];
        if( $wp_query->query_vars['page'] > 1 ){
            $this->args['paged'] = $wp_query->query_vars['page'];
        }
    }
    
    protected function has_theme_template(){
        $template_file = ( $this->args['template'] ) ? self::current_theme_path()  . '/' . $this->args['template'] : self::current_theme_path() . '/posts_loop_template.php';
        
        return ( file_exists( $template_file ) ) ? $template_file : false;
    }
    
   protected function add_template_part( $ic_posts, $singles=false ){
        if( $singles ){
            setup_postdata( $ic_posts );
        }else{
            $ic_posts->the_post();
        }
        ob_start();
        require ( $file_path = self::has_theme_template() ) ? str_replace( site_url(), '', $file_path ) : 'posts_loop_template.php';
        $output .= ob_get_contents();
        return ob_get_clean();
   }
    
    protected function current_theme_path(){
        $theme_data = explode( '/', get_bloginfo( 'stylesheet_directory' ) );
        $theme_path = get_theme_root();
        return $theme_path . '/' . $theme_data[ count( $theme_data ) -1 ];
    }
    
} new AddPostsToPage();