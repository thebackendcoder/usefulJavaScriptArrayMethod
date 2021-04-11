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

items= items.filter((item)=>{
    if(item.price>100){
        return item
    }
})


console.log(items);