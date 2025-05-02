class Queue{
    constructor(){
        this.item  = []
    }

    enqueue(element){
        this.item.push(element)
    }

    dequeue(){
        return this.item.shift()
    }

    isEmpty(){
        return this.item.length == 0
    }
    peek(){
        if(!this.isEmpty()){
            return this.item[0]
        }
        return null
    }

    size(){
        return this.item.length
    }

    print(){
        console.log(this.item.toString())
    }
}

function reverse(str){
    const queue = new Queue;
    let string = []
    for(let char of str){
        queue.enqueue(char)
    }
    while(!queue.isEmpty()){
        string.push(queue.dequeue())
    }
    let reversed = ""
    while(string.length>0){
        reversed += string.pop()
    }
    return reversed
}

let str = "hello"
console.log(reverse(str))
