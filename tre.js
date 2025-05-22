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
            }
            current = current.children[char];
        }
        current.isend = true;
    }

    search(word){
        let current = this.root;
        for(let char of word){
            if(!current.children[char]){
                return false;
            }
            current = current.children[char]
        }
        return current.isend
    }

    suggest(word){
        let current = this.root
        for(let char of word){
            if(!current.children[char]){
                return []
            }
            current = current.children[char];
        }
        let suggestion = []
        let dfs = (node,word)=>{
            if(node.isend){
                suggestion.push(word)
            }
            for(let char in node.children){
                dfs(node.children[char],word+char)
            }
        }
        dfs(current,word)
        return suggestion 
    }
}

let tre = new Trie()
tre.insert("cat")
tre.insert("cap")
tre.insert("cammel")
tre.insert("cops")
console.log(tre.search("cammel"))
console.log(tre.suggest(""))
