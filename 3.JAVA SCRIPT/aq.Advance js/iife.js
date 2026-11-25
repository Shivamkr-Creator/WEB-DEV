async function sleep() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(400);
        }, 1000);
    })
}

//imediatly invoke function expresion (IIFE)
(async function main() {
    let a = await sleep();
    console.log(a);
    let b = await sleep();
    console.log(b);
})()
