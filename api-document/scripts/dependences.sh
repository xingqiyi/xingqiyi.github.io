#!/bin/bash
#Auth: bell@greedlab.com
#
# Installing Dependencies
#

# 当前目录
CURRENT_DIR=${PWD}

hash gitbook || ( npm install -g gitbook-cli )
hash greed-summary || ( gem install greed-summary )
# npm install
gitbook install

cd ${CURRENT_DIR}
