class Graph{
    constructor(){
        this.adjacencylist = {}
    }

    addvertex(vertex){
        if(!this.adjacencylist[vertex]){
            this.adjacencylist[vertex] = new Set()
        }
    }

    addedge(vertex1,vertex2,weight = 1){
            this.adjacencylist[vertex1];
            this.adjacencylist[vertex2]
            this.adjacencylist[vertex1][vertex2] = weight;
    }

    display(){
        for(let vertex in this.adjacencylist){
            
        }
    }
}