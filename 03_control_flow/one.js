///////////////////////////  IF and ELSE CONDITION  ///////////////////////////

const tempreture = 40

if (tempreture < 50 ){
    console.log(tempreture);
}

if (2 == "2"){
    console.log("yes 2 is eqals to 2");
    
}

if (2 === "2"){
    console.log("yes 2 is eqals to 2");
} else {
    console.log("not equal because both have different data type one is NUMBER and one is STRING");
    
}


////////////////////////////////////  NESTED IF ////////////////////////////////////

const salary = 45000;
if (salary < 20000){
    console.log("your salary is more then 15000");

}else if (salary < 30000){
    console.log("your salary is more then 25000");

}else if(salary < 40000){
    console.log("your salary is more then 35000");

}else{
    console.log("congrtulations your salary is more 40000");
    
}


const userLoggedIn = true
const debitCard = true 
const loggedInEmail = true
const loggedInGoogle = true

if (userLoggedIn && debitCard){
    console.log("Allow to buy books");
    
} if (loggedInEmail || loggedInGoogle){
    console.log("Allow to use application");
    
    
}



// ################################## SWITCH CASE  #######################################


const month = 3

switch (month) {
    case 1:
        console.log("this is a january");
        break;
    case 2:
        console.log("this is a february");
        break;
    case 3:
        console.log("this is a march");
        break;
    case 4:
        console.log("this is a april");
        break;
    case 5:
        console.log("this is a may");
        break;
    case 6:
        console.log("this is a june");
        break;
    case 7:
        console.log("this is a july");
        break;
    case 8:
        console.log("this is a august");
        break;
    case 9:
        console.log("this is a september");
        break;

    default:
        break;
}

