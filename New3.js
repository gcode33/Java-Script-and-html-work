// JavaScript Document
let purchase = 60.00;
//let result_lessThan = purchase + 1.50;
//let result_greaterThan = (purchase*0.10)+purchase;
let result;
(purchase <= 25.00) ? result = 
    ` price is ${(purchase+1.50).toFixed(2)} ` : result = 
    `price is ${(purchase*0.10+purchase).toFixed(2)} `;
alert(result);
