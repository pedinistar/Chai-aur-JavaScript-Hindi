let score = "33s";    
let score2 = null;       
 
console.log(Number(score));    // ----> NaN  [Not a Number]
console.log(Number(score2));   // ---> 0


// Number("33")  =>  33
// Number("33ab")  => NaN
// Number(true) => 1 ⭐
// Number(false)  => 0 ⭐
// Number(null) => 0 ⭐
// Number(undefined) => NaN⭐

let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);   // true


//  Boolean(1) => true    ⭐
//  Boolean(0) => false   ⭐
//  Boolean("") => false  ⭐
// Boolean("hitesh") => true  ⭐
// Boolean(undefined) => false⭐



let someNum = 33;
let stringNum = String(someNum);
console.log(stringNum);  // '33'
console.log(typeof stringNum);  // string


// OPERATIONS 
let value = 3;
let negValue = -value;
console.log(negValue);    // -3

console.log(2+2);

let str1 = "hello"
let str2 = " june"
let str3 = str1+str2;
console.log(str3);


// 😵😵😵😵😵😵😵😵😵😵😵😵😵😵😵😵😵😵
console.log("1"+2);     // 12
console.log(1+"2");     // 12
console.log("1"+2+2);   // 122
console.log(1+2+"2");   // 32
// 😵😵😵😵😵😵😵😵😵😵😵😵😵😵😵😵😵😵


let gameCounter = 100;
gameCounter++;
console.log(gameCounter);
