function mergesort(arr){
    if(arr.length <2){return arr};
    let mid = Math.floor(arr.length/2);
    let leftArr = arr.slice(0,mid);
    let right = arr.slice(mid)
    return merge(mergesort(leftArr),mergesort(right))
}
function merge(leftArr,right){
    const sortArr = []
    while(leftArr.length && right.length){
        if(leftArr[0]<= right[0]){
            sortArr.push(leftArr.shift())
        }else{
            sortArr.push(right.shift())
        }
    }
    return [...sortArr,...leftArr,...right]
}
let arr = [-6,8,2,-2,20]
console.log(mergesort(arr))

// Big-O notation o(nlogn)

// function mergesortstring(str){
//     let arr = str.split('');
//     let sortedArr = mergesort(arr);
//     return sortedArr.join('')
// }

// function mergesort(arr){
//     if(arr.length <2)return arr;
//     let mid = Math.floor(arr.length/2);
//     let leftArr = arr.slice(0,mid);
//     let rightArr = arr.slice(mid)
//     return merge(mergesort(leftArr),mergesort(rightArr))
// }

// function merge(leftArr,rightArr){
//     const sorted = []
//     while(leftArr.length&&rightArr.length){
//         if(leftArr[0]<rightArr[0]){
//             sorted.push(leftArr.shift())
//         }else{
//             sorted.push(rightArr.shift())
//         }
//     }
//     return [...sorted,...leftArr,...rightArr]
// }
// let str = "merge"
// console.log(mergesortstring(str))