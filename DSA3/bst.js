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
        }else{
        this.insertNode(this.root,node)
        }
    }

    insertNode(root,node){
        if(node.value<root.value){
            if(!root.left){
                root.left = node;
            }else this.insertNode(root.left,node)
        }else{
            if(!root.right){
                root.right = node;
            }else this.insertNode(root.right,node)
        }
    }

    findlargest(k){
        let count = 0;
        let result = null;
        function reversal(node){
            if(!node || count > k)return ;
            reversal(node.right)
            count++;
            if(count == k){
                result = node.value;
                return;
            }
            reversal(node.left);
        }
        reversal(this.root)
        return result
    }

    delete(value){
        this.root = this.deletenode(this.root,value)
    }

    deletenode(root,value){
        if(!root)return null;
        if(value<root.value){
            root.left = this.deletenode(root.left,value)
        }else if(value > root.value){
            root.right = this.deletenode(root.right,value)
        }else {
            if(!root.left && !root.right){
                return null;
            }
            if(!root.left)return root.right
            if(!root.right)return root.left
            let minnode = this.findmin(root.right)
            root.value = minnode.value;
            root.right = this.deletenode(root.right,minnode.value)
        }
        return root
    }
    findmin(node){
        while(node.left){
            node = node.left;
        }return node;
    }
}

let bst = new Bst()
bst.insert(30)
bst.insert(46)
bst.insert(19)
bst.insert(15)
bst.insert(25)
bst.insert(26)
bst.insert(12)
bst.delete(26)
console.log(bst.findlargest(3))
