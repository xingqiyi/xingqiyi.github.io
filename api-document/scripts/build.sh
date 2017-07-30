#!/bin/bash
#Auth: bell@greedlab.com
#
# build
#

# 当前目录
CURRENT_DIR=${PWD}

# 脚本所在目录
SCRIPT_DIR=$(cd "$(dirname "$0")"; pwd)

# 根目录
ROOT_DIRECTORY=${SCRIPT_DIR}/..

cd ${ROOT_DIRECTORY}

greed-summary -t "所有接口文档列表" -i '[scripts,resource,Resource,Publish,_book,api,node_modules]' -d  ${ROOT_DIRECTORY} -o  ${ROOT_DIRECTORY}/SUMMARY.md -S gitbook -a

# cp ${ROOT_DIRECTORY}/SUMMARY.md ${ROOT_DIRECTORY}/README.md

rm -rf ${ROOT_DIRECTORY}/_book
rm -rf ${ROOT_DIRECTORY}/api

gitbook build

mv ${ROOT_DIRECTORY}/_book ${ROOT_DIRECTORY}/api

cd ${CURRENT_DIR}
