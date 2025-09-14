/******************************************************************************\
|                                                                              |
|                          directory-question-view.js                          |
|                                                                              |
|******************************************************************************|
|                                                                              |
|        This defines a view for showing directory location questions.         |
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
import Directory from '../../../models/storage/directories/directory.js';
import FileUtils from '../../../utilities/files/file-utils.js';

export default QuestionView.extend({

	//
	// attributes
	//

	template: template(`
		<label class="control-label"><i class="<%= icon %>"></i><%= text %></label>
		<div class="controls">

			<div class="control-inline">
				<span class="directory"></span>
			</div>

			<div class="buttons-inline">
				<button type="button" class="change success btn btn-sm" data-toggle="tooltip" title="Change" data-placement="top">
					<i class="fa fa-folder"></i>
				</button>
				<button type="button" class="clear warning btn btn-sm" data-toggle="tooltip" title="Clear" data-placement="top">
					<i class="fa fa-xmark"></i>
				</button>
			</div>

			<% if (help) { %>
			<i class="active fa fa-question-circle" data-toggle="popover" title="<%= text %>" data-content="<%= help %>"></i>
			<% } %>
		</div>
	`),

	events: {
		'click button.change': 'onClickChangeDirectory',
		'click button.clear': 'onClickClearDirectory',
	},

	//
	// getting methods
	//

	getValue: function() {
		return this.$el.find('.directory').val();
	},

	//
	// setting methods
	//

	setValue: function(value) {
		return this.$el.find('.directory').text(value);
	},

	setDirectory: function(dirname) {

		// load uploads directory
		//
		new Directory({
			path: FileUtils.getDirectoryPath(dirname)
		}).load({

			// callbacks
			//
			success: (model) => {

				// select from directory's parent
				//
				this.showOpenDialog(model, {
					selected: model.getItemNamed(dirname)
				});
			},

			error: () => {

				// select from home directory
				//
				this.showOpenDialog(application.getDirectory());
			}
		});
	},

	//
	// dialog rendering methods
	//

	showOpenDialog: function(directory, options) {
		import(
			'../../../views/apps/file-browser/dialogs/files/open-items-dialog-view.js'
		).then((OpenItemsDialogView) => {

			// show select uploads dialog
			//
			application.show(new OpenItemsDialogView.default({
				model: directory,

				// options
				//
				title: "Select Directory",
				selected: options? options.selected : null,

				// callbacks
				//
				onopen: (items) => {
					if (items.length > 0) {
						this.setValue(items[0].get('path'));
					}
				}
			}));
		});
	},

	//
	// mouse event handling methods
	//

	onClickChangeDirectory: function() {
		this.setDirectory(this.getValue());
	},

	onClickClearDirectory: function() {
		this.setValue('/');
	}
});