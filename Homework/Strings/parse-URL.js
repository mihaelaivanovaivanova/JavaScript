function solve(args) {
    var input=args+"",
    protocol="";
  protocol+=input.substring(0,input.indexOf(":"));
  console.log("protocol: "+protocol); 
  var server="";
  var startIndexServer = protocol.length+4-1;
  server+=input.substring(startIndexServer,input.indexOf('/',startIndexServer));
  console.log("server: "+server); 
  var resurce="";
  var startIndexResource = startIndexServer+server.length;
resurce+=input.substr(startIndexResource);
console.log("resource: "+resurce); 
}