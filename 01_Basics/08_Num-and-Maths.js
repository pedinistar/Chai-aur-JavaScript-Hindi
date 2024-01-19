const score = 400;   // 400

const balance = new Number(100);   //[Number: 100]
console.log(balance);

console.log(balance.toString().length);
console.log(typeof balance.toString());  //string
console.log(balance.toFixed(2));   // 100.00
console.log(balance.toFixed(1));   // 100.0
// ⭐⭐⭐⭐⭐⭐⭐⭐⭐
const otherNumber = 23.8966
console.log(otherNumber.toPrecision(3));


const hundreds = 1000000;
console.log(hundreds.toLocaleString());    // 1,000,000
console.log(hundreds.toLocaleString("en-IN"));    // 10,00,000