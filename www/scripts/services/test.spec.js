describe('test service', function() {

  beforeEach(module('wingo2'));

  it('should not return an empty string', inject(function($wnTest) {
    expect($wnTest.getText()).toBeTruthy();
  }));

});