class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
    setValue(value) {
        this.val = value;
    }
    getData() {
        return this.val;
    }
}
module.exports = Node;