import { writeFileSync, copyFileSync } from 'fs'

import packageJSON from '../package.json'

copyFileSync('README.md', 'dist/README.md')
copyFileSync('LICENSE', 'dist/LICENSE')

writeFileSync('dist/package.json', JSON.stringify({
  name: packageJSON.name,
  version: packageJSON.version,
  description: packageJSON.description,
  homepage: packageJSON.homepage,
  repository: packageJSON.repository,
  license: packageJSON.license,
  author: packageJSON.author,
  types: '**/*.d.ts',
  dependencies: packageJSON.dependencies,
  files: packageJSON.files
}, null, 2))
