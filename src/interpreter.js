var Parser = require('./parser')
var DrKnow = require('./drknow')

var Interpreter = function () {

    this.parser = null;
    this.drknow = new DrKnow();


    this.parseDB = function (data) {
        this.parser = new Parser();
        this.parser.parseFacts(data);
        this.parser.parseRules(data);
    }

    this.checkQuery = function (query) {
        return this.drknow.ask(query, this.parser.facts, this.parser.rules)
    }

}

module.exports = Interpreter;
