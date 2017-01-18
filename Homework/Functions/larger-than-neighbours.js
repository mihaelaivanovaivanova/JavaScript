function solve(args) {
   function checkIfLarger(arrayOfNumbers,length) {
      var counter=0;
      for(var i=1; i<length-1; i+=1) {
          if(arrayOfNumbers[i]>arrayOfNumbers[i-1]&&arrayOfNumbers[i]>arrayOfNumbers[i+1])
          {
              counter+=1;
          }
      }
       return counter;
   }
        var arrayLength = +args[0],
        array = args[1].split(' ').map(Number),
        counter = checkIfLarger(array,arrayLength);
  console.log(counter); 
}