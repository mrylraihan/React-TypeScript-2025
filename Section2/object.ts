type User = {
	name: string
	age: number
	isAdmin: boolean
	id: string | number
}
let user: User;

user = {
    name:"Max",
    age:34,
    isAdmin:true,
    id:"abc"
}

console.log(user)

let user2: User;

user2 = {
    name:"Max",
    age:34,
    isAdmin:true,
    id: 1
}

console.log(user2)