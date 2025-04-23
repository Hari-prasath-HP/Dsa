function push(a,target,index = 0){
    if(a[index] == target){
        a.splice(index,1)
    }
    if(index<a.length){
        return push(a,target,index+1)
    }
    return a
}
let a = [1,2,3,4,5]
console.log(push(a,4))