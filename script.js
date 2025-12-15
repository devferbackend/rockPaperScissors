
 let x = "rock"
 let y = "paper"
 let z = "scissors" 
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