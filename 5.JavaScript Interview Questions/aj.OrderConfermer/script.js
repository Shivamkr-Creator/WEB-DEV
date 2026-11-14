// 9. The Asynchronous Shopper:
//    Imagine you are building an online shopping application. Write an asynchronous function called placeOrder that simulates placing an order and returns a promise. The promise should resolve with an order confirmation message after a random delay.

let delay = (2000 * Math.random()) + 1000;

console.log(delay);

async function placeOrder(item) {
    return new Promise((resolve) => {
        console.log("Order placement is in progress...");
        console.log(`item name : ${item}`);
        setTimeout(() => {
            resolve("Order placed successfully!");
        }, delay);
    })
}

async function main(){
    let result1 = await placeOrder("Shoes");
    console.log(result1);
}

main();