//function signatures
//function signature example 1
let greet: (a:string, b:string) => void;


//la si guiente funcion si cumple con la firma declarada para greet
greet = (name: string, greeting: string) => {
    console.log(`${name} says ${greeting}`)
}
//la siguiente funcion no cumple con la frima declarada para greet a que
//debe contener dos strings como parametros
// greet = (name: string, greeting: number) => {
//     console.log(`${name} says ${greeting}`)
// }
greet("sam", "hoola")


//Function signature example 2 
let calc: (a: number, b: number, c: string) => number;

calc = (numOne: number, numTwo: number, action: string) => {
    if(action === "add"){
        return numOne + numTwo;
    }else {
        return numOne - numTwo
    }
}
console.log(calc(2, 3, "add")) //return 5
console.log(calc(2, 3, "something else")) //return -1



// Function signature example 3
let logDetails: (obj: {name: string, age: number}) => void;
type person = {name: string, age:number};
logDetails =(ninja: person) => {
    console.log(`${ninja.name} is ${ninja.age} years old`)
}


logDetails({name:"sam", age: 24})