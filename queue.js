//Application as linked list since creating a queue with arrays is inefficient (O(n)).

class Node {
    constructor(val) {
        this.value = val
        this.next = null
    }
}

class Queue {
    constructor() {
        this.head = null
        this.tail = null
        this.length = 0
    }

    enqueue(val) {
        let node = new Node(val)
        
        if(this.length > 0) {
            this.tail.next = node
        } else {
            this.head = node
        }
        this.tail = node
        this.length++
    }

    dequeue() {
        if(this.length == 1) {
            this.tail = null
        }

        let currentHead = this.head
        this.head = this.head.next
        this.length--
        return currentHead
    }

    isEmpty() {
        return !this.length
    }

    peek() {
        if(this.length > 0) {
            return this.head
        }
        return undefined
    }

    size() {
        return this.length
    }
}

let newQ = new Queue()
newQ.enqueue('Maria')
newQ.enqueue('Tim')
newQ.enqueue('Jane')
console.log(newQ.dequeue())
console.log(newQ.dequeue())
console.log(newQ.dequeue())
console.log(newQ.isEmpty())
console.log(newQ.peek())
console.log(newQ.size())

console.log(JSON.stringify(newQ, null, '\t'))