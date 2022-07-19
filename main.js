let precioDolarBlue = 301;
let precioEuro = 313;
let precioReal = 23.60;
let opcion 
let numeroIngresado
do {
    alert ('Simulador de cambio de monedas extranjeras')
    opcion = prompt ('Ingrese el tipo de moneda que desea cambiar a pesos o escriba FIN para terminar la operacion: \n1 - Dolar\n2 - Euro\n3 - Real')
    let numeroParseado = parseFloat (numeroIngresado)
  switch (opcion) {
        case '1': numeroParseado = prompt ('Ingrese la cantidad de dolares a cambiar');
        if (numeroParseado < 0) {
        alert ('Ingrese un numero valido') ;
        }else {
        let resultadoDolares = numeroParseado * precioDolarBlue ;
        alert ('La conversion es de ' + resultadoDolares + ' pesos') ;
        break;
    }     
        case '2' : numeroParseado = prompt ('Ingrese la cantidad de euros a cambiar');
        if (numeroParseado < 0) {
            alert ('Ingrese un numero valido');
            }else {
            let resultadoEuros = numeroParseado * precioEuro;
            alert ('La conversion es de ' + resultadoEuros + ' pesos');
            break;
        }
        case '3' : numeroParseado = prompt ('Ingrese la cantidad de reales a cambiar')
        if (numeroParseado < 0) {
            alert ('Ingrese un numero valido')
            }else {
            let resultadoReales = numeroParseado * precioReal ;
            alert ('La conversion es de ' + resultadoReales + ' pesos');
            break;
        }        



 

} 


} while (opcion !== 'FIN')
