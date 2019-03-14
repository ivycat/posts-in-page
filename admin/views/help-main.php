<?php
/**
 * Main admin help screen located at: Settings > Posts in Page.
 *
 * @package   Posts_in_Page
 * @author    Eric Amundson <eric@ivycat.com>
 * @copyright Copyright (c) 2019, IvyCat, Inc.
 * @link      https://ivycat.com
 * @since     1.0.0
 * @license   GPL-2.0-or-later
 */

?>

<div class="wrap">

	<div id="icon-options-general" class="icon32"></div>
	<h1><?php esc_html_e( 'Posts in Page', 'posts-in-page' ); ?></h1>

	<div id="poststuff">

		<div id="post-body" class="metabox-holder columns-2">

			<!-- main content -->
			<div id="post-body-content">

				<div class="meta-box-sortables ui-sortable">

					<div class="postbox">

						<div class="handlediv" title="Click to toggle"><br></div>
						<!-- Toggle -->

						<h2 class="hndle">
							<span><?php esc_html_e( 'How to use Posts in Page', 'posts-in-page' ); ?></span>
						</h2>

						<div class="inside">

							<p>To 'pull' posts into a page, you can either:</p>

							<ol>
								<li><a href="#place-a-shortcode-wordpress-editor">Place a shortcode in the WordPress
										editor</a>, or
								</li>
								<li><a href="#embed-php-function-wordpress-editor">Embed a PHP function in a theme
										template file</a></li>
							</ol>

							<h4 name="place-a-shortcode-wordpress-editor" id="place-a-shortcode-wordpress-editor">Place
								a Shortcode in the WordPress Editor</h4>

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
									<td><?php esc_html_e( 'Add all posts to a page (limit to what number posts in WordPress is set to), essentially adds blog "page" to page.', 'posts-in-page' ); ?></td>
								</tr>
								<tr>
									<td>Show posts by Post Type</td>
									<td><code>[ic_add_posts post_type='post_type']</code></td>
									<td><?php esc_html_e( 'Show posts from a custom post type by specifying the post type slug ( must give post type if not a standard post ) add multiple post types by separating with commas (ex.', 'posts-in-page' ); ?>
										<code>post_type='post_type1,post_type2'</code>)
									</td>
								</tr>
								<tr>
									<td>Show specific number of posts</td>
									<td><code>[ic_add_posts showposts='5']</code></td>
									<td><?php esc_html_e( 'Limit number of posts (or override default setting)', 'posts-in-page' ); ?></td>
								</tr>
								<tr>
									<td>Change post order</td>
									<td><code>[ic_add_posts orderby='title' order='ASC']</code></td>
									<td><?php esc_html_e( 'orderby title - supports all WP orderby variables.  Order is optional, WP default', 'posts-in-page' ); ?></td>
								</tr>
								<tr>
									<td>Show posts by ID</td>
									<td><code>[ic_add_posts ids='1,2,3']</code></td>
									<td><?php esc_html_e( 'Show one or many posts by specifying the post ID(s) ( specify all post types )', 'posts-in-page' ); ?></td>
								</tr>
								<tr>
									<td>Exclude posts by ID</td>
									<td><code>[ic_add_posts exclude_ids='4,5,6']</code></td>
									<td><?php esc_html_e( 'Exclude one or more posts by specifying the post ID(s) ( specify all post types )', 'posts-in-page' ); ?></td>
								</tr>
								<tr>
									<td>Include posts from specific categories</td>
									<td><code>[ic_add_posts category='category-slug']</code></td>
									<td><?php esc_html_e( 'Show posts within a specific category. Uses slugs, can have multiple but separate by commas.      category-1,category2, etc (no spaces.)', 'posts-in-page' ); ?></td>
								</tr>
								<tr>
									<td>Exclude posts from specific categories</td>
									<td><code>[ic_add_posts exclude_category='category-slug']</code></td>
									<td><?php esc_html_e( 'Show posts within a specific category. Uses slugs, can have multiple but separate by commas.      category-1,category2, etc (no spaces.)', 'posts-in-page' ); ?></td>
								</tr>
								<tr>
									<td>Specify tags</td>
									<td><code>[ic_add_posts tag='tag-slug']</code></td>
									<td><?php esc_html_e( 'Show posts using a specific tag.  Like categories, it uses slugs, and can accommodate multiple tags separate by commas.     tag-1,tag-2, etc (no spaces.)', 'posts-in-page' ); ?></td>
								</tr>
								<tr>
									<td>Specify custom taxonomy</td>
									<td><code>[ic_add_posts tax='taxonomy' term='term']</code></td>
									<td><?php esc_html_e( 'Limit posts to those that exist in a taxonomy and have a specific term.  Both are required for either one to work', 'posts-in-page' ); ?></td>
								</tr>
								<tr>
									<td>Change output template</td>
									<td><code>[ic_add_posts template='template-in-theme-dir.php']</code></td>
									<td><?php esc_html_e( 'In case you want to style your markup, add meta data, etc.  Each shortcode can reference a different template.  These templates must exist in the theme directory or in a subfolder named posts-in-page.', 'posts-in-page' ); ?></td>
								</tr>
								<tr>
									<td>Sticky posts</td>
									<td><code>[ic_add_posts ignore_sticky_posts='no']</code></td>
									<td><?php esc_html_e( "Show sticky posts too (they're ignored by default)", 'posts-in-page' ); ?></td>
								</tr>
								<tr>
									<td>Pagination</td>
									<td><code>[ic_add_posts paginate='yes']</code></td>
									<td><?php esc_html_e( 'use pagination links (off by default)', 'posts-in-page' ); ?></td>
								</tr>
								<tr>
									<td>Pagination - Post navigation links</td>
									<td><code>[ic_add_posts label_next='Next' label_previous='Previous']</code></td>
									<td><?php esc_html_e( 'Change the post navigation labels', 'posts-in-page' ); ?></td>
								</tr>
								<tr>
									<td>Post status</td>
									<td><code>[ic_add_posts post_status='private']</code></td>
									<td><?php esc_html_e( "Show posts with the specified status(es); the default is to only show posts with status 'publish'.  To choose more than one status, separate them with commas.  For example: <code>post_status='private,publish'</code>.", 'posts-in-page' ); ?></td>
								</tr>
								<tr>
									<td>Post offset</td>
									<td><code>[ic_add_posts offset='3']</code></td>
									<td><?php esc_html_e( 'Displays posts after the offset. An offset=\'3\' will show all posts from the 4th one onward.', 'posts-in-page' ); ?></td>
								</tr>
								<tr>
									<td>Specific Dates</td>
									<td><code>[ic_add_posts date='today']</code></td>
									<td><?php esc_html_e( "Shows posts associated (published) on specified date period, today, 'today-1' show's posts published yesterday, 'today-2' shows posts published two days ago, etc. Also 'week(-n)' shows posts n weeks ago. Also available 'month(-n)' and 'year(-n)'", 'posts-in-page' ); ?></td>
								</tr>
								<tr>
									<td>Date Ranges</td>
									<td><code>[ic_add_posts from_date='15-01-2016' to_date='31-12-2016']</code></td>
									<td><?php esc_html_e( 'Shows posts published within a specified absolute date range', 'posts-in-page' ); ?></td>
								</tr>
								<tr>
									<td>Read more</td>
									<td><code>[ic_add_posts more_tag='Read more...']</code></td>
									<td><?php esc_html_e( 'Set the link text for read more links shown after an excerpt', 'posts-in-page' ); ?></td>
								</tr>
								<tr>
									<td>Custom error message</td>
									<td><code>[ic_add_posts none_found='No Posts Found']</code></td>
									<td><?php esc_html_e( 'Custom message to display if no posts are found', 'posts-in-page' ); ?></td>
								</tr>
								</tbody>
							</table>
							<p><?php esc_html_e( 'Or any combination of the above.', 'posts-in-page' ); ?></p>

							<h4 name="embed-php-function-wordpress-editor"
								id="embed-php-function-wordpress-editor"><?php esc_html_e( 'Embed a PHP function in a theme template file', 'posts-in-page' ); ?></h4>

							<p><?php esc_html_e( 'If you\'d like to use this plugin to pull posts directly into your theme\'s template files, you can drop the following WordPress function in your template files, replacing the <code>[shortcode]</code> part with your, custom shortcode.', 'posts-in-page' ); ?></p>

							<pre><code>&lt;?php echo do_shortcode("[shortcode]"); ?&gt;</code></pre>
						</div>
						<!-- .inside -->

					</div>
					<!-- .postbox -->

				</div>
				<!-- .meta-box-sortables .ui-sortable -->

			</div>
			<!-- post-body-content -->

			<!-- sidebar -->
			<div id="postbox-container-1" class="postbox-container">

				<div class="meta-box-sortables">

					<div class="postbox help-contributing">

						<div class="handlediv" title="Click to toggle"><br></div>
						<!-- Toggle -->

						<h2><span><?php esc_attr_e( 'Help & Contributing', 'posts-in-page' ); ?></span></h2>

						<div class="inside">
							<div class="meta-box-sortables" style="min-height: 0">
								<div id="ivycat_contribute">
									<div class="inside_wrap">
										<h4>Questions, bugs, or great ideas? <span
													class="dashicons dashicons-format-status"></span></h4>
										<ul>
											<li><a href="https://wordpress.org/support/plugin/posts-in-page"> Get help
													on our plugin support page</a> or
											</li>
											<li><a href="https://github.com/ivycat/posts-in-page/"> Report bugs and
													contribute on Github</a></li>
									</div>
								</div>
							</div>
						</div>
						<!-- .inside -->

					</div>
					<!-- .postbox -->
					<div class="postbox">

						<div class="handlediv" title="Click to toggle"><br></div>
						<!-- Toggle -->

						<h2 class="hndle"><span><?php esc_attr_e( 'Connect with IvyCat!', 'posts-in-page' ); ?></span></h2>

						<div class="inside">
							<div class="inside_wrap">
								<!-- Begin MailChimp Signup Form -->
								<div id="mc_embed_signup" class="clearfix">
									<form action="//ivycat.us1.list-manage.com/subscribe/post?u=599f2f6b712f346e11c2930d4&amp;id=6ee02404ab"
										  method="post" id="mc-embedded-subscribe-form"
										  name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
										<label for="mce-EMAIL">Signup for email updates</label>
										<input type="email" value="" name="EMAIL" class="email" id="mce-EMAIL"
											   placeholder="email address" required>
										<input type="submit" value="Subscribe" name="subscribe"
											   id="mc-embedded-subscribe" class="button">
									</form>
								</div>
								<!--End mc_embed_signup-->

								<hr/>

								<ul class="ivycat-social clearfix">
									<li><a href="https://twitter.com/ivycatweb"><span
													class="dashicons dashicons-twitter"></span> <span
													class="screen-reader-text">Twitter</span></span></a></li>
									<li><a href="https://www.facebook.com/ivycatweb"><span
													class="dashicons dashicons-facebook"></span> <span
													class="screen-reader-text">Facebook</span></a></li>
									<li><a href="https://profiles.wordpress.org/ivycat"><span
													class="dashicons dashicons-wordpress"></span> <span
													class="screen-reader-text">WordPress.org</span></a></li>
									<li class="ic_mc"><a href="https://eepurl.com/b3_65" target="_blank"><span
													class="dashicons dashicons-email"></span> <span
													class="screen-reader-text">Sign up for our free newsletter!</span></a>
									</li>
								</ul>

							</div>
						</div>
						<!-- .inside -->

					</div>
					<!-- .postbox -->

					<div class="postbox">

						<div class="handlediv" title="Click to toggle"><br></div>
						<!-- Toggle -->

						<h2 class="hndle"><span><?php esc_attr_e( 'Spread the word', 'posts-in-page' ); ?></span></h2>

						<div class="inside">
							<div class="inside_wrap">
								<h4>Help make this plugin better</h4>
								<ul>
									<li><a href="https://wordpress.org/support/plugin/posts-in-page/reviews/#new-post">Rate
											<div class="ivycat-rating"><span
														class="dashicons dashicons-star-filled"></span><span
														class="dashicons dashicons-star-filled"></span><span
														class="dashicons dashicons-star-filled"></span><span
														class="dashicons dashicons-star-filled"></span><span
														class="dashicons dashicons-star-filled"></span></div>
											on WordPress.org</a></li>
									<li>
										<a href="https://twitter.com/home/?status=Check%20out%20the%20Posts%20in%20Page%20WordPress%20plugin%20from%20IvyCat!%20http%3A%2F%2Fbit.ly%2F1bmI8pS">Tweet
											about Posts in Page</a></li>
								</ul>
							</div>
						</div>
						<!-- .inside -->

					</div>
					<!-- .postbox -->
					<div class="postbox signature clearfix">

						<div class="handlediv" title="Click to toggle"><br></div>
						<!-- Toggle -->

						<h2 class="hndle"><span><?php esc_attr_e( 'IvyCat Web Services', 'posts-in-page' ); ?></span></h2>

						<div class="inside">
							<div class="inside_wrap">
								<img src="https://s.gravatar.com/avatar/f1c6ff76072edfd217215f3acd412c26?s=80?s=200"
									 class="ivycat-gravatar alignleft"/>
								<div class="ivycat_text_wrap alignleft">
									<ul class="link-list">
										<li><a href="https://ivycat.com/wordpress/wordpress-support-maintenance/">WP
												Maintenance & Support</a></li>
										<li><a href="https://ivycat.com/web-design/">WordPress Development</a></li>
									</ul>
								</div>
							</div>
						</div>
						<!-- .inside -->

					</div>
					<!-- .postbox -->
				</div>
				<!-- .meta-box-sortables -->

			</div>
			<!-- #postbox-container-1 .postbox-container -->

		</div>
		<!-- #post-body .metabox-holder .columns-2 -->

		<br class="clear">
	</div>
	<!-- #poststuff -->

</div> <!-- .wrap -->
