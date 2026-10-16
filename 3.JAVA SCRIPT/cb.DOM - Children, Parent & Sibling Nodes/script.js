console.log("Hello World");

// first element child 
document.body.firstElementChild
// first parent element of child 
document.body.firstElementChild.parentElement
//gives all nodes of including text,comment and elements
document.body.firstElementChild.childNodes
//gives all the html elements
document.body.firstElementChild.children
//gives 5th the html elements
document.body.firstElementChild.children[4]
//gives 4th the html elements
document.body.firstElementChild.children[4].previousElementSibling
//gives 4th the node
document.body.firstElementChild.children[4].previousSibling