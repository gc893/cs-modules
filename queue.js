//Implementation as linked list since creating a queue with arrays is inefficient (O(n)).

//Linked List Review:

    //A linked list consists of a series of nodes that point to each other. Each node is an object with 2 properties: value and next.

    //A node's next property points to the next node in the list connecting all the node together sequentially.

    //Because of this, linked lists are inefficient to read data. To find a node, you need to start by the first node and traverse the nodes until you reach thr right one.

    //But since we dont need access to all nodes in a queue (only to the first one and the last one) we can disregard this downside.

//To enqueue: we need to create a new node (which we will attach at the end of the list). This means we will make the next property of the last node currently in the list equal to the node we just created...
//... then we will change the queue's tail pointer from the old tail to the new node since we need our queue object to reflect our new node as the new tail...
//... finally, we will add one to the queue's length property, and take care of the edge case where this is the first node we add to the list. In this edge case, we need to update the queue's head property to equal our new node since at that point our unique node is both the tail and the head.

//To dequeue: first, we will read the current head of the list so that we can return this node at the end...
//... then we will change the head property of the queue to point to the second item in the list. We can refer to the second item by using the next property of the current head...
//... then we will substract one to the queue's length property since we are removing one node from the list..
//... finally we will return the old head of the queue, and take care of the edge case where we are removing the last node of the list. In this case we will need to change the tail property of the queue to null since there are no nodes remaining in the list.

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
        return currentHead.value
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