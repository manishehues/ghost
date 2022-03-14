<?php
/**
 * The footer template.
 *
 * @package Avada
 * @subpackage Templates
 */

// Do not allow directly accessing this file.
if ( ! defined( 'ABSPATH' ) ) {
	exit( 'Direct script access denied.' );
}
?>
						<?php do_action( 'avada_after_main_content' ); ?>

					</div>  <!-- fusion-row -->
				</main>  <!-- #main -->
				<?php do_action( 'avada_after_main_container' ); ?>

				<?php
				/**
				 * Get the correct page ID.
				 */
				$c_page_id = Avada()->fusion_library->get_page_id();
				?>

				<?php
				/**
				 * Only include the footer.
				 */
				?>
				<?php if ( ! is_page_template( 'blank.php' ) ) : ?>

					<?php 
					if ( has_action( 'avada_render_footer' ) ) {
						do_action( 'avada_render_footer' );
					} else {
						Avada()->template->render_footer();
					} 
					?>

					<div class="fusion-sliding-bar-wrapper">
						<?php
						/**
						 * Add sliding bar.
						 */
						if ( Avada()->settings->get( 'slidingbar_widgets' ) ) {
							get_template_part( 'sliding_bar' );
						}
						?>
					</div>

					<?php do_action( 'avada_before_wrapper_container_close' ); ?>
				<?php endif; // End is not blank page check. ?>
			</div> <!-- wrapper -->
		</div> <!-- #boxed-wrapper -->
		<div class="fusion-top-frame"></div>
		<div class="fusion-bottom-frame"></div>
		<div class="fusion-boxed-shadow"></div>
		<a class="fusion-one-page-text-link fusion-page-load-link" tabindex="-1" href="#" aria-hidden="true"></a>

		<script>
			for (let e of document.querySelectorAll('input[type="range"].slider-progress')) {
				e.style.setProperty('--value', e.value);
				e.style.setProperty('--min', e.min == '' ? '0' : e.min);
				e.style.setProperty('--max', e.max == '' ? '100' : e.max);
				e.addEventListener('input', () => e.style.setProperty('--value', e.value));
			}


			jQuery(document).ready(function(){

				var url	= window.location.href; 
				console.log(url);
				//var hashed_url = url.split('#')[0]
                
                
          
				//jQuery("#menu-item-19 a").attr('href',hashed_url);
				jQuery(".page-id-116 li#menu-item-19 a").attr('href',url);

				jQuery('html, body').on('click','.page-id-116 li#menu-item-19',function(){
						jQuery('html, body').animate({                                   
			                scrollTop: jQuery("#quoteTable").offset().top-50
			            }, 1000);

			            return false;

				})

				

                
                
                
                /*setTimeout(function(){
					var hash_url = jQuery("#menu-item-19 a").attr('href');

					var new_url = hash_url.split('/#')[0];
					console.log(new_url);

					jQuery("#menu-item-19 a").attr('href',new_url+'#quoteTable');
				},1000)*/
                

			});
		</script>

		<div class="avada-footer-scripts">
			<?php wp_footer(); ?>
		</div>

		<?php get_template_part( 'templates/to-top' ); ?>
	</body>
</html>