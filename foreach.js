/* just like forloop iterate throug every item and perform task on that item */
let items = [
    { name: "kashif", price: 100 },
    { name: "kashif", price: 20 },
    { name: "kashif", price: 10 },
    { name: "kashif", price: 10 },
    { name: "kashif", price: 10 }
]

items.forEach((items)=>{
    items.price+=10;
})
console.log(items)