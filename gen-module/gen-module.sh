#!/bin/bash

# Start scripte
clear
NOW=$(date +"%m-%d-%Y %H:%M:%S")
echo 'Start Module'
echo -e "Please enter your module: "
read name
echo -e "Please enter your author name: "
read AUTHOR

AUTHORNAME="Hoàng <3 Thanh"
[ ! -z "$AUTHOR" ] && AUTHORNAME="$AUTHOR"

COPPYRIGHT="/* 
  Created by ${AUTHORNAME} at ${NOW}
  Module ${name}
*/"

SOURCEDIR="src/pages/$name" #

if [ -d $SOURCEDIR ] 
then
echo "Directory $SOURCEDIR exists." 
else

# import variable
source $(dirname $0)/variables.sh

# Generate handlers
source $(dirname $0)/templates/handlers.sh

# Generate page
source $(dirname $0)/templates/page.sh


echo "End Scripts"
fi