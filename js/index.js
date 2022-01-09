const billAmount = document.getElementById("bill-amount");
const tipsBtn = document.querySelectorAll(".percent-btn");
const customPercent = document.querySelector(".custom-percent");
const numPeopleHolder = document.getElementById("num-people");
const indivTipAmt = document.getElementById("tip-amt");
const totalAmtPerPerson = document.getElementById("total-per-person");
const test = document.getElementById("test");
const resetBtn = document.getElementById("reset-bt");
const billError = document.querySelector(".bill-error");
const peopleError = document.querySelector(".people-error");
let billValue = 0;
let tipPercentValue = 0;
let numPeople = numPeopleHolder.value;
let TIP;
let AMOUNT;





billAmount.addEventListener("input", (event) => {
    billValue = event.target.value;
    if (billValue <= 0) {
        billError.style.display = "block";
        event.target.style.outlineColor = "Tomato";
    } else {
        billError.style.display = "none";
        event.target.style.outlineColor = "hsl(172, 67%, 45%)";
        calculateTipAmount();
    }
    
    
    
})

tipsBtn.forEach((tipBtn) => {
    tipBtn.addEventListener("click", () => {
    tipsBtn.forEach((btn) => btn.classList.remove("active-button"));
    customPercent.value = null;
    tipBtn.classList.add("active-button");
    tipPercentValue = parseInt(tipBtn.innerHTML.substring(0, tipBtn.innerHTML.length-1));
    calculateTipAmount();
    })
})

customPercent.addEventListener("input", (event) => {
    tipsBtn.forEach((btn) => btn.classList.remove("active-button"));
    tipPercentValue = event.target.value;
    calculateTipAmount();
})

numPeopleHolder.addEventListener("input", (event) => {
    numPeople = event.target.value;
    if (numPeople <= 0) {
        peopleError.style.display = "block";
        event.target.style.outlineColor = "Tomato";
    } else {
        event.target.style.outlineColor = "hsl(172, 67%, 45%)";
        peopleError.style.display = "none";
    calculateTipAmount();
    }
})
resetBtn.addEventListener("click", resetAll)

function resetAll() {
    billAmount.value = "0";
    tipsBtn.forEach((btn) => btn.classList.remove("active-button"));
    customPercent.value = null;
    numPeopleHolder.value = "1";
    indivTipAmt.textContent = "0";
    totalAmtPerPerson.textContent = "0";
    billValue = 0;
    tipPercentValue = 0;
    numPeople = 1;
    calculateTipAmount();
}


function calculateTipAmount() {
    TIP = (billValue * (tipPercentValue / 100));
    AMOUNT = (billValue / numPeople) + TIP;
    indivTipAmt.textContent = ""+ TIP.toFixed(2);
    totalAmtPerPerson.textContent = ""+ AMOUNT.toFixed(2);
} 

