//Step-01: add deposite button enent handler

document.getElementById('btn-deposit').addEventListener('click', function(){
    //step-02: take input from the deposit input field 
    const depositField = document.getElementById('deposit-field');
    const newDepositTotalString = depositField.value;
    const newDepositAmount = parseFloat(newDepositTotalString);
    //console.log(newDepositAmount)
    
     
    //step-03: get the current deposit total
    //Working on the deposit text section & convert string to float
    
    const depositTotalElement = document.getElementById('total-deposit');
    const previousDepositTotalString = depositTotalElement.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString);
    //console.log(previousDepositTotal);

    //step-04: Add the previous deposit & current deposit money

    const currentDepositeTotal = previousDepositTotal + newDepositAmount;
    depositTotalElement.innerText =  currentDepositeTotal;
    
    
    //step-05: get the current balance total

    const balanceTotalElement = document.getElementById('total-balance');
    const previousTotalBalanceString = balanceTotalElement.innerText;
    const previousTotalBalance = parseFloat(previousTotalBalanceString);
    //step-06: calculate the total and set the value

    const currentBalanceTotal = previousTotalBalance + newDepositAmount;
    balanceTotalElement.innerText = currentBalanceTotal;

    //step-07: clear the input section

    depositField.value = '';
})