class Node{
    constructor(){
        this.children = {}
        this.endofword = false;
    }
}

class Trie{
    constructor(){
        this.root = new Node()
    }

    insert(word){
        let curr = this.root;
        for(let char of word){
            if(!curr.children[char]){
                curr.children[char] = new Node()
            }
            curr = curr.children[char]
        }
        curr.endofword = true
    }

    autocomplete(prefix){
        let curr = this.root;
        for(let char of prefix){
            if(!curr.children[char]){
                return [];
            }
            
        }
    }
}

const trie = new Trie()
trie.insert("cat")
trie.insert("cattle")
console.log(trie.autocomplete("ca"))