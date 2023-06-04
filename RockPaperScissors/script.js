function getComputerChoice(){
    let num = Math.floor(Math.random() * 3);
    switch(num){
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }
}

function playRound(playerSelection, computerSelection){
    if(playerSelection == computerSelection){
        console.log("no winer");
    }else if(playerSelection == "rock" && computerSelection == "paper"){
        return "computer";
    }else if(playerSelection == "rock" && computerSelection == "scissors"){
        return "player";
    }else if(playerSelection == "paper" && computerSelection == "scissors"){
        return "computer";
    }else if(playerSelection == "paper" && computerSelection == "rock"){
        return "player";
    }else if(playerSelection == "scissors" && computerSelection == "paper"){
        return "player";
    }else if(playerSelection == "scissors" && computerSelection == "rock"){
        return "computer";
    }
}


function game(){
    let computerScore = 0;
    let playerScore = 0;
    let index = 0;

    while(index < 5){
        const playerSelection = prompt("Please type rock, paper or scissors:").toLocaleLowerCase(); 
        const computerSelection = getComputerChoice();

        console.log("\nRound N: " + index + "\n");
        
        let winner = playRound(playerSelection, computerSelection);
        if(winner == "computer"){
            computerScore++;
        } 
        if(winner == "player"){
            playerScore++;
        }
        
        console.log("Player:" + playerSelection + "\nComputer: " + computerSelection)
        console.log("Winner of this round is: " + winner);
        
        index++;
    }
    console.log("Player score: " + playerScore + ", computer score: " + computerScore);
    if(playerScore > computerScore){
        console.log("Congratulations! You Won! :)");
    }else if(playerScore < computerScore){
        console.log("You lost :(");
    }else{
        console.log("No winner, it's a tie! :D");
    }
}

game();