<div id="sidebar">
	<ul>
		<?php   /* Widgetized sidebar, if you have the plugin installed. */
			if ( !function_exists('dynamic_sidebar') || !dynamic_sidebar() ) : ?>

		<li>
			<?php include (TEMPLATEPATH . '/searchform.php'); ?>
		</li>

		<!-- Author information is disabled per default. Uncomment and fill in your details if you want to use it.
		<li><h2>Auteur</h2>
		<p>Une petite description de vue. Pas un roman... juste un apercu !</p>
		</li>
		-->

		<?php if ( is_404() || is_category() || is_day() || is_month() || is_year() || is_search() || is_paged() ) { ?>
		<li>
			<?php /* If this is a 404 page */ if (is_404()) { ?>
			<?php /* If this is a category archive */ } elseif (is_category()) { ?>
				<p>Vous vous trouvez dans les archives de la catégorie <?php single_cat_title(''); ?>.</p>
			<?php /* If this is a yearly archive */ } elseif (is_day()) { ?>
				<p>Vous vous trouvez dans les archives du blog <a href="<?php bloginfo('home'); ?>/"><?php echo bloginfo('name'); ?></a> pour la journée du <?php the_time('l j F Y'); ?>.</p>
			<?php /* If this is a monthly archive */ } elseif (is_month()) { ?>
				<p>Vous vous trouvez dans les archives du blog <a href="<?php bloginfo('url'); ?>/"><?php echo bloginfo('name'); ?></a> pour <?php the_time('F Y'); ?>.</p>
			<?php /* If this is a yearly archive */ } elseif (is_year()) { ?>
				<p>Vous vous trouvez dans les archives du blog <a href="<?php bloginfo('url'); ?>/"><?php echo bloginfo('name'); ?></a> pour l'année <?php the_time('Y'); ?>.</p>
			<?php /* If this is a monthly archive */ } elseif (is_search()) { ?>
				<p>Vous avez lancé la recherche <strong>'<?php the_search_query(); ?>'</strong> dans les archives du blog  <a href="<?php echo bloginfo('url'); ?>/"><?php echo bloginfo('name'); ?></a> . Si vous ne trouvez rien dans ces résultats, essayez l'un de ces liens.</p>
			<?php /* If this is a monthly archive */ } elseif (isset($_GET['paged']) && !empty($_GET['paged'])) { ?>
				<p>Vous vous trouvez dans les archives du blog <a href="<?php bloginfo('url'); ?>/"><?php echo bloginfo('name'); ?></a>.</p>
			<?php } ?>
		</li>
		<?php }?>

		<?php wp_list_pages('title_li=<h2>Pages</h2>' ); ?>

		<li><h2>Archives</h2>
			<ul>
				<?php wp_get_archives('type=monthly'); ?>
			</ul>
		</li>

		<?php wp_list_categories('show_count=1&title_li=<h2>Catégories</h2>'); ?>

		<?php /* Si c'est la page d'accueil */ if ( is_home() || is_page() ) { ?>
			<?php wp_list_bookmarks(); ?>

			<li><h2>Méta</h2>
				<ul>
					<?php wp_register(); ?>
					<li><?php wp_loginout(); ?></li>
					<li><a href="http://validator.w3.org/check/referer" title="This page validates as XHTML 1.0 Transitional"><abbr title="eXtensible HyperText Markup Language">XHTML valide</abbr></a></li>
					<li><a href="http://gmpg.org/xfn/"><abbr title="XHTML Friends Network">XFN</abbr></a></li>
					<li><a href="http://wordpress.org/" title="Powered by WordPress, state-of-the-art semantic personal publishing platform.">WordPress</a></li>
					<li><a href="http://wordpress-fr.net/" title="Communauté francophone de WordPress et WPmu.">WordPress Francophone</a></li>
					<?php wp_meta(); ?>
				</ul>
			</li>
		<?php } ?>

		<?php endif; ?>
	</ul>
</div>