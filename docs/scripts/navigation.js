var e=document.querySelector(".header-main"),a=e.querySelector(".header-main__burger"),r=e.querySelectorAll(".header-main__item--has-menu");e.classList.remove("header-main--no-js");var i=()=>{a.addEventListener("click",()=>{e.classList.contains("header-main--menu-open")?(e.classList.remove("header-main--menu-open"),a.classList.remove("header-main__burger--open")):(e.classList.add("header-main--menu-open"),a.classList.add("header-main__burger--open"))})},t=()=>{r.forEach(n=>{n.querySelector(".header-main__list-opener").addEventListener("click",()=>{n.classList.contains("header-main__item--open")?n.classList.remove("header-main__item--open"):n.classList.add("header-main__item--open")})})};export{i as burgerToggle,t as innerListOpener};