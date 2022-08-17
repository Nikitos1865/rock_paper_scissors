//First, I should introduce an array from which the computer can choose,
//The first function will pick from the three options being rock paper or scissors,
//at random, so it will have to use a random number method to pick between the three.
//This function should run as soon as the user inputs their choice. 
//I should console.log this a few times to see what the input looks like first 

//The next function will be reading in the user's input, first changing it to 
//capitalized, then checking whether it is rock paper or scissors. return "Rock" "Paper"
// or "Scissors"

const compChoices = [];
compChoices[0]="Rock";
compChoices[1]="Paper";
compChoices[2]="Scissors";

function getComputerChoice() {
    let i = Math.floor(Math.random()*3);
    return compChoices[i];
}

function playerSelection(playerChoice) {
    playerChoice = prompt("Rock, Paper, or Scissors?");
    let restOfString = playerChoice.substr(1);
    let firstLetter = playerChoice.slice(0,1);
    return (firstLetter.toUpperCase()+restOfString.toLowerCase());
}

function singleGame() {
    let valid = false; 
    let playerMove = playerSelection();
    while (valid === false) {
        if (playerMove == "Rock") {
            alert("You picked Rock!");
            valid = true;
            console.log(valid);
        }
        else if (playerMove == "Paper"){
            alert("You picked Paper!");
            valid = true;
        }
        else if (playerMove == "Scissors") {
            alert("You picked Scissors!");
            valid = true;
        }
        else {
            alert("This wasn't one of the options, choose again smartass");
            playerMove = playerSelection();
        }

        
    } 

    let compChoice = getComputerChoice();
    alert("The computer chose "+compChoice)

    if ((compChoice == "Rock" && playerMove == "Rock") || (compChoice == "Scissors" && playerMove == "Scissors") || (compChoice == "Paper" && playerMove == "Paper")) {
        alert("It's a tie!");
    }
    else if ((compChoice == "Rock" && playerMove == "Scissors") || (compChoice == "Scissors" && playerMove == "Paper") || (compChoice == "Paper" && playerMove == "Rock")) {
        alert("You lose this one...");
        return "lose";
    }
    else {
        alert("You win!");
        return "win";
    }

}

function bestOutOf3() {
    let playerPoints = 0; 
    let compPoints = 0;
    alert("The game is rock, paper, scissors, best 3 out of 5 wins");

    while (playerPoints < 3 || compPoints < 3) {
        let outcome = singleGame();
        if (outcome == "win") {
            playerPoints++; 
            if (playerPoints == 3) {
                alert("You win, go home and celebrate!");
                break; 
            }
            else {
                alert("You got this! Only "+(3 - playerPoints)+" left to win!");
            }
            //alert("You have "+playerPoints+" points. You need "+(3 - playerPoints)+" more to win.")
        }
        else if (outcome == "lose") {
            compPoints++;
            if (compPoints == 3){
                alert("The computer won, go home and cry about it.");
                break;
            }
            else {
                alert("Choose carefully! The computer has to win "+(3 - compPoints)+" more before it's all over!");
            }
            //alert("Choose carefully, the computer needs to win "+(3 - compPoints)+" more rounds to win!")
    }

    }
}

bestOutOf3();