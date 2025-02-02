let myDates = new Date()
// console.log(myDates.toString()) // it change the millisecond dates in human readable formate
// console.log(String(myDates)) 
// console.log(myDates.toLocaleDateString()) // day/month/year
// console.log(myDates.toLocaleString()) //dates and time
// console.log(myDates.toDateString()) // day's name / month's name/ date/ year
// console.log(typeof myDates)

const createdDate = new Date(2024, 1 , 30)
// console.log(createdDate.toDateString()) 
const timeStamp = new Date()
console.log(timeStamp.toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }))
let today = new Date(timeStamp.toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }))
let hr = today.getHours()
let min = today.getMinutes()

hr = (hr % 12 )|| 12

console.log(`${hr}:${min}`)