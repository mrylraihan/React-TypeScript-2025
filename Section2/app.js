var names = "mike";
console.log(names);
var num;
num = 1232;
console.log(num);
// if you declare a variable with out a type it will implicitly get assigned any
var userName;
userName = "Wallie";
console.log(userName);
userName = 8;
console.log(userName);
// if you declare a variable and add the value it will get assigned that value type
// here we are getting a string so it will get assigned a string
var userName2 = "Wallie";
console.log(userName2);
// userName2 will error because it gets assigned a string type above implicitly
// userName2 = 8
console.log(userName2);
// allows you too assign 2 types, union type
var userName3;
userName3 = "Wallie";
console.log(userName3);
userName3 = 33;
console.log(userName3);
