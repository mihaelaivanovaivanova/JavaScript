function solve(args) {
    var a=+args[0],
        b=+args[1],
        c=+args[2],
        smallest,
        middle,
        biggest;
    if(a>b){
        if(a>c){
            biggest=a;
            if(b>c){
                middle=b;
                smallest=c;
            } else{
                middle=c;
                smallest=b;
            }
        }
        else{
            biggest=c;
            middle=a;
            smallest=b;
        }
    } else{
         if(b>c){
            biggest=b;
            if(a>c){
                middle=a;
                smallest=c;
            } else{
                middle=c;
                smallest=a;
            }
        }
        else{
            biggest=c;
            middle=b;
            smallest=a;
        }
    }
    console.log(biggest+" "+middle+" "+smallest); 
}