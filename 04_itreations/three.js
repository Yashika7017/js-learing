// ///////////////////////////////////  FOR_OF  //////////////////////////////////
// const arr = ["a","b","c", "d", "e"]

// for (const i of arr) {
//     console.log(i);
    
// }


// ///////////////////////////       MAP     ///////////////////////////////

// const map = new Map()
// map.set( "Name", "Yashika")
// map.set ("Email", "yashika@google.com")
// map.set  ("Id", "10386")
// map.set ("Role", "Software Engineer")
// // console.log(map);

// for (const [ ,value] of map){
//     console.log([,value]);
    
// }

// const my_obj = {
//     name : "Shiva",
//     email : "shiva@google.com",
//     id : 10389,
//     role : "all_rounder"

// }

// for (const i of my_obj){
//     // console.log(i);
    
// } // object is not defined in forof loop


// const myObj = {
//     js : "javaScript",
//     Cpp : "c++",
//     rb : "ruby",

// }
// for (const key in myObj) {
//     console.log(myObj[key]);
    
// }

// for (const key in myObj) {
//     console.log(`${key} shortcut of ${myObj[key]}`);
    
// }

const programming = ["js","ruby","c++", "c","java","python"]
for (const key in programming){
    console.log(key);
    
}