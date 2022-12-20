=== Posts in Page ===
Contributors: ivycat, sewmyheadon, anvilzephyr, bradyvercher, jasonm4563, pjackson1972
Tags: shortcode, pages, posts, custom post types, taxonomy, terms
Requires at least: 3.0
Tested up to: 5.2
Stable tag: 1.4.4
License: GPLv2 or later
License URI: https://www.gnu.org/licenses/gpl-2.0.html

Easily add one or more posts to any page using simple shortcodes.

== Description ==

Easily add one or more posts to any page using simple shortcodes.

Supports categories, tags, custom post types, custom taxonomies, date ranges, post status, and much more.

You can get all of the same functionality provided by this plugin by modifying your theme's template files; this plugin just makes it easy for anyone to _pull_ posts into other areas of the site without having to get their hands dirty with code.

Plugin is depending upon your theme's styling; version 1.x of this plugin _does not_ contain native styles.

This is a minimal plugin, function over form. Give us feedback, suggestions, bug reports, and any other contributions on the in the plugin's [GitHub repository](https://github.com/ivycat/posts-in-page).

== Installation ==

You can install from within WordPress using the Plugin/Add New feature, or if you wish to manually install:

1. Download the plugin.
1. Upload the entire `posts-in-page` directory to your plugins folder
1. Activate the plugin from the plugin page in your WordPress Dashboard
1. Start embedding posts in whatever pages you like using shortcodes.

### Shortcode Usage

To 'pull' posts into a page, you can:

1. place a shortcode in the editor window of the page you're editing (Classic Editor),
1. place a shortcode in a shortcode block on the page you're editing (Gutenberg Editor),
1. modify a theme template file using the shortcode in a PHP function.

#### Using Shortcodes in the WordPress editor

