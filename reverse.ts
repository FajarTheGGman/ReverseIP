var c = require("colors");
var r = require("readline");
var p = require("readline");
var req = require("request");
var f = require("fs");

console.log("|==|_______D") 
console.log("      |  ")                        
console.log("      |          Reverse ")
console.log("      |            IP")
console.log("      |   ")
console.log("");
console.log(c.rainbow("[=================]"))
console.log(c.green("Author : Fajar Firdaus"))
console.log(c.green("FB : Fajar Firdaus"))
console.log(c.green("IG : fajar_firdaus_7"))
console.log(c.green("YT : iTech7732"))
console.log(c.rainbow("[=================]"))
console.log("")

let a = p.createInterface({
	input : process.stdin,
	output : process.stdout
});

a.question("Input : ", (asw) => {
req("https://api.hackertarget.com/reverseiplookup/?q=" + `${asw}`, function(error, response,body){
    console.log("output : ");
	console.log(body);
});

});