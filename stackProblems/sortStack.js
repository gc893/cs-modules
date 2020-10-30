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

    isEmpty() {
        return !this.items.length;
    }

    toString() {
        return this.items.join('-');
    }

    sort() {
        let tempStack = new Stack();

        while (this.items.length > 0) {
            let item = this.items.pop();
            if(tempStack.items.length === 0){
                tempStack.push(item);
            } else if (item < tempStack.peek()) {
                tempStack.push(item);
            } else {
                while (item > tempStack.peek()) {
                    this.items.push(tempStack.pop())
                }
                tempStack.push(item);
            }
        }
        this.items = tempStack.items
    }
}

let stack = new Stack();

stack.push(4);
stack.push(5);
stack.push(2);
stack.push(1);
stack.push(3);
stack.sort()
// stack.pop();
// stack.pop();


console.log(stack.toString());