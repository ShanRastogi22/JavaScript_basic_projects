//  convert an array into a string
/* let num = [1,2,3,34,];
 let b = num.toString()
 console.log(typeof num, num)
 console.log(typeof b, b)*/

//  pop ex.
/*let num = [1,2,3,34,];
let r = num.pop()
console.log(num, r)
console.log(typeof num, num)
console.log(typeof r, r)*/

// example of map method
/*let arr = [45, 56 , 67];
 let a = arr.map((value, index, array) =>{
    console.log(value, index, array)
    return value + index
 })
  console.log(a)*/

//   example of filter method 
/*let arr = [2,3,4,5,6,7,8,9,0,112,33,4,5,556,67,66];
let a = arr.filter((a) => {
    return a < 50 
})
console.log(a)*/

// array reduce method
/*let arr = [1,2,3,4,5,6];
let newarr = arr.reduce((h1,h2) =>{
    return h1  + h2
}) 
console.log(newarr)*/

//  Q1 creat an array of numbers and take input form the user to and numbers to ths array

/*let array = [8,5,2]
console.log(array)
let a = prompt("Enter any number here..........")
a = Number.parseInt(a)
array.push(a)
console.log(array)*/

// Q2 keep adding numbers to the array in 1 unit 0 is added to the array

/*let a = [2,3,4,6]
let b;
do {
    b = prompt("Enter any number here.............")
    b = Number.parseInt(b);
    a.push(b);
}
while (b!=0);
console.log(a)*/

// Q3 filter for numbers divisibel by 10 form a given array

// let newarry = [10,22,44,20,60];
// let n = newarry.filter((x) => {
//     return x % 10 == 0
// })
//  console.log(n)

// Q4 creat an array of square of given numbers

/*let array = []
let n = prompt("enter any num for squre");
n = Number.parseInt(n);
array.push(n)
s = array.map((x) => {
    return x*x
})
 console.log(s)*/

//  use reduce to calcuale factorial of a given numbers 

let a = [ 1,2,3,5,7,8,9,5]
 let b = a.reduce((x1,x2) => {
    return x1 * x2
 })
  console.log(b)
    