"use strict";

var fmtr = require('../');
var expect = require('expect.js');

describe('fmtr', function () {

    it('should return empty string with no arguments', function () {
        expect(fmtr()).to.be('');
    });

    it('should return input string when object is empty or not given', function () {
        expect(fmtr('hello')).to.be('hello');
        expect(fmtr('hello'), null).to.be('hello');
        expect(fmtr('hello'), undefined).to.be('hello');
    });

    it('should return input string when no place holders are specified', function () {
        expect(fmtr('', { hello: 'world' })).to.be('');
        expect(fmtr('howdy', { hello: 'world' })).to.be('howdy');
    });

    it('should fill in place holders with values from the object', function () {
        expect(fmtr('Xx ${hello} xX', { hello: 'world' })).to.be('Xx world xX');
    });

    it('should ignore undefined variables', function() {
        expect(fmtr('Xx ${foobar} xX')).to.be('Xx  xX');
        expect(fmtr('Xx ${foobar} xX', { baz: 123 })).to.be('Xx  xX');
        expect(fmtr('Xx ${foo} ${bar} xX', { bar: 123 })).to.be('Xx  123 xX');
    });

    it('should support deep paths', function () {
        expect(fmtr('${foo.bar}', { foo: { bar: 1 } })).to.be('1');
        expect(fmtr('${foo[1]}', { foo: [ 1, 2, 3 ] })).to.be('2');
    });

    it('should handle the example from the README.md', function () {
        var user = {
            username: 'alice',
            spouse: 'bob',
            enemy: 'eve'
        };

        expect(fmtr('${username} is married to ${spouse} and hates ${enemy}', user)).to.be("alice is married to bob and hates eve");
    });
});
