// Pika-pika suerte!



//selecciono los cuadros de colores

let red = document.querySelector('#red');
let blue = document.querySelector('#blue');
let green = document.querySelector('#green');
let sangria = document.querySelector('#sangria');

//selecciono imagen Pikachu por su id

let pikachu = document.querySelector('#pikachu');

//selecciono contenedor principal que contiene los cuadros de colores, asocio el evento click

let buttons = document.querySelector('#colors');

//creo el evento para que sea ejecutado la función que toma event como argumento

buttons.addEventListener('click', function (event) {
    console.log("El color pulsado es el color: " + event.target.id); console.log("El color pulsado es el color: " + event.target.id);

    //obtenemos el color del elemento que se hizo clic para asignar sus estilos incluido el color de fondo de Pikachu para así obtener el color seleccionado 
    
    const color = window.getComputedStyle(event.target).backgroundColor;
    pikachu.style.backgroundColor = color;


});

