async function getData(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(455)
        }, 3500);
    })
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