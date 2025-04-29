function merge(arr1,arr2){
    let n = arr1.length;
    let m = arr2.length;
    let i = 0 , j = m -1;
    const result = []
    while(i<n && j >=0){
        if(arr1[i] < arr2[j]){
            result.push(arr1[i])
            i++
        }else{
            result.push(arr2[j])
            j--
        }
    }
    while(i<n){
        result.push(arr1[i])
        i++
    }
    while(j>=0){
        result.push(arr2[j])
        j--
    }return result;
}

let arr1 = [10,20,30]
let arr2 = [35,25,15]
console.log(merge(arr1,arr2))