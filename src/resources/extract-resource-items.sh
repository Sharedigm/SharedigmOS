#******************************************************************************#
#                                                                              #
#                          extract-resource-items.sh                           #
#                                                                              #
#******************************************************************************#
#                                                                              #
#       This script extracts resource elements from the object format          #
#       to the array format.                                                   #
#                                                                              #
#       Author(s): Abe Megahed                                                 #
#                                                                              #
#       This file is subject to the terms and conditions defined in            #
#       'LICENSE.md', which is part of this source code distribution.          #
#                                                                              #
#******************************************************************************#
#       Copyright (C) 2016 - 2025, Megahed Labs LLC, www.sharedigm.com         #
#******************************************************************************#

function extract_app_menu_items {
	app=$1

	# find app dirname
	#
	app=${app//_/-}

	# concat app resources
	#
	echo "Extracting $app menu items..."
	for filepath in $app/*/*-menu.json; do
		jq --tab '.items' $filepath > temp
		mv temp $filepath
	done
}

function extract_app_menu_bar_items {
	app=$1

	# find app dirname
	#
	app=${app//_/-}

	# concat app resources
	#
	echo "Extracting $app menu items..."
	for filepath in $app/*/menu-bar.json; do
		jq --tab '.menus' $filepath > temp
		mv temp $filepath
	done
}

function extract_app_preferences_tabs {
	app=$1

	# find app dirname
	#
	app=${app//_/-}

	# concat app resources
	#
	echo "Extracting $app preferences items..."
	for filepath in $app/*/preferences.json; do
		jq --tab '.tabs' $filepath > temp
		mv temp $filepath
	done
}

function extract_app_prefs_items {
	app=$1

	# find app dirname
	#
	app=${app//_/-}

	# concat app resources
	#
	echo "Extracting $app prefs items..."
	for filepath in $app/*/*-prefs.json; do
		jq --tab '.preferences' $filepath > temp
		mv temp $filepath
	done
}

function extract_app_resource_items {
	app=$1

	# concatenate all json files in app directory
	#
	extract_app_menu_items $app
	extract_app_menu_bar_items $app
	extract_app_preferences_tabs $app
	extract_app_prefs_items $app
}

function extract_apps_resource_items {

	# iterate over all apps
	#
	for app in */; do

		# remove slashes from app name
		#
		app=${app/\//}

		# concatenate all json files in app directory
		#
		extract_app_resource_items $app
	done
}

#
# main
#

# check command line arguments
#
if [ $# -lt 1 ] ; then
	echo "Usage: sh extract-resource-items.sh <APPNAME || all>"
	exit 0
fi

# parse command line arguments
#
app=$1

# concatenate resources for each app
#
if [ $app != 'all' ]; then
	extract_app_resource_items $app
else
	extract_apps_resource_items
fi