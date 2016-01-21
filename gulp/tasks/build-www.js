var config = require('../config');
var gulp = require('gulp');

exports.task = function() {

  return gulp.src(config.wwwBaseFiles)
    .pipe(gulp.dest(config.outputDir + config.wwwBasePath));
};