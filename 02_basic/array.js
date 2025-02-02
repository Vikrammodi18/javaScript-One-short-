const arr = [2,3,4,5,7,8,9,10,11]
//array in js in use shallow copy to i.e. variable stores it refernce instead of value

//methods 
// arr.push(6) //to insert value/element in the array

// const num = arr.pop()   //to delete value/element and it also return deleted element
// console.log(arr.includes(7)) //includes methods check the element present or not and it return boolean value true/false

// console.log(arr.indexOf(2)) //indexOf returns index value of element 
// console.log(arr.join())

// const narr = arr.slice(2,6)
// console.log("a ",arr)
// console.log(narr)

/* slice extract only element but no change in original array.
    splice extract and make changes in original array
*/
// const n1arr = arr.splice(2,3) //first param start index 2nd param count of element
// console.log("b ",arr)
// console.log(n1arr) 

//we can use concate method to merger two array but it did not seprate element, it store complete array
//spread operator 
const marvelHeros = ["SpiderMan","IronMan","Hulk"]
// console.log(marvelHeros)
const dcHeros = ["superman","flash","batman"]
// console.log(dcHeros)

//spread operator
const allNewHeros = [...marvelHeros, ...dcHeros] //spread operator spread all element of array
// console.log(allNewHeros)
const name = "vikram"
// console.log(Array.isArray(name)) //Array.isArray() method is used to determine wheather a varible is array or not. It always return true or false

/* Array.from() only converts iterable like object to transform it into array */

// const arrName= Array.from(name) //Array.from() method returns array from any type of data structure
// arrName.forEach((val)=>{
//     console.log(val)
// })
// console.log(typeof arrName)
// let myObj = {
//     name:"vikram",
//     sem:6,
//     year:3,
//     enrollment:"bc/22/049",

// }
//  let keys = Object.keys(myObj)
//  keys.forEach((val)=>{
//     console.log(val)
//  })

let num1 = 12
let num2 = 13
let num3 = 15

console.log(Array.of(num1,num2,num3))