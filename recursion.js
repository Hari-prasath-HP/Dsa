// function factorial(n){
//     if(n===1){
//         return 1
//     }
//     return n * factorial(n-1)
// }
// console.log(factorial(5))

// function fibonacci(n){
//     if(n===0)return 0;
//     if(n===1)return 1;
//     return fibonacci(n-1)+fibonacci(n-2)
// }
// console.log(fibonacci(6))

function binary(arr,target){
    let left = 0;
    let right = arr.length-1;
    while(left<=right){
        let mid = Math.floor((left+right) /2);
        if(arr[mid]===target){
            return mid;
        }else if(arr[mid]<target){
            left = mid+1
        }else rigth = mid-1
    }
    return -1
}
let arr = [1,2,3,4,5,6,7,8,9]
console.log(binary(arr,9))