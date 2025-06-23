class Node{
    constructor(value){
        this.value = value
        this.left = null
        this.right = null
    }
}
class Bst{
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
            this.insertNode(this.root,node)
        }
    }
    insertNode(root,node){
        if(node.value < root.value){
            if(root.left === null){
                root.left = node
            }else this.insertNode(root.left,node)
        }else{
            if(root.right === null){
                root.right = node
            }else this.insertNode(root.right,node)
        }
    }
    largest(k){
        let count = 0
        let result = null
        function reverse(node){
            if(!node || count >=k)return
            reverse(node.right)
            count++
            if(count === k){
                result = node.value
                return
            }
            reverse(node.left)
        }
        reverse(this.root)
        return result
    }
    smallest(k){
        let count = 0
        let result = null
        function reverse(node){
            if(!node || count >=k){
                return 
            }
            reverse(node.left)
            count++
            if(count === k){
                result = node.value
                return
            }
            reverse(node.right)
        }
        reverse(this.root)
        return result
    }
    countleft(root = this.root){
        let count = 0
        if(!root)return 0
        if(root.left){
            count+=1
            count+=this.countleft(root.left)
        }
        count+=this.countleft(root.right)
        return count
    }
    height(root = this.root){
        if(!root)return -1
        let left = this.height(root.left)
        let right = this.height(root.right)
        return 1 + Math.max(left,right)
    }
    sum(root = this.root){
        if(!root)return 0
        return root.value + this.sum(root.left) + this.sum(root.right)
    }
    bfs(){
        let result = []
        let queue = []
        if(this.root)queue.push(this.root)
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
            if(node.right)stack.push(node.right)
            if(node.left)stack.push(node.left)
        }return result
    }
    countleftsubnodes(root = this.root.left){
        if(!root)return 0
        let count = 1
        count+=this.countleftsubnodes(root.left)
        count+=this.countleftsubnodes(root.right)
        return count
    }
    delete(value){
        this.root = this.deleteValue(this.root,value)
    }
    deleteValue(root,value){
        if(!root)return null
        if(value < root.value){
            root.left = this.deleteValue(root.left,value)
        }else if(value > root.value){
            root.right = this.deleteValue(root.right,value)
        }else{
            if(!root.left && !root.right){
                return null
            }
            if(!root.left){
                return root.right
            }
            if(!root.right){
                return root.left
            }
            let minnode = this.findmin(root.right)
            root.value = minnode.value
            root.right = this.deleteValue(root.right,minnode.value)  
        }return root
    }
    findmin(node){
        while(node.left){
            node = node.left
        }return node
    }
    isBst(root,min = -Infinity,max = Infinity){
        if(!root)return true
        if(root.value<=min ||  root.value >= max)return false
        return this.isBst(root.left,min,root.value) &&
        this.isBst(root.right,root.value,max)
    }
    isBalanced(root = this.root){
        let check = (node) => {
            if(!node) return 0
            let left = check(node.left)
            if(left === -1)return -1
            let right = check(node.right)
            if(right === -1)return -1
            if(Math.abs(left-right)>1)return -1
            return 1 + Math.max(left,right)
        }
        return check(root) !== -1
    }
    findDuplicate(){
        let map = new Map()
        function inorder(node){
            if(!node)return
            inorder(node.left)
            map.set(node.value,(map.get(node.value)||0)+1)
            inorder(node.right)
        }
        inorder(this.root)
        let duplicates = []
        for(let [key,val] of map.entries()){
            if(val > 1){
                duplicates.push(key)
            }
        }return duplicates
    }
    deleteduplicates(){
        let map = new Map()
        function inorder(node){
            if(!node)return
            inorder(node.left)
            map.set(node.value,(map.get(node.value)||0)+1)
            inorder(node.right)
        }
        inorder(this.root)
        for(let [key,val] of map.entries()){
            if(val > 1){
                this.delete(key)
            }
        }
    }
}

let bst = new Bst()
bst.insert(63)
bst.insert(41)
bst.insert(20)
bst.insert(82)
bst.insert(41)
bst.insert(20)
console.log(JSON.stringify(bst))
console.log(bst.largest(3))
console.log(bst.smallest(1))
console.log(bst.countleft())
console.log(bst.height())
console.log(bst.sum())
console.log(bst.bfs())
console.log(bst.dfs())
console.log(bst.countleftsubnodes())
bst.delete(20)
console.log(JSON.stringify(bst))
console.log(bst.isBst(bst.root))
console.log(bst.isBalanced())
console.log(bst.findDuplicate())
bst.deleteduplicates()
console.log(bst.findDuplicate())