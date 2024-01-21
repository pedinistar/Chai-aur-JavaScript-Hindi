// IMMEDIATLY INVOKED FUNCTION EXPRESSIONS (IIFE)


// NAMED IIFE
(function chai () {
  console.log("DB CONNECTED");
}) ();

// chai()

// 💜💜💜💜💜💜💜💜💜💜💜💜💜💜💜💜💜💜💜💜💜💜💜💜💜💜
// sirf ye nhi bolna hai ki jo function immediatly execute hojaye...but u also have to add that ⭐⭐ global scope ke pollution se problem hoti hai kai bar to us global scope ke jo variables hai uske pollution ko hatane ke liye IIFE ka use kiya 


// SIMPL IIFE
( (name) => {
  console.log(`db connected ${name}`);
} ) ('sneha')
//  this will show an error
// so now add a semi colon after above function
// now it will run ☺️