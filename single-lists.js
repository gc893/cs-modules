/*
                    BIG O of arrays and lists
----------------------------------------------------------
                    arrays           single linked lists   double 
access                O(1)                  O(n)
insert begining       O(n)                  O(1)
insert end            O(1)                O(n)/O(1)
remove begining       O(n)                  O(1)
remove end            O(1)                  O(n)
traversal             O(n)                  O(n)



let arr = [0, 1, 2, ,3 , 4, 6]
in languages like jave
when created array you have to set the length let let array = array(6)
array(12)
array(24)
*/

class Node{
    constructor(val) {
        this.val = val
        this.next =null
    }
}
/*
properties of linked lists:
simplist just head, next
if next === nul for a node, that means that the node is a tail node

*/
class SingleLinkedList{
    constructor() {
        this.head = null
        this.tail = null
        this.length = 0
    }
    // O(1) operation
    push(val) {
        // there is no head, then the new node is head and tail
        const newNode = new Node(val)
        if (!this.head) {
            this.head = newNode
            this.tail = newNode
        } else {
            // if head exists set the current tail's nextvalue to new node and set the tail to new node
            console.log('current tail', this.tail)
            this.tail.next = newNode
            this.tail = newNode
        }
        this.length++
        return this
    }
    unshift(val) {
        // if there is no head, then the new node is teh head and tail
        const newNode = new Node(val)
        if (!this.head) {
            this.head = newNode
            this.tail = newNode
        } else {
            //if there is a head, then new node's next value should be the current head, and this head should point to new node
            newNode.next = this.head
            this.head = newNode
        }
        this.length++
        return this
    }
    shift() {
        if (!this.head) return undefined
        const currentHead = this.head
        this.head = currentHead.next
        this.length--
        if (this.length === 0) {
            this.head = null
            this.tail = null
        }
        return currentHead
    }
    pop() {
        if (!this.head) return undefined
        let currentNode = this.head
        let newTail = null
        while (currentNode.next) {
            console.log(currentNode.next.val)
            console.log(currentNode.val)
            newTail = currentNode
            currentNode = currentNode.next
        }
        console.log(newTail.val)
        this.tail = newTail
        this.tail.next = null
        this.length--
        if (this.length === 0) {
            this.head = null
            this.tail = null
        }
        return currentNode
    }
    get(index) {
        if (index < 0 || index > this.length || typeof index === 'string') return undefined
        let currentNode = this.head
        let currentIndex = 0
        while (currentIndex < index){
            currentNode = currentNode.next
            currentIndex++
        }
        return currentNode
    }
    insert(val, index) {
        if (index < 0 || index > this.length || typeof index === 'string') return undefined
        if (index === 0) return !!this.unshift(val)
        if (index === this.length) return !!this.push(val)
        let newNode = new Node(val)
        let previousNode = this.get(index - 1)
        let temp = previous.next
        previous.next = newNode
        newNode.next = temp
        this.length++
        return true
    }
    remove(index) {
        if (index < 0 || index > this.length || typeof (index) === 'string') return undefined
        if (index === this.length - 1) return this.pop()
        if (index === 0) return this.shift()
        let previousNode = this.get(index - 1)
        let removed = previousNode.next
        previousNode.next = removed.next
        this.length--
        return removed
    }

}


const list = new SingleLinkedList()
list.push('hello')
list.push('world')
list.push('!')
list.push('anothern node')
list.push('more nodes')
list.remove(3)
list.remove(1)
list.remove(0)


console.log(list)