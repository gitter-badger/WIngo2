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
    'www/index.html'
  ],
  wwwJsFiles: [
    'www/scripts/**/*.js'
  ],
  wwwScssFiles: [
    'www/styles/**/*.scss'
  ],
  outputDir: 'dist/',
  pkgPath: 'package.json',
  electronEntryFile: 'Application.js'
};