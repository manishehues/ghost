<?php
if ( ! defined( 'ABSPATH' ) ) exit;
/** 
 * Master Class: Front
*/
class Wpsd_Front {

	use HM_Currency, Wpsd_Common;

	private $wpsd_version;

	function __construct( $version ) {
		$this->wpsd_version = $version;
		$this->wpsd_assets_prefix = substr(WPSD_PRFX, 0, -1) . '-';

		add_action('wp_ajax_get_des_res',array( $this,'get_des_res'));
		add_action('wp_ajax_nopriv_get_des_res',array( $this, 'get_des_res'));

		add_action( 'wp_ajax_file_upload',array( $this, 'file_upload_callback' ));
		add_action( 'wp_ajax_nopriv_file_upload',array( $this, 'file_upload_callback' ));
	}


	function wpsd_front_assets() {

		global $post;
    	
		//if ( is_a( $post, 'WP_Post' ) && has_shortcode( $post->post_content, 'wp_stripe_donation') ) {
			
			wp_enqueue_style(
				$this->wpsd_assets_prefix . 'front-style',
				WPSD_ASSETS . 'css/' . $this->wpsd_assets_prefix . 'front-style.css',
				array(),
				$this->wpsd_version,
				FALSE
			);

			if ( ! wp_script_is('jquery') ) {
				wp_enqueue_script('jquery');
			}

			wp_enqueue_script('checkout-stripe-js', '//js.stripe.com/v3/');

			wp_enqueue_script(
				$this->wpsd_assets_prefix . 'front-script',
				WPSD_ASSETS . 'js/' . $this->wpsd_assets_prefix . 'front-script.js',
				array('jquery'),
				$this->wpsd_version,
				TRUE
			);

			$wpsdKeySettings		= stripslashes_deep( unserialize( get_option('wpsd_key_settings') ) );
			$wpsdPrimaryKey 		= isset( $wpsdKeySettings['wpsd_private_key'] ) ? $wpsdKeySettings['wpsd_private_key'] : 'pk_test_12345';

			$wpsdGeneralSettings 	= stripslashes_deep( unserialize( get_option('wpsd_general_settings') ) );
			$wpsdDonateCurrency		= isset( $wpsdGeneralSettings['wpsd_donate_currency'] ) ? $wpsdGeneralSettings['wpsd_donate_currency'] : 'USD';

			$wpsdAdminArray = array(
				'stripePKey'	=> $wpsdPrimaryKey,
				'ajaxurl' 		=> admin_url('admin-ajax.php'),
				'currency'		=> $wpsdDonateCurrency,
				'successUrl'	=> get_site_url() . '/words-pricing-thank-you',
				'idempotency' 	=> $this->wpsd_rand_string(8),
			);

			wp_localize_script( $this->wpsd_assets_prefix . 'front-script', 'wpsdAdminScriptObj', $wpsdAdminArray );
		//}
	}

	function wpsd_load_shortcode() {
		add_shortcode('wp_words_count_pricing_quote', array($this, 'wpsd_load_shortcode_view'));
	}

	function wpsd_load_shortcode_view() {
		$output = '';
		$rowCount = $this->fetch_quote_table_feilds();
		ob_start();
		include(plugin_dir_path(__FILE__) . '/view/wpsd-front-view.php');
		$output .= ob_get_clean();
		return $output;
	}

