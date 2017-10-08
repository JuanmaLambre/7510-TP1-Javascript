var expect = require("chai").expect;
var should = require('should');
var assert = require('assert');

var Parser = require('../src/parser');
var DrKnow = require('../src/drknow');


describe("DrKnow", function() {

    var db = [
        "genio(einstein).",
        "fisico(einstein)",
        "musico(satie).",
        "varon(juan).",
        "padre ( pepe,   juan).", 
        "crack(X) :- genio(X), musico(X).",
        "sabio(X) :- genio(X), fisico(X).",
        "hijo(X, Y) :- varon(X), padre(Y, X)."
    ]

    var parser = null;
    var drknow = null;


    beforeEach(function() {
        parser = new Parser();
        parser.parseFacts(db);
        parser.parseRules(db);
        drknow = new DrKnow();
    })

    describe("ask", function() {
        it("should assert facts", function() {
            assert(drknow.ask("genio(einstein)", parser.facts, parser.rules));
        })

        it("should assert a fact with spaces", function() {
            assert(drknow.ask("padre  ( pepe, juan)", parser.facts, parser.rules));
        })

        it("should apply rules", function() {
            assert(drknow.ask("sabio(einstein)", parser.facts, parser.rules));
        })
    })

    describe("asserts fact", function() {
        it("should assert a single fact", function() {
            assert(drknow.assertsFact(["genio", "einstein"], parser.facts))
            assert(drknow.assertsFact(["musico", "satie"], parser.facts))
        })
    })

})