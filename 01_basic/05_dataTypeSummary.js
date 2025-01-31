// data type are divided into how they are stored and access them
// 1.primitive //call by value
// 7 types: String, Number, Boolean, null, undefined, symbol, BigInt



// 2. non-premitive //reference
// array, Objects, functions 

let hero = ['shaktiman','spiderman']
let myobj = {
    name:"vikram",
    age:19,
}
let myfunc = ()=>{
    console.log("hello world")
}
console.log(typeof myfunc) //functions
// ++++++++++++++++++++++++++++++
// memory management
// primitive --> stack
// non-primitive --> heap

let user1 = {
    email: 'vk@gmail.com',
    age:34
}

let user2 = {...user1}
console.log(user2)
user2.age = 44

console.log(user1.age)
console.log(user2.age)