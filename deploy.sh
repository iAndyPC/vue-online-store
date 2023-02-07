set -e

vue-cli-service build

cd dist

git init
git add -A
git commit -m 'deploy'
git push -f https://github.com/iAndyPC/vue-online-store.git master:gh-pages

git -
