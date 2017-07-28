// Define Application wide Variables
const game = document.getElementById("app");
const options = ["Rock", "Paper", "Scissors"];

let userScore = 0;
let computerScore = 0;

// Setup Initial Game State
function initializeGame() {
    const header = document.createElement("h1");
    header.innerHTML ="Rock, Paper, Scissors";
    game.appendChild(header);

    options.forEach(option => {
        const optionButton = document.createElement("button");
        optionButton.classList.add("option-button");
        optionButton.innerHTML = option;
        game.appendChild(optionButton);
    });

    const scoreBoard = document.createElement("div");
    game.appendChild(scoreBoard);
    scoreBoard.innerHTML = `
        <p>User Score: ${userScore}</p>
        <p>Computer Score: ${computerScore}</p>`;
}

// Compututer Turn
function computerTurn() {
    return options[Math.floor(Math.random() * options.length)];    
}

// User Turn
function userTurn() {
    const optionButtons = document.querySelectorAll(".option-button");
    for (let i = 0; i < optionButtons.length; i++) {
        (function(index) {
            optionButtons[index].addEventListener("click", () => {
                console.log(optionButtons[index].innerHTML);
            });
        })(i);
    }
}

function beginTurn() {
    console.log(computerTurn());
    console.log(userTurn());
}
// Executing Functions
initializeGame();
beginTurn();

