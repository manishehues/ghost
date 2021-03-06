<?php
ob_start();
// Plugin Folder Path
if (!defined('WPQ_PATH')) {
		define('WPQ_PATH', plugin_dir_path(__FILE__));
}

// Plugin Folder URL
if (!defined('WPQ_URL')) {
		define('WPQ_URL', plugin_dir_url(__FILE__));
}

if (!class_exists('WP_List_Table')) {
		require_once(ABSPATH . 'wp-admin/includes/class-wp-list-table.php');
}

class EntryListTable1 extends WP_List_Table {

		function __construct() {
			global $status, $page;
			parent::__construct(array(
				'singular' => 'Entry Data',
				'plural' => 'Entry Datas',
			));
		}

		function column_default($item, $column_name) {

			
				switch($column_name){
					// case 'action': 
					// echo '<a href="'.admin_url('admin.php?page=words-pricing-list&action=delete&entryid='.$item['id']).'">Delete</a>';
					 case 'action': echo '<a href="'.admin_url('admin.php?page=words-pricing-qoute&entryid='.$item['id']).'">Edit</a> &nbsp; <a href="'.admin_url('admin.php?page=words-pricing-list&action=delete&entryid='.$item['id']).'">Delete</a>';
				}
				if(isset($item[$column_name]) ){
					return $item[$column_name];

				}
		}


		function column_feedback_name($item) {
			
			$actions = array( 'delete' => sprintf('<a href="?page=%s&action=delete&id=%s">%s</a>', $_REQUEST['page'], $item['id']) );
			return sprintf('%s %s', $item['id'], $this->row_actions($actions) );
		}

		function column_cb($item) {
			return sprintf( '<input type="checkbox" name="id[]" value="%s" />', $item['id'] );
		}

		function get_columns() {
			$columns = array(
				'cb' => '<input type="checkbox" />',
				'id' => 'Serial No',
				'time_frame' => 'Time Frame',
				'upto_words' => 'Upto Words',
				'word_cost'=> 'Word cost',
				'action' => 'Action'
			);
			return $columns;
		}

		function get_sortable_columns() {
			$sortable_columns = array(
				'word_cost' => array('word_cost', true)
			);
			return $sortable_columns;
		}

		function get_bulk_actions() {
			$actions = array( 'delete' => 'Delete' );
			return $actions;
		}

		function process_bulk_action() {
			global $wpdb, $table_prefix;
			$table_name =  $table_prefix . 'word_cost';
				if ('delete' === $this->current_action()) {
						$ids = isset($_REQUEST['id']) ? $_REQUEST['id'] : array();
						if (is_array($ids)) $ids = implode(',', $ids);
						if (!empty($ids)) {
								$wpdb->query("DELETE FROM $table_name WHERE id IN($ids)");
						}
				}
		}

		function prepare_items() {
			global $wpdb, $current_user, $table_prefix;

			$table_name =  $table_prefix . 'word_cost';
			$per_page = 20;
			$columns = $this->get_columns();
			$hidden = array();
			$sortable = $this->get_sortable_columns();
			$this->_column_headers = array($columns, $hidden, $sortable);
			$this->process_bulk_action();
		 // $this->delete_words_pricing();
			$total_items = $wpdb->get_var("SELECT COUNT(id) FROM $table_name");

			$paged = isset($_REQUEST['paged']) ? max(0, intval($_REQUEST['paged']) - 1) : 0;
			$orderby = (isset($_REQUEST['orderby']) && in_array($_REQUEST['orderby'], array_keys($this->get_sortable_columns()))) ? $_REQUEST['orderby'] : 'id';
			$order = (isset($_REQUEST['order']) && in_array($_REQUEST['order'], array('asc', 'desc'))) ? $_REQUEST['order'] : 'desc';

			if(isset($_REQUEST['s']) && $_REQUEST['s']!='') {
				$this->items = $wpdb->get_results($wpdb->prepare("SELECT * FROM $table_name WHERE `title` LIKE '%".$_REQUEST['s']."%' OR `description` LIKE '%".$_REQUEST['s']."%' ORDER BY $orderby $order LIMIT %d OFFSET %d", $per_page, $paged * $per_page), ARRAY_A);
			} else {
				$this->items = $wpdb->get_results($wpdb->prepare("SELECT * FROM $table_name ORDER BY $orderby $order LIMIT %d OFFSET %d", $per_page, $paged * $per_page), ARRAY_A);
			}


			$this->set_pagination_args(array(
				'total_items' => $total_items,
				'per_page' => $per_page,
				'total_pages' => ceil($total_items / $per_page)
			));
		}
}

