// Types can be used for anything from functions to other data types 
// Interfaces are really limited to Objects 
interface Person {
    name: string;
    age: number;
}

class Employee implements Person{
    name: string;
    age: number;
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
}

let employee1 = new Employee("Wayel", 33)

console.log(employee1)

// We can also use re-define and add more properties to the same interface without getting an error

interface Person {
    country?:string
}

class Employee2 implements Person {
	name: string
	age: number
    country?: string | undefined;
	constructor(name, age, country?) {
		this.name = name
		this.age = age
        this.country = country
	}
}

let employee2 = new Employee2('Wayel', 33, "Yemen")

console.log(employee2)
