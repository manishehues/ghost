<?php
$wpsdDonations          = $this->wpsd_get_single_user_donations();
$wpsdGeneralSettings    = stripslashes_deep(unserialize(get_option('wpsd_general_settings')));
$wpsdDonateCurrency     = isset($wpsdGeneralSettings['wpsd_donate_currency']) ? $wpsdGeneralSettings['wpsd_donate_currency'] : 'USD';
?>
<div id="wpsd-wrap-all" class="wrap">
    <h2><?php esc_html_e('Payment Information', WPSD_TXT_DOMAIN); ?></h2><br>
    <table class="wp-list-table widefat fixed striped posts" cellspacing="0" id="wpc_data_table">
        <thead>
            <tr>
                <?php print_column_headers('wpsd-column-table1'); ?>
            </tr>
        </thead>
        <tbody id="the-list">
            <?php
            if (count($wpsdDonations)> 0) {
                foreach ($wpsdDonations as $donation) { 
            ?>
                    <tr>
                        <td>ID</td>
                        <td><?php printf('%s', $donation->wpsd_id); ?></td>

                    </tr>
                    <tr>
                        <td>First Name</td>
                        <td><?php printf('%s', $donation->first_name); ?></td>

                    </tr>
                    <tr>
                        <td>Last Name</td>
                        <td><?php printf('%s', $donation->last_name); ?></td>

                    </tr>
                    <tr>
                        <td>Email</td>
                        <td>
                            <a href="mailto:<?php echo $donation->wpsd_donator_email;?>"><?php printf('%s', $donation->wpsd_donator_email); ?></a>
                       </td>

                    </tr>
                    <tr>
                        <td>Phone</td>
                        <td>
                            <a href="tel:+<?php printf('%s', $donation->wpsd_donator_phone);?>"> <?php printf('%s', $donation->wpsd_donator_phone); ?></a>
                       </td>
                    </tr>

                    <!-- ================================================================================================================== -->

                    <tr>
                        <td>Paid Amount</td>
                        <td>$<?php printf('%s', $donation->wpsd_donated_amount); ?></td>

                    </tr>
                    <tr>
                        <td>Date-time</td>
                        <td><?php printf('%s', date('D d M Y - h:i A', strtotime($donation->wpsd_donation_datetime))); ?></td>

                    </tr>
                    <tr>
                        <td>Order Title</td>
                        <td><?php printf('%s', $donation->order_title); ?></td>

                    </tr>
                    <tr>
                        <td>Is this Acadmic Doc</td>
                        <td><?php printf('%s', $donation->is_acadmic_doc); ?></td>

                    </tr>
                    <tr>
                        <td>Title for Acadmin Doc</td>
                        <td><?php printf('%s', $donation->acadmic_doc_title); ?></td>

                    </tr>
                    <tr>
                        <td>Document Check Biblio</td>
                        <td><?php printf('%s', $donation->document_check_biblio); ?></td>

                    </tr>
                    <tr>
                        <td>Document Check References</td>
                        <td><?php printf('%s', $donation->document_check_references); ?>
                       </td>
                    </tr>
                    <!-- ======================================================================================================================================= -->

                    <tr>
                        <td>Document Science Arts</td>
                        <td><?php printf('%s', $donation->document_science_arts); ?></td>

                    </tr>
                    <tr>
                        <td>Document Style Guide</td>
                        <td><?php printf('%s', $donation->document_style_guide); ?></td>

                    </tr>
                    <tr>
                        <td>Document English Version</td>
                        <td><?php printf('%s', $donation->document_english_version); ?></td>

                    </tr>
                    <tr>
                        <td>Order Notes</td>
                        <td><?php printf('%s', $donation->order_notes); ?></td>

                    </tr>
                    <tr>
                        <td>Editor Code</td>
                        <td><?php printf('%s', $donation->editor_code); ?>
                       </td>
                    </tr>
                    <!-- ======================================================================================================================================= -->

                    
                    <tr>
                        <td>Address</td>
                        <td><?php printf('%s', $donation->addr_line); ?></td>

                    </tr>
                    <tr>
                        <td>City</td>
                        <td><?php printf('%s', $donation->addr_city); ?>
                       </td>
                    </tr>

                    <!-- ======================================================================================================================================= -->

                    <tr>
                        <td>State</td>
                        <td><?php printf('%s', $donation->addr_state); ?></td>

                    </tr>
                    <tr>
                        <td>Country</td>
                        <td><?php printf('%s', $donation->addr_country); ?></td>

                    </tr>
                    <tr>
                        <td>Postal Code</td>
                        <td><?php printf('%s', $donation->addr_postalcode); ?></td>
                    </tr>
                        <td>Number Of Words</td>
                        <td><?php printf('%s', $donation->numberOfWords); ?></td>
                    </tr>
                    </tr>
                        <td>Time Frame</td>
                        <td><?php printf('%s', $donation->time_frame); ?></td>
                    </tr>

                    <!-- ======================================================================================================================================= -->

                    <tr>
                        <td>Document</td>
                        <td><a href="<?php printf('%s', $donation->document_path); ?>"><?php printf('%s', $donation->document_path); ?>
                    </a></td>

                    </tr>

            <?php
                }
            }
            ?>
        </tbody>
        <tfoot>
            <tr>
                <?php print_column_headers('wpsd-column-table1', false); ?>
            </tr>
        </tfoot>
    </table>
</div>