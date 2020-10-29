class Stack {
    constructor() {
        this.items = [];
        this.min = null;
    }

    push(element) {
        this.items.push(element);
        
        //New Code
        if (this.min) {
            if(element < this.min){
                this.min = element;
            }
        } else {
            this.min = element;
        }
    }

    pop() {
        if(this.items.length === 0) return undefined;
        return this.items.pop();
    }

    //New Code
    minVal() {
        return this.min;
    }

    toString() {
        return this.items.join('-');
    }
}

let stack = new Stack();

stack.push(1);
stack.push(2);
stack.push(0);
// stack.pop();
console.log(stack.minVal());


console.log(stack.toString());