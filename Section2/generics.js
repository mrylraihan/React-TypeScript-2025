var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
// Here we are giving the role specific role and type
// the role variable can only have this string values as it own
// anything else would cause an error which is why you will test underlined with red
// let role: "admin"| "user"| "editor"//admin, user, editor
var role; //admin, user, editor
role = 'admin';
console.log(role);
role = 'user';
console.log(role);
role = 'editor';
console.log(role);
// role="abc"
// role='test'
function performAction(action, role) {
    switch (role) {
        case 'admin':
            console.log("Admin ".concat(action));
            break;
        case 'user':
            console.log("User ".concat(action));
            break;
        case 'editor':
            console.log("editor ".concat(action));
            break;
        default:
            console.log('Invalid role');
    }
}
performAction('cries', 'admin');
performAction('laughs', 'user');
performAction('wines', 'editor');
var roles; // this is an example of built in generic type
// we could have also done it like this 
// let roles:Role[]
roles = ['admin', 'user', 'editor'];
// we basically set up a bunch or properties and allow the data type to be flexible 
// we only add the data type when we are using the custom generic type to specify 
// thats why you will see the same generic type with a string or a number below
var data1;
data1 = {
    storage: [1, 2, 3, 4],
    add: function (data) { data1.storage.push(data); }
};
data1.add(5);
console.log(data1);
var data2;
data2 = {
    storage: ['a', 'b', 'c'],
    add: function (data) { data2.storage.push(data); }
};
data2.add('d');
console.log(data2);
var userStorage;
userStorage = {
    storage: [{ username: "Mike333" }, { username: "Billy123" }],
    add: function (user) {
        userStorage.storage.push(user);
    }
};
console.log(userStorage);
userStorage.add({ username: "John123" });
console.log(userStorage);
function merge(a, b) {
    return __assign(__assign({}, a), b);
}
var combined1 = merge({ username: "mike123" }, { address: "123 street" });
console.log(combined1);
var PlayStation;
PlayStation = {
    name: "PlayStation",
    price: 500
};
console.log(PlayStation);
function TurnOn(a) {
    return "Turning on ".concat(a);
}
var startPS5 = TurnOn('playstation');
console.log(startPS5);
