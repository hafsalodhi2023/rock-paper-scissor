let userScore = 0;
let compScore = 0;
let username = prompt("Please Enter Your Name: ");
const choices = document.querySelectorAll(".choice img");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const usernamePara = userScorePara.nextElementSibling;
const compScorePara = document.querySelector("#comp-score");
const WinningMusic = new Audio("./Images/winning.mp3");
const LosingMusic = new Audio("./Images/losing.mp3");

if (username === "" || username === null) {
  usernamePara.innerText = "User";
} else {
  usernamePara.innerText = username;
}

const genCompChoice = () => {
  let options = ["Rock", "Paper", "Scissor"];
  let optIdx = Math.floor(Math.random() * 3);
  return options[optIdx];
};

const showWinner = (userWin, userChoice, compChoice) => {
  if (userWin) {
    msg.innerText = `You Win! Your ${userChoice} Beats ${compChoice}`;
    msg.style.backgroundColor = "green";
    userScore += 1;
    userScorePara.innerText = userScore;
    WinningMusic.play();
    WinningMusic.volume = 0.4;
  } else {
    msg.innerText = `You Lose. ${compChoice} Beats Your ${userChoice}`;
    msg.style.backgroundColor = "red";
    compScore += 1;
    LosingMusic.play();
    LosingMusic.volume = 0.4;
    compScorePara.innerText = compScore;
  }
};

const drawGame = () => {
  msg.innerText = "Game Was Draw. Play Again.";
  msg.style.backgroundColor = "#081b31";
};

const playGame = (userChoice) => {
  let compChoice = genCompChoice();

  if (userChoice === compChoice) {
    drawGame();
  } else {
    userWin = true;

    if (userChoice === "Rock") {
      userWin = compChoice === "Paper" ? false : true;
    } else if (userChoice === "Paper") {
      userWin = compChoice === "Scissor" ? false : true;
    } else {
      userWin = compChoice === "Rock" ? false : true;
    }
    showWinner(userWin, userChoice, compChoice);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", (e) => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});
