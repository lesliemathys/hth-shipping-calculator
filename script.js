const rateReq = new XMLHttpRequest();
rateReq.addEventListener("load", function () { console.log(this.responseText); });
rateReq.open("GET", "https://api.freecurrencyapi.com/v1/latest");
rateReq.setRequestHeader("apikey", "llnkNFFEqohgupQnJFTO5oOq1DZiRxyvNdQGJHcR");
rateReq.send();