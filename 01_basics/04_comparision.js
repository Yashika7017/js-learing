// Comparision and Equality check they both are different .
// (===) this operator check first datatype and then compare value but (==) this is only compare the values without check datatype

console.log(null < 2);
console.log(null == 2);
console.log(null <= 2);

console.log(undefined < 2);
console.log(undefined == 2);
console.log(undefined <= 2);

// these type of comparisions are avoid because they are create the confusion and time weasting

let num1 = "1"
let num2 = 3
let sum = parseFloat(num1 + num2);
console.log(sum);

console.log(parseInt("1"-2));
console.log(parseInt(1 +"2" * 2));

console.log(parseInt(1 + 2 + "2"));

// ------}{-------}{-------}{-----}   ARRAY, OBJECT, FUNCTION  {-------}{-------}{------}{--------}

let arr = ["Apple", "Kiwi", "Orange", "Papaya", "Guava", "Banana"];
console.log(arr);
   
let obj = {
    Heros: "Ramiro",
    Heroens : "Mexico Kimono",
}
console.log(obj);

const myFun = function(){
    console.log("hello shiva");
    
}

// ++++++++++++++++++++++++++++++++++++{     MEMORY    } ++++++++++++++++++++++++++++++++++++++
   

// Here we have two type of memory 1. stack (primitive ) , 2. Heap (nonPrimitive)
// 1--> Stack(Primitive dataTpye) :- It doesn't change the orignal value, only change the value copy

let myName = "Yashika Varshney";
let myCompany = myName;
myCompany = "google"

console.log(myName);
console.log(myCompany);

// 2--> Heap(NonPrimitive dataType) :- This is provide the refference 

let userOne = {
    email: "yashika@google.com",
    upi: "1234@yas"
}
console.log(userOne);

let userTwo = userOne
userTwo.email = "shiva@google.com",
userTwo.upi = "123@shiv"


console.log(userOne); // here userOne, useTwo both uotput are same 

console.log(userTwo);


