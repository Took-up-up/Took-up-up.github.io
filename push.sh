#!/bin/bash
i=`date +"%H;%M;%S"`
git add --all
git commit -m "$i"
git push
