// alert()
// console.log('hero alom')
// step 1 get the id via getelementbyId
document.getElementById('login-btn').addEventListener('click', function(event){
    // console.log(event);
    event.preventDefault();
    const accountNumber = document.getElementById('account-number').value;
    // console.log(accountNumber);
    
    const pin= document.getElementById('pin').value;
    const convertedPin =  parseInt(pin)
    // console.log(accountNumber,pin);
        if(accountNumber.length===11){
            if(convertedPin===1234){
                window.location.href="/main.html"
            }
            else{
                alert('pin is wrong');
                
            }
        }else{
            alert('Need valid account number')
        }
    
})
