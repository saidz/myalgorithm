/**
 * 测试
 */
var calculation = require('../src/calculation');
describe('calculation', function() {
    describe('#add', function() {
        it('1 add 5 should equal 6', function() {
            var r = calculation.add(1, 5);
            (r).should.eql(6);
        });
        it('1 add -5 should equal -4', function() {
            var r = calculation.add(1, -5);
            (r).should.eql(-4);
        });
        it('-91 add -5 should equal -96', function() {
            var r = calculation.add(-91, -5);
            (r).should.eql(-96);
        });
    });
    describe('#sub', function() {
        it('5 sub 1 should equal 4', function() {
            var r = calculation.sub(5, 1);
            r.should.eql(4);
        });
        it('-5 sub 1 should equal -6', function() {
            var r = calculation.sub(-5, 1);
            r.should.eql(-6);
        });
        it('-5 sub -1 should equal -4', function() {
            var r = calculation.sub(-5, -1);
            r.should.eql(-4);
        });
        it('-5 sub 0 should equal -5', function() {
            var r = calculation.sub(-5, 0);
            r.should.eql(-5);
        });
    });
    describe('#multi', function() {
        it('5 multi 1 should equal 5', function() {
            var r = calculation.multi(5, 1);
            r.should.eql(5);
        });
        it('-5 multi 1 should equal -5', function() {
            var r = calculation.multi(-5, 1);
            r.should.eql(-5);
        });
        it('-5 multi -1 should equal 5', function() {
            var r = calculation.multi(-5, -1);
            r.should.eql(5);
        });
        it('-5 multi 0 should equal 0', function() {
            var r = calculation.multi(-5, 0);
            r.should.eql(0);
        });
        it('-500 multi 100 should equal -50000', function() {
            var r = calculation.multi(-500, 100);
            r.should.eql(-50000);
        });
    });
    describe('#div', function() {
        it('0 div 1 should equal 0', function() {
            var r = calculation.div(0, 1);
            r.should.eql(0);
        });
        it('1 div 0 should equal NaN', function() {
            var r = calculation.div(1, 0);
            r.should.eql('NaN');
        });
        it('1100 div 30 should equal 36', function() {
            var r = calculation.div(1100, 30);
            r.should.eql(36);
        });
        it('1100 div -30 should equal -36', function() {
            var r = calculation.div(1100, -30);
            r.should.eql(-36);
        });
        it('-10 div 30 should equal 0', function() {
            var r = calculation.div(-10, 30);
            r.should.eql(0);
        });
        it('10 div 30 should equal 0', function() {
            var r = calculation.div(10, 30);
            r.should.eql(0);
        });
    });
});