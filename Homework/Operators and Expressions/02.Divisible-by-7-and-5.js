function solve(args) {
    var number=+args[0];
    if(!(number%5)&&!(number%7)){
        console.log("true "+number);
    } else{
        console.log("false "+number); 
    }
}