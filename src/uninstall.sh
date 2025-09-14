#******************************************************************************#
#                                                                              #
#                                 uninstall.sh                                 #
#                                                                              #
#******************************************************************************#
#                                                                              #
#       This script uninstalls apps from your Sharedigm instance.              #
#                                                                              #
#       Author(s): Abe Megahed                                                 #
#                                                                              #
#       This file is subject to the terms and conditions defined in            #
#       'LICENSE.md', which is part of this source code distribution.          #
#                                                                              #
#******************************************************************************#
#       Copyright (C) 2016 - 2025, Megahed Labs LLC, www.sharedigm.com         #
#******************************************************************************#

#******************************************************************************#
#                                   globals                                    #
#******************************************************************************#

target=''
appsdir='scripts/views/apps'

#******************************************************************************#
#                                  functions                                   #
#******************************************************************************#

function uninstall_configs {
	println "Uninstalling configs."

	# Uninstall from launcher
	#
	jq "del(.$appname)" $target/apps/apps.json --tab > apps.json
	mv apps.json $target/apps/apps.json
	rm $target/apps/$appname.json

	# Uninstall from preferences
	#
	jq "del(.$appname)" $target/preferences/preferences.json --tab > preferences.json
	mv preferences.json $target/preferences/preferences.json
	rm $target/preferences/$appname.json
}

function uninstall_scripts {
	println "Uninstalling scripts."
	scripts=$target/scripts/views/apps/$dirname
	if [ -d $scripts ]; then
		rm -rf $scripts
	fi
}

function uninstall_styles {
	println "Uninstall styles."
	styles=$target/styles/apps/_$dirname.scss
	if [ -f $styles ]; then
		rm -f $styles

		# remove reference from _index.scss
		#
		use="@use \"$dirname\";"
		sed -i -e "s/\n$use//g" $target/styles/apps/_index.scss
		sed -i -e "/$use/d" $target/styles/apps/_index.scss

		# remove backup files (MacOS)
		#
		if [ -f $target/styles/apps/_index.scss-e ]; then
			rm $target/styles/apps/_index.scss-e
		fi

		if [ $force != 1 ]; then
			sass $target/styles/styles.scss $target/styles/styles.css
		fi
	fi
}

function uninstall_resources {
	println "Uninstalling resources."
	resources=$target/resources/$dirname
	if [ -d $resources ]; then
		rm -rf $resources
	fi
}

function uninstall_templates {
	println "Uninstalling templates."

	# Uninstall from documentation templates
	#
	if [ -f $target/templates/apps/$dirname.tpl ]; then
		rm $target/templates/apps/$dirname.tpl
	fi
}

function uninstall_images {
	println "Uninstalling images."

	# Uninstall app icon image.
	#
	if [ -f $target/images/icons/apps/$dirname.svg ]; then
		rm $target/images/icons/apps/$dirname.svg
	fi

	# Uninstall documentation images.
	#
	if [ -d $target/images/info/apps/$dirname ]; then
		rm -r $target/images/info/apps/$dirname
	fi
}

function uninstall_app {
	appname=$1

	# find name of app from directory
	#
	dirname=${appname//_/-}

	# uninstall app components
	#
	uninstall_configs
	uninstall_scripts
	uninstall_styles
	uninstall_resources
	uninstall_templates
	uninstall_images
}

#******************************************************************************#
#                                    main                                      #
#******************************************************************************#

# check command line arguments
#
if [ $# -lt 1 ] ; then
	echo "Usage: sh uninstall.sh [APP1 APP2 APP3...]"
	exit 0
fi

appsdir=uninstallers/apps

# confirm uninstall
#
if [ $# -eq 0 ] ; then
	echo "Would you like to uninstall all apps (Y/N)?"
elif [ $# -eq 1 ] ; then
	echo "Would you like to uninstall $1 (Y/N)?"
else
	echo "Would you like to uninstall these $(($#)) apps (Y/N)?"
fi
read prompt
if [ $prompt != 'y' ] && [ $prompt != 'Y' ]; then
	echo "Quitting."
	exit 0
fi

# check if we specify apps
#
if [ $# -lt 1 ] ; then

	# iterate over all apps
	#
	for dirname in $appsdir/*/; do

		# remove directory name from app name
		#
		dirname=${dirname/$appsdir\//}

		# remove slashes from dirname name
		#
		dirname=${dirname/\//}

		# find name of app from directory
		#
		appname=${dirname//-/_}

		# uninstall non-core apps
		#
		if [ $appname != 'common' && $appname != 'desktop' && $appname != 'app' ] && [ $appname != 'app_launcher' ]  && [ $appname != 'file_browser' ] && [ $appname != 'help_viewer' ] && [ $appname != 'settings_browser' ] && [ $appname != 'settings_manager' ]; then
			uninstall_app $appname
		fi
	done
else

	# iterate over specified apps
	#
	for appname in "${@:1}"
	do
		uninstall_app $appname
	done
fi

# recompile
#
sh apps/make
sh preferences/make
sh resources/make
sh styles/make