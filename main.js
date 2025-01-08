function getComputerChoice(){
    const choices = ['rock', 'paper', 'scissors'];
    const randomChoice = Math.floor(Math.random() * choices.length);
    return choices[randomChoice];
}

let humanScore = 0;
let computerScore = 0;
const resultsDiv = document.getElementById('results');

// Add winning score constant
const WINNING_SCORE = 5;

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

    // Check for winner after updating scores
    let gameOver = '';
    if (humanScore === WINNING_SCORE) {
        gameOver = 'Game Over - You are the champion! 🎉';
        disableButtons();
    } else if (computerScore === WINNING_SCORE) {
        gameOver = 'Game Over - Computer wins! Try again!';
        disableButtons();
    }

    // Update display with game over message if applicable
    resultsDiv.innerHTML = `
        <p>${result}</p>
        <p>Score - You: ${humanScore} Computer: ${computerScore}</p>
        ${gameOver ? `<p class="game-over">${gameOver}</p>
        <button onclick="resetGame()">Play Again</button>` : ''}
    `;
    return result;
}

// Add function to disable buttons
function disableButtons() {
    document.querySelectorAll('.choices button').forEach(button => {
        button.disabled = true;
    });
}

// Add function to reset the game
function resetGame() {
    humanScore = 0;
    computerScore = 0;
    resultsDiv.innerHTML = '';
    document.querySelectorAll('.choices button').forEach(button => {
        button.disabled = false;
    });
}

// Add event listeners to buttons
document.querySelectorAll('.choices button').forEach(button => {
    button.addEventListener('click', () => {
        const humanChoice = button.id; // 'rock', 'paper', or 'scissors'
        const computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
    });
});