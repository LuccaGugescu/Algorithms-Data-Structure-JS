const Node = require("./Node");

class Stack {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    push(value) {
        let newNode = new Node(value);
        if(this.size === 0) {
            this.first = newNode;
            this.last = newNode;
        } else {
            let temp = this.first;
            this.first = newNode;
            this.first.next = temp;
        }
        this.size++;
    }
    pop() {
        if(this.size === 0) {
            return null;
        } 
        const result = this.first;
        if (this.first === this.last) {
            this.last = null;
        } 
        this.first = this.first.next;
        this.size--;
        return result.val;
    }
}


const months = new Stack();
months.push("1");
months.push("2");
months.push("3");
console.log(months.pop());
console.log(months.pop());
console.log(months);
