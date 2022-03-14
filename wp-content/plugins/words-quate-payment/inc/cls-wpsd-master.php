<?php
if ( ! defined( 'ABSPATH' ) ) exit;

/**
 * Our main plugin class
 */
class Wpsd_Master {

	protected $wpsd_loader;
	protected $wpsd_version;

	/**
	 * Class Constructor
	 */
	public function __construct() {
		$this->wpsd_version = WPSD_VERSION;
		add_action('plugins_loaded', array($this, WPSD_PRFX . 'load_plugin_textdomain'));
		$this->wpsd_load_dependencies();
		$this->wpsd_trigger_admin_hooks();
		$this->wpsd_trigger_front_hooks();
	}

	function wpsd_load_plugin_textdomain() {
		load_plugin_textdomain(WPSD_TXT_DOMAIN, FALSE, WPSD_TXT_DOMAIN . '/languages/');
	}

	private function wpsd_load_dependencies() {
		require_once WPSD_PATH . 'inc/cls-hm-currency.php';
		require_once WPSD_PATH . 'inc/cls-wpsd-comm.php';
		require_once WPSD_PATH . 'admin/' . WPSD_CLS_PRFX . 'admin.php';
		require_once WPSD_PATH . 'front/' . WPSD_CLS_PRFX . 'front.php';
		require_once WPSD_PATH . 'inc/' . WPSD_CLS_PRFX . 'loader.php';
		$this->wpsd_loader = new Wpsd_Loader();
	}

	private function wpsd_trigger_admin_hooks() {
		$wpsd_admin = new Wpsd_Admin($this->wpsd_version());
		$this->wpsd_loader->add_action('admin_menu', $wpsd_admin, WPSD_PRFX . 'admin_menu');
		$this->wpsd_loader->add_action('admin_enqueue_scripts', $wpsd_admin, WPSD_PRFX . 'admin_assets');
		$this->wpsd_loader->add_action('wp_ajax_wpsd_get_image', $wpsd_admin, 'wpsd_get_image');
		$this->wpsd_loader->add_action('wp_ajax_nopriv_wpsd_get_image', $wpsd_admin, 'wpsd_get_image');
	}

	private function wpsd_trigger_front_hooks() {
		$wpsd_front = new Wpsd_Front($this->wpsd_version());
		$this->wpsd_loader->add_action('wp_enqueue_scripts', $wpsd_front, WPSD_PRFX . 'front_assets');
		$this->wpsd_loader->add_action('wp_ajax_wpsd_donation', $wpsd_front, 'wpsd_donation_handler');
		$this->wpsd_loader->add_action('wp_ajax_nopriv_wpsd_donation', $wpsd_front, 'wpsd_donation_handler');
		$this->wpsd_loader->add_action('wp_ajax_wpsd_donation_success', $wpsd_front, 'wpsd_donation_handler_success');
		$this->wpsd_loader->add_action('wp_ajax_nopriv_wpsd_donation_success', $wpsd_front, 'wpsd_donation_handler_success');
		$this->wpsd_loader->add_filter('page_template', $wpsd_front, 'wpsd_donation_success_template', 100);
		$wpsd_front->wpsd_load_shortcode();
	}

	function wpsd_run() {
		$this->wpsd_loader->wpsd_run();
	}

	function wpsd_version() {
		return $this->wpsd_version;
	}

	function wpsd_install_table() {
		global $wpdb;
		$table_name = WPSD_TABLE;
		//$sql1 = "DROP TABLE IF EXISTS $table_name";
		//$wpdb->query($sql1);
		if ($wpdb->get_var("SHOW TABLES LIKE '$table_name'") != $table_name) {
			//table not in database. Create new table
			$charset_collate = $wpdb->get_charset_collate();
			$sql = "CREATE TABLE $table_name (
					wpsd_id INT(11) NOT NULL AUTO_INCREMENT,
					wpsd_donation_for VARCHAR(255),
					wpsd_donator_name VARCHAR(155),
					wpsd_donator_email VARCHAR(155),
					wpsd_donator_phone VARCHAR(55),
					wpsd_donated_amount DECIMAL(10,2),
					wpsd_donation_datetime DATETIME,
					`order_title` varchar(255) COLLATE utf8mb4_unicode_520_ci DEFAULT NULL,
					`is_acadmic_doc` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  					`acadmic_doc_title` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
					`document_check_biblio` varchar(255) COLLATE utf8mb4_unicode_520_ci DEFAULT NULL,
					`document_check_references` varchar(255) COLLATE utf8mb4_unicode_520_ci DEFAULT NULL,
					`document_science_arts` varchar(255) COLLATE utf8mb4_unicode_520_ci DEFAULT NULL,
					`document_style_guide` varchar(255) COLLATE utf8mb4_unicode_520_ci DEFAULT NULL,
					`document_english_version` varchar(255) COLLATE utf8mb4_unicode_520_ci DEFAULT NULL,
					`order_notes` text COLLATE utf8mb4_unicode_520_ci DEFAULT NULL,
					`editor_code` varchar(255) COLLATE utf8mb4_unicode_520_ci DEFAULT NULL,
					`first_name` varchar(255) COLLATE utf8mb4_unicode_520_ci DEFAULT NULL,
					`last_name` varchar(255) COLLATE utf8mb4_unicode_520_ci DEFAULT NULL,
					`addr_line` varchar(255) COLLATE utf8mb4_unicode_520_ci DEFAULT NULL,
					`addr_city` varchar(255) COLLATE utf8mb4_unicode_520_ci DEFAULT NULL,
					`addr_state` varchar(255) COLLATE utf8mb4_unicode_520_ci DEFAULT NULL,
					`addr_postalcode` varchar(255) COLLATE utf8mb4_unicode_520_ci DEFAULT NULL,
					`addr_country` varchar(255) COLLATE utf8mb4_unicode_520_ci DEFAULT NULL,
					`numberOfWords` varchar(255) COLLATE utf8mb4_unicode_520_ci DEFAULT NULL,
					`time_frame` varchar(100) COLLATE utf8mb4_unicode_520_ci DEFAULT NULL,
					`document_path` varchar(255) COLLATE utf8mb4_unicode_520_ci DEFAULT NULL,
					PRIMARY KEY (`wpsd_id`)
			) $charset_collate;";
			require_once(ABSPATH . 'wp-admin/includes/upgrade.php');
			dbDelta($sql);
		}
	}
}