class heap{
    constructor(){
        this.heap = []
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
        let temp = i1;
        i1 = i2
        i2 = temp;
    }

    insert(value){
        let current = this.heap[this.getparent]
        this.heap[this.heap.length-1] = value;

    }


}