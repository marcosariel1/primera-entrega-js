//CONDICIONALES

//Ejemplo 1
let numero = prompt("Ingrese número");

if (numero < 5) {
   alert ("El número es menor de 5");

}
else if ( numero >= 5){
    alert ( "El número es igual o mayor de 5");
}

//Ejemplo 2
let usuario1 = "Marcos";
let usuario2 = "Ariel";

let usuarioIngresado = prompt ("Ingrese su nombre de usuario");

if (usuarioIngresado ===  usuario1 || usuarioIngresado === usuario2) {
    alert ( "Bienvenido " + usuarioIngresado)
}
else{
    alert ("Usuario desconocido");
}


//CICLOS

let x = 2;
while (x <= 6) {
    console.log ( "Marcos " + x);
    x=x+1;
}

//FUNCIONES
//Declarada

function saludo (nombre) {
    console.log ("Buenos días " + nombre);
}
saludo ("Milton");

//Flecha
const saludar = nombre => console.log ("Buenas noches " + nombre);
saludar ("Milton");