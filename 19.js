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

    isempty(){
        return this.root == null;
    }

    insert(value){
        let node = new Node(value)
        if(this.isempty()){
            this.root = node;
        }else this.insertnode(this.root,node)
    }

    insertnode(root,node){
        if(node.value<root.value){
            if(!root.left){
                root.left = node;
            }else this.insertnode(root.left,node)
        }else{
            if(!root.right){
                root.right = node;
            }else this.insertnode(root.right,node)
        }
    }

    search(root,value){
        if(!root){
            return false
        }else{
            if(root.value === value){
                return true
            }else if(value<root.value){
                this.search(root.left,value)
            }else this.search(root.right,value)
        }
    }

    largest(k){
        let values = []
        function inorder(node){
            if(!node)return
            inorder(node.left)
            values.push(node.value)
            inorder(node.right)
        }
        inorder(this.root)
        return values[values.length-k]
    }
}

const bst = new Bst()

bst.insert(25)
bst.insert(15)
bst.insert(35)
bst.insert(10)
bst.insert(55)
console.log(bst.largest(2))