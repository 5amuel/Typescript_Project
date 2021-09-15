// Esto no se puede hacer en Typescript ya que al declarar los tipos de 
//elementos del array como  string nos impida agregar o cambiarlos a
//otro tipo de dato como number o boolean 
let names = ['luigui', 'mario', 'yoshi']
names.push(9)


// Esto si se puede hacer en Typescript por que se estan declarando 
//los diferentes tipos de datos dentro del array
let mixed = [9, 'sam', true]
mixed.push(10)
mixed.push('mario')
mixed[1] = 1
console.log(mixed)