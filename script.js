const AmountInputEl = document.getElementById("bill-input-el")
const tipInputEl = document.getElementById("tip-input-el")
const totalEl = document.getElementById("total-el")

// Handling Errors
function handleError(inputEl, errorId){

    let error = document.getElementById(errorId)

    if(isNaN(inputEl.value)){       
        error.classList.remove("hide")
        error.textContent = "This field must contain a number"
        inputEl.style.borderColor = "gray"

    } else if(inputEl.value === ""){
        error.classList.add("hide")
        error.textContent = ""
    } else {
        inputEl.style.borderColor = "gray"
    }
}


// Calculating the Tip Amount
function calculateTip(){
    let billAmount = Number(AmountInputEl.value)
    let tipAmount = Number(tipInputEl.value)

    if(AmountInputEl.value === "") {
        AmountInputEl.style.borderColor = "red"

    } else if(tipInputEl.value === "") {
        tipInputEl.style.borderColor = "red"
    } else {
        let result = ((billAmount/100) * tipAmount) + billAmount
        totalEl.innerHTML = `Total: <b>PKR${result.toFixed(2)} </b>`
    }
}



document.getElementById("calculate-btn").addEventListener("click", calculateTip)

tipInputEl.addEventListener("input", function(){
    handleError(tipInputEl, "tip-input-err")
})
AmountInputEl.addEventListener("input", function(){
    handleError(AmountInputEl, "bill-input-err")
})