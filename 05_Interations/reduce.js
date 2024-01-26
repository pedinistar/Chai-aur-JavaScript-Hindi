const myNums = [1,2,3]

// const myTotal = myNums.reduce( function(accumulator, currentValue) {
//   console.log(`acc: ${accumulator}`);
//   console.log(`currval: ${currentValue}`);
//   return accumulator + currentValue
// }, 0)

const myTotal = myNums.reduce( (acc, curr) => acc + curr, 0)
console.log(myTotal);



const shoppingCart = [
  {
    itemName: "js course",
    price: 499
  },
  {
    itemName: 'data science crs',
    price: 6999
  },
  {
    itemName:"python crs",
    price: 399
  }
]

const myTotalPrice = shoppingCart.reduce( (acc, item) => acc + item.price,0)
console.log(myTotalPrice);