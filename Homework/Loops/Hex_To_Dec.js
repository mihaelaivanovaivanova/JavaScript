function HexToDec(args) {
var endNum=args[0];
var decNum=0;
var length=args[0].length;
for(var i=0; i<length; i+=1) {
    if(endNum.charAt(i)==="A"){
        decNum+=10*Math.pow(16,length-1-i);
    }
    else if(endNum.charAt(i)==="B"){
        decNum+=11*Math.pow(16,length-1-i);
    }
    else if(endNum.charAt(i)==="C"){
        decNum+=12*Math.pow(16,length-1-i);
    }
    else if(endNum.charAt(i)==="D"){
        decNum+=13*Math.pow(16,length-1-i);
    }
    else if(endNum.charAt(i)==="E"){
        decNum+=14*Math.pow(16,length-1-i);
    }
    else if(endNum.charAt(i)==="F"){
        decNum+=15*Math.pow(16,length-1-i);
    }
    else {
        decNum+=endNum.charAt(i)*Math.pow(16,length-1-i);
    }
}
console.log(decNum); 
}