const fs = require("fs")

console.log("before");

fs.readFile("a.txt", "utf-8", (err, data)=>{
    console.log(data);
    
})
console.log("after");
