class Graph{
    constructor(){
        this.adjacencyList = {}
    }

    insert(vertex){
        if(!this.adjacencyList[vertex]){
            this.adjacencyList[vertex] = new Set()
        }
    }

    addEdge(vertex1,vertex2){
        if(!this.adjacencyList[vertex1]){
            this.insert(vertex1)
        }
        if(!this.adjacencyList[vertex2]){
            this.insert(vertex2)
        }
        this.adjacencyList[vertex1].add(vertex2)
        this.adjacencyList[vertex2].add(vertex1)
    }

    display(){
        for(let vertex in this.adjacencyList){
console.log(vertex + "-" + [...this.adjacencyList[vertex]])
        }
        
    }

}

let graph = new Graph()
graph.insert("A")
graph.insert("B")
graph.insert("C")
graph.addEdge("A","B")
graph.addEdge("A","C")
graph.display()