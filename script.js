const getRate = new XMLHttpRequest();
getRate.addEventListener("load", function () { console.log(this.responseText); });
getRate.open("GET", "https://api.freecurrencyapi.com/v1/latest");
getRate.setRequestHeader("apikey", "llnkNFFEqohgupQnJFTO5oOq1DZiRxyvNdQGJHcR", "currencies", "AUD");
getRate.send();