
var c = 900
if (true){
    
    let a = 10
    const b = 20
    var c = 30
}

console.log(a); // error
console.log(b); // erroe
console.log(c); // 30

function one (){
    const username = "Yashika Varshney"

    function two (){
        const website = "YouTube"
        console.log(username);
        console.log(website);
    }
    
    two ()
    
}
one()

if(true){
    const username = "Radha-rani"
    if(username === "Radha-rani"){
        const website = "  Campus-key"
        console.log(username + website);
        console.log(website);
    }
    
    console.log(username);
}


console.log(addone(8));
 
function addone (num) {
    return num + 1 ; 
}



const addtwo = function (num){
    return num + 2 ;
} 
console.log(addtwo(1));
