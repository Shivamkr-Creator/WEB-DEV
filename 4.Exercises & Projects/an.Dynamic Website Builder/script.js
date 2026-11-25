function createCard(title, cName ,views ,monthold,duration,thumbnail){
    let viewstr;
    if (views<1000000) {
            viewstr = views/1000 + "K";
        }else if (views>1000000) {
            viewstr = views/1000000 + "M";
        } else {
            viewstr = views/1000 + "K";
        }
    
    let html = `<div class="card">
            <div class="image">
                <img src="${thumbnail}" alt>
                <div class="capsule">${duration}</div>
            </div>
            <div class="text">
                <h1>${title}</h1>
                <p>${cName} . ${viewstr} views . ${monthold} months ago</p>
            </div>
        </div>`
        document.getElementById("container").innerHTML += html;
    return html;
}
createCard("shivam", "shiaye" , 489300000 ,1,"10:08","https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw");