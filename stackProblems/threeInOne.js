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

// Use a single array to implement three stacks