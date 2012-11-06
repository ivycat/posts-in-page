=== Posts in Page ===
Contributors: dgilfoy, ivycat, sewmyheadon
Donate link: http://www.ivycat.com/contribute/
Tags: shortcode, pages, posts, custom post types
Requires at least: 3.0
Tested up to: 3.4.1
Stable tag: 1.2.1
License: GPLv2 or later
License URI: http://www.gnu.org/licenses/gpl-2.0.html

Easily add a posts loop inside any page without modifying template files.

==Description==

Easily add one or more posts to any page using simple shortcodes. Supports categories, tags, custom post types, custom taxonomies, and more.

== Notes ==

Plugin is depending upon theme styling; version 1.x of this plugin does not contain native styles. 

This is a minimal plugin, function over form.  If you would like to extend it, or would like us to extend it in later versions, please post feature suggestions in the plugin's [support forum](http://wordpress.org/support/plugin/posts-in-page) or [contact us](http://www.ivycat.com/contact/).

== Installation ==

You can install from within WordPress using the Plugin/Add New feature, or if you wish to manually install:

1. Download the plugin.
1. Upload the entire `posts-in-page` directory to your plugins folder 
1. Activate the plugin from your WordPress plugin page
1. Start embedding your posts in whatever pages you like using shortcodes.

Shortcode usage:

* `[ic_add_posts]`  - Add all posts to a page (limit to what number posts in WordPress is set to), essentially adds blog "page" to page.
* `[ic_add_posts ids='1,2,3']` - show one or many posts by specifying the post ID(s) ( specify all post types )
* `[ic_add_posts post_type='post_type']` - show posts from a custom post type by specifying the post type slug ( must give post type if not a standard post ) add multiple post types by separating with commas (ex. `post_type='post_type1,post_type2'`)
* `[ic_add_posts showposts='5']` - limit number of posts (or override default setting)
* `[ic_add_posts orderby='title' order='ASC']` - orderby title - supports all WP orderby variables.  Order is optional, WP default 
* `[ic_add_posts category='category-slug']` - Show posts within a specific category.  Uses slugs, can have multiple but separate by commas. 	 category-1,category2, etc (no spaces.)
* `[ic_add_posts tag='tag-slug']`  - Show posts using a specific tag.  Like categories, it uses slugs, and can accommodate multiple tags separate by commas. 	 tag-1,tag-2, etc (no spaces.)
* `[ic_add_posts tax='taxonomy' term='term']` - limit posts to those that exist in a taxonomy and have a specific term.  Both are required for either one to work
* `[ic_add_posts template='template-in-theme-dir.php']` - In case you want to style your markup, add meta data, etc.  Each shortcode can reference a different template.  These templates must exist in the theme directory.

Or any combination of the above.

== Frequently Asked Questions ==

= What is the point of this plugin? =

Some of our clients wanted to output some posts in a specific page without fiddling with templates.

This plugin goes well with our [Simple Page Specific Sidebars](http://wordpress.org/extend/plugins/page-specific-sidebars/) plugin, and gives you more granular control of sidebars on specific categories, post-types, etc.

= How do I change the output template =

Simply copy the `posts_loop_template.php` to your theme directory and make changes as necessary. 

You can even rename it - but make sure to indicate that in the shortcode using the `template='template_name.php'`.  

You can even use different templates for each shortcode if you like.

= Does it work with custom post types? =

Absolutely.

= How about with custom taxonomies?

You bet.

== Screenshots ==

1. Embed a shortcode into a page and it will automatically pull in the post(s) you need.

== Changelog ==

= 1.2.0 =
* Code maintenance, added pagination, plugin now honors default post reading settings under Settings/Reading in the WordPress Dashboard.

= 1.1.1 =
* Code maintenance, fix for category bug, also added ability for multiple post types per shortcode.

= 1.1.0 =
* Code maintenance, squash non-critical debug notices.

= 1.0.10 =
* Added check for published/private posts.

= 1.0.9 =
* Fixed template bug introduced by comments.

= 1.0.8 =
* Code cleanup & indentation
* Added comments and notes to output template file: `posts_loop_template.php`

= 1.0.7 =
* Added Help Page under Setting in WP Dashboard.

= 1.0.6 =
* More plugin housekeeping.

= 1.0.4 =
* Minor housekeeping, added author, updated readme.txt.

= 1.0.3 =
* Added single post or specific post capabilities.

== Upgrade Notice ==

= 1.2.0 =
* Important feature update - please upgrade.

= 1.1.0 =
* Code maintenance & housekeeping - non-critical update.

= 1.0.10 =
* Added feature - non-critical update.

= 1.0.9 =
* Fixed template bug - please update.

= 1.0.8 =
* Added features and documentation - non-critical update.

= 1.0.7 =
* Added Help Page - non-critical update.

= 1.0.6 =
* Plugin housekeeping - non-critical update.

= 1.0.4 =
* Minor housekeeping, added author, updated readme.txt. Non-critical update.

= 1.0.3 =
* Added single post or specific post capabilities.  Important feature.

== Road Map ==

1. Suggest a feature...


