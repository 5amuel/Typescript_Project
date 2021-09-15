"use strict";
var logDetails = function (uid, item) {
    console.log(item + " has a uid of " + uid);
};
// same alias objWithName can be use in different functions
var greet = function (user) {
    console.log(user.name + " says hello");
};
var greetAgain = function (user) {
    console.log(user.name + " says hello again");
};
