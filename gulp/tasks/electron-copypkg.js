var gulp = require('gulp');
var fs = require('fs');
var jeditor = require("gulp-json-editor");
var config = require('../config');

exports.task = function() {
  return gulp.src(config.pkgPath)
    .pipe(jeditor({
      main: config.electronEntryFile
    }))
    .pipe(gulp.dest(config.outputDir));
};