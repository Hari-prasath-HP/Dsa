class Heap {
    constructor(){
        this.data = []
    }

    getparent(i){
        return Math.floor((i-1)/2)
    }

    getleft(i){
        return i * 2 + 1
    }

    getright(i){
        return i * 2 + 2
    }

    swap(i1,i2){
        let temp = this.data[i1]
        this.data[i1] = this.data[i2]
        this.data[i2] = temp;
    }

    push(key){
        this.data[this.data.length] = key
        this.heapify()
    }

    heapify(){
        let current = this.data.length-1;
        while(this.data[current] > this.data[this.getparent(current)]){
            this.swap(current,this.getparent(current))
            current = this.getparent(current)
        }
    }
}

const heap = new Heap()
console.log(heap)
heap.push(25)
heap.push(90)
heap.push(55)
heap.push(43)
console.log(heap.data.join(','))
