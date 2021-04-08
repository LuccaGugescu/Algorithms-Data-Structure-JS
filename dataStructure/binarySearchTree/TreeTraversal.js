const Node = require("./Node");
const Queue = require("../queue/Queue");

class BinarySearchTree {
    constructor() {
        this.root = null;
    }
    find(value) {
        if(this.root === null) return undefined;
        let currentNode = this.root;
        while(currentNode) {
            if(value === currentNode.value) {
                return true;
            }
            else if (value > currentNode.value) {
                currentNode = currentNode.right;
            } else {
                currentNode = currentNode.left;
            }
        }
        return false;
    }
    insert(value) {
        let newNode = new Node(value);
        if(!this.root) {
            this.root = newNode;
        } else {
            var currentNode = this.root;
            while(true) {
                if (value === currentNode.value) {
                    return false;
                }
                else if(value > currentNode.value) {
                    if(!currentNode.right) {
                        currentNode.right = newNode;
                        break;
                    } else {
                        currentNode = currentNode.right
                    }
                }
                else {
                    if(!currentNode.left) {
                        currentNode.left = newNode;
                        break;
                    } else {
                        currentNode = currentNode.left;
                    }
                }
            }
        }
        return true;    
    }
    BFS() { // Breath-first-Search
        var node = this.root;
        let data = [];
        let queue = new Queue();
        queue.enqueue(node);
        while(queue.size) {
            node = queue.dequeue();
            data.push(node.value);
            if(node.left) queue.enqueue(node.left);
            if(node.right) queue.enqueue(node.right);

        }
        return data;
    }
    DFS() { // PreOrder
        let current = this.root;
        var result = [];
        function add(node) {
            if(!node) return 1;
            result.push(node.value);
            if(node.left)  add(node.left);
            if(node.right)  add(node.right);
        }
        add(current);
        return result;
    }
    DFSPost() { // PostOrder
        let current = this.root;
        var result = [];
        function add(node) {
            if(!node) return 1;
            if(node.left)  add(node.left);
            if(node.right)  add(node.right);
            result.push(node.value);
        }
        add(current);
        return result;
    }
    DFSIn() { // inOrder
        let current = this.root;
        var result = [];
        function add(node) {
            if(!node) return ;
            if(node.left)  add(node.left);
            result.push(node.value);
            if(node.right)  add(node.right);
            
        }
        add(current);
        return result;
    }

}

const tree = new BinarySearchTree();
tree.insert(12);
tree.insert(2);
tree.insert(13);
tree.insert(3);
tree.insert(5);
tree.insert(1);
tree.insert(17);
console.log(tree.DFSIn());