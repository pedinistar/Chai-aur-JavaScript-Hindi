/*
There are two types of datatypes in JavaScript:
  - Primitive
  - Non-Primitive
*/


/*
# Primitive (these are call by value datatypes. there are 7 types)
-- String
-- Number
-- Boolean
-- null
-- undefined
-- Symbol
-- BigInt
*/


/*
# Reference Type / Non-Primitive Type
-- Array
-- Objects
-- Functions
*/




// 🌈🌈🌈🌈🌈🌈🌈🌈🌈🌈🌈🌈🌈🌈🌈🌈🌈🌈🌈🌈🌈🌈🌈🌈🌈🌈🌈🌈🌈🌈🌈🌈🌈🌈🌈🌈🌈🌈🌈🌈🌈🌈
/*
Return type of variables in JavaScript
1)Primitive Data Types 
  - Number (number)
  - String (string)
  - Boolean (boolean)
  - null (object) ⭐
  - undefined (undefined)
  - Symbol (symbol)
  - BigInt (bigint)
2)Reference Data Types
  - Arrays (object)
  - Function (object function) ⭐⭐
  - Object (object)
*/
// 🌈🌈🌈🌈🌈🌈🌈🌈🌈🌈🌈🌈🌈🌈🌈🌈🌈🌈🌈🌈🌈🌈🌈🌈🌈🌈🌈🌈🌈🌈🌈🌈🌈🌈🌈🌈🌈🌈🌈🌈🌈🌈



// 🌸🌸🌸🌸🌸🌸🌸🌸🌸🌸🌸🌸🌸🌸🌸🌸🌸
// Q > js dynamic language hai ya static ?
// A > js is a dynamically typed language. Because data types will automatically assigned at the time of 
//     compilation or code execution. Js is dynamically typed language this means that variable types are 
//     determined at runtime, and you do not need to expicitly declare the type of a variable before using 
//     it. you can assign diifferent types of values to a variable during its lifetime
// 🌸🌸🌸🌸🌸🌸🌸🌸🌸🌸🌸🌸🌸🌸🌸🌸🌸



//these both are numbers
const score = 100;
const scoreValue = 100.3;
const isLoggedIn = false;
const outsideTemp = null;
let userEmail;  // undefined


// ⭐ symbols usage
const id = Symbol('123');    // Symbol(123)
const anotherId = Symbol('123')   // Symbol(123)

console.log(id === anotherId);  // false


// BigInt
const bigNum = 2222222222222223333333333n;
console.log(bigNum);
console.log(typeof bigNum)  // 'bigint'



// ⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐  Console.table([--yahan likho--]) ⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐


// Array
const bangtanBoys = ["namjoon","jin","hoseok","suga","jimin","v","jk"];
console.table(bangtanBoys)
console.log(typeof bangtanBoys)  // object
/*
┌─────────┬───────────┐
│ (index) │  Values   │
├─────────┼───────────┤
│    0    │ 'namjoon' │
│    1    │   'jin'   │
│    2    │ 'hoseok'  │
│    3    │  'suga'   │
│    4    │  'jimin'  │
│    5    │    'v'    │
│    6    │   'jk'    │
└─────────┴───────────┘
*/


// Object
const obj = {
  name: "kim namjoon",
  age :30
}
console.table(obj)
/*
┌─────────┬───────────────┐
│ (index) │    Values     │
├─────────┼───────────────┤
│  name   │ 'kim namjoon' │
│   age   │      30       |
└─────────┴───────────────┘
*/


// FUNCTION
const myFunc = function () {
  console.log("Hello bhai");
}
console.log(typeof myFunc)  // type of function is ⭐object function




// DATA TYPE
console.table([typeof bangtanBoys, typeof obj, typeof myFunc])
/*
┌─────────┬────────────┐
│ (index) │   Values   │
├─────────┼────────────┤
│    0    │  'object'  │
│    1    │  'object'  │
│    2    │ 'function' │
└─────────┴────────────┘
*/



// ⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐
const typeOfDataTypes = {
  undefined: "undefined",
  null: "object",
  boolean: "boolean",
  number: "number",
  string: "string",
  object: "object/function"
}
console.table(typeOfDataTypes)
/*
┌───────────┬───────────────────┐
│  (index)  │      Values       │
├───────────┼───────────────────┤
│ undefined │    'undefined'    │
│   null    │     'object'      │
│  boolean  │     'boolean'     │
│  number   │     'number'      │
│  string   │     'string'      │
│  object   │ 'object/function' │
└───────────┴───────────────────┘
*/

// ⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐
