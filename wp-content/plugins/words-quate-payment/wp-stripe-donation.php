<?php

/**
 * Plugin Name: 	Words Pricing Qoute With Stripe Payment
 * Plugin URI:		https://www.ehues.com/
 * Description: 	This WordPress Words Pricing Qoute is a simple plugin that allows you to collect order on the basis of no of words your website via Stripe payment method.
 * Version: 		  10
 * Author: 			  Ehues Devs
 * Author URI: 		https://www.ehues.com/
 * License:       GPL-2.0+
 * License URI:   https://www.ehues.com/
 */

if ( ! defined('ABSPATH') ) exit;

global $wpdb;

define('WPSD_PATH', plugin_dir_path(__FILE__));
define('WPSD_ASSETS', plugins_url('/assets/', __FILE__));
define('WPSD_LANG', plugins_url('/languages/', __FILE__));
define('WPSD_SLUG', plugin_basename(__FILE__));
define('WPSD_PRFX', 'wpsd_');
define('WPSD_CLS_PRFX', 'cls-wpsd-');
define('WPSD_TXT_DOMAIN', 'wp-stripe-donation');
define('WPSD_VERSION', '100.3');
define('WPSD_TABLE', $wpdb->prefix . 'wpsd_stripe_donation');

/*===========================*/

include plugin_dir_path( __FILE__ ) . 'words-pricing-quate.php';

/*===========================*/
require_once WPSD_PATH . 'inc/' . WPSD_CLS_PRFX . 'master.php';
$wpsd = new Wpsd_Master();
register_activation_hook(__FILE__, array($wpsd, WPSD_PRFX . 'install_table'));
$wpsd->wpsd_run();

// Creating Thank You Page
function wpsd_create_thank_you_page() {
  
  $thank_you_page   = 'Words Pricing Thank You';
  $check_page_exist = get_page_by_title($thank_you_page , 'OBJECT', 'page');
  $post_content     = '<h1>' . __('Thank You For Your Order') . '</h1>';
  $post_content     .= '<p>' . __('We will be in touch soon.') . '</p>';
  if ( empty( $check_page_exist ) ) {
      wp_insert_post( array(
          'comment_status' => 'close',
          'ping_status'    => 'close',
          'post_author'    => 1,
          'post_title'     => ucwords($thank_you_page ),
          'post_name'      => sanitize_title($thank_you_page ),
          'post_status'    => 'publish',
          'post_content'   => $post_content,
          'post_type'      => 'page',
          'post_parent'    => ''
          )
      );
  }
}
add_action( 'init', 'wpsd_create_thank_you_page' );