* `[ic_add_posts]` - Add all posts to a page (limit to what number posts in WordPress is set to), essentially adds blog "page" to page.
* `[ic_add_posts post_type='post_type']` - Show posts from a custom post type by specifying the post type slug (must give post type if not a standard post). Add multiple post types by separating with commas (ex. `post_type='post_type1,post_type2'`).
* `[ic_add_posts showposts='5']` - Limit number of posts (or override default setting).
* `[ic_add_posts orderby='title' order='ASC']` - Order the post output using `orderby` - supports all WP [orderby parameters](https://codex.wordpress.org/Class_Reference/WP_Query#Order_.26_Orderby_Parameters).  Order is optional, default is 'DESC'.
* `[ic_add_posts ids='1,2,3']` - Show one or many posts by specifying the post ID(s) (specify all post types).
* `[ic_add_posts exclude_ids='4,5,6']` - Exclude specific post ID(s) from the query.
* `[ic_add_posts category='category-slug']` - Show posts within a specific category by category slug. Separate multiple categories with commas.
* `[ic_add_posts cats='2,13']` - Show posts within a specific category by category IDs. Separate multiple categories with commas.
* `[ic_add_posts exclude_category='category-slug']` - Exclude posts within specific category. Uses slugs, can list multiple category slugs separated by commas.
* `[ic_add_posts tag='tag-slug']` - Show posts using a specific tag. Like categories, it uses slugs, and can accommodate multiple tags separated by commas.
* `[ic_add_posts tax='taxonomy' term='term']` - Limit posts to those that exist in a taxonomy and have a specific term. Both are required for either one to work and you must specify custom post_types.
* `[ic_add_posts post_format='post-format-status']` - Select post formats. Use 'post-format-' followed by the format type (chat, aside, video, etc.). Use comma to separate post formats. To pull all posts with the quotes format, you'd use `[ic_add_posts post_format='post-format-quote']`.
* `[ic_add_posts ignore_sticky_posts='no']` - Show sticky posts too (they're ignored by default).
* `[ic_add_posts paginate='yes']` - Use pagination links (off by default).
* `[ic_add_posts label_next='Next' label_previous='Previous']` - Customize 'Next' and 'Previous' labels used by pagination.
* `[ic_add_posts post_status='private']` - Show posts with the specified status. By default it shows only posts with 'publish' status. To select multiple statuses, separate them with commas like so: `post_status='private,publish'`.
* `[ic_add_posts more_tag='Read more']` - Set the link text for read more links shown after an excerpt.
* `[ic_add_posts date='today-1']` - Choose the relative date of included posts. Supports formatting like `date='today-1'` (today minus 1 day), `date='week-2'` (today minus 2 weeks), `date='month-1'` (today minus 1 month), `date='year-1'` (today minus 1 year).
* `[ic_add_posts from_date='15-01-2016' to_date='31-12-2016']` - Shows posts published within a specified absolute date range.
* `[ic_add_posts offset='3']` - Displays posts after the offset. An `offset='3'` will show all posts from the 4th one back.
* `[ic_add_posts none_found='No Posts Found']` - Custom message to display when no posts are found.
* `[ic_add_posts template='template-in-theme-dir.php']` - In case you want to style your markup, add meta data, etc. Each shortcode can reference a different template. These templates must exist in the theme directory or in a sub-directory named _posts-in-page_.

Or any combination of the above.

#### Shortcode Examples

Not sure how to use the shortcodes above to get what you want?  Here are a few examples to get you started:

** Example 1 **

Let's say you want to pull a specific post called _"What I love about coffee"_, which has a post ID of 34, somewhere on your About Us page.  Your shortcode should look like this:

`[ic_add_posts ids='34']`

** Example 2 **

Alright, now let's say that you want to pull in all posts from two categories into your WordPress page.  One category is _WordPress Rocks_ and the other is _WordPress Rolls_.  Plus, you'd like to display them three per page, rather than the default number of posts.  Depending on your category slugs, your shortcode should probably look like this:

`[ic_add_posts category='wordpress-rocks,wordpress-rolls' showposts='3']`

** Example 3 **

Now, you're ambitious and want to try something complex.  Let's say you've got a page called _Plugins Are Awesome_ and, in it, you want to pull in posts that match the following criteria:

* posts from a custom post type called _Testimonials_,
* posts that are in the _Testimonial Type_ custom taxonomy using the term _Customer_,
* you want to display six testimonials per page,
* you'd like them displayed in ascending order,
* finally, you've created a custom template to use in presenting these posts and named it `my-posts-in-page-template.php`.

Your shortcode might look like this:

`[ic_add_posts showposts='6' post_type='testimonials' tax='testimonial-type' term='customer' order='ASC' template='my-posts-in-page-template.php']`

#### Using Shortcodes within a PHP function

If you'd like to use this plugin to pull posts directly into your theme's template files, you can drop the following WordPress function in your template files, replacing the `[shortcode]` part with your, custom shortcode.

`<?php echo do_shortcode("[shortcode]"); ?>`

### Developer Hooks

There are several hooks you can use to filter the output of your template files:

* `posts_in_page_results` - Filter results
* `posts_in_page_args` - Filter the query arguments
* `posts_in_page_paginate` - Filter pagination
* `posts_in_page_pre_loop` - Runs right before the loop (posts_loop_template.php)
* `posts_in_page_post_loop` - Runs right after the loop

== Frequently Asked Questions ==

= What is the point of this plugin? =

Posts in Page makes it easy to output or embed the posts, pages, or custom post types in any page without modifying WordPress theme templates.

= Does it work with Gutenberg? =

Absolutely. Just use a Gutenberg Shortcode block or the Classic Edit block to add your shortcode.

= Wait! The posts aren't styled like the posts on the rest of my site.

That is likely true. Currently, Posts in Page doesn't output any styles; just some basic markup. To change how the posts appear on the page, you'll need to change the _output template_.

= How do I change the output template? =

Simply copy the `posts_loop_template.php` to your theme directory and make changes as necessary.

You can even rename it - but make sure to indicate that in the shortcode using the `template='my-new-template-name.php'`.

For file housekeeping, you can also create a _posts-in-page_ folder in your theme to store all of your custom templates. It isn't necessary to specify the _posts-in-page_ folder in your shortcode - Posts in Page will find it automatically.
You can even use multiple templates for use with different shortcodes.

= Does it work with custom post types? =

Absolutely.

= Does it work with custom taxonomies?

You bet.

= Will it make me coffee? =

Not likely, but let us know if it does; then we'll *know* we have something special.

= How can I help? =

We'd love feedback, issues, pull requests, and ideas on the [Posts in Page GitHub repo](https://github.com/ivycat/posts-in-page).

== Screenshots ==

1. Embed a shortcode into a page, and it will automatically pull in the post(s) you need.
2. Embed shortcode using a Gutenberg shortcode block.
3. Embed shortcodes directly in your template using `do_shortcode`.

== Changelog ==

= 1.4.4 =
* Fix issue to prevent fatal errors caused by setting the global query to null.

= 1.4.3 =
* Fix issue with missing wrapping pagination div.
* Fix a few `esc_html_e` instances.

= 1.4.2 =
* Thanks to Brady Vercher (@bradyvercher) for the thorough code review and fixes.
* Cleanup code to better conform to WP Coding standards and remove legacy cruft.
* PHPCS configuration.
* Update docblock and comments.
* Remove legacy i18n code.
* Escaping output of URLs, translation strings, and more.
* Updated enqueueing to add version for cache busting, add missing jQuery dependency, load admin script in footer.

= 1.4.1 =
* Fix wp_reset_query bug
* Patch pagination to make it more reliable across themes.

= 1.4.0 =
* Add templates folder to structure and moved default template there.
* Fix pagination issues #42, 59.
* Fix bug preventing including or excluding multiple post_types or categories.
* Add a few new date-based shortcode arguments including `date=` and `from_date=` and `to_date=`.
* Document post format support, new shortcode arguments.
* Code cleanup.
* Updates to admin page layout and documentation.

= 1.3.1 =
* File header housekeeping.
* Code cleanup.
* Fix WPML compatibility issue (thanks @azrall).
* Document new shortcode functions including `exclude_ids`, `more_tag`.

= 1.3.0 =
* File reorganization / housekeeping.
* Admin UI cleanup.
* Security: Fixed [directory traversal vulnerability](https://www.pluginvulnerabilities.com/2017/02/13/authenticated-local-file-inclusion-lfi-vulnerability-in-posts-in-page/).
* Added ability to optionally include private posts - Thanks, StarsoftAnalysis!

= 1.2.4 =
* now you can set `more_tag=""` to remove the `[...] &hellip;` that unfortunetly shows up as `&hellip`.

= 1.2.3 =
* Added minor doc tweaks.

= 1.2.2 =
* Added pagination, tweaked to turn off by default.
* Bug fixes.

= 1.2.1 =
* Added code to allow ignoring, or showing of sticky posts.  By default, sticky posts are ignored, but can be re-enabled using the shortcode `[ic_add_posts ignore_sticky_posts='no']`.

= 1.2.0 =
* Code maintenance to better comply with standards.
* Added post pagination.
* Plugin now honors default post reading settings under Settings/Reading in the WordPress Dashboard.
* Improved and simplified documentation.

= 1.1.1 =
* Code maintenance, fix for category bug, also added the ability for multiple post types per shortcode.

= 1.1.0 =
* Code maintenance, squash non-critical debug notices.

= 1.0.10 =
* Added check for published/private posts.

= 1.0.9 =
* Fixed template bug introduced by comments.

= 1.0.8 =
* Code cleanup & indentation.
* Added comments and notes to output template file: `posts_loop_template.php`.

= 1.0.7 =
* Added Help Page under Setting in WP Dashboard.

= 1.0.6 =
* More plugin housekeeping.

= 1.0.4 =
* Minor housekeeping, added author, updated readme.txt.

= 1.0.3 =
* Added single post or specific post capabilities.

== Upgrade Notice ==

= 1.4.4 =
  * Bug fix - please upgrade for stability.

= 1.4.3 =
* Pagination bug fix and two minor i18n updates for translatable strings. Please upgrade.

= 1.4.2 =
* Code review, cleanup. Minor fixes and security updates. Please upgrade.

= 1.4.1 =
* Critical bug fixes. Please upgrade.

= 1.4.0 =
* Bug fixes, new shortcodes, and code improvements. Please upgrade.

= 1.3.0 =
* Important security and version updates. Please upgrade.

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
