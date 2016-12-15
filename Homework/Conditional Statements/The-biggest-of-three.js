function solve (args){
    var a=+args[0],
        b=+args[1],
        c=+args[2],
        biggest;
    if(a>b){
        if(a>c){
            biggest=a;
        }else{
            biggest=c;
        }
    }else{
        if(b>c){
            biggest=b;
        }else{
            biggest=c;
        }
    }
    console.log(biggest); 
}