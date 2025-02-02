//  truthy and falsy 
// falsy value:- false 0, -0, BigInt, "" , null, undefined, NaN

// truthy values:- "0" , "false", " ", [], {}, function(){}, 
//checking array is empty or not
 /*let emptyarr =[1,2]
if(emptyarr.length === 0){
    console.log("array is empty")
}else{
    console.log("array is not empty")
}

//checking object is empty or not
let emptyObj = {id:101}
if(Object.keys(emptyObj).length === 0){
    console.log("object is empty")
}else{
    console.log("object is not empty")
}


if(undefined){
    console.log("truthy value")
}else{
    console.log("falsy value")
} */

//nullish Coalescing Operator (??): null undefined
let val1;
// val1 = 5??10
// val1 = null?? 5
// val1 = undefined??10
// val1 = null ?? undefined

// console.log(val1)

// terniary operator
// conditon ? true : false 
let val =5<10 ? 5 : 10
console.log(val)


