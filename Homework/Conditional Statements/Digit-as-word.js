function solve(args) {
    var input=+args[0],
        result
    switch (input) {
        case 0:result="zero"; break;
        case 1:result="one"; break;
        case 2:result="two"; break;
        case 3:result="three"; break;
        case 4:result="four"; break;
        case 5:result="five"; break;
        case 6:result="six"; break;
        case 7:result="seven"; break;
        case 8:result="eight"; break;
        case 9:result="nine"; break;
        default:result="not a digit"; break;
    }
    console.log(result); 
}