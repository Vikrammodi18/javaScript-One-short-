// const user = {
    
//     username: "vikram",
//     email:"vkm@gmail.com",
//      welcomeMessage: function(){
//         console.log(`${this.username}, welcome to website`)
//         console.log(this)
//     }
// }
// console.log(user.welcomeMessage())
// user.username = "sam"
// console.log(user.welcomeMessage())

// const chai = function (){
//     console.log(this)
// }
// chai()

// const anotherChai = ()=>{
//     console.log(this)
// }
// anotherChai()

// explicit return in arrow function
// let sum = (num1,num2)=>{
//     return num1+num2
// }
// console.log(sum(3,4))

// implicit return in arrow function 

// let sum1 = (num1,num2)=> num1+num2; //no needs to write return to return the value dont use curly braces
// console.log(sum1(3,4))

// return object using implicit return 
//  



// IIFE //Immediate Invoke Function Expression
/* 
IIFE (Immediately Invoked Function Expression) is a common JavaScript pattern used to execute a function immediately 
after it is defined. It is a way to create a local scope and avoid polluting the global namespace.
// */
// (()=>{
//     console.log("connected to db")
// })();
 
// (function(dbName){
//     console.log(`you connected to ${dbName} database`)
// })("users")


function some(){
    let a = 10;
let b = 20;
let ar = [1,2,3]
    console.log(this)
}
var number = 10
// some()
// console.log(globalThis.clearTimeout(10000))

console.log(num)
var num = 10