let score = 34
let stScore = "34a"

//typeof()  are used to check datatypes of any variable 

// console.log(typeof score) //number
// console.log(typeof (score)) //number

// console.log(typeof stScore) //string
let numScore = Number(stScore) // type casting of string into number 

// when string value contain number and character value while type casting into number the value is converted into while checking it through typeof but when we display converted string output will Nan (not a number)
// console.log(typeof numScore);//number

// console.log(numScore)//Nan (Not a Number)


/* 
    null => typeof --> object
    after typecating into Number
    null => 0 --> typeof--> number
*/ 

// string ==> number
// "33" ==> 33
// "33abc" ==> NaN
// true ==> 1; false ==>0
let value = null
let numValue = Number(value)
// console.log(typeof numValue)
// console.log(numValue)

//string and number into boolean

let isLoggedIn = true
let numIsLoggedIn = Number(isLoggedIn)
console.log(numIsLoggedIn);


let someString = 0
let intoBoolean = Boolean(someString)
console.log(intoBoolean)

// string ---> Boolean
// "" ---> false
// " " ---> true
// 123 ---> true
// 0 ---> false