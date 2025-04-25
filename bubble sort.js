function bubble(num){
    let swapped;
    do{
        for(let i=0;i<num.length-1;i++){
            swapped = false;
            if(num[i] > num[i+1]){
                let temp = num[i]
                num[i] = num[i+1]
                num[i+1] = temp;
                swapped = true
            }
        }
    }while(swapped)
    return num;
}
let num = [-6,8,-2,20,2]
console.log(bubble(num))

// big O for bubble sort is o(n^2)