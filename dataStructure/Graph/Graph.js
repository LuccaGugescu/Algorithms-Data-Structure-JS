const Queue = require("../queue/Queue");
class Graph {
    constructor() {
        this.adjanceyList = {};
    }
    addVertex(vertex) {
        if(!this.adjanceyList[vertex]) 
            this.adjanceyList[vertex] = [];
    }
    addEdge(vertex1, vertex2) {
        if(!this.adjanceyList[vertex1][vertex2]) 
            this.adjanceyList[vertex1].push(vertex2);
        
        if(!this.adjanceyList[vertex2][vertex1]) 
            this.adjanceyList[vertex2].push(vertex1);
    }
    removeEdge(vertex1, vertex2) {
        this.adjanceyList[vertex1] = this.adjanceyList[vertex1].filter(i => i !== vertex2);
        this.adjanceyList[vertex2] = this.adjanceyList[vertex2].filter(i => i !== vertex1);
    }
    removeVertex(vertex) {
        while(this.adjanceyList[vertex].length) {
            let adjancetVertex = this.adjanceyList[vertex].pop();
            this.removeEdge(vertex, adjancetVertex);
        }
        delete this.adjanceyList[vertex];
    }
    DFS(start) {
        const result = [];
        const visited = {};
        const DFSHelper = (vertex) => {
            if(!vertex) return null;
            visited[vertex] = true;
            result.push(vertex);
            for(let neighbor of this.adjanceyList[vertex]) {
                if(!visited[neighbor]) {
                    DFSHelper(neighbor);
                }
            }
        }
        DFSHelper(start);
        return result;
    }
    BFS(start) {
        let q = new Queue();
        const visited = {};
        const result = [];
        q.enqueue(start);
        visited[start] = true;
        let vertex;
        while(q.size) {
            vertex = q.dequeue();
            result.push(vertex);
            this.adjanceyList[vertex].forEach(neighbor => {
                if(!visited[neighbor]) {
                    visited[neighbor] = true;
                    q.enqueue(neighbor);
                }
            })
        }
        return result;
    }
    DFSIterative(start) {
        const s = [start];
        const visited = {};
        const result = [];
        visited[start] = true;
        let vertex;
        while(s.length) {
            vertex = s.pop();
            result.push(vertex);
            this.adjanceyList[vertex].forEach(neighbor => {
                if(!visited[neighbor]) {
                    visited[neighbor] = true;
                    s.push(neighbor);
                }
            })
        }
        return result;
    }
}


let city = new Graph();
city.addVertex("Tokyo");
city.addVertex("Dubai");
city.addVertex("NewYork");
city.addEdge("Tokyo", "Dubai");
city.addEdge("Tokyo", "NewYork");

console.log(city.BFS("Tokyo"));