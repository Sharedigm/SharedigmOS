/******************************************************************************\
|                                                                              |
|                              notify-dialog-view.js                           |
|                                                                              |
|******************************************************************************|
|                                                                              |
|        This defines a notification dialog that is used to show a             |
|        modal notify dialog box.                                              |
|                                                                              |
|        Author(s): Abe Megahed                                                |
|                                                                              |
|        This file is subject to the terms and conditions defined in           |
|        'LICENSE.md', which is part of this source code distribution.         |
|                                                                              |
|******************************************************************************|
|        Copyright (C) 2016 - 2025, Megahed Labs LLC, www.sharedigm.com        |
\******************************************************************************/

import ModalView from '../../../views/dialogs/modal-view.js';

export default ModalView.extend({

	//
	// attributes
	//

	className: 'message modal',

	template: template(`
		<div class="modal-dialog">
		
			<div class="modal-header">
				<div class="heading">
					<div class="icon">
						<%= icon || '<i class="fa fa-message"></i>' %>
					</div>
					<div class="title">
						<%= title || "Message" %>
					</div>
				</div>
			</div>
		
			<div class="modal-content">
				<div class="modal-body">
					<%= message %>
				</div>
		
				<div class="modal-footer">
					<div class="buttons">
						<button class="ok btn btn-primary" data-dismiss="modal">
							<i class="fa fa-check"></i>OK
						</button>
					</div>
				</div>
			</div>
		</div>
	`),

	events: _.extend({}, ModalView.prototype.events, {
		'click': 'onClick',
		'click .ok': 'onClickOk'
	}),

	//
	// constructor
	//

	initialize: function() {

		// set attributes
		//
		this.size = this.options.size;

		// set static attributes
		//
		this.constructor.current = this;
	},

	//
	// dialog methods
	//

	accept: function() {

		// perform callback
		//
		if (this.options.accept) {
			return this.options.accept();
		}
	},

	//
	// rendering methods
	//

	templateContext: function() {
		return {
			icon: this.options.icon,
			title: this.options.title,
			message: this.options.message,
			details: this.options.details
		};
	},

	//
	// mouse event handling methods
	//

	onClickOk: function() {
		this.accept();
	},

	onClickMore: function() {
		window.setTimeout(() => {
			application.notify({
				icon: this.options.icon,
				title: this.options.title,
				message: this.options.details
			});
		}, 500);
	},

	//
	// cleanup methods
	//

	onBeforeDestroy: function() {
		this.constructor.current = null;

		// call superclass method
		//
		ModalView.prototype.onBeforeDestroy.call(this);
	}
});