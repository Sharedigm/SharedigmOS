#******************************************************************************#
#                                                                              #
#                               dependencies.sh                                #
#                                                                              #
#******************************************************************************#
#                                                                              #
#       This script creates a script that enumerates the apps in order         #
#       for the build script to preserve the app directory structure.          #
#                                                                              #
#       Author(s): Abe Megahed                                                 #
#                                                                              #
#       This file is subject to the terms and conditions defined in            #
#       'LICENSE.md', which is part of this source code distribution.          #
#                                                                              #
#******************************************************************************#
#       Copyright (C) 2016 - 2025, Megahed Labs LLC, www.sharedigm.com         #
#******************************************************************************#

function write_header() {
cat << EndOfHeader
/******************************************************************************|
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
|******************************************************************************/

EndOfHeader
}

function write_start() {
cat << EndOfHeader
export default {

	//
	// dynamic loading methods
	//

	loadAppView: function(appName, options) {
		switch (appName) {
EndOfHeader
}

function write_app_dependencies() {

	# iterate over all apps
	#
	for appdir in $appsdir/*/; do

		# remove path prefix
		#
		dirname=${appdir/$sourcedir\/scripts\/views\/apps\//}

		# remove dot dots
		#
		dirname=${dirname/../}

		# remove trailing slash
		#
		dirname=${dirname/\//}

		# replace all dashes with underscores
		#
		appname=${dirname//-/_}

		# skip base apps
		#
		if [ $dirname != 'common' ] && [ $dirname != 'mail-reader' ]; then
cat << EndOfTemplate

			case '$appname':
				import(
					'../../../$dirname/$dirname-view.js'
				).then((AppView) => {
					options.success(AppView.default);
				});
				break;
EndOfTemplate
		fi
	done
}

function write_end() {
cat << EndOfFooter

			default:
				options.success();
		}
	}
};
EndOfFooter
}

#
# main
#

appsdir=../scripts/views/apps

write_header
write_start
write_app_dependencies
write_end