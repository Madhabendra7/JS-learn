
const myNums = [ 1, 2, 3]

// const myTotal = myNums.reduce(function(acc, currval){
//     console.log(`acc: ${acc} and currval: ${currval}`); 
//     return acc + currval
// }, 0)

const myTotal = myNums.reduce( (acc, curr) => acc + curr, 0 )

// console.log(myTotal);

const shoppingCart = [
    {
        itemName: "js cource",
        price: 2999
    },
    {
        itemName: "python course",
        price: 567
    },
    {
        itemame: "cpp cource",
        price: 2899
    },
    {
        itemName: "java cource",
        price: 999
    },
]
// console.log(shoppingCart);
const priceToPay = shoppingCart.reduce( (acc, item) => acc + item.price,0)
console.log(priceToPay);
