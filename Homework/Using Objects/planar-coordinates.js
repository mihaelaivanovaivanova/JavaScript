function solve(args) {
var coordinates =  args.map(Number),
lengths=[];
function getLineLenght(x1,y1,x2,y2) {
    var deltaX=x1-x2,
    deltaY=y1-y2;
    var length =Math.sqrt(deltaX*deltaX+deltaY*deltaY);
    return length
}
for(var i=0; i<12; i+=4) {
    lengths[i/4]=getLineLenght(coordinates[i],coordinates[i+1],coordinates[i+2],coordinates[i+3]);
    console.log(lengths[i/4]); 
}
for(var i=0; i<3; i+=1) {
    console.log(parseFloat(lengths[i]).toFixed(2)); 
}
if(lengths[0]+lengths[1]>lengths[2]
&&lengths[0]+lengths[2]>lengths[1]
&&lengths[1]+lengths[2]>lengths[0]){
console.log("Triangle can be built"); 
}
else{
console.log("Triangle can not be built");  
}
}


