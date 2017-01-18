function solve(args) {
    var input = args+"";
    input=input.replace(/<\/a>/g,"[/URL]");
    input=input.replace(/">/g,"\"]");
    input=input.replace(/<a href=/g,"[URL=");
    console.log(input); 
}