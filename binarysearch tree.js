class Node{
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class Binarysearchtree{
    constructor(){
        this.root = null;
    }

    isEmpty(){
        return this.root == null
    }

    insert(value){      
        const node = new Node(value);
        if(this.isEmpty()){
            this.root = node;
        }else {
            this.insertnode(this.root,node)
        }
    }

    insertnode(root,node){
        if(node.value<root.value){
            if(root.left == null){
                root.left = node
            }else{
                this.insertnode(root.left,node)
            }
        }else{
            if(root.right == null){
                root.right = node
            }else{
                this.insertnode(root.right,node)
            }
        }
    }

    search(root,value){
        if(!root){
            return false;
        }else {
            if(root.value === value){
                return true;
            }else if(value < root.value){
                return this.search(root.left , value)
            }else{
                return this.search(root.right,value)
            }
        }
    }

    proorder(root){
        if(root){
            console.log(root.value);
            this.proorder(root.left)
            this.proorder(root.right)
        }
    }

    inorder(root){
        if(root){
            this.inorder(root.left)
            console.log(root.value)
            this.inorder(root.right)
        }
    }

    postorder(root){
        if(root){
            this.postorder(root.left)
            this.postorder(root.right)
            console.log(root.value)
        }
    }
}

const bst = new Binarysearchtree()
console.log(bst.isEmpty())

bst.insert(10)
bst.insert(5)
bst.insert(15)
bst.insert(7)
bst.insert(3)

console.log(bst.search(bst.root,10))
console.log(bst.search(bst.root,5))
console.log(bst.search(bst.root,15))

bst.postorder(bst.root)
