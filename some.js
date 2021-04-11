
/* check if any item satisfy the property inside that function*/
let items = [
    { name: "kashif", price: 100 },
    { name: "kashif", price: 20 },
    { name: "kashif", price: 10 },
    { name: "kashif", price: 10 },
    { name: "kashif", price: 10 }
]

const has= items.some((item)=>{
    return item.price <0
})

console.log(has)
