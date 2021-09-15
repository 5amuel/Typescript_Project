//Type Aliases, different type of data can be stored in one alias
type StrOrNum = string | number;
type objWithName = { name: string, uid: StrOrNum}

const logDetails = (uid:StrOrNum, item:string) => {
    console.log(`${item} has a uid of ${uid}`)
}


// same alias objWithName can be use in different functions
const greet = (user: objWithName) => {
    console.log(`${user.name} says hello`)
}

const greetAgain = (user: objWithName) => {
    console.log(`${user.name} says hello again`)
}
