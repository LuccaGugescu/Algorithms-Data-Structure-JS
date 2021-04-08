const Node = require("./Node");

class doublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val) {
        let newNode = new Node(val);
        if(this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;
        return true;
    }
    pop() {
        if (this.length === 0) return undefined;
        else if(this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = this.tail.prev;
            this.tail.next = null;

        }
        this.length--;
        return true;
    }
    unShift(val) {
        let newNode = new Node(val);
        if(this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
        } 
        else {
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return true;
    }
    shift() {
        if (this.length === 0) return undefined;
        const newHead = this.head.next;
        this.head.next = null;
        newHead.prev = null;
        this.head = newHead;
        this.length--;
        return true;
    }
    get(index) {
        if(index > this.length || index < 0) return undefined;
        let currentNode = this.head;
        for(let i = 0; i < index; i++) {
            currentNode = currentNode.next;
        }
        return currentNode;
    }
    set(index, value) {
        const foundNode = this.get(index);
        if(foundNode) {
            foundNode.val = value;
            return true;
        }
        return false;
    }
    insert(index, val) {
        if(index > this.length || index < 0) return undefined;
        if(index === 0) {
            this.unShift(val);
            return true;
        } 
        if(index === this.length) {
            this.push(val);
            return true;
        } 
        let newNode = new Node(val);
        let oldNode = this.get(index);
        let prev = oldNode.prev;
        let next = oldNode.next;
        newNode.prev = prev;
        newNode.next = oldNode;
        oldNode.prev = newNode;
        next.prev = newNode;
        prev.next = newNode;
        this.length++;
        return true;
    }
    remove(index) {
        if(index > this.length || index < 0) return undefined;
        if(index === 0) {
            this.shift();
        } else {
            let oldNode = this.get(index);
            let nextNode = oldNode.next;
            let prevNode = oldNode.prev;
            oldNode.next = null;
            oldNode.prev = null;
            prevNode.next = nextNode;
            nextNode.prev = prevNode;
        }
        this.length--;
        return true;
    }
    print() {
        let string = "<head> ";
        let currentNode = this.head;
        for(let i = 0; i < this.length; i++) {
            string += currentNode.val + " ";
            currentNode = currentNode.next;
        }
        string += "<tail>";
        console.log(string);
    }
}

let months = new doublyLinkedList();
months.push("hello");
months.unShift("moh");
months.push("hey");
months.push("ha");
months.push("f");

months.print();
