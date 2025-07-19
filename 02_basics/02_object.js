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
//console.log(myObject); // full object access
//console.log(myObject["name"]); // method 1, access the key.
//console.log(myObject.name); // method 2,  access the key.

// console.log(myObject[mySym]);

// myObject.email = "yashika@microsoft.com" // change my value in the object
// Object.freeze(myObject); // freeze my object
// myObject.email = "yashika@chatgpt.com" // I have frozen the object above so now I can't change the value
// console.log(myObject);

myObject.greeting = function(){
    console.log(`Hello JS User I'm ${this.name} and I'm ${this.age} years old`);
    
}

console.log(typeof myObject.greeting())