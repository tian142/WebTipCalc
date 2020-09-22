const finalTip = document.querySelector('#final-tip');
const totalCost = document.querySelector('#totalCostSpan');
const billInput = document.querySelector('#bill');
const tipInput = document.querySelector('#tip');
const numPeople = document.querySelector('#num-people');

function calculateTip() {
    const billValue = billInput.value;
    const tipValue = tipInput.value;
    const people = numPeople.value;
    const tipAmount = (billValue * tipValue) / 100;
    const tipPer = tipAmount / people;

    console.log(tipPer);

    // totalCost.innerText = tipAmount.toFixed(2);
}

calculateTip();

billInput.addEventListener('input', calculateTip);
tipInput.addEventListener('input', calculateTip);
numPeople.addEventListener('input', calculateTip);
