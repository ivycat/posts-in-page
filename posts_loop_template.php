<?php
/**
 * @package Posts_in_Page
 * @author Eric Amundson <eric@ivycat.com>
 * @copyright Copyright (c) 2017, IvyCat, Inc.
 * @license http://www.gnu.org/licenses/gpl-2.0.html
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
		<?php if ( count( get_the_category() ) ) : ?>
			<span class="cat-links">
				<?php printf( __( '<span class="%1$s">Posted in</span> %2$s', 'posts-in-page' ), 'entry-utility-prep entry-utility-prep-cat-links', get_the_category_list( ', ' ) ); ?>
			</span>
			<span class="meta-sep">|</span>
		<?php endif; ?>
		<?php
			$tags_list = get_the_tag_list( '', ', ' );
			if ( $tags_list ):	?>
			<span class="tag-links">
				<?php printf( __( '<span class="%1$s">Tagged</span> %2$s', 'posts-in-page' ), 'entry-utility-prep entry-utility-prep-tag-links', $tags_list ); ?>
			</span>
			<span class="meta-sep">|</span>
		<?php endif; ?>
		<span class="comments-link"><?php comments_popup_link( __( 'Leave a comment', 'posts-in-page' ), __( '1 Comment', 'posts-in-page' ), __( '% Comments', 'posts-in-page' ) ); ?></span>
		<?php edit_post_link( __( 'Edit', 'posts-in-page' ), '<span class="meta-sep">|</span> <span class="edit-link">', '</span>' ); ?>
	</div>
</div>
<!-- // Post Wrap End -->
