rm -rf dist
bun parcel build
bun tsc
mv module/.well-known/index.js dist/.well-known/index.mjs
mv module/.well-known/index.js.map dist/.well-known/index.mjs.map
mv module/nodeinfo/index.js dist/nodeinfo/index.mjs
mv module/nodeinfo/index.js.map dist/nodeinfo/index.mjs.map
rm -rf module
