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
        // return this.items.reverse().join('->');
    }
}

let stack = new Stack();

stack.push(1);
stack.push(2);
stack.push(3);
stack.pop();
console.log(stack.peek());


console.log(stack.toString());

//Challenge: describe how you could use a single array to implement three stacks.