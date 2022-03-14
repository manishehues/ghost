<?php
$wpsdDonations          = $this->wpsd_get_all_donations();
$wpsdGeneralSettings    = stripslashes_deep( unserialize( get_option('wpsd_general_settings') ) );
$wpsdDonateCurrency     = isset( $wpsdGeneralSettings['wpsd_donate_currency'] ) ? $wpsdGeneralSettings['wpsd_donate_currency'] : 'USD';
?>
<div id="wpsd-wrap-all" class="wrap">
    <h2><?php esc_html_e('Payment Information', WPSD_TXT_DOMAIN); ?></h2><br>
    <table class="wp-list-table widefat fixed striped posts" cellspacing="0" id="wpc_data_table">
        <thead>
            <tr>
                <?php print_column_headers('wpsd-column-table'); ?>
            </tr>
        </thead>
        <tbody id="the-list">
            <?php
            if ( count( $wpsdDonations ) > 0 ) {
                foreach ( $wpsdDonations as $donation ) {

                    ?>
                    <tr>
                        <td><?php printf('%s', $donation->wpsd_id); ?></td>
                        <td><?php printf('%s', $donation->numberOfWords); ?></td>
                        <td><strong>$ <?php printf('%s', $donation->wpsd_donated_amount); ?></strong></td>
                        <td><?php echo $donation->first_name . " " .$donation->last_name; ?></td>
                        <td><a href="mailto:<?php echo $donation->wpsd_donator_email; ?>"><?php printf('%s', $donation->wpsd_donator_email); ?></a></td>
                        <td><a href="tel:+<?php printf('%s', $donation->wpsd_donator_phone); ?>"> <?php printf('%s', $donation->wpsd_donator_phone); ?></a></td> 
                        <td><?php printf('%s', date('D d M Y - h:i A', strtotime($donation->wpsd_donation_datetime))); ?></td>
                        <td><a href="admin.php?page=wpsd-all-donations&view=detail&id=<?php echo $donation->wpsd_id;?>">View detail</a></td>  
                        
                    </tr>
                    <?php 
                }
            }
            ?>
        </tbody>
        <tfoot>
            <tr>
                <?php print_column_headers('wpsd-column-table', false); ?>
            </tr>
        </tfoot>
    </table>
</div>