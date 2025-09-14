/******************************************************************************\
|                                                                              |
|                            select-question-view.js                           |
|                                                                              |
|******************************************************************************|
|                                                                              |
|        This defines a view for showing select questions.                     |
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
			<select>
				<% let keys = Object.keys(options); %>
				<% for (i = 0; i < keys.length; i++) { %>
				<% let key = keys[i]; %>
				<option value="<%= key %>"><%= options[key] %></option>
				<% } %>
			</select>

			<% if (help) { %>
			<i class="active fa fa-question-circle" data-toggle="popover" title="<%= text %>" data-content="<%= help %>"></i>
			<% } %>
		</div>
	`),

	events: {
		'change select': 'onChange'
	},

	//
	// getting methods
	//

	getValue: function() {
		return this.$el.find('select').val();
	},

	//
	// setting methods
	//

	setValue: function(value) {
		if (value) {
			this.$el.find('select').val(value);
		}
	}
});