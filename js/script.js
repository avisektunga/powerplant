document.addEventListener('DOMContentLoaded', function() {
    const revealButtons = document.querySelectorAll('.reveal-answer');

    revealButtons.forEach(button => {
        button.addEventListener('click', function() {
            const answerElement = this.nextElementSibling; // Assumes the answer <p> is immediately after the button
            if (answerElement && answerElement.classList.contains('answer')) {
                if (answerElement.style.display === 'none' || answerElement.style.display === '') {
                    answerElement.style.display = 'block';
                    this.textContent = 'Hide Answer';
                } else {
                    answerElement.style.display = 'none';
                    this.textContent = 'Reveal Answer';
                }
            }
        });
    });
});