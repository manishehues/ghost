<!-- <div class="wpsd-master-wrapper wpsd-template-<?php printf('%d', $wpsdSelectTemp); ?>" id="wpsd-wrap-all">

	<!-- <div id="wpsd-pageloader">
		<img src="http://cdnjs.cloudflare.com/ajax/libs/semantic-ui/0.16.1/images/loader-large.gif" alt="processing..." />
	</div> -->

	<h3 class="wpsd-form-title"><?php esc_html_e($wpsdPaymentTitle); ?></h3>
	<div class="wpsd-form-title-border"></div>
	<p class="wpsd-form-description"><?php esc_html_e($wpsd_form_description); ?></p>
	<?php
	if ($wpsd_display_banner) {
		if (intval($wpsdFormBanner) > 0) {
			echo wp_get_attachment_image($wpsdFormBanner, 'full', false, array('class' => 'wpsd-form-banner'));
		}
	}
	?>

	<div class="wpsd-wrapper-content">

		<form action="" method="POST" id="wpsd-donation-form-idooooooo" autocomplete="off" enctype="multipart/form-data">


			<div id="calculateQuote">

				<!-- <div class="form-group">
					<label><?php //_e('Choose File:'); ?></label>
					<input type="file" id="file" />
					<input type="hidden" name="file_url" value="" id="file_url" />
				</div> -->

				<div class="form-group">
					<label for="numberOfWords">Enter the word count of your documents</label>
					<input type="number" class="form-control" id="numberOfWords" name="numberOfWords" aria-describedby="emailHelp" placeholder="Enter words">

					<textarea id="word" rows="10" cols="60"> </textarea>

				</div>
				<div class="form-group">
					<table id="records_table" class="table table-striped">
						<tbody>
							<?php foreach ($rowCount as $res) { ?>
								<tr>
									<th scope="row"><?php echo $res->id; ?></th>
									<td>ESL Dissertation, Thesis, or Proposal Editing</td>
									<td>(up to <?php echo $res->upto_words; ?> words) </td>
									<td><label for=""><?php echo $res->time_frame; ?></label></td>
									<!-- <td><input type="radio" name="service_id" class="service_radio" value="1375" id="service1375" style="display:none"></td> -->
								</tr>
							<?php } ?>
						</tbody>
					</table>
				</div>

				<button type="button" class="btn btn-primary" onclick="calcQuotewords()">Calculate Quote</button>
			</div>

			<input type="text" name="order_title" id="wpsd_donator_name" class="wpsd-text-field" placeholder="">

			

			

			<!-- <input type="hidden" name="action" value="wpsd_donation_success">
 -->
			<?php
			if (!$wpsd_hide_label) {
			?>
				<label for="wpsd_donator_name" class="wpsd-donation-form-label"><?php echo esc_html($wpsd_donator_name_label); ?>:</label>
			<?php
			}
			?>
			<input type="text" name="wpsd_donator_name" id="wpsd_donator_name" class="wpsd-text-field" placeholder="<?php echo esc_attr($wpsd_donator_name_label); ?>">

			<?php
			if (!$wpsd_hide_label) {
			?>
				<label for="wpsd_donator_email" class="wpsd-donation-form-label"><?php echo esc_html($wpsd_donator_email_label); ?>:</label>
			<?php
			}
			?>
			<input type="email" name="wpsd_donator_email" id="wpsd_donator_email" class="wpsd-text-field" placeholder="<?php echo esc_attr($wpsd_donator_email_label); ?>">

			<?php if ($wpsd_display_phone) { 
			?>
			 <label for="wpsd_donator_phone" class="wpsd-donation-form-label"><?php // echo esc_html($wpsd_donator_phone_label); 
																					?>:</label>

			<input type="text" name="wpsd_donator_phone" id="wpsd_donator_phone" class="wpsd-text-field" placeholder="<?php esc_attr_e($wpsd_donator_phone_label); ?>">
			<?php } 
			?>

			<?php
			if (!$wpsd_hide_label) {
			?>
				<label for="wpsd_donate_amount" class="wpsd-donation-form-label"><?php esc_html_e($wpsd_donate_amount_label); ?>:</label>
			<?php
			}
			?>

			<ul id="wpsd_donate_amount">
				<?php
				if (count($wpsd_donation_values) > 0) {
					foreach ($wpsd_donation_values as $wpsdDonationVal) {
						if ('' !== $wpsdDonationVal) {
				?>
							<li>
								<div class="form-group">
									<input type="radio" id="amount_<?php echo esc_attr(trim($wpsdDonationVal)); ?>" name="wpsd_donate_amount" value="<?php echo esc_attr(trim($wpsdDonationVal)); ?>">
									<label for="amount_<?php echo esc_attr(trim($wpsdDonationVal)); ?>"><?php echo esc_html(number_format($wpsdDonationVal)); ?></label>
								</div>
							</li>
					<?php
						}
					}
				}

				if ('' !== $wpsd_other_amount_text) {
					?>
					<li>
						<div class="form-group"><?php esc_html_e($wpsd_other_amount_text); ?></div>
					</li>
				<?php } ?>
				<li>
					<div class="form-group">
						<input id="wpsd_donate_other_amount" type="text" class="wpsd_donate_other_amount" name="wpsd_donate_other_amount" placeholder="<?php _e('Amount', WPSD_TXT_DOMAIN); ?>"> <?php esc_html_e($wpsdDonateCurrency); ?>
					</div>
				</li>
			</ul>

			<!--card--->
			<?php
			if (!$wpsd_hide_label) {
			?>
				<label class="wpsd-donation-form-label"><?php _e('Card Details', WPSD_TXT_DOMAIN); ?></label>
			<?php
			}
			?>=================
			<div id="card-element"></div>
			<div id="card-errors" class="wpsd-alert" role="alert"></div>
			<!---card end-->
			<br>
			<input type="submit" name="wpsd-donate-button" class="wpsd-donate-button" value="<?php esc_attr_e($wpsdDonateButtonText); ?>">
		</form>

		<p class="wpsd-total-donation-today">
			Total&nbsp;<span id="wpsd-total-donation-number">0
				<?php echo esc_html($wpsdDonateCurrency); 
				?></span>&nbsp;Donation Today
		</p
	</div>
</div> 