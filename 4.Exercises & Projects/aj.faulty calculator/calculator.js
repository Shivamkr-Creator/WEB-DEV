let rendom = Math.random();
console.log(rendom);
let a = prompt("Enter 1st number ");
let b = prompt("Enter 2nd number ");
let c = prompt("Enter operation ");

let obj={
    "+":"-",
    "-":"+",
    "*":"/",
    "/":"*"
}
if (rendom>0.5) {
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`);
}else{
    c=obj[c];
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`);
}