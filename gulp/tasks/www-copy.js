var config = require('../config');
var merge = require('merge-stream');
var gulp = require('gulp');

exports.task = function() {

  var baseFiles = gulp.src(config.wwwBaseFiles)
    .pipe(gulp.dest(config.outputDir + config.wwwBasePath));

  var bowerComponents = gulp.src(config.wwwBasePath + "/bower_components/**/*")
    .pipe(gulp.dest(config.outputDir + config.wwwBasePath + "/bower_components"));

  return merge(baseFiles, bowerComponents);
};