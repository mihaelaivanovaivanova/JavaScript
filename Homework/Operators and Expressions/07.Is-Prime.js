function solve(args) {
    var number=+args[0],
        isPrime=true,
        end=(Math.sqrt(number))|0;
    if(number<=1){
        isPrime=false;
    } else{
        for(var i=2; i<=end;i+=1){
            if(!(number%i)){
                isPrime=false;
                break;
            }
        }
    }
  console.log(isPrime);   
}