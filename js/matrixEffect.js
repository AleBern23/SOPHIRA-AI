document.addEventListener("DOMContentLoaded", function() {
    const target = document.querySelector('.leftAbout h2');
    const text = target.textContent;
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let iterations = 0;
    let interval;

    function randomChar() {
        return characters[Math.floor(Math.random() * characters.length)];
    }

    function matrixEffect() {
        clearInterval(interval); // Clear any existing interval
        iterations = 0; // Reset iterations
        interval = setInterval(() => {
            target.textContent = text
                .split('')
                .map((char, index) => {
                    if (index < iterations) {
                        return text[index];
                    }
                    return randomChar();
                })
                .join('');

            if (iterations >= text.length) {
                clearInterval(interval);
            }

            iterations += 1 / 3; // Adjust speed of completion
        }, 50); // Adjust speed of character change
    }

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                matrixEffect();
            }
        });
    });

    observer.observe(target);
});