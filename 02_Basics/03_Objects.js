// OBJECTS

// singleton

// Object.create          // -> this is the constructor method 

// object literals

// ⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐
const mySym = Symbol["key1"]

const JsUser = {
  // HOW TO ADD SYMBOL AS A KEY IN OBJECT⭐
  [mySym]: "mykey1",
  name: "sneha",
  "fullName": "sneha pedini",
  age: 20,
  email: "sneha@google.com",
  isLoggedIn: false
}


console.log(JsUser.email);
console.log(JsUser["email"]);

// console.log(JsUser."fullName");❌
console.log(JsUser["fullName"]);


// HOW TO ADD SYMBOL AS A KEY IN OBJECT⭐
console.log(JsUser[mySym]);  // symbol


JsUser.email = "niknak@gpt.com"
// console.log(JsUser);


// ⭐⭐⭐⭐⭐⭐⭐⭐⭐
// THIS WILL NOT CHANGE THE OBJECT AND WILL FREEZE IT
Object.freeze(JsUser)
// ⭐⭐⭐⭐⭐⭐⭐⭐⭐


JsUser.email = "--------@gpt.com"
// console.log(JsUser);


JsUser.greeting = function(){
  console.log("Good Death!");
}

JsUser.greetingTwo = function(){
  console.log(`Good Death! ${this.name}`);
}

JsUser.greeting();
// Good Death!
JsUser.greetingTwo();
// Good Death! sneha

console.log(JsUser);
/*
{
  undefined: 'mykey1',
  name: 'sneha',
  fullName: 'sneha pedini',
  age: 20,
  email: '--------@gpt.com',
  isLoggedIn: false,
  greeting: [Function (anonymous)],
  greetingTwo: [Function (anonymous)]
} 
*/