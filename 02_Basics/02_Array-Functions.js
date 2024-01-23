// Array Functions

const attackOfTitans = ["levi","armin","erwin",]
const jujutsuKaisen = ["fushiguro","nobara","sukuna"]

// attackOfTitans.push(jujutsuKaisen)
console.log(attackOfTitans);   // [ 'levi', 'armin', 'erwin', [ 'fushiguro', 'nobara', 'sukuna' ] ]
// array k andr array aagya , ye problem hai😵

// attackOfTitans.concat(jujutsuKaisen)
console.log(attackOfTitans);  // [ 'levi', 'armin', 'erwin', [ 'fushiguro', 'nobara', 'sukuna' ] ]
// again its problematic😵




// ⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐
// SPREAD OPERATOR
const allAnime1 = [...attackOfTitans,...jujutsuKaisen]
console.log(allAnime1)
// [ 'levi', 'armin', 'erwin', 'fushiguro', 'nobara', 'sukuna' ]
// ⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐




const anotherArray = [1,2,3, [4,5,6],7,[6,7,[4,5]]]
const anotherArray2 = anotherArray.flat();
console.log(anotherArray2);   // [ 1, 2, 3, 4, 5, 6, 7, 6, 7, [ 4, 5 ] ]


console.log(Array.isArray("sneha"));   // false 🌸
console.log(Array.from("sneha")); // [ 's', 'n', 'e', 'h', 'a' ] 🌸
console.log(Array.from({name: "sneha"}));  // ⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐ Interesting Situation
// this will return an empty array [], this happens jab use smaj nhi aata ki kese convert karein array mein


let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)); 
