class Node{
    constructor(){
        this.children = {}
        this.isend = false;
    }
}

class Trie{
    constructor(){
        this.root = new Node()
    }

    insert(word){
        let current = this.root;
        for(let char of word){
            if(!current.children[char]){
                current.children[char] = new Node()
            }current = current.children[char]
        }
        current.isend = true;
    }
    suggest(word){
        let current = this.root
        for(let char of word){
            if(!current.children){
                return []
            }current = current.children[char]
        }
        let suggestions = []
        let dfs = (node,path) =>{
            if(node.isend){
                suggestions.push(path)
            }
            for(let char in node.children){
                dfs(node.children[char],path+char)
            }
        }
        dfs(current,word)
        return suggestions
    }
}

const trie = new Trie();

trie.insert("cat");
trie.insert("can");
trie.insert("cap");
trie.insert("cold")
console.log(trie.suggest("c"))