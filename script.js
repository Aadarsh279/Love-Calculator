// scripts/script.js

document.getElementById('love-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    const name1 = document.getElementById('name1').value.trim();
    const name2 = document.getElementById('name2').value.trim();

    if (name1 === '' || name2 === '') {
        displayResult('Please enter both names.');
        return;
    }

    const lovePercentage = Math.floor(Math.random() * 101); // Generate a random percentage between 0 and 100
    const message = `${name1} and ${name2} have a love compatibility of ${lovePercentage}% ❤️`;
    displayResult(message);
    showEmojis(); // Trigger emoji animation
});

// Function to display the result
function displayResult(message) {
    const resultDiv = document.getElementById('result');
    resultDiv.textContent = message; // Update the result text
    resultDiv.style.display = 'block'; // Make sure the result is visible
    resultDiv.classList.add('result-animation');
    
    // Remove the animation class after it finishes, so it can re-trigger next time
    setTimeout(() => resultDiv.classList.remove('result-animation'), 500);
}

// Function to show popping emojis
function showEmojis() {
    const emojiContainer = document.getElementById('emoji-container');
    emojiContainer.innerHTML = ''; // Clear previous emojis

    for (let i = 0; i < 30; i++) {
        const emoji = document.createElement('div');
        emoji.classList.add('emoji');
        emoji.textContent = '❤️'; // Love emoji
        emoji.style.left = Math.random() * 100 + 'vw'; // Random horizontal position
        emoji.style.animationDelay = Math.random() * 2 + 's'; // Random animation delay
        emojiContainer.appendChild(emoji);

        // Remove the emoji after animation completes
        setTimeout(() => {
            emoji.remove();
        }, 3000);
    }
}
