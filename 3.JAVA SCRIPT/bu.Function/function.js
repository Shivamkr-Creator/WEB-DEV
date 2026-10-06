function nice(name) {
    console.log("Hey "+name+" your are nice!");
    console.log("Hey "+name+" your are good!");
    console.log("Hey "+name+" your tr-shirt is nice!");
    console.log("Hey "+name+" your are looking good!");   
}
// nice("Shivam");
// nice("Nayan");

function sum(a,b,c=3){
    // console.log(a+b);
    return a+b+c;
}

s1=sum(2,4);
s2=sum(22,34);
s3=sum(2,4,9);
console.log("sum of these num : "+s1);
console.log("sum of these num : "+s2);
console.log("sum of these num : "+s3);

const f1 = (x)=>{
    console.log("I am fuction ",x);
}
f1(23);
f1(45);
f1(34);