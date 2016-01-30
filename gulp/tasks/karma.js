var gulp = require('gulp');
var config = require('../config');
var Server = require('karma').Server;

exports.dependencies = ['www-buildjs', 'www-buildtests'];

exports.task = function(done) {
  new Server({
    configFile: config.rootDir + config.karmaConfigPath,
    singleRun: true
  }, function(code) {
    console.log("Karma exited with error code: " + code);
    done();
  }).start();
};