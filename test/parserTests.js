var expect = require("chai").expect;
var should = require('should');
var assert = require('assert');

var Parser = require('../src/parser');


describe("Parser", function() {

    var db = [
        "genio(einstein).",
        "musico(satie).",
        "crack(X) :- genio(X), musico(X)"
    ]

    var parser = null;
    var equalArrays = null;

    before(function() {
        equalArrays = (a1, a2) => {
            return a1.length == a2.length && a1.every((x,i) => {
                return x == a2[i];
            })
        }
    })

    beforeEach(function() {
        parser = new Parser();
    })

    describe("Parser facts", function() {
        it("should obtain facts from db", function() {
            parser.parseFacts(db);
            assert(equalArrays(parser.facts[0], ['genio', 'einstein']));
            assert(equalArrays(parser.facts[1], ['musico', 'satie']));
        })
    })


})