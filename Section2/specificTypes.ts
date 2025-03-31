type Role = "admin"| "user"| "editor"
// Here we are giving the role specific role and type 
// the role variable can only have this string values as it own
// anything else would cause an error which is why you will test underlined with red 
// let role: "admin"| "user"| "editor"//admin, user, editor
let role: Role//admin, user, editor

role="admin"
console.log(role)
role="user"
console.log(role)
role="editor"
console.log(role)
// role="abc"
// role='test'


function performAction (action :string, role:Role){
    switch(role){
        case "admin":
            console.log(`Admin ${action}`)
            break;
        case "user": 
            console.log(`User ${action}`)
            break;
        case "editor":
            console.log(`editor ${action}`)
            break;
        default:
            console.log("Invalid role")
    }
}

performAction('cries', 'admin')
performAction('laughs', 'user')
performAction('wines', 'editor')

// Adding type Guards
function performActions2(action:string|number , role:Role){
    if(role === "admin" && typeof action === 'string'){
    // ... Do something only if we get admin and the action is a string
    }
}

function combine (a:string|number, b:string|number){
    if(typeof a === 'number' && typeof b === 'number'){
    return a+b
    }
    return `${a} ${b}`
}

console.log(combine(2,2))
console.log(combine("2", "2"))