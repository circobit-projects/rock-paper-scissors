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


// Logic to play one round
function playRound(humanChoice, computerChoice) {
	// If human picks up Rock
	if (humanChoice === "rock") {
		if (computerChoice === "scissors") {
			console.log("You win! Rock beats Scissors");
			humanScore++;
		} else if (computerChoice === "paper") {
			console.log("You lose! Paper beats Rock");
			computerScore++;
		} else {
			console.log("It's a tie! Rock cannot beat Rock");
		};
	};

	// If human picks up Paper
	if (humanChoice === "paper") {
		if (computerChoice === "rock") {
			console.log("You win! Paper beats Rock");
			humanScore++;
		} else if (computerChoice === "scissors") {
			console.log("You lose! Scissors beats Paper");
			computerScore++;
		} else {
			console.log("It's a tie! Paper cannot beat Paper");
		};
	};

	// If human picks up Scissors
	if (humanChoice === "scissors") {
		if (computerChoice === "paper") {
			console.log("You win! Scissors beats Paper");
			humanScore++;
		} else if (computerChoice === "rock") {
			console.log("You lose! Rock beats Scissors");
			computerScore++;
		} else {
			console.log("It's a tie! Scissors cannot beat Scissors");
		};
	};
};


// Logic to play the game in a desired number of rounds
function playGame() {
	// Set rounds to 5
	rounds = 5

	while (rounds > 0) {
		// Store human and computer choices
		const humanSelection = getHumanChoice();
		const computerSelection = getComputerChoice();
		// Print choices
		console.log("╔ Your selection: " + humanSelection);
		console.log("╚ Computer selection: " + computerSelection);

		playRound(humanSelection, computerSelection);
		rounds--;
	};

	if (humanScore > computerScore) {
		console.log(`» FINAL RESULTS » Congratulations! You win. Your score: ${humanScore}. Computer score: ${computerScore}.`)
	} else {
		console.log(`» FINAL RESULTS » You lost! Computer score: ${computerScore}. Your score: ${humanScore}.`)
	};
};


// Play Game
playGame();