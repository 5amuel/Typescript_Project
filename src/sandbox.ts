//Type Aliases, different type of data can be stored in one alias
type StrOrNum = string | number;
type objWithName = { name: string, uid: StrOrNum}

const user = {
    name: "sam",
    uid: "123",
}

const products = {
    item: 'beer',
    uid: 123,
}



const logDetails = (uid:StrOrNum, item:string) => {
    console.log(`${item} has a uid of ${uid}`)
}
//since type of item parameter is string, value can't be number
logDetails(products.uid, products.item)
console.log(typeof(products.uid))




// same alias objWithName can be use in different functions
const greet = (user: objWithName) => {
    console.log(`${user.name} says hello`)
}
greet(user);


const greetAgain = (user: objWithName) => {
    console.log(`${user.name} says hello again`)
}
