// const user = {
//     username : "Yashika Varshney",
//     price : 9999,

//     welcomeMessage : function () {
//         console.log(`${this.username}, Welcome to website`);
//         console.log(this); // provide the current constant
        
//     }
// }
// user.welcomeMessage()
// user.username = "Shiva"
// user.welcomeMessage()


// function check (){
//     let username = "Yashika"
//     console.log(this.username);
    
// }
// check()

// const check = function(){
//     //let username = "Yashika"
//     console.log(this);
    
// }
// check()

//////////////////////////////   ARROW FUNCTION   ////////////////////////////////////////////
const chai = () =>  {
    let username = "Yashika"
    console.log(this.username);
    
}
chai()

// const addTwo =(num1, num2) => {
//     return num1 + num2;
// }
// console.log(addTwo(2,6));

///////////////////////////////   IMPLICIT RETURN   /////////////////////////////

const mulTwo =(num1, num2) =>  num1 * num2;
console.log(mulTwo(2,6));