// Higher Order Array Loop

// For of

const myArr = ["rm","jin","jhope","suga","jimin","v","jk"]

for (const value of myArr) {
  console.log(value);
}

const greetings = "Hello World!"

for (const greet of greetings) {
  if (greet === " "){
    continue
  }
  console.log(`Each char is : ${greet}`);
}


// Maps : orderly aur uniquely data store karti hai (sets ki trah)

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")

console.log(map);
/*
Map(3) {
  'IN' => 'India',
  'USA' => 'United States of America',
  'Fr' => 'France'
}
*/

// for (const key of map) {
//   console.log(key);
// }

/*
[ 'IN', 'India' ]
[ 'USA', 'United States of America' ]
[ 'Fr', 'France' ]
*/

for (const [key,value] of map) {
    console.log(`${key} : ${value}`);
}


const myObj = {
  'game1' : 'NFS',
  'game2' : 'RDR3'
}

for (const [key,value] of myObj) {
  console.log(`${key} : ${value}`);
}

// myObj is not iterable