let a= prompt("Enter a number : ");
let fact;
for (let index = a; index >=1 ; index++) {
    const element = index;
    fact = fact*index;
}
console.log("factorial "+"of "+a+" : "+fact);