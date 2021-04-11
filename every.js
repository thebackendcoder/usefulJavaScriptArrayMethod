/* checks if evry item satify the condition inside that function */

let items = [
    { name: "kashif", price: 100 },
    { name: "kashif", price: 20 },
    { name: "kashif", price: 10 },
    { name: "kashif", price: 10 },
    { name: "kashif", price: 10 }
]

const erv= items.every(function(val){
    return val.price<=100
})
console.log(erv)