#!/bin/bash
# /xx/xx/xx/nvm/project/my-blog

i=`date +"%H:%M:%S"`
git add --all
git commit -m "$i"
git push
