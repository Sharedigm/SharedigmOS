#******************************************************************************#
#                                                                              #
#                                make-apps.sh                                  #
#                                                                              #
#******************************************************************************#
#                                                                              #
#       This script concatenates each apps settings into a single file.        #
#                                                                              #
#       Author(s): Abe Megahed                                                 #
#                                                                              #
#       This file is subject to the terms and conditions defined in            #
#       'LICENSE.md', which is part of this source code distribution.          #
#                                                                              #
#******************************************************************************#
#       Copyright (C) 2016 - 2025, Megahed Labs LLC, www.sharedigm.com         #
#******************************************************************************#

function concat_apps {
	target=apps.json
	echo "Processing all apps..."
	echo '{}' > $target

	# iterate over all apps
	#
	for dirname in */; do
		dirname="${dirname//\//}"

		# get appname
		#
		appname="${dirname//-/_}"

		# get filename
		#
		filename=$dirname/settings.json

		# get file contents
		#
		contents=`cat $filename`

		# append contents
		#
		echo "Adding app $appname."
		cat $target | jq --tab ".$appname+= $contents" > output.json
		mv output.json $target
	done
}

# concatenate config for each app
#
concat_apps