 let computerScore = 0
 let humanScore = 0
 let x = "rock"
 let y = "paper"
 let z = "scissors" 
 let messageWin1= "You win, paper beats rock!"
 let messageWin2= "You win, rock beats scissors!"
 let messageWin3= "You win, scissors beats paper!"

 let messagelose1= "You lose, paper beats rock!"
 let messagelose2= "You lose, rock beats scissors!"
 let messagelose3= "You win, scissors beats paper!"
 let messagedraw1= "You tied!"
function getComputerChoice() {
let com = Math.floor(Math.random() * 3) + 1;
if (com===1) {
    return x;
}else if (com === 2){
   return y;
}else {
 return z;
}
}
console.log(getComputerChoice())
function getHumanChoice(){
    let human = prompt('Choose "rock", "paper" or "scissors"');
    while (human !== "rock" && human !== "paper" && human !== "scissors") {
        human = prompt('Invalid choice. Choose "rock", "paper" or "scissors"');
    }
    if (human==="rock") {
    return x;
}else if (human==="paper"){
   return y;
}else {
 return z;
}
    }
console.log(getHumanChoice())

function playRound(humanChoice, computerChoice) {
 let human = humanChoice.toUpperCase()
 let computer = computerChoice.toUpperCase()
 let mensaje = ""
 if (human.length === 4 && computer.length === 8){
    mensaje = messageWin2
 }
 else if (human.length === 4 && computer.length === 5){
    mensaje = messagelose1
 } 
 else if (human.length === 5 && computer.length === 4){
    mensaje = messageWin1
 }
 else if (human.length === 5 && computer.length === 8){
    mensaje =  messagelose3
 }
 else if (human.length === 8 && computer.length === 5){
    mensaje = messageWin3
 }
 else if (human.length === 8 && computer.length === 4){
    mensaje = messagelose2
 }
 else {
    mensaje = messagedraw1
 }

return mensaje
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);

console.log(playRound(humanSelection, computerSelection));
