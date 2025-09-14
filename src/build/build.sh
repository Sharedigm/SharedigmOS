#******************************************************************************#
#                                                                              #
#                                   build.sh                                   #
#                                                                              #
#******************************************************************************#
#                                                                              #
#       This script compresses and concatenates the scripts, styles            #
#       and resources that are contained in a Sharedigm instance.              #
#                                                                              #
#       Author(s): Abe Megahed                                                 #
#                                                                              #
#       This file is subject to the terms and conditions defined in            #
#       'LICENSE.md', which is part of this source code distribution.          #
#                                                                              #
#******************************************************************************#
#       Copyright (C) 2016 - 2025, Megahed Labs LLC, www.sharedigm.com         #
#******************************************************************************#

# define directories
#
src=../../sharedigm
dest=../../sharedigm-built

#
# functions
#

function make_copy() {
	rm -rf $2
	cp -r $1 $2
}

#******************************************************************************#
#                          script building functions                           #
#******************************************************************************#

function bundle_scripts() {
	scripts=$1

	# bundle script files together
	#
	rm -rf $scripts
	mkdir $scripts
	rollup --config rollup.config.js --bundleConfigAsCjs
}

function compress_scripts() {
	scripts=$1

	# minify each script file
	#
	for filename in $scripts/*.js; do
		echo "minifying script $filename"
		terser --compress --mangle --ecma 6 $filename -o $filename 
	done
}

function build_scripts() {
	scripts=$1

	# build compiled version of app-loadable.js
	#
	mv ../scripts/views/apps/common/behaviors/loading/app-loadable.js ../scripts/views/apps/common/behaviors/loading/app-loadable.bak.js
	sh dependencies.sh > ../scripts/views/apps/common/behaviors/loading/app-loadable.js

	# process scripts
	#
	bundle_scripts $scripts
	compress_scripts $scripts

	# restore dynamic version of app-loadable.js
	#
	mv ../scripts/views/apps/common/behaviors/loading/app-loadable.bak.js ../scripts/views/apps/common/behaviors/loading/app-loadable.js
}

#******************************************************************************#
#                           style building functions                           #
#******************************************************************************#

function clean_styles() {
	styles=$1

	# remove unused less folders
	#
	for item in "$styles"/*; do
		if [ -d "$item" ]; then
			if [[ $item != *themes ]]; then
				rm -rf "$item"
			fi
		fi
	done

	# remove development files
	#
	for file in $(find $styles -name '*.less' -or -name '*.scss' -or -name '*.map' -or -name 'makefile'); do rm $file; done

	# remove all empty directories
	#
	find $styles -name ".DS_Store" -depth -exec rm {} \;
	find $styles -type d -empty -print -delete
}

function compress_styles() {
	styles=$1

	# compress each styles file
	#
	for item in "$styles"/*;do
		if [ -d "$item" ];then
			compress_styles "$item"
		elif [ -f "$item" ]; then
			if [[ "$item" == *.css ]]; then
				echo "minifying styles $item"
				cssmin $item > temp
				rm $item
				mv temp $item
			fi
		fi
	done
}

function build_styles() {
	styles=$1
	clean_styles $styles
	compress_styles $styles
}

#******************************************************************************#
#                         resource building functions                          #
#******************************************************************************#

function clean_resources() {
	resources=$1

	# remove unused less folders
	#
	for item in "$resources"/*/*; do
		if [ -d "$item" ]; then
			rm -rf "$item"
		fi
	done

	# remove all empty directories
	#
	find $resources -name ".DS_Store" -depth -exec rm {} \;
	find $resources -type d -empty -print -delete
}

function compress_resources() {
	resources=$1

	# minify each resources file
	#
	for item in "$resources"/*/*;do
		echo "minifying resource $item"
		jq -c . < $item > temp
		rm $item
		mv temp $item
	done
}

function build_resources() {
	resources=$1
	clean_resources $resources
	compress_resources $resources
}

#******************************************************************************#
#                                     main                                     #
#******************************************************************************#

# create built copy
#
make_copy $src $dest
build_scripts "$dest/scripts"
build_styles "$dest/styles"
build_resources "$dest/resources"