let menu = document.querySelector(".menu"),
closeMenu = document.querySelector(".close"),
aside = document.querySelector("aside");

menu.addEventListener("click", _ => {
    aside.style.display = "block";
});

closeMenu.addEventListener("click", _ => {
    aside.style.display = "none";
})