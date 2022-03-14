<?php
if (!defined('ABSPATH')) exit;
//print_r($res);

$wpsdGeneralSettings = stripslashes_deep(unserialize(get_option('wpsd_general_settings')));

if (is_array($wpsdGeneralSettings)) {

	$wpsdDonationEmail = $wpsdGeneralSettings['wpsd_donation_email'];
	$wpsdPaymentTitle = $wpsdGeneralSettings['wpsd_payment_title'];
	$wpsdDonationOptions = $wpsdGeneralSettings['wpsd_donation_options'];
	$wpsdDonateButtonText = $wpsdGeneralSettings['wpsd_donate_button_text'];
	$wpsdDonateCurrency = $wpsdGeneralSettings['wpsd_donate_currency'];
} else {

	$wpsdDonationEmail = "";
	$wpsdPaymentTitle = "Donate Us";
	$wpsdDonationOptions = "";
	$wpsdDonateButtonText = "Donate Now";
	$wpsdDonateCurrency = "USD";
}


$wpsd_donation_values   = isset($wpsdGeneralSettings['wpsd_donation_values']) ? explode(',', $wpsdGeneralSettings['wpsd_donation_values']) : array();

// ========================
// Template Settings
// ========================
$wpsdTempSettings           = stripslashes_deep(unserialize(get_option('wpsd_temp_settings')));
$wpsdFormBanner             = isset($wpsdTempSettings['wpsd_form_banner']) ? $wpsdTempSettings['wpsd_form_banner'] : '';
$wpsdSelectTemp             = isset($wpsdTempSettings['wpsd_select_template']) ? $wpsdTempSettings['wpsd_select_template'] : 0;
$wpsd_display_banner        = isset($wpsdTempSettings['wpsd_display_banner']) ? $wpsdTempSettings['wpsd_display_banner'] : '';
$wpsd_display_header        = isset($wpsdTempSettings['wpsd_display_header']) ? $wpsdTempSettings['wpsd_display_header'] : '';
$wpsd_donation_for_label    = isset($wpsdTempSettings['wpsd_donation_for_label']) ? $wpsdTempSettings['wpsd_donation_for_label'] : 'Donation For';
$wpsd_donator_name_label    = isset($wpsdTempSettings['wpsd_donator_name_label']) ? $wpsdTempSettings['wpsd_donator_name_label'] : 'Donator Name';
$wpsd_donator_email_label   = isset($wpsdTempSettings['wpsd_donator_email_label']) ? $wpsdTempSettings['wpsd_donator_email_label'] : 'Donator Email';
$wpsd_donator_phone_label   = isset($wpsdTempSettings['wpsd_donator_phone_label']) ? $wpsdTempSettings['wpsd_donator_phone_label'] : 'Donator Phone';
$wpsd_donate_amount_label   = isset($wpsdTempSettings['wpsd_donate_amount_label']) ? $wpsdTempSettings['wpsd_donate_amount_label'] : 'Donate Amount';
$wpsd_display_phone         = isset($wpsdTempSettings['wpsd_display_phone']) ? $wpsdTempSettings['wpsd_display_phone'] : '';
$wpsd_other_amount_text     = isset($wpsdTempSettings['wpsd_other_amount_text']) ? $wpsdTempSettings['wpsd_other_amount_text'] : '';
$wpsd_hide_label            = isset($wpsdTempSettings['wpsd_hide_label']) ? $wpsdTempSettings['wpsd_hide_label'] : 1;
$wpsd_form_description      = isset($wpsdGeneralSettings['wpsd_form_description']) ? $wpsdGeneralSettings['wpsd_form_description'] : '';

$wpsdDonOpVals = ($wpsdDonationOptions != '') ? explode(',', $wpsdDonationOptions) : array();


$default_service_type = 'Dissertation, Thesis or Proposal Editing';

$service_types = [
            'dissertation-thesis-or-proposal-editing' => 'Dissertation, Thesis or Proposal Editing',
            'academic-editing' => 'Academic Editing',
            'admissions-essay-editing' => 'Admissions Essay Editing',
            'business-editing' => 'Business Editing',
            'resume-and-personal-editing' => 'Resume And Personal Editing',
            'personal-editing' => 'Personal Editing'
        ];


if(isset($_REQUEST['service_type']) && !empty($_REQUEST['service_type'])){
    if(array_key_exists($_REQUEST['service_type'],  $service_types)){

        $default_service_type = $service_types[$_REQUEST['service_type']];

    }

}


?>





