console.log("This is Promises");
let rand = Math.random();
let prom1 = new Promise((resolve, reject)=>{
    if(rand< 0.5){
        reject("Random number not supporting you");
    }else(
        setTimeout(()=>{
            console.log("Yes I am done");
            resolve("Shivam");
        }, 3000)
    )
})
let prom2 = new Promise((resolve, reject)=>{
    if(rand< 0.5){
        reject("Random number not supporting you 2");
    }else(
        setTimeout(()=>{
            console.log("Yes I am done 2");
            resolve("Shivam 2");
        }, 1000)
    )
})

// let p3 = Promise.all([prom1 ,prom2]);
// let p3 = Promise.allSettled([prom1 ,prom2]);
let p3 = Promise.race([prom1 ,prom2]);
p3.then((a)=>{
    console.log(a);
}).catch((err)=>{
    console.log(err);
})
// prom1.then((a) => {
//     console.log(a);
// }).catch((err)=>{
//     console.log(err);
// })