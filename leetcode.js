let str = "hello world"
function string(a){
    if(a.length === 0) return "";
    if(a.slice(1) == "l"){
        return ""
    }else return a[0]
    return string(a.slice(1))
}
console.log(string(str))