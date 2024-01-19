// WAYS TO DECLARE STRINGS
// 1
const name = "sneha"
console.log(name);
console.log(name.length);
// 2
const gameName = new String('sneha')
console.log(gameName[0]);
console.log(gameName[1]);
console.log(gameName.__proto__);
console.log(gameName.length)
console.log(gameName.toUpperCase());  // this will not change the original string ref back to previous lecture (stack and heap datatypes)
console.log(gameName.charAt('a'));



const repoCount = 25
console.log(name + repoCount + " value");    // NOT RECOMMENDED ⚠️

// YOU SHOULD USE `` 🌸
console.log(`Helo my name is ${name.toUpperCase()} and my repo count is ${repoCount}`);

