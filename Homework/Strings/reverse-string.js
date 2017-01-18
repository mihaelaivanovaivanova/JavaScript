function solve(args) {
var inputString=String(args),
len=inputString.length,
result="";
for(var i=len-1; i>=0; i-=1) {
    result=result+inputString[i];
}
console.log(result); 
}




