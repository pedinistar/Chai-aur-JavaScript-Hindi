// if

// if(condition){ }

if (true) {
  // executes
}

const isUserLoggedIn = true;
if (isUserLoggedIn){
  console.log("user logged in");
}

// < , > , <= , >= , == , != , === , !==

console.log(2!==2);   // false
console.log("2"!==2);   // true



// BLOCK SCOPE
const score = 200

if (score > 100) {
  const power = "fly"
  console.log(`User Power: ${power}`);  // here power is defined
}
// console.log(`User Power: ${power}`);  // here power is not defined



// SHORTHAND NOTATION
const balance = 1000
if (balance>500) console.log("test")
console.log("done")



// NESTING
const balance1 = 10000

if (balance < 500) {
  console.log("less than");
} else if (balance < 750) {
  console.log("less than 750");
} else if (balance < 900) {
  console.log("less than 900");
} else {
  console.log("less than 1200");    // less than 1200
}



// this is a flag
const userLoggedIn = true
// this is a flag
const debitCard = true
const loggedInFromGoogle = true
const loggedInFromEmail = false

// multiple condition checking
if (userLoggedIn && debitCard ){
  console.log("allow to buy");
}

if ( loggedInFromEmail || loggedInFromGoogle ){
  console.log("user logged in");
}

