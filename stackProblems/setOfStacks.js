class Stack {
    constructor() {
        this.stackSet = []
    }

    push(element) {
        if (this.stackSet.length === 0) {
            this.stackSet.push([])
            this.stackSet[0].push(element);
        } else if (this.stackSet[this.stackSet.length -1].length <= 4) {
            this.stackSet[this.stackSet.length -1].push(element);
        } else {
            this.stackSet.push([])
            this.stackSet[this.stackSet.length -1].push(element)
        }
    }

    popAt(stack) {
        if(this.stackSet.length === 0) return undefined;
        
        return this.stackSet[stack - 1].pop();
    }

    toString() {
        return this.items.join('-');
    }
}

let newStack = new Stack();
newStack.push(1)
newStack.push(2)
newStack.push(3)
newStack.push(4)
newStack.push(5)
newStack.push(6)
newStack.push(7)
newStack.push(8)
newStack.push(9)
newStack.popAt(1)


console.log(newStack)