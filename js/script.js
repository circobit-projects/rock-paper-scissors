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