function playGame() {

        //step 3 
    function getHumanChoice() {
        let input = prompt("rock paper or scissor?");
        if (input.toLowerCase() === "rock" || input.toLowerCase() === "paper" || input.toLowerCase() === "scissor") {
            return input.toLowerCase();
        } else {
        console.log("you must enter a valid choice");
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

    var humanScore = 0;
    var computerScore = 0; 


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
//calls for computer choice 
//calls for human choice 
// logs winner announcement 

//call it a second time 
//call it a third time
//call it a fourth time 
//call it a fifth time

