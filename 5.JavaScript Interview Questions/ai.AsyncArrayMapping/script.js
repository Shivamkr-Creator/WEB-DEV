// 8. Async Array Mapping:
//    Write an asynchronous function that takes an array of numbers and returns a new array of Promises where each number is multiplied by 2 after a delay of 500 milliseconds.
let numbers = [1, 2, 3, 4, 5];

async function doubleArr(num) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(num * 2);
        }, 500);
    })
}

async function main() {
    // Step 1: numbers.map(...)
    // numbers = [1,2,3,4,5] hai
    // map ek-ek karke number nikalta hai -> pehle 1, fir 2, fir 3...
    // aur har ek ko doubleArr() me bhej deta hai


    // Step 2: doubleArr(n)
    // Ye har number ko 500ms baad double karke deta hai
    // Par ye seedha number nahi deta, ek Promise (dabba) deta hai
    // To ab hamare paas 5 dabbe ho gaye - [Promise, Promise, Promise, Promise, Promise]

    let promises = numbers.map(n => doubleArr(n));
    console.log(promises); // [Promise, Promise, Promise, Promise, Promise]

    // Step 3: Promise.all(...)
    // Ye bolta hai "jab tak 5 ke 5 dabbe nahi khulenge, tab tak aage mat badho"
    // Sabke banne ka wait karta hai

    let allPromises = Promise.all(promises);
    console.log(allPromises); // Promise { <pending> } 

    // Step 4: await
    // Ye saare dabbo ko khol ke andar se asli number nikalta hai
    // [2,4,6,8,10] ban jata hai
    // let result = await Promise.all(numbers.map(n => doubleArr(n)));
    let result = await allPromises;
    console.log(result);
}

main();