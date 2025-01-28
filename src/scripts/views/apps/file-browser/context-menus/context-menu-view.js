/******************************************************************************\
|                                                                              |
|                             context-menu-view.js                             |
|                                                                              |
|******************************************************************************|
|                                                                              |
|        This is a view for displaying file dropdown menus.                    |
|                                                                              |
|        Author(s): Abe Megahed                                                |
|                                                                              |
|        This file is subject to the terms and conditions defined in           |
|        'LICENSE.md', which is part of this source code distribution.         |
|                                                                              |
|******************************************************************************|
|        Copyright (C) 2016-2024, Megahed Labs LLC, www.sharedigm.com          |
\******************************************************************************/

import File from '../../../../models/storage/files/file.js';
import ImageFile from '../../../../models/storage/media/image-file.js';
import Directory from '../../../../models/storage/directories/directory.js';
import ContextMenuView from '../../../../views/apps/common/context-menus/context-menu-view.js';
import FileDisposable from '../../../../views/apps/file-browser/mainbar/behaviors/file-disposable.js';

export default ContextMenuView.extend({

	//
	// attributes
	//

	items: [
		{
			"class": "new-folder",
			"icon": "fa fa-folder",
			"name": "New Folder",
			"shortcut": "command-enter"
		},
		{
			"class": "open-item",
			"icon": "fa fa-folder-open",
			"name": "Open",
			"shortcut": "command-O"
		},
		{
			"class": "open-with",
			"icon": "fa fa-folder-open",
			"name": "Open With"
		},
		{
			"class": "open-selected",
			"icon": "fa fa-folder-open",
			"name": "Open Selected",
			"shortcut": "enter"
		},
		{
			"class": "open-in-new-window",
			"icon": "fa fa-folder-open",
			"name": "Open in New Window"
		},
		{
			"class": "upload-item",
			"icon": "fa fa-upload",
			"name": "Upload",
			"shortcut": "command-U"
		},
		"separator",
		{
			"class": "show-info",
			"icon": "fa fa-info-circle",
			"name": "Show Info",
			"shortcut": "command-I"
		},
		{
			"class": "show-on-map",
			"icon": "fa fa-map",
			"name": "Show on Map",
			"shortcut": "command-M"
		},
		"separator",
		{
			"class": "share",
			"icon": "fa fa-share",
			"name": "Share",
			"menu": [
				{
					"class": "share-by-invitation",
					"icon": "fa fa-user-friends",
					"name": "By Invitation"
				},
				"separator",
				{
					"class": "share-by-topic",
					"icon": "fa fa-newspaper",
					"name": "By Discussion Topic"
				},
				{
					"class": "share-by-message",
					"icon": "fa fa-comments",
					"name": "By Chat Messsage"
				},
				"separator",
				{
					"class": "share-by-link",
					"icon": "fa fa-link",
					"name": "By Link"
				},
				{
					"class": "share-by-email",
					"icon": "fa fa-envelope",
					"name": "By Email"
				}
			]
		},
		"separator",
		{
			"class": "rename-item",
			"icon": "fa fa-font",
			"name": "Rename",
			"shortcut": "shift-command-R"
		},
		{
			"class": "compress-item",
			"icon": "fa fa-compress",
			"name": "Compress",
			"shortcut": "shift-command-Z"
		},
		{
			"class": "download-item",
			"icon": "fa fa-download",
			"name": "Download",
			"shortcut": "shift-command-D"
		},
		"separator",
		{
			"class": "set-profile",
			"icon": "fa fa-user",
			"name": "Set Profile Picture"
		},
		{
			"class": "set-background",
			"icon": "fa fa-desktop",
			"name": "Set Background Picture"
		},
		"separator",
		{
			"class": "delete-item",
			"icon": "fa fa-trash-alt",
			"name": "Delete",
			"shortcut": "delete"
		},
		{
			"class": "empty-trash",
			"icon": "fa fa-trash-alt",
			"name": "Empty Trash",
			"shortcut": "command-E"
		},
		"separator",
		{
			"class": "change-background",
			"icon": "fa fa-image",
			"name": "Change Background"
		}
	],

	events: _.extend({}, ContextMenuView.prototype.events, {
		'click .new-folder': 'onClickNewFolder',
		'click .open-item': 'onClickOpenItem',
		'click .open-with': 'onClickOpenWith',
		'click .open-selected': 'onClickOpenSelected',
		'click .open-in-new-window': 'onClickOpenInNewWindow',
		'click .upload-item': 'onClickUpload',
		'click .show-info': 'onClickShowInfo',
		'click .show-on-map': 'onClickShowOnMap',

		// share with connections
		//
		'click .share-by-invitation': 'onClickShareByInvitation',
		'click .share-by-topic': 'onClickShareByTopic',
		'click .share-by-message': 'onClickShareByMessage',

		// share with anyone
		//
		'click .share-by-link': 'onClickShareByLink',
		'click .share-by-email': 'onClickShareByEmail',

		// other options
		//
		'click .rename-item': 'onClickRename',
		'click .compress-item': 'onClickCompress',
		'click .download-item': 'onClickDownloadItem',

		// picture options
		//
		'click .set-profile': 'onClickSetProfile',
		'click .set-background': 'onClickSetBackground',

		// desktop options
		//
		'click .delete-item': 'onClickDelete',
		'click .empty-trash': 'onClickEmptyTrash',
		'click .change-background': 'onClickChangeBackground'
	}),

	//
	// querying methods
	//

	visible: function() {
		let isSignedIn = application.isSignedIn();
		let numSelected = this.parent.numSelected();
		let hasSelected = numSelected != 0;
		let oneSelected = numSelected == 1;
		let hasSelectedFolder = oneSelected && this.parent.getSelectedModel() instanceof Directory;
		let hasSelectedPicture = oneSelected && this.parent.getSelectedModel() instanceof ImageFile;
		let isDesktop = this.parent.isDesktop();

		return {
			'new-folder': !hasSelected,
			'open-item': hasSelected,
			'open-with': hasSelected,
			'open-selected': false,
			'open-in-new-window': hasSelectedFolder && !isDesktop,
			'open-favorites': isSignedIn,
			'upload-item': !hasSelected,
			'share': hasSelected,
			'show-info': hasSelected,
			'show-on-map': hasSelected,
			'rename-item': hasSelected,
			'compress-item': hasSelected,
			'download-item': hasSelected,
			'set-profile': hasSelectedPicture,
			'set-background': hasSelectedPicture,
			'delete-item': hasSelected,
			'empty-trash': !hasSelected,
			'change-background': !hasSelected
		};
	},

	enabled: function() {
		let isSignedIn = application.isSignedIn();
		let numSelected = this.parent.numSelected();
		let oneSelected = numSelected == 1;
		let hasSelected = numSelected != 0;
		let isWritable = this.parent.model.isWritableBy(application.session.user);
		let isTrashEmpty = FileDisposable.isTrashEmpty();
		let hasSelectedFile = oneSelected && this.parent.getSelectedModel() instanceof File;
		let hasSelectedPicture = oneSelected && this.parent.getSelectedModel() instanceof ImageFile;
		let hasSelectedGeolocated = this.parent.hasSelectedGeolocated();

		return {
			'new-folder': isWritable,
			'open-item': isSignedIn,
			'open-with': isSignedIn && hasSelectedFile,
			'open-selected': oneSelected,
			'open-in-new-window': oneSelected,
			'upload-item': isWritable,
			'show-info': hasSelected,
			'show-on-map': hasSelectedGeolocated,

			// share with connections
			//
			'share-by-invitation': hasSelected,
			'share-by-topic': hasSelected,
			'share-by-message': hasSelected,

			// share with anyone
			//
			'share-by-link': oneSelected,
			'share-by-email': oneSelected,

			// picture options
			//
			'set-profile': hasSelectedPicture,
			'set-background': hasSelectedPicture,

			// other options
			//
			'rename-item': oneSelected && isWritable,
			'compress-item': hasSelected && isWritable,
			'download-item': hasSelected,
			'delete-item': isWritable,
			'empty-trash': !isTrashEmpty,
			'change-background': !hasSelected
		};
	},

	//
	// rendering methods
	//

	showThemeManager: function() {
		application.launch('theme_manager', {
			tab: 'desktop',
			tab2: 'background'
		});
	},

	//
	// mouse event handling methods
	//

	onClickNewFolder: function() {
		this.parent.newFolder();
	},

	onClickOpenItem: function() {
		this.parent.openItems(this.parent.getSelectedModels());
	},

	onClickOpenWith: function() {
		this.parent.showOpenWithDialog(this.parent.getSelectedModels());
	},

	onClickOpenSelected: function() {
		let selected = this.parent.getSelectedModels();
			if (selected.length == 1) {
				this.parent.openItems([selected[0]]);
		}
	},

	onClickOpenInNewWindow: function() {
		let selected = this.parent.getSelectedModels();
		if (selected.length == 1) {
			this.parent.openItems([selected[0]], {
				'open_folders_in_new_window': true
			});
		}
	},

	onClickUpload: function() {
		this.parent.upload();
	},

	onClickShowInfo: function() {
		this.parent.showInfoDialog();
	},

	onClickShowOnMap: function() {
		this.parent.showSelectedGeolocatedModels();
	},

	onClickShareByInvitation: function() {
		this.parent.shareSelectedWithConnections();
	},

	onClickShareByTopic: function() {
		this.parent.shareSelectedByTopic();
	},

	onClickShareByMessage: function() {
		this.parent.shareSelectedByMessage();
	},

	onClickShareByLink: function() {
		this.parent.shareSelectedByLink();
	},

	onClickShareByEmail: function() {
		this.parent.shareSelectedByEmail();
	},

	onClickRename: function() {
		this.parent.rename(this.parent.getChildren((item) => item.isSelected()));
	},

	onClickCompress: function() {
		this.parent.compress();
	},

	onClickDownloadItem: function() {
		this.parent.download();
	},

	onClickSetProfile: function() {
		application.setProfilePhoto(this.parent.getSelectedModel());
	},

	onClickSetBackground: function() {
		application.desktop.setBackgroundPicture(this.parent.getSelectedModel());
	},

	onClickDelete: function(event) {
		this.parent.deleteItems(this.parent.getSelectedModels(), {
			confirm: !(event.metaKey || event.ctrlKey)
		});
	},

	onClickEmptyTrash: function() {
		this.parent.emptyTrash();
	},
	
	onClickChangeBackground: function() {
		this.showThemeManager();
	}
});