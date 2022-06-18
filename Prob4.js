

let ArrayOfRanNo=[];
let sum = 0;
let avg = 0;
for (var i = 1; i <= 5; i++) {
    let x = Math.floor(Math.random() * (100 - 10 + 1) + 10);
    console.log("Num " + i + " = " + x);
    ArrayOfRanNo[i] = x;
}

ArrayOfRanNo.forEach(num => sum += num);
avg = sum / 5;

console.log(">> Sum of 5 two digit random no is :- " + sum);
console.log(">> Average of 5 two digit random no is :- " + avg);