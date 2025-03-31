// Here we are giving the role specific role and type 
// the role variable can only have this string values as it own
// anything else would cause an error which is why you will test underlined with red 
// let role: "admin"| "user"| "editor"//admin, user, editor
var role; //admin, user, editor
role = "admin";
console.log(role);
role = "user";
console.log(role);
role = "editor";
console.log(role);
// role="abc"
// role='test'
function performAction(action, role) {
    switch (role) {
        case "admin":
            console.log("Admin ".concat(action));
            break;
        case "user":
            console.log("User ".concat(action));
            break;
        case "editor":
            console.log("editor ".concat(action));
            break;
        default:
            console.log("Invalid role");
    }
}
performAction('cries', 'admin');
performAction('laughs', 'user');
performAction('wines', 'editor');
// Adding type Guards
function performActions2(action, role) {
    if (role === "admin" && typeof action === 'string') {
        // ... Do something only if we get admin and the action is a string
    }
}
function combine(a, b) {
    if (typeof a === 'number' && typeof b === 'number') {
        return a + b;
    }
    return "".concat(a, " ").concat(b);
}
console.log(combine(2, 2));
console.log(combine("2", "2"));
