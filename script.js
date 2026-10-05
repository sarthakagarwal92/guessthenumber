let againBtn =document.querySelector(".again");
let guessNumber = document.querySelector(".number");
let guessValue = document.querySelector(".guess");
let checkBtn = document.querySelector(".check");
let msg = document.querySelector(".message");
let gameScore= document.querySelector(".score");
let highScore= document.querySelector(".highscore");
let score =20;
let randomNumber = Math.trunc(Math.random()*20) + 1;
console.log(randomNumber);

// A. Functionallity for check button
checkBtn.addEventListener("click", ()=>{
//1. want input value in number format
let val = Number(guessValue.value);
//2. check input field is empty or not 
if(!val ){
//2.1 show msg enter a number 
msg.textContent = "Enter a value"; }
// 3. if randomnumber === input value 
else if (randomNumber === val){
//3.1 change background colour to green 
document.body.style.backgroundColor = "green";
// 3.2 show random number in place of ?
guessNumber.textContent = randomNumber;
//3.3 Update highScore if score is greater than highscore
if (score > highScore.textContent){
//3.3.1 update the dom
highScore.textContent = score;
}
//3.4 update msg to current number
msg.textContent= "Correct Guess!";
}
//4. If guessValue is less than randomNumber
else if (val < randomNumber){
//4.1 Decrement the score by 1
score--;
//4.2 Update score in html
gameScore.textContent = score ;
//4.3 Show msg too low
msg.textContent= "TOO LOW!";
}
//5. If guessvalue is greater then randomnumber
else if (val > randomNumber){
//5.1 Decrement the score by 1
score--;
//5.2 Update score in html
gameScore.textContent = score;
//5.3 Show msg too High
msg.textContent = "TOO HIGH!";
}

});

//B. Functionallity for check button
againBtn.addEventListener("click", () => {
//1. Change background colour to black;
document.body.style.backgroundColor = "black";
//2. change the value of guessnumber to ?
guessNumber.textContent = "?";
//3. change msg to start guessing 
msg.textContent= "Start guessing...";
//4. change the score value to 20
score=20;
//5. update the score in game score in html
gameScore.textContent= score;
//6. generate a new random number
randomNumber= Math.trunc(Math.random()*20)+1;
console.log(randomNumber);

});