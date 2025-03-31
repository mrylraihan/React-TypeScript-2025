// You can create aliases or types for anything 

// functions 
type AddFn = (a:number, b:number)=>number

const add: AddFn = (a, b) => a + b

function calculate(a:number, b:number, calcFn:AddFn):number{
    return calcFn(a,b)
}

console.log(calculate(2,3,add ))

// Objects 

type School = {
    name: string,
    address:string,
    grades:string
}

let ps261 :School = {
    name: 'ps 261',
    address: '261 7th ave',
    grades: 'K-5'
}
console.log(ps261)

// union data types 

type StringOrNum = string | number

let userId:StringOrNum = 3
console.log(userId)


type stringArray = string[]

let namesList:stringArray = ['Mike', 'Ryan', 'Brian']
console.log(namesList)


type numberArray = number[]

let numberList = [1,2,3,4,5]
console.log(numberList)

// type name , parameter types, then return type 

type addNames = (a:string, b:string)=>string

const fullName: addNames = (a, b) => `${a} ${b}`

console.log(fullName('Wayel', 'Raihan'))