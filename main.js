/* 

Create function getComputerChoice
    Randomly choose a number corresponding to rock. paper or scissors
    Use an IF or Switch statement to return the string of rock, paper or scissors
Create function getHumanChoice
   save users prompt choice in a variable 
   return that variable  
Create a function playRound 
    compare computerChoice with humanChoice and write the logic for a win condition

        if human choice is rock and computer choice is paper
            declare the computer as a winner write: You lose! Paper beats Rock!, increment computerScore and display both scores
        else if human choice is rock and computer choice is scissors
            declare the human as a winner wwrite: You Win! Rock beats Scissors!, increment humanScore display scores
        else if human choice is rock and computer choice is a Rock
            declare the tie, Rock can't beat Rock write: It's a Tie! display score
        else if human choice is Paper and Computer choise is Rock
            declare the human as a winner wwrite: You Win! Paper beats Rock!, increment humanScore display scores
        else if human choice is Paper and 
    
Create playGame function
    play 5 rounds with keeping score
    declare the winner after the fifth round and the score

*/
// function return string Rock, Paper or Scissors randomly
function getComputerChoice(){
    let rand = Math.floor(Math.random() * (4 - 1) + 1); // rand can be 1,2 or 3 randomly
    //console.log(rand);

    switch(rand){
        case 1:
            return "rock";
            break;
        case 2:
            return "paper";
            break;
        case 3:
            return "scissors";
            break;

    }

}

// Function return users choice of Rock, Paper or Scissors
function getHumanChoice(){
    return prompt("Choose Rock, Paper or Scissors:");
}

/*      Results Logic

if(humanScore > computerScore){
        console.log("Victory!");
    }
    else if(humanScore < computerScore){
        console.log("Defeat!");
    }
    else{
        console.log("Stalemate! Mate");
    }
    console.log("Total score -  Human: " + humanScore + ", Computer: " + computerScore);


*/

function createPara(text){
    let para = document.createElement("p");
    para.textContent = text;

    return para;
}






let computerScore = 0;
let humanScore = 0;


function playRound(event){
    
    let txt = document.querySelector("#results");
    txt.setAttribute("style", "white-space: pre-line;");
    let lowerHumanChoice = event.target.id;
    let computerChoice = getComputerChoice()

    txt.textContent = "";
    
    // Replacing prompt for human choice to user clicking the button to choose Rock, Paper or Scissors
        console.log(lowerHumanChoice);

    switch(lowerHumanChoice){ // Change lowerHumanChoice with updated logic
            
        case "rock":
            if(computerChoice === "paper"){
                txt.textContent += "\nYou Lose! Paper beats Rock :( ";
                ++computerScore;
                txt.textContent += "\nYour score: " + humanScore + ", Computer Score: " + computerScore;
            }
            else if (computerChoice === "scissors") {
                txt.textContent += "\nYou Win! Rock beats Scissors :) ";
                ++humanScore;
                txt.textContent += "\nYour score: " + humanScore + ", Computer Score: " + computerScore;
            }
            else if (computerChoice === "rock") {
                txt.textContent += "\nIt's a Tie! Rock can't beat Rock :| ";
                txt.textContent += "\nYour score: " + humanScore + ", Computer Score: " + computerScore;
            }   
        break;

        case "paper":
            if(computerChoice === "scissors"){
                console.log("You Lose! Scissors beats Paper :( ")
                ++computerScore;
                console.log("Your score: " + humanScore + ", Computer Score: " + computerScore);
            }
            else if (computerChoice === "rock") {
                console.log("You Win! Paper beats Rock :) ")
                ++humanScore;
                console.log("Your score: " + humanScore + ", Computer Score: " + computerScore);
            }
            else if (computerChoice === "paper") {
                console.log("It's a Tie! Paper can't beat Paper :| ")
                console.log("Your score: " + humanScore + ", Computer Score: " + computerScore);
            }   
        break;

        case "scissors":
            if(computerChoice === "rock"){
                console.log("You Lose! Rock beats Scissors :( ")
                ++computerScore;
                console.log("Your score: " + humanScore + ", Computer Score: " + computerScore);
            }
            else if (computerChoice === "paper") {
                console.log("You Win! Scissors beats Paper :) ")
                ++humanScore;
                console.log("Your score: " + humanScore + ", Computer Score: " + computerScore);
            }
            else if (computerChoice === "scissors") {
                console.log("It's a Tie! Scissors can't beat Scissors :| ")
                console.log("Your score: " + humanScore + ", Computer Score: " + computerScore);
            }   
        break;
    
    }
    let txt2 = "";
    if(humanScore == 5 && computerScore < 5){
        txt.textContent = "";
        txt.textContent += "\nVictory!\nTotal score -  Human: " + humanScore + ", Computer: " + computerScore;
        humanScore = 0;
        computerScore = 0;
    } 
    else if(computerScore == 5 && humanScore < 5){
        txt.textContent = "";
        txt.textContent += "\nDefeat! \nTotal score -  Human: " + humanScore + ", Computer: " + computerScore;
        humanScore = 0;
        computerScore = 0;
    }  
}


let rock = document.querySelector("#rock");
let paper = document.querySelector("#paper");
let scissors = document.querySelector("#scissors");


rock.addEventListener("click", playRound);
paper.addEventListener("click", playRound);
scissors.addEventListener("click", playRound);













