#!/usr/bin/env bash

## Kopieer en verplaats alles naar de development map.
cp -R . ../development
mkdir s1094220-IMTD1
mv ../development s1094220-IMTD1/development/

## Verwijder . mappen die niet ingeleverd hoeven te worden.
rm -rf s1094220-IMTD1/development/.git/
rm -rf s1094220-IMTD1/development/.idea/
rm -rf s1094220-IMTD1/development/.tmp/

## Verwijder mappen die niet ingeleverd hoeven te worden.
rm -rf s1094220-IMTD1/development/dist/
rm -rf s1094220-IMTD1/development/docs/

## Verwijder . bestanden die niet ingeleverd hoeven te worden.
rm s1094220-IMTD1/development/.editorconfig
rm s1094220-IMTD1/development/.gitattributes
rm s1094220-IMTD1/development/.gitignore

## Verwijder bestanden die niet ingeleverd hoeven te worden.
rm s1094220-IMTD1/development/CNAME
rm s1094220-IMTD1/development/inlever.sh
rm s1094220-IMTD1/development/make.sh

## Kopieer de opdrachten naar de inlever map.
cp -R app/opdrachten/ s1094220-IMTD1/opdrachten

## Kopieer de portfolio naar de inlever map.
cp -R docs/ s1094220-IMTD1/portfolio

## Kopieer de README.md naar de zip.
cp README.md s1094220-IMTD1/

## ZIP de map
zip -r -q s1094220-IMTD1.zip s1094220-IMTD1/

## Verwijder de oude map
rm -rf s1094220-IMTD1/
