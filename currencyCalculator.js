
function clearFunc() {
    document.getElementById("amt").value = "";
}

function currencySelector() {
    let currencySelector = document.forms[0].currency;
    let currency = currencySelector.value;
    let amt = document.getElementById("amt");
  

    if (currency == "$(USD)") {
        amt.placeholder = "Amt in" + " " + currency;
        document.getElementById("flag-primary").src = "./img/us.png"; 
    }
    else if (currency == "(Euro)") {
        amt.placeholder = "Amt in" + " " + currency;
        document.getElementById("flag-primary").src = "./img/eu.png";
    }
    else if (currency == "(GBP)") {
        amt.placeholder = "Amt in" + " " + currency;
        document.getElementById("flag-primary").src = "./img/britain.png";
    }
    else if(currency == "Select Preferred Currency"){
        amt.placeholder = currency;
         document.getElementById("flag-primary").src = "./img/currency.png";
    }
}



