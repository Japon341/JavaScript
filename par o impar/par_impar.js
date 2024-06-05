/*Solicita al usuario que introduzca un número y almacena el valor 
en la variable i*/
let i = prompt ("Introduce tu número");



//Convierte la cadena de texto recibida de prompt 
//a un número usando Number() y la guarda en la variable numero.
let numero = Number(i);


if (numero  %2 == 0){  //Comprueba si el número es divisible por 2 sin residuo)   
    alert("El número es par");
}
else{
    alert("El número es impar");
}