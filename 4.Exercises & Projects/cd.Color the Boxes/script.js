console.log("Script.js initializing");
let boxes = document.querySelector(".container").children;

console.log(boxes);
function getRandomColor(){
    let v1 = Math.ceil(0 + Math.random()* 255);
    let v2 = Math.ceil(0 + Math.random()* 255);
    let v3 = Math.ceil(0 + Math.random()* 255);
    return `rgb(${v1}, ${v2}, ${v3})`
}
Array.from(boxes).forEach(e=>{
    e.style.backgroundColor = getRandomColor()
    e.style.color = getRandomColor()
})