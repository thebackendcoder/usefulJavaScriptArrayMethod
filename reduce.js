/* the reduce function you can use if you want to find the sum of all the price in the below array*/

let items = [
    { name: "kashif", price: 100 },
    { name: "kashif", price: 20 },
    { name: "kashif", price: 10 },
    { name: "kashif", price: 10 },
    { name: "kashif", price: 10 }
]

const total = items.reduce(function(currentTotal, items){
    return items.price+ currentTotal
}, 0)
console.log(total);

