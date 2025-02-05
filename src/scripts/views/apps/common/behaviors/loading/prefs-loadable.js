/******************************************************************************\
|                                                                              |
|                             prefs-loadable.js                                |
|                                                                              |
|******************************************************************************|
|                                                                              |
|        This defines a behavior for loading application preferencess.         |
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
	// dynamic loading methods
	//

	loadPrefsFormView: function(appName, options) {
		let dirname = appName.replace('_', '-');

		import(
			'../../../' + dirname + '/forms/preferences/preferences-form-view.js'
		).then((PrefsFormView) => {
			options.success(PrefsFormView? PrefsFormView.default : undefined);
		}).catch(error => {
			options.error(error);
		});
	}
};