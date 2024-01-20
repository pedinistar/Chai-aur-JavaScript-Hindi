// ARRAY
const myArr = ["hi",1,2,3,4,5,true,"sneha"];
// console.log(myArr[0]);

// const myHeros = ["nobara","levi"]

// const myArr2 = new Array(1,2,3,4)
// console.log(myArr2[0]);



// Array Methods
// myArr.push(6); 
// console.log(myArr);

// myArr.pop(6); 
// console.log(myArr);

// myArr.unshift(9);
// console.log(myArr);

// myArr.shift()
// console.log(myArr);

// console.log(myArr.includes(2)); // true
// console.log(myArr.includes("sneha")); // true
// console.log(myArr.includes("vinita")); // false

// console.log(myArr.indexOf(7)); // -1 means nhi hai ye array mein 
// console.log(myArr.indexOf(2)); // 2


const newArr = myArr.join();
// console.log(myArr);
// console.log(newArr);
// console.log(typeof newArr);   // yahan type bhi change hojata hai string mein



// 💜💜💜💜💜💜💜💜💜💜💜💜💜💜💜💜💜💜💜💜💜💜💜💜💜💜💜💜💜💜
// slice and splice

console.log("A ", myArr);
// A  [ 'hi', 1, 2, 3, 4, 5, true, 'sneha' ]

const myN1 = myArr.slice(1,3)         // slice original array ko manipulate nahi karta  

console.log(myN1);
// [ 1, 2 ]

console.log("B ", myArr)
// B  [ 'hi', 1, 2, 3, 4, 5, true, 'sneha' ]

const myn2 = myArr.splice(1,3)       // splice original array ko hi manipulate kardeta hai 

console.log(myn2);                  
// [ 1, 2, 3 ]

console.log("C ", myArr)
// C  [ 'hi', 4, 5, true, 'sneha' ]

