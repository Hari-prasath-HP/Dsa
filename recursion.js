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


// function binary(a, b){
//     let left= 0;
//     let right = a.length-1;
//     while(left<=right){
//         let mid = Math.floor((left+right)/2);
//         if(a[mid]===b){
//             return mid
//         }else if(a[mid]<b){
//             left = mid+1
//         }else {
//             right = mid-1;
//         }
//     }return -1
// }
// let a = [1,2,3,4,5]
// console.log(binary(a,4))

// function sum(a){
//     if(a.length == 0)return 0
//     return a[0] + sum(a.slice(1)) 
// }
// let a = [1,2,3,4,5]
// console.log(sum(a))

// function binary(a,b,left = 0 , right = a.length-1){
//     if (left > right){
//         return -1
//     }
//     let mid = Math.floor((left+right)/2)
//     if(a[mid]===b){
//         return mid;
//     }else if(a[mid]<b){
//         return binary(a,b,mid+1,right)
//     }else {
//         return binary(a,b,left,mid+1)
//     }
// }
// let a = [1,2,3,4,5]
// console.log(binary(a,3))


const abc = [
    { af: [3, 4, 4] },
    { adf: [3, 4, 4] },
    { afd: [3, 4, 4] },
    { daldf: [3, 4, 4] }
];
let sum = 0;
function add(arr,index =0){
    if(index >= arr.length)return;
    let obj = arr[index];
    for(let key in obj){
        sum += obj[key].reduce((a,b)=>a+b,0)
        obj[key].fill(0)
    }
    add(arr,index + 1)
}
add(abc)
console.log(sum)