function getCompChoice() {
    return Math.round(Math.random() * 2);
}

function getHumanChoice() {
    let choice = prompt("Rock, Paper or Scissors: ");

    switch (choice.charAt(0).toLowerCase()) {
        case "r":
            return 0;
        case "p":
            return 1;
        case "s":
            return 2;
    }
}

humanScore = 0;
compScore = 0;

function playRound() {
    humanChoice = getHumanChoice();
    compChoice = getCompChoice();

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

function playGame() {
    playRound();
    playRound();
    playRound();
    playRound();
    playRound();

    if (compScore > humanScore) {
        console.log("Computer won the games!");
    } else {
        console.log("Human won the games!");
    }
}

playGame();
