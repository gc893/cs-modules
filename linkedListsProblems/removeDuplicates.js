class Node{
    constructor(val) {
        this.val = val
        this.next =null
    }
}

class SingleLinkedList{
    constructor() {
        this.head = null
        this.tail = null
        this.length = 0
    }
    push(val) {
        const newNode = new Node(val)
        if (!this.head) {
            this.head = newNode
            this.tail = newNode
        } else {
            this.tail.next = newNode
            this.tail = newNode
        }
        this.length++
        return this
    }
    unshift(val) {
        const newNode = new Node(val)
        if (!this.head) {
            this.head = newNode
            this.tail = newNode
        } else {
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
            newTail = currentNode
            currentNode = currentNode.next
        }
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

    removeDups() {
        if (this.head) {

            let uniqueVals = {}
            let currentNode = this.head
            
            for (let i = 1; i <= this.length; i++) {
                if (uniqueVals[currentNode.val]) {
                    this.remove(i - 1)
                    i--
                } else {
                    uniqueVals[currentNode.val] = 1
                }
                currentNode = currentNode.next
            }

        } else {
            return
        }
    }
}

const list = new SingleLinkedList()
list.push('hello')
list.push('world')
list.push('hello')
list.push('world')
list.push('!')
list.push('!')
list.removeDups()


console.log(JSON.stringify(list, null, '\t'))