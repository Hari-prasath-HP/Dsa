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

// function binary(arr,val){
//     let left = 0;
//     let right = arr.length-1;
//     while(left<=right){
//         let mid = Math.floor((left+right)/2);
//         if(arr[mid]===val){
//             return mid
//         }else if(arr[mid]<val){
//             left = mid+1
//         }else right = mid-1
//     }return -1
// }
// let arr = [1,2,3,4,5]
// console.log(binary(arr,3))

function sum (arr){
    if(arr.length ==0)return 0;
    return arr[0]+sum(arr.slice(1))
}
let arr = [1,2,3,4,5]
console.log(sum(arr))