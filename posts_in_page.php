<?php
/**
 *  Plugin Name: Posts in Page
 *  Plugin URI: https://ivycat.com/wordpress/wordpress-plugins/posts-in-page/
 *  Description: Easily add one or more posts to any page using simple shortcodes. Supports categories, tags, custom post types, custom taxonomies, and more.
 *  Version: 1.3.0
 *  Author: IvyCat, Inc.
 *  Author URI: https://ivycat.com
 *  License: GNU General Public License v2.0
 *  License URI: http://www.gnu.org/licenses/gpl-2.0.html
 *  Text Domain: posts-in-page
 *  Domain Path: /languages
 *  
 * @package Posts_in_Page
 * @author Eric Amundson <eric@ivycat.com>
 * @copyright Copyright (c) 2017, IvyCat, Inc.
 * @license http://www.gnu.org/licenses/gpl-2.0.html
 */

if ( ! function_exists( 'add_action' ) ) {
	wp_die( 'You are trying to access this file in a manner not allowed.', 'Direct Access Forbidden', array( 'response' => '403' ) );
}

if ( ! defined( 'POSTSPAGE_DIR' ) ) {
	define( 'POSTSPAGE_DIR', plugin_dir_path( __FILE__ ) );
}

if ( ! defined( 'POSTPAGE_URL' ) ) {
	define( 'POSTPAGE_URL', plugin_dir_url( __FILE__ ) );
}

require_once 'includes/class-page-posts.php';

class ICAddPostsToPage {

	public function __construct( ) {
		add_shortcode( 'ic_add_posts', array( &$this, 'posts_in_page' ) );
		add_shortcode( 'ic_add_post', array( &$this, 'post_in_page' ) );
		add_action( 'admin_menu', array( &$this, 'plugin_page_init' ) );
		add_filter( 'plugin_action_links_' . plugin_basename( __FILE__ ), array( &$this, 'plugin_action_links' ), 10, 4 );
		load_plugin_textdomain( 'posts-in-page', false, dirname( plugin_basename( __FILE__ ) ) . '/languages' );
	}

	/**
	 * 	Add settings link on plugins page.
	 */
	public function plugin_action_links( $actions, $plugin_file, $plugin_data, $context ) {
		if ( is_plugin_active( $plugin_file ) ) {
					$actions[] = '<a href="' . admin_url( 'options-general.php?page=posts_in_page' ) . '">' . __( ' Help', 'posts-in-page' ) . '</a>';
		}
		return apply_filters( 'post_in_page_actions', $actions );
	}

	/**
	 * 	Main shortcode
	 *
	 * 	@param array $atts An array of shortcode parameters.  None required
	 */
	public function posts_in_page( $atts ) {
		$posts = new ICPagePosts( $atts );
		return $posts->output_posts( );
	}

	/**
	 * 	Deprecated shortcode (routing to posts in page function now)
	 *
	 * 	@todo Remove this depreciated function.
	 */
	public function post_in_page( $atts ) {
		return self::posts_in_page( $atts );
	}

	/**
	 *  Init plugin, add menu page, and setup hooks to load assets on the plugin options page
	 */
	public function plugin_page_init() {
		if ( ! current_user_can( 'administrator' ) ) {
					return;
		}

		$hooks = array( );
		$hooks[] = add_options_page( __( 'Posts in Page', 'posts-in-page' ), __( 'Posts in Page', 'posts-in-page' ), 'read', 'posts_in_page', 
			array( $this, 'plugin_page' ) );

		foreach ( $hooks as $hook ) {
			add_action( "admin_print_styles-{$hook}", array( $this, 'load_assets' ) );
		}
	}

	/**
	 * Enqueue plugin assets (scripts & styles)
	 */
	public function load_assets( ) {
		wp_enqueue_style( 'postpagestyle', POSTPAGE_URL . 'admin/assets/css/post-page_styles.css' );
		wp_enqueue_script( 'postpagescript', POSTPAGE_URL . 'admin/assets/js/post-page_scripts.js' );
	}

	/**
	 * Plugin Settings page - includes view for the page
	 */
	public function plugin_page( ) {
		require_once 'admin/views/help-main.php';
	}

}

/**
 * Instantiate the Plugin - called using the plugins_loaded action hook.
 */
function init_ic_posts_in_page( ) {
	new ICAddPostsToPage( );
}

add_action( 'plugins_loaded', 'init_ic_posts_in_page' );
