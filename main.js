let monedas = [
   {moneda1 : "Dolar Blue", valor1: 326},
   {moneda2 : "Euro Blue", valor2: 341},
   {moneda3 : "Real", valor3: 24.93},
]
//326=dolar blue 341=euro blue 24.93=real//
let opcion 
let numeroIngresado
monedas.valor1 = 326
monedas.valor2 = 341
monedas.valor3 = 24.93


do {
    alert ('Simulador de cambio de monedas extranjeras')
    opcion = prompt ('Ingrese el tipo de moneda que desea cambiar a pesos o escriba FIN para terminar la operacion: \n1 - Dolar\n2 - Euro\n3 - Real')
   
    function conversionDolares () {
        if (numeroParseado < 0 ) {
            alert ('Ingrese un numero valido') ;
            }else {
            let resultado = numeroParseado * monedas.valor1 ;
            alert ('La conversion es de ' + resultado + ' pesos') ;
            
        }     

    }

    function conversionEuros () {
        if (numeroParseado < 0 ) {
            alert ('Ingrese un numero valido') ;
            }else {
            let resultado = numeroParseado * monedas.valor2 ;
            alert ('La conversion es de ' + resultado + ' pesos') ;
            
        }     

    }

    function conversionReales () {
        if (numeroParseado < 0 ) {
            alert ('Ingrese un numero valido') ;
            }else {
            let resultado = numeroParseado * monedas.valor3 ;
            alert ('La conversion es de ' + resultado + ' pesos') ;
            
        }     

    }

  switch (opcion) {
        case '1': numeroParseado = prompt ('Ingrese la cantidad de dolares a cambiar');
        conversionDolares()
        break;
        case '2' : numeroParseado = prompt ('Ingrese la cantidad de euros a cambiar');
        conversionEuros()
        break;
        case '3' : numeroParseado = prompt ('Ingrese la cantidad de reales a cambiar')
        conversionReales ()
        break;



 

} 


} while (opcion !== 'FIN')
