
let monedas = [
    {moneda1 : "Dolar Blue", valor1: 326},
    {moneda2 : "Euro Blue", valor2: 341},
    {moneda3 : "Real", valor3: 24.93},
 ]
 //326=dolar blue 341=euro blue 24.93=real//
 let opcion 
 let numeroIngresado
 monedas.valor1 = 291
 monedas.valor2 = 311
 monedas.valor3 = 25.45
 
 
let inputDolar = document.getElementById("input-dolar")
let inputEuro = document.getElementById("input-euro")
let inputReal = document.getElementById("input-real")

const cambio = document.getElementById("boton-cambio")

cambio.addEventListener('click', () => {
    conversion()
})




    
function conversion () {
    if (inputDolar.checked) {
        let numeroIngresado = document.getElementById ("numero-cambio")
        let numeroParseado = numeroIngresado.value 
        let resultado = numeroParseado * monedas.valor1 
        let p = document.getElementById("alerta-cambio")
        p.innerText = 'El resultado de la conversion es de ' + resultado + ' pesos'



    } else if (inputEuro.checked) {
        let numeroIngresado = document.getElementById ("numero-cambio")
        let numeroParseado = numeroIngresado.value 
        let resultado = numeroParseado * monedas.valor2 
        let p = document.getElementById("alerta-cambio")
        p.innerText = 'El resultado de la conversion es de ' + resultado + ' pesos'

    } else if (inputReal.checked) {
        let numeroIngresado = document.getElementById ("numero-cambio")
        let numeroParseado = numeroIngresado.value 
        let resultado = numeroParseado * monedas.valor3 
        let p = document.getElementById("alerta-cambio")
        p.innerText = 'El resultado de la conversion es de ' + resultado + ' pesos'

    }
     
}



 

 


  