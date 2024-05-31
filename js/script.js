let pricef = document.getElementById('price1')
let pricem = document.getElementById('price2')
let quantityf = document.getElementById('input1')
let quantitym = document.getElementById('input2')
let resultf = document.getElementById('result1')
let resultm = document.getElementById('result2')
let result = document.getElementById('result3')
let calc = document.getElementById('button')

let resultf1
let resultm1

function calculateandDisplay(){
     resultf1 =parseFloat(eval(`${pricef.innerText}*${quantityf.value}`)).toFixed(2);

    resultf.innerText = resultf1
    resultm1 =parseFloat(eval(`${pricem.innerText}*${quantitym.value}`)).toFixed(2);
    
    resultm.innerText = resultm1
}

pricef.addEventListener('input', calculateandDisplay)
quantityf.addEventListener('input', calculateandDisplay)



pricem.addEventListener('input', calculateandDisplay)
quantitym.addEventListener('input', calculateandDisplay)


calc.addEventListener('click', ()=>{
    var resultc =eval(`${resultf1}+${resultm1}`)

    result.innerText = resultc
    console.log(resultf1, resultm1);
})