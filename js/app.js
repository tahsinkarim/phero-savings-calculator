function inputValueInt(elementId){
    const element = document.getElementById(elementId);
    const elementValueString = element.value;
    const elementValueNumber = parseFloat(elementValueString);
    return elementValueNumber; 
}

document.getElementById('btn-calculate').addEventListener('click', function(){
   const income = inputValueInt('income')
   const food = inputValueInt('food')
   const rent = inputValueInt('rent')
   const clothes = inputValueInt('clothes')
   if(isNaN(income) || isNaN(food) || isNaN(rent) || isNaN(clothes) ){
    document.getElementById('income').value = '';
    document.getElementById('food').value = '';
    document.getElementById('rent').value = '';
    document.getElementById('clothes').value = '';
    alert('Enter a valid number')
    return
}
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
        alert('Enter a valid Number')
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