
let items = [
    {
        name:"kashif",
        price: 100
    },
    {
        name:"kashif",
        price: 20
    },
    {
        name:"kashif",
        price: 10
    },
    {
        name:"kashif",
        price: 10
    },
    {
        name:"kashif",
        price: 10
    }
] 

const itemNames = items.map(function(val , ind){

    return val.name 
})

console.log(itemNames)