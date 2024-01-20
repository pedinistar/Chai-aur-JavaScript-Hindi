// OBJECT DESTRUCTURING⭐

const course = {
  courseName: "js in hindi",
  price: "999",
  courseInstructor: "hitesh sir"
}

// course.courseInstructor
const  {courseInstructor} = course
console.log(courseInstructor);    // hitesh sir
// or
const  {courseInstructor: instructor} = course
console.log(instructor);          // hitesh sir



// API
