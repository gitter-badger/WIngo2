var config = require('../config');
var gulp = require('gulp');
var ts = require('gulp-typescript');

exports.task = function() {
  var tsProject = ts.createProject(config.tsConfigPath);

  return gulp.src(config.jsBaseFiles.concat(config.tsdBaseFiles))
    .pipe(ts(tsProject))
    .pipe(gulp.dest(config.outputDir));
};