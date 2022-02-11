// step 1. handle deposit button event
      
document.getElementById('deposit-button').addEventListener('click', function(){
    // step 2: catch input value + new deposit amount into input field
    const depositInputBox = document.getElementById('deposit-input');
    let newDepositAmount = depositInputBox.value;
    // step 3: catch deposit before total amount of money 
    let beforeDepositTotal = document.getElementById('before-deposit-total');
    let beforeDepositTotalText= beforeDepositTotal.innerText;
    let beforeDepositTotalAmount = parseFloat(beforeDepositTotalText);
    //step 4: existing total + current total 
    let updateTotalBalanceAmount = parseFloat(newDepositAmount) + parseFloat(beforeDepositTotalText);
    // step 5: replace of before deposit total money
     beforeDepositTotal.innerText = updateTotalBalanceAmount;
     // step 6: Total balance update
    const previousBalanceText =  document.getElementById('previous-balance-text');
    const previousBalanceAmount = parseFloat(previousBalanceText.innerText);
    
    const updateBalanceTotal = parseFloat(newDepositAmount) + previousBalanceAmount;

    previousBalanceText.innerText = updateBalanceTotal;
    // step 7: withdraw
    
    depositInputBox.value = ' ';
    //  console.log(updateAccountBalance);
})

  // step 1: withdraw button event
  document.getElementById('withdraw-button').addEventListener('click', function(){
    // step 2: catching withdraw input field
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawText = withdrawInput.value;
    const withdrawInputAmount = parseFloat(withdrawText);
    // console.log(withdrawAmount);
    // step 3: catching withdraw amount text field
    const withdrawTextField = document.getElementById('withdraw-text');
    const withdrawTextValue = withdrawTextField.innerText;
    const withdrawAmount = parseFloat(withdrawTextValue);
    // step 4: total withdraw amount
    const withdrawTotal = withdrawInputAmount + withdrawAmount;
    // console.log(withdrawTotal);
    withdrawTextField.innerText = withdrawTotal;
    // my questions why not working???
    // withdrawTextValue = withdrawTotal;  

    // step 5: total Account balance after total withdraw
    const previousAccountField = document.getElementById('previous-balance-text');
    const previousAccountText = previousAccountField.innerText;
    const previousAccountBalance = parseFloat(previousAccountText);
    // console.log(previousAccountBalance);
    // step 6: previous total balance
        const previousTotalBalanceText = document.getElementById('previous-balance-text');
        const previousTotalBalance = previousTotalBalanceText.innerText;
        const previousTotalAccountBalance = parseFloat(previousTotalBalance);
        // step 7: total account balance amount after withdraw amount
        const currentBalanceAfterWithdraw = previousTotalAccountBalance - withdrawInputAmount;
        // looks good
        // console.log(currentBalanceAfterWithdraw);
        previousAccountField.innerText = currentBalanceAfterWithdraw;
        // this code not working
        withdrawInput.value = '';
})


