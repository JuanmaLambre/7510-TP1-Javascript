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


    beforeEach(function() {
        parser = new Parser();
    })

    describe("Parser facts", function() {
        it("should obtain facts from db", function() {
            parser.parseFacts(db);
            assert.deepEqual(parser.facts[0], ['genio', 'einstein']);
            assert.deepEqual(parser.facts[1], ['musico', 'satie']);
        })
    })

    describe("Parser rules", function() {
        it("should obtain rules form db", function() {
            parser.parseRules(db);
            var rule = parser.rules[0];
            assert.deepEqual(rule[0], ["crack", "X"]);
            assert.deepEqual(rule[1][0], ["genio", "X"]);
            assert.deepEqual(rule[1][1], ["musico", "X"]);
        })
    })


})