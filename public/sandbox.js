"use strict";
//Functions basics
var greet;
greet = function () {
    console.log("hello");
};
greet(); //return hello
var add = function (a, b, c) {
    console.log(a, b, c);
};
add(2, "sam", "veinte"); //return 2, 'sam', "veinte"
//the renturned value will take the type of parameters variable
var minus = function (a, b) {
    return a + b;
};
var result = minus(2, 2);
console.log(result); //return 4
//result = 'something' //result type is number therefore can not be string