	function wpsd_donation_handler() {

		if (
			! empty( $_POST['email'] ) 
			&& ! empty( $_POST['amount'] ) 
			&& ! empty( $_POST['name'] ) 
			
		) {
			
			$wpsdDonationFor 	= "New Words Pricing Quote"; //sanitize_text_field( $_POST['donation_for'] );
			$wpsdName 			= sanitize_text_field( $_POST['name'] );
			$wpsdEmail 			= sanitize_email( $_POST['email'] );
			$wpsdAmount 		= filter_var( $_POST['amount'], FILTER_SANITIZE_STRING );
			$wpsdCurrency 		= sanitize_text_field( $_POST['currency'] );
			$idempotency 		= preg_replace('/[^a-z\d]/im', '', $_POST['idempotency']);

			$wpsdKeySettings	= stripslashes_deep( unserialize( get_option('wpsd_key_settings') ) );
			$wpsdStripeKey 		= isset( $wpsdKeySettings['wpsd_secret_key'] ) ? $wpsdKeySettings['wpsd_secret_key'] : '';
			
			require_once( WPSD_PATH . 'front/stripe/init.php' );
			
			\Stripe\Stripe::setApiKey( base64_decode( $wpsdStripeKey ) );

			try {
				$intent = \Stripe\PaymentIntent::create([
					'amount' 		=> (number_format($wpsdAmount, 2, '.', '') * 100),
					'currency' 		=> $wpsdCurrency,
					'description'	=> $wpsdDonationFor,
					'receipt_email'	=> $wpsdEmail,
					// Verify your integration in this guide by including this parameter
					'metadata' 		=> ['integration_check' => 'accept_a_payment'],
				], [
					'idempotency_key' => $idempotency
				] );
				
				if ( '' !== $intent->client_secret ) {
					die( json_encode( array(
						'status' => 'success',
						'client_secret' => $intent->client_secret
					) ) );
				} else {
					die( json_encode( array(
						'status' => 'error',
						'message' => 'Something went wrong!'
					) ) );
				}
			} 
			catch ( \Stripe\Exception\CardException $e ) {
				echo '<pre>';
				print_r( $e );
			}
			catch (\Stripe\Exception\RateLimitException $e) {
			  	// Too many requests made to the API too quickly
				echo '<pre>';
				print_r( $e );
			} catch (\Stripe\Exception\InvalidRequestException $e) {
			  	// Invalid parameters were supplied to Stripe's API
			  	echo '<pre>';
				print_r( $e );
			} catch (\Stripe\Exception\AuthenticationException $e) {
				// Authentication with Stripe's API failed
				// (maybe you changed API keys recently)
				echo '<pre>';
				print_r( $e );
			} catch (\Stripe\Exception\ApiConnectionException $e) {
			  	// Network communication with Stripe failed
			  	echo '<pre>';
				print_r( $e );
			} catch (\Stripe\Exception\ApiErrorException $e) {
			  	// Display a very generic error to the user, and maybe send
			  	// yourself an email
			  	echo '<pre>';
				print_r( $e );
			} catch (Exception $e) {
			  	// Something else happened, completely unrelated to Stripe
			  	echo '<pre>';
				print_r( $e );
			}
		}
	}

