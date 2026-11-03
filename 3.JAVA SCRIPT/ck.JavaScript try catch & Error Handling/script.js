let a = prompt("Enter a : ");
let b = prompt("Enter b : ");

//passed as string beacause prompt is used to take string
// let sum = a + b;
let sum = parseInt(a) + parseInt(b);


//throunging a error
if (isNaN(a) || isNaN(b)) {
    throw new Error("Invalid input Please enter numbers");
}

function main() {
    //try catch in error handing
    let x = 4;
    try {
        console.log("sum is : " + sum * x);
        return true
    } catch (error) {
        console.log("Error Aa Gaya Bhai");
    }
    // finally is used when we want to execute the code after returning something in try or catch beacause after returning something in try or catch other code will not run noramally if we want to execute that one we must have to use finally
    finally {
        console.log("files are being closed and db connection is being closed");
    }
} 
let c= main()