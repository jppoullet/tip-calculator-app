"use strict";

const billInput = document.getElementById("bill");
const numberPeopleInput = document.getElementById("people");
const tipPercent = document.querySelectorAll(".tipPercentLabel");
const tipAmount = document.querySelector(".tipDollarAmount");
const totalDollarAmount = document.querySelector(".totalDollarAmount");
const tipPercentCustom = document.querySelector(".tipPercentCustom");
const reset = document.querySelector("input[type='reset']");

billInput.value = "";
numberPeopleInput.value = "";

// Tip button selection
tipPercent.forEach((selected) => {
  selected.addEventListener("pointerdown", handleClick);
});

// Calculate tip per person and total per person
function calcTip() {
  if (numberPeopleValue >= 1 && billValue >= 1 && tip >= 0.01) {
    let tipPerPerson = (tip * billValue) / numberPeopleValue;
    let totalPerPerson = billValue / numberPeopleValue + tipPerPerson;

    console.log(`tip: ${tip}`);
    console.log(`tipPerPerson ${tipPerPerson}`);
    tipAmount.textContent = `$${tipPerPerson.toFixed(2)}`;
    totalDollarAmount.textContent = `$${totalPerPerson.toFixed(2)}`;
  }
}

billInput.addEventListener("input", billInputFunc);
numberPeopleInput.addEventListener("input", numberPeopleInputFunc);
tipPercentCustom.addEventListener("input", customTipInput);

let billValue;
let numberPeopleValue;
let tip;

// Store bill amount to billValue
function billInputFunc() {
  billValue = parseFloat(billInput.value);
  console.log(`bill: ${billValue}`);
  calcTip();
}

// Store number of people to numberPeopleValue variable, trigger error styling if number of people is < 1
function numberPeopleInputFunc() {
  numberPeopleValue = parseFloat(numberPeopleInput.value);
  console.log(`numberpeople: ${numberPeopleValue}`);

  if (numberPeopleValue < 1) {
    document.querySelector(".errorMsg").style.display = "inline";
    document.querySelector(".errorBorder").style.border = "2px solid green";
  } else {
    document.querySelector(".errorMsg").style.display = "none";
    document.querySelector(".errorBorder").style.border = "none";
    calcTip();
  }
}

// Store the custom entered tip amount to variable tip as a decimal
function customTipInput() {
  tip = parseFloat(tipPercentCustom.value / 100);

  tipPercent.forEach((val) => {
    val.classList.remove("selected");
  });
  console.log(`customTip: ${tip}`);
  calcTip();
}

// Select tip percent, store value to tip as a decimal
function handleClick(event) {
  tipPercent.forEach((val) => {
    val.classList.remove("selected");
    if (event.target.innerHTML == val.innerHTML) {
      val.classList.add("selected");
      tip = parseFloat(val.innerHTML) / 100;
    }
  });
  console.log(`tip: ${tip}`);
  calcTip();
}

// Reset all values and Total amounts
reset.addEventListener("pointerdown", function resetTotals() {
  tipAmount.textContent = "$0.00";
  totalDollarAmount.textContent = "$0.00";
  billValue = 0.0;
  numberPeopleValue = 0;

  tipPercent.forEach((val) => {
    val.classList.remove("selected");
  });
  document.querySelector(".errorMsg").style.display = "none";
  document.querySelector(".errorBorder").style.border = "none";
});

// tipSelection();
// resetTotals();
// calcTip();
