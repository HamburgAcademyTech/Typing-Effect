const typingElement = document.querySelector('.typing');

typingElement.addEventListener('animationend', () => {
    setTimeout(() => {
        typingElement.style.animation = 'none';  // Reset animation
        // Force reflow to restart the animation
        typingElement.offsetHeight; 
        typingElement.style.animation = '';  // Restart animation
    }, 1000); // Wait 1 second before restarting
});
