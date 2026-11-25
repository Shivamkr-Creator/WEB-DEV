// settle means resolve or reject 
// resolve means promise is fulfilled successfully
// reject means promise is rejected with an error


// async function getData(){
//     //simulate get data from a server
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             resolve(455)
//         }, 3500);
//     })
// }

// async function getData(){
//     // simulate get data from a server
//     let x = await fetch('https://jsonplaceholder.typicode.com/posts');
//     let data = await x.json();
//     return data ;
// }

async function getData(){
    // simulate get data from a server
    let x = await fetch('https://jsonplaceholder.typicode.com/posts',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            title: 'foo',
            body: 'bar',
            userId: 1
        })
    });
    let data = await x.json();
    return data;
}

async function main(){

    console.log("Loading modules");
    
    console.log("do something new");
    
    console.log("Load data");
    
    let data = await getData();
    
    console.log(data);
        
    console.log("proccess data");
    
    console.log("next task");
}

main()

// data.then((v) =>{
//     console.log(data);

//     console.log("proccess data");

//     console.log("next task");
// })