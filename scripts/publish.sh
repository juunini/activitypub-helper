cp package.publish.json dist/package.json
cp README.md dist/README.md
cp LICENSE dist/LICENSE
cd dist
npm publish --access public
cd ..
