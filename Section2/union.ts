// Union Types allows you assign your properties and variables with options 
// meaning it can be this data type or this one 

let testVariable : string | number;
testVariable = "Wallie"
console.log(testVariable)

testVariable = 23

console.log(testVariable)


let testObj :{
    name : string,
    age : number
    isCool:boolean|string
}

testObj = {
    name : "Wallie",
    age:32,
    isCool : true
}
console.log(testObj)
testObj = {
    name : "Mike",
    age:33,
    isCool : "No"
}
console.log(testObj)


type Person = {
    name : string,
    age : number
    isCool: boolean|string
}

let testPerson:Person;

testPerson ={
    name : "Sarah",
    age:34,
    isCool : "Yes"
}

console.log(testPerson)