/******************************************************************************\
|                                                                              |
|                            questions-form-view.js                            |
|                                                                              |
|******************************************************************************|
|                                                                              |
|        This defines a form for viewing and filling question forms.           |
|                                                                              |
|       Author(s): Abe Megahed                                                 |
|                                                                              |
|       This file is subject to the terms and conditions defined in            |
|       'LICENSE.md', which is part of this source code distribution.          |
|                                                                              |
|******************************************************************************|
|       Copyright (C) 2016 - 2025, Megahed Labs LLC, www.sharedigm.com         |
\******************************************************************************/

import FormView from '../../views/forms/form-view.js';
import SelectQuestionView from '../../views/forms/questions/select-question-view.js';
import MultipleChoiceQuestionView from '../../views/forms/questions/multiple-choice-question-view.js';
import MultipleAnswerQuestionView from '../../views/forms/questions/multiple-answer-question-view.js';
import TrueFalseQuestionView from '../../views/forms/questions/true-false-question-view.js';
import ShortAnswerQuestionView from '../../views/forms/questions/short-answer-question-view.js';
import LongAnswerQuestionView from '../../views/forms/questions/long-answer-question-view.js';
import NumberQuestionView from '../../views/forms/questions/number-question-view.js';
import RangeQuestionView from '../../views/forms/questions/range-question-view.js';
import ColorQuestionView from '../../views/forms/questions/color-question-view.js';
import FontQuestionView from '../../views/forms/questions/font-question-view.js';
import DirectoryQuestionView from '../../views/forms/questions/directory-question-view.js';
import CoordsQuestionView from '../../views/forms/questions/coords-question-view.js';
import ElapsedTimeQuestionView from '../../views/forms/questions/elapsed-time-question-view.js';
import Keyboard from '../../views/keyboard/keyboard.js';

