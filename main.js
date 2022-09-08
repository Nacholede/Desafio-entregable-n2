let currencies = []
const obtainCurrencies = async () => {
 const response = await fetch ('https://v6.exchangerate-api.com/v6/5bc5a075d2ab6a07c2177207/latest/USD');
 const data = await response.json();
 
console.log (data.conversion_rates)

currencies = data.conversion_rates

const select = document.getElementById('monedas')
select.innerHTML = data.map ((monedas) => `<option value="${monedas.conversion_rates} </option>` );

}




obtainCurrencies()

localStorage.setItem("Dolar Blue", JSON.stringify(dolarBlue) )
localStorage.setItem("Euro Blue", JSON.stringify(euroBlue) )
localStorage.setItem("Real", JSON.stringify(real) )



cambio.addEventListener('click', () => {
    conversion()
    Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'La conversion ha sido exitosa',
        showConfirmButton: false,
        timer: 1500
      })
  
})







 

 


  