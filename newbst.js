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
        let node = new Node(value)
        if(this.isEmpty()){
            this.root = node;
        }else this.insertnode(this.root,node)
    }

    insertnode(root,node){
        if(node.value < root.node){
            if(root.left == null){
                root.left = node
            }else this.insertnode(root.left,node)
        }else{
            if(root.right == null){
                root.right = node;
            }else this.insertnode(root.right, node)
        }
    }

    search(root,value){
        if(!root)return false;
        if(root.value == value){
            return true;
        }else if(value < root.value){
            return this.search(root.left,value)
        }else return this.search(root.right,value)
    }

    preorder(root){
        if(root){
            console.log(root.value);
            this.preorder(root.left);
            this.preorder(root.right)
        }
    }

    count(root){
        if(!root)return 0;
        return 1 + this.count(root.left) + this.count(root.right)
    }
    sum(root){
        if(!root){
            return 0
        }
        return root.value + this.sum(root.left) + this.sum(root.right)
    }
}

const bst = new Bst()
console.log(bst.isEmpty())

bst.insert(20)
bst.insert(25)
bst.insert(15)
console.log(bst.search(bst.root,20))
console.log(bst.isEmpty())
bst.preorder(bst.root)
console.log(bst.count(bst.root))
console.log(bst.sum(bst.root))
