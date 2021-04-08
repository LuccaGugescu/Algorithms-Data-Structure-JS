class HashTable {
    constructor(size = 53) {
        this.table = new Array(size);
    }
    
    _hash(key) {
        let total = 0;
        const WEIRDN = 31;
        for(let i = 0; i < Math.min(key.length, 100); i++) {
            let value = key[i].charCodeAt(0) - 96;
            total = (total + WEIRDN + value) % this.table.length;
        }
        return total;
    }
    set(key, value) {
        const id = this._hash(key);
        if(!this.table[id]) {
            this.table[id] = [];
        }
        this.table[id].push([key, value]);
    }
    get(key) {
        const id = this._hash(key);
        for(let i = 0; i < this.table[id].length; i++) {
            if(this.table[id][i][0] === key) {
                return this.table[id][i][1];
            }
        }
        return undefined;
    }
    values() {
        let values = [];
        for(let i = 0; i < this.table.length; i++) {
            if(this.table[i]) {
                for(let j = 0; j < this.table[i].length; j++) {
                    if(!(this.table[i][j][1] in values)) {
                    values.push(this.table[i][j][1]);
                    }
                }
            }
        }
        return values;
    }
    keys() {
        let keys = [];
        for(let i = 0; i < this.table.length; i++) {
            if(this.table[i]) {
                for(let j = 0; j < this.table[i].length; j++) {
                    if(!(this.table[i][j][0] in keys)) {
                    keys.push(this.table[i][j][0]);
                    }
                }
            }
        }
        return keys;
    }

}

let table = new HashTable();
table.set("pink", 12);
table.set("orange", 13);
console.log(table.values());
console.log(table.keys());