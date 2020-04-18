let username = document.querySelector("#username")
let content = document.querySelector("#content")
let btn = document.querySelector(".btn")
let card = document.querySelector(".card-body")
const map = new Map();
btn.addEventListener("click", function (event) {
    event.preventDefault();
    let name = username.value;
    let text = content.value;
    mp(name, text);
})
let mp = (name, text) => {
    map.set(name, text);
    for (const [key, value] of map) {
        let title = document.createElement("h5");
        title.className = "card-title";
        title.innerHTML = `${key}:`;
        let p = document.createElement("p");
        p.className = "card-text";
        p.innerHTML = `&nbsp;&nbsp;${value}<hr/>`;
        card.appendChild(title)
        card.appendChild(p)
    }
}