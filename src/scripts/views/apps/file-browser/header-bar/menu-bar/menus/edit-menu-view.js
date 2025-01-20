/******************************************************************************\
|                                                                              |
|                               edit-menu-view.js                              |
|                                                                              |
|******************************************************************************|
|                                                                              |
|        This is a view for displaying edit dropdown menus.                    |
|                                                                              |
|        Author(s): Abe Megahed                                                |
|                                                                              |
|        This file is subject to the terms and conditions defined in           |
|        'LICENSE.md', which is part of this source code distribution.         |
|                                                                              |
|******************************************************************************|
|        Copyright (C) 2016-2024, Megahed Labs LLC, www.sharedigm.com          |
\******************************************************************************/

import EditMenuView from '../../../../../../views/apps/common/header-bar/menu-bar/menus/edit-menu-view.js';

export default EditMenuView.extend({

	//
	// attributes
	//

	items: [
		{
			"class": "cut",
			"icon": "fa fa-cut",
			"name": "Cut",
			"shortcut": "command-X"
		},
		{
			"class": "copy",
			"icon": "fa fa-copy",
			"name": "Copy",
			"shortcut": "command-C"
		},
		{
			"class": "duplicate",
			"icon": "fa fa-copy",
			"name": "Duplicate",
			"shortcut": "shift-command-D"
		},
		"separator",
		{
			"class": "paste",
			"icon": "fa fa-paste",
			"name": "Paste",
			"shortcut": "command-V"
		},
		{
			"class": "put",
			"icon": "fa fa-paste",
			"name": "Put",
			"shortcut": "shift-command-V"
		},
		"separator",
		{
			"class": "delete",
			"icon": "fa fa-trash-alt",
			"name": "Delete",
			"shortcut": "delete"
		},
		{
			"class": "destroy",
			"icon": "fa fa-xmark",
			"name": "Destroy",
			"shortcut": "shift-command-delete"
		},
		"separator",
		{
			"class": "show-clipboard",
			"icon": "fa fa-clipboard",
			"name": "Show Clipboard"
		},
		{
			"class": "clear-clipboard",
			"icon": "fa fa-xmark",
			"name": "Clear Clipboard"
		}
	],

	events: {
		'click .cut': 'onClickCut',
		'click .copy': 'onClickCopy',
		'click .duplicate': 'onClickDuplicate',
		'click .paste': 'onClickPaste',
		'click .put': 'onClickPut',
		'click .delete': 'onClickDelete',
		'click .destroy': 'onClickDestroy',
		'click .show-clipboard': 'onClickShowClipboard',
		'click .clear-clipboard': 'onClickClearClipboard'
	},

	//
	// querying methods
	//

	enabled: function() {
		let hasSelected = this.parent.app.hasSelected();
		let hasClipboardContents = !this.parent.app.isClipboardEmpty();

		return {
			'cut': hasSelected,
			'copy': hasSelected,
			'duplicate': hasSelected,
			'paste': hasClipboardContents,
			'put': hasClipboardContents,
			'delete': hasSelected,
			'destroy': hasSelected,
			'show-clipboard': true,
			'clear-clipboard': hasClipboardContents
		};
	},

	//
	// deleting methods
	//

	deleteSelected: function(options) {
		
		// delete and update
		//
		this.parent.app.deleteSelected(_.extend({}, options, {

			// callbacks
			//
			success: () => {

				// update menu item
				//
				this.parent.getChildView('file').setItemEnabled('empty-trash');
			}
		}));
	},

	destroySelected: function(options) {

		// destroy and update
		//
		this.parent.app.destroySelected(_.extend({}, options, {

			// callbacks
			//
			success: () => {

				// update menu item
				//
				this.parent.getChildView('file').setItemEnabled('empty-trash');
			}
		}));
	},
	
	//
	// event handling methods
	//

	onLoad: function() {

		// check permissions
		//
		if (!this.parent.app.model.isWritableBy(application.session.user)) {
			this.setDisabled(true);
		}

		// disable paste
		//
		if (!application.session.user || 
			this.parent.app.isClipboardEmpty()) {
			this.setItemDisabled('clear-clipboard');
		}

		// call superclass method
		//
		EditMenuView.prototype.onLoad.call(this);
	},

	onClickCut: function() {
		this.parent.app.cutSelected({
			confirm: this.parent.app.preferences.get('show_clipboard_confirm'),

			// callbacks
			//
			success: () => this.update()
		});
	},

	onClickCopy: function() {
		this.parent.app.copySelected({
			confirm: this.parent.app.preferences.get('show_clipboard_confirm'),

			// callbacks
			//
			success: () => this.update()
		});
	},

	onClickDuplicate: function() {
		this.parent.app.duplicate(this.parent.app.getSelectedModels());
	},

	onClickPaste: function() {
		this.parent.app.paste();
	},

	onClickPut: function() {
		this.parent.app.paste({

			// callbacks
			//
			success: () => {
				this.parent.app.getActiveView().clearClipboard({

					// callbacks
					//
					success: () => this.update()
				});
			}
		});
	},

	onClickDelete: function(event) {

		// delete selected with or without confirmation
		//
		this.deleteSelected({
			confirm: !(event.metaKey || event.ctrlKey)
		});
	},

	onClickDestroy: function(event) {

		// destroy selected with or without confirmation
		//
		this.destroySelected({
			confirm: !(event.metaKey || event.ctrlKey)
		});
	},

	onClickShowClipboard: function() {
		this.parent.app.getActiveView().fetchClipboardDirectory({

			// callbacks
			//
			success: (model) => {
				application.launch('file_browser', {
					model: model
				});
			}
		});
	},

	onClickClearClipboard: function() {
		this.parent.app.getActiveView().clearClipboard({

			// callbacks
			//
			success: () => {
				this.update();

				// play delete sound
				//
				application.play('recycle');
			}
		});
	}
});