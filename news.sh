#!/bin/bash

echo G/N/B?
read news

echo "Categories? (cat1,cat2,...)"
read cats

echo Headline?
read headline

echo Link?
read link

echo Filename?
read filename

echo text:
read text

printf "News:$news\nCategories:$cats\nHeadline:$headline\nLink:$link\n$text" > news/{$filename}
