//  singleton
//  object.create

// objest literals

const mysym = Symbol("key1")
const JsUser = {
    name: "Madhabendra",
    "Full Name" : "Madhabendra Maity",
    [mysym]: "mykey1",
    age: 20,
    location: "Medinipur",
    email: "madhab@gmail.com",
    isLoggedIn: false,
    lastLoginDays :["Monday", "Friday"]
}
// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["Full Name"]);
// console.log(JsUser[mysym])

JsUser.email= "Maity@gmail.com"
// Object.freeze(JsUser)
JsUser.email= "Maity@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hi how are you")
}

JsUser.greetingTwo = function(){
    console.log(`Hi how are you,${this.name}`);
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());








