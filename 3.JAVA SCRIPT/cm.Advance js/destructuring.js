//de-structuring in array
let [x, y] = [1, 5, 7];//7 is not assigned any where
console.log(x, y);
let [a, b, ...rest] = [1, 9, 7, 2, 3, 8, 22];//other are assigned in array
console.log(a, b, rest);

//de-structuring in object
let obj = {
    m: 14,
    n: 12,
    o: 13
};
let { m, n } = obj;
console.log(m, n);