	function wpsd_donation_handler_success() {

		if (
			! empty( $_REQUEST['wpsd_donator_email'] ) 
			&& ! empty( $_REQUEST['wpsd_donate_other_amount'] ) 
			&& ! empty( $_REQUEST['first_name'] ) 
			
		) {
			
			$wpsdDonationFor 	= "";//sanitize_text_field( $_REQUEST['wpsd_donation_for'] );
			$wpsdName 			= "";//sanitize_text_field( $_REQUEST['wpsd_donator_name'] );
			$wpsdEmail 			= sanitize_email( $_REQUEST['wpsd_donator_email'] );
			$wpsdPhone 			= sanitize_text_field( $_REQUEST['wpsd_donator_phone'] );
			$wpsdAmount 		= filter_var( $_REQUEST['wpsd_donate_other_amount'], FILTER_SANITIZE_STRING );
			$wpsdCurrency 		= "";//sanitize_text_field( $_REQUEST['currency'] );

			$wpsdGeneralSettings 	= stripslashes_deep( unserialize( get_option('wpsd_general_settings') ) );
			$wpsdDonationEmail 		= isset( $wpsdGeneralSettings['wpsd_donation_email'] ) ? $wpsdGeneralSettings['wpsd_donation_email'] : '';

			$post_array = [ 'wpsdDonationFor'=>$wpsdDonationFor,
							'wpsdName'=>$wpsdName,
							'wpsdEmail'=>$wpsdEmail,
							'wpsdAmount'=>$wpsdAmount,
							'wpsdPhone'=>$wpsdPhone,

							'order_title'=>sanitize_text_field($_REQUEST['order_title'] ),
							'acadmic_doc_title'=>sanitize_text_field($_REQUEST['acadmic_doc_title'] ),
							'is_acadmic_doc'=>sanitize_text_field($_REQUEST['is_acadmic_doc'] ),
							'document_check_biblio'=>sanitize_text_field($_REQUEST['document_check_biblio'] ),
							'document_check_references'=>sanitize_text_field($_REQUEST['document_check_references'] ),
							'document_science_arts'=>sanitize_text_field($_REQUEST['document_science_arts'] ),
							'document_style_guide'=>sanitize_text_field($_REQUEST['document_style_guide'] ),
							'document_english_version'=>sanitize_text_field($_REQUEST['document_english_version'] ),
							'order_notes'=>sanitize_text_field($_REQUEST['order_notes'] ),
							'editor_code'=>sanitize_text_field($_REQUEST['editor_code'] ),
							'first_name'=>sanitize_text_field($_REQUEST['first_name'] ), 
							'last_name'=>sanitize_text_field($_REQUEST['last_name'] ),
							'addr_line'=>sanitize_text_field($_REQUEST['addr_line'] ),
							'addr_city'=>sanitize_text_field($_REQUEST['addr_city'] ),
							'addr_state'=>sanitize_text_field($_REQUEST['addr_state'] ),
							'addr_postalcode'=>sanitize_text_field($_REQUEST['addr_postalcode'] ),
							'addr_country'=>sanitize_text_field($_REQUEST['addr_country'] ),
							'time_frame'=>sanitize_text_field($_REQUEST['time_frame'] ),
							'numberOfWords'=>sanitize_text_field($_REQUEST['numberOfWords'] ),
							'file_url'=>sanitize_text_field($_REQUEST['file_url'] )
						];

			
			// Send email to admin
			if ( '' !== $wpsdDonationEmail ) {
				$this->wpsd_email_to_admin( $wpsdDonationEmail, $wpsdName, $wpsdAmount, $wpsdCurrency, $wpsdDonationFor, $wpsdEmail,$post_array );
			}

			// Send email to client
			if ( '' !== $wpsdEmail ) {
				$this->wpsd_email_to_client( $wpsdEmail, $wpsdName, $wpsdAmount, $wpsdCurrency, $wpsdDonationFor );
			}
			
			// Save data to database
			$this->wpsd_save_donation_info( $wpsdDonationFor, $wpsdName,$wpsdPhone, $wpsdEmail, $wpsdAmount, $wpsdCurrency, $post_array );

			// Upon Successful transaction, reply an Success message
			die( json_encode( array( 'status' => 'success' ) ) );
		}
	}

