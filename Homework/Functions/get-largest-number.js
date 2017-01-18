function solve(args) {
   function getMax(firstNum, secondNum) {
       var biggerNum;
       if(secondNum>=firstNum){
           biggerNum=secondNum;
       }
       else{
           biggerNum=firstNum;
       }
       return biggerNum;
   }
  var array=args[0].split(' ');
var biggerNum1=getMax(+array[0], +array[1]);
var biggestNum2=getMax(biggerNum1, +array[2]);
console.log(biggestNum2); 
}