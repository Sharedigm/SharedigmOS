/******************************************************************************\
|                                                                              |
|                            range-question-view.js                            |
|                                                                              |
|******************************************************************************|
|                                                                              |
|        This defines a view for showing range value questions.                |
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
import RangeInputView from '../../../views/forms/inputs/range-input-view.js';

export default QuestionView.extend({

	//
	// attributes
	//

	template: template(`
		<label class="control-label"><i class="<%= icon %>"></i><%= text %></label>
		<div class="controls">
			<div class="range-input"></div>

			<% if (help) { %>
			<i class="active fa fa-question-circle" data-toggle="popover" title="<%= text %>" data-content="<%= help %>"></i>
			<% } %>
		</div>
	`),

	regions: {
		'input': '.range-input'
	},

	//
	// getting methods
	//

	getValue: function() {
		return this.getChildView('input').getValue();
	},

	//
	// setting methods
	//

	setValue: function(value) {
		this.getChildView('input').setValue(value);
	},

	//
	// rendering methods
	//

	onRender: function() {
		this.showChildView('input', new RangeInputView({

			// options
			//
			min: this.options.question.options.min,
			max: this.options.question.options.max,
			step: this.options.question.options.step,

			// callbacks
			//
			onchange: () => this.onChange()
		}));
	}
});