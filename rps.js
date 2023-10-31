//Create a function that returns randomly either rock, paper, or scissors

function compChoice() {
    let randNum;
    randNum = Math.floor(Math.random() * (3 - 1 + 1) + 1);
    if (randNum === 1) {
        return 'Rock';
    } else if (randNum === 2) {
        return 'Paper';
    } else return 'Scissors';
}

//Make a function that takes two parameters, player choice and computer choice, then return a string that declares the winner 

let computerChoice = compChoice();
let playerScore = 0;
let compScore = 0;
let results;
function playRound(playerChoice, computerChoice) {

    if (playerChoice == computerChoice) {

        results = 'Tie, Try Again.';

    } else if (playerChoice == 'rock') {

        if (computerChoice === 'Paper') {
            compScore++;
            results = 'You Lose Bitch. Paper covers Rock';
        }
        else {
            playerScore++;
            results = 'You Win! Rock crushes Scissors.';
        }
        
    } else if (playerChoice == 'paper') {

        if (computerChoice === 'Scissors') {
            compScore++;
            results = 'You Lose Pussy. Scissors cut Paper.';
        }
        else {
            playerScore++;
            results = 'You Win! Paper covers Rock.';
        }

    } else if (playerChoice == 'scissors') {

        if (computerChoice === 'Rock') {
            compScore++;
            results = 'You Lose Motherfucker. Rock crushes Scissors.';
        }
        else {
            playerScore++;
            results = 'You Win! Scissors cut Paper.';
        }
    }
}

//Write a new function called game() that plays a 5 round game, (use the previous function inside this one)

function game() {
    playerScore = 0;
    compScore = 0;

    playRound(prompt('rock, paper, or scissors?'), compChoice());
    console.log(results);
    console.log(playerScore + ' to ' + compScore);
    
    playRound(prompt('rock, paper, or scissors?'), compChoice());
    console.log(results);
    console.log(playerScore + ' to ' + compScore);

    playRound(prompt('rock, paper, or scissors?'), compChoice());
    console.log(results);
    console.log(playerScore + ' to ' + compScore);

    playRound(prompt('rock, paper, or scissors?'), compChoice());
    console.log(results);
    console.log(playerScore + ' to ' + compScore);

    playRound(prompt('rock, paper, or scissors?'), compChoice());
    console.log(results);
    console.log(playerScore + ' to ' + compScore);

    if (playerScore > compScore) {
        return 'Damn bruh, fuck them machines! You just won!'
    } else return 'AI just wiped out the human race. You lost.';
}

