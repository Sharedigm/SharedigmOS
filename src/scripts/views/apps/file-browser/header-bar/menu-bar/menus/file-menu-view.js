/******************************************************************************\
|                                                                              |
|                               file-menu-view.js                              |
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

import File from '../../../../../../models/storage/files/file.js';
import ArchiveFile from '../../../../../../models/storage/files/archive-file.js';
import Directory from '../../../../../../models/storage/directories/directory.js';
import FileMenuView from '../../../../../../views/apps/common/header-bar/menu-bar/menus/file-menu-view.js';

export default FileMenuView.extend({

	//
	// attributes
	//

	items: [
		{
			"class": "new",
			"icon": "fa fa-magic",
			"name": "New",
			"menu": [
				{
					"class": "new-folder",
					"icon": "fa fa-folder",
					"name": "New Folder",
					"shortcut": "command-enter"
				},
				{
					"class": "new-volume",
					"icon": "fa fa-database",
					"name": "New Volume",
					"shortcut": "shift-command-L"
				},
				{
					"class": "new-text-file",
					"icon": "fa fa-file-alt",
					"name": "New Text File",
					"shortcut": "command-T"
				},
				{
					"class": "new-window",
					"icon": "far fa-window-maximize",
					"name": "New Window",
					"shortcut": "shift-command-enter"
				}
			]
		},
		{
			"class": "open-item",
			"icon": "fa fa-folder-open",
			"name": "Open",
			"shortcut": "command-O",
			"menu": [
				{
					"class": "open-in-new-window",
					"icon": "fa fa-folder-open",
					"name": "In New Window"
				},
				{
					"class": "open-in-new-tab",
					"icon": "fa fa-folder-open",
					"name": "In New Tab"
				}
			]
		},
		{
			"class": "open-with",
			"icon": "fa fa-folder-open",
			"name": "Open With"
		},
		{
			"class": "import",
			"icon": "fa fa-cloud-upload-alt",
			"name": "Import",
			"menu": [
				{
					"class": "upload-item",
					"icon": "fa fa-upload",
					"name": "Upload",
					"shortcut": "command-U"
				},
				{
					"class": "upload-dropbox",
					"icon": "fab fa-dropbox",
					"name": "Dropbox"
				},
				{
					"class": "upload-google",
					"icon": "fab fa-google",
					"name": "Google Drive"
				}
			]
		},
		"separator",
		{
			"class": "favorites",
			"icon": "fa fa-star",
			"name": "Favorites",
			"menu": [
				{
					"class": "add-favorites",
					"icon": "fa fa-star",
					"name": "Add Favorites",
					"shortcut": "shift-command-F"
				},
				{
					"class": "remove-favorites",
					"icon": "fa fa-trash-alt",
					"name": "Remove Favorites",
					"shortcut": "delete"
				}
			]
		},
		"separator",
		{
			"class": "show-info",
			"icon": "fa fa-info-circle",
			"name": "Show Info",
			"shortcut": "command-I"
		},
		{
			"class": "set-place",
			"icon": "fa fa-map",
			"name": "Set Place",
			"shortcut": "command-shift-P"
		},
		"separator",
		{
			"class": "rename-item",
			"icon": "fa fa-font",
			"name": "Rename",
			"shortcut": "shift-command-R"
		},
		{
			"class": "compress-items",
			"icon": "fa fa-compress",
			"name": "Compress",
			"shortcut": "shift-command-Z"
		},
		{
			"class": "expand-item",
			"icon": "fa fa-expand",
			"name": "Expand",
			"shortcut": "shift-command-X"
		},
		{
			"class": "download-items",
			"icon": "fa fa-download",
			"name": "Download",
			"shortcut": "shift-command-D"
		},
		"separator",
		{
			"class": "empty-trash",
			"icon": "fa fa-trash-alt",
			"name": "Empty Trash",
			"shortcut": "command-E"
		},
		"separator",
		{
			"class": "close-tab",
			"icon": "fa fa-xmark",
			"name": "Close Tab",
			"shortcut": "command-L"
		},
		"separator",
		{
			"class": "close-window",
			"icon": "fa fa-circle-xmark",
			"name": "Close",
			"shortcut": "command-L"
		}
	],

	events: {
		'click .new-folder': 'onClickNewFolder',
		'click .new-volume': 'onClickNewVolume',
		'click .new-text-file': 'onClickNewTextFile',
		'click .new-window': 'onClickNewWindow',
		'click .open-item': 'onClickOpenItem',
		'click .open-with': 'onClickOpenWith',
		'click .open-in-new-window': 'onClickOpenInNewWindow',
		'click .open-in-new-tab': 'onClickOpenInNewTab',
		'click .upload-item': 'onClickUpload',
		'click .upload-dropbox': 'onClickUploadDropbox',
		'click .upload-google': 'onClickUploadGoogle',
		'click .add-favorites': 'onClickAddFavorites',
		'click .remove-favorites': 'onClickRemoveFavorites',
		'click .open-first': 'onClickOpenFirst',
		'click .open-prev': 'onClickOpenPrev',
		'click .open-next': 'onClickOpenNext',
		'click .open-last': 'onClickOpenLast',
		'click .show-info': 'onClickShowInfo',
		'click .set-place': 'onClickSetPlace',
		'click .rename-item': 'onClickRenameItem',
		'click .compress-items': 'onClickCompressItems',
		'click .expand-item': 'onClickExpandItem',
		'click .download-items': 'onClickDownloadItems',
		'click .empty-trash': 'onClickEmptyTrash',
		'click .close-tab': 'onClickCloseTab',
		'click .close-window': 'onClickCloseWindow'
	},

	//
	// querying methods
	//

	visible: function() {
		let isSignedIn = application.isSignedIn();
		let hasOpenFolders = this.parent.app.hasOpenFolders();
		let isWindowed = this.parent.app.isWindowed();

		return {
			'new-window': true,
			'new-folder': true,
			'new-volume': true,
			'new-text-file': true,
			'open-item': isSignedIn,
			'open-with': isSignedIn,
			'open-in-new-window': isWindowed,
			'open-in-new-tab': true,
			'open-favorites': isSignedIn,
			'upload-item': true,
			'favorites': isSignedIn,
			'add-favorites': isSignedIn,
			'remove-favorites': isSignedIn,
			'open-first': isSignedIn,
			'open-prev': isSignedIn,
			'open-next': isSignedIn,
			'open-last': isSignedIn,
			'show-info': true,
			'set-place': true,
			'rename-item': true,
			'compress-items': true,
			'expand-item': true,
			'download-items': true,
			'empty-trash': true,
			'close-tab': hasOpenFolders,
			'close-window': isWindowed
		};
	},

	enabled: function() {
		let isSignedIn = application.isSignedIn();
		let hasTabs = this.parent.app.hasTabs();
		let preferences = this.parent.app.preferences;
		let numSelected = this.parent.app.numSelected();
		let hasSelected = numSelected != 0;
		let selectedModel = this.parent.app.getSelectedModel();
		let hasSelectedFile = selectedModel instanceof File;
		let hasSelectedFolder = selectedModel instanceof Directory;
		let hasSelectedArchive = selectedModel instanceof ArchiveFile;
		let hasSelectedFavorites = this.parent.app.hasSelectedFavorites();
		let viewingMap = preferences.get('view_kind') == 'maps';
		let isDialog = this.parent.app.dialog != undefined;
		let isTrashEmpty = this.parent.app.isTrashEmpty();

		return {
			'new-window': true,
			'new-folder': true,
			'new-volume': true,
			'new-text-file': true,
			'open-item': !isDialog || hasSelected,
			'open-with': isSignedIn && hasSelectedFile,
			'open-in-new-window': hasSelectedFolder,
			'open-in-new-tab': hasSelectedFolder,
			'open-favorites': true,
			'upload-item': true,
			'favorites': true,
			'add-favorites': true,
			'remove-favorites': hasSelectedFavorites,
			'open-first': !hasSelected && !viewingMap,
			'open-prev': hasSelectedFavorites && !viewingMap,
			'open-next': hasSelectedFavorites && !viewingMap,
			'open-last': !hasSelected && !viewingMap,
			'show-info': hasSelected,
			'set-place': hasSelected,
			'rename-item': numSelected == 1,
			'compress-items': hasSelected,
			'expand-item': hasSelectedArchive,
			'download-items': hasSelected,
			'empty-trash': !isTrashEmpty,
			'close-tab': hasTabs,
			'close-window': true
		};
	},

	//
	// event handling methods
	//

	onLoad: function() {

		// call superclass method
		//
		FileMenuView.prototype.onLoad.call(this);

		// disable empty trash
		//
		if (!application.session.user || 
			this.parent.app.isTrashEmpty()) {
			this.setItemDisabled('empty-trash');
		}
	},

	onChangeSelection: function() {
		this.setEnabled(this.enabled());
	},

	//
	// mouse event handling methods
	//

	onClickNewFolder: function() {
		this.parent.app.newFolder();
	},

	onClickNewVolume: function() {
		this.parent.app.showNewVolumeDialog();
	},

	onClickNewTextFile: function() {
		this.parent.app.createNewTextFile();
	},

	onClickOpenItem: function() {
		this.parent.app.openItems(this.parent.app.getSelectedModels());
	},

	onClickOpenWith: function() {
		this.parent.app.showOpenWithDialog(this.parent.app.getSelectedModels());
	},

	onClickOpenInNewWindow: function() {
		this.parent.app.openItems(this.parent.app.getSelectedModels(), {
			'open_folders_in_new_window': true
		});
	},

	onClickOpenInNewTab: function() {
		this.parent.app.openItems(this.parent.app.getSelectedModels(), {
			'open_folders_in_new_tab': true
		});
	},

	onClickAddFavorites: function() {
		this.parent.app.showAddFavoritesDialog();
	},

	onClickRemoveFavorites: function() {
		this.parent.app.removeSelectedFavorites();
	},
	
	onClickOpenFirst: function() {
		this.parent.app.openFavorite('first');
	},

	onClickOpenPrev: function() {
		this.parent.app.openFavorite('prev');
	},

	onClickOpenNext: function() {
		this.parent.app.openFavorite('next');
	},

	onClickOpenLast: function() {
		this.parent.app.openFavorite('last');
	},

	onClickUpload: function() {
		this.parent.app.upload();
	},

	onClickUploadDropbox: function() {
		this.parent.app.uploadDropbox();
	},

	onClickUploadGoogle: function() {
		this.parent.app.uploadGoogleDrive();
	},
	
	onClickShowInfo: function() {
		this.parent.app.showInfoDialog();
	},

	onClickSetPlace: function() {
		this.parent.app.showSetItemPlaceDialogView(this.parent.app.getSelected()[0]);
	},

	onClickRenameItem: function() {
		this.parent.app.rename(this.parent.app.getSelected());
	},

	onClickCompressItems: function() {
		
		// compress selected items
		//
		this.parent.app.compress();
	},

	onClickExpandItem: function() {

		// expand selected items
		//
		this.parent.app.expandSelected();
	},

	onClickDownloadItems: function() {
		
		// download selected items
		//
		this.parent.app.downloadSelected();
	},

	onClickEmptyTrash: function() {
		this.parent.app.emptyTrash();

		// update menu item
		//
		this.setItemDisabled('empty-trash');
	},

	onClickCloseTab: function() {
		this.parent.app.closeActiveTab();
	}
});