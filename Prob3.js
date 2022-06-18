// JavaScript source code
function GetAdditionOfRanNum() {
    let x = Math.floor(Math.random()* 11); 
    console.log("Num1 :- " + x);     
    let y = Math.floor(Math.random() * 11); 
    console.log("Num2 :- " + y);
    return x + y; 
}

console.log(">> Addition of Num1 and Num2:- " + GetAdditionOfRanNum()); 