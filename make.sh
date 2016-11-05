#!/usr/bin/env bash

rm -rf docs/
rm -rf dist/
gulp build
mv dist/ docs/
cp CNAME docs/
rm -rf dist/
git add docs/*
git commit -m "Build: `date`"
