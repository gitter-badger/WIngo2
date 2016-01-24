var gulp = require('gulp');
var concat = require('gulp-concat');
var config = require('../config');

exports.task = function() {
  return gulp.src(config.wwwJsFiles)
    .pipe(concat('bundle.js'))
    .pipe(gulp.dest(config.outputDir + config.wwwBasePath));
};