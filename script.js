
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
    
function playGame(){
let computerScore = 0
let humanScore = 0
function playRound(humanChoice, computerChoice) {

if (humanChoice === computerChoice ) {
       return "draw"
    } else if (
        (humanChoice=== "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        humanScore ++
        return "human"
    } else {
        computerScore ++
        return "computer"
    }
    
}
   for (let round = 1; round<=5; round++){
      console.log(`Round + ${round}`)
       const humanSelection = getHumanChoice();
       const computerSelection = getComputerChoice();
       const winner = playRound(humanSelection, computerSelection)

       if (winner === "human"){
         console.log(`You win! ${humanSelection} beats ${computerSelection}`)
       }
      else if ( winner === "computer"){
         console.log(`You lose! ${computerSelection} beats ${humanSelection}`)
      }
      else {
         console.log(`Draw! Both chose: ${humanSelection}`)
      }

         console.log(`Score: You ${humanScore} - ${computerScore} Computer\n`);
         } 

            console.log("=== GAME OVER ===");
    console.log(`Final Score: You ${humanScore} - ${computerScore} Computer`);
    if (humanScore > computerScore) {
        console.log("🎉 YOU WIN THE GAME!");
    } else if (computerScore > humanScore) {
        console.log("💻 COMPUTER WINS THE GAME!");
    } else {
        console.log("🤝 IT'S A TIE GAME!");
    }
   }
   playGame()