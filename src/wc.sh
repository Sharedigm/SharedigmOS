#******************************************************************************#
#                                                                              #
#                                     wc.sh                                    #
#                                                                              #
#******************************************************************************#
#                                                                              #
#        This script counts the number of lines in a Sharedigm project.        #
#                                                                              #
#        Author(s): Abe Megahed                                                #
#                                                                              #
#        This file is subject to the terms and conditions defined in           #
#        'LICENSE.md', which is part of this source code distribution.         #
#                                                                              #
#******************************************************************************#
#        Copyright (C) 2016-2024, Megahed Labs LLC, www.sharedigm.com          #
#******************************************************************************#

# check command line arguments
#
if [ "$1" == "-help" ]; then
	echo "Usage: sh wc.sh [-all]"
	exit 0
fi

# count all files in selected folders
#
if [ "$1" == "-all" ]; then
	wc -l `find . \
	-path \
	-prune -o -path ./build \
	-prune -o -path ./fonts \
	-prune -o -path ./images \
	-prune -o -path ./library \
	-prune -o -path ./project \
	-prune -o -path ./sounds \
	-prune -o -path ./vendor \
	-prune -o -type f -print`
	exit 0
fi

# count selected files and folders
#
wc -l `find scripts styles templates -type f \( -name '*.js' -o -name '*.less' -o -name '*.tpl' \) -print`