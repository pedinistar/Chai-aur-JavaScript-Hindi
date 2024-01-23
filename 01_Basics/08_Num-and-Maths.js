const score = 400;   // 400

const balance = new Number(100);
console.log(balance);   //[Number: 100]

console.log(balance.toString().length); //3
console.log(typeof balance.toString());  //string
console.log(balance.toFixed(2));   // 100.00 ⭐
console.log(balance.toFixed(1));   // 100.0  ⭐


const otherNumber = 23.8966
console.log(otherNumber.toPrecision(3));  // 23.9 ⭐


const hundreds = 1000000;
console.log(hundreds.toLocaleString());    // 1,000,000 ⭐
console.log(hundreds.toLocaleString("en-IN"));    // 10,00,000 ⭐




// ➗➗➗➗➗➗➗➗➗➗➗➗➗ Math ➗➗➗➗➗➗➗➗➗➗➗➗➗➗➗➗➗➗
// math is js library

console.log(Math);     // Object [Math] {}
console.log(Math.PI);   // 3.141592653589793
console.log(Math.abs(-4)); // negatve ko positive kardeta hai
console.log(Math.abs(4));

console.log(Math.round(4.3));
console.log(Math.ceil(4.3)); // upper ki
console.log(Math.floor(4.3)); // niche ki

console.log(Math.sqrt(4));  //2 

console.log(Math.random());   //(value 0 aur 1 ke bich ki hi aati hai)
console.log((Math.random()*10) + 1); //(value from 0 to 10)



// VERY IMP

// ⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐
const min = 10
const max = 20
console.log(Math.floor(Math.random() * (max-min+1))+min)
// ⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐
