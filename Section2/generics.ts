type Role = 'admin' | 'user' | 'editor'
// Here we are giving the role specific role and type
// the role variable can only have this string values as it own
// anything else would cause an error which is why you will test underlined with red
// let role: "admin"| "user"| "editor"//admin, user, editor
let role: Role //admin, user, editor

role = 'admin'
console.log(role)
role = 'user'
console.log(role)
role = 'editor'
console.log(role)
// role="abc"
// role='test'

function performAction(action: string|number, role: Role) {
	switch (role) {
		case 'admin':
			console.log(`Admin ${action}`)
			break
		case 'user':
			console.log(`User ${action}`)
			break
		case 'editor':
			console.log(`editor ${action}`)
			break
		default:
			console.log('Invalid role')
	}
}

performAction('cries', 'admin')
performAction('laughs', 'user')
performAction('wines', 'editor')

let roles:Array<Role>;// this is an example of built in generic type
// we could have also done it like this 
// let roles:Role[]
roles=['admin', 'user', 'editor']

// we can build our own generic types
// place holder data type because we dont know 
// custom generic type
type DataStorage<T> = {
    storage: T[],
    add:(data:T)=>void;
}
// we basically set up a bunch or properties and allow the data type to be flexible 
// we only add the data type when we are using the custom generic type to specify 
// thats why you will see the same generic type with a string or a number below
let data1:DataStorage<number>;
data1={
    storage:[1,2,3,4],
    add:(data)=>{data1.storage.push(data)}
}
data1.add(5)
console.log(data1)

let data2:DataStorage<string>;
data2={
    storage:['a','b','c'],
    add:(data)=>{data2.storage.push(data)}
}
data2.add('d')
console.log(data2)

type User = {username:string}

let userStorage: DataStorage<User>;
userStorage={
    storage:[{username:"Mike333"}, {username:"Billy123"}],
    add:(user)=>{
			userStorage.storage.push(user)
		}
}
console.log(userStorage)
userStorage.add({username:"John123"})
console.log(userStorage)

function merge<T,U>(a:T, b:U){
    return {...a,...b}
}


let combined1 = merge<User, {address:string}>({username:"mike123"}, {address:"123 street"})
console.log(combined1)


type System<T,U> = {
    name:T,
    price:U
}

let PlayStation:System<string, number>
PlayStation={
    name:"PlayStation",
    price:500
}

console.log(PlayStation)

function TurnOn<T>(a:T){
    return `Turning on ${a}`
}

let startPS5 = TurnOn<string>('playstation')
console.log(startPS5)
