/////////////////////////////////  OBJECT LITERALS  /////////////////////////////////////////////



// creation of Symbol :-->
const mySym = Symbol("key1")

// object creation :-->
const myObject = {
    name : "Yashika Varshney",
    age : 20,
    location : "Hathras",
     [mySym] : "key1",
    email : "yashika@google.com"
}
console.log(myObject); // full object access
console.log(myObject["name"]); // method 1, access the key.
console.log(myObject.name); // method 2,  access the key.

console.log(myObject[mySym]);

myObject.email = "yashika@microsoft.com" // change my value in the object
Object.freeze(myObject); // freeze my object
myObject.email = "yashika@chatgpt.com" // I have frozen the object above so now I can't change the value
console.log(myObject);

myObject.greeting = function(){
    console.log(`Hello JS User I'm ${this.name} and I'm ${this.age} years old`);
    
}

console.log(typeof myObject.greeting())

const collage_key_user = {}

collage_key_user.id = "10386"
collage_key_user.name = "Yashika Varshney"
collage_key_user.isLoggedIn = false 

collage_key_user.id = "10387"
collage_key_user.name = "Ram"
collage_key_user.isLoggedIn = true 

console.log(typeof collage_key_user);
  
const regular_user = {
    email : "yashika@google.com",
    userId : "1111",
    fullName : {
        first_name : "Radha",
        last_name : "krishna"
    }
}
console.log(typeof regular_user);

const add = Object.assign({},collage_key_user,regular_user);
console.log(add);


const addition = {...collage_key_user, ...regular_user}
// console.log(addition);


const users = [
    { 
        id : 1,
        email : "y@google.com" 
    },
    { 
        id : 2,
        email : "v@google.com" 
    },
    { 
        id : 3,
        email : "b@google.com "
    }
] // objects inside the array

users [1].email
console.log(collage_key_user);
console.log(Object.keys(collage_key_user)); // access all key
console.log(Object.values(collage_key_user)); // access all values
console.log(Object.entries(collage_key_user)); // access all entries

const course = {
    courseName : "B.tech",
    branch : "Computer Science Engineering",
    price : 400000

}
// course.branch

const {branch} = course
console.log(branch);
