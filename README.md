=== Posts in Page ===
Contributors: sewmyheadon, ivycat, gehidore, dgilfoy
Donate link: http://www.ivycat.com/contribute/
Tags: shortcode, pages, posts, custom post types
Requires at least: 3.0
Tested up to: 3.5.1
Stable tag: 1.2.4
License: GPLv2 or later
License URI: http://www.gnu.org/licenses/gpl-2.0.html

Easily add one or more posts to any page using simple shortcodes.

== Description ==

Easily add one or more posts to any page using simple shortcodes. 

Supports categories, tags, custom post types, custom taxonomies, and more.

You can get all of the same functionality provided by this plugin by modifying your theme's template files; this plugin just makes it easy for anyone to _pull_ posts into other areas of the site without having to modify theme files.

Plugin is depending upon your theme's styling; version 1.x of this plugin _does not_ contain native styles. 

This is a minimal plugin, function over form.  If you would like to extend it, or would like us to extend it in later versions, please post feature suggestions in the plugin's [support forum](http://wordpress.org/support/plugin/posts-in-page) or [contact us](http://www.ivycat.com/contact/).

Give us feedback and contribute to this plugin on its [GitHub page](https://github.com/ivycat/Posts-in-Page)

== Installation ==

You can install from within WordPress using the Plugin/Add New feature, or if you wish to manually install:

1. Download the plugin.
1. Upload the entire `posts-in-page` directory to your plugins folder 
1. Activate the plugin from the plugin page in your WordPress Dashboard
1. Start embedding posts in whatever pages you like using shortcodes.

### Shortcode Usage 

To 'pull' posts into a page, you can either:

1. place a shortcode in the editor window of the page you're editing, or 
1. modify a theme template file using the shortcode in a PHP function.

#### Using Shortcodes in the WordPress editor

* `[ic_add_posts]`  - Add all posts to a page (limit to what number posts in WordPress is set to), essentially adds blog "page" to page.
* `[ic_add_posts ids='1,2,3']` - show one or many posts by specifying the post ID(s) ( specify all post types )
* `[ic_add_posts post_type='post_type']` - show posts from a custom post type by specifying the post type slug ( must give post type if not a standard post ) add multiple post types by separating with commas (ex. `post_type='post_type1,post_type2'`)
* `[ic_add_posts showposts='5']` - limit number of posts (or override default setting)
* `[ic_add_posts orderby='title' order='ASC']` - orderby title - supports all WP orderby variables.  Order is optional, WP default is 'DESC'.
* `[ic_add_posts category='category-slug']` - Show posts within a specific category.  Uses slugs, can have multiple but separate by commas. 	 category-1,category2, etc (no spaces.)
* `[ic_add_posts exclude_category='category-slug']` - Exclude posts within specific category. Uses slugs, can have multiple slugs seperated by commas.      category-1,category2, etc (no spaces.)
* `[ic_add_posts tag='tag-slug']`  - Show posts using a specific tag.  Like categories, it uses slugs, and can accommodate multiple tags separate by commas. 	 tag-1,tag-2, etc (no spaces.)
* `[ic_add_posts tax='taxonomy' term='term']` - limit posts to those that exist in a taxonomy and have a specific term.  Both are required for either one to work
* `[ic_add_posts template='template-in-theme-dir.php']` - In case you want to style your markup, add meta data, etc.  Each shortcode can reference a different template.  These templates must exist in the theme directory.
* `[ic_add_posts ignore_sticky_posts='no']` - Show sticky posts too (they're ignored by default).
* `[ic_add_posts paginate='yes']` - use pagination links (off by default)

Or any combination of the above.

#### Shortcode Examples

Not sure how to use the shortcodes above to get what you want?  Here are a few examples to get you started:

** Example 1 **

Let's say you want to pull a specific post called _"What I love about coffee"_, which has a post ID of 34, somewhere on your About Us page.  Your shortcode should look like this:

`[ic_add_posts ids='34']`

** Example 2 **

Alright, now lets say that you want to pull in all posts from two categories into your WordPress page.  One  category is _WordPress Rocks_ and the other is _WordPress Rolls_.  Plus, you'd like to display them three per page, rather than the default number of posts.  Depending on your category slugs, your shortcode should probably look like this:

`[ic_add_posts category='wordpress-rocks,wordpress-rolls' showposts='3']`

** Example 3 **

Now, you're ambitious and want to try something complex.  Let's say you've got a page called _Plugins Are Awesome_ and, in it, you want to pull in posts that match the following criteria:

* posts from a custom post type called _Testimonials_,
* posts that are in the _Testimonial Type_ custom taxonomy using the term _Customer_,
* you want to display six testimonials per page,
* you'd like them displayed in ascending order,
* finally, you've created a custom template to use in presenting these posts and named it `my-posts-in-page-template.php`

Your shortcode might look like this:

`[ic_add_posts showposts='6' post_type='testimonials' tax='testimonial-type' term='customer' order='ASC' template='my-posts-in-page-template.php']`

#### Using Shortcodes within a PHP function

If you'd like to use this plugin to pull posts directly into your theme's template files, you can drop the following WordPress function in your template files, replacing the `[shortcode]` part with your, custom shortcode.

`<?php echo do_shortcode("[shortcode]"); ?>`

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

= Will it make me coffee?

Not likely, but let us know if it does; then we'll know we have something special.

== Screenshots ==

1. Embed a shortcode into a page and it will automatically pull in the post(s) you need.
2. Embed shortcodes directly in your template using `do_shortcode`.

== Changelog ==

= 1.2.4 = 
* now you can set `more_tag=""` to remove the `[...] &hellip;` that unfortunetly shows up as `&hellip`

= 1.2.3 = 
* Added minor doc tweaks.

= 1.2.2 = 
* Added pagination, tweaked to turn off by default.
* Bug fixes.

= 1.2.1 =
* Added code to allow ignoring, or showing of sticky posts.  By default, sticky posts are ignored, but can be re-enabled using the shortcode `[ic_add_posts ignore_sticky_posts='no']`.

= 1.2.0 =
* Code maintenance to better comply with standards
* Added post pagination
* Plugin now honors default post reading settings under Settings/Reading in the WordPress Dashboard.
* Improved and simplified documentation.

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

= 1.2.4 = 
* Presentational fixes: clean up whitespace, extra tabs, add in customization of more tag.

= 1.2.3 = 
* Housekeeping only; not urgent.

= 1.2.2 =
* Small bug fixes for tags, pagination; not critical.

= 1.2.1 =
* Small feature update, not critical.

= 1.2.0 =
* Important feature update - please upgrade.

= 1.1.1 =
* Small bug fix; please upgrade.

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


