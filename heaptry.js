class Heap{
    constructor(){
        this.data = []
    }

    getparent(i){
        return Math.floor((i-1)/2)
    }

    left(i){
        return i*2+1
    }
    right(i){
        return i*2+2
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
        let current = this.data.length-1
        while(current >0 && this.data[current] > this.data[this.getparent(current)]){
            this.swap(current,this.getparent(current));
            current = this.getparent(current)
        }
    }
}

const heap = new Heap()
heap.push(30)
heap.push(20)
heap.push(45)
heap.push(50)
heap.push(15)
console.log(heap.data.join(','))