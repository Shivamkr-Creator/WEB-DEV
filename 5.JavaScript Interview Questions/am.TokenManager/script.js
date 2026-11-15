// 12. The Token Manager:
//     You are developing a user authentication system, and you need to manage user authentication tokens. Implement a function named setAuthToken that takes an authentication token and sets it in localStorage with an expiration time.

// let currentTime = new Date().getDate() + " " + new Date().getMonth() + " " + new Date().getFullYear();

// console.log(currentTime);

function setAuth(token ,exptime){
    let exactTime = new Date().getTime() + (exptime*60*1000);
    localStorage.setItem("token type" ,token);
    localStorage.setItem("expiry Time" ,exactTime+" "+new Date().getDate() +" "+new Date().getMonth() +" "+new Date().getFullYear());
    document.body.innerHTML += `<h2>token type : ${token}</h2><h2> expiry time : ${exactTime} (${new Date().getDate()}/${new Date().getMonth()}/${new Date().getFullYear()})</h2>`;
}

setAuth("my own token" ,10);