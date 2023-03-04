const navbarLeft_DesktopMenu = document.querySelector('.navbar-left');
const menuMobile = document.querySelector('.menu-mobile');
const button_Menu_Mobile = document.querySelector('.button-menu-mobile');
button_Menu_Mobile.addEventListener('click', toggleMobileMenu);
//Variables de los campos de la seccion de animales
const agregarNuevoCampoAnimales= document.querySelector('#btnAddAnimales');
const animales_registrados = document.querySelector('.animales-registrados');
const animales_registrados_modal = document.querySelector('.animales-existentes-modal')
const btnVerAnimales = document.querySelector('.ver-animales');
const btnCloseVerAnimales = document.querySelector('.closed-modal');
//variables de los campos de la seccion de siembra
const agregarNuevoCampoSiembra = document.querySelector('#btnAddSiembra');
const siembrasRegistradas = document.querySelector('.siembras-registradas')


// //Ejemplo de un modal.
// const modal = document.querySelector('.animales-totales-modal');

// animalesTotales.onclick = function(){
//     modal.style.display = 'flex';
// }
// //cuando se de click fuera de la ventana del modal que desaparezca
// window.onclick = function(event){
//     if(event.target == modal){
//         modal.style.display = 'none';
//         modal.style.cursor = 'pointer';
//     }
// }


//Funcion que se encarga de mostrar y ocultar el menu en mobiles
function toggleMobileMenu(){
    menuMobile.classList.toggle('inactive')
}
//Variable encargada de guardar todas las etiquetas html que tengan como id "#btnAdd"
const btnNuevoCampo = document.querySelectorAll("#btnAdd");

//funcion anonima que se encarga de crear un nuevo campo en el campo que la condicion indique
const crearNuevoCampo = function () {
	// Recuerda, this es el elemento
    const condicional = this.parentElement.className;
        new Promise( function(resolve, reject) {
            if(condicional == 'animales-registrados'){
                const animal_existente = document.createElement('div');

                const animalExistenteNombre = document.createElement('div');
                const animalExistenteAlimento = document.createElement('div');
                const animalExistenteEdad = document.createElement('div');
                const animalNombre = document.createElement('p');
                const animalAlimento = document.createElement('p');
                const animalEdad= document.createElement('p');
                animalNombre.innerText = 'Nombre';
                animalAlimento.innerText = 'Nombre';
                animalEdad.innerText = 'Nombre';
                animalExistenteNombre.append(animalNombre);
                animalExistenteAlimento.append(animalAlimento);
                animalExistenteEdad.append(animalEdad);
                animal_existente.classList.add('animales-existentes');
                const btnVerAnimales = document.createElement('button');
                btnVerAnimales.innerText = 'Ver';
                btnVerAnimales.classList.add('ver-animales');
                btnVerAnimales.addEventListener('click',function(){
                    animales_registrados_modal.style.display = 'flex';
                } )
                
                window.onclick = function(event){
                    if(event.target == animales_registrados_modal){
                        animales_registrados_modal.style.display = 'none';
                    }
                }
                        
                animal_existente.append(animalExistenteNombre, animalExistenteAlimento, animalExistenteEdad,btnVerAnimales);
                animales_registrados.insertAdjacentElement('afterbegin',animal_existente);
                resolve('Realizado');
            }else{
                reject((error) =>{
                    console.log(error)
                } );
            }
            })


    if(condicional == 'siembras-registradas'){
        const siembraExistente = document.createElement('div');
        siembraExistente.classList.add('siembras-existentes');
    
        siembrasRegistradas.insertAdjacentElement('afterbegin',siembraExistente);
    }
    }
	
//Recorre todos los campos del y retorna su index, en dado caso no se consiga retorna undefined
btnNuevoCampo.forEach(boton => {
	//se almacena la respuesta
	boton.addEventListener("click", crearNuevoCampo);
});//SI NO ME ACUERDO DE ALGO PREGUNTARLE A OMAR Y VIVAS.

//Agregando un modal a animales para ver en una ventana "aparte" todos sus datos.
btnVerAnimales.addEventListener('click',function(){
    animales_registrados_modal.style.display = 'flex';
} )


btnCloseVerAnimales.onclick = function(){
    animales_registrados_modal.style.display = 'none';
}

