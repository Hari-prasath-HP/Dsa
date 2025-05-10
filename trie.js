class TrieNode {
  constructor() {
    this.children = {};           
    this.isEndOfWord = false;    
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode();
  }

  insert(word) {
    let current = this.root;
    for (let char of word) {
      if (!current.children[char]) {
        current.children[char] = new TrieNode();
      }
      current = current.children[char];
    }
    current.isEndOfWord = true;
  }

  search(word) {
    let current = this.root;
    for (let char of word) {
      if (!current.children[char]) {
        return false;
      }
      current = current.children[char];
    }
    return current.isEndOfWord;
  }

  startsWith(prefix) {
    let current = this.root;
    for (let char of prefix) {
      if (!current.children[char]) {
        return false;
      }
      current = current.children[char];
    }
    return true;
  }
}
const trie = new Trie();

trie.insert("cat");
trie.insert("can");
trie.insert("cap");

console.log(trie.search("cat"));       
console.log(trie.search("car"));       
console.log(trie.startsWith("ca"));    
console.log(trie.startsWith("dog"));   
