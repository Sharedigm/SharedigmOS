/******************************************************************************\
|                                                                              |
|                            color-question-view.js                            |
|                                                                              |
|******************************************************************************|
|                                                                              |
|                                                                              |
|       Author(s): Abe Megahed                                                 |
|                                                                              |
|       This file is subject to the terms and conditions defined in            |
|       'LICENSE.md', which is part of this source code distribution.          |
|                                                                              |
|******************************************************************************|
|       Copyright (C) 2016 - 2025, Megahed Labs LLC, www.sharedigm.com         |
\******************************************************************************/

import QuestionView from '../../../views/forms/questions/question-view.js';

export default QuestionView.extend({

	//
	// attributes
	//

	template: template(`
		<label class="control-label"><i class="<%= icon %>"></i><%= text %></label>
		<div class="controls">
			<div class="checkbox-inline">
				<input type="checkbox" />
			</div>
			<div class="control-inline">
				<input type="color" />
			</div>

			<% if (help) { %>
			<i class="active fa fa-question-circle" data-toggle="popover" title="<%= text %>" data-content="<%= help %>"></i>
			<% } %>
		</div>
	`),

	events: {
		'click input[type="checkbox"]': 'onClickCheckbox',
		'change input[type="color"]': 'onChange',
	},

	//
	// querying methods
	//

	isCustomColor: function() {
		return this.$el.find('input[type="checkbox"]').is(':checked');
	},

	//
	// getting methods
	//

	getValue: function() {
		return this.isCustomColor()? this.$el.find('input[type="color"]').val() : undefined;
	},

	//
	// rendering methods
	//

	showColor: function(color) {
		this.$el.find('input[type="color"]').show();
		if (color) {
			this.$el.find('input[type="color"]').val(color);
		}
		this.$el.find('input[type="checkbox"]').prop('checked', true);
	},

	hideColor: function() {
		this.$el.find('input[type="color"]').hide();
		this.$el.find('input[type="checkbox"]').prop('checked', false);
	},

	//
	// setting methods
	//

	setValue: function(value) {
		if (value) {
			this.showColor(value);
		} else {
			this.hideColor();
		}
	},

	//
	// mouse event handling methods
	//

	onClickCheckbox: function() {
		if (this.isCustomColor()) {
			this.showColor();
		} else {
			this.hideColor();
		}
		this.onChange();
	},
});