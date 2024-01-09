#!/usr/bin/env bash
# exit on error
set -o errexit

cd ./api/
npm install
npm run build

cd ../client/
npm install next@^13.4.19
npm install
npm run build

cd ../
cp -r ./client/out ./api/client