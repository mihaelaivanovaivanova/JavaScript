function solve(args) {
    var properties=JSON.parse(args[0]);
    var output=args[1];
    for(var prop in properties){
        output = output.replace(new RegExp('#{' + prop + '}', 'g'), properties[prop])
    }
    console.log(output); 
}