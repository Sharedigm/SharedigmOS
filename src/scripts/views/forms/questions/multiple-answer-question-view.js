/******************************************************************************\
|                                                                              |
|                       multiple-answer-question-view.js                       |
|                                                                              |
|******************************************************************************|
|                                                                              |
|        This defines a view for showing multiple answer questions.            |
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
			<% let keys = Object.keys(options); %>
			<% for (i = 0; i < keys.length; i++) { %>
			<% let key = keys[i]; %>
			<% let value = key; %>
			<% let label = options[key]; %>
			<div class="checkbox-inline">
				<label>
					<input type="checkbox" value="<%= value %>" />
					<%= label %>
				</label>
			</div>
			<% } %>

			<% if (help) { %>
			<i class="active fa fa-question-circle" data-toggle="popover" title="<%= text %>" data-content="<%= help %>"></i>
			<% } %>
		</div>
	`),

	events: {
		'change input': 'onChange'
	},

	//
	// getting methods
	//

	getElementsValues: function(selector) {
		return $.map(this.$el.find(selector), (el) => $(el).val());
	},

	getValue: function() {
		return this.getElementsValues('input:checked');
	},

	//
	// setting methods
	//

	setValue: function(value) {
		this.getElementsByValues('input', value || []).prop('checked', true);
	}
});