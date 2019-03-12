<?php
/**
 * Template for displaying a post in the [ic_add_posts] shortcode.
 *
 * @package   Posts_in_Page
 * @author    Eric Amundson <eric@ivycat.com>
 * @copyright Copyright (c) 2019, IvyCat, Inc.
 * @link      https://ivycat.com
 * @since     1.0.0
 * @license   GPL-2.0-or-later
 */

?>

<!-- NOTE: If you need to make changes to this file, copy it to your current theme's main
	directory so your changes won't be overwritten when the plugin is upgraded. -->

<!-- Post Wrap Start-->
<div class="post hentry ivycat-post">

	<!-- 	This outputs the post TITLE -->
	<h2 class="entry-title"><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h2>

	<!-- 	This outputs the post EXCERPT.  To display full content including images and html,
		replace the_excerpt(); with the_content();  below. -->
	<div class="entry-summary">
		<?php the_excerpt(); ?>
	</div>

	<!--	This outputs the post META information -->
	<div class="entry-utility">
		<?php
		/* translators: used between list items, there is a space after the comma. */
		$categories_list = get_the_category_list( __( ', ', 'posts-in-page' ) );
		if ( $categories_list ) :
			?>
			<span class="cat-links">
				<?php
				printf(
					/* translators: 1: posted in label. 2: list of categories. */
					'<span class="entry-utility-prep entry-utility-prep-cat-links">%1$s</span> %2$s',
					esc_html__( 'Posted in', 'posts-in-page' ),
					$categories_list // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
				);
				?>
			</span>
			<span class="meta-sep">|</span>
		<?php endif; ?>
		<?php
		/* translators: used between list items, there is a space after the comma. */
		$tags_list = get_the_tag_list( '', __( ', ', 'posts-in-page' ) );
		if ( $tags_list ) :
			?>
			<span class="tag-links">
				<?php
				printf(
					/* translators: 1: tagged label. 2: list of tags. */
					'<span class="entry-utility-prep entry-utility-prep-tag-links">%1$s</span> %2$s',
					esc_html__( 'Tagged', 'posts-in-page' ),
					$tags_list // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
				);
				?>
			</span>
			<span class="meta-sep">|</span>
		<?php endif; ?>
		<span class="comments-link">
			<?php
			comments_popup_link(
				esc_html__( 'Leave a comment', 'posts-in-page' ),
				esc_html__( '1 Comment', 'posts-in-page' ),
				esc_html__( '% Comments', 'posts-in-page' )
			);
			?>
		</span>
		<?php edit_post_link( esc_html__( 'Edit', 'posts-in-page' ), '<span class="meta-sep">|</span> <span class="edit-link">', '</span>' ); ?>
	</div>
</div>
<!-- // Post Wrap End -->
