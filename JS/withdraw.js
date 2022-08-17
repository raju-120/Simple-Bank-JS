//step-01: add a event habdler in withdraw button

document.getElementById('btn-withdraw').addEventListener('click', function(){
    
    //step-02: Take a input from the withdraw field
    //Take the text for use .value

    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawAmountString = withdrawField.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString)
    

    //Step-07: clear the input section
    withdrawField.value = '';

    if(isNaN(newWithdrawAmount)){
        alert('Please enter the valid number');
        return;
    }


    //step-03: get the current Withdraw
    //Working on the deposit text section & convert string to float

    const withdrawTotalElement = document.getElementById('total-withdraw'); 
    const previousWithdrawTotalString = withdrawTotalElement.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);

    //step-05: Get the previoud balance total

    const balanceTotalElement = document.getElementById('total-balance');
    const previoudBalanceTotalString = balanceTotalElement.innerText;
    const previoudBalanceTotal = parseFloat(previoudBalanceTotalString);


    //step-07: cleare the input field
    withdrawField.value = '';

    if(newWithdrawAmount > previoudBalanceTotal){
        alert('Not Efficient balance available in your account');
        return;
    }
    /* if(previoudBalanceTotal  <150){
        alert('Minimum blanace needed')
        return;
    } */
    
    //Step-04: Calculate total withdraw amount

    const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    withdrawTotalElement.innerText = currentWithdrawTotal;

    

    //step-06: Calculate the new balance total
    //step-06.5: Set the new balance total

    const newBalanceTotal = previoudBalanceTotal - newWithdrawAmount;
    balanceTotalElement.innerText = newBalanceTotal;


    //step-08: clear the input field 
    withdrawField.value = '';


})


