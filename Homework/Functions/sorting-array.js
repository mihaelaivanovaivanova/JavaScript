function solve(args) {
   function maxNumber(arrayNums,startIndex,length) {
       var maxNumber=arrayNums[startIndex];
       var maxIndex = startIndex;
       for(var i=startIndex; i<length-i; i+=1) {
           if(maxNumber<arrayNums[i]){
               maxNumber=arrayNums[i];
               maxIndex=i;
           }
       }
       var temp = arrayNums[length-1];
       return maxNumber;
   }
   function sortArray(arrayNums,length){
       var sortedArray=[];
       for(var i=0; i<length; i+=1) {
           sortedArray[length-i-1]=maxNumber(arrayNums,i,)
       }
   }
        var arrayLength = +args[0],
        array = args[1].split(' ').map(Number);

}