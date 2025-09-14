/******************************************************************************\
|                                                                              |
|                               question-view.js                               |
|                                                                              |
|******************************************************************************|
|                                                                              |
|        This defines an abstract base view for questions.                     |
|                                                                              |
|       Author(s): Abe Megahed                                                 |
|                                                                              |
|       This file is subject to the terms and conditions defined in            |
|       'LICENSE.md', which is part of this source code distribution.          |
|                                                                              |
|******************************************************************************|
|       Copyright (C) 2016 - 2025, Megahed Labs LLC, www.sharedigm.com         |
\******************************************************************************/

import BaseView from '../../../views/base-view.js';

export default BaseView.extend({

	//
	// attributes
	//

	className: function() {
		let name = this.options.question.name;
		let className = name.replace(/_/g, '-');
		return className + ' form-group';
	},

	//
	// getting methods
	//

	getValue: function() {
		return undefined;
	},

	getElementsByValues: function(selector, values) {
		let els = this.$el.find(selector);

		// find elements where the values of the
		// element is included in the provided set
		//
		let elements = [];
		for (let i = 0; i < els.length; i++) {
			let el = els[i];
			let value = $(el).val();
			if (values.includes(value)) {
				elements.push(el);
			}
		}

		return $(elements);
	},

	//
	// rendering methods
	//

	templateContext: function() {
		return _.extend({
			name: this.options.question.name,
			icon: this.options.question.icon,
			text: this.options.question.text,
			help: this.options.question.help,
			options: this.options.question.options
		}, this.questionOptions());
	},

	questionOptions: function() {
		return {
			options: this.options.question.options
		};
	},

	//
	// event handling methods
	//

	onChange: function() {
		if (this.options.onchange) {
			this.options.onchange(this.options.question.name, this.getValue());
		}
	}
});