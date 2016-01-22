var path = require('path');

module.exports = {
  rootDir: path.normalize(__dirname + '/..'),
  sourceBasePath: 'src/',
  wwwBasePath: 'www/',
  tsConfigPath: 'tsconfig.json',
  jsBaseFiles: [
    'src/**/*.ts'
  ],
  tsdBaseFiles: [
    'typings/**/*.ts'
  ],
  wwwBaseFiles: [
    'www/**/*'
  ],
  outputDir: 'dist/',
  pkgPath: 'package.json',
  electronEntryFile: 'Application.js'
};