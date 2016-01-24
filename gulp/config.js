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
    'www/index.html',
    'www/bower_components'
  ],
  wwwJsFiles: [
    'www/src/**/*.js'
  ],
  outputDir: 'dist/',
  pkgPath: 'package.json',
  electronEntryFile: 'Application.js'
};