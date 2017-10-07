var Parser = function() {

    this.facts = []
    this.rules = []

    var trimProposition = (str) => {
        return str.replace(/[\s\.]/g, '')
    }

    var buildFact = (strFact) => {
        return strFact.split(/[\(,\)]/).slice(0,-1)
    }


    this.parseFacts = function(data) {
        var isFact = (prop) => {return prop.indexOf(':-') == -1}
        this.facts = data.filter(isFact).map(trimProposition).map(buildFact)
    }

    this.parseRules = function(data) {
        var isRule = (prop) => {return prop.indexOf(':-') != -1}
        var buildRule = (strRule) => {
            var pair = strRule.split(':-')
            return [
                pair[0].split(/[\(,\)]/).slice(0,-1),
                pair[1].replace('),', ')!').split('!').map(buildFact)
            ]
        }

        this.rules = data.filter(isRule).map(trimProposition).map(buildRule)
    }

}

module.exports = Parser