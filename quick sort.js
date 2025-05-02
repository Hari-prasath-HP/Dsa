function quick(num){
    if(num.length <2){
        return num
    }
    let pivot = num[num.length-1];
    let left = []
    let right = []
    for(let i=0;i<num.length-1;i++){
        if(num[i]<pivot){
            left.push(num[i])
        }else{
            right.push(num[i])
        }
    }
    return [...quick(left),pivot,...quick(right)]
}

let arr = [-6,2,20,8,-2]
console.log(quick(arr))

// function quickSortString(str) {
    // Convert string to array
    // let arr = str.split('');
    // return quick(arr).join(''); // sort array and join back to string
// }

// function quick(arr) {
//     if (arr.length < 2) {
//         return arr;
//     }

//     let pivot = arr[arr.length - 1];
//     let left = [];
//     let right = [];

//     for (let i = 0; i < arr.length - 1; i++) {
//         if (arr[i] < pivot) {
//             left.push(arr[i]);
//         } else {
//             right.push(arr[i]);
//         }
//     }

//     return [...quick(left), pivot, ...quick(right)];
// }

// // Example usage:
// let str = "merge";
// console.log(quickSortString(str));  // Output: "eegmr"
