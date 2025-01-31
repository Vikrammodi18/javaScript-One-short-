// console.log(2 == "2")
// console.log("02">=2)
// comparison operator convert string into number 

// console.log(null > 0)
// console.log(null == 0)
// console.log(null <=0)
/* the reason is that an equality check == and comparisons > < >= <= 
works differently
comparisons convert null to number, treating it as 0
that why (1) null > 0  --> 0 > 0 is false
(3) 0 <= 0  ---> 0 <= 0 is true
*/



// ===
// it check the value as well as datatype
console.log("33" === "333")