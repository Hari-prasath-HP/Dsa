function selection(arr){
    for(let i=0;i<arr.length;i++){
        for(let j=i+1;j<arr.length;j++){
            if(arr[j]<arr[i]){
                let temp = arr[i]
        arr[i] = arr[j]
        arr[j] = temp
            }
        }
    }
    return arr
}
let arr = [-6,8,2,-2,20]
console.log(selection(arr))
