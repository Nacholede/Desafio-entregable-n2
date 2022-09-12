const select = document.querySelectorAll('select');
const input = document.querySelectorAll ('input');
let html = '';



const obtainCurrencies = async () => {
 const response = await fetch ('https://v6.exchangerate-api.com/v6/5bc5a075d2ab6a07c2177207/latest/USD');
 const data = await response.json();
valores = data.conversion_rates
const arrCurrencies = Object.keys (data.conversion_rates)
console.log (arrCurrencies)
arrCurrencies.map (item => {
    return html += `<option value=${item}> ${item} </option>`;
})

console.log (data.conversion_rates)

for (let i=0; i<select.length; i++) {
  select[i].innerHTML= html ;
}

conversion = (a, b) => {
  input[a].value = input[b].value * valores [select[a].value] / valores[select[b].value];
}

input [0].addEventListener ('keyup', () => conversion(1, 0))

input [1].addEventListener ('keyup', () => conversion(0, 1))

select[0].addEventListener ('change', ()=> conversion(1, 0))

select[0].addEventListener ('change', ()=> conversion(0, 1))

};





obtainCurrencies()





//cambio.addEventListener('click', () => {
    
    //Swal.fire({
        //position: 'center',
        //icon: 'success',
        //title: 'La conversion ha sido exitosa',
        //showConfirmButton: false,
        //timer: 1500
      //})
  
//})







 

 


  