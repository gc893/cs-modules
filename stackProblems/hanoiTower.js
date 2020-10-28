class Stack {
    constructor() {
        this.items = [];
    }

    push(element) {
        this.items.push(element);
    }

    pop() {
        if(this.items.length === 0) return undefined;
        return this.items.pop();
    }

    peek() {
        return this.items[this.items.length -1];
    }

    size() {
        return this.items.length;
    }

    isEmpty() {
        return !this.items.length;
    }

    toString() {
        return this.items.join('-');
    }
}

//Initial State
function init(discs, from, to) {
    let pegA = new Stack();
    let pegB = new Stack();
    let pegC = new Stack();
    let pegs = [pegA, pegB, pegC]
    
    for(let i = discs; i > 0; i--) {
        pegs[from -1].push(i)
    }

    console.log(pegs);
    moveTower(discs, from, to, pegs);
}

//Find additional peg
function findComplement(from, to) {
    if (from === 0) {
        if(to === 1) {
            return 2;
        } else {
            return 1;
        }
    } else if (from === 1) {
        if(to === 0) {
            return 2;
        } else {
            return 0;
        }
    } else {
        if(to === 1) {
            return 0;
        } else {
            return 1;
        }
    }
}

//call moveTower recursively until discs === 2, then apply base case movements
function moveTower(discs, from, to, pegs) {
    from = from-1;
    to = to-1;

    if(discs <= 0) {
        return undefined
    } else if(discs === 1) {
        pegs[to].push(pegs[from].pop());
        console.log(pegs);
    } else if(discs === 2) {
        pegs[findComplement(from, to)].push(pegs[from].pop());
        console.log(pegs);
        pegs[to].push(pegs[from].pop());
        console.log(pegs);
        pegs[to].push(pegs[findComplement(from, to)].pop());
        console.log(pegs);
    } else {
        moveTower(discs - 1, from + 1, findComplement(from, to) + 1, pegs)
        pegs[to].push(pegs[from].pop())
        console.log(pegs);
        moveTower(discs - 1, findComplement(from, to) + 1, to + 1, pegs)
    }
}

//Provide numbers of discs, inital peg where discs are located and target peg where discs will be located
init(3, 1, 3);