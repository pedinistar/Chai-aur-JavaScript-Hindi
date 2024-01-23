const userEmail = "sneha@mail.com"

if (userEmail) {
  console.log("got user email");
}
else {
  console.log("don't have user email");
}

// truthy value jab ham assume karlete hai ki iski value true hai yahan pr useremail ek truthy value hai



// Falsy values
// false
// 0
// -0
// 0n
// ""
// null
// undefined
// NaN


// inke alawa sb truthy hai
// truthy
// "0"
// 'false'
// ' '
// []
// {}
// function(){} // empty function



// to check an array
const myArr = []

if (Array.isArray(myArr)) {
  console.log("it is an array");
}
else{
  console.log("it is not an array");
}

if (myArr.length === 0) {
  console.log("it is not an array");
}
else{
  console.log("it is an array");
}


//  to check object
const myObj = {}

if (Object.keys(myObj).length === 0) {
  console.log("object is empty");
}


// 😵😵😵😵😵😵😵😵😵😵😵😵😵😵😵😵😵😵
//  false == 0   // true
//  false == ""  // true
//  0 == ""      // true



// logical op -> && ||



//  nullish coalescing operator (??): null undefined
let val1;

val1 = 5 ?? 10;
console.log(val1);  // 5

let val2;

val2 = null ?? 10;
console.log(val2);  // 10



let val3;

val3 = null ?? 30 ?? 20
console.log(val3);  // 30






// terniary operator
// condition ? true : false


const iceTea = 100
iceTea <= 80 ? console.log("less than 80") : console.log("more than 80");;

