// 10. The Coffee Machine:
//     In your coffee shop application, you need to simulate the process of brewing coffee asynchronously. Write an async function named brewCoffee that takes the type of coffee and returns a promise. The promise should resolve with a message indicating that the coffee is ready after a random delay.

let delay = Math.floor(Math.random()*5000)+1000;
console.log(delay);
async function brewCoffee(coffeeType) {
    return new Promise((resolve) => {
        console.log(`Brewing ${coffeeType}...`);
        setTimeout(() => {
            resolve(`coffee is ready after ${Math.round(delay/1000)}s`);
        }, delay);
    })
}

async function main() {
    const coffee = await brewCoffee("Espresso");
    console.log(coffee);
}

main();