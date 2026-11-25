// let obj = {
//     a : "Shivam",
//     b : 122
// };

// console.log(obj);

// let animal = {
//     eats : true
// };
// let rabbit = {
//     jumps : true
// };

// rabbit.__proto__ = animal; // sets rabbit.[[Prototype]] = animal

class Animal {
    constructor(name){
        this.name = name;
        console.log("Object is created...");
    }

    eats(){
        console.log("I am eating");
    }

    jumps(){
        console.log("I am jumping");
    }
}

class Lion extends Animal {
    constructor(name){
        //super keyword is used to call the super class elements
        super(name);
        console.log("Object is created and he is a lion...");
    }

    //method overiding
    eats(){
        //super keyword is used to call the super class elements
        super.eats();
        console.log("Lion eats meet");
    }
}

let a = new Animal("Bunny");
console.log(a);

let l = new Lion("Shera");
console.log(l);

console.log("l instanceof Lion");
console.log(l instanceof Lion);
console.log("a instanceof Lion");
console.log(a instanceof Lion);
console.log("l instanceof Animal");
console.log(l instanceof Animal);