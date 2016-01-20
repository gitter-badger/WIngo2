var gulp = require('gulp');
var ts = require('gulp-typescript');

gulp.task('typescript', function() {
  var tsProject = ts.createProject('./tsconfig.json');

  return gulp.src(['./src/**/*.ts', './typings/**/*.ts'])
    .pipe(ts(tsProject))
    .pipe(gulp.dest('./dist/'));
});

gulp.task('build', ['typescript']);
gulp.task('default', ['build']);