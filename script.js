const rateReq = new XMLHttpRequest();
rateReq.addEventListener("load", function () { 
    let obj = this.responseText;
    console.log(obj["AUD"]);
});
rateReq.open("GET", "https://api.freecurrencyapi.com/v1/latest");
rateReq.setRequestHeader("apikey", "llnkNFFEqohgupQnJFTO5oOq1DZiRxyvNdQGJHcR");
rateReq.send();

// {"data":{"AUD":1.501729,"BGN":1.810008,"BRL":4.998307,"CAD":1.349052,"CHF":0.898281,"CNY":7.007908,"CZK":21.965041,"DKK":6.882572,"EUR":0.924011,"GBP":0.802531,"HKD":7.816861,"HRK":6.961964,"HUF":347.165561,"IDR":14925.022641,"ILS":3.650605,"INR":82.905138,"ISK":139.81021,"JPY":137.695653,"KRW":1325.211585,"MXN":17.76113,"MYR":4.538506,"NOK":10.871822,"NZD":1.591483,"PHP":55.649099,"PLN":4.199783,"RON":4.600808,"RUB":80.100137,"SEK":10.507667,"SGD":1.344548,"THB":34.291068,"TRY":19.820922,"USD":1,"ZAR":19.426274}}