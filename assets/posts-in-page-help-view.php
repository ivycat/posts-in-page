<?php
/**
 * @package Posts_in_Page
 * @author Eric Amundson <eric@ivycat.com>
 * @copyright Copyright (c) 2014, IvyCat, Inc.
 * @license http://www.gnu.org/licenses/gpl-2.0.html
 */ 
?>

<div class="wrap" id="posts-in-page-settings">
	<div id="icon-options-general" class="icon32"></div>
	<h2>Posts in Page</h2>
	<div id="body-wrap" class="meta-box-sortables ui-sortable">
		<div id="metabox_desc" class="postbox">
			<div class="hndle">
				<h3>How to use Posts in Page</h3>
			</div>
			<div class="group help inside">
				<p>To 'pull' posts into a page, you can either:</p>

				<ol>
					<li>place a shortcode in the editor window of the page you're editing, or </li>
					<li>modify a theme template file using the shortcode in a PHP function.</li>
				</ol>

				<h4>Using Shortcodes in the WordPress Editor</h4>

				<table class="widefat">
					<thead>
						<tr>
							<th>Task</th>
							<th>Shortcode</th>
							<th>Notes</th>
						</tr>
					</thead>
					<tfoot>
						<tr>
							<th>Task</th>
							<th>Shortcode</th>
							<th>Notes</th>
						</tr>
					</tfoot>
					<tbody>
						<tr>
							<td>Add all posts</td>
							<td><code>[ic_add_posts]</code></td>
							<td><?php _e( 'Add all posts to a page (limit to what number posts in WordPress is set to), essentially adds blog "page" to page.', 'posts-in-page' ); ?></td>
						</tr>
						<tr>
							<td>Show posts by ID</td>
							<td><code>[ic_add_posts ids='1,2,3']</code></td>
							<td><?php _e( 'show one or many posts by specifying the post ID(s) ( specify all post types )', 'posts-in-page' ); ?></td>
						</tr>
						<tr>
							<td>Show posts by Post Type</td>
							<td><code>[ic_add_posts post_type='post_type']</code></td>
							<td><?php _e( 'show posts from a custom post type by specifying the post type slug ( must give post type if not a standard post ) add multiple post types by separating with commas (ex.', 'posts-in-page' ); ?> <code>post_type='post_type1,post_type2'</code>)</td>
						</tr>
						<tr>
							<td>Show specific number of posts</td>
							<td><code>[ic_add_posts showposts='5']</code></td>
							<td><?php _e( 'limit number of posts (or override default setting)', 'posts-in-page' ); ?></td>
						</tr>
						<tr>
							<td>Change post order </td>
							<td><code>[ic_add_posts orderby='title' order='ASC']</code></td>
							<td><?php _e( 'orderby title - supports all WP orderby variables.  Order is optional, WP default', 'posts-in-page' ); ?></td>
						</tr>
						<tr>
							<td>Specify categories</td>
							<td><code>[ic_add_posts category='category-slug']</code></td>
							<td><?php _e( 'Show posts within a specific category.  Uses slugs, can have multiple but separate by commas.      category-1,category2, etc (no spaces.)', 'posts-in-page' ); ?></td>
						</tr>
						<tr>
							<td>Specify tags</td>
							<td><code>[ic_add_posts tag='tag-slug']</code></td>
							<td><?php _e( 'Show posts using a specific tag.  Like categories, it uses slugs, and can accommodate multiple tags separate by commas.     tag-1,tag-2, etc (no spaces.)', 'posts-in-page' ); ?></td>
						</tr>
						<tr>
							<td>Specify custom taxonomy</td>
							<td><code>[ic_add_posts tax='taxonomy' term='term']</code></td>
							<td><?php _e( 'limit posts to those that exist in a taxonomy and have a specific term.  Both are required for either one to work', 'posts-in-page' ); ?></td>
						</tr>
						<tr>
							<td>Change output template</td>
							<td><code>[ic_add_posts template='template-in-theme-dir.php']</code></td>
							<td><?php _e( 'In case you want to style your markup, add meta data, etc.  Each shortcode can reference a different template.  These templates must exist in the theme directory.', 'posts-in-page' ); ?></td>
						</tr>
						<tr>
							<td>Sticky posts</td>
							<td><code>[ic_add_posts ignore_sticky_posts='no']</code></td>
							<td><?php _e( "Show sticky posts too (they're ignored by default)", 'posts-in-page' ); ?></td>
						</tr>
						<tr>
							<td>Pagination</td>
							<td><code>[ic_add_posts paginate='yes']</code></td>
							<td><?php _e( 'use pagination links (off by default)', 'posts-in-page' ); ?></td>
						</tr>
						<tr>
							<td>Post offset</td>
							<td><code>[ic_add_posts offset='3']</code></td>
							<td><?php _e( 'Display posts from the 4th one', 'posts-in-page' ); ?></td>
						</tr>
						<tr>
							<td>Dates</td>
							<td><code>[ic_add_posts Date='today']</code></td>
							<td><?php _e( "Show's post associated (published) on specified date period, today, 'today-1' show's posts published yesterday, 'today-2' shows posts published two days ago, etc. Also 'week(-n)' shows posts n weeks ago. Also available 'month(-n)' and 'year(-n)'", 'posts-in-page' ); ?></td>
						</tr>
						<tr>
							<td>Post IDs</td>
							<td><code>[ic_add_posts exclude_ids='25,15']</code></td>
							<td><?php _e( 'exclude by post ID one or more.', 'posts-in-page' ); ?></td>
						</tr>
						<tr>
							<td>Custom error message</td>
							<td><code>[ic_add_posts none_found='No Posts Found']</code></td>
							<td><?php _e( 'Custom message to display if no posts are found', 'posts-in-page' ); ?></td>
					</tbody>
				</table>
				<p><?php _e( 'Or any combination of the above.', 'posts-in-page' ); ?></p>

				<h4><?php _e( 'Using Shortcodes within a PHP function', 'posts-in-page' ); ?></h4>

				<p><?php _e( 'If you\'d like to use this plugin to pull posts directly into your theme\'s template files, you can drop the following WordPress function in your template files, replacing the <code>[shortcode]</code> part with your, custom shortcode.', 'posts-in-page' ); ?></p>

				<pre><code>&lt;?php echo do_shortcode("[shortcode]"); ?&gt;</code></pre>
			</div>
		</div>
	</div>
	<div id="sidebar-wrap">
		<?php require_once 'desc.php'; ?>
	</div>
</div>
