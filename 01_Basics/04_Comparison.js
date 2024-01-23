console.log(2>1);   // true
console.log(2>=1);  // true
console.log(2<1);   // false
console.log(2==1);  // false
console.log(2!=1);  // true

console.log("2">1);     // true  - js automatically converts 2 into number itself⭐
console.log("02">1);    // true  ⭐


// ⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️

// TRY TO AVOID THE FOLLOWING TYPE OF CONVERSIONS 


console.log(null == 0);  // false
console.log(null > 0);   // false
console.log(null < 0);   // false
console.log(null >= 0);  // true
console.log(null <= 0);  // true


/* (null==0) gives false on the other hand (null>=0) gives true because , equality check operator (==,===)
   and comparison operators(>,<,<=,>=) work differently. Comparison operators coverts null to a number,
   that is treating it as 0⭐ Thst's why null==0 gives false and null>=0 gives true
*/


console.log(undefined == 0);  // false
console.log(undefined > 0);   // false
console.log(undefined < 0);   // false
console.log(undefined >= 0);  // false
console.log(undefined <= 0);  // false


// ⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️




// STRICT CHECK
// ===
console.log("2"===2);
// diff data type
