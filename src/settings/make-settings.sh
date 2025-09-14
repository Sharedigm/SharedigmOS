#******************************************************************************#
#                                                                              #
#                               make-settings.sh                               #
#                                                                              #
#******************************************************************************#
#                                                                              #
#       This script concatenates each settings file into a single file.        #
#                                                                              #
#       Author(s): Abe Megahed                                                 #
#                                                                              #
#       This file is subject to the terms and conditions defined in            #
#       'LICENSE.md', which is part of this source code distribution.          #
#                                                                              #
#******************************************************************************#
#       Copyright (C) 2016 - 2025, Megahed Labs LLC, www.sharedigm.com         #
#******************************************************************************#

function concat_settings {
	target=settings.json
	echo "Processing all settings..."
	echo '{}' > $target

	# iterate over all settings
	#
	for filename in *.json; do
		if [ "$filename" != $target ]; then
			# get appname
			#
			appname="${filename//.json/}"
			appname="${appname//-/_}"

			# get file contents
			#
			contents=`cat $filename`

			# append contents
			#
			echo "Adding settings from $appname."
			cat $target | jq --tab ".$appname+= $contents" > output.json
			mv output.json $target
		fi
	done
}

# concatenate settings
#
concat_settings