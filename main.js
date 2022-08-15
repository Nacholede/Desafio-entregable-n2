const dolarBlue = {
    nombre: "Dolar Blue",
    valor: 295,
}

const euroBlue = {
    nombre: "Euro Blue",
    valor: 320,
}
const real = {
    nombre: "Real",
    valor: 24.93,
}
 //295=dolar blue 320=euro blue 24.93=real//
 
 let numeroIngresado


 
let inputDolar = document.getElementById("input-dolar")
let inputEuro = document.getElementById("input-euro")
let inputReal = document.getElementById("input-real")

const cambio = document.getElementById("boton-cambio")



localStorage.setItem("Dolar Blue", JSON.stringify(dolarBlue) )
localStorage.setItem("Euro Blue", JSON.stringify(euroBlue) )
localStorage.setItem("Real", JSON.stringify(real) )


cambio.addEventListener('click', () => {
    conversion()
  
})



    
function conversion () {
    if (inputDolar.checked) {
        let numeroIngresado = document.getElementById ("numero-cambio")
        let numeroValue = numeroIngresado.value 
        let resultado = numeroValue * dolarBlue.valor
        
        let p = document.getElementById("alerta-cambio")
        p.innerText = 'El resultado de la conversion es de ' + resultado + ' pesos'



    } else if (inputEuro.checked) {
        let numeroIngresado = document.getElementById ("numero-cambio")
        let numeroValue = numeroIngresado.value 
        let resultado = numeroValue * euroBlue.valor
        let p = document.getElementById("alerta-cambio")
        p.innerText = 'El resultado de la conversion es de ' + resultado + ' pesos'

    } else if (inputReal.checked) {
        let numeroIngresado = document.getElementById ("numero-cambio")
        let numeroValue = numeroIngresado.value 
        let resultado = numeroValue * real.valor
        let p = document.getElementById("alerta-cambio")
        p.innerText = 'El resultado de la conversion es de ' + resultado + ' pesos'

    }
     
}



 

 


  