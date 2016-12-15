function solve(args){
  var a=+args[0],
      b=+args[1],
      temp=a;
  if (a>b) {
      temp=b;
      b=a;
      a=temp;
  }
  console.log(a, b); 
}
solve([5,3]);
