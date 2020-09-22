const finalTip = document.querySelector('#tipSpan');
const totalCost = document.querySelector('#totalCostSpan');
const billInput = document.querySelector('#bill');
const tipInput = document.querySelector('#tip');
const numPeople = document.querySelector('#num-people');
const submit = document.querySelector('button');

function calculateTip() {
    const billValue = billInput.value;
    const tipValue = tipInput.value;
    const people = numPeople.value;
    const tipAmount = (billValue * tipValue) / 100;
    const tipPer = parseInt(tipAmount) / parseInt(people);
    const total = parseInt(billValue) + parseInt(tipAmount);
    const totalPer = parseInt(total) / parseInt(people);
    console.log(billValue);
    console.log(tipAmount);
    console.log(people);
    console.log(total);
    finalTip.innerText = tipPer.toFixed(2);
    totalCost.innerText = totalPer.toFixed(2);
}

submit.addEventListener('click', function () {
    calculateTip();
    unHide();
});
