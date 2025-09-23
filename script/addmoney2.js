document.getElementById('add-money').addEventListener('click', function(event){
    event.preventDefault();
    const amount = getInputValueByID('amount')
    const pin = getInputValueByID('pin')
    const account = document.getElementById('account-number').value;
    const mainBalace = getInnerTextID('main-balance')

    // console.log(mainBalace);
    
    // console.log(amount, pin);
    

    if(account.length === 11){
        if(pin === 1234){
            const sum = mainBalace + amount;
            // document.getElementById('main-balance').innerText=sum;
            setInnerTextByIDandValue('main-balance', sum)
        }
        else{
            console.log('wrong pin');
            
        }
    }
    else{
        alert('account number wrong')
    }
})