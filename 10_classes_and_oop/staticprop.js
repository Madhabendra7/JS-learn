
class User {
    constructor(username){
        this.username=username
    }
    
    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
   static createId(){
        return`123`
    }
}
const milan = new User('milan')
// console.log(milan.createId());

class Teacher extends User{
    constructor(username, email){
        super(username)
        this.email=email;
    }
}
const iphone = new Teacher("iphn", "dshcuf@.com")
// iphone.logMe()
console.log(iphone.createId())
