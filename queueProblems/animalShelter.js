class Node {
    constructor(val, type) {
        if (type.toLowerCase() ==='dog') {
            this.isDog = true
        } else if (type.toLowerCase() ==='cat'){
            this.isDog = false
        } else {
            console.log('Please enter "dog" or "cat".')
            return
        }
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

    enqueue(val, type) {
        let node = new Node(val, type)
        
        if(this.length > 0) {
            this.tail.next = node
        } else {
            this.head = node
        }
        this.tail = node
        if (node.value) {
            this.length++
        }
    }

    dequeue() {
        if(this.length == 1) {
            this.tail = null
        }

        let currentHead = this.head
        this.head = this.head.next
        this.length--
        return currentHead.value
    }

    dequeueDog() {
        if (this.head.isDog) {
            this.dequeue()
        } else {
            let currentNode = this.head
            let nextNode = this.head.next

            while(!nextNode.isDog) {
                currentNode = nextNode
                nextNode = nextNode.next
            }
            let nextDog = nextNode
            currentNode.next = nextDog.next
            this.length--
            if (!nextDog.next) {
                this.tail = currentNode
            }
            return nextDog.value
        }
    }

    dequeueCat() {
        if (!this.head.isDog) {
            this.dequeue()
        } else {
            let currentNode = this.head
            let nextNode = this.head.next

            while(nextNode.isDog) {
                currentNode = nextNode
                nextNode = nextNode.next
            }
            let nextCat = nextNode
            currentNode.next = nextCat.next
            this.length--
            if (!nextCat.next) {
                this.tail = currentNode
            }
            return nextCat.value
        }
    }

    isEmpty() {
        return !this.length
    }

    peek() {
        if(this.length > 0) {
            return this.head.value
        }
        return undefined
    }

    size() {
        return this.length
    }
}

let newQ = new Queue()
newQ.enqueue('Coco', 'dog')
newQ.enqueue('Jack', 'dog')
newQ.enqueue('Fifi', 'cat')
newQ.dequeueCat()

console.log(JSON.stringify(newQ, null, '\t'))