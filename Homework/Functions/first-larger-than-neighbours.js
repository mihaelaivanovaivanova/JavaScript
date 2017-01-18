function solve(args) {
   function checkIfLarger(arrayOfNumbers,length) {
      var index=0;
      for(var i=1; i<length-1; i+=1) {
          if(arrayOfNumbers[i]>arrayOfNumbers[i-1]&&arrayOfNumbers[i]>arrayOfNumbers[i+1])
          {
              index=i;
              break;
          }
          else{
         index=-1;
          }
   }
   return index;
   }
        var arrayLength = +args[0],
        array = args[1].split(' ').map(Number);
        var index = checkIfLarger(array,arrayLength);
        console.log(index); 
  
}