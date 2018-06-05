var chai = require('chai');
var assert = chai.assert;
var expect = chai.expect;
var should = chai.should();

function myAsyncFunction(callback) {
    // 50ms delay before callback
    setTimeout(function() {
      callback('hello');
    }, 50);
  }
  myAsyncFunction(function(data) {

  });


it('should return hello as callback parameter', function(done){
    myAsyncFunction(function(data) {
      assert.equal(data, 'hello');
      data.should.equal('hello');
      expect(data).to.eql('hello');
      done();
    });
  });