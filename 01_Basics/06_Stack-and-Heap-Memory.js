// There are two types of memory in JavaScript
// - Stack (used with Primitive)
// - Heap (used with Non-Primitive)

let myName = "Jayashree"
let anotherName = myName;

console.log(myName);   // Jayashree
console.log(anotherName);   // Jayashree

anotherName = "june uze"
console.log(myName); // Jayashree
console.log(anotherName);   // june uze

/* here myName contained "jayashree" then we assigned anotherName as myName thus now both of them contain same string "jayashree"
   but then when i changed anotherName to "june uze", it didn't changed myName. thus these are primitive datatypes where memory
   is stored using stack
*/



let userOne = {
  email: "user@gmail.com",
  upi: "user@y2"
}

let userTwo = userOne;

console.log(userOne);   // { email: 'user@gmail.com', upi: 'user@y2' }
console.log(userTwo);   // { email: 'user@gmail.com', upi: 'user@y2' }

userTwo.email = "--@gmail.com"

console.log(userOne);  // { email: '--@gmail.com', upi: 'user@y2' }
console.log(userTwo);  // { email: 'user2--@gmail.com', upi: 'user@y2' }


/* here userOne contained { email: 'user@gmail.com', upi: 'user@y2' } then we assigned userTwo as userOne thus now both of them 
  contain same { email: 'user@gmail.com', upi: 'user@y2' } but then when i changed userTwo.email to  "--@gmail.com", it 
  changed userOne.email too, thus these are non-primitive datatypes where memory Heap is stored using stack
*/
