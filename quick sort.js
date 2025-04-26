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