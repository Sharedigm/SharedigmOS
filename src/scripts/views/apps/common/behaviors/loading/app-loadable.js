/******************************************************************************\
|                                                                              |
|                              app-loadable.js                                 |
|                                                                              |
|******************************************************************************|
|                                                                              |
|        This defines a behavior for loading applications.                     |
|                                                                              |
|        Author(s): Abe Megahed                                                |
|                                                                              |
|        This file is subject to the terms and conditions defined in           |
|        'LICENSE.md', which is part of this source code distribution.         |
|                                                                              |
|******************************************************************************|
|        Copyright (C) 2016 - 2025, Megahed Labs LLC, www.sharedigm.com        |
\******************************************************************************/

export default {

	//
	// dynamic loading methods
	//

	loadAppView: function(appName, options) {
		let dirname = appName.replace(/_/g, '-');
		let filename = dirname + '-view.js';

		import(
			'../../../' + dirname + '/' + filename
		).then((AppView) => {

			// perform callback
			//
			if (options.success) {
				options.success(AppView? AppView.default : undefined);
			}
		}).catch(error => {

			// perform callback
			//
			if (options.error) {
				options.error(error);

			// show error dialog
			//
			} else {
				application.error({
					message: 'Could not load app ' + appName + ': ' + error.stack
				});
			}
		});
	}
};