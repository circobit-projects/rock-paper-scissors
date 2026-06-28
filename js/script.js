// Store and return user choice
function getHumanChoice() {

	// Take user's prompt
	let input = prompt("Write your choice: Rock, Paper or Scissors.");
	let inputLow = input.toLowerCase();

	// Check if the value is "rock", "paper" or "scissors"
	if (inputLow !== "rock" && inputLow !== "paper" && inputLow !== "scissors") {
		alert("Invalid value.");
		return "Invalid value";
	// Return valid number picked by the user
	} else {
		return inputLow;
	}
};


// Store and return computer choice:
function getComputerChoice() {
	let objects = [ "rock", "paper", "scissors" ];
	let randomNum = Math.floor(Math.random() * objects.length);
	return objects[randomNum];
};


// Declare players' score variables
let humanScore = 0;
let computerScore = 0;
let roundResult = "";


// Logic to play one round
function playRound(humanChoice, computerChoice) {
	// If human picks up Rock
	if (humanChoice === "rock") {
		if (computerChoice === "scissors") {
			console.log("You win! Rock beats Scissors");
			humanScore++;
			roundResult = "win";
			return { humanChoice, computerChoice, roundResult };
		} else if (computerChoice === "paper") {
			console.log("You lose! Paper beats Rock");
			computerScore++;
			roundResult = "lose";
			return { humanChoice, computerChoice, roundResult };
		} else {
			console.log("It's a tie! Rock cannot beat Rock");
			roundResult = "tie";
			return { humanChoice, computerChoice, roundResult };
		};
	};

	// If human picks up Paper
	if (humanChoice === "paper") {
		if (computerChoice === "rock") {
			console.log("You win! Paper beats Rock");
			humanScore++;
			roundResult = "win";
			return { humanChoice, computerChoice, roundResult };
		} else if (computerChoice === "scissors") {
			console.log("You lose! Scissors beats Paper");
			computerScore++;
			roundResult = "lose";
			return { humanChoice, computerChoice, roundResult };
		} else {
			console.log("It's a tie! Paper cannot beat Paper");
			roundResult = "tie";
			return { humanChoice, computerChoice, roundResult };
		};
	};

	// If human picks up Scissors
	if (humanChoice === "scissors") {
		if (computerChoice === "paper") {
			console.log("You win! Scissors beats Paper");
			humanScore++;
			roundResult = "win";
			return { humanChoice, computerChoice, roundResult };
		} else if (computerChoice === "rock") {
			console.log("You lose! Rock beats Scissors");
			computerScore++;
			roundResult = "lose";
			return { humanChoice, computerChoice, roundResult };
		} else {
			console.log("It's a tie! Scissors cannot beat Scissors");
			roundResult = "tie";
			return { humanChoice, computerChoice, roundResult };
		};
	};
};


// Define buttons
const button = document.querySelector("button");
const buttonRock = document.querySelector(".buttonRock");
const buttonPaper = document.querySelector(".buttonPaper");
const buttonScissors = document.querySelector(".buttonScissors");

// Define vars to show results and scores
const userScorePoints = document.getElementById("userScore");
const computerScorePoints = document.getElementById("computerScore");
const computersPick = document.getElementById("computersPick");
const showRoundResult = document.getElementById("roundResult");


// Set mouseover event for buttons
buttonRock.addEventListener("mouseover", () => {
	buttonRock.style.backgroundColor = "yellow";
	buttonRock.style.cursor = "pointer";
});

buttonRock.addEventListener("mouseout", () => {
	buttonRock.style.backgroundColor = "";
});

buttonPaper.addEventListener("mouseover", () => {
	buttonPaper.style.backgroundColor = "yellow";
	buttonPaper.style.cursor = "pointer";
});

buttonPaper.addEventListener("mouseout", () => {
	buttonPaper.style.backgroundColor = "";
});

buttonScissors.addEventListener("mouseover", () => {
	buttonScissors.style.backgroundColor = "yellow";
	buttonScissors.style.cursor = "pointer";
});

buttonScissors.addEventListener("mouseout", () => {
	buttonScissors.style.backgroundColor = "";
});


// Set logic to play a round when an object button is pressed
function clickHandler(humanChoice) {
	// Store result from playRound();
	result = playRound(humanChoice, getComputerChoice());
	computersPick.textContent = result.computerChoice.toUpperCase();

	if (result.roundResult === "win") {
		userScorePoints.textContent = humanScore;
		showRoundResult.textContent = "You win!";
	} else if (result.roundResult === "lose") {
		computerScorePoints.textContent = computerScore;
		showRoundResult.textContent = "You lose!";
	} else {
		showRoundResult.textContent = "It's a tie!";
	};
};


// Set onclick event listeners for buttons
buttonRock.onclick = () => clickHandler("rock");
buttonPaper.onclick = () => clickHandler("paper");
buttonScissors.onclick = () => clickHandler("scissors");