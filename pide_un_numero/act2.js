
do {
    let pide = prompt("dame un número");


    if (Number(pide) == pide) {

        if (Number > 0) {
            alert("Es positivo");
        }

        else if(Number <  0) {
            alert("Es negativo");
        }
    }


        else{
            if(pide != undefined)  {
                alert("Introduce un numero valido");
            }
        }
}
while( pide != undefined); 
