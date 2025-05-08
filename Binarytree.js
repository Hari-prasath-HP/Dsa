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
        return this.root==null;
    }
    
    insert(key){
        let node = new Node(key)
        if(this.isEmpty()){
            this.root = Node;
        }else this.insertValue(this.root,node)
    }

    insertValue(root,node){
        if(node.value<root.value){
            if(root.left == null){
                root.left = node;
            }else this.insertValue(root.left,node)
        }else{
            if(root.right == null){
                root.right = node;
            }else this.insertValue(root.right,node)
        }
    }
    
    search(root,value){
        if(!root){
            return false;
        }else{
            if(root.value == value){
                return true;
            }else if(root.value < value){
                return this.search(root.left, value);
            }else return this.search(root.right,value)
        }
        
    }
}

let bst = new Bst()
console.log(bst.isEmpty())
bst.insert(20)
console.log(bst.isEmpty())
console.log(bst.search(20))