
// for of loop

// ["", "", ""]
//[{}, {}, {}]

const arr = [1, 2, 3, 4, 5]
for (const num of arr) {
    // console.log(num);
}
const greetings = " Hello world!"
for (const greet of greetings) {
    // console.log(`each char is ${greet}`);
    
}
// Maps

const map =  new Map()
map.set('IN', "India")
map.set('USA', "United State Of America")
map.set('Fr', "France")
map.set('IN', "India")
// console.log(map);
for (const [key, value] of map) {
    // console.log(key, ':-' , value);
}

const myObj = {
    'game1': 'NFS',
    'game2': 'spiderman'
}
// for (const [key, value] of myObj) {
//     console.log(key, ':-' , value);
// }


