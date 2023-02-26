// program to add first n natural number

let sum = 0;
let n = prompt("Enter any number here.................");
n = Number.parseInt(n);
for(let i = 0; i < n; i++) {
    sum += (i+1)
    // console.log(sum)
}
console.log("sum of first " + n + " natural number is" + sum)