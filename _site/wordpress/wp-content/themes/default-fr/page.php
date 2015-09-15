<?php get_header(); ?>

<div id="content" class="narrowcolumn">

	<?php if (have_posts()) : while (have_posts()) : the_post(); ?>
		<div class="post" id="post-<?php the_ID(); ?>">
			<h2><?php the_title(); ?></h2>
			<div class="entry">
				<?php the_content('<p class="serif">Lire le reste de cette page &raquo;</p>'); ?>
				<?php wp_link_pages(array('before' => '<p><strong>Pages:</strong> ', 'after' => '</p>', 'next_or_number' => 'number')); ?>
			</div>
		</div>
		<?php edit_post_link('Modifier cette page.', '<p>', '</p>'); ?>
	 <?php endwhile; endif; ?>

</div>

<?php get_sidebar(); ?>
<?php get_footer(); ?>