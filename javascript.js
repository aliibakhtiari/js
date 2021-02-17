var str = "The includes() method determines whether a string contains the characters of a specified string."
var n = str.includes("contains")
console.log(str)
console.log(n)


var strChar = String.fromCharCode(119,101,98,32,100,101,118,101,108,111,112,114);
console.log(strChar);


let txt = ""; 
for(let count = 0; count < 10;count++) { 
    console.log(txt+="*"); 
}

let spl = "salam chetori khoobi"
let res = spl.split("")
console.log(res);

let reset = "salam chetori khoobi"
let dec = reset.split("e")
console.log(dec);

let char = "saloom chetori khoobi"
let charac = char.split("o",3)
console.log(charac);

let start = "Hello world, welcome to the universe."
let strStart = start.startsWith("Hello");
console.log(strStart);

let star = "Hello world, welcome to the universe."
let startStr = star.startsWith("welcome",13);
console.log(startStr);

var sub = "this is a test!";
var strSub = sub.substr(5, 3);
console.log(strSub)