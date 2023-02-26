let a = prompt("Enter your age.......");
a = Number.parseInt(a);
console.log(typeof a);

if(a<0) {
    alert("This is an invalid age")
}
else if (a<9) {
    alert("You are a kind Don't think to drive")
}
else if (a<18 && a>=9){
    alert("After 18th you can drive")
}
else {
    alert("You can drive as you are above 18")
}