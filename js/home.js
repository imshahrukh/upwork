const cross = document.getElementsByClassName("cross")[0];
const links = document.getElementsByClassName("nav-item")[0];

const nav = document.getElementsByClassName("lst-child");
console.log(nav);
cross.addEventListener("click", (e) => {
  links.classList.toggle("show");
});

Array.from(nav).map((el) => {
  el.addEventListener("click", () => {
    console.log(el.classList.toggle("brd"));
    // if()
    localStorage.setItem("li", el);
  });
});
