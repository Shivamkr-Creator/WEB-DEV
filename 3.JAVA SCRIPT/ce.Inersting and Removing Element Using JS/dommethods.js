// document.designMode = "on" //used to see changes in browser for your device
// methods
console.log(document.querySelector(".box"));
//Attribute to find content inside a class/query
console.log(document.querySelector(".box").innerHTML);
console.log(document.querySelector(".container").innerHTML);
//Attribute to find whole things inside a class/query
console.log(document.querySelector(".container").outerHTML);
//Attribute to get tag name
console.log(document.querySelector(".container").tagName);
//Attribute to get tag node
console.log(document.querySelector(".container").nodeName);
//Attribute to get all the text inside a class
console.log(document.querySelector(".container").textContent);

//Attribute to hide the query
console.log(document.querySelector(".container").hidden);
console.log(document.querySelector(".container").hidden = true);

//we can change the innerHTML content
console.log(document.querySelector(".box").innerHTML = "I am Shivam");

//Attributes to check Attribute
console.log(document.querySelector(".box").hasAttribute("style"));
console.log(document.querySelector(".box").getAttribute("style"));
console.log(document.querySelector(".box").setAttribute("style","display: inline"));

//Attribute to get all Attributes
console.log(document.querySelector(".box").attributes);

//dataset Attribute
console.log(document.querySelector(".box").dataset);

//Attribute to remove the element
document.querySelector(".box").remove()

//Attributes to play with classes
document.querySelector(".container").className
document.querySelector(".container").classList
document.querySelector(".container").classList.add("shivam")
document.querySelector(".container").classList.remove("shivam")
document.querySelector(".container").classList.replace("shivam" , "Shivam")
document.querySelector(".container").classList.toggle("red")