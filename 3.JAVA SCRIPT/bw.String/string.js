console.log("Welcome to string tutorial");
let a = "shivamsh";
console.log(a[0]);
console.log(a[1]);
console.log(a[2]);
console.log(a[3]);
console.log(a[4]);
console.log(a[5]);
// console.log(a[6]);
console.log(a.length);

let bro = "Nayan";
console.log("His name is "+a+" and his brother name is "+bro);

//Template letrals
console.log(`His name is ${a} and his brother name is ${bro}`);

//Properties
console.log(a.toLocaleUpperCase());
console.log(a.toLocaleLowerCase());
console.log(a.length);
console.log(a.slice(2,5));
console.log(a.replace("sh","78"));
console.log(a.concat(bro, "rahul" ,"kishan"+"manjit"+"prince"));
console.log(a.charAt(2));
let n="             shivam   ";
console.log("before trim "+n);
console.log("after trim "+n.trim());