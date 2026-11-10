// 5. The Sum Selector:
//    You are working on a function that should sum all numbers in an array until it encounters a negative number. Write a function that performs this summation.

let arr = [1, 2, 3, 4, -1, 5, 6];

let sum = 0;

function calSum(arr) {
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        if (element < 0) {
            console.log("encounters a negative number : ", arr[i]);
            console.log("at index : ", i);
            return sum;
        }
        sum = sum + element;
    }
}

let a = calSum(arr);
console.log(arr);
console.log("Sum until element incouter -ve : ", a);