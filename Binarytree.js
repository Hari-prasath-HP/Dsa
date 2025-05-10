class Node{
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class Bst{
    constructor(){
        this.root = null;
    }

    isEmpty(){
        return this.root == null;
    }

    insert(value){
        let node = new Node(value);
        if(this.isEmpty()){
            this.root = node;
        }else this.insertnode(this.root,node)
    }

    insertnode(root,node){
        if(node.value < root.value){
            if(root.left == null){
                root.left = node;
            }else this.insertnode(root.left,node)
        }else{
            if(root.right == null){
                root.right = node;
            }else this.insertnode(root.right,node)
        }
    }

    search(root,value){
        if(!root){
            return false;
        }else{
            if(root.value == value){
                return true;
            }else if(value<root.value){
                return this.search(root.left,value)
            }else return this.search(root.right,value)
        }
    }

    preorder(root){
        if(root){
            console.log(root.value);
            this.preorder(root.left)
            this.preorder(root.right)
        }
    }

    depth(root){
        if(root === null){
            return null;
        }
        const left = this.depth(root.left)
        const right = this.depth(root.right)
        return Math.max(left,right)+1
    }

    minimum(root){
        if(root === null)return null;
        while(root.left != null){
            root = root.left;
        }return root.value
    }

    maximum(root){
        if(root === null)return null;
        while(root.right !== null){
            root = root.right
        }return root.value
    }

    count(root){
        if(!root)return 0;
        return 1 + this.count(root.left)+this.count(root.right)
    }
}




const bst = new Bst()
bst.insert(25)
bst.insert(22)
bst.insert(24)
bst.insert(35)
bst.insert(15)
bst.insert(30)
console.log(bst.isEmpty())
console.log(bst.search(bst.root,24))
console.log(bst.search(bst.root,25))
console.log(bst.search(bst.root,22))
console.log(bst.search(bst.root,15))
console.log(bst.search(bst.root,44))
bst.preorder(bst.root)
console.log(bst.depth(bst.root))
console.log(bst.minimum(bst.root))
console.log(bst.maximum(bst.root))
console.log(bst.count(bst.root))