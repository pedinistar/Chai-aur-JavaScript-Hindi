const bts = ["rm","jin","jhope","suga","jimin","v","jk"]

const boys = bts.map( (boy) => boy+10)
// const boys = bts.map( (boy) => {boy+10})   // scope open kiya hai to return explecitly likhna padega
// aise
// const boys = bts.map( (boy) => { return boy+10})


console.log(boys);

/*
[
  'rm10',    'jin10',
  'jhope10', 'suga10',
  'jimin10', 'v10',
  'jk10'
]
*/

// yhi foreach se karke dekho


// chaining 

const newBoys = bts
                .map((boy)=>boy+10)
                .map((boy2)=>boy2+20)

console.log(newBoys);

/*
[
  'rm1020',
  'jin1020',
  'jhope1020',
  'suga1020',
  'jimin1020',
  'v1020',
  'jk1020'
]
*/