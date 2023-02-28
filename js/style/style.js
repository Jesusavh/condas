const navbarLeft_DesktopMenu = document.querySelector('.navbar-left');
const menuMobile = document.querySelector('.menu-mobile');

const button_Menu_Mobile = document.querySelector('.button-menu-mobile');
button_Menu_Mobile.addEventListener('click', toggleMobileMenu);


//Variables de los campos de la seccion de animales
const agregarNuevoCampoAnimales= document.querySelector('#btnAddAnimales');
agregarNuevoCampoAnimales.addEventListener('click', agregarCampoAnimales);
const animales_registrados = document.querySelector('.animales-registrados');


//variables de los campos de la seccion de siembra
const agregarNuevoCampoSiembra = document.querySelector('#btnAddSiembra');
agregarNuevoCampoSiembra.addEventListener('click', agregarCampoSiembra)
const siembrasRegistradas = document.querySelector('.siembras-registradas')

//Funcion que se encarga de mostrar y ocultar el menu en mobiles
function toggleMobileMenu(){
    menuMobile.classList.toggle('inactive')
}

function agregarCampoAnimales(){
    const animal_existente = document.createElement('div');
    animal_existente.classList.add('animales-existentes');

    animales_registrados.insertAdjacentElement('afterbegin',animal_existente);

}

function agregarCampoSiembra(){
    const siembraExistente = document.createElement('div');
    siembraExistente.classList.add('siembras-existentes');

    siembrasRegistradas.insertAdjacentElement('afterbegin',siembraExistente);
}


