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
    else if (playerSelection === "Sissors" && computerSelection === "Rock")
    return ("You Lose! Rock beats Scissors");
    else if (playerSelection === "Sissors" && computerSelection === "Paper")
    return ("You Win! Scissors beats Paper");
    else  ("Error")
}

const playerSelection = "Paper";
const computerSelection = getComputerChoice();
console.log(playerSelection)
console.log(computerSelection)
console.log(playRound(playerSelection, computerSelection));