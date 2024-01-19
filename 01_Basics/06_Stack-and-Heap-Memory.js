// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


// 2 types of Memory
// - Stack (used with Primitive)
// - Heap (used with Non-Primitive)

let myName = "Jayashree"

let anotherName = myName;

console.log(myName);   // Jayashree
console.log(anotherName);   // Jayashree

anotherName = "june uze"
console.log(myName); // Jayashree
console.log(anotherName);   // june uze



let userOne = {
  email: "user@gmail.com",
  upi: "user@y2"
}

let userTwo = userOne;

console.log(userOne);   // { email: 'user@gmail.com', upi: 'user@y2' }
console.log(userTwo);   // { email: 'user@gmail.com', upi: 'user@y2' }

userTwo.email = "user2--@gmail.com"

console.log(userOne);  // { email: 'user2--@gmail.com', upi: 'user@y2' }
console.log(userTwo);  // { email: 'user2--@gmail.com', upi: 'user@y2' }