var c = 500

if (true) {
  let a = 10;
  const b = 20
  var c = 30
}

// {} this is scope

// console.log(a);  // a not defined
// console.log(b);  // b not defined
console.log(c);     // 30     // this is problamatic ⚠️

// ⚠️thus avoid using var


let a = 300

if (true) {
  let a = 10
  console.log("inside scope "+a);
}

console.log(a+" outside scope");


function one(){
  const username = "sneha"

  function two(){
    const website = "youtube"
    console.log(username);
  }

  // console.log(website);  // this will show an error

  two()
}

one()

// closure means the inner functions scope inside itz parent function scope can access the variables declared in the parent scope but parent cannot access the variables created in child's function scope

if (true) {
  const username = "sneha"
  if( username === "sneha"){
    const website = "pinterest"
    console.log(username +" loves "+ website);
  }
  // console.log(website);   // error 
  // console.log(username +" loves "+ website);
}