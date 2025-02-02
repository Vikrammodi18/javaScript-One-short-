const obj1 = {1:"a",2:"b"}
const obj2 = {3:"c",4:"d"}
const obj3 = Object.assign(obj1,obj2)
const test = {1:"a",2:"b"}
const obj4 = {...obj1,...obj2,...test}
console.log(obj1.toLocaleString)
// console.log(obj1)
// console.log(obj4)

let myObj = {
    user1:{id:1,name:"vikram"},
    user2:{id:2,name:"rohan"},
}
// console.log(myObj.user2.name)
let user = [
    {id:1,email:'abc@gmail.com'},
    {id:2,email:'bac@gmail.com'},
]
console.log(Object.keys(myObj))
console.log(Object.values(myObj))
// user.forEach((val)=>{
//     console.log(val.email)
// })
