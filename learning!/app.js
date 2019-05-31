//https://www.youtube.com/watch?v=RLtyhwFtXQA


//WORKING W/ MODULES (connected with tutorial.js)
// const tutorial = require('./tutorial');
// console.log(tutorial);
// console.log(tutorial.sum(1,1));
// console.log(tutorial.PI);
// console.log(new tutorial.SomeMathObject());



//EVENT MODUlE AND EVENT EMITTER CLASS
// const EventEmitter = require('events');
// const eventEmitter = new EventEmitter();
// //this title "tutorial" will be called when event is on
// eventEmitter.on('tutorial',(num1, num2)=>{
//     console.log(num1 + num2);
// });
// //this call emits "tutorial", and calls the .on(tutorial) above
// eventEmitter.emit('tutorial', 1, 2);

// class Person extends EventEmitter {
//     constructor(name) {
//         super();
//         this._name = name;
//     }

//     get name() {
//         return this._name;
//     }
// }

// let pedro = new Person('Pedro');
// let christina = new Person('Christina');
// pedro.on('name', ()=>{
//     console.log('My name is ' + pedro.name);
// });
// christina.on('name', ()=>{
//     console.log('My name is ' + christina.name);
// });
// pedro.emit('name');
// christina.emit('name');



//WORKING WITH READLINE MODULE
// const readline = require('readline');
// const rl = readline.createInterface({input : process.stdin, 
//     output : process.stdout});
// let num1 = Math.floor((Math.random() * 10) + 1);
// let num2 = Math.floor((Math.random() * 10) + 1);
// let answer = num1 + num2;
// rl.question(`What is ${num1} + ${num2}?\n`, (userInput)=> {
//     if (userInput.trim() == answer) {
//         rl.close();
//     }
//     else {
//         rl.setPrompt('Incorrect response please try again\n');
//         rl.prompt();
//         rl.on('line', (userInput)=>{
//             if (userInput.trim() == answer) {
//                 rl.close();
//             }
//             else {
//                 rl.setPrompt(`Your answer of ${ userInput} is incorrect, try again!\n`);
//                 rl.prompt();
//             }
//         });
//     }
// });
// rl.on('close', ()=>{
//     console.log('Correct!');
// });



//WORKING WITH FILE SYSTEM MODULE
// const fs = require('fs');
// //create a file
// fs.writeFile('example.txt', "this is an example", (err)=>{
//     if (err) {
//         console.log(err);
//     }
//     else {
//         console.log('File successfully created');
//         fs.readFile('example.txt', 'utf8',(err, file)=>{
//             if (err) {
//                 console.log(err);
//             }
//             else {
//                 console.log(file);
//             }
//         });
//     }
// });

// //renaming file
// const fs = require('fs');
// fs.rename('example.txt', 'example2.txt', (err)=>{
//     if (err) {
//         console.log(err);
//     }
//     else {
//         console.log("Sucessfully renamed file");
//     }
// });

// //appending data to file
// const fs = require('fs');
// fs.appendFile('example2.txt', 'hello world!', (err)=>{
//     if (err) {
//         console.log(err);
//     }
//     else {
//         console.log("Append successful!");
//     }
// });

// //deleting a file
// const fs = require('fs');
// fs.unlink('example2.txt', (err)=>{
//     if (err) {
//         console.log(err);
//     }
//     else {
//         console.log('Delete successful!');
//     }
// });



//WORKING WITH FILE SYSTEM MODULE PT 2
// // creating folder
// const fs = require('fs');
// fs.mkdir('tutorial', (err)=>{
//     if (err) {
//         console.log(err);
//     }
//     else {
//         console.log("Successfully created folder");
//     }
// });

// //deleting folder
// const fs = require('fs');
// fs.rmdir('tutorial', (err)=>{
//     if (err) {
//         console.log(err);
//     }
//     else {
//         console.log("Successfully deleted");
//     }
// });

// // creating a folder then creating a file
// const fs = require('fs');
// fs.mkdir('tutorial', (err)=>{
//     if (err) {
//         console.log(err);
//     } 
//     else {
//         console.log("Folder created");
//         fs.writeFile('./tutorial/example.txt', "hello world!", (err)=>{
//             if (err) {
//                 console.log(err);
//             }
//             else {
//                 console.log("Folder and file created!");
//             }
//         });
//     }
// });

