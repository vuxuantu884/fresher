#!/usr/bin/env bash

USER=root
HOST=
PORT=
ENV=uat
APP_NAME=web-reika-fashion
# permision: sudo chmod 755 deploy/manual-deploy-uat.sh
# server dependencies: node version 14x
echo "=========> Start Deploy ${ENV}"
yarn
yarn copy:env.${ENV}
yarn build

cd .. && tar  -cf build.tar.gz ./$APP_NAME/ && cd -

scp -P ${PORT} -o StrictHostKeyChecking=no ../build.tar.gz "${USER}@${HOST}":~
ssh -p ${PORT} -o StrictHostKeyChecking=no "${USER}@${HOST}" "bash -s" < ./deploy/deploy-uat.sh "${ENV}"

cd .. && rm -rf ./build.tar.gz & cd -
echo "=========> End Deploy ${ENV}"