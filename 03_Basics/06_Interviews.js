// 25 th video very imp⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐


// js interview
// 1. Execution Context
// 2. Call Stack


/* 
// JavaScript Execution Context
{}  -> Global Execution Context
                 ||
                 \/
                this
- 🌸Global EC
- 🌸Functional EC
- 🌸Eval EC

{}  -> Memory Creation Phase (1st Phase) / Creation Phase
    -> Execution Phase (2nd Phase)

*/

let val1 = 10;
let val2 = 5;

function addNum(num1,num2){
  let total = num1 + num2
  return total
}

let result1 = addNum(val1,val2)
let result2 = addNum(10,2)

/*
step 1 -> global execution / global environment
          jo bhi code run karna ho sabse pehle wo global execution serun hota hai usko sbse pehle alocate kiya jata hai this ke andar

step 2 -> memory creation phase/ creation phase/ memory phase
          yahan pr sare variables ko ekhatta kiya jata hai aur un sabko bs rakha jata hai aapne pas MediaDeviceInfo
          sare variables ke nam liye jate hain aur unke andr undefined rakha jata hai
          val1 -> undefined
          val2 -> undefined
          addNum -> defination (function declare hua hai)
          result1 -> undefined
          result2 -> undefined

------------this is first cycle-----------------------------------------------


------------this is second cycle----------------------------------------------
step 3 -> Execution Phase 
          val1 -> 10
          val2 -> 5
          (on 29 line of code) -> [new variable environment + execution thread ]
                     [  
                      1. memory phase
                                      val1 -> undefined
                                      val2 -> undefined
                                      total -> undefined
                      2. execution context
                                      num1 -> 10
                                      num2 -> 5
                                      total -> 15
                     ]
          result1 -> 15
          (on 30 line of code) -> [new variable environment +  exceution thread]
                     [
                      1. memory phase
                                      
                      2. execution context
                     ]
          result2 -> 12 
 */