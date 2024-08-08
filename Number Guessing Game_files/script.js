let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

function checkGuess() {
  const userGuess = document.getElementById("userGuess").value;
  attempts++;

  if (userGuess == randomNumber) {
    document.getElementById("feedback").innerHTML = `Congratulations! You guessed the number. It took you ${attempts} attempts.`;
  } else if (userGuess < randomNumber) {
    document.getElementById("feedback").innerHTML = "Too low! Try again.";
  } else {
    document.getElementById("feedback").innerHTML = "Too high! Try again.";
  }
  
}