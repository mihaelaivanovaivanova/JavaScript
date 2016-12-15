function solve(args) {
    var number=+args[0],
         thirdDigit=((number/100)%10)|0;
    if(thirdDigit===7){
        console.log("true"); 
    } else{
        console.log("false "+thirdDigit); 
    }
}