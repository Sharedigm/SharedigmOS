/******************************************************************************\
|                                                                              |
|                         short-answer-question-view.js                        |
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
			<div class="input-group">
				<input type="text" class="form-control" />

				<% if (help) { %>
				<div class="input-group-addon">
					<i class="active fa fa-question-circle" data-toggle="popover" title="<%= text %>" data-content="<%= help %>"></i>
				</div>
				<% } %>
			</div>
		</div>
	`),

	events: {
		'change input': 'onChange'
	},

	//
	// getting methods
	//

	getValue: function() {
		return this.$el.find('input').val();
	},

	//
	// setting methods
	//

	setValue: function(value) {
		return this.$el.find('input').val(value);
	}
});