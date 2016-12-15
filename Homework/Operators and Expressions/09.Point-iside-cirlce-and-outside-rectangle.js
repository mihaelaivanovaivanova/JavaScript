function solve(args) {
    var x=+args[0],
        y=+args[1],
        insideCircle=false,
        insideRectangle = false;
    if(Math.sqrt((x-1)*(x-1)+(y-1)*(y-1))<=1.5){
        insideCircle=true;
    }
    if(y>=-1&&y<=1&&x>=-1&&x<=5){
        insideRectangle=true;
    }
    if(insideCircle==true&&insideRectangle==true){
        console.log("inside circle inside rectangle");
    } else if(insideCircle==true&&insideRectangle==false){
        console.log("inside circle outside rectangle");  
    } else if(insideCircle==false&&insideRectangle==false){
        console.log("outside circle outside rectangle");  
    } else {
        console.log("outside circle inside rectangle");  
    }
}