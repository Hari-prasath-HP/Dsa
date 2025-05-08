let words = "abbcccc"
let word = words.split("")
let count = 0
for(let i=0;i<word.length;i++){
    for(let j=i+1;word.length;j++){
        if(word[i] == word[j]){
            count ++;
            word.slice(i,1)
        }else {
            word[i] = word[i]
        }
    }
}

console.log(count)