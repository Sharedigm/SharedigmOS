#******************************************************************************#
#                                                                              #
#                              check-resources.sh                              #
#                                                                              #
#******************************************************************************#
#                                                                              #
#       This script concatenates each apps resources into a single file.       #
#                                                                              #
#       Author(s): Abe Megahed                                                 #
#                                                                              #
#       This file is subject to the terms and conditions defined in            #
#       'LICENSE.md', which is part of this source code distribution.          #
#                                                                              #
#******************************************************************************#
#       Copyright (C) 2016 - 2025, Megahed Labs LLC, www.sharedigm.com         #
#******************************************************************************#

function check_file {
	filepath=$1

	jq . $filepath > /dev/null
	if [ $? -ne 0 ]; then
		echo "File $filepath contains invalid JSON."
	fi
}

function check_app_resources {
	app=$1

	# find app dirname
	#
	app=${app//_/-}

	# concat app resources
	#
	echo "Checking $app resources..."
	for filepath in $app/*/*.json; do
		check_file $filepath
	done
}

function check_apps_resources {

	# iterate over all apps
	#
	for app in */; do

		# remove slashes from app name
		#
		app=${app/\//}

		# concatenate all json files in app directory
		#
		check_app_resources $app
	done
}

#
# main
#

# check command line arguments
#
if [ $# -lt 1 ] ; then
	echo "Usage: sh make-resources.sh <APPNAME || all>"
	exit 0
fi

# parse command line arguments
#
app=$1

# check resources for each app
#
if [ $app != 'all' ]; then
	check_app_resources $app
else
	check_apps_resources
fi