	function wpsd_save_donation_info( $wpsdDonationFor, $wpsdName, $wpsdPhone, $wpsdEmail, $wpsdAmount, $wpsdCurrency,$post_array ) {

		global $wpdb;

		return $wpdb->query('INSERT INTO ' . WPSD_TABLE . '(
			wpsd_donation_for,
			wpsd_donator_name,
			wpsd_donator_email,
			wpsd_donator_phone,
			wpsd_donated_amount,
			wpsd_donation_datetime,
			order_title,
			acadmic_doc_title,
			is_acadmic_doc,
			document_check_biblio,
			document_check_references,
			document_science_arts,
			document_style_guide,
			document_english_version,
			order_notes,
			editor_code,
			first_name,
			last_name,
			addr_line,
			addr_city,
			addr_state,
			addr_postalcode,
			addr_country,
			time_frame,
			numberOfWords,
			document_path
		) VALUES (

			"' . $wpsdDonationFor . '",
			"' . $wpsdName . '",
			"' . $wpsdEmail . '",
			"' . $wpsdPhone . '",
			"' . $wpsdAmount . '",
			"' . date('Y-m-d h:i:s') . '",
			"' . $post_array['order_title'] . '",
			"' . $post_array['acadmic_doc_title'] . '",
			"' . $post_array['is_acadmic_doc'] . '",
			"' . $post_array['document_check_biblio'] . '",
			"' . $post_array['document_check_references'] . '",
			"' . $post_array['document_science_arts'] . '",
			"' . $post_array['document_style_guide'] . '",
			"' . $post_array['document_english_version'] . '",
			"' . $post_array['order_notes'] . '",
			"' . $post_array['editor_code'] . '",
			"' . $post_array['first_name'] . '",
			"' . $post_array['last_name'] . '",
			"' . $post_array['addr_line'] . '",
			"' . $post_array['addr_city'] . '",
			"' . $post_array['addr_state'] . '",
			"' . $post_array['addr_postalcode'] . '",
			"' . $post_array['addr_country'] . '",
			"' . $post_array['time_frame'] . '",
			"' . $post_array['numberOfWords'] . '",
			"' . $post_array['file_url'] . '"
		)');
	}

	function  wpsd_email_to_admin( $wpsdDonationEmail, $wpsdName, $wpsdAmount, $wpsdCurrency, $wpsdDonationFor, $wpsdEmail,$post_array ) {
		
		$headers = array('Content-Type: text/html; charset=UTF-8');

		$wpsdEmailSubject = __('New Words Pricing Quote Received!');
		$wpsdEmailMessage = __('First Name: ') . $post_array['first_name'];
		$wpsdEmailMessage .= '<br>' . __('Last Name: ') . $post_array['last_name'];
		$wpsdEmailMessage .= '<br>' . __('Email: ') . $wpsdEmail;
		$wpsdEmailMessage .= '<br>' . __('Amount: ') . $wpsdAmount . $wpsdCurrency;
		$wpsdEmailMessage .= '<br>' . __('No Of Words : ') . $post_array['numberOfWords'];
		$wpsdEmailMessage .= '<br>' . __('Order Completed in Time : ') . $post_array['time_frame'];

		return wp_mail( $wpsdDonationEmail, $wpsdEmailSubject, $wpsdEmailMessage, $headers );
	}

	function wpsd_email_to_client( $wpsdEmail, $wpsdName, $wpsdAmount, $wpsdCurrency, $wpsdDonationFor ) {

		$wpsdEmailSettings 		= $this->get_receipt_email_settings();
		$wpsd_re_email_subject  = isset( $wpsdEmailSettings['wpsd_re_email_subject'] ) ? $wpsdEmailSettings['wpsd_re_email_subject'] : __('Amount Received', WPSD_TXT_DOMAIN);
        $wpsd_re_email_heading  = isset( $wpsdEmailSettings['wpsd_re_email_heading'] ) ? $wpsdEmailSettings['wpsd_re_email_heading'] : '';
        $wpsd_re_email_footnote	= isset( $wpsdEmailSettings['wpsd_re_email_footnote'] ) ? $wpsdEmailSettings['wpsd_re_email_footnote'] : '';

		$headers = array('Content-Type: text/html; charset=UTF-8');

		$donorEmailSubject = esc_html( $wpsd_re_email_subject );
		$donorEmailMessage = __('Hello', WPSD_TXT_DOMAIN) . ' ' . $wpsdName . ',';
		$donorEmailMessage .= '<br>' . esc_html( $wpsd_re_email_heading );
		$donorEmailMessage .= '<br>' . __('Amount received: ', WPSD_TXT_DOMAIN) . $wpsdAmount . $wpsdCurrency;
		$donorEmailMessage .= '<br>' . __('For: ', WPSD_TXT_DOMAIN) . $wpsdDonationFor;
		$donorEmailMessage .= '<br><br>' . esc_html( $wpsd_re_email_footnote );
		
		return wp_mail( $wpsdEmail, $donorEmailSubject, $donorEmailMessage, $headers );
	}
/* =======================table fetch ===================================== */
	function fetch_quote_table_feilds($post=null){
	
		global $table_prefix, $wpdb;
		$pricing_table = $table_prefix . 'word_cost';

		$totalCount = " SELECT * FROM $pricing_table group by upto_words order by upto_words ASC";
		return $wpdb->get_results( $totalCount);

		//return $wpdb->get_results(" SELECT * FROM $pricing_table "); 
	}
	
	
	function wpsd_donation_success_template( $template ) {
		
		global $post;
		
		if ( 'wpsd-thank-you' == $post->post_name ) {
			return WPSD_PATH . 'front/view/wpsd-donation-success.php';
		}
		
		return $template;
		
	}
	
