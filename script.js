//step 2

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

//step 3 
    function getHumanChoice() {
    return prompt("rock paper or scissor?");
}
let humanChoice = getHumanChoice();
console.log(humanChoice);
//take the user choice
//return it
//save the result in a variable in the external scope 