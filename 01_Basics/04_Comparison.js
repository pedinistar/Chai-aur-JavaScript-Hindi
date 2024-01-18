// console.log(2>1);
// console.log(2>=1);
// console.log(2<1);
// console.log(2==1);
// console.log(2!=1);

// console.log("2">1);     // true  - js automatically converts 2 into number itself
// console.log("02">1);    // true  


// -------------------------------------------------------------------------------------

// TRY TO AVOID THE FOLLOWING TYPE OF CONVERSIONS ⚠️


// console.log(null > 0);
// console.log(null == 0);   
// console.log(null >= 0);


/*
The reason is that an equality check == and comparisons ><>=<= work differently
comparisons convert null to a number, treating it as 0.
That's why (3) null >= 0 is true and (1) null > 0 is false
*/


// console.log(undefined == 0);   // false
// console.log(undefined < 0);   // false


// ---------------------------------------------------------------------------------------


// STRICT CHECK
// ===
console.log("2"===2);
// diff data type


