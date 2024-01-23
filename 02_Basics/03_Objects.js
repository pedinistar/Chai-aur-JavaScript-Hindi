// OBJECTS

// singleton

// Object.create          // -> this is the constructor method 

// object literals

// ⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐
const mySym = Symbol["key1"]

const JsUser = {
  [mySym]: "mykey1",
  name: "sneha",
  "fullName": "sneha pedini",
  age: 20,
  email: "sneha@google.com",
  isLoggedIn: false
}


// console.log(JsUser.email);
// console.log(JsUser["email"]);

// console.log(JsUser."fullName");❌
// console.log(JsUser["fullName"]);

// console.log(JsUser[mySym]);


JsUser.email = "niknak@gpt.com"
// console.log(JsUser);


// ⭐⭐⭐⭐⭐⭐⭐⭐⭐
// this will not change the obj and will freeze it
// Object.freeze(JsUser)


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
