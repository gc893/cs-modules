//Use a single array to implement three stacks

class Stack {
    constructor() {
        this.items = [];
        this.arrTwoHead = null;
        this.arrThreeHead = null;
    }

    push(element, arr) {
        if (this.items.length === 0) {
            if (arr === 1) {
                this.items.push(element)
                this.arrTwoHead = 1;
                this.arrThreeHead = 1;
            } else if (arr === 2) {
                this.items.push(element)
                this.arrTwoHead = 0;
                this.arrThreeHead = 1;
            } else {
                this.items.push(element);
                this.arrTwoHead = 0;
                this.arrThreeHead = 0;
            }
        } else {
            if (arr === 1) {
                this.items.splice(this.arrTwoHead,0,element)
                this.arrTwoHead++;
                this.arrThreeHead++;
            } else if (arr === 2) {
                this.items.splice(this.arrThreeHead,0,element)
                this.arrThreeHead++;
            } else {
                this.items.push(element)
            }
        }
    }

    pop(arr) {
        if(this.items.length === 0) return undefined;

        if (arr === 1) {
            let removed = this.items.splice(this.arrTwoHead -1,1);
            this.arrTwoHead--;
            this.arrThreeHead--;
            return removed[0];
        } else if (arr === 2) {
            let removed = this.items.splice(this.arrThreeHead -1,1)
            this.arrThreeHead--;
            return removed[0];
        } else {
            return this.items.pop()
        }
    }

    toString() {
        let arrays = [
            this.items.slice(0, this.arrTwoHead), 
            this.items.slice(this.arrTwoHead, this.arrThreeHead), 
            this.items.slice(this.arrThreeHead, this.items.length)
        ]
        return arrays;
    }
}

let threeInOne = new Stack();

threeInOne.push(1,1);
threeInOne.push(10,2)
threeInOne.push(100,2)
threeInOne.pop(1);
threeInOne.pop(2);
threeInOne.pop(3);

console.log(threeInOne.toString());