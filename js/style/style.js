const navbarLeft_DesktopMenu = document.querySelector('.navbar-left');
const menuMobile = document.querySelector('.menu-mobile');

const button_Menu_Mobile = document.querySelector('.button-menu-mobile');

button_Menu_Mobile.addEventListener('click', toggleMobileMenu);

function toggleMobileMenu(){
    menuMobile.classList.toggle('inactive')
}