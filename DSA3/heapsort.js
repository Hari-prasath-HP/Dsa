class Heap{
    constructor(){
        this.data = []
    }
    getparent(i){return Math.floor((i-1)/2)}
    getleft(i){return 2*i+1}
    getright(i){return 2*i+2}
    swap(i1,i2){
        [this.data[i1],this.data[i2]] = [this.data[i2],this.data[i1]]
    }
    insert(key){
        this.data[this.data.length] = key
        this.heapifyup()
    }
    heapifyup(){
        let curr = this.data.length-1
        while(curr>0 && this.data[curr] > this.data[this.getparent(curr)]){
            this.swap(curr, this.getparent(curr))
            curr = this.getparent(curr)
        }
    }
    remove(){
        let max = this.data[0]
        if(this.data.length === 0){
            return null
        }
        if(this.data.length === 1){
            this.data.pop()
        }else{
            this.data[0] = this.data.pop()
            this.heapifyDown(0)
        }return max
    }
    heapifyDown(i){
        let largest = i
        let left = this.getleft(i)
        let right = this.getright(i)
        if(left < this.data.length && this.data[left] > this.data[largest]){
            largest = left
        }
        if(right < this.data.length && this.data[right] > this.data[largest]){
            largest = right
        }
        if(largest !== i){
            this.swap(i,largest)
            this.heapifyDown(largest)
        }
    }
}
function sort(arr){
    let heap = new Heap()
    for(let num of arr){
        heap.insert(num)
    }
    let sorted = []
    while(heap.data.length){
        sorted.push(heap.remove())
    }return sorted
}

const heap = new Heap()
console.log(heap)
heap.insert(25)
heap.insert(90)
heap.insert(55)
heap.insert(43)
console.log(heap.data.join(','))
console.log(sort(heap.data))