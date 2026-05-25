const AmountInputEl = document.getElementById("bill-input-el")
const tipInputEl = document.getElementById("tip-input-el")
const totalEl = document.getElementById("total-el")

// Calculating the Tip Amount
function calculateTip(){
    let billAmount = Number(AmountInputEl.value)
    let tipAmount = Number(tipInputEl.value)
    let result = ((billAmount/100) * tipAmount) + billAmount

    totalEl.innerHTML = `Total: <b>PKR${result.toFixed(2)} </b>`
}

document.getElementById("calculate-btn").addEventListener("click", calculateTip)