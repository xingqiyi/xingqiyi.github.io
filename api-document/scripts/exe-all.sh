#!/bin/bash
#Auth: sxc
#
# 依次执行 dependences.sh  build.sh  deploy.sh
#


source dependences.sh // . dependences.sh // sh dependences.sh


source build.sh // . build.sh // sh build.sh


source deploy.sh // . deploy.sh // sh deploy.sh

