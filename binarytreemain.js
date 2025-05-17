class BinaryNode{
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class Binarytree{
    constructor(){
        this.root = null;
    }

    isEmpty(){
        return this.root === null;
    }

    insert(value){
        let node = new BinaryNode(value)
        if(this.isEmpty()){
            this.root = node;
            return;
        }
        let queue = [this.root];
        while(queue.length){
            let curr = queue.shift()
            if(!curr.left){
                curr.left = node;
                return
            }else {
                queue.push(curr.left)
            }
            if(!curr.right){
                curr.right = node;
                return 
            }else{
                queue.push(curr.right)
            }
        }
    }

    height(node = this.root){
        if(node === null){
            return -1
        }
        let left = this.height(node.left)
        let right = this.height(node.right)
        return 1 + Math.max(left,right)
    }
}

const bt = new Binarytree()

bt.insert(20)
bt.insert(45)
bt.insert(15)
bt.insert(5)
console.log(bt.isEmpty())
console.log(JSON.stringify(bt.root, null, 2));
console.log(bt.height())