/******************************************************************************\
|                                                                              |
|                              link-shareable.js                               |
|                                                                              |
|******************************************************************************|
|                                                                              |
|        This defines a behavior for views that deal with sharable items       |
|        (files and directories).                                              |
|                                                                              |
|        Author(s): Abe Megahed                                                |
|                                                                              |
|        This file is subject to the terms and conditions defined in           |
|        'LICENSE.md', which is part of this source code distribution.         |
|                                                                              |
|******************************************************************************|
|        Copyright (C) 2016-2024, Megahed Labs LLC, www.sharedigm.com          |
\******************************************************************************/

export default {

	//
	// rendering methods
	//

	showMessageByDefaultTopic: function(message, privacy) {
		application.launch('topic_viewer', {
			message: message,
			privacy: privacy
		});
	},

	showMessageByChat: function(message, chat) {
		application.launch('chat_viewer', {
			model: chat,
			message: message
		});
	},

	//
	// sharing methods
	//

	shareLinkByTopic: function(url, options) {
		let message = (options && options.message? options.message : '') + url;
		let privacy = options? options.privacy : null;

		// show default topic
		//
		this.showMessageByDefaultTopic(message, privacy);
	},

	shareLinkByMessage: function(url, options) {
		import(
			'../../../../../collections/chats/chats.js'
		).then((Chats) => {
			new Chats.default().fetch({

				// callbacks
				//
				success: (collection) => {
					let message = (options && options.message? options.message : '') + url;
					let chat = collection.at(0);

					// show first chat
					//
					this.showMessageByChat(message, chat);
				}
			});
		});
	},

	//
	// dialog rendering methods
	//

	showShareByLinkDialog: function(url) {
		import(
			'../../../../../views/apps/web-browser/dialogs/links/copy-link-dialog-view.js'
		).then((CopyLinkDialogView) => {

			// show copy link dialog
			//
			this.show(new CopyLinkDialogView.default({
				url: url
			}));				
		});		
	}
}