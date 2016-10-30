gulp build
mv dist/ docs/
cp CNAME docs/
git add docs/*
git commit -m "Build: `date`"
