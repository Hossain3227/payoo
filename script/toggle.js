// document.getElementById("addmoney").style.display = "block";
document.getElementById("cashout").style.display = "none";

document.getElementById("add-money-box").addEventListener("click", function () {

  handleToggle("addmoney", "block")
  handleToggle("cashout", "none")
  // document.getElementById("cashout").style.display = "none";
  // document.getElementById("addmoney").style.display = "block";
});

document.getElementById("cashout-box").addEventListener("click", function () {
  
  handleToggle("addmoney", "none")
  handleToggle("cashout", "block")
  // document.getElementById("cashout").style.display = "block";
  // document.getElementById("addmoney").style.display = "none";
});


function handleToggle(id, status) {
  document.getElementById(id).style.display = status;
}



