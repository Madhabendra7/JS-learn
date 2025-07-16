
let randomNumber = (parseInt(Math.random()* 100 + 1));
const submit = document.querySelector('#subt')
const userInput = document.querySelector('#guessField')
const guessSlot = document.querySelector('.guesses')
const remaining = document.querySelector('.lastResult')
const lowOrhi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p')

let prevGuess = []
let numGuess = 1
let playGame = true

if(playGame){
    submit.addEventListener('click', function(e){
        e.preventDefault()
        const guess = parseInt(userInput.value)
        console.log(guess);
        validateGuess(guess);
    })
}

function validateGuess(guess){
    if(isNaN(guess)){
        alert('PLease enter a valid number')
    }else if (guess < 1){
        alert('PLease enter a number more then 1')
    }else if (guess > 100){
        alert('PLease enter a number less than 100')
    }else {
        prevGuess.push(guess)
        if (numGuess === 11) {
            displayguess(guess)
            displayMessage(`Ohh Sorry ! Game Over. Random number was ${randomNumber} `)
            endGame()
        }else{
            displayguess(guess)
            checkGuess(guess)
        }
    }
}
function checkGuess(guess){
    if (guess === randomNumber) {
        displayMessage(`Congrats..!! You guessed it Right !!!`)
    } else if(guess < randomNumber){
        displayMessage(`Number is TOO low`)
    }else if(guess > randomNumber){
        displayMessage(`Number is TOO high`)
    }
}
function displayguess(guess){
    userInput.value = ''
    guessSlot.innerHTML += `${guess}, `
    numGuess++;
    remaining.innerHTML =  `${11 - numGuess}`
}
function displayMessage(message){
    lowOrhi.innerHTML = ` <h2>${message}</h2>`
}
function endGame(){
    userInput.value = ''
    userInput.setAttribute('disabled', '')
    p.classList.add('button')
    p.innerHTML = `<h2 id ="newGame">Start new Game</h2>`;
    startOver.appendChild(p)
    playGame = false
    newGame ();
}
function newGame(){
    const newgameButton = document.querySelector('#newGame')
    newgameButton.addEventListener('click', function(e){
    randomNumber = (parseInt(Math.random()* 100 + 1));
    prevGuess = []
    numGuess = 1
    guessSlot.innerHTML = ''
    remaining.innerHTML =  `${11 - numGuess}`
    userInput.removeAttribute('disabled')
    startOver.removeChild(p);

    playGame =  true
    })
}


