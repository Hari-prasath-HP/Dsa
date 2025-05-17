class Node{
    constructor(value){
        this.value =value;
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
        }else{
            this.insertNode(this.root,node)
        }
    }

    insertNode(root,node){
        if(node.value<root.value){
            if(root.left == null){
                root.left = node;
            }else this.insertNode(root.left,node)
        }else {
            if(root.right == null){
                root.right = node;
            }else this.insertNode(root.right,node)
        }
    }

    thirdlargest(value){
        if(this.root == null)return false;
        let k = 0;
        if(this.root.right)
    }
}

let bst = new Bst()

bst.insert(25)
bst.insert(35)
bst.insert(15)