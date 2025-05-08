class heap{
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
        this.data[this.data.length] = key
        this.heapify()
    }

    heapify(){
        let current = this.data.length-1;
        
    }
}