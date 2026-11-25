let a= prompt("Enter a number : ");
let fact=1;
for (let index = a; index >=1 ; index--) {
    const element = index;
    fact = fact*index;
}
console.log("factorial "+"of "+a+" : "+fact);

// let a= 5;

// function factorial(number){
//     let arr= Array.from(Array(number+1).keys())
//     let c= arr.slice(1,).reduce((a, b)=> {
//     return a*b
//     })
//     return c;
// }
// console.log(factorial(a));