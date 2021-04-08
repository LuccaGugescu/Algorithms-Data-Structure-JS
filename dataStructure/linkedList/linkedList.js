const Node = require("./Node");

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val) {
        const newNode = new Node(val);
        if(!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
    pop() {
        if(!this.head) return undefined;
        let prev = this.head;
        let current = this.head;
        while(current.next) {
            prev = current;
            current = current.next;
        }
        this.tail = prev;
        this.tail.next = null;
        this.length--;
        if(this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return current;
    }
    shift() {
        if(!this.head) return undefined;
        const oldHead = this.head;
        this.head = this.head.next;
        this.length--;
        if(this.length === 0) {
            this.tail = null;
        }
        return oldHead;
    }
    unshift(data) {
        const newHead = new Node(data);
        newHead.next = this.head;
        this.head = newHead;
        this.length++;
        if(this.length === 1) {
            this.tail = this.head;
        }
        return this;
    }
    get(index) {
        if(index > this.length || index <= 0) return undefined;
        let currentNode = this.head;
        for(let i = 1; i < index; i++) {
            currentNode = currentNode.next;
        }
        return currentNode;
    }
    set(value, index) {
        const foundIdx = this.get(index);
        if(foundIdx) {
            foundIdx.setValue(value);
            return this;
        } else {
            return false;
        }
    } 
    insert(value, index) {
        if(this.index < 0 || this.index > this.length) return undefined;
        var newNode = new Node(value);
        if(this.length === this.index) {
            this.push(newNode);
            return true;
        }
        if(index === 1) {
            this.unshift(value);
            return true;
        }
        const prevNode = this.get(index-1);
        const nextNode = prevNode.next;
        prevNode.next = newNode;
        newNode.next = nextNode;
        this.length++;
        return true;
    }
    remove(index) {
        if(index === 1) {
            this.shift();
        }
        else if(index === this.length) {
            this.pop();
        }
        else {
            const prev = this.get(index -1);
            prev.next = prev.next.next;
        }
        return true;
    }
    reverse() {
         // swap head with tail
        let node = this.head;
        this.head = this.tail;
        this.tail = node;
        let next;
        let prev = null;
        for(let i = 1; i <= this.length; i++) {
            next = node.next;
            node.next = prev;
            prev = node;
            node = next;
        }
    }
    print() {
        let currentNode = this.head;
        let result = "<head> ";
        while(currentNode) {
            result += currentNode.getData() + " ";
            currentNode = currentNode.next;
        }
        result += "<tail>";
        return result;
    }

}
let months = new LinkedList();
months.push("january");
months.push("february");
months.push("march");
months.reverse();
console.log(months.print());