//First, I should introduce an array from which the computer can choose,
//The first function will pick from the three options being rock paper or scissors,
//at random, so it will have to use a random number method to pick between the three.
//This function should run as soon as the user inputs their choice. 
//I should console.log this a few times to see what the input looks like first 

//The next function will be reading in the user's input, first changing it to 
//capitalized, then checking whether it is rock paper or scissors. return "Rock" "Paper"
// or "Scissors"

const gameOutput = document.createElement('div');
const buttonBox = document.createElement('div');
const startGame = document.createElement('div');
const scoreBoard = document.createElement('div');
const restartBox = document.createElement('div');

const playerScoreBoard = document.createElement('h2');
const playerString = "You: ";
let playerScore = 0;
playerScoreBoard.textContent = playerString+playerScore;

const compScoreBoard = document.createElement('h2');
const compString = "Computer: ";
let compScore = 0; 
compScoreBoard.textContent = compString+compScore; 

scoreBoard.appendChild(playerScoreBoard);
scoreBoard.appendChild(compScoreBoard);

const restartButton = document.createElement('button');
restartButton.textContent = 'Restart Game';
restartBox.appendChild(restartButton);
restartButton.getAttribute('class', 'restart')


const gameText = document.createElement('h1')
gameText.textContent = 'Welcome to Rock Paper Scissors! Best 3 out of 5 wins! Choose an option to begin playing against the computer.'
gameOutput.appendChild(gameText);
document.body.appendChild(gameOutput);

const rockButton = document.createElement('button');
rockButton.classList.add("Rock");
rockButton.setAttribute('id','roc');
rockButton.textContent = "Rock";

const paperButton = document.createElement('button');
paperButton.classList.add("Paper");
paperButton.setAttribute('id','pap');
paperButton.textContent = "Paper";

const scisButton = document.createElement('button');
scisButton.classList.add("Scissors");
scisButton.setAttribute('id','sci');
scisButton.textContent = "Scissors";

buttonBox.appendChild(rockButton);
buttonBox.appendChild(paperButton);
buttonBox.appendChild(scisButton);

document.body.appendChild(buttonBox);
const buttons = document.querySelectorAll('button')

const compChoices = [];
compChoices[0]="Rock";
compChoices[1]="Paper";
compChoices[2]="Scissors";

function getComputerChoice() {
    let i = Math.floor(Math.random()*3);
    return compChoices[i];
}



function singleGame(playerMove) { 
            if (playerMove == "Rock") {
                gameText.textContent = "You picked Rock!";
            }
            else if (playerMove == "Paper"){
                gameText.textContent = "You picked Paper!";
            }
            else if (playerMove == "Scissors") {
                gameText.textContent = "You picked Scissors!";
            }
    
        let compChoice = getComputerChoice();
        gameText.textContent = "The computer chose "+compChoice+"! "
    
        if ((compChoice == playerMove)) {
            gameText.textContent += "It's a tie!";
        }
        else if ((compChoice == "Rock" && playerMove == "Scissors") || (compChoice == "Scissors" && playerMove == "Paper") || (compChoice == "Paper" && playerMove == "Rock")) {
            gameText.textContent += "\nYou lose this one...";
            return "lose";
        }
        else {
            gameText.textContent += "\nYou win this round!";
            return "win";
        }
    
    };


    


function bestOutOf3() {
    console.log("The game is rock, paper, scissors, best 3 out of 5 wins");
    let playerMove;
    playerScore = 0; 
    compScore = 0;
    const element = document.querySelectorAll('button');
    console.log(element)
    buttons.forEach(button => button.addEventListener('click', () => {
            document.body.appendChild(scoreBoard);
            playerMove = button.classList.value; 
            let outcome = singleGame(playerMove);
            if (outcome == "win") {
                playerScore++; 
                playerScoreBoard.textContent = playerString+playerScore;
                gameText.textContent += "\nYou got this! Only "+(3 - playerScore)+" left to win!";
                 }
            else if (outcome == "lose") {
                compScore++;
                compScoreBoard.textContent = compString+compScore;
                gameText.textContent += "\nChoose carefully! The computer has to win "+(3 - compScore)+" more before it's all over!";
                }

                if (compScore == 3){
                    if(playerMove == "Rock"){
                        gameText.textContent = "The computer chose paper to win the final round. Go home and cry about it. If you want to play again, reload the page";
                    }
                    else if (playerMove == "Paper"){
                            gameText.textContent = "Ooh, so close, but the computer cut your paper with scissors, don't be sad, reload the page and play again";
                        }
                    else if (playerMove == "Scissors"){
                        gameText.textContent = "The computer broke your scissors with rock and won the final round. Sorry for your loss, try again by reloading the page";
                    }
                    
                    document.getElementById('roc').disabled = true; 
                    document.getElementById('pap').disabled = true; 
                    document.getElementById('sci').disabled = true;
                    return; 
                }
                
                
                if (playerScore == 3){
                    if(playerMove == "Rock"){
                        gameText.textContent = "You broke the computer's scissors to win the final round! If you want to play again, reload the page";
                    }
                    else if (playerMove == "Paper"){
                            gameText.textContent = "The computer tried to throw its rock at you, but you covered it with paper to win! Reload the page to play again";
                        }
                    else if (playerMove == "Scissors"){
                        gameText.textContent = "You cut the computer's paper! You win! Try your luck again by reloading the page";
                    }
                    

                    document.getElementById('roc').disabled = true; 
                    document.getElementById('pap').disabled = true; 
                    document.getElementById('sci').disabled = true;
                    return;
                }
    
        }
    ))

    
};

    
document.body.appendChild(restartBox);

restartButton.addEventListener('click', function restart(){
    location.reload()
})


bestOutOf3(); 