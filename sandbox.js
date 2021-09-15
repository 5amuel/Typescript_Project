// Esto no se puede hacer en Typescript ya que al declarar los tipos de 
//elementos del array como  string nos impida agregar o cambiarlos a
//otro tipo de dato como number o boolean 
var names = ['luigui', 'mario', 'yoshi'];
//names.push(9) this is invalid
// Esto si se puede hacer en Typescript por que se estan declarando 
//los diferentes tipos de datos dentro del array
var mixed = [9, 'sam', true];
mixed.push(10);
mixed.push('mario');
mixed[1] = 1;
console.log(mixed);
//Objects
var ninja = {
    name: 'mario',
    belt: 'black',
    age: 30
};
ninja.age = 40;
ninja.name = 'ryu';
//this is invalid because we try to change to a diferent type o data
// ninja.age = '30'
//explicit types
var character;
var age;
var isLoggedIn;
age = 30;
isLoggedIn = true;
character = 'sam';
//arrays
var ninjas = [];
//ninjas = [10,23], this is not allowed because we already declare the array as string data type container
//this is allowed
ninjas = ['yoshi', 'mario'];
ninjas.push('sam');
//union types for use mixed types into an array
var mixedTypes = [];
mixed.push('hello');
mixed.push(20);
mixed.push(false);
var uid;
uid = '123';
uid = 123;
//Objects
var ninjaOne;
ninjaOne = { name: 'yoshi', age: 20 };
// This is a way to declare the structure of an object
var ninjaTwo;
ninjaTwo = { name: 'mario', age: 20, beltColor: 'black' };
//This would be invalid because we are not declaring array type inside the object
//ninjaTwo = {name:'mario', age: 20, beltColor: 'black', skill:[]}
