document.addEventListener('DOMContentLoaded', () => {
    const celebrationContainer = document.getElementById('celebration-container');
    const emojis = ['🎉', '🎊', '✨', '💫', '🌟', '🎈','🥰','😍','🥳','🤗'];

    function createEmoji() {
        const emoji = document.createElement('div');
        emoji.classList.add('emoji');
        emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];
        emoji.style.left = `${Math.random() * 100}vw`;
        emoji.style.bottom = '-2em'; // Start below the viewport
        emoji.style.animationDuration = `${Math.random() * 3 + 2}s`;
        celebrationContainer.appendChild(emoji);

        setTimeout(() => {
            emoji.remove();
        }, 5000);
    }

    for (let i = 0; i < 30; i++) {
        setTimeout(createEmoji, i * 100);
    }
});

function showLocation() {
    window.location.href = "https://maps.app.goo.gl/59FCEoJD4VcReP1o7";
}
