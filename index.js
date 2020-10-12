const prompt = require("readline-sync");

console.log("Welcome to the World Campions Tournament");

let playerSelect = prompt.question(`please enter your name: \n`);

const input = prompt.question(
  `${playerSelect} Are you ready to battle your first opponenet?: Type Yes:\n`
);

// function restart() {
//   const letsPlay = prompt.keyInSelect(
//     ["Yes", "No"],
//     "do you want to play again?"
//   );
//   if (letsPlay === 0) {
//     console.log("A brave choice..");
//   } else {
//     console.log("Oh well.. Maybe next time.");
//     process.exit();
//   }
// }

if (input.toLowerCase() === "yes") {
  let userWins = 0;
  let maxRounds = 0;
  let losses = 0;
  while (userWins <= 1 && maxRounds <= 2) {
    let enemy = ["punch", "kick", "throw"];
    let playerInput = prompt.question("choose punch, kick, or throw: ");
    console.log(``);
    let opponent = enemy[Math.floor(Math.random() * 3)];
    let you = playerInput;
    if (opponent === you) {
      console.log(`You used ${playerInput} and your opponent used ${opponent}`);
      console.log("draw");
      console.log(`Rounds = ${maxRounds}`);
      console.log(`Total user wins = ${userWins}`);
      console.log(`Total user losses = ${losses}`);
    } else if (you === "punch" && opponent === "kick") {
      console.log(
        `you win! You used ${playerInput} and your opponent used ${opponent}`
      );
      userWins++;
      maxRounds++;
      console.log(`Rounds = ${maxRounds}`);
      console.log(`Total user wins = ${userWins}`);
      console.log(`Total user losses = ${losses}`);
    } else if (you === "kick" && opponent === "throw") {
      console.log(
        `You win!,You used ${playerInput} and your opponent used ${opponent}`
      );
      userWins++;
      maxRounds++;
      console.log(`Rounds = ${maxRounds}`);
      console.log(`Total user wins = ${userWins}`);
      console.log(`Total user losses = ${losses}`);
    } else if (you === "throw" && opponent === "punch") {
      console.log(
        `You win!,You used ${playerInput} and your opponent used ${opponent}`
      );
      maxRounds++;
      userWins++;
      console.log(`Total user wins = ${userWins}`);
      console.log(`Total user losses = ${losses}`);
      console.log(`Rounds = ${maxRounds}`);
    } else {
      console.log(
        `You Lose!,You used ${playerInput} and your opponent used ${opponent}`
      );
      console.log(`Total user wins = ${userWins}`);
      console.log(`Total user losses = ${losses}`);
      console.log(`Rounds = ${maxRounds}`);
      maxRounds++;
      losses++;
    }
  }
}

console.log(
  `Thanks you for playing, stay tuned for future updates and remember to Like, Sub, and Subscribe\n Goodbye ${playerSelect}`
);
