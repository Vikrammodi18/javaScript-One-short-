const name = "Vikram"
//string literals
const repoCount  = 50

// console.log(`my name is ${name} and my repo count is ${repoCount}`)

let fullName = new String('Vikram Kumar')


// new String() Constructor 
// new String() is not a primitive data type but an object of type string 
// console.log(typeof objString)

// console.log(name.toUpperCase())
// console.log(fullName.charAt(3))
// console.log(fullName.indexOf('k'))
// console.log(fullName.toLowerCase());


const newString = fullName.substring(4,7)
console.log(newString)

const anotherString = fullName.slice(3,9)
console.log(anotherString)

const s1 = "      vikram        "
console.log(s1.trim()) // trim extra space in string

const url = "https://vikram.com/vikram%20modi"

console.log(url.replace('%20','-')) // 1st parameter-> what to search 2nd parameter-> what to replace in searched area
console.log(url.includes('ram')) //always returns true and false
 

const s2 = "vikram-kumar-modi-noida"
const array = s2.split('-') // split() convert string into array taking argument separater
console.log(array)