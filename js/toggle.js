const root = document.querySelector("html");
const btn = document.querySelector("button");

function toogleDarkMode() {
  root.classList.toggle("dark");
}

btn.addEventListener("click", toogleDarkMode);
