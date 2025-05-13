class Trienode{
    constructor(){
        this.children = {};
        this.end = false;
    }
}

class Trie{
    constructor(){
        this.root = new Trienode()
    }

    insert(word){
        let current = this.root;
        for(let char of word){
            if(!current.children[char]){
                current.children[char] = new Trienode()
            }
            current = current.children[char]
        }
        current.end = true
        }

    search(word){
        let current = this.root
        for(let char of word){
            if(!current.children[char]){
                return false;
            }
            current = current.children[char]
        }
        return current.end
    }
}

const trie = new Trie()
trie.insert("car")
trie.insert("cat")
console.log(trie.search("car"))
console.log(trie.search("cat"))
console.log(trie.search("cab"))