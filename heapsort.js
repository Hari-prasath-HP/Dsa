class Heap{
    constructor() {
        this.data = []
    }
    getParent(i){return Math.floor((i-1)/2)}
    getLeft(i){return 2*i+1}
    getRight(i){return 2*i+2}
    swap(i1,i2){
        [this.data[i1],this.data[i2]] = [this.data[i2],this.data[i1]]
    }
    insert(key){
        this.data[this.data.length] = key
        this.heapifyUp()
    }
    heapifyUp(){
        let curr = this.data.length-1
        while(curr > 0 && this.data[curr] < this.data[this.getParent(curr)]){
            this.swap(curr,this.getParent(curr))
            curr = this.getParent(curr)
        }
    }
    remove(){
        if(this.data.length === 0)return 
        let max = this.data[0]
        if(this.data.length === 1){
            this.data.pop()
        }else{
            this.data[0] = this.data.pop()
            this.heapifyDown(0)
        }return max
    }
    heapifyDown(i){
        let largest = i
        let left = this.getLeft(i)
        let right = this.getRight(i)
        if(left < this.data.length && this.data[left] < this.data[largest]){
            largest = left
        }
        if(right < this.data.length && this.data[right] < this.data[largest]){
            largest = right
        }
        if(largest !== i){
            this.swap(i,largest)
            this.heapifyDown(largest)
        }
    }
}
function sort(arr){
    let heapsort = new Heap()
    for(let num of arr){
        heapsort.insert(num)
    }
    let sorted = []
    while(heapsort.data.length){
        sorted.push(heapsort.remove())
    }
    return sorted
}
let heapsort = new Heap()
let arr = [5,9,2,6,7,1]
console.log(sort(arr))