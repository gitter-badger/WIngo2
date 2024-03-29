var gulp = require('gulp');
var fs = require('fs');

// Read All Tasks
fs.readdirSync('./gulp/tasks')
  .filter(function(filename) {
    return filename.match(/\.js$/i);
  })
  .map(function(filename) {
    return {
      name: filename.substr(0, filename.length - 3),
      contents: require('./gulp/tasks/' + filename)
    };
  })
  .forEach(function(file) {
    gulp.task(file.name, file.contents.dependencies, file.contents.task);
  });