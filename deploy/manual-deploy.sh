#!/usr/bin/env bash

USER=root
HOST=103.90.233.29
PORT=7878
ENV=$1
APP_NAME=web-reika-fashion
# permision: sudo chmod 755 deploy/manual-deploy.sh
# server dependencies: node version 14x
echo "=========> Start Deploy ${ENV}"
yarn
yarn copy:env.${ENV}
yarn build

cd .. && tar  -cf build.tar.gz ./web-reika-fashion/ && cd -

scp -P ${PORT} -o StrictHostKeyChecking=no ../build.tar.gz "${USER}@${HOST}":~
ssh -p ${PORT} -o StrictHostKeyChecking=no "${USER}@${HOST}" "bash -s" < ./deploy/deploy.sh "${ENV}"

cd .. && rm -rf ./build.tar.gz & cd -
echo "=========> End Deploy ${ENV}"