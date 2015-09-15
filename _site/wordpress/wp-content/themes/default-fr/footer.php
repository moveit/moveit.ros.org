		<hr />
		<div id="footer">
			<!-- If you'd like to support WordPress, having the "powered by" link somewhere on your blog is the best way; it's our only promotion or advertising. -->
			<p>
				<?php bloginfo('name'); ?> est fièrement propulsé par <a href="http://wordpress.org/">WordPress</a>
				<br />
				<a href="feed:<?php bloginfo('rss2_url'); ?>">Articles (RSS)</a> et <a href="feed:<?php bloginfo('comments_rss2_url'); ?>">Commentaires (RSS)</a>.
				<!-- <?php echo get_num_queries(); ?> requêtes. <?php timer_stop(1); ?> secondes. -->
			</p>
		</div>
	</div>
	<!-- Gorgeous design by Michael Heilemann - http://binarybonsai.com/kubrick/ -->
	<?php /* "Just what do you think you're doing Dave?" */ ?>
	<?php wp_footer(); ?>
	</body>
</html>