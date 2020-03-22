#!/bin/bash
# /home/yunva/git/nvm/project/my-blog

i=`date +"%H:%M:%S"`
git add --all
git commit -m "$i"
git push