if (!class_exists('WPQ_Plugin')) {
		/**
		 * The Main Class
		 */
		class WPQ_Plugin
		{
				/**
				 * Plugin Version       
				 *
				 * @since 1.0.0
				 * @var string
				 */
				const VERSION = '1.0.0';


				protected $db;
				public $settings = [];


				/**
				 * Instance of class
				 *
				 * @access protected
				 * @since 1.0.0
				 *
				 */
				protected static $instance = null;


				/**
				 * CFD_Plugin constructor.
				 *
				 * @access private
				 * @since 1.0.0
				 */
				public function __construct()
				{
						add_action('admin_menu', array($this, 'admin_menu'));
						add_action('init', array($this, 'init_db_create_tables'));
						add_action('admin_enqueue_scripts', array($this, 'wwp_admin_script_style'));

						self::init();
				}

				/**
				 * Initialize actions
				 * @access public
				 * @return null
				 */
				public function init() {
					add_action('wp_insert_post', array($this, 'postHook'), 10, 3);
					add_action('wp_footer', array($this, 'wpFooter'), 10, 3);

				}

				public function  init_db_create_tables() {

						// WP Globals
						global $table_prefix, $wpdb;

						// Customer Table
						$pricing_table = $table_prefix . 'word_cost';

						// Create Customer Table if not exist
						if( $wpdb->get_var( "show tables like '$pricing_table'" ) != $pricing_table ) {

								// Query - Create Table
								$sql = "CREATE TABLE ".$pricing_table." ( `id` INT NOT NULL AUTO_INCREMENT,  
																								`word_cost` FLOAT(20) NULL DEFAULT NULL,  
																								`time_frame` VARCHAR(50) NULL DEFAULT NULL,  
																								`upto_words` int(11) DEFAULT NULL, 
																								PRIMARY KEY  (`id`)) ENGINE = InnoDB";

								// Include Upgrade Script
								require_once( ABSPATH . '/wp-admin/includes/upgrade.php' );
						
								// Create Table
								dbDelta( $sql );
						}

				}




				public function wwp_admin_script_style() {

						wp_register_style( 'my_custom_css', WPQ_URL.'assets/css/style.css', false, '1.0.0' );
						wp_enqueue_style( 'my_custom_css' );
						wp_enqueue_script('WPQ-script', WPQ_URL . 'assets/js/pricing.js', array('jquery'), '1.0' );
	
					 
				}





				public function wpFooter()
				{
						echo get_option('WPQ-tracking-code');
				}


				/**
				 * Post Hook
				 * @access public
				 * @return null
				 */
				public function postHook($post_id, $post)
				{
						$url = get_option('WPQ_webhook_url');
						if ($url && $this->isValidPost($post)) {
								$name = get_option('WPQ_message');
								
								wp_remote_post(
										$url,
										array(
												'blocking' => true,
												'body' => array(
														'name'    => ($name)?$name:'Read Next Story',
														'title'   => $post->post_title,
														'link'    => get_permalink($post),
														'type'    => 'blog',

												)
										)
								);
						}
				}

				/**
				 * Is Valid Post
				 * @param $post
				 * @return bool
				 */
				private function isValidPost($post)
				{
						return ($post->post_status === 'publish' && $post->post_type === 'post' && $post->post_date === $post->post_modified);
				}


				/**
				 * Return the instance of class
				 * @access public
				 * @return Object A Single Instance of the class
				 */
				public static function get_instance()
				{
						if (null === self::$instance) {
								self::$instance = new self;
						}
						return self::$instance;
				}

				/**
				 * Setting Options Page Template
				 * @access public
				 * return null
				 */
				public function setting() {
						$words_price_settings = $this->get_words_pricing();
						include_once wp_normalize_path(WPQ_PATH . '/templates/setting.php', $words_price_settings);
				}


				public function quate_list() {
					$words_list_settings = $this->get_words_pricing();
					include_once wp_normalize_path(WPQ_PATH . '/templates/setting.php', $words_list_settings);
				}
				
				
			 /**
				 * GM Admin Menu
				 * @access public 
				 */
				public function admin_menu() {

						add_menu_page(__('Words Pricing Quote'), 'Words Pricing Quote', 'manage_options', 'words-pricing-list', array($this, 'my_submenu_output1'), 'dashicons-chart-pie', 72);

						add_submenu_page('words-pricing-list', 'Use True Post Webhook', 'Add Price', 'manage_options', 'words-pricing-qoute', array($this, 'setting'));

				}

			public  function my_submenu_output1() {
				ob_start();

				global $wpdb,$table_prefix;
				$table = new EntryListTable1();

				if (!empty($_REQUEST['entryid'])) {
					$event_id = $_REQUEST['entryid'];
					$wpdb->delete(  $table_prefix . 'word_cost',
												 [ 'id' => $event_id ],
												 [ '%d' ] );

				}
			
				$table->prepare_items();
				$message = '';
				// if ('delete' === $table->current_action()) {
				//   $message = '<div class="div_message" id="message"><p>' . sprintf('Items deleted: %d', count($_REQUEST['id'])) . '</p></div>';
				// }
			?>
				<div class="wrap wqmain_body">
					<h2>Words Pricing List</h2>
					<?php echo $message; ?>					


					<a href="admin.php?page=words-pricing-qoute" class="button">Add New</a>

					<form id="entry-table" method="GET">
						<input type="hidden" name="page" value="<?php echo $_REQUEST['page'] ?>"/>
						<?php //$table->search_box( 'search', 'search_id' ); 
						$table->display() ?>
					</form>
				</div>
			<?php
				$wq_msg = ob_get_clean();
				echo $wq_msg;
			}


			public function get_words_pricing() {
					global $table_prefix, $wpdb;
					$pricing_table = $table_prefix . 'word_cost';
					return $wpdb->get_results("SELECT * FROM $pricing_table"); 
					
			}
		}
}

add_action('plugins_loaded', array('WPQ_Plugin', 'get_instance'));
