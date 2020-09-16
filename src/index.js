var md5 = require('md5');
var list = require('../configs/list.json');
var config = require('../configs/config.json')

console.log("Running thru all passwords in './configs/list.json'...")
list.forEach(pass => {
   if(md5(config["Username"] + ":" + config["Salt"] + ":" + pass) == config["Hash"])
      console.log("The password is '" + pass + "'");
})
console.log("\n\n")