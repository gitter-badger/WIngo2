angular
  .module('wingo2')
  .service('$wnTest', function() {
    this.getText = function() {
      return "Hello from the Service";
    }
  });