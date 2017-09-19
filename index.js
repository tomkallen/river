class River {
    constructor() {
        this.origin = []
        this.clone = []
        this.river = []
        this.mutators = []
    }

    push(data) {
        data = Array.isArray(data) ? data : [data]
        this.origin = this.origin.concat(data)
        this.clone = this.clone.concat(data)

        this.mutators.forEach(mutator => data = data.map(mutator))
        
        return this.river = this.river.concat(data);        
    }

    pop() {        
        this.clone.pop()
        return this.river.pop()
    }

    shift(){
        this.clone.shift()
        return this.river.shift()
    }

    unshift(){
        this.clone.unshift()
        return this.river.unshift()
    }

    onValue(...fun) {
        fun.forEach(River.validate)
        this.mutators = this.mutators.concat(fun)
    }

    static validate(e) {
        if ("function" !== typeof e) {
            throw new Error("Expected function as parameter for River.onValue method")
        }
    }

    value() {
        return this.river
    }

    getOrigin() {
        return this.origin
    }

    getClone() {
        return this.clone
    }
}

module.exports = River