

document.getElementById('cashout-btn').addEventListener('click',function(event){
    event.preventDefault();
    const accountNumber = document.getElementById('account-number').value;
    const amount = getInputValueByID('cashout-amount')
    const pinNumber = getInputValueByID('cashout-pin')
    const mainBalace = getInnerTextID('main-balance')
    

    if(accountNumber.length===11){
        if (pinNumber === 1234) {
            const sum = mainBalace - amount;
            setInnerTextByIDandValue('main-balance', sum)

            const container = document.getElementById('t-container')
        const p = document.createElement("p");
        p.innerText = `
        cashout ${amount} from this ${accountNumber} account
        `;
        // console.log(p);
        container.appendChild(p)
        }
        else{
            alert('pin not valid')
        }
    }
    else{
        alert('accout number not valid')
    }





    // const pin = document.getElementById('cashout-pin').value;
    // const convertedPin = parseInt(pin);

    // const amount = document.getElementById('cashout-amount').value;

    // const convertedAmount = parseFloat(amount);
    // const mainBalance = document.getElementById('main-balance').innerText;

    // const convertedMainBalance = parseFloat(mainBalance);

    // if(convertedPin === 1234){
    //     const sum = convertedMainBalance - convertedAmount;
    //     // console.log(sum);
    //      document.getElementById('main-balance').innerText= sum;
        
    // }
    // else {
    //     alert("enter valid pin")
    // }
})