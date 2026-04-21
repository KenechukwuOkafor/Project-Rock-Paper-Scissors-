

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


// ============================
// GET HUMAN CHOICE
// ============================

function getHumanChoice() {

    // Prompt user for input
    let game = prompt(question);

    // Normalize input:
    // - remove accidental spaces
    // - convert to lowercase
    // This prevents comparison errors.
    return game.trim().toLowerCase();
}


// ============================
// PLAY ONE ROUND
// ============================

function playRound(humanChoice, computerChoice) {

    // Tie condition
    if (humanChoice === computerChoice) {
        console.log("This round is a tie.");
        return;
    }

    // Human wins scenarios
    if (
        (humanChoice === first && computerChoice === third) ||
        (humanChoice === second && computerChoice === first) ||
        (humanChoice === third && computerChoice === second)
    ) {
        humanScore++;
        console.log("You win this round!");
    }

    // Otherwise computer wins
    else {
        computerScore++;
        console.log("You lose this round.");
    }

    // Show updated scores after each round
    console.log("Human:", humanScore, "Computer:", computerScore);
}


// ============================
// PLAY FULL GAME (5 ROUNDS)
// ============================

function playGame() {

    // Run 5 rounds
    for (let i = 0; i < 5; i++) {

        // For EACH round:
        // 1. Get human input
        // 2. Get computer choice
        // 3. Play round

        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();

        playRound(humanChoice, computerChoice);
    }

    // Final result after 5 rounds
    console.log("===== FINAL RESULT =====");

    if (humanScore > computerScore) {
        console.log("You won the game!");
    }
    else if (computerScore > humanScore) {
        console.log("Computer won the game!");
    }
    else {
        console.log("The game ended in a tie.");
    }
}


// ============================
// START THE GAME
// ============================

playGame();

