echo 'Building on PROD mode'
@REM ng build --prod --base-href "https://sarvanhd.github.io/myapp/"
git add .
git commit -m "Build files"
git push -f origin master