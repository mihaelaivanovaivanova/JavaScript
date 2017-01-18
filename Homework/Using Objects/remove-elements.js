function solve(args) {
var input =  args,
firstElement=input[0];
Array.prototype.removeFirst=function (elementToRemove) {
    var i,
    len=this.length;
    for(i=0; i<len; i+=1) {
        if(elementToRemove===this[i]){
            this.splice(i, 1)
            i-=1;
        }
    }
    return this;
}
input.removeFirst(firstElement);
    console.log(input.join("\n")); 
}




