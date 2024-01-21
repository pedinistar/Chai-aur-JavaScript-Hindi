const user = {
  username: "hitesh",
  price: 999,
  welcomeMessage: function(){
    console.log(this);
    console.log(`${this.username} welcome to website`);
  }
}

console.log(this);  // empty obj 
user.welcomeMessage()
user.username = "sam"
user.welcomeMessage()
// jab bhi current context chiye tb this use kre



// function chai(){
//   let username = "sneha"
//   console.log(this.username);  // undefined thus this doesn't work like it does in object
// }
// chai()
/* <ref *1> Object [global] {
  global: [Circular *1],
  clearImmediate: [Function: clearImmediate],
  setImmediate: [Function: setImmediate] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  clearInterval: [Function: clearInterval],
  clearTimeout: [Function: clearTimeout],
  setInterval: [Function: setInterval],
  setTimeout: [Function: setTimeout] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  queueMicrotask: [Function: queueMicrotask],
  structuredClone: [Getter/Setter],
  atob: [Getter/Setter],
  btoa: [Getter/Setter],
  performance: [Getter/Setter],
  fetch: [Function: fetch],
  crypto: [Getter]
}
*/


// ARROW FUNCTIONS
const chai = function(){
  console.log("hi")
}

chai()


// just remove the function keyword
const chai2 = () => {
  console.log("arrow function")
}
chai2()

// arrow function with explicit return ⭐⭐
const addTwo = (num1,num2) => {
  return num1+num2
}
console.log(addTwo(2,4));


// arrow function with implicit return ⭐⭐
const addTwo2 = (num1,num2) => num1+num2
console.log(addTwo2(2,4));

// curly braces mein wrap kra to return keyword likhna hi padega .... lekin agr {} nahi use kiya to zarurat nahi hai return keyword ki




// OBJECT RETURN KARNA HAI TO 
const objReturn = () => (  {username: "sneha"}  )
console.log(objReturn());




const myArray = [2,3,6,7,6]
myArray.forEach(function(){})
myArray.forEach(() => {})