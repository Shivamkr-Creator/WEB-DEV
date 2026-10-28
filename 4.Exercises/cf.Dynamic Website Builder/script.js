function createCard(title, cName ,viewstr ,monthold,duration,thumbnail){
    let html = `<div class="card">
            <div class="image">
                <img src="thumbnail" alt>
            </div>
            <div class="text">
                <h1>${title}</h1>
                <p>${cName} . ${viewstr} views . 2 months ago</p>
            </div>
        </div>`;
    return html;
}