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
        return("no winer");
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

let computerScore = 0;
let playerScore = 0;

function checkWinner(){
    if(computerScore == 5){
        const winner = document.querySelector("#winner");
        winner.textContent = "The winner is Computer";
    }else if(playerScore == 5){
        const winner = document.querySelector("#winner");
        winner.textContent = "The winner is Player";
    }
}

const rock = document.getElementById("rockButton");
const paper = document.getElementById("paperButton");
const scissors = document.getElementById("scissorsButton");

rock.addEventListener("click", () =>{
    playerSelection = "rock";
    const computerSelection = getComputerChoice();
    let winner = playRound(playerSelection, computerSelection);
    console.log("Player:" + playerSelection + "\nComputer: " + computerSelection + "\nwinner: " + winner);

    if(winner == "computer"){
        computerScore++;
    } 
    if(winner == "player"){
        playerScore++;
    }

    const score = document.querySelector("#score");
    score.textContent = "Computer:" + computerScore + "PLayer: " + playerScore;

    checkWinner();
})
    
paper.addEventListener("click", () =>{
    playerSelection = "paper";
    const computerSelection = getComputerChoice();
    let winner = playRound(playerSelection, computerSelection);
    console.log("Player:" + playerSelection + "\nComputer: " + computerSelection + "\nwinner: " + winner);

    if(winner == "computer"){
        computerScore++;
    } 
    if(winner == "player"){
        playerScore++;
    }

    const score = document.querySelector("#score");
    score.textContent = "Computer:" + computerScore + "PLayer: " + playerScore;

    checkWinner();
})
    
scissors.addEventListener("click", () =>{
    playerSelection = "scissors";
    const computerSelection = getComputerChoice();
    let winner = playRound(playerSelection, computerSelection);
    console.log("Player:" + playerSelection + "\nComputer: " + computerSelection + "\nwinner: " + winner);

    if(winner == "computer"){
        computerScore++;
    } 
    if(winner == "player"){
        playerScore++;
    }

    const score = document.querySelector("#score");
    score.textContent = "Computer:" + computerScore + "PLayer: " + playerScore;

    checkWinner();
})
