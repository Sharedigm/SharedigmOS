/******************************************************************************\
|                                                                              |
|                          verify-email-changed-view.js                        |
|                                                                              |
|******************************************************************************|
|                                                                              |
|        This defines a view where users can verify their email                |
|        address modification requests.                                        |
|                                                                              |
|        Author(s): Abe Megahed                                                |
|                                                                              |
|        This file is subject to the terms and conditions defined in           |
|        'LICENSE.md', which is part of this source code distribution.         |
|                                                                              |
|******************************************************************************|
|        Copyright (C) 2016 - 2025, Megahed Labs LLC, www.sharedigm.com        |
\******************************************************************************/

import BaseView from '../../../../views/base-view.js';

export default BaseView.extend({

	//
	// attributes
	//

	template: template(`
		<h1>Verify Email Address</h1>
		
		<div class="content">
			<p>Dear <%= user.getName('single') %>, </p>
			<p>You have recently attempted to change your email address. To change your email address to <a href="mailto:<%= email %>"><%= email %></a>, press the button below.
			</p>
		</div>
		
		<div class="buttons">
			<button class="verify btn btn-primary btn-lg">
				<i class="fa fa-plus"></i>Verify
			</button>
		</div>
	`),

	events: {
		'click .verify': 'onClickVerify'
	},

	//
	// methods
	//

	verify: function() {
		this.model.verify({

			// callbacks
			//
			success: () => {

				// show notification
				//
				application.alert({
					title: "Email Changed",
					message: "Your email address has been changed."
				});
			},

			error: (response) => {

				// show error message
				//
				application.error({
					message: "Could not verify email.",
					respones: response
				});
			}
		});
	},

	//
	// mouse event handling methods
	//

	onClickVerify: function() {
		this.verify();
	}
});