/*
    we can access variable from child but we can't access child varible in parent scope
*/

// if(true){
//     let a = 10; 
//     if(a === 10){
//         let b =5
//         console.log(a+b)
//     }
//     // console.log("b",b)
// }
// console.log("a",a)
// function one(){
//     let num1 = 1
//     function two(){
//         let num2 =2
//         console.log(num1+num2)
//     }
//     two()
//     console.log(num2)
// }
// one()
/* 
Why num2 is Not Accessible Outside two()?
num2 is declared inside two(), so it is local to two() (Function Scope).
Once two() finishes execution, its variables (num2) are destroyed.
one() does not have access to num2 because variables do not "bubble up" to parent functions.
*/


/*
How num1 is Accessible in two()?
JavaScript uses lexical scoping:
two() is nested inside one(), so it inherits access to one()'s variables.
num1 is available inside two() because of closure (inner functions can access outer function variables).
 */



// hello()
function hello(){
    console.log("hello")
}

// hii()
let hii = function (){
    console.log("hii")
}

console.log(a)
a = 15
