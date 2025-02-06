const coding = ["js","ruby","java","python","cpp"]

// for(let value in coding){ // for in loop returns index value of an array
//     console.log(coding[value]) 
// }

// for(let value of coding){ // for of loop returns values of an array instead of their index 
//     console.log(value) 
// }

const codingLanguage = [
    {language:"java",fileName:"java"},
    {language:"python",fileName:"py"},
    {language:"javascript",fileName:"js"},
]

codingLanguage.forEach((val,index,arr)=>{ //forEach takes 3 parameter 1. value of an array 2.index of an array 3.array 
    const {language,fileName} = val
    console.log(index,language,fileName)
})