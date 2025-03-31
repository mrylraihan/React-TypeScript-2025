// lets say we have 2 types

type Admin = {
    isAdmin:boolean;
}

let user1:Admin;
user1 = {isAdmin: true};
console.log(user1); // true

type AppUser = {
    userName:string;
}


let appUser1:AppUser;
appUser1 = {userName: 'John'};
console.log(appUser1)

// now if we wanted to merge these 2 types 
// we can create a combined type with && 

type combinedUser =  Admin & AppUser
// this mean a type that must use both properties from Admin and AppUser types 
let combinedUser1:combinedUser;
combinedUser1 = {isAdmin: true, userName: 'John'};
console.log(combinedUser1) // true John


// we can also use | for or , meaning it will either be one or the other this is also known as a union type

type AdminOrUser = Admin | AppUser
let adminOrUser1:AdminOrUser;  
adminOrUser1 = {isAdmin: true};
console.log(adminOrUser1) // true

let adminOrUser2:AdminOrUser;
adminOrUser2 = {userName: 'John'};
console.log(adminOrUser2) // John