/******************************************************************************\
|                                                                              |
|                            font-question-view.js                             |
|                                                                              |
|******************************************************************************|
|                                                                              |
|        This defines a view for showing font questions.                       |
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
import FontSelectorView from '../../../views/forms/selectors/font-selector-view.js';

export default QuestionView.extend({

	//
	// attributes
	//

	template: template(`
		<label class="control-label"><i class="<%= icon %>"></i><%= text %></label>
		<div class="controls">
			<div class="font-selector"></div>

			<% if (help) { %>
			<i class="active fa fa-question-circle" data-toggle="popover" title="<%= text %>" data-content="<%= help %>"></i>
			<% } %>
		</div>
	`),

	regions: {
		font: {
			el: '.font-selector',
			replaceElement: true
		}
	},

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
		this.$el.find('select').val(value);
	},

	//
	// rendering methods
	//

	onRender: function() {

		// show child views
		//
		this.showChildView('font', new FontSelectorView());
	}
});