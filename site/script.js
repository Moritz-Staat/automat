let timeout;

function showScreensaver() {
    const screensaver = document.getElementById('screensaver');
    const video = document.getElementById('screensaverVideo');
    screensaver.classList.remove('hidden');
    video.play();
}

function hideScreensaver() {
    const screensaver = document.getElementById('screensaver');
    const video = document.getElementById('screensaverVideo');
    screensaver.classList.add('hidden');
    video.pause();
    video.currentTime = 0; // Optional: Video von vorne abspielen
}

function resetTimer() {
    hideScreensaver();
    clearTimeout(timeout);
    timeout = setTimeout(showScreensaver, 10000); // 10 Sekunden
}

document.addEventListener('mousemove', resetTimer);
document.addEventListener('keydown', resetTimer);

resetTimer(); // Timer beim Laden der Seite starten
