let names: string = 'mike'

console.log(names)

let num: number

num = 1232

console.log(num)

// if you declare a variable with out a type it will implicitly get assigned any
let userName

userName = 'Wallie'

console.log(userName)

userName = 8

console.log(userName)

// if you declare a variable and add the value it will get assigned that value type
// here we are getting a string so it will get assigned a string

let userName2 = 'Wallie'

console.log(userName2)
// userName2 will error because it gets assigned a string type above implicitly
// userName2 = 8

console.log(userName2)
// allows you too assign 2 types, union type

let userName3: string | number
userName3 = 'Wallie'
console.log(userName3)
userName3 = 33
console.log(userName3)

let test: boolean = true
let test1: string = 'string'
let test2: number
let test3: string | number = 2 || 'test'
let test4: string[] = ['Word1', 'Word2']
let test5: {
	address: string
	age: number
} = { address: 'Savington Street', age: 20 }
