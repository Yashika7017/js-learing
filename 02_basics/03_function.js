///////////////////////// CREATE A FUNCTION   /////////////////////////////////////////


 function MyName() {
    console.log("Y");
    console.log("A");
    console.log("S");
    console.log("H");
    console.log("I");
    console.log("K");
    console.log("A");
}
MyName() // print this function

//////// ADDITION OF TWO NUMBERS BY FUNCTION :-->

function add_two_number (number1, number2){
    console.log(number1 + number2);
    
}
add_two_number(2, 2);

/////// USE RETURN :-->

function use_return (num1, num2, num3){
    let result = num1 + num2 + num3;
    return result

}
const result = use_return(2, 2, 2);
console.log("Result", result);
  
///// USE IF STATEMENT CHECK THE CONDITION :-->

function logIn_user_messagr (username){
    if(!username){
        console.log("please enter your name");
        return
    }
    return `${username} is logged in`;
}

console.log(logIn_user_messagr("Yashika Varshney"));
console.log(logIn_user_messagr());

//////  REST METHOD :--> 

function add_card_price (...num1){
    return num1

}
console.log(add_card_price(200, 300, 299, 489)); // [200, 300, 299, 489]


//////  USE OBJECT IN THE FUNCTION :-->

const user = {
    username : "Yashika Varshney",
    Id : 10386
}

function handel_object(anyobject){
    console.log(`Username is ${anyobject.username} and ID is ${anyobject.Id} `);
    
}
handel_object(user)
///// pass the object in function :-->

handel_object({
    username : "Shiva",
    Id : 10387
})

//// USE ARRAY IN THE FUNCTION :-->

const my_new_array =[ 200, 900, 300 , 200]
 
function handel_array(anyarray){
    return anyarray [1]
    
}
console.log(handel_array(my_new_array));
//// pass the array in function :-->
console.log(handel_array([200, 900, 4999, 9999, 394]));

