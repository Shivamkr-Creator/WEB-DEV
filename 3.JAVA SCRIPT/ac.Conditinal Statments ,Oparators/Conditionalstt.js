const age = 20;
const hasid = true;
const membershiptype = "PREMIUM";
const accountbalance = 50;

console.log("Condition statement demo :-");

//basic if 
if (age >= 18) {
    console.log("1.Basic if : User is adult");
}
//if else
if (hasid) {
    console.log("2.if ...else :A verified user");
} else {
    console.log("2.if ...else :Not a verified user");
}
//else if
if (membershiptype === "Guest") {
    console.log("3.Chain : you are on a guest acc");
} else if (membershiptype === "Standard") {
    console.log("3.Chain : you have 1 month sub");
} else if (membershiptype === "Premium") {
    console.log("3.Chain : you have unlimited things");
} else {
    console.log("3.Chain : not access");
}
//Nested if statment
if (age >= 18) {
    if (accountbalance >= 20) {
        console.log("4.Nested if : user is adult having enough money");
    } else {
        console.log("4.Nested if : user is adult having enough money");
    }
}
//switch case statment
const vacationday = 5;
switch (vacationday) {
    case (1):
        console.log("you can take vacation after 4 days");
        break;
    case (2):
        console.log("you can take vacation after 3 days");
        break;
    case (3):
        console.log("you can take vacation after 2 days");
        break;
    case (4):
        console.log("you can take vacation after 1 day");
        break;
    case (5):
        console.log("you can take vacation");
        break;
    default:
        console.log("cant take vacation");
}