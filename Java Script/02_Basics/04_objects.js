
// const tinderUser = new Object()
const tinderUser= {}

tinderUser.id = "123abc"
tinderUser.name = "milan"
tinderUser.IsLoggedIn = false
// console.log(tinderUser);

const regularUser ={
    email: "mndyg@jf",
    fullname:{
        userfullname:{
        firstname: "Madhabendra",
        lastname: "Maity"
        }
    }
}
// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

// const obj3 = {obj1 , obj2}
// const obj3 = Object.assign({},obj1, obj2)

const obj3 = {...obj1, ...obj2}
// console.log(obj3);

const users = [
    {
        id: 1,
        email: "madhav@gmail.com"
    },
    {
        id: 1,
        email: "madhav@gmail.com"
    },
]

users[1].email
// console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));

const course = {
    coursename: "js in hindi",
    price:"999",
    courseInstructor: "hitesh sir"
}
// course.courseInstructor

const {courseInstructor:Instructor} = course
// console.log(courseInstructor);
console.log(Instructor);

// const navbar = ({company}) => {

// }
// navbar(company = "hitesh sir")

// {
//     name: "js in hindi",
//     price:"999",                              // JSON**
//     courseInstructor: "hitesh sir"
// } 



