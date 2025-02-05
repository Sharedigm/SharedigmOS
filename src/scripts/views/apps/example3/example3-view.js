/******************************************************************************\
|                                                                              |
|                                example3-view.js                              |
|                                                                              |
|******************************************************************************|
|                                                                              |
|        This defines an app used as an example accessory app.                 |
|                                                                              |
|        Author(s): Abe Megahed                                                |
|                                                                              |
|        This file is subject to the terms and conditions defined in           |
|        'LICENSE.md', which is part of this source code distribution.         |
|                                                                              |
|******************************************************************************|
|        Copyright (C) 2016-2024, Megahed Labs LLC, www.sharedigm.com          |
\******************************************************************************/

import AppView from '../../../views/apps/common/app-view.js';

export default AppView.extend({

	//
	// attributes
	//

	name: 'example3',

	//
	// dialog attributes
	//

	size: [300, 300],
	resizable: false,
	maximizable: false,

	//
	// rendering methods
	//

	onRender: function() {

		// call superclass method
		//
		AppView.prototype.onRender.call(this);

		// show content
		//
		this.showMessage("Your App Here!");
	}
});