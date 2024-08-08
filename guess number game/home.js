let number_generated = Math.floor(Math.random()*100) ;
let attempts = 0;

function checkGuess() {
    attempts++;
    if (document.getElementById("input").value == number_generated) {
      document.getElementById("Result_text").style = "color:#E74C3C"
      document.getElementById("Result_text").innerHTML = `Congratulations! You guessed the number. you taked ${attempts} trail`;
    } else if (document.getElementById("input").value < number_generated) {
      document.getElementById("Result_text").innerHTML = `The number is more than ${document.getElementById("input").value}. trail :  ${attempts} `;
    } else {
      document.getElementById("Result_text").innerHTML = `The number is less than ${document.getElementById("input").value}. trail :  ${attempts} `;
    }
      document.getElementById("input").value = "" ;

  }