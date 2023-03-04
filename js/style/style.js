const navbarLeft_DesktopMenu = document.querySelector('.navbar-left');
const menuMobile = document.querySelector('.menu-mobile');
const button_Menu_Mobile = document.querySelector('.button-menu-mobile');
button_Menu_Mobile.addEventListener('click', toggleMobileMenu);
//Variables de los campos de la seccion de animales
const animales_registrados = document.querySelector('.animales-registrados');
const animales_registrados_modal = document.querySelector('.animales-existentes-modal')
//variables de los campos de la seccion de siembra
const siembrasRegistradas = document.querySelector('.siembras-registradas');
//Variable encargada de guardar todas las etiquetas html que tengan como id "#btnAdd"
const btnNuevoCampo = document.querySelectorAll("#btnAdd");

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


//funcion anonima que se encarga de crear un nuevo campo en el campo que la condicion indique
const crearNuevoCampo = function () {
	// Recuerda, this es el elemento
    const condicional = this.parentElement.className;
    //campos donde se encuentran los datos de animales
    if(condicional == 'animales-registrados'){
        renderizarAnimales('nombre', 'comida', 'edad');
    }
    if(condicional == 'siembras-registradas'){
        renderizarSiembras('yuka', 'la que te entren');
    }
    }

	
//Recorre todos los campos del y retorna su index, en dado caso no se consiga retorna undefined
btnNuevoCampo.forEach(boton => {
	//se almacena la respuesta
	boton.addEventListener("click", crearNuevoCampo);
});//SI NO ME ACUERDO DE ALGO PREGUNTARLE A OMAR Y VIVAS.


const renderizarAnimales = function(nombre, alimento, edad) {
    //Agregando un modal a animales para ver en una ventana "aparte" todos sus datos.
    const animal_existente = document.createElement('div');
    const animalNombre = document.createElement('p');
    const animalAlimento = document.createElement('p');
    const animalEdad= document.createElement('p');

    //agregando informacion a los parrafos de datos de animales.
    animalNombre.innerText = `Nombre: ${nombre}`;
    animalAlimento.innerText = `Alimento: ${alimento}`;
    animalEdad.innerText = `Edad: ${edad}`;
    //añadiendo parrafos de animales a su div correspondiente
    
    animal_existente.classList.add('animales-existentes');
    //creando boton de ver datos.
    const btnVerAnimales = document.createElement('button');
    btnVerAnimales.innerText = 'Ver';
    btnVerAnimales.classList.add('ver-datos');
   
    //creando el modal
    const datosAnimalesExistentes = document.createElement('div');
    datosAnimalesExistentes.classList.add('datos-animales-existentes');
    const btnCloseAnimalModal = document.createElement('button');
    btnCloseAnimalModal.innerHTML = 'Cerrar';
    btnCloseAnimalModal.classList.add('closed-modal');
    //añadiendo funcionalidad al boton
    btnVerAnimales.addEventListener('click',function(){
        console.log(datosAnimalesExistentes)
        animales_registrados_modal.style.display = 'flex';
    } )
    btnCloseAnimalModal.addEventListener('click', function(){
        animales_registrados_modal.style.display = 'none';
    })
              
    window.onclick = function(event){
        if(event.target == animales_registrados_modal){
            animales_registrados_modal.style.display = 'none';
        }
    }
    

    //agregando todos los datos al div de animales_existentes
    animal_existente.append(animalNombre, animalAlimento, animalEdad,btnVerAnimales);
    //añadiendo animales existentes al div de animales_registrados.
    animales_registrados.insertAdjacentElement('afterbegin',animal_existente);
    datosAnimalesExistentes.append(animalNombre, animalAlimento, animalEdad, btnCloseAnimalModal);
    animales_registrados_modal.replaceChildren(datosAnimalesExistentes);

            
}
const renderizarSiembras = function(nombre, hectareas){
    const siembraExistente = document.createElement('div');
    siembraExistente.classList.add('siembras-existentes');
    const nombreCultivo = document.createElement('p');
    const cantidadHectareas = document.createElement('p');
    nombreCultivo.innerHTML = `Nombre: ${nombre}`;
    cantidadHectareas.innerHTML = `Hectareas: ${hectareas}`;
    const btnVerSiembra = document.createElement('button');
    btnVerSiembra.innerText = 'Ver';
    btnVerSiembra.classList.add('ver-datos');


    const datosAnimalesExistentes = document.createElement('div');
    datosAnimalesExistentes.classList.add('datos-animales-existentes');
    const btnCloseAnimalModal = document.createElement('button');
    btnCloseAnimalModal.innerHTML = 'Cerrar';
    btnCloseAnimalModal.classList.add('closed-modal');
    //añadiendo funcionalidad al boton
    btnVerSiembra.addEventListener('click',function(){
        console.log(datosAnimalesExistentes)
        animales_registrados_modal.style.display = 'flex';
    } )
    btnCloseAnimalModal.addEventListener('click', function(){
        animales_registrados_modal.style.display = 'none';
    })
              
    window.onclick = function(event){
        if(event.target == animales_registrados_modal){
            animales_registrados_modal.style.display = 'none';
        }
    }

    
    

    siembraExistente.append(nombreCultivo, cantidadHectareas, btnVerSiembra);
    siembrasRegistradas.insertAdjacentElement('afterbegin', siembraExistente)
    datosAnimalesExistentes.append(nombreCultivo, cantidadHectareas, btnCloseAnimalModal);
    animales_registrados_modal.replaceChildren(datosAnimalesExistentes);
}