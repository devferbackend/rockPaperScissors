
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
