function convertNumberToWords(args) {
var numCount = args.length;
var sum=0;
var max = +args[0];
var min = +args[0];
for(var i=0; i<numCount; i+=1) {
    sum=sum+parseFloat(args[i]);
    if(+args[i]>max){
        max=+args[i];
    }
    if(+args[i]<min){
        min=+args[i];
    }
}
console.log("min="+min.toFixed(2)); 
console.log("max="+max.toFixed(2)); 
console.log("sum="+sum.toFixed(2)); 
console.log("avg="+(sum/numCount).toFixed(2)); 
}