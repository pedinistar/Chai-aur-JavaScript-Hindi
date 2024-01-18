const accountId = 144553
let accountEmail = "sneha@google.com";
var accountPassword = "12345";
accountCity = "Jaipur"  // this is possible but is not recommended 

// Let's change all of the variables
// accountId = 2;     // TypeError: Assignment to constant variable.
accountEmail = "hc@hc.com";
accountPassword = "212121";
accountCity = "Delhi";

console.table([accountId,accountEmail,accountPassword,accountCity])


/* 
let helps us from the scope problem
prefer not to use var because of issue 
in block scope and functional scope
*/

let accountState;     // undefined
// accountState is only declared

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])