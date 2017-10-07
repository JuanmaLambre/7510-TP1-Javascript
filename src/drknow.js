var DrKnow = function() {

    this.assertsFact = function(query, facts) {
        return facts.find((f) => {
            return f.every((value, i) => {return value == query[i]})
        })
    }
    
    this.appliesRule = function(query, facts, rules) {
        var rule = rules.find((r) => {return r[0][0] == query[0]})
        if (rule) {
            return rule[1].map((f) => {
                return [f[0]].concat(f.slice(1).map((param) => {return query[rule[0].indexOf(param)]}))
            }).every((f) => {return this.assertsFact(f, facts)})
        } else {
            return false;
        }
    }

    this.ask = function(queryStr, facts, rules) {
        var query = queryStr.replace(/[\s\.]/, '').split(/[\(,\)]/).slice(0,-1);
        return this.assertsFact(query, facts) ||
                this.appliesRule(query, facts, rules);
    }

}

module.exports = DrKnow;