function convertNumberToWords(args) {
var number = +args[0];
var output='';
for(var i=1; i<=number; i+=1) {
    if(i!==number){
        output+=i;
        output+=" ";
    }
    else{
   output+=i; 
    }
}
console.log(output); 
}