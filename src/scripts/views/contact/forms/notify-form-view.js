/******************************************************************************\
|                                                                              |
|                             notify-form-view.js                              |
|                                                                              |
|******************************************************************************|
|                                                                              |
|        This defines the notify form of the application.                      |
|                                                                              |
|        Author(s): Abe Megahed                                                |
|                                                                              |
|        This file is subject to the terms and conditions defined in           |
|        'LICENSE.md', which is part of this source code distribution.         |
|                                                                              |
|******************************************************************************|
|        Copyright (C) 2016 - 2025, Megahed Labs LLC, www.sharedigm.com        |
\******************************************************************************/

import Contact from '../../../models/utilities/contact.js';
import FormView from '../../../views/forms/form-view.js';

export default FormView.extend({

	//
	// attributes
	//

	className: 'form-horizontal wide',

	template: template(`
		<div class="email form-group">
			<label class="control-label"><i class="fa fa-envelope"></i>Email</label>
			<div class="controls">
				<div class="input-group">
					<input type="email" class="form-control" />
					<div class="input-group-addon">
						<i class="active fa fa-question-circle" data-toggle="popover" title="Email" data-content="This is the email to send a notification to."></i>
					</div>
				</div>
			</div>
		</div>

		<% if (subjects) { %>
		<div class="subject form-group">
			<label class="control-label"><i class="fa fa-info-circle"></i>Subject</label>
			<div class="controls">
				<select>
					<% for (let i = 0; i < subjects.length; i++) { %>
					<option><%= subjects[i] %></option>
					<% } %>
				</select>
			</div>
		</div>
		<% } %>
		
		<div class="buttons">
			<button class="submit btn btn-primary btn-lg">
				<i class="fa fa-envelope"></i><%= label %>
			</button>
		</div>
	`),

	events: {
		'click .submit': 'onClickSubmit'
	},

	//
	// constructor
	//

	initialize: function() {
		this.model = new Contact();
	},

	//
	// getting methods
	//

	getValue: function(key) {
		switch (key) {
			case 'email':
				return this.$el.find('.email input').val();
			case 'subject':
				return this.$el.find('.subject option:selected').text();
		}
	},

	getValues: function() {
		return {
			email: this.getValue('email'),
			subject: this.getValue('subject')
		};
	},

	//
	// rendering methods
	//

	templateContext: function() {
		return this.options;
	},

	//
	// mouse event handling methods
	//

	onClickSelect: function(event) {
		this.$el.find('input[type="file"]').trigger('click');
		this.block(event);
	},

	onClickSubmit: function() {
		application.showSpinner();

		// send contact email
		//
		this.submit({

			// callbacks
			//
			success: () => {
				application.hideSpinner();

				// go back to welcome view
				//
				application.navigate('#', {
					trigger: true
				});

				// show notification
				//
				application.notify({
					icon: '<i class="fa fa-envelope"></i>',
					title: 'Request Sent',
					message: "Your request has been sent. Thank you for participating."
				});
			},

			error: () => {

				// show error
				//
				application.error({
					message: "Your message could not be sent."
				});
			}
		});
	}
});