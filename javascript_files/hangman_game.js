/* Future additions:
    1) Allow user to Choose a topic
    2) Add more animation to win/lost
*/


// Define the words that can be guessed
const words = ["sushi", "computer", "cash", "everything", "nothing"];

// Global variables
let correct_word = "";
let guesses = [];
let incorrect_guesses = 0;

const hangman_images = [
    "  +---+\n  |   |\n      |\n      |\n      |\n      |\n=========",
    "  +---+\n  |   |\n  O   |\n      |\n      |\n      |\n=========",
    "  +---+\n  |   |\n  O   |\n  |   |\n      |\n      |\n=========",
    "  +---+\n  |   |\n  O   |\n /|   |\n      |\n      |\n=========",
    "  +---+\n  |   |\n  O   |\n /|\\  |\n      |\n      |\n=========",
    "  +---+\n  |   |\n  O   |\n /|\\  |\n /    |\n      |\n=========",
    "  +---+\n  |   |\n  O   |\n /|\\  |\n / \\  |\n      |\n========="
  ];

// Function to choose a word randomly from list of words
function choose_word() {
  const random_index = Math.floor(Math.random() * words.length);
  return words[random_index];
}

// Function to display the word (which letters are guessed and the blanks)
function display_word() {
  let word_display = "";
  for (const letter of correct_word) {
    if (guesses.includes(letter)) {
      word_display += letter;
    } else {
      word_display += "_";
    }
  }
  const word_element = document.getElementById("word");
  word_element.textContent = word_display;
}

// Function to display incorrect guesses
function display_incorrect_guesses() {
  const incorrect_guesses_element = document.getElementById("incorrect_guesses");
  incorrect_guesses_element.textContent = "Incorrect guesses: " + incorrect_guesses;
}

// Function to display the hangman as user gets answers wrong
function display_hangman() {
    const hangman_element = document.getElementById("hangman");
    hangman_element.textContent = hangman_images[incorrect_guesses];
}

// Function to display a win 
function display_win() {
    const win_element = document.getElementById("win_lose");
    win_element.style.display = "block"; // make the element visible again if it was hidden
    win_element.style.color = "darkorange";
    win_element.textContent = "CONGRATS YOU WIN!!!";
}
// Function to display a lost 
function display_lost() {
    const lost_element = document.getElementById("win_lose");
    lost_element.style.display = "block";
    lost_element.style.color = "red";
    lost_element.textContent = "You lost, try again!";
}

function display_reset() {
    let container = document.createElement("div");
    container.id = ".container";
    let resetButton = document.createElement("button");
    resetButton.textContent = "Reset Game";
    container.appendChild(resetButton);
    // Append container to body
    document.body.appendChild(container);
  
    resetButton.addEventListener("click", function() {
      reset_game();
      resetButton.style.display = "none"; // hide reset button after game is reset
      document.getElementById("win_lose").style.display = "none"; // hide win_lose text
    });

}

// Function to prompt and validate a letter guess
function handle_guess() {
    const guess_input = document.getElementById("guess_input");
    const guess = guess_input.value.toLowerCase();
    guess_input.value = "";
    let cur_user_guess_word = "";

    if (guesses.includes(guess)) {
        alert("You already guessed that letter!");
    } 
    // correct guess
    else if (correct_word.includes(guess)) {
        guesses.push(guess);
        display_word();

    } 
    // incorrect guess
    else {
        guesses.push(guess);
        incorrect_guesses++;
        display_word();
        display_incorrect_guesses();
        display_hangman();
    }
    // Check if won
    for (const letter of correct_word) {
        if (guesses.includes(letter)) {
            cur_user_guess_word += letter;
        } 
    }
    // If won
    if (cur_user_guess_word == correct_word) {
        display_win();
        display_reset();
    }
    // If lost
    if (incorrect_guesses >= 6) {
        display_lost();
        display_reset();
    }
}

// Function to reset the game
function reset_game() {
    correct_word = choose_word();
    guesses = [];
    incorrect_guesses = 0;
    display_word();
    display_incorrect_guesses();
    display_hangman();
}

// Function to start the game
function start_game() {
  reset_game();
  const guess_btn = document.getElementById("guess_btn");
  guess_btn.addEventListener("click", handle_guess);
}

start_game();