	function wpsd_rand_string( $length ) {
		$chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
		return substr(str_shuffle($chars),0,$length);
	}
	
	
	/* =======================table Append function =====================================*/

	  function get_des_res(){

		global  $wpdb ,$table_prefix;
		$pricing_table = $table_prefix . 'word_cost';

		$wordCount = $_REQUEST['word_c'];
		if(!empty($wordCount) && $wordCount > 0) {

			//echo $wordCountlower = "SELECT upto_words FROM $pricing_table WHERE upto_words <= $wordCount order  by upto_words DESC limit 1 ";
			$wordCountlower = "SELECT upto_words FROM $pricing_table WHERE upto_words >= $wordCount order  by upto_words ASC limit 1 ";
			$wordCountlowerResult = $wpdb->get_row( $wordCountlower);

			//print_r($wordCountlowerResult);
			//echo  "------<br>";

			$wordCountupper = "SELECT upto_words FROM $pricing_table WHERE upto_words > $wordCount limit 1";
			$wordCountupperResult = $wpdb->get_row( $wordCountupper );

			if(empty($wordCountupperResult)){
				$wordCountupper = "SELECT upto_words FROM $pricing_table WHERE upto_words < ".$wordCount." order by upto_words DESC limit 1";
				$wordCountupperResult = $wpdb->get_row( $wordCountupper );
			}

			/*print_r( $wordCountlowerResult );
			echo $_REQUEST['word_c'] ."=====oooo====".$wordCountlowerResult->upto_words;

			echo "<br>";*/

			if( $_REQUEST['word_c'] <=  $wordCountlowerResult->upto_words ){
				$totalCount = " SELECT * FROM $pricing_table WHERE upto_words = ".$wordCountlowerResult->upto_words;
				$totalCountRes_price = $wpdb->get_results( $totalCount);

				$upto_words = $wordCountlowerResult->upto_words;


			} else {

				$totalCount = " SELECT * FROM $pricing_table WHERE upto_words = ".$wordCountupperResult->upto_words;
				$totalCountRes_price = $wpdb->get_results( $totalCount);

				$upto_words = $wordCountupperResult->upto_words;
			}

			$totalCount = "SELECT * FROM $pricing_table group by upto_words order by upto_words ASC";
			$totalCountRes = $wpdb->get_results( $totalCount);


			//print_r($totalCountRes);


			ob_start();
			include(plugin_dir_path(__FILE__) . '/view/table-rander.php');
			echo $output .= ob_get_clean();
		
			die;

		}else{
			echo " error";
		}
	} 


/* =======================file upload and rename file upload time fn =====================================*/

	function file_upload_callback() {
	
		$upload = substr(strrchr($_FILES["file"]["name"], "."), 1);//get extension of uploading imagge
		$new_name = time().'.'.$upload; //rename the image
		$upload = wp_upload_bits($new_name, null, file_get_contents($_FILES["file"]["tmp_name"]));
		echo  $upload['url'];
	 wp_die();
	}
}