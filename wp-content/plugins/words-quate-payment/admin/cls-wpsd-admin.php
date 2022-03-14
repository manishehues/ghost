<?php
if ( ! defined( 'ABSPATH' ) ) exit;

/**
 *	Admin Panel Parent Class
 */
class Wpsd_Admin
{
	use HM_Currency;
	use Wpsd_Common;

	private $wpsd_version;
	private $wpsd_option_group;
	private $wpsd_assets_prefix;
	protected $wpsdTable;

	public function __construct( $version ) {
		$this->wpsd_version = $version;
		$this->wpsdTable = WPSD_TABLE;
		$this->wpsd_option_group = WPSD_PRFX . 'options_group';
		$this->wpsd_assets_prefix = substr(WPSD_PRFX, 0, -1) . '-';
		
	}

	/**
	 *	Loading the admin menu
	 */
	public function wpsd_admin_menu() {
		add_menu_page(
			__('Words Quote Payment', WPSD_TXT_DOMAIN),
			__('Words Quote Payment', WPSD_TXT_DOMAIN),
			'',
			'wpsd-admin-settings',
			'',
			'dashicons-money-alt',
			100
		);

		add_submenu_page(
			'wpsd-admin-settings',
			esc_html__('Key Settings', WPSD_TXT_DOMAIN),
			esc_html__('Key Settings', WPSD_TXT_DOMAIN),
			'manage_options',
			'wpsd-key-settings',
			array($this, WPSD_PRFX . 'key_settings')
		);

		add_submenu_page(
			'wpsd-admin-settings',
			esc_html__('General Settings', WPSD_TXT_DOMAIN),
			esc_html__('General Settings', WPSD_TXT_DOMAIN),
			'manage_options',
			'wpsd-general-settings',
			array($this, WPSD_PRFX . 'general_settings')
		);

		add_submenu_page(
			'wpsd-admin-settings',
			__('Payment Info', WPSD_TXT_DOMAIN),
			__('Payment Info', WPSD_TXT_DOMAIN),
			'manage_options',
			'wpsd-all-donations',
			array($this, WPSD_PRFX . 'all_donations')
		);

	
		/*add_submenu_page(
			'wpsd-admin-settings',
			esc_html__('Template Settings', WPSD_TXT_DOMAIN),
			esc_html__('Template Settings', WPSD_TXT_DOMAIN),
			'manage_options',
			'wpsd-template-settings',
			array($this, WPSD_PRFX . 'template_settings')
		);*/

		/* add_submenu_page(
			'wpsd-admin-settings',
			__('Receipt Email', WPSD_TXT_DOMAIN),
			__('Receipt Email', WPSD_TXT_DOMAIN),
			'manage_options',
			'wpsd-email-settings',
			array( $this, 'wpsd_email_settings')
		);*/

		/*add_submenu_page(
			'wpsd-admin-settings',
			__('Help & Usage', WPSD_TXT_DOMAIN),
			__('Help & Usage', WPSD_TXT_DOMAIN),
			'manage_options',
			'wpsd-get-help',
			array( $this, WPSD_PRFX . 'get_help' )
		); */
		
	}

	/**
	 *	Loading admin panel assets
	 */
	function wpsd_admin_assets() {
		wp_enqueue_style(
			$this->wpsd_assets_prefix . 'admin-style',
			WPSD_ASSETS . 'css/' . $this->wpsd_assets_prefix . 'admin-style.css',
			array(),
			$this->wpsd_version,
			FALSE
		);

		wp_enqueue_style('wp-color-picker');
		wp_enqueue_script('wp-color-picker');

		wp_enqueue_media();

		if ( ! wp_script_is('jquery')) {
			wp_enqueue_script('jquery');
		}

		wp_enqueue_script(
			$this->wpsd_assets_prefix . 'admin-script',
			WPSD_ASSETS . 'js/' . $this->wpsd_assets_prefix . 'admin-script.js',
			array('jquery'),
			$this->wpsd_version,
			TRUE
		);

		//$wpsd_settings = get_option('wpsd_settings');

		$wpsdAdminArray = array(
			'wpsdIdsOfColorPicker' => array(),
		);

		wp_localize_script($this->wpsd_assets_prefix . 'admin-script', 'wpsdAdminScript', $wpsdAdminArray);
	}

