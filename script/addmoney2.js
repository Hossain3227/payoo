

document
  .getElementById("add-money")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const amount = getInputValueByID("amount");
    const pin = getInputValueByID("pin");
    const account = document.getElementById("account-number").value;
    const mainBalace = getInnerTextID("main-balance");

    // console.log(mainBalace);

    const selectedBank = document.getElementById('allbank').value;
    // console.log(selectedBank);
    

    if(amount<0){
      alert('add a positive number please')
      return;
    }

    

    // console.log(amount, pin);

    if (account.length === 11) {
      if (pin === 1234) {
        const sum = mainBalace + amount;
        // document.getElementById('main-balance').innerText=sum;
        setInnerTextByIDandValue("main-balance", sum);

        const container = document.getElementById('t-container');

        const div = document.createElement('div'); 
        div.classList.add('bg-red-400')
        div.innerHTML = `
          <h1 class='text-yellow-300'>
          added money from ${selectedBank}
          </h1>
          <h3>${amount}</h3>
          <p>account number: ${account}</p>
          
        `
        container.appendChild(div)

        // const container = document.getElementById('t-container')
        // const p = document.createElement("p");
        // p.innerText = `
        // added ${amount} from ${account}
        // `;
        // console.log(p);
        // container.appendChild(p)
        
      } else {
        console.log("wrong pin");
      }
    } else {
      alert("account number wrong");
    }
  });
