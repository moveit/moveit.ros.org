<?php get_header(); ?>

<div id="content" class="widecolumn">
	<?php if (have_posts()) : while (have_posts()) : the_post(); ?>

		<div class="navigation">
			<div class="alignleft"><?php previous_post_link('&laquo; %link') ?></div>
			<div class="alignright"><?php next_post_link('%link &raquo;') ?></div>
		</div>

		<div class="post" id="post-<?php the_ID(); ?>">
			<h2><?php the_title(); ?></h2>
			<div class="entry">
				<?php the_content('<p class="serif">Lire la suite de l\'article &raquo;</p>'); ?>
				<?php wp_link_pages(array('before' => '<p><strong>Pages:</strong> ', 'after' => '</p>', 'next_or_number' => 'number')); ?>
				<?php the_tags( '<p>Tags: ', ', ', '</p>'); ?>
				<p class="postmetadata alt">
					<small>
						Cet article  a été publié
						le <?php the_time('l j F Y') ?> à <?php the_time() ?>
						et est classé dans <?php the_category(', ') ?>.
						Vous pouvez en suivre les commentaires par le biais du flux
						<?php post_comments_feed_link('RSS 2.0'); ?>.
						<?php if (('open' == $post-> comment_status) && ('open' == $post->ping_status)) {
							// Both Comments and Pings are open ?>
							Vous pouvez  <a href="#respond">laisser un commentaire</a>, ou <a href="<?php trackback_url(); ?>" rel="trackback">faire un trackback</a> depuis votre propre site.
						<?php } elseif (!('open' == $post-> comment_status) && ('open' == $post->ping_status)) {
							// Only Pings are Open ?>
							Les commentaires sont fermés, mais vous pouvez  <a href="<?php trackback_url(); ?> " rel="trackback">faire un trackback</a> depuis votre propre site.
						<?php } elseif (('open' == $post-> comment_status) && !('open' == $post->ping_status)) {
							// Comments are open, Pings are not ?>
							Vous pouvez aller directement à la fin et laisser un commentaire. Les pings ne sont pas autorisés.
						<?php } elseif (!('open' == $post-> comment_status) && !('open' == $post->ping_status)) {
							// Neither Comments, nor Pings are open ?>
							Les commentaires et pings sont fermés.
						<?php } edit_post_link('Modifier cet article.','',''); ?>
					</small>
				</p>
			</div>
		</div>
		<?php comments_template(); ?>

	<?php endwhile; else: ?>

		<p>Désolé, aucun article ne correspond à vos critères.</p>

	<?php endif; ?>
</div>

<?php get_footer(); ?>