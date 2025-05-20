const arr = [
    {
        name:"Wallie",
        id:100
    },
    {
        name:"Wayel",
        id:101
    },
    {
        name:"Wallie",
        id:103
    }
]


const item = arr.findIndex(person=>person.id===103)
console.log(arr[item])