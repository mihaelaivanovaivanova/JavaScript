function solve(args) {
var inputString=String(args),
openBracket=0,
closeBracket=0;
for (var i in inputString) {
    var c = inputString[i];
    if (c === '(') {
      openBracket += 1;
    } else if (c === ')') {
      closeBracket += 1;
    }
    if (closeBracket > openBracket) {
      console.log('Incorrect');
      return;
    }
  }
  if (openBracket === closeBracket) {
    console.log('Correct');
  } else {
    console.log('Incorrect');
  }
}
 





