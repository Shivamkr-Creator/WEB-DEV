console.log("Welcome to loops tutorial");
let a=1;
console.log(a);
console.log(a+1);
console.log(a+2);

//normal for loop
for (let i = 0; i  < 100; i++){
    console.log(a+i);
}

//for-in loop
let obj = {
    name:"shivam",
    role: "student",
    clg: "ranchi"
}
for (const key in obj) {
    const a= obj[key];
    console.log(key ,a);
}

//for-of loop
for (const c of "shivam") {
    console.log(c);
}

//while loop
