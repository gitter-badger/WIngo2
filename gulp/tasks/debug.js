var gulp = require('gulp');
var config = require('../config');
var runElectron = require('gulp-run-electron');

exports.dependencies = ['build'];

exports.task = function() {
  return gulp.src(config.outputDir)
    .pipe(runElectron())
};
