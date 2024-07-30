const randomNumber = Math.floor(Math.random() * 10) + 1;
let guesses = 3;

function checkGuess() {
    const userGuess = parseInt(prompt('Guess a number between 1 and 10:'));
    
    if (userGuess === randomNumber) {
        alert('Congratulations! You guessed the correct number.');
    } else {
        guesses--;
        if (guesses > 0) {
            let message = 'Incorrect guess. ';
            if (Math.abs(userGuess - randomNumber) <= 2) {
                message += 'You are close to the correct number.';
            } else {
                if (userGuess > randomNumber) {
                    message += 'Try a smaller number.';
                } else {
                    message += 'Try a larger number.';
                }
            }
            message += ' You have ' + guesses + ' guesses remaining.';
            alert(message);
        } else {
            alert('Sorry, you are out of guesses. The correct number was ' + randomNumber + '.');
        }
    }
}

   
