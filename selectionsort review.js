// function selection(arr){
//     for(let i=0;i<arr.length;i++){
//         for(let j=i+1;j<arr.length;j++){
//             if(arr[i]>arr[j]){
//                 let temp = arr[i]
//                 arr[i] = arr[j]
//                 arr[j] = temp
//             }
//         }
//     }return arr
// }


// function quick(arr){
//     if(arr.length<2)return arr
//     let pivot = arr[arr.length-1]
//     let left = []
//     let right = []
//     for(let i=0;i<arr.length-1;i++){
//         if(arr[i]<pivot){
//             left.push(arr[i])
//         }else right.push(arr[i])
//     }
//     return [...quick(left),pivot,...quick(right)]
// }
// let arr = [-4,8,2,-2,20]
// console.log(quick(arr))

class Hash{
    constructor(size){
        this.table = new Array(size)
        this.size = size;
    }

    hash(key){
        let total = 0;
        for(let i=0;i<key.length;i++){
            total += key.charCodeAt(i)
        }return total;
    }
    set(key,value){
        let index = this.hash(key);
        this.table[index] = value;
    }
    remove(key){
        let index = this.hash(key);
        return this.table[index] = undefined;
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

node.set("name","Hari")
node.set("age",22)
node.display()
console.log(node.remove("age"))