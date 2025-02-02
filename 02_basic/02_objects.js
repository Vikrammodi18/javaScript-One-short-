

const mySym = Symbol("key1")
const user = {
    name:"vikram kumar",
    [mySym] : "mykey1",
    "full name" :"Vikram Kumar Modi",
    email:"vikram@google.com",
    isLoggedIn:false,
    lastLoginDays:["Mondays","Saturday"]
}
// Object.freeze(user) //it freeze the object i.e. we can't change the value of keys in our code
// accessing objects key
// console.log(user.email) //using . operator to access the object element
// console.log(user["name"]) // use [] and key will be in string inside the square bracket
// console.log(user["full name"])
// console.log(user[mySym])
// user.email = "vikram@gmail.com" 
// console.log(user)

user.greeting = function(){
    console.log(`hello ${this.name} welcome to your codespace`)
}

console.log(user.greeting())