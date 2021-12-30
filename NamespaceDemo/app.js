/// <reference path="utility-functions.ts" />
var result1 = Utility.maxBooksAllowed(15);
console.log(result1);
var util = Utility.Fees;
//const result2 = Utility.Fees.calculateLateFee(100)
var result2 = util.calculateLateFee(100);
console.log(result2);
