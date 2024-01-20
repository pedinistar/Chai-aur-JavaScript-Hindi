const tinderUser = new Object()  
const tinderUserTwo = {} 

// two ways of making an empty objet
console.log(tinderUser);// empty object
console.log(tinderUserTwo);// empty object

tinderUser.id = "123abh"
tinderUser.name = "sam"
tinderUser.isLoggedIn = false

console.log(tinderUser);   // { id: '123abh', name: 'sam', isLoggedIn: false }



const regularUser = {
  email: "some@gmail.com",
  fullName: {
    userfullname: {
      firstname: "sneha",
      lastname: "pedini"
    }
  }
}

console.log(regularUser.fullName);   //{ userfullname: { firstname: 'sneha', lastname: 'pedini' } }
console.log(regularUser.fullName.userfullname);  //{ firstname: 'sneha', lastname: 'pedini' }
console.log(regularUser.fullName.userfullname.firstname);  //sneha


const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}
const obj3 = {5: "e", 6: "f"}


// const obj3 = {obj1,obj2}
// console.log(obj3);   // { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'c', '4': 'd' } }

const obj4 = Object.assign({},obj1,obj2,obj3)  // { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }
console.log(obj4);  // { '1': 'a', '2': 'b', '3': 'c', '4': 'd', '5': 'e', '6': 'f' }