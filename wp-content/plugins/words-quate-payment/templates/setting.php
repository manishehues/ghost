<?php
$words_val = '';
$hours_val = '';
$wordscost_val = '';

global $wpdb, $table_prefix;
$pricing_table = $table_prefix . 'word_cost';

if (isset($_REQUEST['Submit'])) {
	$words = $_REQUEST['words'];
	$hours = $_REQUEST['hours'];
	$wordscost = $_REQUEST['wordscost'];

	if (isset($_REQUEST['entryid'])) {
		$wpdb->update(
			$pricing_table,
			array(
				'upto_words' => $words,
				'time_frame' => $hours,
				'word_cost' => $wordscost
			),
			array('id' => $_REQUEST['entryid'])
		);
		wp_redirect(admin_url('admin.php?page=words-pricing-list'));
	} 
	else {
		$wpdb->insert(
			$pricing_table,
			array(
				'upto_words' => $words,
				'time_frame' => $hours,
				'word_cost' => $wordscost
			)
		);
		wp_redirect(admin_url('admin.php?page=words-pricing-list'));
	}
}	
$edited_row = [];
if (isset($_REQUEST['entryid']) && !empty($_REQUEST['entryid'])) {
	$edited_row = $wpdb->get_row("SELECT * FROM $pricing_table WHERE id = '" . $_REQUEST['entryid'] . "'");
}

if (!empty($edited_row)) {
	$words_val = $edited_row->upto_words;
	$hours_val = $edited_row->time_frame;
	$wordscost_val = $edited_row->word_cost;
}
?>

<div class="wrap wqmain_body">
	<h3 class="wqpage_heading">Words Pricing Quote</h3>
	<div class="wqform_body">
		<form method="post" action="" id="save_pricing">
			<?php wp_nonce_field('update-options') ?>
			<div class="form-group">
				<!-- <label for="">Upto words</label> -->
				<div class="wqlabel">Upto words</div>
				<div class="wqfield">
					<select class="form-control form-control-sm
					 wqtextfield " style="width: 100%;" name="words">
						<option value="1000" <?php if ($words_val == "1000") echo 'selected = "selected"'; ?>>Upto 1000</option>
						<option value="1500" <?php if ($words_val == "1500") echo 'selected = "selected"'; ?>>Upto 1,500</option>
						<option value="4000" <?php if ($words_val == "4000") echo 'selected = "selected"'; ?>>Upto 4,000</option>
						<option value="6000" <?php if ($words_val == "6000") echo 'selected = "selected"'; ?>>Upto 6,000</option>
						<option value="8000" <?php if ($words_val == "8000") echo 'selected = "selected"'; ?>>Upto 8,000</option>
						<option value="16000" <?php if ($words_val == "16000") echo 'selected = "selected"'; ?>>Upto 16,000</option>
						<option value="20000" <?php if ($words_val == "20000") echo 'selected = "selected"'; ?>>Upto 20,000</option>
						<option value="50000" <?php if ($words_val == "50000") echo 'selected = "selected"'; ?>>Upto 50,000</option>
						<option value="90000" <?php if ($words_val == "90000") echo 'selected = "selected"'; ?>>Upto 90,000</option>
						<option value="125000" <?php if ($words_val == "125000") echo 'selected = "selected"'; ?>>Upto 1,25,000</option>
						<option value="250000" <?php if ($words_val == "250000") echo 'selected = "selected"'; ?>>Upto 2,50,000</option>
						<option value="400000" <?php if ($words_val == "400000") echo 'selected = "selected"'; ?>>Upto 4,00,000</option>
					</select>
				</div>
			</div>
			<div>&nbsp;</div>
			<div class="form-group">
				<div class="wqlabel">Time Duration</div>
				<div class="wqfield">
					<select class="form-control form-control-sm wqtextfield" style="width: 100%;" name="hours">
						<option value="4 hours" <?php if ($hours_val == "4 hours") echo 'selected = "selected"'; ?>>4 Hours </option>
						<option value="8 hours" <?php if ($hours_val == "8 hours") echo 'selected = "selected"'; ?>>8 Hours </option>
						<option value="12 hours" <?php if ($hours_val == "12 hours") echo 'selected = "selected"'; ?>>12 Hours</option>
						<option value="24 hours" <?php if ($hours_val == "24 hours") echo 'selected = "selected"'; ?>>24 Hours</option>
						<option value="48 hours" <?php if ($hours_val == "48 hours") echo 'selected = "selected"'; ?>>48 Hours</option>
						<option value="72 hours" <?php if ($hours_val == "72 hours") echo 'selected = "selected"'; ?>>72 Hours</option>
						<option value="1 Week" <?php if ($hours_val == "1 Week") echo 'selected = "selected"'; ?>>1 Week</option>
						<option value="2 Weeks" <?php if ($hours_val == "2 Weeks") echo 'selected = "selected"'; ?>>2 Weeks</option>
						<option value="3 Weeks" <?php if ($hours_val == "3 Weeks") echo 'selected = "selected"'; ?>>3 Weeks</option>
						<option value="4 Weeks" <?php if ($hours_val == "4 Weeks") echo 'selected = "selected"'; ?>>4 Weeks</option>
						<option value="5 Weeks" <?php if ($hours_val == "5 Weeks") echo 'selected = "selected"'; ?>>5 Weeks</option>
					</select>
				</div>
			</div>
			<div>&nbsp;</div>
			<div class="form-group">
				<div class="wqlabel">Words cost $</div>
				<div class="wqfield wd">
					<input type="text" class="form-control wqtextfield" placeholder="Words Cost" name="wordscost" value="<?php echo $wordscost_val ?>">
				</div>
			</div>
			<div>&nbsp;</div>
			<div class="wd"><input type="submit" class="wqsubmit_button" id="save_pricing_btn" name="Submit" class="button button-primary" value="Save" /></div>
		</form>
	</div>
</div>