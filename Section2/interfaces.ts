interface Credentials {
    username: string;
    password?: string
}

let employee1:Credentials = {
    username: 'John Doe',
}

console.log(employee1)

type Employee = {
	username: string
	password?: string
}

let employee2: Credentials = {
	username: 'John Doe',
}

console.log(employee2)
