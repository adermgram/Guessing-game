let numberToGuess = Math.floor(Math.random() * 10) + 1;
let attempts = 0;

function makeGuess() {
    const guessInput = document.getElementById('guessInput');
    const feedback = document.getElementById('feedback');
    const attemptsDisplay = document.getElementById('attempts');
    feedback.style.color = 'red';
    attemptsDisplay.style.color = 'white';
    
    const guess = parseInt(guessInput.value);

    if (isNaN(guess) || guess < 1 || guess > 10) {
        feedback.style.color = '#ff2c2c';
        feedback.textContent = "Please enter a number between 1 and 10.";
        return;
    }

    if (guess < numberToGuess) {
        feedback.textContent = "Too low! Try again.";
        attempts++;
    } else if (guess > numberToGuess) {
        feedback.textContent = "Too high! Try again.";
        attempts++;
    } else {
        feedback.textContent = `🥳Congratulations! You've guessed the correct number ${numberToGuess} in ${attempts} attempts👏.`;
        feedback.style.color = '#0f0';
        guessInput.disabled = true;

        document.querySelector('button').disabled = true;
    }

    attemptsDisplay.textContent = `Attempts: ${attempts}`;
}