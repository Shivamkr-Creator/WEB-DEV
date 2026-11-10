// 3. The Mirror Mirror:
//    Imagine you have a string, and you need to create a new string that is a mirror image of the original. Write a function that appends the reversed version of the original string to itself.

// let a = "Shivam";

// console.log("Original String: " + a);
// console.log("Splited String: "  + a.split(''));
// console.log("Reversed String: "  + a.split('').reverse(''));
// console.log("joined String: "  + a.split('').reverse('').join(''));
let s = prompt("Enter a String to Mirror: ");


function mStr(str) {
    let reversedStr = str.split('').reverse('').join("");
    return str + reversedStr;
    // return reversedStr;
}

console.log("Mirrored String: " + mStr(s));