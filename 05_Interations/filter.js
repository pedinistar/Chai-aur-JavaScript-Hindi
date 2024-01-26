const bts = ["rm","jin","jhope","suga","jimin","v","jk"]

const values = bts.forEach((item)=>{
  console.log(item);
})

console.log(values);    // undefined


// const values = bts.forEach((item)=>{
//   // console.log(item);
//   return true
// })

// console.log(values);    // undefined


// yr batata hai ki for each kuch bhi return nahi karta aap chahe na chahe



// filter values return krta h

const nums = [1,2,3,5,6,3,3]

const newNums = nums.filter( (num) => { 
  return num>4
})

console.log(newNums);
// jab bhi ham filter use krte hain to p=filter ke andr ek call back function
// milta hai jis ke ander har value ko access kiya jayega  lekin uske bad
// appko deni padti hai ek condition jo jo us conditio ko satisfy karte hai
// wo wo value to return ki jayengi 

// by for each
const newNumbs2 = []
nums.forEach((num)=>{
  if(num>4){
    newNumbs2.push(num)
  }
})
console.log(newNumbs2);



