// WAYS TO DECLARE STRINGS
// 1
const name = "sneha"
// console.log(name);   //sneha
// console.log(name.length);  // 5
// 2
const gameName = new String('sneha-june')
// console.log(gameName[0]);   // s
// console.log(gameName[1]);      // n
// console.log(gameName.__proto__);   // {}
// console.log(gameName.length)    // 10
// console.log(gameName.toUpperCase());  // this will not change the original string ref back to previous lecture (stack and heap datatypes)   // SNEHA-JUNE
// console.log(gameName.charAt('a'));    // s


// 🌸  substrign will ignore the negative numbers givn in parametrs and will continue to count from 0
const newString = gameName.substring(0, 4);
// console.log(newString);     // sneh

// 🌸  slice is unlike substrng will not ignore the negative numbers and will count accordingly
const anotherString = gameName.slice(-8, 4)
// console.log(anotherString);    // eh


const newStringOne = "   sneha  "
// console.log(newStringOne);          //    sneha  
// console.log(newStringOne.trim());   //sneha

const url = "https://www.google.com/june%20uze"
// console.log(url.replace("%20","-"))    //https://www.google.com/june-uze
// console.log(url.includes('june'))  // true
// console.log(url.includes('jane'))  // false


console.log(gameName.split("-"));    // [ 'sneha', 'june' ]


const repoCount = 25
// console.log(name + repoCount + " value");    // NOT RECOMMENDED ⚠️     //sneha25 value

// YOU SHOULD USE `` 🌸
// console.log(`Helo my name is ${name.toUpperCase()} and my repo count is ${repoCount}`);
// Helo my name is SNEHA and my repo count is 25

// 💜💜💜💜💜💜
// STRING INTREPOLATION
// ``