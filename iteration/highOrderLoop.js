//Array specific loop
let arr = [1,2,3,4,4,5,6]
// for(let val of arr){
//     console.log(val)
// }

// map only store unique key, we can itirate over map :- for(let val of mymap){}
let myMap = new Map()
myMap.set('IN',"India")
myMap.set('US',"USA")
myMap.set('CA',"Canada")
myMap.set('Ban',"Bangladesh")

console.log(myMap)
myMap.set('IN',"Indo")
console.log(myMap)
//more methods like map.keys(), .values()
for(let key of myMap.keys()){
    console.log(key)
}


// let myObj = {
//     "js":'javaScript',
//     c:"c",
//     py:"python",
//     rb:"ruby"
// }

// for(let key in myObj){
//     console.log(myObj[key])
// }

const programming = ["js","rb","py","java","cpp"]
// for(let key in programming){
//     console.log(key)
//     // console.log(programming[key])
// }

// for(let key of programming){
//     console.log(key)
// }