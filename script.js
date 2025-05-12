humanScore = 0;
compScore = 0;

function playRound(humanChoice) {
    const compChoice = getCompChoice();

    console.log(humanChoice);
    console.log(compChoice);

    // This checks for a draw
    if (humanChoice === compChoice) {
        console.log("Draw!");
        return;
    }

    // Checks if human won with rock
    if (humanChoice === 0) {
        if (compChoice === 1) {
            console.log("Computer won!");
            compScore++;
            return;
        } else {
            console.log("Human won!");
            humanScore++;
            return;
        }
    } else if (humanChoice === 1) {
        if (compChoice === 0) {
            console.log("Human won!");
            humanScore++;
            return;
        } else {
            console.log("Computer won!");
            compScore++;
            return;
        }
    } else {
        if (compChoice === 0) {
            console.log("Computer won!");
            compScore++;
            return;
        } else {
            console.log("Human won!");
            humanScore++;
            return;
        }
    }
}

function getCompChoice() {
    return Math.round(Math.random() * 2);
}

const btn = document.querySelectorAll(".button-container > button");

btn.forEach((button) => {
    button.addEventListener("click", () => {
        playRound(Number(button.className));
        updateScore();
        checkWinner();
    });
});

function updateScore() {
    const scores = document.querySelectorAll(".score-container > p");

    scores[0].textContent = "Player Score: " + humanScore;
    scores[1].textContent = "Computer Score: " + compScore;
}

function checkWinner() {
    if (humanScore >= 3) {
        alert("You win!");
        reset();
    } else if (compScore >= 3) {
        alert("The computer won!");
        reset();
    }
}

function reset() {
    compScore = 0;
    humanScore = 0;
    updateScore();
}
