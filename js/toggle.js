const root = document.querySelector("html");
const btn = document.querySelector("button");

const savedTheme = localStorage.getItem("theme");
if (savedTheme === "dark") {
  root.classList.add("dark");
}

function toogleDarkMode() {
  root.classList.toggle("dark");

  if (root.classList.contains("dark")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
}

btn.addEventListener("click", toogleDarkMode);
