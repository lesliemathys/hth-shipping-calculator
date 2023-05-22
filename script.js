let obj;

const rateReq = new XMLHttpRequest();
rateReq.addEventListener("load", function () { 
    let obj = JSON.parse(this.responseText)
    //console.log(obj.data.AUD);
});

console.log(obj.data.AUD);

rateReq.open("GET", "https://api.freecurrencyapi.com/v1/latest");
rateReq.setRequestHeader("apikey", "llnkNFFEqohgupQnJFTO5oOq1DZiRxyvNdQGJHcR");
rateReq.send();