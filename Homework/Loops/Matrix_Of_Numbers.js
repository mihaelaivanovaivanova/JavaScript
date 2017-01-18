function matrixOfNums(args) {
var endNum=+args[0];
var output='';
for(var i=1; i<=endNum; i+=1) {
  for(var j=i; j<endNum+i; j+=1) {
    output =output + j+" ";
}  
output+="\n";
}
console.log(output); 
}