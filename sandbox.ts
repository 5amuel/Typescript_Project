// Esto no se puede hacer en Typescript ya que al declarar los tipos de 
//elementos del array como  string nos impida agregar o cambiarlos a
//otro tipo de dato como number o boolean 
let names = ['luigui', 'mario', 'yoshi']
//names.push(9) this is invalid


// Esto si se puede hacer en Typescript por que se estan declarando 
//los diferentes tipos de datos dentro del array
let mixed = [9, 'sam', true]
mixed.push(10)
mixed.push('mario')
mixed[1] = 1
console.log(mixed)

//Objects
let ninja = {
    name: 'mario',
    belt: 'black',
    age: 30
}

ninja.age = 40;
ninja.name = 'ryu';
//this is invalid because we try to change to a diferent type o data
// ninja.age = '30'



//explicit types
let character: string;
let age: number;
let isLoggedIn: boolean;
age = 30;
isLoggedIn = true;
character = 'sam'

//arrays
let ninjas: string[] = [];
//ninjas = [10,23], this is not allowed because we already declare the array as string data type container
//this is allowed
ninjas = ['yoshi', 'mario'];
ninjas.push('sam');

//union types for use mixed types into an array
let mixedTypes: (string|number|boolean)[] = []
mixed.push('hello');
mixed.push(20);
mixed.push(false)

let uid: string|number;
uid = '123'
uid = 123

//Objects
let ninjaOne: object;
ninjaOne = {name: 'yoshi', age: 20};

// This is a way to declare the structure of an object
let ninjaTwo: {
    name: string,
    age: number,
    beltColor: string
}
ninjaTwo = {name:'mario', age: 20, beltColor: 'black'}

//This would be invalid because we are not declaring array type inside the object
//ninjaTwo = {name:'mario', age: 20, beltColor: 'black', skill:[]}

