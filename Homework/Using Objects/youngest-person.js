function solve(args) {
var input =  args,
 len=input.length,
 people=[];
 function makePerson(firstname, lastname, age){
     return{
     firstname:firstname,
     lastname:lastname,
     age:age
     };
 }
 for(var i=0; i<len; i+=3) {
     people[i/3]=makePerson(input[i],input[i+1], input[i+2]);
 }
 var youngest={};
 for(var i=0; i<len/3; i+=1) {
        if(people[i].age<youngest.age){
            youngest=people[i];
 }
}
console.log(youngest.firstname+" "+youngest.lastname);

}
var str = new String("some text");
str.slice()



