class Node{
    constructor(value){
        this.value = value
        this.left = null
        this.right = null
    }
}
class Bt{
    constructor(){
        this.root = null
    }
    isEmpty(){
        return this.root === null
    }
    insert(value){
        let node = new Node(value)
        if(this.isEmpty()){
            this.root = node
        }else{
            let queue = [this.root]
            while(queue.length){
                let curr = queue.shift()
                if(!curr.left){
                    curr.left = node
                    return
                }else queue.push(curr.left)
                if(!curr.right){
                    curr.right = node
                    return
                }else queue.push(curr.right)
            }
        }
    }
    bfs(){
        let result = []
        let queue = []
        if(this.root) queue.push(this.root)
        while(queue.length){
            let levelsize = queue.length
            let level = []
            for(let i=0;i<levelsize;i++){
                let node = queue.shift()
                level.push(node.value)
                if(node.left)queue.push(node.left)
                if(node.right)queue.push(node.right)
            }result.push(level)
        }return result
    }
    dfs(){
        let result = []
        let stack = []
        if(this.root)stack.push(this.root)
        while(stack.length){
            let node = stack.pop()
            result.push(node.value)
            if(node.left)stack.push(node.left)
            if(node.right)stack.push(node.right)
        }return result
    }
}

let bt = new Bt()
bt.insert(76)
bt.insert(91)
bt.insert(73)
bt.insert(28)
console.log(bt.bfs())
console.log(bt.dfs())