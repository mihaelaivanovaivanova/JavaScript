function solve(args) {
var substring=args[0]+'',
text = args[1]+'';
substring = substring.toLowerCase();
text = text.toLowerCase();
var count=0,
possition=0;
while(possition>=0){
    var match = text.indexOf(substring,possition);
    if (match!==-1){
        count+=1;
    }
    else{
        break;
    }
    possition=match+1;
}
console.log(count); 
}





