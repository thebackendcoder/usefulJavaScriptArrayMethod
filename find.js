/* checks and return boolean value if the arribute value is present or not */

let items = [
    { name: "kashif", price: 100 },
    { name: "kashif", price: 20 },
    { name: "kashif", price: 10 },
    { name: "kashif", price: 10 },
    { name: "kashif", price: 10 }
]

const findItem = items.find((item) => {
    return item.name === "kashif"
})

console.log(findItem)
