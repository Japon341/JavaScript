console.log ("Hola mundo");


let myString3 = "Esto es una cadena de texto";
console.log(myString3);


let mynumber = 7 ;
mynumber = mynumber + 4 ;
console.log(mynumber);


//Boolean//
let mybool = false
mybool = true 
console.log (mybool);
console.log (typeof mybool)



mybool = null 
console.log (mybool + mynumber)


mybool = undefined
console.log (mybool)


let myUndefined
console.log(myUndefined)


//Constantes//

const Myconst =  "Mi primera constante"
//Myconst =  "Mi segunda constante"  NO SE PUEDE METER UNA VARIABLE DENTRO DE UNA CONSTANTE
console.log(Myconst)


//cONTROL DE FLUJO



if (mynumber == 10 && myString3 == "Hola" ) {
    console.log("El valor es 10")
} 
 else if (mynumber == 11 || myString3 == "Hola") {
    console.log("El valor es 11")
}
else {
    console.log("El valor NO es 10")
}


mybool = undefined
if (mybool == undefined ) {
    console.log("Null")
}




//FUNCIONES

function myFunction() {
        console.log ("Mi funcion")
}
myFunction()



//LISTAS O ARRAYS

let myList = ["Jurado", "Asencio", "Jaime", 20 ]
console.log (myList)
console.log (myList[0])
console.log (myList[1])



//SET
let mySet = new Set(["Jurado", "Asencio", "Jaime", 20, "Jaime" ])
mySet.add("Keiloger")
console.log (mySet) 




//MAPA

let myMap = new Map([[ "Jaime", 20], ["Manuel", 21], ["Zaragoza", 2 ] ])
myMap.set("JAime", 23 )
console.log(myMap)
console.log(myMap.get("Manuel"));


//BUCLES

for (const value of myMap) {
    console.log(value) 
}


let Mycounter = 0 
while (Mycounter <= myList.length  ){
    console.log(myList[Mycounter]);
    Mycounter++ ;
}






//CLASES

class MyClase1 {
    constructor( name , age) {
        this.name = name 
        this.age = age
    }
}
let myClase1 = new MyClase1( "Jaime" , 20 )
console.log(myClase1)