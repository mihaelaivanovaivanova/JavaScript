function solve(args) {
  var output="";
  var r=/<.*?>/g;
  for(var line of args){
      output+=line.replace(r,"").trim();
  }
  console.log(output); 
}