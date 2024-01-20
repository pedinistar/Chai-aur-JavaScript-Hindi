// DATE

let myDate = new Date();
// console.log(myDate);    // 2024-01-20T06:58:13.020Z
// console.log(myDate.toString());    // Sat Jan 20 2024 06:58:58 GMT+0000 (Coordinated Universal Time)
// console.log(myDate.toDateString());    // Sat Jan 20 2024
// console.log(myDate.toISOString());    // 2024-01-20T07:00:14.973Z
// console.log(myDate.toLocaleString());  // 1/20/2024, 7:01:14 AM

// ⭐⭐⭐⭐⭐⭐⭐⭐⭐
// console.log(typeof myDate); // object

                         //  month 0 se start hote hain tbhi 0 means jan aya hai
let myCreatedDate = new Date(2023, 0 ,23);
// console.log(myCreatedDate.toDateString());      // Mon Jan 23 2023
let myCreatedDate2 = new Date("2023-01-23");         // no
// console.log(myCreatedDate2.toDateString());     // Thu Jan 01 1970
let myCreatedDate3 = new Date("01-14-2023");         // yes in india
// console.log(myCreatedDate3.toDateString());        // Wed Dec 31 1969


let myCreatedDate4 = new Date("01-14-2023");        
let myTimeStamp = Date.now()
// console.log(myTimeStamp);   // 1705735694056
// console.log(myCreatedDate4.getTime());  //1673654400000



// 🌸⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐
// console.log(Date.now());                   // 1705735807482
// console.log(Math.floor(Date.now()/1000));  // 1705735807
// 🌸⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐

let newDate = new Date()
console.log(newDate);  // 2024-01-20T07:32:06.651Z
console.log(newDate.getMonth());  // 0
console.log(newDate.getMonth()+1);  // 1


// CUSTOMISE
newDate.toLocaleString('default', {
  weekday: "long"
})
