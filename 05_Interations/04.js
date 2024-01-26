const myObj = {
  js: 'javascript',
  cpp: 'C++',
  rb: 'Ruby'
}

for (const key in myObj) {
  console.log(key);
  console.log(myObj[key]);
  // he we can get value using myObj[key]
}



const nums = [1,"hi","buya",4]

for (const key in nums) {
  console.log(key);  // 0,1,2,3
  console.log(nums[key]);
}

// array ki keys index numbers hoti hain







const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")


for (const key in map) {
  console.log(key);
}
// map is not iterable 