// id == #
// class == .

let randomNum = parseInt(Math.random()*100 + 1);



const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot= document.querySelector('.Guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;

let playgame = true;

if(playgame){
    submit.addEventListener('click', function(e){
        e.preventDefault();
        const guess = parseInt(userInput.value);
        console.log(guess);
        validateGuess(guess);
        
    });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert('PLease enter a valid number');
  } else if (guess < 1) {
    alert('PLease enter a number more than 1');
  } else if (guess > 100) {
    alert('PLease enter a  number less than 100');
  } else {
    prevGuess.push(guess);
    if (numGuess === 11) {
      displayGuess(guess);
      displayMessage(`Game Over. Random number was ${randomNum}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}
function checkGuess(guess){
    if(guess === randomNum){
        displayMessage("you guessed it right");
        endGame();
    }
    else if(guess < randomNum){
        displayMessage("Number is TOO Low");
    }
    else if(guess > randomNum){
        displayMessage("Number is TOO High");
    }
}



function displayGuess(guess){
    userInput.value = ' '
    guessSlot.innerHTML += `${guess},  `;
    numGuess++;
    remaining.innerHTML = `${11 - numGuess}`
}

function displayMessage(message){
    lowOrHi.innerHTML = `<h2>${message}</h2>`
}
function endGame(){
    userInput.value = ''
    userInput.setAttribute('disable', '')
    p.classList.add('button')
    p.innerHTML =` <h2 id="newGame">Start new Game</h2>`;
    startOver.appendChild(p)
    playgame = false;
    newGame();
}
function newGame(){
    const newGameButton = document.querySelector('#newGame');
    newGameButton.addEventListener('click', function(){
        randomNum = parseInt(Math.random()*100 + 1);
        prevGuess = [];
        numGuess = 1;
        guessSlot.innerHTML = '';
        remaining.innerHTML = `${11 - numGuess}`
        userInput.removeAttribute();
        startOver.removeChild(p)

        playgame = true;
    })
}