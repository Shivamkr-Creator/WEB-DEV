const btn = document.getElementById("modeBtn");
btn.addEventListener("click", () => {
    document.body.classList.toggle("light");

    // change button text
    if (document.body.classList.contains("light")) {
        btn.innerText = "🌙";
    } else {
        btn.innerText = "☀️";
    }
});
// save mode
localStorage.setItem("theme", document.body.classList.contains("light") ? "light" : "dark");

// on load
if (localStorage.getItem("theme") === "light") {
    document.body.classList.add("light");
}

function smoothScrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}