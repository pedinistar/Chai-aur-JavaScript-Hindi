// ARRAY

const myArr = ["hi",1,2,3,4,5,true,"sneha"];
console.log(myArr[0]);  // "hi"

const myHeros = ["nobara","levi"]

const myArr2 = new Array(1,2,3,4)
console.log(myArr2[0]);  // 1



// Array Methods

myArr.push(6); 
console.log(myArr);   // [ 'hi', 1, 2, 3, 4, 5, true, 'sneha', 6 ]

myArr.pop(6); 
console.log(myArr);   // [ 'hi', 1, 2, 3, 4, 5, true, 'sneha' ]

myArr.unshift(9);
console.log(myArr);   // [ 9, 'hi', 1, 2, 3, 4, 5, true, 'sneha' ]⭐

myArr.shift()
console.log(myArr);   // [ 'hi', 1, 2, 3, 4, 5, true, 'sneha' ]⭐

console.log(myArr.includes(2)); // true
console.log(myArr.includes("sneha")); // true
console.log(myArr.includes("vinita")); // false

console.log(myArr.indexOf(7)); // -1 means nhi hai ye array mein ⭐
console.log(myArr.indexOf(2)); // 2


const newArr = myArr.join();
console.log(myArr);    // [ 'hi', 1, 2, 3, 4, 5, true, 'sneha' ]
console.log(newArr);   // hi,1,2,3,4,5,true,sneha
console.log(typeof newArr);   // yahan type bhi change hojata hai string mein  // string



// 💜💜💜💜💜💜💜💜💜💜💜💜💜💜💜💜💜💜💜💜💜💜💜💜💜💜💜💜💜💜
// slice and splice

console.log("A : ", myArr);
// A  [ 'hi', 1, 2, 3, 4, 5, true, 'sneha' ]

const myN1 = myArr.slice(1,3)         // ⭐ slice original array ko manipulate nahi karta  

console.log(myN1);
// [ 1, 2 ]


console.log("B : ", myArr)
// B : [ 'hi', 1, 2, 3, 4, 5, true, 'sneha' ]

const myn2 = myArr.splice(1,3)       // ⭐ splice original array ko hi manipulate kardeta hai 

console.log(myn2);                  
// [ 1, 2, 3 ]

console.log("C : ", myArr)
// C  [ 'hi', 4, 5, true, 'sneha' ]



// ➡️➡️➡️➡️➡️➡️➡️➡️➡️➡️➡️➡️➡️➡️➡️➡️➡️➡️➡️➡️➡️➡️➡️➡️➡️➡️➡️➡️➡️➡️➡️➡️➡️➡️➡️➡️➡️➡️➡️➡️➡️➡️➡️➡️➡️➡️➡️➡️➡️➡️
/* 
string mein substring and slice : substring pehle parameter mein negative value ko ignor karke 0 se start krdeta hai lekin slice mein negative indexes ko ignore nhi karta
array mein splice and slice hota hai : splice original array ko hi manipulate kardeta hai but slice original array ko manipulate nhi karta
*/
