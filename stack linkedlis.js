class Hash{
    constructor(size){
        this.table = new Array(size)
        this.size = size
    }
    hash(key){
        let total = 0;
        for(let i=0;i<key.length;i++){
            total += key.charCodeAt(i)
        }return total
    }
    set(key,value){
        let index = this.hash(key)
        this.table[index] = value
    }
    get(key){
        let index = this.hash(key)
        return this.table[index]
    }
    remove(key){
        let index = this.hash(key)
        this.table[index] = undefined
    }
    display(){
        for(let i=0;i<this.table.length;i++){
            if(this.table[i]){
                console.log(i,this.table[i])
            }
        }
    }
}
let node = new Hash()
node.set("name","hari")
node.set("age",20)
node.display()
