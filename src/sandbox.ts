//Functions basics
let greet: Function;

greet = () => {
    console.log("hello")
}
greet() //return hello


const add = (a: number, b: string, c: number | string) => {
    console.log(a, b, c);
}
add(2, "sam", "veinte") //return 2, 'sam', "veinte"


//the renturned value will take the type of parameters variable
const minus = (a: number,  b: number ) => {
    return a + b
}
let result = minus(2, 2)
console.log(result)//return 4
//result = 'something' //result type is number therefore can not be string