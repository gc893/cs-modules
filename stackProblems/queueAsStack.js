//This implementation can be simplified by not saving the reversed version of the stack and simply by setting up a pointer indicating the next item to pop
//using pointers, the popped elements on the items array that have already been marked as popped can be overwritten when pushing to use this spaces as well. 

class Stack {
    constructor() {
        this.items = [];
        this.reverse = [];
    }

    push(element) {
        this.items.push(element);
    }

    pop() {
        if(this.items.length === 0) return undefined;
        this.reverse.push(this.items[this.reverse.length])
        return this.reverse[this.reverse.length -1];
    }

    toString() {
        return this.items.slice(this.reverse.length).join('-');
    }
}

let stack = new Stack();

stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.pop();

console.log(stack.toString());