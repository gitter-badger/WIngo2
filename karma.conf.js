module.exports = function(config) {
  config.set({
    basePath: '.',
    frameworks: ['jasmine'],
    browsers: [
      'Chrome',
      'Firefox'
    ],
    files: [
      { pattern: 'www/bower_components/angular/angular.js', included: true, watched: true},
      { pattern: 'www/bower_components/angular-animate/angular-animate.js', included: true, watched: true},
      { pattern: 'www/bower_components/angular-mocks/angular-mocks.js', included: true, watched: true},
      { pattern: 'www/bower_components/angular-aria/angular-aria.js', included: true, watched: true},
      { pattern: 'www/bower_components/angular-messages/angular-messages.js', included: true, watched: true},
      { pattern: 'www/bower_components/angular-material/angular-material.js', included: true, watched: true},
      { pattern: 'www/scripts/**/*.js', included: true, watched: true }
    ]
  });
};