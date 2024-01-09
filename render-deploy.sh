#!/usr/bin/env bash
# exit on error
set -o errexit

npm install next@^13.4.19

# build API
npm install --prefix api
npm run build --prefix api

# build client
npm install --prefix client
npm run build --prefix client

# copy client to api
cp -r .client/out ./api/client