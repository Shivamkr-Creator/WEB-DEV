console.log("Shivam is a Hacker");
console.log("Nayan is a Hecker");
//this is skipped due to the asymptotic nature of javascript
setTimeout(() => {
    console.log("I am in setTimeout Function");
}, 0);
setTimeout(() => {
    console.log("I am in setTimeout Function");
}, 0);
//this is executed
console.log("The End");

const fn = () => {
    console.log("Nothing");
}
const callback = (arg ,fn) => {
    console.log(arg);
    fn()
}

const loadScript = (src, callback) => {
    let sc = document.createElement("script");
    sc.src = src;
    sc.onload = callback("Shivam",fn);
    document.head.append(sc);
}

loadScript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js", callback)