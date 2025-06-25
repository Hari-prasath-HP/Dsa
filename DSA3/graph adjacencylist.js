class Graph{
    constructor(){
        this.adjacencylist = {}
    }

    addvertex(vertex){
        if(!this.adjacencylist[vertex]){
            this.adjacencylist[vertex] = new Set()
        }
    }

    addEdge(vertex1,vertex2){
        if(!this.adjacencylist[vertex1]){
            this.addvertex(vertex1)
        }
        if(!this.adjacencylist[vertex2]){
            this.addvertex(vertex2)
        }
        this.adjacencylist[vertex1].add(vertex2)
        this.adjacencylist[vertex2].add(vertex1)
    }

    hasEdge(vertex1,vertex2){
        return (
            this.adjacencylist[vertex1].has(vertex2) &&
            this.adjacencylist[vertex2].has(vertex1)
        )
    }

    removeedge(vertex1,vertex2){
        this.adjacencylist[vertex1].delete(vertex2)
        this.adjacencylist[vertex2].delete(vertex1)
    }

    removeVertex(vertex){
        if(!this.adjacencylist[vertex])return;
        for(let adjacentVertex of this.adjacencylist[vertex]){
            this.removeedge(vertex,adjacentVertex)
        }
        delete this.adjacencylist[vertex]
    }

    dfs(startvertex){
        let visited = new Set()

        const dfshelper = (vertex) => {
            if(!vertex)return;
            visited.add(vertex);
            console.log(vertex)

            for(let neighbor of this.adjacencylist[vertex]){
                if(!visited.has(neighbor)){
                    dfshelper(neighbor)
                }
            }
        }
        dfshelper(startvertex)
    }

    bfs(stvertex){
        let visited = new Set()
        let queue = [stvertex]
        visited.add(stvertex)

        while(queue.length>0){
            let vertex = queue.shift()
            console.log(vertex)

            for(let neighbor of this.adjacencylist[vertex]){
                if(!visited.has(neighbor)){
                    visited.add(neighbor)
                    queue.push(neighbor)
                }
            }
        }                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           
    }
    display(){
        for(let vertex in this.adjacencylist){
            console.log(vertex + "->" + [...this.adjacencylist[vertex]])
        }
    }

    reverse() {
        const reversedGraph = new Graph();

        for (let vertex in this.adjacencylist) {
            for (let neighbor of this.adjacencylist[vertex]) {
                reversedGraph.addEdge(neighbor, vertex); // reverse direction
            }
        }

        return reversedGraph;
    }
    hasCycle() {
    const visited = new Set();

    const dfs = (vertex, parent) => {
        visited.add(vertex);

        for (let neighbor of this.adjacencylist[vertex]) {
            if (!visited.has(neighbor)) {
                if (dfs(neighbor, vertex)) {
                    return true;
                }
            } else if (neighbor !== parent) {
                return true; // Found a back-edge (cycle)
            }
        }

        return false;
    };

    for (let vertex in this.adjacencylist) {
        if (!visited.has(vertex)) {
            if (dfs(vertex, null)) {
                return true; // Found a cycle
            }
        }
    }

    return false; // No cycles
}

}

const graph = new Graph()
graph.addvertex("A")
graph.addvertex("B")
graph.addvertex("C")
graph.addvertex("D")
graph.addEdge("A","B")
graph.addEdge("A","C")
graph.addEdge("B","D")
graph.display()
// console.log(graph.hasEdge("A","B"))
// graph.removeedge("A","B")
graph.display()
// graph.removeVertex("A")
graph.display()
graph.dfs("A")
graph.bfs("A")

let a = graph.reverse()
console.log(a)