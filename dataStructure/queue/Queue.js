const Node = require("./Node");

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    enqueue(value) {
        let newNode = new Node(value);
        if(this.size === 0) {
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last.next = newNode;
            this.last = newNode;
        }
        this.size++;
    }
    dequeue() {
        if(this.size === 0) return null;
        const result = this.first;
        if(this.first === this.last) {
            this.last = null;
        } else {
            this.first = this.first.next;
        }
        this.size--;
        return result.val
    }
}

module.exports = Queue;