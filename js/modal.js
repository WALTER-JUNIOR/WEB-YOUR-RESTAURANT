let imagenes = document.querySelectorAll('.gallery__img')
let modal = document.getElementById('modal')
let modalimg = document.getElementById('modal__img')
let modalbtn = document.getElementById('modal__boton')

for (let i = 0; i < imagenes.length; i++) {
    imagenes[i].addEventListener('click', (e) => {
        modal.classList.toggle('modal--open')
        let src = e.target.src
        modalimg.setAttribute('src',src)
        modalbtn.addEventListener('click', () => {
            modal.classList.remove('modal--open')
        })
    });
}
