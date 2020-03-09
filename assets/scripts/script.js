// menu
const hamburger = document.querySelector(".hamburger");
const lista = document.querySelector(".menu__lista");

hamburger.addEventListener('click', () => {
    lista.classList.toggle("menu__lista--abre")
});

// modal 
const abreModalBtns = document.querySelectorAll(".abre-modal");
const fechaModalBtns = document.querySelectorAll(".fecha-modal");
const modal = document.querySelector(".modal");
const mask = document.querySelector(".mask");
const form = document.querySelector(".formulario");

abreModalBtns.forEach(button => {
    button.addEventListener('click', () => {
        mask.style.transform = "scale(1)"
        form.style.transform = "scale(1)"
        modal.style.zIndex = "1";
    })
});

fechaModalBtns.forEach(button => {
    button.addEventListener('click', () => {
        mask.style.transform = "scale(0)"
        form.style.transform = "scale(0)"
        modal.style.zIndex = "-1";
    })
});

