#!/bin/bash

# abort on errors
set -e

# build
yarn build

cd dist

git init
git add -A
git commit -m 'deploy'

get push -f git@github.com:chmlee/markdata-editor.git master:gh-pages

cd -
