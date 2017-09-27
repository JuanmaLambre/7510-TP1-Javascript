var Parser = function() {

    this.facts = []
    this.rules = []

    this.parseFacts = function(data) {
        var isFact = (proposition) => {return proposition.indexOf(':-') == -1}
        var trimFact = (str) => {return str.replace(/[\s\.]/g, '')}
        var buildFact = (strFact) => {return strFact.split(/[\(,\)]/).slice(0,-1)}

        this.facts = data.filter(isFact).map(trimFact).map(buildFact)
    }

    this.parseRules = function(data) {

    }

}

module.exports = Parser