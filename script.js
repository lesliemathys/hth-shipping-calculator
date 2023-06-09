const rateReq = new XMLHttpRequest();
rateReq.addEventListener("load", function () {

    const obj = JSON.parse(this.responseText) //parses response from the API call into a JSON string

    // load elements
    const priceField = document.getElementById("container-price");
    const quantity = document.getElementById("container-qty");
    const itemQuantity = document.getElementById("item-qty");
    const shippingPrice = document.getElementById("shipping-price");
    const aussiePrice = document.getElementById("AUD");
    const purchasePrice = document.getElementById("purchase-price");
    const harrysOneCostPrice = document.getElementById("h1-entry");
    const harrysOneSalePrice = document.getElementById("h1-sell-price");

    //when there is an input in the USD field it multiplies USD by exchange rate to give an AUD value
    document.getElementById("USD").addEventListener("input", purchasePricecalc);

    function purchasePricecalc() {
        aussiePrice.value = document.getElementById("USD").value * parseFloat(obj.data.AUD);
        purchasePrice.value = document.getElementById("USD").value * parseFloat(obj.data.AUD);
    }

    // performs the calculation when 'calculate' button is hit
    document.getElementById("calc").addEventListener("click", function(e) {
        e.preventDefault();
        shippingPrice.value = (parseInt(priceField.value) * parseInt(quantity.value)) / parseInt(itemQuantity.value)
        harrysOneCostPrice.value = Math.ceil(parseFloat(purchasePrice.value) + parseFloat(shippingPrice.value));
        harrysOneSalePrice.value = parseFloat(harrysOneCostPrice.value / 2);
    })
});
rateReq.open("GET", "https://api.freecurrencyapi.com/v1/latest");
rateReq.setRequestHeader("apikey", "llnkNFFEqohgupQnJFTO5oOq1DZiRxyvNdQGJHcR");
rateReq.send();

