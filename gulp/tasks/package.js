var gulp = require('gulp');
var config = require('../config');
var packager = require('electron-packager');

exports.dependencies = ['build'];

exports.task = function(done) {
  //TODO(devversion): Iterate through different platforms

  var opts = {
    arch: 'x64',
    platform: 'win32',
    dir: config.outputDir,
    out: config.outputDir,
    version: '0.36.4',
    name: 'Application',
    overwrite: true

  };

  packager(opts, function (err, appPaths) {
    if (err) throw err;

    console.log('Packaged Application to', appPaths[0]);
    done();
  })

};