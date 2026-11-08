if (localStorage.getItem("name")) {
    a = localStorage.getItem("name");
    document.write("Welcome " + a);
} else {
    let a = prompt("Enter Your Name");
    localStorage.setItem("name", a);
    document.write("Welcome " + a);
}

let obj = {
    "Shivam": 1,
    "Nayan": 2
}
console.log(obj);
//stringify is used for conversion into a string
console.log(localStorage.getItem("Brothers", JSON.stringify(a)));
//gives as a string
console.log(localStorage.getItem("Brothers"));
//gives as a object
console.log(JSON.parse(localStorage.getItem("Brothers")));