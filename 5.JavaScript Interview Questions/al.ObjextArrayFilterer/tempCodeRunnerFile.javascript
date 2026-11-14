let a = 10;
let b = "10";

function confirm(condition) {
    if (condition) {
        console.log("Condition is true");
    } else {
        console.log("Condition is false");
    }
}

confirm(a == b); // true, because == performs type coercion
confirm(a === b); // false, because === checks for both value and type