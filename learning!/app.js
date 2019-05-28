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