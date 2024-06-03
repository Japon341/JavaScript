//BUCLE CON FOR 

//SINTAXIS BUCLE FOR //

/*for( variable, condicion, salida) {

}*/


for( let i = 1; i <= 5; i++){
  console.log(i);
};




//2ºEjemplo//

const fruits = ['platano', 'mandarina', 'limon'];

for (let i = 0; i < fruits.length; i++ ){   //Creamos una variable que se llame i y sea igual a 0, si i es menor que el tamaño de la lista que en este caso es 3 llamada fruits, pues imprimo el valor en el que estoy//
    console.log(fruits[i]);
} 




//3º Ejemplo//

for (let i = 1; i <= 5; i++) {
    let row = 0;
    for (let j = 1; j <= 5; j++ ) {
        row = row + (i * j );
        console.log(row);
    }
}
