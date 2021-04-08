const Node = require("./Node");

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
}

const tree = new BinarySearchTree();
tree.insert(12);
tree.insert(13);
tree.insert(11);
tree.insert(9);
console.log(tree.find(15));
