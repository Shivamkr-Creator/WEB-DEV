let button= document.getElementById("btn");

button.addEventListener("dblclick", ()=>{
    document.querySelector(".box").innerHTML = "<b>Yayy you did it</b> Enjoy your click!"
})
button.addEventListener("contextmenu", ()=>{
    alert("Don't hack us by right click!");
})
button.addEventListener("keydown", (e)=>{
    console.log(e,e.key,e.keyCode);
})
