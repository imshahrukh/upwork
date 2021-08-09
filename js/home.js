const cross = document.getElementsByClassName("cross")[0];
const links = document.getElementsByClassName('nav-item')[0]


cross.addEventListener('click',(e)=>{
    links.classList.toggle("show");

})