function inputValueInt(elementId){
    const element = document.getElementById(elementId);
    const elementValueString = element.value;
    const elementValueNumber = parseFloat(elementValueString);
    if(isNaN(elementValueNumber)){
        alert('Enter a valid number')
        element.value = '';
        return
    }
    return elementValueNumber;
}

document.getElementById('btn-calculate').addEventListener('click', function(){
   const income = inputValueInt('income')
   const food = inputValueInt('food')
   const rent = inputValueInt('rent')
   const clothes = inputValueInt('clothes')
   const totalExpensesElement = document.getElementById('total-expenses');
   const totalExpenses = food + rent + clothes;
   
   

   const balanceElement = document.getElementById('balance');
   const balance = income - totalExpenses;
   if(balance < 0){
    alert('Balance is lower than Income')
    return
   }
   
   totalExpensesElement.innerText = totalExpenses;
   balanceElement.innerText = balance;
})

document.getElementById('btn-save').addEventListener('click', function(){
    const income = inputValueInt('income');
    const savePercent = inputValueInt('save');
    const savingAmount = document.getElementById('saving-amount')
    const remainingBalance = document.getElementById('remaining-balance')
    const totalSavings = (income / 100) * savePercent;
    if(isNaN(totalSavings)){
        alert('Not Enough balance to save')
        return
    }
    const balance = document.getElementById('balance');
    const balanceString = balance.innerText;
    const balanceNumber = parseInt(balanceString)

    
    const remainingBalanceTotal = balanceNumber - totalSavings
    if(remainingBalanceTotal < 0){
        alert('You do not have enough Balance Please lower savings')
        return
    }
    savingAmount.innerText = totalSavings
    remainingBalance.innerText = remainingBalanceTotal
})