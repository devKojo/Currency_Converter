let dollarRate = 6.30;
let euroRate = 7;
let gbpRate = 8.30;



function conversion() {
    let currencySelector = document.forms[0].currency;
    if (currencySelector.value == "$(USD)") {
        let amt = document.getElementById("amt");
        let dollarAmt = amt.value;
        let convert = dollarAmt * dollarRate;
        let convertResult = document.getElementById("amtGhc");
        convertResult.value = convert;
    }

    else if (currencySelector.value == "(Euro)") {
        let amt = document.getElementById("amt");
        let euroAmt = amt.value;
        let convert = euroAmt * euroRate;
        let convertResult = document.getElementById("amtGhc");
        convertResult.value = convert;
    }

    else if (currencySelector.value == "(GBP)") {
        let amt = document.getElementById("amt");
        let gbpAmt = amt.value;
        let convert = gbpAmt * gbpRate;
        let convertResult = document.getElementById("amtGhc");
        convertResult.value = convert;
    }

    else {
        alert("Select Preferred Currency");
        return;
    }

}
