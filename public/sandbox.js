//Dynamic any types
var age = 25;
age = true;
console.log(age); //return true
age = 'hello';
console.log(age); //return hello
age = { name: 'sam' };
console.log(age); // return {name 'sam'}
var mixed = [];
mixed.push(5);
mixed.push('mario');
mixed.push(false);
console.log(mixed); //return [5, mario, false]
var ninja;
ninja = { name: 'sam', age: 20 };
console.log(ninja); //return {name: 'sam', age: 20}
ninja = { name: 20, age: 'veinte' };
console.log(ninja); //return {name: 20, age: 'veinte'}
