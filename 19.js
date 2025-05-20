class Heap{
    constructor(){
        this.data = []
    }
    getparent(i){
        return Math.floor((i-1)/2)
    }
    getleft(i){
        return i*2+1
    }
    getright(i){
        return i*2+2
    }
    swap(i1,i2){
        let temp = this.data[i1]
        this.data[i1] = this.data[i2]
        this.data[i2] = temp
    }
    push(key){
        this.data[this.data.length] = key;
        this.heapifyup()
    }
    heapifyup(){
        let current = this.data.length-1;
        while(this.data[current] < this.data[this.getparent(current)]){
            this.swap(current,this.getparent(current))
            current = this.getparent(current)
        }
    }
    buildHeap(arr){
        this.data = arr;
        for(let i=Math.floor(this.data.length/2)-1;i>=0;i--){
            this.heapifydown(i)
        }
    }
    heapifydown(i){
        let largest = i;
        let left = this.getleft(i)
        let right = this.getright(i)
        if(left < this.data.length && this.data[left]<this.data[largest]){
            largest = left;
        }
        if(right < this.data.length && this.data[right]<this.data[largest]){
            largest = right;
        }
        if(largest!==i){
            this.swap(i,largest);
            this.heapifydown(largest)
        }
    }
    pop(){
        if(this.data.length == 0) return null;
        let max = this.data[0];
        this.data[0] = this.data[this.data.length-1];
        this.data.pop()
        this.heapifydown(0);
        return max
    }
}
let heap = new Heap();
heap.push(40)
heap.push(20)
heap.push(50)
heap.push(10)
console.log(heap.data)
let sorted = []
while(heap.data.length > 0){
    sorted.push(heap.pop())
}
console.log(sorted)