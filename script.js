let calculate = document.querySelector('#btnclick');

calculate.addEventListener('click', () => {
    let totalBill = document.querySelector('#billamt').value;
    let tipPercent = document.querySelector('#service').value;
    let split = document.querySelector('#peopleamt').value;

    //validate
    if(totalBill === '' || tipPercent == 0 || split == 0){
        alert('Please enter values');
        return;
    }
    //calculate
    let total = (totalBill * tipPercent) / split;
    total = total.toFixed(2);
    
    document.getElementById('tip').innerHTML = total;



})
