// let a = 20;
// let b = 10;
// let c = 30;

// if(a==='20')
// {
//     console.log("Matched");
// }

// else{
//     console.log("Unmatched");
// }

// let tut2 = require('./tut2.js');
// console.log(tut2.z());

// const a1 = [10,20,30,40];

// a1.filter((item)=>{
//     console.log(item);
// })


// let num = a1.filter((item)=>{

//     return item>=10;
// })

// console.log(num);

// console,FileSystem,buffer,http - these are some core modules - already installed in the programs 

// GLOBAL AND NON GLOBAL MODULES

// GLOBAL MODULES - no need to import them. ex- console
// console.log("hello world");

//NON-GLOBAL MODULES - need to import them to use. ex- filesystem(fs)
//require is used to import something.

// const fs = require('fs').writeFileSync;

// // fs.writeFileSync("new.txt","HELLO MORNING SUNSHINE");
// fs("abc.txt","HELLO EVERYONE");
// console.log("-->",__dirname);
// console.log("-->",__filename);


const http = require('http');


 

http.createServer((req,res)=>
{
   res.write("<h1>HOW ARE YOU</h1>");
   res.end();
}).listen(5500);


