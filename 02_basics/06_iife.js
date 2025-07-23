///////////////////////  IIFE (Immediately Invoked Function Expression)   /////////////////////////

// global scop ke palution se bachne ke liye, means kahi baar global scope 
// me jo variables hai or jo bhi declaration hai uske pollution se bachane ke liye hum IIFE ka use karte hai
// IIFE :--> ()()

(function example (){
    // Named IIFE
    console.log(`DB CONNECTION`);
    
})();

(  () => {
    // simple IIFE
    console.log(`dataBase connection two`);
    
})();

(  (name) => {
    // simple IIFE
    console.log(`dataBase connection two ${name}`);
    
})(" My_Shiva")

