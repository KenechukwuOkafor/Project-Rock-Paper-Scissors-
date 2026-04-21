

// ============================
// GAME SETUP
// ============================

// Always keep choices consistent and lowercase.
// Avoid leading spaces. Avoid mixed casing.
let first = "rock";
let second = "paper";
let third = "scissors";

let question = "Enter either rock, paper or scissors";

let humanScore = 0;
let computerScore = 0;
let humanChoice = "";

const rock = document.getElementById("rock")
const paper = document.getElementById("paper")
const scissors = document.getElementById("scissors")
const innerDisplay = document.getElementById("display")

// ============================
// GET COMPUTER CHOICE
// ============================

function getComputerChoice() {

    // Generate ONE random number per call.
    // This ensures randomness each round.
    let randomNumber = Math.random();

    // Divide the range (0 → 1) into 3 equal parts.
    if (randomNumber < 0.33) {
        return first;
    }
    else if (randomNumber < 0.66) {
        return second;
    }
    else {
        return third;
    }
}

function showMessage(message) {
    innerDisplay.textContent = message;
}



rock.addEventListener("click" , function (){
humanChoice = "rock";
playGame()
});
paper.addEventListener("click" , function (){
humanChoice = "paper";
playGame()
});

scissors.addEventListener("click" , function (){
humanChoice = "scissors";
playGame()
});

// ============================
// PLAY ONE ROUND
// ============================

function playRound(humanChoice, computerChoice) {

    // Tie condition
    if (humanChoice === computerChoice) {
        showMessage("This round is a tie.");
        return;
    }

    // Human wins scenarios
    if (
        (humanChoice === first && computerChoice === third) ||
        (humanChoice === second && computerChoice === first) ||
        (humanChoice === third && computerChoice === second)
    ) {
        humanScore++;
        showMessage("You win this round!");
    }

    // Otherwise computer wins
    else {
        computerScore++;
        showMessage("You lose this round.");
    }

    // Show updated scores after each round
    showMessage("You lose this round. Score: " + humanScore + " - " + computerScore);
}



// ============================
// PLAY FULL GAME (5 ROUNDS)
// ============================

function playGame() {

    let computerChoice = getComputerChoice();

    playRound(humanChoice, computerChoice);

    if (humanScore === 5) {
        showMessage("===== FINAL RESULT =====");
        showMessage("You won the game!");
    }

    else if (computerScore === 5) {
        showMessage("===== FINAL RESULT =====");
        showMessage("Computer won the game!");
    }
}


// ============================
// START THE GAME
// ============================

// playGame();



