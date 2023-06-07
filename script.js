const rateReq = new XMLHttpRequest();
rateReq.addEventListener("load", function () {
    let obj = JSON.parse(this.responseText)
    let usd = document.getElementById("USD").value;
    document.getElementById("USD").addEventListener("input", calc);

    function calc() {
        document.getElementById("AUD").value = usd * parseInt(obj.data.AUD);
    }
});
rateReq.open("GET", "https://api.freecurrencyapi.com/v1/latest");
rateReq.setRequestHeader("apikey", "llnkNFFEqohgupQnJFTO5oOq1DZiRxyvNdQGJHcR");
rateReq.send();

