let arr=[1,10,3,4,11];

// let newArr=[];
// for (let index = 0; index < arr.length; index++) {
//     const element = arr[index];
//     newArr.push(element**2);
// }

let newArr = arr.map((e ,index,array)=>{
    return e**2;
})

const greaterthenfive = (e)=>{
    if (e>5) {
        return true
    }
    return false
}
console.log(arr.filter(greaterthenfive));
console.log(newArr.filter(greaterthenfive));

let s=[1,2,3,4,5];
const prd = (a,b)=>{
    return a+b;
}
console.log(s.reduce(prd));

let z=Array.from("shivam");
console.log(z);