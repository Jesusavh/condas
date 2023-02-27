const navbarLeft_DesktopMenu = document.querySelector('.navbar-left');
const menuMobile = document.querySelector('.menu-mobile');

const button_Menu_Mobile = document.querySelector('.button-menu-mobile');
button_Menu_Mobile.addEventListener('click', toggleMobileMenu);


//Variables de los campos de la seccion de animales
const agregar_nuevo_campo= document.querySelector('.agregar-nuevo-campo');
agregar_nuevo_campo.addEventListener('click', agregarCampo);
const animales_registrados = document.querySelector('.animales-registrados');

//Funcion que se encarga de mostrar y ocultar el menu en mobiles
function toggleMobileMenu(){
    menuMobile.classList.toggle('inactive')
}

function agregarCampo(){
    const animal_existente = document.createElement('div');
    animal_existente.classList.add('animales-existentes');

    animales_registrados.insertAdjacentElement('afterbegin',animal_existente);

}



