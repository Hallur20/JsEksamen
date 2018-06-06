var chai = require('chai');
var assert = chai.assert;
var expect = chai.expect;
var should = chai.should();



function myAsyncFunction(callback) {
    // 50ms delay before callback
    setTimeout(function() {
      callback('hello');
    }, 50);
  };


it('should return hello as callback parameter', function(done){
    myAsyncFunction(function(data) {
      assert.equal(data, 'hello');
      data.should.equal('hello');
      expect(data).to.eql('hello');
      done();
    });
  });


  describe('Simple Mocha Tests', function () {
    var arr = [1,2,3];

    before("hey im doing somethng before each test",()=>{
      arr = [];
    })

    it('should return true if var is true', function () {
      var isTrue = true;
           assert.equal(isTrue,true);
       });
    it('arr length should be zero because of the before function', function () {
           assert.equal(arr.length, 0);
       });

      after("hey im doing something at the end of the test", function(){
        arr =[1,2,3];
      })
   });