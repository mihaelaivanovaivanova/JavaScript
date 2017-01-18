function solve(args) {
   function getLastDigit(number) {
       var lastDigit = number%10;
       return lastDigit
   }
   function getEnglishDigit(digit) {
       var engDigit;
       switch(digit){
           case 1: engDigit="one"; break;
           case 2: engDigit="two"; break;
           case 3: engDigit="three"; break;
           case 4: engDigit="four"; break;
           case 5: engDigit="five"; break;
           case 6: engDigit="six"; break;
           case 7: engDigit="seven"; break;
           case 8: engDigit="eight"; break;
           case 9: engDigit="nine"; break;
           case 0: engDigit="zero"; break;
       }
       return engDigit;
   }
  var number=+args[0], 
  lastDigit=getLastDigit(number),
  englishDigit = getEnglishDigit(lastDigit);
  console.log(englishDigit); 
}