<!-- Tab links -->
<div class="headArea">
	<ul class="tab">
		<li class="tablinks active" onclick="nextTab(event, 'step1',1)">Get A Quote</li>
		<li id="instructions" class="tablinks disabled" onclick="nextTab(event, 'step2',2)">Instruction</li>
		<li id="checkout" class="tablinks disabled" onclick="nextTab(event, 'step3',3)">Get Quote</li>
	</ul>
</div>


<div class="allSteps">

	<form action="" method="POST" id="wpsd-donation-form-id" autocomplete="off" enctype="multipart/form-data">
		<div id="step1" class="step  tabcontent wordRange one">
			<div name="registrationForm" class="rangeForm">
				<div class="leftSide">
					<h3 class="fusion-responsive-typography-calculated">Word Count</h3>
					<p> <input id="ageInputId" class="styled-slider slider-progress" max="25000" min="0" name="ageInputName" type="range" value="0" oninput="ageOutputId.value = ageInputId.value"></p>
					<div class="moreArea" id="moreArea"><a href="javascript:void(0)">Find your word count</a></div>
					
				</div>
				<div class="rightSide">
					<input type="text" id="ageOutputId" name="numberOfWords" value="">
				</div>
				<div class="alert alert-danger show-error hidden" id="errorqoute">Please Enter a valid number of words.</div>
				<div class="moreWordsArea">
					<p>In Microsoft Word, go to the Review tab or Tools menu, and select Word Count.<br>
						In WordPerfect, right click anywhere in the document and select Properties, and then click the
						Information tab.<br>
						To automatically count the number of words in your document, copy and paste the text into the box
						below.</p>
					<p> <textarea placeholder="Type here..." class="moreWords textArea" name="" id="testwords" cols="30" rows="10"></textarea></p>
					<div class="clearWords"><em>The text you enter above will not be stored online.</em> <a href="javascript:void(0)" id="textclear" class="clear bttn">Clear</a></div>
					
				</div>
			</div>
			<div id="pricing" class="pricingListing quoteTable">
				<table id="records_table" class="costListing table-1">
					<tbody>

						<?php foreach ($rowCount as $res) { ?>
							<tr>
								<td><?php echo $default_service_type; ?></td>
								<td>(up to <?php echo number_format($res->upto_words); ?> words) </td>
								<td><?php echo $res->time_frame; ?></td>
							</tr>
						<?php } ?>

					</tbody>
				</table>


				<div class="btnArea">
					<a class="fusion-button button-flat bttn bttnOrange" id="calcQuote" href="javascript:void(0);">
						<div class="overlayloader hidden">
							<img src="<?php echo WPSD_ASSETS .'img/loader.svg'; ?>" class="wcp_loader">
						</div>

						<span class="fusion-button-text">Calculate Quote</span>
					</a>
					<a class="fusion-button button-flat bttn bttnGreen" id="proceedTochk" href="javascript:void(0);">
						<span class="fusion-button-text">Tell Us More</span>
					</a>
				</div>
				
			</div>
		</div>

		<div id="step2" class="step tabcontent instruction two" style="display: none;">
			<h3 class="stepTitle fusion-responsive-typography-calculated">Instructions</h3>

			<div class="formGroup">


				<label class="fileUpload label" for="file_url">
					<?php _e('Select File'); ?><br>
					<input type="file" id="file" name="file" />
					<input type="hidden" name="file_url" value="" id="file_url" />
				</label>

				<div class="alert alert-danger show-error hidden" id="errorqoute1">Please upload file</div>

				<div class="progress1">
				    <div class="progress-bar"></div>
				</div>
			</div>


			<div class="row"><h2>Please answer all questions that apply</h2></div>


			<div class="formGroup projectTitle1">
				<label for="" class="label">Project Title</label>
				<input type="text" name="order_title" class="form-control">
			</div>

			<div class="formGroup projectTitle1">
				<label for="acadmic_doc_title" class="label">If this document is academic, what subject is it on?</label>
				<input type="text" name="acadmic_doc_title" id="acadmic_doc_title" class="form-control">
			</div>

			<div class="formGroup reference">
				<label for="is_acadmic_doc" class="label">If this document is academic, do you want us to edit or proofread your endnotes?</label>
				<select class="form-control" name="is_acadmic_doc" id="is_acadmic_doc">
					<option value="">Select form</option>
					<option value="Yes">Yes</option>
					<option value="No">No</option>
				</select>
			</div>

			<div class="formGroup reference">
				<label for="" class="label">Do you want us to edit or proofread your bibliography/reference?</label>
				<select class="form-control" name="document_check_biblio">
					<option value=""> Select form</option>
					<option value="Yes and I will tell you my style guide below"> Yes and I will tell you my style guide below</option>
					<option value="No thank you">No thank you</option>
				</select>
			</div>
			<div class="formGroup footNotes">
				<label for="" class="label">Do you want us to edit or proofread your endnotes and/or footnotes? </label>
				<select class="form-control" name="document_check_references">
					<option value=""> Select from</option>
					<option value="Yes and I will tell you my style guide below"> Yes and I will tell you my style guide below</option>
					<option value="No thank you">No thank you</option>
				</select>
			</div>
			<div class="formGroup document">
				<label for="" class="label">Is this document scientific/technical or arts/humanities/social sciences</label>
				<select class="form-control " name="document_science_arts">
					<option value=""> Select from</option>
					<option value="Scientific/Technical/Medical"> Scientific/Technical/Medical</option>
					<option value="Arts/Humanities/Social Sciences">Arts/Humanities/Social Sciences</option>
					<option value="Not Sure">Not Sure</option>
				</select>
			</div>
			<div class="formGroup guide">
				<label for="" class="label">Which style guide would you like us to check your document against? </label>
				<select class="form-control" name="document_style_guide">
					<option value=""> Select from</option>
					<option value="Yes and I will tell you my style guide below"> Yes and I will tell you my style guide below</option>
					<option value="I don't know; please just make it consistent">I don’t know; please just make it consistent</option>
					<option value="I don't need references checked">I don’t need references checked</option>
					<option value="A specific academic journal (I will list it below)">A specific academic journal (I will list it below)</option>
					<option value="APA 6th Ed.">APA 6th Ed.</option>
					<option value="APA 7th Ed.">APA 7th Ed.</option>
					<option value="Bluebook">Bluebook</option>
					<option value="Chicago Manual 17th Ed.">Chicago Manual 17th Ed.</option>
					<option value="Harvard (Bangor)">Harvard (Bangor)</option>
					<option value="Harvard (Kent)">Harvard (Kent)</option>
					<option value="Harvard (Leeds)">Harvard (Leeds)</option>
					<option value="Harvard (Manchester)">Harvard (Manchester)</option>
					<option value="NHarvard (New South Wales)">Harvard (New South Wales)</option>
					<option value="Harvard (Other - I will list it below)">Harvard (Other – I will list it below)</option>
					<option value="Harvard (Queensland)">Harvard (Queensland)</option>
					<option value="IEEE">IEEE</option>
					<option value="MLA">MLA</option>
					<option value="OSCOLA">OSCOLA</option>
					<option value="Turabian">Turabian</option>
					<option value="Vancouver">Vancouver</option>
				</select>
			</div>
			<div class="formGroup editing">
				<label for="" class="label">Which version of English should be used when editing or proofreading your
					document </label>
				<select class="form-control" name="document_english_version">
					<option value=""> Select from</option>
					<option value="US">US</option>
					<option value="British">British</option>
					<option value="Canadian">Canadian</option>
					<option value="Australian">Australian</option>
				</select>
			</div>
			<div class="formGroup specialInst">
				<label for="" class="label">Add your special instructions for this order below<br>
					<small>To help us serve you better, please tell us:</small></label>
				
				<div class="allFeatures">
					<ul>
						<li>Who or what this document is for</li>
						<li>If we need to watch for any specific issues you’re concerned about</li>
						<li>How tough you want us to be</li>
						<li>If there are any parts of your document you don’t want us to work on (e.g., references)</li>
					</ul>
				</div>
				<p> <textarea placeholder="Type instructions here..." class="specialIns textArea" name="order_notes" id="" cols="30" rows="10"></textarea>
				</p>
			</div>
			<div class="formGroup editorCode">
				<label for="" class="label">Editor code (optional)</label>
				<input name="editor_code" type="text" class="form-control">
				
				<p><small>Would you like this order to be completed by an editor you’ve worked with before?<br>
						If you know their code (it will look like EM###), enter it above. If your chosen editor is not
						available we will ensure the next available editor completes your order, so that it is returned on time. </small>
				</p>
				
			</div>
			<div class="grandTotal">
				<div class="upper">
					<table class="total">
						<tbody>
							<tr>
								<td class="selectedtimeFrame"></td>
								<td class="selectedtimecost"></td>
							</tr>
						</tbody>
						<tfoot>
							<tr>
								<td>Total Payable Amount</td>
								<td class="selectedtimecost"></td>
							</tr>
						</tfoot>
					</table>
				</div>
			</div>
			<div class="btnArea">
				<a class="fusion-button button-flat bttn bttnOrange" id="proceed_checkout" href="javascript:void(0);">
					<span class="fusion-button-text" onclick= "nextTab(event, 'step3')">Proceed to Checkout</span>
				</a>
			</div>
			
		</div>

		<div id="step3" class="step tabcontent billingDetails two" style="display: none;">
			<div class="userDetails">
				<div class="row">
					<div class="col-12">
						<h3 class="stepTitle fusion-responsive-typography-calculated">User Details</h3>
					</div>
					<div id="card-errors" class="wpsd-alert" role="alert"></div>
					<div class="col-6 fn">
						<div class="form-group">
							<label for="wpsd_donator_name" class="label">First Name</label>
							<input type="text" name="first_name" placeholder="John" id="wpsd_donator_name">
						</div>
					</div>
					<div class="col-6 ln">
						<div class="form-group">
							<label for="last_name" class="label">Last Name</label>
							<input type="text" name="last_name" placeholder="Smith" id="last_name">
						</div>
						
					</div>
					<div class="col-6 fn">
						<div class="form-group">
							<label for="wpsd_donator_email" class="label">Email</label>
							<input type="email" name="wpsd_donator_email" id="wpsd_donator_email" placeholder="Example@abc.com">
						</div>
						
					</div>
					<div class="col-6 ln">
						<div class="form-group">
							<label for="wpsd_donator_phone" class="label">Phone </label>
							<input type="text" name="wpsd_donator_phone" id="wpsd_donator_phone" placeholder="987*******">
						</div>
						
					</div>
				</div>
			</div>
			<div class="cardDetails">
				<div class="row">
  						<input type="hidden" name="action" value="wpsd_donation_success">
  						<input type="hidden" name="time_frame" value="" id="time_frame">
  						<input type="hidden" name="default_service_type" value="<?php echo $default_service_type;?>" id="default_service_type">
						<input id="wpsd_donate_other_amount" type="hidden" class="wpsd_donate_other_amount" name="wpsd_donate_other_amount">
					<div class="col-12">
						<h3 class="stepTitle fusion-responsive-typography-calculated" data-fontsize="32" data-lineheight="41.6px">Card Details</h3>
					</div>
					
					<div class="col-12 cn">
						<div id="card-element"></div>
						<!-- <div id="card-errors" class="wpsd-alert" role="alert"></div> -->
					</div>


				</div>
			</div>
			<div class="billingAddress">
				<div class="row">
					<div class="col-12">
						<h3 class="stepTitle fusion-responsive-typography-calculated">Billing Address</h3>
						
					</div>
					<div class="col-12 address">
						<div class="form-group">
							<label for="address" class="label">Your Address</label>
							<input type="text" id="address" name="addr_line">
						</div>
						
					</div>
					<div class="col-6 town">
						<div class="form-group">
							<label for="town_city" class="label">Town / City</label>
							<input type="text" id="town_city" name="addr_city">
						</div>
						
					</div>
					<div class="col-6 state">
						<div class="form-group">
							<label for="addr_state" class="label">State</label>
							<input type="text" id="addr_state" name="addr_state">
						</div>
						
					</div>
					<div class="col-6 country">
						<div class="form-group">
							<label for="addr_country" class="label">Country</label>
							<input type="text" name="addr_country" id="addr_country">
						</div>
						
					</div>
					<div class="col-6 postalCode">
						<div class="form-group">
							<label for="addr_postcode" class="label">Postal Code</label>
							<input type="text" name="addr_postalcode" id="addr_postalcode">
						</div>
						
					</div>
				</div>
			</div>
			<div class="grandTotal">
				<div class="upper">
					<table class="total">
						<tbody>
							<tr>
								<td class="selectedtimeFrame"></td>
								<td class="selectedtimecost"></td>
							</tr>
						</tbody>
						<tfoot>
							<tr>
								<td>Total Payable Amount</td>
								<td class="selectedtimecost"></td>
							</tr>
						</tfoot>
					</table>
				</div>
				<div class="btnArea">
					 <!-- <a class="fusion-button button-flat bttn bttnOrange" target="_self" href="javascript:void(0);" rel="noopener"><br> -->
						<!-- <span class="fusion-button-text">Pay Now</span><br> -->
					<!-- <input type="submit" name="wpsd-donate-button" id="paynow" class="fusion-button button-flat bttn bttnOrange" value="Pay Now" /> -->
					<button type="submit" name="wpsd-donate-button" id="paynow" class="fusion-button button-flat bttn bttnOrange">
						<span class="paying">
							<div class="overlayloader hidden">
								<img src="<?php echo WPSD_ASSETS .'img/loader.svg'; ?>" class="wcp_loader">
							</div>
							Pay Now
						</span>						
					</button>
					<!-- </a> -->
					
				</div>
				
			</div>
		</div>
	</form>
</div>









