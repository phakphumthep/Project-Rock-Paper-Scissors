function getComputerChoice(){
    const choice = ["Rock", "Paper","Scissors"];
    return choice[Math.floor(Math.random()*choice.length)];
}

    function playRound (playerSelection,computerSelection){
        if (playerSelection === computerSelection)
    return ("Draw");
    else if (playerSelection === "Rock" && computerSelection === "Paper")
    return ("You Lose! Paper beats Rock" );
    else if (playerSelection === "Rock" && computerSelection === "Scissors")
    return ("You Win! Rock beats Scissors");
    else if (playerSelection === "Paper" && computerSelection === "Scissors")
    return ("You Lose! Scissors beats Paper");    
    else if (playerSelection === "Paper" && computerSelection === "Rock")
    return ("You Win! Paper beats Rock");
    else if (playerSelection === "Scissors" && computerSelection === "Rock")
    return ("You Lose! Rock beats Scissors");
    else if (playerSelection === "Scissors" && computerSelection === "Paper")
    return ("You Win! Scissors beats Paper");
    else  ("Error")
}

const playerSelection = prompt('Player Choose',"Rock","Paper","Scissors");
const computerSelection = getComputerChoice();

function game(){
    for (let i = 0; i < 5; i++) {
        playRound(playerSelection, computerSelection);
        console.log(playRound(playerSelection, computerSelection));
        playRound(playerSelection, computerSelection);
        console.log(playRound(playerSelection, computerSelection));
        playRound(playerSelection, computerSelection);
        console.log(playRound(playerSelection, computerSelection));
        playRound(playerSelection, computerSelection);
        console.log(playRound(playerSelection, computerSelection));
        playRound(playerSelection, computerSelection);
        console.log(playRound(playerSelection, computerSelection));
    }
}