export default FormView.extend({

	//
	// attributes
	//

	questions: [],

	//
	// querying methods
	//

	hasQuestions: function() {
		return this.getQuestions() != undefined;
	},

	//
	// getting methods
	//

	getQuestions: function() {
		return this.questions || [];
	},

	getValue: function(kind) {
		if (this.hasChildView(kind)) {
			this.getChildView(kind).getValue();
		}
	},

	getValues: function() {
		let values = {};
		let questions = this.getQuestions();
		for (let i = 0; i < questions.length; i++) {
			let question = questions[i];
			let name = question.name.replace(/-/g, '_');
			values[name] = this.getValue(name);
		}
		return values;
	},

	getDefaultValues: function() {
		let values = {};
		if (this.hasQuestions()) {
			let questions = this.getQuestions();
			for (let i = 0; i < questions.length; i++) {
				let question = questions[i];
				let name = question.name.replace(/-/g, '_');
				values[name] = this.model.get(name);
			}
		}
		return values;
	},

	//
	// setting methods
	//

	setValue: function(key, value) {
		if (this.hasChildView(key)) {
			this.getChildView(key).setValue(value);
		}
	},

	//
	// rendering methods
	//

	template: function(data) {
		let html = '';
		let questions = data.questions;
		for (let i = 0; i < questions.length; i++) {
			let question = questions[i];
			let className = question.name.replace(/_/g, '-');
			html += '<div class="' + className + ' form-group"></div>';
		}
		return template(html);
	},

	templateContext: function() {
		return {
			questions: this.getQuestions()
		};
	},

	onRender: function() {

		// call superclass method
		//
		FormView.prototype.onRender.call(this);

		// show form content
		//
		if (this.hasQuestions()) {
			this.showQuestions();
		}

		// set initial values
		//
		if (this.getDefaultValues) {
			this.setValues(this.getDefaultValues());
		}
	},

	//
	// question rendering methods
	//

	showQuestions: function() {
		let questions = this.getQuestions();
		for (let i = 0; i < questions.length; i++) {
			this.showQuestion(questions[i]);
		}
	},

	showQuestion: function(question) {
		let region = question.name.replace(/-/g, '_');
		let className = question.name.replace(/_/g, '-');
		let questionKind = question.kind.replace(/-/g, '_');

		this.addRegion(region, {
			el: '.' + className,
			replaceElement: true
		});

		switch (questionKind) {

			// choice questions
			//
			case 'select':
				this.showSelectQuestion(region, question);
				break;
			case 'multiple_choice':
				this.showMultipleChoiceQuestion(region, question);
				break;
			case 'multiple_answer':
				this.showMultipleAnswerQuestion(region, question);
				break;
			case 'true_false':
				this.showTrueFalseQuestion(region, question);
				break;

			// open questions
			//
			case 'short_answer':
				this.showShortAnswerQuestion(region, question);
				break;
			case 'long_answer':
				this.showLongAnswerQuestion(region, question);
				break;

			// numerical questions
			//
			case 'number':
				this.showNumberQuestion(region, question);
				break;
			case 'range':
				this.showRangeQuestion(region, question);
				break;
			case 'color':
				this.showColorQuestion(region, question);
				break;

			// special questions
			//
			case 'font':
				this.showFontQuestion(region, question);
				break;
			case 'directory':
				this.showDirectoryQuestion(region, question);
				break;
			case 'coords':
				this.showCoordsQuestion(region, question);
				break;
			case 'elapsed_time':
				this.showElapsedTimeQuestion(region, question);
				break;
		}
	},

	//
	// choice question rendering methods
	//

	showSelectQuestion: function(region, question) {
		this.showChildView(region, new SelectQuestionView({
			question: question,

			// callbacks
			//
			onchange: this.options.onchange
		}));
	},

	showMultipleChoiceQuestion: function(region, question) {
		this.showChildView(region, new MultipleChoiceQuestionView({
			question: question,

			// callbacks
			//
			onchange: this.options.onchange
		}));
	},

	showMultipleAnswerQuestion: function(region, question) {
		this.showChildView(region, new MultipleAnswerQuestionView({
			question: question,

			// callbacks
			//
			onchange: this.options.onchange
		}));
	},

	showTrueFalseQuestion: function(region, question) {
		this.showChildView(region, new TrueFalseQuestionView({
			question: question,

			// callbacks
			//
			onchange: this.options.onchange
		}));
	},

	//
	// open question rendering methods
	//

	showShortAnswerQuestion: function(region, question) {
		this.showChildView(region, new ShortAnswerQuestionView({
			question: question,

			// callbacks
			//
			onchange: this.options.onchange
		}));
	},

	showLongAnswerQuestion: function(region, question) {
		this.showChildView(region, new LongAnswerQuestionView({
			question: question,

			// callbacks
			//
			onchange: this.options.onchange
		}));
	},

	//
	// numerical question rendering methods
	//

	showNumberQuestion: function(region, question) {
		this.showChildView(region, new NumberQuestionView({
			question: question,

			// callbacks
			//
			onchange: this.options.onchange
		}));
	},

	showRangeQuestion: function(region, question) {
		this.showChildView(region, new RangeQuestionView({
			question: question,

			// callbacks
			//
			onchange: this.options.onchange
		}));
	},

	showColorQuestion: function(region, question) {
		this.showChildView(region, new ColorQuestionView({
			question: question,

			// callbacks
			//
			onchange: this.options.onchange
		}));
	},

	showFontQuestion: function(region, question) {
		this.showChildView(region, new FontQuestionView({
			question: question,

			// callbacks
			//
			onchange: this.options.onchange
		}));
	},

	//
	// special question rendering methods
	//

	showDirectoryQuestion: function(region, question) {
		this.showChildView(region, new DirectoryQuestionView({
			question: question,

			// callbacks
			//
			onchange: this.options.onchange
		}));
	},

	showCoordsQuestion: function(region, question) {
		this.showChildView(region, new CoordsQuestionView({
			question: question,

			// callbacks
			//
			onchange: this.options.onchange
		}));
	},

	showElapsedTimeQuestion: function(region, question) {
		this.showChildView(region, new ElapsedTimeQuestionView({
			question: question,

			// callbacks
			//
			onchange: this.options.onchange
		}));
	},

	//
	// json display methods
	//

	showCode: function(file) {
		application.launch('code_editor', {
			model: file
		});
	},

	showJson: function() {
		import(
			'../../models/storage/files/file.js'
		).then((File) => {
			this.showCode(new File.default({
				contents: this.constructor.toJson(this.el)
			}));
		});
	},

	onKeyDown: function(event) {
		let showJson = false;

		// display as json
		//
		if (showJson) {
			if (event.keyCode == Keyboard.keyCodes['escape']) {
				this.showJson();
			}
		}
	}
}, {

	//
	// getting methods
	//

	getQuestionKind: function(controls) {

		// special questions
		//
		if ($(controls).find('.font-selector').length > 0) {
			return 'font';
		} else if ($(controls).find('.change .fa.fa-folder').length > 0) {
			return 'directory';
		} else if ($(controls).find('.latitude').length > 0) {
			return 'coords';

		// numerical questions
		//
		} else if ($(controls).find('.range-input').length > 0) {
			return 'range';
		} else if ($(controls).find('input[type="number"]').length > 0) {
			return 'number';
		} else if ($(controls).find('input[type="color"]').length > 0) {
			return 'color';

		// choice questions
		//
		} else if ($(controls).find('select').length > 0) {
			return 'select';
		} else if ($(controls).find('.radio-inline').length > 0) {
			return 'multiple_choice';
		} else if ($(controls).find('.checkbox-inline').length == 1 && $(controls).find('input').length == 1 && $(controls).find('label').length == 0) {
			return "true_false";
		} else if ($(controls).find('.checkbox-inline').length > 0) {
			return 'multiple_answer';
		}
	},

	//
	// choice question methods
	//

	toSelectQuestion: function(controls) {
		return {
			'kind': 'select',
			'options': this.toSelectOptions(controls)
		};
	},

	toMultipleChoiceQuestion: function(controls) {
		return {
			'kind': 'multiple_choice',
			'options': this.toMultipleChoiceOptions(controls)
		};
	},

	toMultipleAnswerQuestion: function(controls) {
		return {
			'kind': 'multiple_answer',
			'options': this.toMultipleAnswerOptions(controls)
		};
	},

	toTrueFalseQuestion: function() {
		return {
			'kind': 'true_false'
		};
	},

	//
	// open question methods
	//

	toShortAnswerQuestion: function() {
		return {
			'kind': 'short_answer'
		};
	},

	toLongAnswerQuestion: function() {
		return {
			'kind': 'long_answer'
		};
	},

	//
	// numerical question methods
	//

	toNumberQuestion: function() {
		return {
			'kind': 'number'
		};
	},

	toRangeQuestion: function(controls) {
		return {
			'kind': 'range',
			'options': this.toRangeOptions(controls)
		};
	},

	toColorQuestion: function() {
		return {
			'kind': 'color'
		};
	},

	//
	// special question methods
	//

	toFontQuestion: function() {
		return {
			'kind': 'font'
		};
	},

	toDirectoryQuestion: function() {
		return {
			'kind': 'directory'
		};
	},

	toCoordsQuestion: function() {
		return {
			'kind': 'coords'
		};
	},

	toElapsedTimeQuestion: function() {
		return {
			'kind': 'elapsed_time'
		};
	},

	//
	// question options methods
	//

	toSelectOptions: function(select) {
		let data = {};
		let options = $(select).find('option');
		for (let i = 0; i < options.length; i++) {
			let option = $(options[i]);
			let value = option.val() || 'none';
			let label = option.text();
			value = value.replace(/-/g, '_');
			data[value] = label;
		}
		return data;
	},

	toMultipleChoiceOptions: function(controls) {
		let radioButtons = $(controls).find('.radio-inline');
		let data = {};
		for (let i = 0; i < radioButtons.length; i++) {
			let radioButton = $(radioButtons[i]);
			let value = radioButton.find('input').attr('value');
			let label = radioButton.text().trim();
			if (!value) {
				value = $(radioButton).attr('class').replace('radio-inline', '').trim();
			}
			value = value.replace(/-/g, '_');
			data[value] = label;
		}
		return data;
	},

	toMultipleAnswerOptions: function(controls) {
		let radioButtons = $(controls).find('.checkbox-inline');
		let data = {};
		for (let i = 0; i < radioButtons.length; i++) {
			let radioButton = $(radioButtons[i]);
			let value = radioButton.find('input').attr('value');
			let label = radioButton.text().trim();
			if (!value) {
				value = $(radioButton).attr('class').replace('checkbox-inline', '').trim();
			}
			value = value.replace(/-/g, '_');
			data[value] = label;
		}
		return data;
	},

	toRangeOptions: function(controls) {
		let input = $(controls).find('input')[1];
		return {
			min: parseInt($(input).attr('min')),
			max: parseInt($(input).attr('max')),
			step: parseInt($(input).attr('step'))
		};
	},

	//
	// json converting methods
	//

	controlsToQuestion: function(controls) {
		let kind = this.getQuestionKind(controls);

		switch (kind) {

			// choice questions
			//
			case 'select':
				return this.toSelectQuestion(controls);
			case 'multiple_choice':
				return this.toMultipleChoiceQuestion(controls);
			case 'multiple_answer':
				return this.toMultipleAnswerQuestion(controls);
			case 'true_false':
				return this.toTrueFalseQuestion(controls);

			// open questions
			//
			case 'short_answer':
				return this.toShortAnswerQuestion(controls);
			case 'long_answer':
				return this.toLongAnswerQuestion(controls);

			// numerical questions
			//
			case 'number':
				return this.toNumberQuestion(controls);
			case 'range':
				return this.toRangeQuestion(controls);
			case 'color':
				return this.toColorQuestion(controls);

			// special questions
			//
			case 'font':
				return this.toFontQuestion(controls);
			case 'directory':
				return this.toDirectoryQuestion(controls);
			case 'coords':
				return this.toCoordsQuestion(controls);
			case 'elapsed_time':
				return this.toElapsedTimeQuestion(controls);
		}
	},

	formGroupToObject: function(formGroup) {
		let name = $(formGroup).attr('class').replace('form-group', '').replace(/-/g, '_').trim();
		let icon = $(formGroup).find('> label i').attr('class');
		let text = $(formGroup).find('> label').text();
		let controls = $(formGroup).find('> .controls')[0];

		let data = _.extend({
			name: name,
			icon: icon,
			text: text
		}, this.controlsToQuestion(controls));

		// add help hint
		//
		let help = $(formGroup).find('> .controls .fa-question-circle').attr('data-content');
		data.help = help;

		return data;
	},

	toObjects: function(form) {
		let formGroups = $(form).find('.form-group');
		let objects = [];
		for (let i = 0; i < formGroups.length; i++) {
			let formGroup = formGroups[i];
			objects.push(this.formGroupToObject(formGroup));
		}
		return objects;
	},

	toObject: function(form) {
		return {
			'questions': this.toObjects(form)
		};
	},

	toJson: function(form) {
		return JSON.stringify(this.toObject(form), null, 4);
	}
});