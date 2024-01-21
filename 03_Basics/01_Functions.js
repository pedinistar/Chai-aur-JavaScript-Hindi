function sayMyName (parameters) {
  console.log("sneha");
}

sayMyName // this is just the reference
sayMyName(arguments) // this is calling the function


function addTwoNums1(num1,num2){
  console.log(num1+num2);
}

addTwoNums1()      // NaN
addTwoNums1(3,5)   // 8
addTwoNums1("4",5) // 45
addTwoNums1("a",5) // a5

const result = addTwoNums1(3,5)
// console.log("result"+result);  // undefined


function addTwoNums2(num1,num2){
  let result = num1+num2
  console.log("before return");
  return result
  console.log("after return");
}

const result2 = addTwoNums2(3,5)
// console.log("result"+result2);

// function loginUserMessage(username){
//   return `${username} just logged in`;
// }

console.log(loginUserMessage("sneha"));
console.log(loginUserMessage());  // undefined

function loginUserMessage(username){
  if (username===undefined){
    console.log("Please enter a username");
    return
  }
  return `${username} just logged in`;
}

// (username===undefined)  === (!username)


// default parameters
function loginUserMessage(username='sam'){
  if (username===undefined){
    console.log("Please enter a username");
    return
  }
  return `${username} just logged in`;
}

console.log(loginUserMessage("sneha"));
console.log(loginUserMessage()); // sam just logged in





// when you dont kw how many params user would give
// 💜💜💜💜💜💜💜💜rest operator

// function calcCartPrice(num1){
//   return num1
// }

// console.log(calcCartPrice(200,400,600));   // 2

// function calcCartPrice(...num1){
//   return num1
// }
// console.log(calcCartPrice(200,400,600));   // [200,400,600]



function calcCartPrice(val1,val2,...num1){
  return num1
}
console.log(calcCartPrice(200,400,600,30,20));   // [ 600, 30, 20 ] = num1
                                                // val1 = 200 , val2 = 400


const user = {
  username: "sneha",
  price: 400
}

function handleObject(anyObject){
  console.log(`username is ${anyObject.username} and name is ${anyObject.price}`);
}

handleObject(user)



const myArray = [300,70,46,88]
function returnSecondValue(anyarray){
  return anyarray[1]
}
console.log(returnSecondValue(myArray))