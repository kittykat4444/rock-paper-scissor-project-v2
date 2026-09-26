    let humanScore = 0;
    let computerScore = 0; 

function playGame() {

        //step 3 
    function getHumanChoice() {
        let input = prompt("rock paper or scissor?");
        if (input.toLowerCase() === "rock" || input.toLowerCase() === "paper" || input.toLowerCase() === "scissor") {
            return input.toLowerCase();
        } else {
        console.log("This round did not count. You must enter a valid choice");
        getHumanChoice();
        }
    }
    let humanChoice = getHumanChoice();
    console.log(humanChoice);


    function getComputerChoice() {
        let num = Math.random();
        if (num > 0 && num < 0.3333) {
            return "rock";
        } else if (num >= 0.3333 && num <= 0.6666) {
            return "paper";
        } else {
            return "scissor";
            }
    }
    
    let computerChoice = getComputerChoice();
    console.log(computerChoice);

        function playRound(humanChoice, computerChoice) {
            console.log(humanChoice);
            console.log(computerChoice);
            if ((humanChoice === "rock" && computerChoice === "scissor") || (humanChoice === "paper" && computerChoice === "rock") || (humanChoice === "scissor" && computerChoice === "paper")) {
                console.log(`You WIN ${humanChoice} beats ${computerChoice}`);   
                console.log(`Human : ${++humanScore}  computer : ${computerScore}`);
            } else if ((computerChoice === "rock" && humanChoice === "scissor") || (computerChoice === "paper" && humanChoice === "rock") || (computerChoice === "scissor" && humanChoice === "paper")) {
                console.log(`You LOSE ${computerChoice} beats ${humanChoice}`);
                console.log(`Human : ${humanScore} Computer : ${++computerScore}`);
            } else {
                console.log("nobody wins. Try again.");
            }
        }
    playRound(humanChoice, computerChoice);
}
        

playGame();
playGame();
playGame();
playGame();
playGame();

console.log(`Your score is ${humanScore} : ${computerScore}`);

if (humanScore > computerScore) {
    alert("You're a Winner");
} else if (humanScore < computerScore) {
    console.log("Sorry, you lost...");
} else if (humanScore = computerScore) {
    alert("the game is null");
}
//if the human score is lesser, declare loosing announcement
//if scores are equal, game nul
