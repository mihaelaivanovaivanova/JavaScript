function solve(args) {
   function count(arrayOfNumbers, numberX, length) {
      var counter=0;
      for(var i=0; i<length; i+=1) {
          if(numberX===arrayOfNumbers[i])
          {
              counter+=1;
          }
      }
       return counter;
   }
  //var input = args[0].split('\n'),
        arrayLength = +args[0],
        array = args[1].split(' ').map(Number),
        x = +args[2];
        var counter = count(array,x,arrayLength);
  console.log(counter); 
}