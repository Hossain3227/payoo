document.getElementById('addmoney').addEventListener('click', function(event){
    event.preventDefault();
    const amount = getInputValueByID('amount')
    const pin = getInputValueByID('pin')
    const account = document.getElementById('account').value;


    console.log(amount, pin);
    

    if(account.length === 11){
        if(pin === 1234){
            const sum = convertedMainBalance + convertedAmount;
            document.getElementById('main-balance').innerText=sum;
        }
        else{
            console.log('wrong pin');
            
        }
    }
    else{
        alert('account number wrong')
    }
})