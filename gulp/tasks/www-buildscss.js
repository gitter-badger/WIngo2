var gulp = require('gulp');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var config = require('../config');

exports.task = function() {
  return gulp.src(config.wwwScssFiles)
    .pipe(sass().on('error', sass.logError))
    .pipe(concat('bundle.css'))
    .pipe(gulp.dest(config.outputDir + config.wwwBasePath));
};