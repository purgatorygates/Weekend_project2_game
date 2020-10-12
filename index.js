const prompt = require("readline-sync");

const input = prompt.question("yes to play, no");

// console.log(input)
//break out of loop after 2 wins or 3 rounds

if (input.toLowerCase() === "yes") {
  let userWins = 0;
  let maxRounds = 0;
  let losses = 0;
  while (userWins <= 1 && maxRounds <= 2) {
    let enemy = ["0", "1", "2"];
    let playerInput = prompt.question("choose 0, 1, 2");
    console.log(`This is the player input = ${playerInput}`);
    let opponent = enemy[Math.floor(Math.random() * 3)];
    let you = playerInput;
    if (opponent === you) {
      console.log("draw");
      console.log(`Rounds = ${maxRounds}`);
    } else if (you === "0" && opponent === "1") {
      console.log(`you win, ${opponent} !`);
      userWins++;
      console.log(`Total user wins = ${userWins}`);
      console.log(`Total user losses = ${losses}`);
      maxRounds++;
      console.log(`Rounds = ${maxRounds}`);
    } else if (you === "1" && opponent === "2") {
      console.log(`you win, ${opponent} ?`);
      userWins++;
      console.log(`Total user wins = ${userWins}`);
      console.log(`Total user losses = ${losses}`);
      maxRounds++;
      console.log(`Rounds = ${maxRounds}`);
    } else if (you === "2" && opponent === "0") {
      console.log(`you win, ${opponent} ++`);
      userWins++;
      console.log(`Total user wins = ${userWins}`);
      console.log(`Total user losses = ${losses}`);
      maxRounds++;
      console.log(`Rounds = ${maxRounds}`);
    } else {
      console.log(`you lose, the computer had the number: ${opponent}`);
      maxRounds++;
      losses++;
      console.log(`Total user wins = ${userWins}`);
      console.log(`Total user losses = ${losses}`);
      console.log(`Rounds = ${maxRounds}`);
    }
  }
}

// function restart(){
//   console.log('do you want to play again')
// }
