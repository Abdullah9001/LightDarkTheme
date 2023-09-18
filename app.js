const text = document.getElementById("text");
const toggle = document.getElementById("toggleDark");
const body = document.querySelector("body");

toggle.addEventListener("click", function () {
  this.classList.toggle("bi-moon");
  if (this.classList.toggle("bi-brightness-high-fill")) {
    body.style.backgroundColor = "white";
    body.style.color = "black";
    body.style.transition = "2s";
    text.innerText = "Light Theme";
  } else {
    body.style.backgroundColor = "black";
    body.style.color = "white";
    body.style.transition = "2s";
    text.innerText = "Dark Theme";
  }
});
