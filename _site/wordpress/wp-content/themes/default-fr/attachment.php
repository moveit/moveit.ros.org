<?php get_header(); ?>

<div id="content" class="widecolumn">
	<?php if (have_posts()) : while (have_posts()) : the_post(); ?>

		<div class="navigation">
			<div class="alignleft">&nbsp;</div>
			<div class="alignright">&nbsp;</div>
		</div>
		
		<?php $attachment_link = get_the_attachment_link($post->ID, true, array(450, 800)); // This also populates the iconsize for the next line ?>
		<?php $_post = &get_post($post->ID); $classname = ($_post->iconsize[0] <= 128 ? 'small' : '') . 'attachment'; // This lets us style narrow icons specially ?>
		
		<div class="post" id="post-<?php the_ID(); ?>">
			<h2><a href="<?php echo get_permalink($post->post_parent); ?>" rev="attachment"><?php echo get_the_title($post->post_parent); ?></a> &raquo; <a href="<?php echo get_permalink() ?>" rel="bookmark" title="Permanent Link: <?php the_title_attribute(); ?>"><?php the_title(); ?></a></h2>
			<div class="entry">
				<p class="<?php echo $classname; ?>"><?php echo $attachment_link; ?><br /><?php echo basename($post->guid); ?></p>
				<?php the_content('<p class="serif">Lire la suite de cet article &raquo;</p>'); ?>
				<?php link_pages('<p><strong>Pages :</strong> ', '</p>', 'number'); ?>
				<p class="postmetadata alt">
					<small>
						Cet article a été publié
						le <?php the_time('l j F Y') ?> à <?php the_time() ?>
						et est classée dans <?php the_category(', ') ?>.
						Vous pouvez suivre toutes les réponses à cet article par le biais du flux 
						<?php post_comments_feed_link('RSS 2.0'); ?>. 
						<?php if (('open' == $post-> comment_status) && ('open' == $post->ping_status)) {
							// Both Comments and Pings are open ?>
							Vous pouvez <a href="#respond">laisser un commentaire</a>, ou <a href="<?php trackback_url(); ?>" rel="trackback">faire un trackback</a> depuis votre propre site.
						<?php } elseif (!('open' == $post-> comment_status) && ('open' == $post->ping_status)) {
							// Only Pings are Open ?>
							Les commentaires sont fermés pour le moment, mais vous pouvez <a href="<?php trackback_url(); ?> " rel="trackback">faire un trackback</a> depuis votre propre site.
						<?php } elseif (('open' == $post-> comment_status) && !('open' == $post->ping_status)) {
							// Comments are open, Pings are not ?>
							Vous poussez aller directement à la fin et laisser un commentaire. Le ping n'est pas autorisé.
						<?php } elseif (!('open' == $post-> comment_status) && !('open' == $post->ping_status)) {
							// Neither Comments, nor Pings are open ?>
							Les commentaires tout comme les pings sont fermés.
						<?php } edit_post_link('Modifier cet article.','',''); ?>
					</small>
				</p>
			</div>
		</div>
		
		<?php comments_template(); ?>
	<?php endwhile; else: ?>
	
		<p>Désolé, aucun fichier attaché ne correspond à vos critères.</p>
		
	<?php endif; ?>
</div>

<?php get_footer(); ?>