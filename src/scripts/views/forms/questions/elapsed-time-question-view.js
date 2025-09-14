/******************************************************************************\
|                                                                              |
|                         elapsed-time-question-view.js                        |
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
			<div class="input-group" style="width:150px; float:left; margin-right:10px">
				<input type="text" class="hours form-control" size="2" value="00">
				<span class="input-group-addon">:</span>
				<input type="text" class="minutes form-control" size="2" value="00">
				<span class="input-group-addon">:</span>
				<input type="text" class="seconds form-control" size="2" value="00">
			</div>

			<% if (help) { %>
			<i class="active fa fa-question-circle" data-toggle="popover" title="<%= text %>" data-content="<%= help %>"></i>
			<% } %>
		</div>
	`),

	events: {
		'change .hours': 'onChange',
		'change .minutes': 'onChange',
		'change .seconds': 'onChange'
	},

	//
	// getting methods
	//

	getValue: function() {
		let hours = parseInt(this.$el.find('.hours').val());
		let minutes = parseInt(this.$el.find('.minutes').val());
		let seconds = parseInt(this.$el.find('.seconds').val());
		return [hours, minutes, seconds];
	},

	//
	// setting methods
	//

	setValue: function(value) {
		if (value && value.length == 3) {
			this.$el.find('.hours').val(value[0]);
			this.$el.find('.minutes').val(value[1]);
			this.$el.find('.seconds').val(value[2]);
		}
	}
});