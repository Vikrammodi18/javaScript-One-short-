// const coding = ["java", "js", "python", "c++"];

// const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const value = myNums.filter((val) => val > 4);
// console.log(value);

// const myBooks = [
//   { bookName: "book one",
//     genre: "science",
//     publish: 2009,
//     edition: 2010 },
//   {
//     bookName: "The Great Gatsby",
//     edition: "1st",
//     genre: "Fiction",
//     publishyear: 1925,
//   },
//   {
//     bookName: "To Kill a Mockingbird",
//     edition: "1st",
//     genre: "Fiction",
//     publishyear: 1960,
//   },
//   {
//     bookName: "1984",
//     edition: "1st",
//     genre: "Dystopian",
//     publishyear: 1949,
//   },
//   {
//     bookName: "A Brief History of Time",
//     edition: "1st",
//     genre: "Non-Fiction",
//     publishyear: 1988,
//   },
//   {
//     bookName: "The Catcher in the Rye",
//     edition: "1st",
//     genre: "Fiction",
//     publishyear: 1951,
//   },
//   {
//     bookName: "The Hobbit",
//     edition: "1st",
//     genre: "Fantasy",
//     publishyear: 1937,
//   },
//   {
//     bookName: "Pride and Prejudice",
//     edition: "1st",
//     genre: "Romance",
//     publishyear: 1813,
//   },
//   {
//     bookName: "The Da Vinci Code",
//     edition: "1st",
//     genre: "Mystery",
//     publishyear: 2003,
//   },
//   {
//     bookName: "The Lord of the Rings",
//     edition: "2nd",
//     genre: "Fantasy",
//     publishyear: 1954,
//   },
//   {
//     bookName: "The Alchemist",
//     edition: "1st",
//     genre: "Fiction",
//     publishyear: 1988,
//   },
// ];

/*
filter()
  filter element according to condition 
  callback always return true or false 
  if true then return that value in the form of array
*/

// const bookCollection = myBooks.filter((bk)=> bk.edition === "1st" && bk.publishyear>=1988)
// console.log(bookCollection)

/* 
  map are used in to transform new array from original array according to a callback function
*/
// let newNum = [1,2,3,4,5,6,7,8,9]
// // let value = newNum.map((val)=>  val*2)
// // console.log(newNum)
// // console.log(value)
// // chaining method in callbacks
// let value = newNum.map((val)=> val*10)
//                   .map((val)=>val+5)
//                   .filter((val)=> val>=55)
// console.log(value)

let numbers = [1,2,3]

let sum = numbers.reduce((acc,val)=> acc+val,0)
console.log(sum)