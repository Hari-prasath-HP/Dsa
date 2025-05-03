function insertion(arr){
    for(let i=1;i<arr.length;i++){
        let Num = arr[i]
        let j = i-1;
        while(j>=0 && arr[j]>Num){
            arr[j+1] = arr[j]
            j = j-1
        }
        arr[j+1] = Num
    }return arr
}
let arr= [-6,2,20,-2,8]
console.log(insertion(arr))

// Big O of insertion is O(n^2)