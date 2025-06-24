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
        this.heapifyUp()
    }
    heapifyUp(){
        let curr = this.data.length-1
        while(curr>0 && this.data[curr] < this.data[this.getparent(curr)]){
            this.swap(curr,this.getparent(curr))
            curr = this.getparent(curr)
        }
    }
    remove(){
        if(this.data.length === 0)return null
        let max = this.data[0]
        if(this.data.length===1){
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
    let heap = new Heap()
    for(let num of arr){
        heap.insert(num)
    }
    let sorted = []
    while(heap.data.length){
        sorted.push(heap.remove())
    }return sorted
}
function ismin(arr){
    let n = arr.length
    for(let i=0;2*i+1<n;i++){
        let left = 2 * i + 1
        let right = 2 * i + 2
        if(left<n && arr[i]>arr[left])return false
        if(right<n && arr[i]>arr[right])return false
    }return true
}
function kthlargest(arr,k){
    let heap = []
    for(let i=0;i<arr.length;i++){
        heap.push(arr[i])
        heap.sort((a,b)=>a-b)
        if(heap.length > k){
            heap.shift()
        }
    }return heap[0]
}
let heap = new Heap()
heap.insert(82)
heap.insert(19)
heap.insert(90)
heap.insert(10)
heap.insert(47)
console.log(heap.data.join(','))
console.log(ismin([10,19,90,82,47]))
console.log(sort([82,19,10,47,90]))
console.log(kthlargest([10,19,90,82,47],4))