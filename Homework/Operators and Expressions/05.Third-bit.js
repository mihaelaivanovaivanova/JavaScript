function solve(args) {
  var number =+args[0],
    mask = 1<<3,
    newNum = number&mask;
  console.log(newNum>>3);
}