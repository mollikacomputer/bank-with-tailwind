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

