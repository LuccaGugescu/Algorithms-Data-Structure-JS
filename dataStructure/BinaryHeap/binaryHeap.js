class BinaryHeap {
    constructor() {
     this.binary = [];   
    }
    insert(data) {
        this.binary.push(data);
        this.bubbleUp()
        return true;
    }
    bubbleUp() {
        var idx = this.binary.length - 1;
        var parent;
        while(true) {
            parent = Math.floor((idx - 1) / 2);
            if(this.binary[idx] > this.binary[parent]) {
                let temp = this.binary[idx];
                this.binary[idx] = this.binary[parent];
                this.binary[parent] = temp;
                idx = parent;
            } else {
                return true;
            }
        }
    }
    extractMax() {
        // swap the first with the last so the remove complexity become O(2)
        const max = this.binary[0];
        const end = this.binary.pop();
        if(this.binary.length > 0) {
            this.binary[0] = end;
            this.syncDown();
        }
        return max;
    }
    syncDown() {
        let i = 0;
        const len = this.binary.length-1;
        let swap;
        while(true) {
            swap = null;
            let leftChild = 2 * i + 1;
            let rightChild = leftChild + 1;
            if(leftChild < len) {
                if(this.binary[leftChild] > this.binary[i]) {
                    swap = leftChild;
                }
            }
            if(rightChild < len) {
                if((this.binary[rightChild] > this.binary[i] && swap === null) || 
                (swap !== null && this.binary[rightChild] > this.binary[leftChild])) {
                    swap = rightChild;
                }
            }
            if(swap === null) return;
            let temp = this.binary[i];
            this.binary[i] = this.binary[swap];
            this.binary[swap] = temp;
            i = swap;
        }
    }
}

const tree = new BinaryHeap();
tree.insert(12);
tree.insert(33);
tree.insert(25);
tree.insert(39);
tree.insert(13);
tree.insert(41);
tree.insert(100);
tree.insert(101);
tree.extractMax();
tree.extractMax();
tree.extractMax();
tree.extractMax();
tree.extractMax();
tree.extractMax();
console.log(tree.extractMax());
console.log(tree.binary);