/*
let score = "33s";    // ----> NaN
// let score = null;        ---> 0

console.log(typeof score);
console.log(typeof (score));


let valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber);      // NaN -> Not a Number



// "33"  =>  33
// "33ab"  => NaN
// true => 1
// false  => 0
// null => 0


let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);   // true


//  1 => true
//  0 => false
//  "" => false
// "hitesh" => true



let someNum = 33;

let stringNum = String(someNum);
console.log(stringNum);
console.log(typeof stringNum);


*/

// OPERATIONS 

let value = 3;
let negValue = -value;
console.log(negValue);    // -3

console.log(2+2);

let str1 = "hello"
let str2 = " june"
let str3 = str1+str2;
console.log(str3);


console.log("1"+2);     // 12
console.log(1+"2");     // 12
console.log("1"+2+2);   // 122
console.log(1+2+"2");   // 32


let gameCounter = 100;
gameCounter++;
console.log(gameCounter); 