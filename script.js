const rateReq = new XMLHttpRequest();
rateReq.addEventListener("load", function () {
    let obj = JSON.parse(this.responseText)

    document.getElementById("USD").addEventListener("input", purchasePricecalc);

    let containerPrice = document.getElementById("container-price").addEventListener("input", shippingPriceCalc);
    let containterQty = document.getElementById("container-qty").addEventListener("input", shippingPriceCalc);
    let itemQty = document.getElementById("item-qty").addEventListener("input", shippingPriceCalc);


    function purchasePricecalc() {
        document.getElementById("AUD").value = document.getElementById("USD").value * parseFloat(obj.data.AUD);
        document.getElementById("purchase-price").value = document.getElementById("USD").value * parseFloat(obj.data.AUD);
    }

    function shippingPriceCalc() {
        if (containerPrice > 0 && containterQty > 0 && itemQty > 0) {
            document.getElementById("shipping-price").value = (containerPrice * containterQty) / itemQty;
        }
    }
});
rateReq.open("GET", "https://api.freecurrencyapi.com/v1/latest");
rateReq.setRequestHeader("apikey", "llnkNFFEqohgupQnJFTO5oOq1DZiRxyvNdQGJHcR");
rateReq.send();

