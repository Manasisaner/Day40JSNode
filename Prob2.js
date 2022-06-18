// JavaScript source code

function DiceRoll(num) {
    return Math.floor(Math.random() * 10) % num; 
}

console.log(">> Dice Output :- " + DiceRoll(7));  