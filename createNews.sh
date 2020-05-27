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

cat <<EOT >> news/${filename}.news
News:$news
Categories:$cats
Headline:$headline
Link:$link
$text
EOT