// // deleting a folder with file in it
// const fs = require('fs');
// fs.unlink('./tutorial/example.txt', (err)=>{
//     if (err) {
//         console.log(err);
//     }
//     else {
//         console.log("file successfully deleted");
//         fs.rmdir('tutorial', (err)=>{
//             if (err) {
//                 console.log(err);
//             }
//             else {
//                 console.log("folder deleted");
//             }
//         })
//     }
// })

// // deleting multiple files inside folder
// const fs = require('fs');
// fs.readdir('./example', (err, files)=>{
//     if (err) {
//         console.log(err);
//     }
//     else {
//         console.log(files);
//         for (let file of files) {
//             fs.unlink('./example/' + file, (err)=>{
//                 if (err) {
//                     console.log(err);
//                 }
//                 else {
//                     console.log("Successfully deleted file");
//                 }
//             })
//         }
//     }
// })



// //WORKING WITH READABLE AND WRITABLE STREAMS
// //the file will read and write with chunks of data simutaneously, making it more space efficient than readFile
// const fs = require('fs');
// const readStream = fs.createReadStream('./example.txt', 'utf8');
// const writeStream = fs.createWriteStream('example2.txt');
// readStream.on('data', (chunk)=>{
//     console.log(chunk);
//     writeStream.write(chunk);
// })



// //PIPES AND PIPE CHAINING
// //simple piping
// const fs = require('fs');
// const readStream = fs.createReadStream('./example.txt', 'utf8');
// const writeStream = fs.createWriteStream('example2.txt');
// //all you need for a pipe, need two streams, a source stream and destination stream
// readStream.pipe(writeStream);

// //pipe chaining ex1 (compressing files and putting into gzip)
// const fs = require('fs');
// const zlib = require('zlib');
// const gzip = zlib.createGzip();
// const readStream = fs.createReadStream('./example.txt', 'utf8');
// const writeStream = fs.createWriteStream('example2.txt.gz');
// //gzip compresses read stream and pipe it to write stream
// readStream.pipe(gzip).pipe(writeStream);

// // pipe chaining ex2 (unzipping gzip)
// const fs = require('fs');
// const zlib = require('zlib');
// const gunzip = zlib.createGunzip();
// const readStream = fs.createReadStream('./example2.txt.gz');
// const writeStream = fs.createWriteStream('uncompressed.txt');
// //gzip compresses read stream and pipe it to write stream
// readStream.pipe(gunzip).pipe(writeStream);




// //CREATING A HTTP SERVER USING HTTP MODULE
// const http = require('http');
// const server = http.createServer((req, resp)=>{
//     //this is printed with localhost:3000
//     // resp.write('Hello world!');
//     // resp.end();
//     if (req.url === '/') {
//         //this is printed with localhost:3000
//         resp.write('Hello world');
//         resp.end();
//     }
//     else {
//         //this is printed with localhost:3000/banana
//         resp.write('using other domain');
//         resp.end();
//     }
// });
// server.listen('3000');



// //SERVING STATIC FILES WITH HTTP AND FILE SYSTEM MODULES
// const http = require('http');
// const fs = require('fs');
// http.createServer((req, res)=>{
//     // const readStream = fs.createReadStream('./example/index.html');
//     // const readStream = fs.createReadStream('./example/example.json');
//     const readStream = fs.createReadStream('./example/unnamed.png');
//     // res.writeHead(200, {'Content-type': 'text/html'});
//     // res.writeHead(200, {'Content-type': 'application/json'});
//     res.writeHead(200, {'Content-type': 'image/png'});
//     readStream.pipe(res);
// }).listen(3000);



// //CREATING PACKAGE.JSON USING NPM INIT
// //package.json is responsible for metadata, name of proj, version #
// //npm init in terminal
// //entry point, which file to start node app, (for us, app.js)



// //INSTALLING PACKAGES USING NOM
// //packages are reusable code we can use in our own app, folders with more than one module
// //npmjs.com
// const _ = require('lodash');
// let example = _.fill([1,2,3,4,5], "banana", 1, 4);
// console.log(example);
// //to uninstall package, npm uninstall package-name



//SEMANTIC VERSIONING
