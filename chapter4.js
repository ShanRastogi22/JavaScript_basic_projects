// what is the following print in js 

let a = "shan\'r";
let b = "shan\rr";
let c = "shan\nr";
let d = "shan\tr";
console.log(a)
console.log(b)
console.log(c)
console.log(d)
console.log(a.length)
console.log(a.length)
console.log(a.length)
console.log(a.length)

// example of includes 

const sent = "shan is not a losser";
const word = "shan";
console.log(sent.includes(word))
console.log(`the word "${word}" ${sent.includes(word)? `is` : `is not`} in the sentence`)

// extract the amount out of this string 


let str = "please give Rs 1000"
let am = Number.parseInt(str.slice('15'))
console.log(am)
console.log(typeof am)

// code