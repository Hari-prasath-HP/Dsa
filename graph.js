    class Graph{
        constructor(){
            this.adjacencyList = {}
        }

        addVertex(vertex){
            if(!this.adjacencyList[vertex]){
                this.adjacencyList[vertex] = {}
            }
        }

        addEdge(vertex1,vertex2,weight=1){
            if(!this.adjacencyList[vertex1]){
                this.addVertex(vertex1)
            }
            if(!this.adjacencyList[vertex2]){
                this.addVertex(vertex2)
            }
            this.adjacencyList[vertex1][vertex2] = weight
            this.adjacencyList[vertex2][vertex1] = weight
        }

        hasEdge(vertex1,vertex2){
            return(
               vertex2 in this.adjacencyList[vertex1]&&
               vertex1 in this.adjacencyList[vertex2]
            )
        }

        removeEdge(vertex1,vertex2){
            this.adjacencyList[vertex1].delete(vertex2)
            this.adjacencyList[vertex2].delete(vertex1)
        }

        removevertex(vertex){
            if(!this.adjacencyList[vertex])return;
            for(let adjacentvertex of this.adjacencyList[vertex]){
                this.removeEdge(vertex,adjacentvertex)
            }
            delete this.adjacencyList[vertex]
        }

        dfs(stvertex){
            
        }
        display(){
            for(let vertex in this.adjacencyList){
                console.log(vertex + "->" ,this.adjacencyList[vertex])
            }
        }
    }

    const graph = new Graph()
    graph.addVertex("A")
    graph.addVertex("B")
    graph.addVertex("C")
    graph.addEdge("A","B",3)
    graph.addEdge("B","C",6)
    graph.display()
    // graph.removevertex("C")
    graph.display()