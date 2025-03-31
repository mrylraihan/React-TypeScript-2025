// lets say we have 2 types
var user1;
user1 = { isAdmin: true };
console.log(user1); // true
var appUser1;
appUser1 = { userName: 'John' };
console.log(appUser1);
// this mean a type that must use both properties from Admin and AppUser types 
var combinedUser1;
combinedUser1 = { isAdmin: true, userName: 'John' };
console.log(combinedUser1); // true John
var adminOrUser1;
adminOrUser1 = { isAdmin: true };
console.log(adminOrUser1); // true
var adminOrUser2;
adminOrUser2 = { userName: 'John' };
console.log(adminOrUser2); // John
