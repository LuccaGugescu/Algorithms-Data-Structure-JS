class Node {
    constructor(val) {
        this.next = null;
        this.prev = null;
        this.val = val;
    }
    setVal(value) {
        this.val = value;
    }
}
module.exports = Node;