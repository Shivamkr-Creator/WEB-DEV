// 4. The Password Validator:
//    You are building a password validation feature. Create a function that checks if a given password meets the following criteria: at least 8 characters long, contains both uppercase and lowercase letters, and includes at least one digit.

let password = prompt("Enter your password: ");

function toUpperCase(string){
    let upperCase = string.toUpperCase();
    return upperCase;
}

function toLowerCase(string){
    let lowerCase = string.toLowerCase();
    return lowerCase;
}

function passwordValidator(str){
    if(str.length < 8){
        console.log("Passwoed must be 8 character long!");
    }else if(str === toUpperCase(str) || str === toLowerCase(str)){
        console.log("Password must contains at least one Capital and one Small Letter");
    }else if(/\d/.test(str) == false){
        console.log("Password must contains at least one digit");
    }
}

passwordValidator(password);
console.log("Password is valid!");