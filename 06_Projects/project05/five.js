// Random color generator

const randomColor = function (){
    const hex = "0123456789ABCDEF"
    let color = "#"
    for(i = 0; i < 6; i++){
        color += hex[Math.floor(Math.random() * 16)]
    }
    return color
}
console.log(randomColor());

// console.log(Math.floor(Math.random() * 16));
 
let changeColorId;
const startColorChanging = function(){
    if (!changeColorId) {
        changeColorId = setInterval(chnageBgColor, 1000);
    }

    function chnageBgColor(){document.body.style.backgroundColor = randomColor()};
}
const stopColorChanging = function(){
    clearInterval(changeColorId);
    changeColorId = null;
}

document.querySelector("#start").addEventListener('click', startColorChanging)

document.querySelector("#stop").addEventListener('click', stopColorChanging)























// document.querySelector('#start').addEventListener('click', function(e){
    
// const startId = setInterval(function(){
//     console.log("hii");
    
// },1000);

// document.querySelector('#stop').addEventListener('click', function (e) {
//     clearInterval(startId)
// })

// })

// // document.querySelector('#stop').addEventListener('click', function (e) {
// //     clearInterval(startId)
// // })





// clearInterval(startId)