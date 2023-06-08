const rateReq = new XMLHttpRequest();
rateReq.addEventListener("load", function () {
    let obj = JSON.parse(this.responseText)

    document.getElementById("USD").addEventListener("input", purchasePricecalc);

    function purchasePricecalc() {
        document.getElementById("AUD").value = document.getElementById("USD").value * parseFloat(obj.data.AUD);
        document.getElementById("purchase-price").value = document.getElementById("USD").value * parseFloat(obj.data.AUD);
    }
});
rateReq.open("GET", "https://api.freecurrencyapi.com/v1/latest");
rateReq.setRequestHeader("apikey", "llnkNFFEqohgupQnJFTO5oOq1DZiRxyvNdQGJHcR");
rateReq.send();

