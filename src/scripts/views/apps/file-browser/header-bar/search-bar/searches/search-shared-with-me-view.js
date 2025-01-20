/******************************************************************************\
|                                                                              |
|                        search-shared-with-me-view.js                         |
|                                                                              |
|******************************************************************************|
|                                                                              |
|        This defines a view used for searching files by sharing.              |
|                                                                              |
|        Author(s): Abe Megahed                                                |
|                                                                              |
|        This file is subject to the terms and conditions defined in           |
|        'LICENSE.md', which is part of this source code distribution.         |
|                                                                              |
|******************************************************************************|
|        Copyright (C) 2016-2024, Megahed Labs LLC, www.sharedigm.com          |
\******************************************************************************/

import Connections from '../../../../../../collections/users/connections/connections.js';
import SearchByTextView from '../../../../../../views/apps/common/header-bar/search-bar/searches/search-by-text-view.js';

export default SearchByTextView.extend({

	//
	// attributes
	//

	icon: 'fa fa-share',
	placeholder: "Search Shared with Me",
	readonly: true,

	buttons: [{
		kind: 'select-user',
		icon: 'fa fa-user'
	}],

	events: _.extend({}, SearchByTextView.prototype.events, {
		'click .select-user': 'onClickSelectUser'
	}),

	//
	// constructor
	//

	initialize: function() {

		// set attributes
		//
		this.collection = new Connections();
	},

	//
	// setting methods
	//

	setModel: function(model) {
		this.model = model;
		this.setValue(model.getName());
	},

	//
	// form methods
	//

	submit: function() {
		this.parent.app.searchFor({
			'shared_by': this.model.get('id')
		});
	},

	//
	// rendering methods
	//

	showConnections: function() {

		// fetch connections
		//
		if (this.collection.length == 0) {
			this.collection.fetch({

				// callbacks
				//
				success: () => {

					// show dialog
					//
					this.showSelectConnectionsDialog();
				},

				error: () => {

					// show error message
					//
					application.error({
						message: "Could not fetch connections."
					});
				}
			});
		} else {

			// show dialog
			//
			this.showSelectConnectionsDialog();
		}
	},

	//
	// dialog rendering methods
	//

	showSelectConnectionsDialog: function() {
		import(
			'../../../../../../views/apps/connection-manager/dialogs/connections/select-connections-dialog-view.js'
		).then((SelectConnectionsDialogView) => {

			// show open dialog
			//
			this.parent.app.show(new SelectConnectionsDialogView.default({
				collection: this.collection,

				// callbacks
				//
				select: (items) => {
					this.setModel(items[0]);
				}
			}));
		});	
	},

	//
	// mouse event handling methods
	//

	onClickSelectUser: function() {
		this.showConnections();
	}
});