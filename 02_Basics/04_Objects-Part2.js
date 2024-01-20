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

// if some key is not there then it will return an error to avoid it we could use ?
console.log(regularUser?.fullName?.userfullname?.firstname);  //sneha




const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}
const obj3 = {5: "e", 6: "f"}


// const obj3 = {obj1,obj2}
// console.log(obj3);   // { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'c', '4': 'd' } }

const obj4 = Object.assign({},obj1,obj2,obj3)  // { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }
console.log(obj4);  // { '1': 'a', '2': 'b', '3': 'c', '4': 'd', '5': 'e', '6': 'f' }

// ⭐⭐⭐⭐
// MORE EFFICIENT AND RECOMMENDED WAY
const obj5 = {...obj1,...obj2}
console.log(obj5);



// ⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐
const users = [
  {
    id:1,
    email: "h@gmail.com"
  },
  {
    id:1,
    email:"h@gmail.com"
  },
  {
    id:1,
    email:"h@gmail.com"
  }
]

console.log(users[1].email);
console.log(tinderUser);

console.log(Object.keys(tinderUser));    // [ 'id', 'name', 'isLoggedIn' ]
console.log(Object.values(tinderUser));    // [ '123abh', 'sam', false ]
console.log(Object.entries(tinderUser));    // [ [ 'id', '123abh' ], [ 'name', 'sam' ], [ 'isLoggedIn', false ] ]

console.log(tinderUser.hasOwnProperty("name"));   // true
console.log(tinderUser.hasOwnProperty("husbandName"));   // false