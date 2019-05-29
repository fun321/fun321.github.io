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



//WORKING WITH READABLE AND WRITABLE STREAMS

