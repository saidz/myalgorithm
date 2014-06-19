var cd = require('../src/countduplicate');
describe('countduplicate', function() {
    var arr = [];
    describe('#init()', function() {
        it('array length should eql 100', function() {
            arr = cd.init();
            arr.length.should.eql(100);
        });
    });
    describe('#qsort()', function() {
        it('arr should is a ASC set',function(){
            var arr = cd.init();
            cd.qsort(arr,0,arr.length-1);
            for(var i =0;i<arr.length;i++){
                arr[++i].should.not.be.below(arr[i]);
            }
        });
    });
});