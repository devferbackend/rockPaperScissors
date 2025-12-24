//  
//  let x = "rock"
//  let y = "paper"
//  let z = "scissors" 
//  let messageWin1= "You win, paper beats rock!"
//  let messageWin2= "You win, rock beats scissors!"
//  let messageWin3= "You win, scissors beats paper!"

//  let messagelose1= "You lose, paper beats rock!"
//  let messagelose2= "You lose, rock beats scissors!"
//  let messagelose3= "You win, scissors beats paper!"
//  let messagedraw1= "You tied!"
let computerScore = 0
 let humanScore = 0
function getComputerChoice() {
let com = Math.floor(Math.random() * 3) + 1;
if (com===1) {
    return "rock";
}else if (com === 2){
   return "paper";
}else {
 return "scissors";
}
}

function getHumanChoice(){
    let human = prompt('Choose "rock", "paper" or "scissors"');
    let humano = human.toLowerCase().trim();
    if (humano === "rock" || humano === "paper" || humano === "scissors") {
        return humano;
    } else {
        alert("Invalid choice! Please enter rock, paper, or scissors.");
        return getHumanChoice(); // Llamar recursivamente
    }
}
    
//console.log(getHumanChoice())

function playRound(humanChoice, computerChoice) {
 let human = humanChoice
 let computer = computerChoice
 let mensaje = ""
if (human === computer) {
        mensaje = "This is a draw!";
    } else if (
        (human === "rock" && computer === "scissors") ||
        (human === "paper" && computer === "rock") ||
        (human === "scissors" && computer === "paper")
    ) {
        mensaje = `You win! ${human} beats ${computer}!`
        humanScore = humanScore + 1
    } else {
        mensaje = `You lose! ${computer} beats ${human}!`
        computerScore = computerScore + 1
    }
    
    return mensaje
    
}

   const humanSelection = getHumanChoice();
   const computerSelection = getComputerChoice();
   

console.log(`Human chose: ${humanSelection}`);
console.log(`Computer chose: ${computerSelection}`);
console.log(playRound(humanSelection, computerSelection));
console.log(`Human: ${humanScore}`)
console.log(`Computer: ${computerScore}`)