/******************************************************************************\
|                                                                              |
|                                notify-view.js                                |
|                                                                              |
|******************************************************************************|
|                                                                              |
|        This defines the notify me view of the application.                   |
|                                                                              |
|        Author(s): Abe Megahed                                                |
|                                                                              |
|        This file is subject to the terms and conditions defined in           |
|        'LICENSE.md', which is part of this source code distribution.         |
|                                                                              |
|******************************************************************************|
|        Copyright (C) 2016 - 2025, Megahed Labs LLC, www.sharedigm.com        |
\******************************************************************************/

import BaseView from '../../views/base-view.js';
import NotifyFormView from '../../views/contact/forms/notify-form-view.js';

export default BaseView.extend({

	//
	// attributes
	//

	template: template(`
		<h1><i class="fa fa-envelope"></i>Notifications</h1>
		
		<ol class="breadcrumb">
			<li><a href="#"><i class="fa fa-home"></i>Home</a></li>
			<li><i class="fa fa-envelope"></i>Notify Me</li>
		</ol>
		
		<div class="content">
			<p><%= description %></p>
			<br />

			<div class="panel">
				<div class="wait-list-form"></div>
			</div>
		</div>
	`),

	regions: {
		form: '.wait-list-form'
	},

	//
	// rendering methods
	//

	templateContext: function() {
		return {
			description: config.settings.defaults.notify.description
		};
	},

	onRender: function() {
		this.showChildView('form', new NotifyFormView({
			subjects: config.settings.defaults.notify.subjects,
			label: config.settings.defaults.notify.label
		}));
	}
});