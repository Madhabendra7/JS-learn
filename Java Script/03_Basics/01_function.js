
function sayMyName(){
    console.log("M");
    console.log("I");
    console.log("L");
    console.log("A");
    console.log("N");
}
// sayMyName()

// function addTwoNumbers(number1,number2){
//     console.log(number1+number2);
// }

function addTwoNumbers(number1,number2){
//    let result =number1 + number2
//    return result
      return number1+number2
}
const result = addTwoNumbers(3,5)
    // console.log("Result: ",result);


    function loginUserMessage(username){
        if(username === undefined){
            console.log("Please Enter a Username")
            return
        }
        return `${username} just logged in `
    }
//    console.log( loginUserMessage("Milan"))
//    console.log( loginUserMessage())

function calculateCartPrice(val1, val2, ...num1){
    return num1
}
// console.log(calculateCartPrice(200, 400 ,500 ,435))

const user = {
    username: "milan",
    price: 199
}
function handleObject(anyObject){
    console.log(`username is ${anyObject.username} and price is ${anyObject.price}`)
}
//   handleObject(user)
  handleObject({
    username: "sam",
    price: 7632
  })
  const myNewArray = [200, 400, 500, 100]
  function returnSecondValue(getArray){
    return getArray[1]
  }
  console.log(returnSecondValue(myNewArray));
  console.log(returnSecondValue([200, 400, 500, 100]));

