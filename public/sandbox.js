"use strict";
var user = {
    name: "sam",
    uid: "123",
};
var products = {
    item: 'beer',
    uid: 123,
};
var logDetails = function (uid, item) {
    console.log(item + " has a uid of " + uid);
};
//since type of item parameter is string, value can't be number
logDetails(products.uid, products.item);
console.log(typeof (products.uid));
// same alias objWithName can be use in different functions
var greet = function (user) {
    console.log(user.name + " says hello");
};
greet(user);
var greetAgain = function (user) {
    console.log(user.name + " says hello again");
};
