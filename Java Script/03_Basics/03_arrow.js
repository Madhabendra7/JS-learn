
const user = {
    username: "milan",
    price:999,

    welcomeMessege: function(){
        console.log(`${this.username}, welcome to website`);
        // console.log(this);
    }
}
// user.welcomeMessege()
// user.username = "madhabendra"
// user.welcomeMessege()

// console.log(this);
// function chai(){
//     console.log(this.username);
// }
// chai()

const chai = () => {
    let username = "milan"
    console.log(this.username);
}
chai()

//  const addTwo = (num1, num2) => {
//     return num1 + num2
//  }
//  const addTwo = (num1, num2) =>  (num1 + num2)
 const addTwo = (num1, num2) =>  ({username: "milan"})

 console.log(addTwo(3,4))