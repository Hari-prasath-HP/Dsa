function select(arr){
    for(let i=0;i<arr.length;i++){
        let index=i;
        for(let j=i+1;j<arr.length;j++){
            if(arr[j]<arr[index]){
                index = j            }
        }
        if(index != i){
            let temp = arr[i]
            arr[i] = arr[index]
            arr[index] = temp
        }
    }return arr
}
let arr = [-6,2,8,-2,50]
console.log(select(arr))

// Big O notation O(n^2)