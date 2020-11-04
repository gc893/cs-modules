class treeNode {
    constructor(val) {
        this.value = val;
        this.right = null;
        this.left = null;
    }
}

class tree {
    constructor() {
        this.root = null
    }

    addNode(val, prevNode=this.root) {
        if (!this.root) {
            let node = new treeNode(val);
            this.root = node
        } else if (val < prevNode.value) {
            if (prevNode.left === null) {
                let node = new treeNode(val);
                prevNode.left = node
            } else {
                // console.log(prevNode.left)
                this.addNode(val, prevNode.left)
            }
        } else if (val > prevNode.value) {
            if (prevNode.right === null) {
                let node = new treeNode(val);
                prevNode.right = node
            } else {
                // console.log(prevNode.right)
                this.addNode(val, prevNode.right)
            }
        } else {
            return
        }
    }
}

let newTree = new tree();
newTree.addNode(5);
newTree.addNode(7);
newTree.addNode(6);
newTree.addNode(2);
newTree.addNode(8);


console.log(JSON.stringify(newTree, null, '\t'))