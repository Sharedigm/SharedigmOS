/******************************************************************************\
|                                                                              |
|                            coords-question-view.js                           |
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
				<input type="text" class="latitude form-control" />
				<span class="input-group-addon">&degN</span>
				<input type="text" class="longitude form-control" />
				<span class="input-group-addon">&degW</span>

				<% if (help) { %>
				<div class="input-group-addon">
					<i class="active fa fa-question-circle" data-toggle="popover" title="<%= text %>" data-content="<%= help %>"></i>
				</div>
				<% } %>
			</div>
		</div>
	`),

	events: {
		'change .latitude': 'onChange',
		'change .longitude': 'onChange',
	},

	//
	// getting methods
	//

	getLatitude: function() {
		return this.$el.find('.latitude').val();
	},

	getLongitude: function() {
		return this.$el.find('.longitude').val();
	},

	getValue: function() {
		return [this.getLatitude(), this.getLongitude()];
	},

	//
	// setting methods
	//

	setValue: function(value) {
		if (value && value.length > 1) {
			this.$el.find('.latitude').val(value[0]);
			this.$el.find('.longitude').val(value[1]);
		}
	}
});