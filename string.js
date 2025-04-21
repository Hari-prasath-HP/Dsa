function string(a){
    if(a.length === 0)return "";
    return string(a.slice(1))+a[0]
}
let a = "hari"
console.log(string(a))