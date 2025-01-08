function getComputerChoice(){
    const choices = ['rock', 'paper', 'scissors'];
    const randomChoice = Math.floor(Math.random() * choices.length);
    return choices[randomChoice];
}

function getHumanChoice(){
    const humanChoice = prompt('Enter your choice: rock, paper, or scissors');
    return humanChoice;
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice){
    let result = '';
    
    if(humanChoice === computerChoice){
        result = 'Tie';
    } else if(humanChoice === 'rock'){
        if(computerChoice === 'scissors'){
            humanScore++;
            result = 'You win! Rock beats Scissors';
        } else if(computerChoice === 'paper'){
            computerScore++;
            result = 'You lose! Paper beats Rock';
        }
    }

    if(humanChoice === 'paper'){
        if(computerChoice === 'rock'){
            humanScore++;
            result = 'You win! Paper beats Rock';
        } else if(computerChoice === 'scissors'){
            computerScore++;
            result = 'You lose! Scissors beats Paper';
        }
    }

    if(humanChoice === 'scissors'){
        if(computerChoice === 'paper'){
            humanScore++;
            result = 'You win! Scissors beats Paper';
        } else if(computerChoice === 'rock'){
            computerScore++;
            result = 'You lose! Rock beats Scissors';
        }
    }

    console.log(result);
    console.log(`Score - You: ${humanScore} Computer: ${computerScore}`);
    return result;
}

function getRoundCount() {
    const rounds = prompt('How many rounds would you like to play?');
    const roundCount = parseInt(rounds);
    
    if (isNaN(roundCount) || roundCount < 1) {
        console.log('Please enter a valid number greater than 0');
        return getRoundCount();
    }
    return roundCount;
}

function playGame(){
    humanScore = 0;
    computerScore = 0;
    
    const totalRounds = getRoundCount();
    console.log(`Playing ${totalRounds} rounds...`);
    
    for(let i = 0; i < totalRounds; i++){
        console.log(`\nRound ${i + 1}:`);
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
    }

    console.log('\n=== Game Over ===');
    if(humanScore > computerScore){
        console.log('Congratulations! You won the game!');
    } else if(computerScore > humanScore){
        console.log('Game Over! Computer wins!');
    } else {
        console.log("It's a tie game!");
    }
    console.log(`Final Score - You: ${humanScore} Computer: ${computerScore}`);
}

playGame();