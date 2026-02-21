let first=" Rock";
let second = "paper";
let third = "scissors";
let question = "Enter either rock , paper or scissors";
let humanScore = 0;
let computerScore =0;



const humanChoice = getHumanChoice()
const computerChoice = getComputerChoice()


// Get computer choice
function getComputerChoice(){
if (Math.random() <= 0.3){
    console.log(first);
}

else if (Math.random() <=0.6 && Math.random() > 0.3){
    console.log(second);
}



else{
    console.log(third);
}
}



// get human choice

function getHumanChoice(){
   let game= prompt(question);
    
}





function playRound(humanChoice,computerChoice){
    if(humanChoice === computerChoice){
        console.log("This is a tie")
    }

   else if (humanChoice === third && computerChoice === second){
    console.log("You win this round: scissors beats rock")}

    else if(humanChoice===second && computerChoice=== third){
       console.log("You loose this round: Scissors beats rock")
    }
    else if(humanChoice===first && computerChoice===second){
         console.log ("You loose this round: Paper beats rock")
    }
     else if(humanChoice===second && computerChoice===first){
         console.log ("You win this round: Paper beats rock")
    }
    else if (humanChoice=== first && computerChoice===third){
        console.log("You win this round: Rock beats scissors")
    }
    else if (humanChoice=== third && computerChoice===first){
        console.log("You loose this round: Rock beats scissors")
    }
}


function playGame(){
    playRound()
     playRound()
      playRound()
       playRound()
        playRound()
}
    














































