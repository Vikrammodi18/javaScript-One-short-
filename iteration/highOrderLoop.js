//Array specific loop
let arr = [1,2,3,4,4,5,6]
// for(let val of arr){
//     console.log(val)
// }

// map only store unique key, we can itirate over map :- for(let val of mymap){}
// let myMap = new Map()
// myMap.set('IN',"India")
// myMap.set('US',"USA")
// myMap.set('CA',"Canada")
// myMap.set('Ban',"Bangladesh")

// console.log(myMap)
// myMap.set('IN',"Indo")
// console.log(myMap)

// for(let [key,val] of myMap){
//     console.log(key,val)
// }


let myObj = {
    "js":'javaScript',
    c:"c",
    py:"python",
    rb:"ruby"
}

for(let key in myObj){
    console.log(myObj[key])
}