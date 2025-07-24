// // +++++++++++++++++++   TRUTHY and FALSY VALUES   ++++++++++++++++++++++++++++++++++

// // TRUTHY VALUES :-->
// // "0", "false", function(){}, [], {}, " "

// // FALSY VALUES :-->
// // BigInt 0n, 0, -0, false, "", null, undefined, NaN

const userEmail = "yashika@google.com " // truthy

if (userEmail){
    console.log("Got user Email");

}else {
    console.log("don't have any Email");
    
}

const user_Email = "" // falsy

if (user_Email){
    console.log("Got user Email");

}else {
    console.log("don't have any Email");
    
}

// Nullish Coalescing Operator (??): null undefined :-->

let val1;
val1 = 1 ?? 3 ?? 9;
val1 = null ?? 3;
console.log(val1);