	/**
	 *	Loading admin panel view/forms
	 */
	function wpsd_key_settings()
	{
		require_once WPSD_PATH . 'admin/view/' . $this->wpsd_assets_prefix . 'key-settings.php';
	}

	function wpsd_general_settings()
	{
		require_once WPSD_PATH . 'admin/view/' . $this->wpsd_assets_prefix . 'general-settings.php';
	}

	function wpsd_template_settings()
	{
		require_once WPSD_PATH . 'admin/view/' . $this->wpsd_assets_prefix . 'template-settings.php';
	}

	function wpsd_email_settings() {

		$wpsdEmailShowMessage = false;
		
		if ( isset( $_POST['updateEmailSettings'] ) ) {

			$wpsdEmailShowMessage = $this->post_receipt_email_settings( $_POST );
		}

		$wpsdEmailSettings      = $this->get_receipt_email_settings();
		
		require_once WPSD_PATH . 'admin/view/wpsd-receipt-email-settings.php';
	}

	function wpsd_all_donations()
	{
		$wpsdColumns = array(
			'wpsd_donation_id'			=> esc_html__('Serial No', WPSD_TXT_DOMAIN),
			'wpsd_donation_nowords'			=> esc_html__('Number of Words', WPSD_TXT_DOMAIN),
			'wpsd_donated_amount' 		=> esc_html__('Amount', WPSD_TXT_DOMAIN),
			'wpsd_donator_name'			=> esc_html__('Name', WPSD_TXT_DOMAIN),
			'wpsd_donator_email'		=> esc_html__('Email', WPSD_TXT_DOMAIN),
			'&nbsp;'					=> esc_html__('Mobile No', WPSD_TXT_DOMAIN),
			'wpsd_donation_datetime'	=> esc_html__('Date', WPSD_TXT_DOMAIN),
			'view_post'					=> esc_html__('View Post', WPSD_TXT_DOMAIN)

		);
		register_column_headers('wpsd-column-table', $wpsdColumns);


		$wpsdColumns1 = array(
			'wpsd_feilds' 					=> esc_html__('Feilds', WPSD_TXT_DOMAIN),
			'wpsd_content'					=> esc_html__('Content', WPSD_TXT_DOMAIN)

		);
		register_column_headers('wpsd-column-table1', $wpsdColumns1);

		if($_REQUEST['view']=='detail'){
			require_once WPSD_PATH . 'admin/view/' . $this->wpsd_assets_prefix . 'view-detail.php';
			
		}else{
			
			require_once WPSD_PATH . 'admin/view/' . $this->wpsd_assets_prefix . 'all-donations.php';
		}

	}

	function wpsd_get_help() {
		require_once WPSD_PATH . 'admin/view/' . $this->wpsd_assets_prefix . 'help-usage.php';
	}

	/* function wpsd_view_detail() {
		require_once WPSD_PATH . 'admin/view/' . $this->wpsd_assets_prefix . 'view-detail.php';
	} */
	 function wpsd_view_detail() {
        echo __( 'This is the page content', WPSD_TXT_DOMAIN );
    } 

	protected function wpsd_get_all_donations()
	{
		global $wpdb;
		return $wpdb->get_results($wpdb->prepare("SELECT * FROM $this->wpsdTable WHERE %d ORDER BY wpsd_id DESC LIMIT 0, 10", 1));
	}

	protected function wpsd_get_single_user_donations()
	{
		global $wpdb;
		return $wpdb->get_results($wpdb->prepare("SELECT * FROM $this->wpsdTable WHERE 	wpsd_id = ". $_REQUEST['id'] ));
	}

	protected function wpsd_display_notification($type, $msg) { 
		?>
		<div class="wpsd-alert <?php printf('%s', $type); ?>">
			<span class="wpsd-closebtn">&times;</span>
			<strong><?php esc_html_e(ucfirst($type), WPSD_TXT_DOMAIN); ?>!</strong> <?php esc_html_e($msg, WPSD_TXT_DOMAIN); ?>
		</div>
		<?php 
	}

	function wpsd_get_image() {
		
		if (isset($_GET['id'])) {
			$image = wp_get_attachment_image(filter_input(INPUT_GET, 'id', FILTER_VALIDATE_INT), esc_html($_GET['img_type']), false, array('id' => esc_html($_GET['prev_id'])));
			$data = array(
				'image' => $image,
			);
			wp_send_json_success($data);
		} else {
			wp_send_json_error();
		}
	}
}



?>