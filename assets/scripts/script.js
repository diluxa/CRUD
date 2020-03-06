// menu
const hamburger = document.querySelector(".hamburger");
const lista = document.querySelector(".lista");

hamburger.addEventListener('click', () => {
    lista.classList.toggle("open")
});

// modal 
const openModalButtons = document.querySelectorAll(".open-modal");
const modal = document.querySelector(".modal");

openModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        modal.classList.add('mask-formulario--ativo')
    })
});


