const user = {
    userName: "Milan",
    loginCount: 9,
    signedIn: true,

    getUserDetails : function(){
        console.log("Got user details from database");
        console.log(`userName:${this.userName}`);
        console.log(this);
        
        
    }
}
// console.log(user.userName);
// console.log(user.getUserDetails());
        // console.log(this);

//************why use "new"********** */
function User (userName, loginCount, isLoggedIn){
    this.userName = userName;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;
    return this
}
const userOne = new User(" Madhab", 23, true)
const userTwo = new User(" Maity", 10, false)
console.log(userOne);
console.log(userTwo);





